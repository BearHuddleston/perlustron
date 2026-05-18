var On={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ki={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Xd=0,Su=1,$d=2;var fo=1,qd=2,ir=3,mi=0,Jt=1,Mn=2,ei=0,ls=1,po=2,Mu=3,bu=4,Yd=5;var Di=100,Zd=101,Kd=102,Jd=103,jd=104,Qd=200,ef=201,tf=202,nf=203,Ta=204,wa=205,sf=206,rf=207,of=208,af=209,lf=210,cf=211,uf=212,hf=213,df=214,Aa=0,Ca=1,Ra=2,cs=3,Ia=4,Pa=5,La=6,Na=7,Eu=0,ff=1,pf=2,Bn=0,Tu=1,wu=2,Au=3,Cu=4,Ru=5,Iu=6,Pu=7;var Lu=300,zi=301,hs=302,al=303,ll=304,mo=306,Da=1e3,Zn=1001,Ua=1002,kt=1003,mf=1004;var go=1005;var Ht=1006,cl=1007;var Vi=1008;var nn=1009,Nu=1010,Du=1011,sr=1012,ul=1013,kn=1014,bn=1015,ti=1016,hl=1017,dl=1018,rr=1020,Uu=35902,Fu=35899,Ou=1021,Bu=1022,En=1023,Jn=1026,Hi=1027,fl=1028,pl=1029,Gi=1030,ml=1031;var gl=1033,_o=33776,xo=33777,vo=33778,yo=33779,_l=35840,xl=35841,vl=35842,yl=35843,Sl=36196,Ml=37492,bl=37496,El=37488,Tl=37489,So=37490,wl=37491,Al=37808,Cl=37809,Rl=37810,Il=37811,Pl=37812,Ll=37813,Nl=37814,Dl=37815,Ul=37816,Fl=37817,Ol=37818,Bl=37819,kl=37820,zl=37821,Vl=36492,Hl=36494,Gl=36495,Wl=36283,Xl=36284,Mo=36285,$l=36286;var zr=2300,Fa=2301,Ea=2302,cu=2303,uu=2400,hu=2401,du=2402;var gf=3200;var ku=0,_f=1,vi="",Kt="srgb",Vr="srgb-linear",Hr="linear",Qe="srgb";var as=7680;var fu=519,xf=512,vf=513,yf=514,ql=515,Sf=516,Mf=517,Yl=518,bf=519,pu=35044,zu=35048;var Vu="300 es",Dn=2e3,Xs=2001;function a_(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function l_(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Gr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ef(){let n=Gr("canvas");return n.style.display="block",n}var pd={},$s=null;function Hu(...n){let e="THREE."+n.shift();$s?$s("log",e,...n):console.log(e,...n)}function Tf(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Te(...n){n=Tf(n);let e="THREE."+n.shift();if($s)$s("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ae(...n){n=Tf(n);let e="THREE."+n.shift();if($s)$s("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Oa(...n){let e=n.join(" ");e in pd||(pd[e]=!0,Te(...n))}function wf(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Af={[Aa]:Ca,[Ra]:La,[Ia]:Na,[cs]:Pa,[Ca]:Aa,[La]:Ra,[Na]:Ia,[Pa]:cs},Un=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],md=1234567,Br=Math.PI/180,qs=180/Math.PI;function or(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function We(n,e,t){return Math.max(e,Math.min(t,n))}function Gu(n,e){return(n%e+e)%e}function c_(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function u_(n,e,t){return n!==e?(t-n)/(e-n):0}function kr(n,e,t){return(1-t)*n+t*e}function h_(n,e,t,i){return kr(n,e,1-Math.exp(-t*i))}function d_(n,e=1){return e-Math.abs(Gu(n,e*2)-e)}function f_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function p_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function m_(n,e){return n+Math.floor(Math.random()*(e-n+1))}function g_(n,e){return n+Math.random()*(e-n)}function __(n){return n*(.5-Math.random())}function x_(n){n!==void 0&&(md=n);let e=md+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function v_(n){return n*Br}function y_(n){return n*qs}function S_(n){return(n&n-1)===0&&n!==0}function M_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function b_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function E_(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),d=o((e+i)/2),h=r((e-i)/2),u=o((e-i)/2),f=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*d,l*h,l*u,a*c);break;case"YZY":n.set(l*u,a*d,l*h,a*c);break;case"ZXZ":n.set(l*h,l*u,a*d,a*c);break;case"XZX":n.set(a*d,l*g,l*f,a*c);break;case"YXY":n.set(l*f,a*d,l*g,a*c);break;case"ZYZ":n.set(l*g,l*f,a*d,a*c);break;default:Te("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Gs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Zt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Wu={DEG2RAD:Br,RAD2DEG:qs,generateUUID:or,clamp:We,euclideanModulo:Gu,mapLinear:c_,inverseLerp:u_,lerp:kr,damp:h_,pingpong:d_,smoothstep:f_,smootherstep:p_,randInt:m_,randFloat:g_,randFloatSpread:__,seededRandom:x_,degToRad:v_,radToDeg:y_,isPowerOfTwo:S_,ceilPowerOfTwo:M_,floorPowerOfTwo:b_,setQuaternionFromProperEuler:E_,normalize:Zt,denormalize:Gs},Ce=class n{static{n.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},dn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],d=i[s+2],h=i[s+3],u=r[o+0],f=r[o+1],g=r[o+2],y=r[o+3];if(h!==y||l!==u||c!==f||d!==g){let m=l*u+c*f+d*g+h*y;m<0&&(u=-u,f=-f,g=-g,y=-y,m=-m);let p=1-a;if(m<.9995){let S=Math.acos(m),b=Math.sin(S);p=Math.sin(p*S)/b,a=Math.sin(a*S)/b,l=l*p+u*a,c=c*p+f*a,d=d*p+g*a,h=h*p+y*a}else{l=l*p+u*a,c=c*p+f*a,d=d*p+g*a,h=h*p+y*a;let S=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=S,c*=S,d*=S,h*=S}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],d=i[s+3],h=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+d*h+l*f-c*u,e[t+1]=l*g+d*u+c*h-a*f,e[t+2]=c*g+d*f+a*u-l*h,e[t+3]=d*g-a*h-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(s/2),h=a(r/2),u=l(i/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*d*h+c*f*g,this._y=c*f*h-u*d*g,this._z=c*d*g+u*f*h,this._w=c*d*h-u*f*g;break;case"YXZ":this._x=u*d*h+c*f*g,this._y=c*f*h-u*d*g,this._z=c*d*g-u*f*h,this._w=c*d*h+u*f*g;break;case"ZXY":this._x=u*d*h-c*f*g,this._y=c*f*h+u*d*g,this._z=c*d*g+u*f*h,this._w=c*d*h-u*f*g;break;case"ZYX":this._x=u*d*h-c*f*g,this._y=c*f*h+u*d*g,this._z=c*d*g-u*f*h,this._w=c*d*h+u*f*g;break;case"YZX":this._x=u*d*h+c*f*g,this._y=c*f*h+u*d*g,this._z=c*d*g-u*f*h,this._w=c*d*h-u*f*g;break;case"XZY":this._x=u*d*h-c*f*g,this._y=c*f*h-u*d*g,this._z=c*d*g+u*f*h,this._w=c*d*h+u*f*g;break;default:Te("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],d=t[6],h=t[10],u=i+a+h;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(d-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>h){let f=2*Math.sqrt(1+i-a-h);this._w=(d-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>h){let f=2*Math.sqrt(1+a-i-h);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+d)/f}else{let f=2*Math.sqrt(1+h-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=i*d+o*a+s*c-r*l,this._y=s*d+o*l+r*a-i*c,this._z=r*d+o*c+i*l-s*a,this._w=o*d-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class n{static{n.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),d=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*d,this.y=i+l*d+a*c-r*h,this.z=s+l*h+r*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return zc.copy(this).projectOnVector(e),this.sub(zc)}reflect(e){return this.sub(zc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},zc=new I,gd=new dn,Le=class n{static{n.prototype.isMatrix3=!0}constructor(e,t,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let d=this.elements;return d[0]=e,d[1]=s,d[2]=a,d[3]=t,d[4]=r,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],h=i[7],u=i[2],f=i[5],g=i[8],y=s[0],m=s[3],p=s[6],S=s[1],b=s[4],M=s[7],R=s[2],T=s[5],P=s[8];return r[0]=o*y+a*S+l*R,r[3]=o*m+a*b+l*T,r[6]=o*p+a*M+l*P,r[1]=c*y+d*S+h*R,r[4]=c*m+d*b+h*T,r[7]=c*p+d*M+h*P,r[2]=u*y+f*S+g*R,r[5]=u*m+f*b+g*T,r[8]=u*p+f*M+g*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*a*c-i*r*d+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=d*o-a*c,u=a*l-d*r,f=c*r-o*l,g=t*h+i*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=h*y,e[1]=(s*c-d*i)*y,e[2]=(a*i-s*o)*y,e[3]=u*y,e[4]=(d*t-s*l)*y,e[5]=(s*r-a*t)*y,e[6]=f*y,e[7]=(i*l-c*t)*y,e[8]=(o*t-i*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Vc.makeScale(e,t)),this}rotate(e){return this.premultiply(Vc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Vc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Vc=new Le,_d=new Le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xd=new Le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function T_(){let n={enabled:!0,workingColorSpace:Vr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Qe&&(s.r=pi(s.r),s.g=pi(s.g),s.b=pi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Qe&&(s.r=Ws(s.r),s.g=Ws(s.g),s.b=Ws(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===vi?Hr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Oa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Oa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Vr]:{primaries:e,whitePoint:i,transfer:Hr,toXYZ:_d,fromXYZ:xd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Kt},outputColorSpaceConfig:{drawingBufferColorSpace:Kt}},[Kt]:{primaries:e,whitePoint:i,transfer:Qe,toXYZ:_d,fromXYZ:xd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Kt}}}),n}var Ze=T_();function pi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ws(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Is,Ba=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Is===void 0&&(Is=Gr("canvas")),Is.width=e.width,Is.height=e.height;let s=Is.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Is}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Gr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=pi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(pi(t[i]/255)*255):t[i]=pi(t[i]);return{data:t,width:e.width,height:e.height}}else return Te("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},w_=0,Ys=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:w_++}),this.uuid=or(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Hc(s[o].image)):r.push(Hc(s[o]))}else r=Hc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Hc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ba.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Te("Texture: Unable to serialize Texture."),{})}var A_=0,Gc=new I,en=class n extends Un{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Zn,s=Zn,r=Ht,o=Vi,a=En,l=nn,c=n.DEFAULT_ANISOTROPY,d=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:A_++}),this.uuid=or(),this.name="",this.source=new Ys(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Gc).x}get height(){return this.source.getSize(Gc).y}get depth(){return this.source.getSize(Gc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Te(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Te(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Da:e.x=e.x-Math.floor(e.x);break;case Zn:e.x=e.x<0?0:1;break;case Ua:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Da:e.y=e.y-Math.floor(e.y);break;case Zn:e.y=e.y<0?0:1;break;case Ua:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=Lu;en.DEFAULT_ANISOTROPY=1;var vt=class n{static{n.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],d=l[4],h=l[8],u=l[1],f=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,M=(f+1)/2,R=(p+1)/2,T=(d+u)/4,P=(h+y)/4,x=(g+m)/4;return b>M&&b>R?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=T/i,r=P/i):M>R?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=T/s,r=x/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=P/r,s=x/r),this.set(i,s,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(h-y)*(h-y)+(u-d)*(u-d));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(h-y)/S,this.z=(u-d)/S,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ka=class extends Un{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new en(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:Ht,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ys(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}},fn=class extends ka{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Wr=class extends en{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=kt,this.minFilter=kt,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var za=class extends en{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=kt,this.minFilter=kt,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var st=class n{static{n.prototype.isMatrix4=!0}constructor(e,t,i,s,r,o,a,l,c,d,h,u,f,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,d,h,u,f,g,y,m)}set(e,t,i,s,r,o,a,l,c,d,h,u,f,g,y,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=d,p[10]=h,p[14]=u,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Ps.setFromMatrixColumn(e,0).length(),r=1/Ps.setFromMatrixColumn(e,1).length(),o=1/Ps.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let u=o*d,f=o*h,g=a*d,y=a*h;t[0]=l*d,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=u-y*c,t[9]=-a*l,t[2]=y-u*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*d,f=l*h,g=c*d,y=c*h;t[0]=u+y*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*d,t[9]=-a,t[2]=f*a-g,t[6]=y+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*d,f=l*h,g=c*d,y=c*h;t[0]=u-y*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*d,t[9]=y-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*d,f=o*h,g=a*d,y=a*h;t[0]=l*d,t[4]=g*c-f,t[8]=u*c+y,t[1]=l*h,t[5]=y*c+u,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,f=o*c,g=a*l,y=a*c;t[0]=l*d,t[4]=y-u*h,t[8]=g*h+f,t[1]=h,t[5]=o*d,t[9]=-a*d,t[2]=-c*d,t[6]=f*h+g,t[10]=u-y*h}else if(e.order==="XZY"){let u=o*l,f=o*c,g=a*l,y=a*c;t[0]=l*d,t[4]=-h,t[8]=c*d,t[1]=u*h+y,t[5]=o*d,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*d,t[10]=y*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(C_,e,R_)}lookAt(e,t,i){let s=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),Ai.crossVectors(i,un),Ai.lengthSq()===0&&(Math.abs(i.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),Ai.crossVectors(i,un)),Ai.normalize(),Qo.crossVectors(un,Ai),s[0]=Ai.x,s[4]=Qo.x,s[8]=un.x,s[1]=Ai.y,s[5]=Qo.y,s[9]=un.y,s[2]=Ai.z,s[6]=Qo.z,s[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],h=i[5],u=i[9],f=i[13],g=i[2],y=i[6],m=i[10],p=i[14],S=i[3],b=i[7],M=i[11],R=i[15],T=s[0],P=s[4],x=s[8],w=s[12],L=s[1],C=s[5],U=s[9],G=s[13],W=s[2],A=s[6],O=s[10],k=s[14],K=s[3],J=s[7],ie=s[11],pe=s[15];return r[0]=o*T+a*L+l*W+c*K,r[4]=o*P+a*C+l*A+c*J,r[8]=o*x+a*U+l*O+c*ie,r[12]=o*w+a*G+l*k+c*pe,r[1]=d*T+h*L+u*W+f*K,r[5]=d*P+h*C+u*A+f*J,r[9]=d*x+h*U+u*O+f*ie,r[13]=d*w+h*G+u*k+f*pe,r[2]=g*T+y*L+m*W+p*K,r[6]=g*P+y*C+m*A+p*J,r[10]=g*x+y*U+m*O+p*ie,r[14]=g*w+y*G+m*k+p*pe,r[3]=S*T+b*L+M*W+R*K,r[7]=S*P+b*C+M*A+R*J,r[11]=S*x+b*U+M*O+R*ie,r[15]=S*w+b*G+M*k+R*pe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],h=e[6],u=e[10],f=e[14],g=e[3],y=e[7],m=e[11],p=e[15],S=l*f-c*u,b=a*f-c*h,M=a*u-l*h,R=o*f-c*d,T=o*u-l*d,P=o*h-a*d;return t*(y*S-m*b+p*M)-i*(g*S-m*R+p*T)+s*(g*b-y*R+p*P)-r*(g*M-y*T+m*P)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=e[9],u=e[10],f=e[11],g=e[12],y=e[13],m=e[14],p=e[15],S=t*a-i*o,b=t*l-s*o,M=t*c-r*o,R=i*l-s*a,T=i*c-r*a,P=s*c-r*l,x=d*y-h*g,w=d*m-u*g,L=d*p-f*g,C=h*m-u*y,U=h*p-f*y,G=u*p-f*m,W=S*G-b*U+M*C+R*L-T*w+P*x;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/W;return e[0]=(a*G-l*U+c*C)*A,e[1]=(s*U-i*G-r*C)*A,e[2]=(y*P-m*T+p*R)*A,e[3]=(u*T-h*P-f*R)*A,e[4]=(l*L-o*G-c*w)*A,e[5]=(t*G-s*L+r*w)*A,e[6]=(m*M-g*P-p*b)*A,e[7]=(d*P-u*M+f*b)*A,e[8]=(o*U-a*L+c*x)*A,e[9]=(i*L-t*U-r*x)*A,e[10]=(g*T-y*M+p*S)*A,e[11]=(h*M-d*T-f*S)*A,e[12]=(a*w-o*C-l*x)*A,e[13]=(t*C-i*w+s*x)*A,e[14]=(y*b-g*R-m*S)*A,e[15]=(d*R-h*b+u*S)*A,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,d=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,d*a+i,d*l-s*o,0,c*l-s*a,d*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,d=o+o,h=a+a,u=r*c,f=r*d,g=r*h,y=o*d,m=o*h,p=a*h,S=l*c,b=l*d,M=l*h,R=i.x,T=i.y,P=i.z;return s[0]=(1-(y+p))*R,s[1]=(f+M)*R,s[2]=(g-b)*R,s[3]=0,s[4]=(f-M)*T,s[5]=(1-(u+p))*T,s[6]=(m+S)*T,s[7]=0,s[8]=(g+b)*P,s[9]=(m-S)*P,s[10]=(1-(u+y))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinant();if(r===0)return i.set(1,1,1),t.identity(),this;let o=Ps.set(s[0],s[1],s[2]).length(),a=Ps.set(s[4],s[5],s[6]).length(),l=Ps.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Pn.copy(this);let c=1/o,d=1/a,h=1/l;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=d,Pn.elements[5]*=d,Pn.elements[6]*=d,Pn.elements[8]*=h,Pn.elements[9]*=h,Pn.elements[10]*=h,t.setFromRotationMatrix(Pn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=Dn,l=!1){let c=this.elements,d=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s),g,y;if(l)g=r/(o-r),y=o*r/(o-r);else if(a===Dn)g=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===Xs)g=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Dn,l=!1){let c=this.elements,d=2/(t-e),h=2/(i-s),u=-(t+e)/(t-e),f=-(i+s)/(i-s),g,y;if(l)g=1/(o-r),y=o/(o-r);else if(a===Dn)g=-2/(o-r),y=-(o+r)/(o-r);else if(a===Xs)g=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Ps=new I,Pn=new st,C_=new I(0,0,0),R_=new I(1,1,1),Ai=new I,Qo=new I,un=new I,vd=new st,yd=new dn,jn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],d=s[9],h=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-We(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:Te("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return vd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yd.setFromEuler(this),this.setFromQuaternion(yd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};jn.DEFAULT_ORDER="XYZ";var Zs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},I_=0,Sd=new I,Ls=new dn,ci=new st,ea=new I,Pr=new I,P_=new I,L_=new dn,Md=new I(1,0,0),bd=new I(0,1,0),Ed=new I(0,0,1),Td={type:"added"},N_={type:"removed"},Ns={type:"childadded",child:null},Wc={type:"childremoved",child:null},At=class n extends Un{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:I_++}),this.uuid=or(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new I,t=new jn,i=new dn,s=new I(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new st},normalMatrix:{value:new Le}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(Md,e)}rotateY(e){return this.rotateOnAxis(bd,e)}rotateZ(e){return this.rotateOnAxis(Ed,e)}translateOnAxis(e,t){return Sd.copy(e).applyQuaternion(this.quaternion),this.position.add(Sd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Md,e)}translateY(e){return this.translateOnAxis(bd,e)}translateZ(e){return this.translateOnAxis(Ed,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ea.copy(e):ea.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(Pr,ea,this.up):ci.lookAt(ea,Pr,this.up),this.quaternion.setFromRotationMatrix(ci),s&&(ci.extractRotation(s.matrixWorld),Ls.setFromRotationMatrix(ci),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ae("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Td),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null):Ae("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(N_),Wc.child=e,this.dispatchEvent(Wc),Wc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Td),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,e,P_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,L_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),h=o(e.shapes),u=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};At.DEFAULT_UP=new I(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Kn=class extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}},D_={type:"move"},Ks=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,i),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=d.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(D_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Kn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Cf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},ta={h:0,s:0,l:0};function Xc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var ze=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Ze.workingColorSpace){if(e=Gu(e,1),t=We(t,0,1),i=We(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Xc(o,r,e+1/3),this.g=Xc(o,r,e),this.b=Xc(o,r,e-1/3)}return Ze.colorSpaceToWorking(this,s),this}setStyle(e,t=Kt){function i(r){r!==void 0&&parseFloat(r)<1&&Te("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Te("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Te("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){let i=Cf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Te("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pi(e.r),this.g=pi(e.g),this.b=pi(e.b),this}copyLinearToSRGB(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return Ze.workingToColorSpace(Xt.copy(this),e),Math.round(We(Xt.r*255,0,255))*65536+Math.round(We(Xt.g*255,0,255))*256+Math.round(We(Xt.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(Xt.copy(this),t);let i=Xt.r,s=Xt.g,r=Xt.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,d=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=d<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Kt){Ze.workingToColorSpace(Xt.copy(this),e);let t=Xt.r,i=Xt.g,s=Xt.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ci),this.setHSL(Ci.h+e,Ci.s+t,Ci.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ci),e.getHSL(ta);let i=kr(Ci.h,ta.h,t),s=kr(Ci.s,ta.s,t),r=kr(Ci.l,ta.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xt=new ze;ze.NAMES=Cf;var Xr=class extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jn,this.environmentIntensity=1,this.environmentRotation=new jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ln=new I,ui=new I,$c=new I,hi=new I,Ds=new I,Us=new I,wd=new I,qc=new I,Yc=new I,Zc=new I,Kc=new vt,Jc=new vt,jc=new vt,Ni=class n{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Ln.subVectors(e,t),s.cross(Ln);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Ln.subVectors(s,t),ui.subVectors(i,t),$c.subVectors(e,t);let o=Ln.dot(Ln),a=Ln.dot(ui),l=Ln.dot($c),c=ui.dot(ui),d=ui.dot($c),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let u=1/h,f=(c*l-a*d)*u,g=(o*d-a*l)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,hi.x),l.addScaledVector(o,hi.y),l.addScaledVector(a,hi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Kc.setScalar(0),Jc.setScalar(0),jc.setScalar(0),Kc.fromBufferAttribute(e,t),Jc.fromBufferAttribute(e,i),jc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Kc,r.x),o.addScaledVector(Jc,r.y),o.addScaledVector(jc,r.z),o}static isFrontFacing(e,t,i,s){return Ln.subVectors(i,t),ui.subVectors(e,t),Ln.cross(ui).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Ln.cross(ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Ds.subVectors(s,i),Us.subVectors(r,i),qc.subVectors(e,i);let l=Ds.dot(qc),c=Us.dot(qc);if(l<=0&&c<=0)return t.copy(i);Yc.subVectors(e,s);let d=Ds.dot(Yc),h=Us.dot(Yc);if(d>=0&&h<=d)return t.copy(s);let u=l*h-d*c;if(u<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(i).addScaledVector(Ds,o);Zc.subVectors(e,r);let f=Ds.dot(Zc),g=Us.dot(Zc);if(g>=0&&f<=g)return t.copy(r);let y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Us,a);let m=d*g-f*h;if(m<=0&&h-d>=0&&f-g>=0)return wd.subVectors(r,s),a=(h-d)/(h-d+(f-g)),t.copy(s).addScaledVector(wd,a);let p=1/(m+y+u);return o=y*p,a=u*p,t.copy(i).addScaledVector(Ds,o).addScaledVector(Us,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Qn=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Nn):Nn.fromBufferAttribute(r,o),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),na.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),na.copy(i.boundingBox)),na.applyMatrix4(e.matrixWorld),this.union(na)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lr),ia.subVectors(this.max,Lr),Fs.subVectors(e.a,Lr),Os.subVectors(e.b,Lr),Bs.subVectors(e.c,Lr),Ri.subVectors(Os,Fs),Ii.subVectors(Bs,Os),is.subVectors(Fs,Bs);let t=[0,-Ri.z,Ri.y,0,-Ii.z,Ii.y,0,-is.z,is.y,Ri.z,0,-Ri.x,Ii.z,0,-Ii.x,is.z,0,-is.x,-Ri.y,Ri.x,0,-Ii.y,Ii.x,0,-is.y,is.x,0];return!Qc(t,Fs,Os,Bs,ia)||(t=[1,0,0,0,1,0,0,0,1],!Qc(t,Fs,Os,Bs,ia))?!1:(sa.crossVectors(Ri,Ii),t=[sa.x,sa.y,sa.z],Qc(t,Fs,Os,Bs,ia))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},di=[new I,new I,new I,new I,new I,new I,new I,new I],Nn=new I,na=new Qn,Fs=new I,Os=new I,Bs=new I,Ri=new I,Ii=new I,is=new I,Lr=new I,ia=new I,sa=new I,ss=new I;function Qc(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ss.fromArray(n,r);let a=s.x*Math.abs(ss.x)+s.y*Math.abs(ss.y)+s.z*Math.abs(ss.z),l=e.dot(ss),c=t.dot(ss),d=i.dot(ss);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}var wt=new I,ra=new Ce,U_=0,Bt=class extends Un{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:U_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=pu,this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ra.fromBufferAttribute(this,t),ra.applyMatrix3(e),this.setXY(t,ra.x,ra.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Gs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Zt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),i=Zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),i=Zt(i,this.array),s=Zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),i=Zt(i,this.array),s=Zt(s,this.array),r=Zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pu&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var $r=class extends Bt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var qr=class extends Bt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var rt=class extends Bt{constructor(e,t,i){super(new Float32Array(e),t,i)}},F_=new Qn,Nr=new I,eu=new I,tn=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):F_.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Nr.subVectors(e,this.center);let t=Nr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Nr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(eu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Nr.copy(e.center).add(eu)),this.expandByPoint(Nr.copy(e.center).sub(eu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},O_=0,yn=new st,tu=new At,ks=new I,hn=new Qn,Dr=new Qn,Ot=new I,Ct=class n extends Un{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:O_++}),this.uuid=or(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(a_(e)?qr:$r)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Le().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,t,i){return yn.makeTranslation(e,t,i),this.applyMatrix4(yn),this}scale(e,t,i){return yn.makeScale(e,t,i),this.applyMatrix4(yn),this}lookAt(e){return tu.lookAt(e),tu.updateMatrix(),this.applyMatrix4(tu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new rt(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Te("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ae("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ae('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ae("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let i=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Dr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(hn.min,Dr.min),hn.expandByPoint(Ot),Ot.addVectors(hn.max,Dr.max),hn.expandByPoint(Ot)):(hn.expandByPoint(Dr.min),hn.expandByPoint(Dr.max))}hn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Ot.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ot));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Ot.fromBufferAttribute(a,c),l&&(ks.fromBufferAttribute(e,c),Ot.add(ks)),s=Math.max(s,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ae('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ae("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bt(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let x=0;x<i.count;x++)a[x]=new I,l[x]=new I;let c=new I,d=new I,h=new I,u=new Ce,f=new Ce,g=new Ce,y=new I,m=new I;function p(x,w,L){c.fromBufferAttribute(i,x),d.fromBufferAttribute(i,w),h.fromBufferAttribute(i,L),u.fromBufferAttribute(r,x),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,L),d.sub(c),h.sub(c),f.sub(u),g.sub(u);let C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(y.copy(d).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(C),m.copy(h).multiplyScalar(f.x).addScaledVector(d,-g.x).multiplyScalar(C),a[x].add(y),a[w].add(y),a[L].add(y),l[x].add(m),l[w].add(m),l[L].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let x=0,w=S.length;x<w;++x){let L=S[x],C=L.start,U=L.count;for(let G=C,W=C+U;G<W;G+=3)p(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let b=new I,M=new I,R=new I,T=new I;function P(x){R.fromBufferAttribute(s,x),T.copy(R);let w=a[x];b.copy(w),b.sub(R.multiplyScalar(R.dot(w))).normalize(),M.crossVectors(T,w);let C=M.dot(l[x])<0?-1:1;o.setXYZW(x,b.x,b.y,b.z,C)}for(let x=0,w=S.length;x<w;++x){let L=S[x],C=L.start,U=L.count;for(let G=C,W=C+U;G<W;G+=3)P(e.getX(G+0)),P(e.getX(G+1)),P(e.getX(G+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Bt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,d=new I,h=new I;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),y=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),d.subVectors(o,r),h.subVectors(s,r),d.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(d),l.add(d),c.add(d),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),d.subVectors(o,r),h.subVectors(s,r),d.cross(h),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,l){let c=a.array,d=a.itemSize,h=a.normalized,u=new c.constructor(l.length*d),f=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?f=l[y]*a.data.stride+a.offset:f=l[y]*d;for(let p=0;p<d;p++)u[g++]=c[f++]}return new Bt(u,d,h)}if(this.index===null)return Te("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let d=0,h=c.length;d<h;d++){let u=c[d],f=e(u,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let h=0,u=c.length;h<u;h++){let f=c[h];d.push(f.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let d=s[c];this.setAttribute(c,d.clone(t))}let r=e.morphAttributes;for(let c in r){let d=[],h=r[c];for(let u=0,f=h.length;u<f;u++)d.push(h[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,d=o.length;c<d;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};var B_=0,gi=class extends Un{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:B_++}),this.uuid=or(),this.name="",this.type="Material",this.blending=ls,this.side=mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ta,this.blendDst=wa,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Te(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Te(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ls&&(i.blending=this.blending),this.side!==mi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ta&&(i.blendSrc=this.blendSrc),this.blendDst!==wa&&(i.blendDst=this.blendDst),this.blendEquation!==Di&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==cs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==as&&(i.stencilFail=this.stencilFail),this.stencilZFail!==as&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==as&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var fi=new I,nu=new I,oa=new I,Pi=new I,iu=new I,aa=new I,su=new I,_i=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,t),fi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){nu.copy(e).add(t).multiplyScalar(.5),oa.copy(t).sub(e).normalize(),Pi.copy(this.origin).sub(nu);let r=e.distanceTo(t)*.5,o=-this.direction.dot(oa),a=Pi.dot(this.direction),l=-Pi.dot(oa),c=Pi.lengthSq(),d=Math.abs(1-o*o),h,u,f,g;if(d>0)if(h=o*l-a,u=o*a-l,g=r*d,h>=0)if(u>=-g)if(u<=g){let y=1/d;h*=y,u*=y,f=h*(h+o*u+2*a)+u*(o*h+u+2*l)+c}else u=r,h=Math.max(0,-(o*u+a)),f=-h*h+u*(u+2*l)+c;else u=-r,h=Math.max(0,-(o*u+a)),f=-h*h+u*(u+2*l)+c;else u<=-g?(h=Math.max(0,-(-o*r+a)),u=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+u*(u+2*l)+c):u<=g?(h=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(h=Math.max(0,-(o*r+a)),u=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+u*(u+2*l)+c);else u=o>0?-r:r,h=Math.max(0,-(o*u+a)),f=-h*h+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(nu).addScaledVector(oa,u),f}intersectSphere(e,t){fi.subVectors(e.center,this.origin);let i=fi.dot(this.direction),s=fi.dot(fi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),d>=0?(r=(e.min.y-u.y)*d,o=(e.max.y-u.y)*d):(r=(e.max.y-u.y)*d,o=(e.min.y-u.y)*d),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(a=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,t,i,s,r){iu.subVectors(t,e),aa.subVectors(i,e),su.crossVectors(iu,aa);let o=this.direction.dot(su),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Pi.subVectors(this.origin,e);let l=a*this.direction.dot(aa.crossVectors(Pi,aa));if(l<0)return null;let c=a*this.direction.dot(iu.cross(Pi));if(c<0||l+c>o)return null;let d=-a*Pi.dot(su);return d<0?null:this.at(d/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Fn=class extends gi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=Eu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ad=new st,rs=new _i,la=new tn,Cd=new I,ca=new I,ua=new I,ha=new I,ru=new I,da=new I,Rd=new I,fa=new I,qt=class extends At{constructor(e=new Ct,t=new Fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){da.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let d=a[l],h=r[l];d!==0&&(ru.fromBufferAttribute(h,e),o?da.addScaledVector(ru,d):da.addScaledVector(ru.sub(t),d))}t.add(da)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),la.copy(i.boundingSphere),la.applyMatrix4(r),rs.copy(e.ray).recast(e.near),!(la.containsPoint(rs.origin)===!1&&(rs.intersectSphere(la,Cd)===null||rs.origin.distanceToSquared(Cd)>(e.far-e.near)**2))&&(Ad.copy(r).invert(),rs.copy(e.ray).applyMatrix4(Ad),!(i.boundingBox!==null&&rs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,rs)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=u.length;g<y;g++){let m=u[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),b=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let M=S,R=b;M<R;M+=3){let T=a.getX(M),P=a.getX(M+1),x=a.getX(M+2);s=pa(this,p,e,i,c,d,h,T,P,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let S=a.getX(m),b=a.getX(m+1),M=a.getX(m+2);s=pa(this,o,e,i,c,d,h,S,b,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=u.length;g<y;g++){let m=u[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=S,R=b;M<R;M+=3){let T=M,P=M+1,x=M+2;s=pa(this,p,e,i,c,d,h,T,P,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let S=m,b=m+1,M=m+2;s=pa(this,o,e,i,c,d,h,S,b,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function k_(n,e,t,i,s,r,o,a){let l;if(e.side===Jt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===mi,a),l===null)return null;fa.copy(a),fa.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(fa);return c<t.near||c>t.far?null:{distance:c,point:fa.clone(),object:n}}function pa(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,ca),n.getVertexPosition(l,ua),n.getVertexPosition(c,ha);let d=k_(n,e,t,i,ca,ua,ha,Rd);if(d){let h=new I;Ni.getBarycoord(Rd,ca,ua,ha,h),s&&(d.uv=Ni.getInterpolatedAttribute(s,a,l,c,h,new Ce)),r&&(d.uv1=Ni.getInterpolatedAttribute(r,a,l,c,h,new Ce)),o&&(d.normal=Ni.getInterpolatedAttribute(o,a,l,c,h,new I),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new I,materialIndex:0};Ni.getNormal(ca,ua,ha,u.normal),d.face=u,d.barycoord=h}return d}var Yr=class extends en{constructor(e=null,t=1,i=1,s,r,o,a,l,c=kt,d=kt,h,u){super(null,o,a,l,c,d,s,r,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Zr=class extends Bt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},zs=new st,Id=new st,ma=[],Pd=new Qn,z_=new st,Ur=new qt,Fr=new tn,Kr=class extends qt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Zr(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,z_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Qn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,zs),Pd.copy(e.boundingBox).applyMatrix4(zs),this.boundingBox.union(Pd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new tn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,zs),Fr.copy(e.boundingSphere).applyMatrix4(zs),this.boundingSphere.union(Fr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Ur.geometry=this.geometry,Ur.material=this.material,Ur.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fr.copy(this.boundingSphere),Fr.applyMatrix4(i),e.ray.intersectsSphere(Fr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,zs),Id.multiplyMatrices(i,zs),Ur.matrixWorld=Id,Ur.raycast(e,ma);for(let o=0,a=ma.length;o<a;o++){let l=ma[o];l.instanceId=r,l.object=this,t.push(l)}ma.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Zr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Yr(new Float32Array(s*this.count),s,this.count,fl,bn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ou=new I,V_=new I,H_=new Le,Sn=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=ou.subVectors(i,t).cross(V_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(ou),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||H_.getNormalMatrix(e),s=this.coplanarPoint(ou).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},os=new tn,G_=new Ce(.5,.5),ga=new I,Js=class{constructor(e=new Sn,t=new Sn,i=new Sn,s=new Sn,r=new Sn,o=new Sn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Dn,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],d=r[4],h=r[5],u=r[6],f=r[7],g=r[8],y=r[9],m=r[10],p=r[11],S=r[12],b=r[13],M=r[14],R=r[15];if(s[0].setComponents(c-o,f-d,p-g,R-S).normalize(),s[1].setComponents(c+o,f+d,p+g,R+S).normalize(),s[2].setComponents(c+a,f+h,p+y,R+b).normalize(),s[3].setComponents(c-a,f-h,p-y,R-b).normalize(),i)s[4].setComponents(l,u,m,M).normalize(),s[5].setComponents(c-l,f-u,p-m,R-M).normalize();else if(s[4].setComponents(c-l,f-u,p-m,R-M).normalize(),t===Dn)s[5].setComponents(c+l,f+u,p+m,R+M).normalize();else if(t===Xs)s[5].setComponents(l,u,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),os.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),os.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(os)}intersectsSprite(e){os.center.set(0,0,0);let t=G_.distanceTo(e.center);return os.radius=.7071067811865476+t,os.applyMatrix4(e.matrixWorld),this.intersectsSphere(os)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(ga.x=s.normal.x>0?e.max.x:e.min.x,ga.y=s.normal.y>0?e.max.y:e.min.y,ga.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ga)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var us=class extends gi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Va=new I,Ha=new I,Ld=new st,Or=new _i,_a=new tn,au=new I,Nd=new I,Ga=class extends At{constructor(e=new Ct,t=new us){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Va.fromBufferAttribute(t,s-1),Ha.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Va.distanceTo(Ha);e.setAttribute("lineDistance",new rt(i,1))}else Te("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_a.copy(i.boundingSphere),_a.applyMatrix4(s),_a.radius+=r,e.ray.intersectsSphere(_a)===!1)return;Ld.copy(s).invert(),Or.copy(e.ray).applyMatrix4(Ld);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=i.index,u=i.attributes.position;if(d!==null){let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let y=f,m=g-1;y<m;y+=c){let p=d.getX(y),S=d.getX(y+1),b=xa(this,e,Or,l,p,S,y);b&&t.push(b)}if(this.isLineLoop){let y=d.getX(g-1),m=d.getX(f),p=xa(this,e,Or,l,y,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let y=f,m=g-1;y<m;y+=c){let p=xa(this,e,Or,l,y,y+1,y);p&&t.push(p)}if(this.isLineLoop){let y=xa(this,e,Or,l,g-1,f,g-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function xa(n,e,t,i,s,r,o){let a=n.geometry.attributes.position;if(Va.fromBufferAttribute(a,s),Ha.fromBufferAttribute(a,r),t.distanceSqToSegment(Va,Ha,au,Nd)>i)return;au.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(au);if(!(c<e.near||c>e.far))return{distance:c,point:Nd.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Dd=new I,Ud=new I,js=class extends Ga{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Dd.fromBufferAttribute(t,s),Ud.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Dd.distanceTo(Ud);e.setAttribute("lineDistance",new rt(i,1))}else Te("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Qs=class extends gi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Fd=new st,mu=new _i,va=new tn,ya=new I,Jr=class extends At{constructor(e=new Ct,t=new Qs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),va.copy(i.boundingSphere),va.applyMatrix4(s),va.radius+=r,e.ray.intersectsSphere(va)===!1)return;Fd.copy(s).invert(),mu.copy(e.ray).applyMatrix4(Fd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=u,y=f;g<y;g++){let m=c.getX(g);ya.fromBufferAttribute(h,m),Od(ya,m,l,s,e,t,this)}}else{let u=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=u,y=f;g<y;g++)ya.fromBufferAttribute(h,g),Od(ya,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Od(n,e,t,i,s,r,o){let a=mu.distanceSqToPoint(n);if(a<t){let l=new I;mu.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var jr=class extends en{constructor(e=[],t=zi,i,s,r,o,a,l,c,d){super(e,t,i,s,r,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var xi=class extends en{constructor(e,t,i=kn,s,r,o,a=kt,l=kt,c,d=Jn,h=1){if(d!==Jn&&d!==Hi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:h};super(u,s,r,o,a,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ys(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Wa=class extends xi{constructor(e,t=kn,i=zi,s,r,o=kt,a=kt,l,c=Jn){let d={width:e,height:e,depth:1},h=[d,d,d,d,d,d];super(e,e,t,i,s,r,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Qr=class extends en{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ui=class n extends Ct{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],d=[],h=[],u=0,f=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new rt(c,3)),this.setAttribute("normal",new rt(d,3)),this.setAttribute("uv",new rt(h,2));function g(y,m,p,S,b,M,R,T,P,x,w){let L=M/P,C=R/x,U=M/2,G=R/2,W=T/2,A=P+1,O=x+1,k=0,K=0,J=new I;for(let ie=0;ie<O;ie++){let pe=ie*C-G;for(let ve=0;ve<A;ve++){let Ge=ve*L-U;J[y]=Ge*S,J[m]=pe*b,J[p]=W,c.push(J.x,J.y,J.z),J[y]=0,J[m]=0,J[p]=T>0?1:-1,d.push(J.x,J.y,J.z),h.push(ve/P),h.push(1-ie/x),k+=1}}for(let ie=0;ie<x;ie++)for(let pe=0;pe<P;pe++){let ve=u+pe+A*ie,Ge=u+pe+A*(ie+1),$e=u+(pe+1)+A*(ie+1),Oe=u+(pe+1)+A*ie;l.push(ve,Ge,Oe),l.push(Ge,$e,Oe),K+=6}a.addGroup(f,K,w),f+=K,u+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var eo=class n extends Ct{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let d=[],h=[],u=[],f=[],g=0,y=[],m=i/2,p=0;S(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(d),this.setAttribute("position",new rt(h,3)),this.setAttribute("normal",new rt(u,3)),this.setAttribute("uv",new rt(f,2));function S(){let M=new I,R=new I,T=0,P=(t-e)/i;for(let x=0;x<=r;x++){let w=[],L=x/r,C=L*(t-e)+e;for(let U=0;U<=s;U++){let G=U/s,W=G*l+a,A=Math.sin(W),O=Math.cos(W);R.x=C*A,R.y=-L*i+m,R.z=C*O,h.push(R.x,R.y,R.z),M.set(A,P,O).normalize(),u.push(M.x,M.y,M.z),f.push(G,1-L),w.push(g++)}y.push(w)}for(let x=0;x<s;x++)for(let w=0;w<r;w++){let L=y[w][x],C=y[w+1][x],U=y[w+1][x+1],G=y[w][x+1];(e>0||w!==0)&&(d.push(L,C,G),T+=3),(t>0||w!==r-1)&&(d.push(C,U,G),T+=3)}c.addGroup(p,T,0),p+=T}function b(M){let R=g,T=new Ce,P=new I,x=0,w=M===!0?e:t,L=M===!0?1:-1;for(let U=1;U<=s;U++)h.push(0,m*L,0),u.push(0,L,0),f.push(.5,.5),g++;let C=g;for(let U=0;U<=s;U++){let W=U/s*l+a,A=Math.cos(W),O=Math.sin(W);P.x=w*O,P.y=m*L,P.z=w*A,h.push(P.x,P.y,P.z),u.push(0,L,0),T.x=A*.5+.5,T.y=O*.5*L+.5,f.push(T.x,T.y),g++}for(let U=0;U<s;U++){let G=R+U,W=C+U;M===!0?d.push(W,W+1,G):d.push(W+1,W,G),x+=3}c.addGroup(p,x,M===!0?1:2),p+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Xa=class n extends Ct{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),d(),this.setAttribute("position",new rt(r,3)),this.setAttribute("normal",new rt(r.slice(),3)),this.setAttribute("uv",new rt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){let b=new I,M=new I,R=new I;for(let T=0;T<t.length;T+=3)f(t[T+0],b),f(t[T+1],M),f(t[T+2],R),l(b,M,R,S)}function l(S,b,M,R){let T=R+1,P=[];for(let x=0;x<=T;x++){P[x]=[];let w=S.clone().lerp(M,x/T),L=b.clone().lerp(M,x/T),C=T-x;for(let U=0;U<=C;U++)U===0&&x===T?P[x][U]=w:P[x][U]=w.clone().lerp(L,U/C)}for(let x=0;x<T;x++)for(let w=0;w<2*(T-x)-1;w++){let L=Math.floor(w/2);w%2===0?(u(P[x][L+1]),u(P[x+1][L]),u(P[x][L])):(u(P[x][L+1]),u(P[x+1][L+1]),u(P[x+1][L]))}}function c(S){let b=new I;for(let M=0;M<r.length;M+=3)b.x=r[M+0],b.y=r[M+1],b.z=r[M+2],b.normalize().multiplyScalar(S),r[M+0]=b.x,r[M+1]=b.y,r[M+2]=b.z}function d(){let S=new I;for(let b=0;b<r.length;b+=3){S.x=r[b+0],S.y=r[b+1],S.z=r[b+2];let M=m(S)/2/Math.PI+.5,R=p(S)/Math.PI+.5;o.push(M,1-R)}g(),h()}function h(){for(let S=0;S<o.length;S+=6){let b=o[S+0],M=o[S+2],R=o[S+4],T=Math.max(b,M,R),P=Math.min(b,M,R);T>.9&&P<.1&&(b<.2&&(o[S+0]+=1),M<.2&&(o[S+2]+=1),R<.2&&(o[S+4]+=1))}}function u(S){r.push(S.x,S.y,S.z)}function f(S,b){let M=S*3;b.x=e[M+0],b.y=e[M+1],b.z=e[M+2]}function g(){let S=new I,b=new I,M=new I,R=new I,T=new Ce,P=new Ce,x=new Ce;for(let w=0,L=0;w<r.length;w+=9,L+=6){S.set(r[w+0],r[w+1],r[w+2]),b.set(r[w+3],r[w+4],r[w+5]),M.set(r[w+6],r[w+7],r[w+8]),T.set(o[L+0],o[L+1]),P.set(o[L+2],o[L+3]),x.set(o[L+4],o[L+5]),R.copy(S).add(b).add(M).divideScalar(3);let C=m(R);y(T,L+0,S,C),y(P,L+2,b,C),y(x,L+4,M,C)}}function y(S,b,M,R){R<0&&S.x===1&&(o[b]=S.x-1),M.x===0&&M.z===0&&(o[b]=R/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}};var to=class n extends Xa{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},no=class n extends Ct{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,d=l+1,h=e/a,u=t/l,f=[],g=[],y=[],m=[];for(let p=0;p<d;p++){let S=p*u-o;for(let b=0;b<c;b++){let M=b*h-r;g.push(M,-S,0),y.push(0,0,1),m.push(b/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){let b=S+c*p,M=S+c*(p+1),R=S+1+c*(p+1),T=S+1+c*p;f.push(b,M,T),f.push(M,R,T)}this.setIndex(f),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(y,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},er=class n extends Ct{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],d=[],h=e,u=(t-e)/s,f=new I,g=new Ce;for(let y=0;y<=s;y++){for(let m=0;m<=i;m++){let p=r+m/i*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,d.push(g.x,g.y)}h+=u}for(let y=0;y<s;y++){let m=y*(i+1);for(let p=0;p<i;p++){let S=p+m,b=S,M=S+i+1,R=S+i+2,T=S+1;a.push(b,M,T),a.push(M,R,T)}}this.setIndex(a),this.setAttribute("position",new rt(l,3)),this.setAttribute("normal",new rt(c,3)),this.setAttribute("uv",new rt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var io=class n extends Ct{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,d=[],h=new I,u=new I,f=[],g=[],y=[],m=[];for(let p=0;p<=i;p++){let S=[],b=p/i,M=0;p===0&&o===0?M=.5/t:p===i&&l===Math.PI&&(M=-.5/t);for(let R=0;R<=t;R++){let T=R/t;h.x=-e*Math.cos(s+T*r)*Math.sin(o+b*a),h.y=e*Math.cos(o+b*a),h.z=e*Math.sin(s+T*r)*Math.sin(o+b*a),g.push(h.x,h.y,h.z),u.copy(h).normalize(),y.push(u.x,u.y,u.z),m.push(T+M,1-b),S.push(c++)}d.push(S)}for(let p=0;p<i;p++)for(let S=0;S<t;S++){let b=d[p][S+1],M=d[p][S],R=d[p+1][S],T=d[p+1][S+1];(p!==0||o>0)&&f.push(b,M,T),(p!==i-1||l<Math.PI)&&f.push(M,R,T)}this.setIndex(f),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(y,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function ds(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Bd(s))s.isRenderTargetTexture?(Te("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Bd(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Yt(n){let e={};for(let t=0;t<n.length;t++){let i=ds(n[t]);for(let s in i)e[s]=i[s]}return e}function Bd(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function W_(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Xu(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}var Rf={clone:ds,merge:Yt},X_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,pn=class extends gi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=X_,this.fragmentShader=$_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ds(e.uniforms),this.uniformsGroups=W_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},$a=class extends pn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var qa=class extends gi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ya=class extends gi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Sa(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}var Fi=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Za=class extends Fi{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:uu,endingEnd:uu}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case hu:r=e,a=2*t-i;break;case du:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case hu:o=e,l=2*i-t;break;case du:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,d=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*d,this._offsetNext=o*d}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),y=g*g,m=y*g,p=-u*m+2*u*y-u*g,S=(1+u)*m+(-1.5-2*u)*y+(-.5+u)*g+1,b=(-1-f)*m+(1.5+f)*y+.5*g,M=f*m-f*y;for(let R=0;R!==a;++R)r[R]=p*o[d+R]+S*o[c+R]+b*o[l+R]+M*o[h+R];return r}},Ka=class extends Fi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=(i-t)/(s-t),h=1-d;for(let u=0;u!==a;++u)r[u]=o[c+u]*h+o[l+u]*d;return r}},Ja=class extends Fi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ja=class extends Fi{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=this.settings||this.DefaultSettings_,h=d.inTangents,u=d.outTangents;if(!h||!u){let y=(i-t)/(s-t),m=1-y;for(let p=0;p!==a;++p)r[p]=o[c+p]*m+o[l+p]*y;return r}let f=a*2,g=e-1;for(let y=0;y!==a;++y){let m=o[c+y],p=o[l+y],S=g*f+y*2,b=u[S],M=u[S+1],R=e*f+y*2,T=h[R],P=h[R+1],x=(i-t)/(s-t),w,L,C,U,G;for(let W=0;W<8;W++){w=x*x,L=w*x,C=1-x,U=C*C,G=U*C;let O=G*t+3*U*x*b+3*C*w*T+L*s-i;if(Math.abs(O)<1e-10)break;let k=3*U*(b-t)+6*C*x*(T-b)+3*w*(s-T);if(Math.abs(k)<1e-10)break;x=x-O/k,x=Math.max(0,Math.min(1,x))}r[y]=G*m+3*U*x*M+3*C*w*P+L*p}return r}},mn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Sa(t,this.TimeBufferType),this.values=Sa(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Sa(e.times,Array),values:Sa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ja(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ka(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Za(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ja(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case zr:t=this.InterpolantFactoryMethodDiscrete;break;case Fa:t=this.InterpolantFactoryMethodLinear;break;case Ea:t=this.InterpolantFactoryMethodSmooth;break;case cu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Te("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return zr;case this.InterpolantFactoryMethodLinear:return Fa;case this.InterpolantFactoryMethodSmooth:return Ea;case this.InterpolantFactoryMethodBezier:return cu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ae("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Ae("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Ae("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Ae("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&l_(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Ae("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ea,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],d=e[a+1];if(c!==d&&(a!==1||c!==e[0]))if(s)l=!0;else{let h=a*i,u=h-i,f=h+i;for(let g=0;g!==i;++g){let y=t[h+g];if(y!==t[u+g]||y!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*i,u=o*i;for(let f=0;f!==i;++f)t[u+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};mn.prototype.ValueTypeName="";mn.prototype.TimeBufferType=Float32Array;mn.prototype.ValueBufferType=Float32Array;mn.prototype.DefaultInterpolation=Fa;var Oi=class extends mn{constructor(e,t,i){super(e,t,i)}};Oi.prototype.ValueTypeName="bool";Oi.prototype.ValueBufferType=Array;Oi.prototype.DefaultInterpolation=zr;Oi.prototype.InterpolantFactoryMethodLinear=void 0;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;var Qa=class extends mn{constructor(e,t,i,s){super(e,t,i,s)}};Qa.prototype.ValueTypeName="color";var el=class extends mn{constructor(e,t,i,s){super(e,t,i,s)}};el.prototype.ValueTypeName="number";var tl=class extends Fi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let d=c+a;c!==d;c+=4)dn.slerpFlat(r,0,o,c-a,o,c,l);return r}},so=class extends mn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new tl(this.times,this.values,this.getValueSize(),e)}};so.prototype.ValueTypeName="quaternion";so.prototype.InterpolantFactoryMethodSmooth=void 0;var Bi=class extends mn{constructor(e,t,i){super(e,t,i)}};Bi.prototype.ValueTypeName="string";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=zr;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var nl=class extends mn{constructor(e,t,i,s){super(e,t,i,s)}};nl.prototype.ValueTypeName="vector";var il=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(d){a++,r===!1&&s.onStart!==void 0&&s.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,s.onProgress!==void 0&&s.onProgress(d,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,h){return c.push(d,h),this},this.removeHandler=function(d){let h=c.indexOf(d);return h!==-1&&c.splice(h,2),this},this.getHandler=function(d){for(let h=0,u=c.length;h<u;h+=2){let f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(d))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},If=new il,sl=class{constructor(e){this.manager=e!==void 0?e:If,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};sl.DEFAULT_MATERIAL_NAME="__DEFAULT";var ro=class extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},oo=class extends ro{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},lu=new st,kd=new I,zd=new I,gu=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.mapType=nn,this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Js,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;kd.setFromMatrixPosition(e.matrixWorld),t.position.copy(kd),zd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zd),t.updateMatrixWorld(),lu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lu,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Xs||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(lu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ma=new I,ba=new dn,Yn=new I,ao=class extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=Dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ma,ba,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ma,ba,Yn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Ma,ba,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ma,ba,Yn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Li=new I,Vd=new Ce,Hd=new Ce,$t=class extends ao{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=qs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Br*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qs*2*Math.atan(Math.tan(Br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Li.x,Li.y).multiplyScalar(-e/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Li.x,Li.y).multiplyScalar(-e/Li.z)}getViewSize(e,t){return this.getViewBounds(e,Vd,Hd),t.subVectors(Hd,Vd)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Br*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var tr=class extends ao{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},_u=class extends gu{constructor(){super(new tr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},lo=class extends ro{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new _u}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Vs=-90,Hs=1,rl=class extends At{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new $t(Vs,Hs,e,t);s.layers=this.layers,this.add(s);let r=new $t(Vs,Hs,e,t);r.layers=this.layers,this.add(r);let o=new $t(Vs,Hs,e,t);o.layers=this.layers,this.add(o);let a=new $t(Vs,Hs,e,t);a.layers=this.layers,this.add(a);let l=new $t(Vs,Hs,e,t);l.layers=this.layers,this.add(l);let c=new $t(Vs,Hs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Dn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Xs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,d]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(h,u,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},ol=class extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var $u="\\[\\]\\.:\\/",q_=new RegExp("["+$u+"]","g"),qu="[^"+$u+"]",Y_="[^"+$u.replace("\\.","")+"]",Z_=/((?:WC+[\/:])*)/.source.replace("WC",qu),K_=/(WCOD+)?/.source.replace("WCOD",Y_),J_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qu),j_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qu),Q_=new RegExp("^"+Z_+K_+J_+j_+"$"),e0=["material","materials","bones","map"],xu=class{constructor(e,t,i){let s=i||gt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},gt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(q_,"")}static parseTrackName(e){let t=Q_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);e0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Te("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Ae("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ae("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ae("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ae("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ae("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ae("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Ae("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;Ae("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ae("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ae("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};gt.Composite=xu;gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};gt.prototype.GetterByBindingType=[gt.prototype._getValue_direct,gt.prototype._getValue_array,gt.prototype._getValue_arrayElement,gt.prototype._getValue_toArray];gt.prototype.SetterByBindingTypeAndVersioning=[[gt.prototype._setValue_direct,gt.prototype._setValue_direct_setNeedsUpdate,gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_array,gt.prototype._setValue_array_setNeedsUpdate,gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_arrayElement,gt.prototype._setValue_arrayElement_setNeedsUpdate,gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_fromArray,gt.prototype._setValue_fromArray_setNeedsUpdate,gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Xw=new Float32Array(1);var Gd=new st,co=class{constructor(e,t,i=0,s=1/0){this.ray=new _i(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Zs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ae("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Gd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Gd),this}intersectObject(e,t=!0,i=[]){return vu(e,this,i,t),i.sort(Wd),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)vu(e[s],this,i,t);return i.sort(Wd),i}};function Wd(n,e){return n.distance-e.distance}function vu(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)vu(r[o],e,t,!0)}}var nr=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=We(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(We(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var yu=class n{static{n.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};var uo=class extends js{constructor(e=10,t=10,i=4473924,s=8947848){i=new ze(i),s=new ze(s);let r=t/2,o=e/t,a=e/2,l=[],c=[];for(let u=0,f=0,g=-a;u<=t;u++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);let y=u===r?i:s;y.toArray(c,f),f+=3,y.toArray(c,f),f+=3,y.toArray(c,f),f+=3,y.toArray(c,f),f+=3}let d=new Ct;d.setAttribute("position",new rt(l,3)),d.setAttribute("color",new rt(c,3));let h=new us({vertexColors:!0,toneMapped:!1});super(d,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var ho=class extends Un{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Te("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Yu(n,e,t,i){let s=t0(i);switch(t){case Ou:return n*e;case fl:return n*e/s.components*s.byteLength;case pl:return n*e/s.components*s.byteLength;case Gi:return n*e*2/s.components*s.byteLength;case ml:return n*e*2/s.components*s.byteLength;case Bu:return n*e*3/s.components*s.byteLength;case En:return n*e*4/s.components*s.byteLength;case gl:return n*e*4/s.components*s.byteLength;case _o:case xo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case vo:case yo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xl:case yl:return Math.max(n,16)*Math.max(e,8)/4;case _l:case vl:return Math.max(n,8)*Math.max(e,8)/2;case Sl:case Ml:case El:case Tl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case bl:case So:case wl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Al:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Cl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Rl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Il:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Pl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ll:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Nl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Dl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ul:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Fl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ol:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Bl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case kl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case zl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Vl:case Hl:case Gl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Wl:case Xl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Mo:case $l:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function t0(n){switch(n){case nn:case Nu:return{byteLength:1,components:1};case sr:case Du:case ti:return{byteLength:2,components:1};case hl:case dl:return{byteLength:2,components:4};case kn:case ul:case bn:return{byteLength:4,components:1};case Uu:case Fu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"184"}}));typeof window<"u"&&(window.__THREE__?Te("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="184");function Qf(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function i0(n){let e=new WeakMap;function t(a,l){let c=a.array,d=a.usage,h=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,d),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){let d=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,d);else{h.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<h.length;f++){let g=h[u],y=h[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++u,h[u]=y)}h.length=u+1;for(let f=0,g=h.length;f<g;f++){let y=h[f];n.bufferSubData(c,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var s0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,r0=`#ifdef USE_ALPHAHASH
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
#endif`,o0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,a0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,l0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,c0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,u0=`#ifdef USE_AOMAP
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
#endif`,h0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,d0=`#ifdef USE_BATCHING
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
#endif`,f0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,p0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,m0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,g0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_0=`#ifdef USE_IRIDESCENCE
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
#endif`,x0=`#ifdef USE_BUMPMAP
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
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,y0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,S0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,M0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,b0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,E0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,T0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,w0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,A0=`#define PI 3.141592653589793
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
} // validated`,C0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,R0=`vec3 transformedNormal = objectNormal;
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
#endif`,I0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,P0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,L0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,N0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,D0="gl_FragColor = linearToOutputTexel( gl_FragColor );",U0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,F0=`#ifdef USE_ENVMAP
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
#endif`,O0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,B0=`#ifdef USE_ENVMAP
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
#endif`,k0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,z0=`#ifdef USE_ENVMAP
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
#endif`,V0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,H0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,G0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,W0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,X0=`#ifdef USE_GRADIENTMAP
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
}`,$0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,q0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Y0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Z0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,K0=`#ifdef USE_ENVMAP
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
#endif`,J0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,j0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Q0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ex=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tx=`PhysicalMaterial material;
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
#endif`,nx=`uniform sampler2D dfgLUT;
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
}`,ix=`
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
#endif`,sx=`#if defined( RE_IndirectDiffuse )
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
#endif`,rx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ox=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,ax=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ux=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,px=`#if defined( USE_POINTS_UV )
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
#endif`,mx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_x=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yx=`#ifdef USE_MORPHTARGETS
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
#endif`,Sx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ax=`#ifdef USE_NORMALMAP
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
#endif`,Cx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ix=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Px=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Dx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ux=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ox=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Gx=`float getShadowMask() {
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
}`,Wx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xx=`#ifdef USE_SKINNING
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
#endif`,$x=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qx=`#ifdef USE_SKINNING
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
#endif`,Yx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jx=`#ifdef USE_TRANSMISSION
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
#endif`,Qx=`#ifdef USE_TRANSMISSION
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
#endif`,ev=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,sv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rv=`uniform sampler2D t2D;
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
}`,ov=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,av=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uv=`#include <common>
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
}`,hv=`#if DEPTH_PACKING == 3200
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
}`,dv=`#define DISTANCE
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
}`,fv=`#define DISTANCE
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
}`,pv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gv=`uniform float scale;
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
}`,_v=`uniform vec3 diffuse;
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
}`,xv=`#include <common>
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
}`,vv=`uniform vec3 diffuse;
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
}`,yv=`#define LAMBERT
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
}`,Sv=`#define LAMBERT
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
}`,Mv=`#define MATCAP
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
}`,bv=`#define MATCAP
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
}`,Ev=`#define NORMAL
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
}`,Tv=`#define NORMAL
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
}`,wv=`#define PHONG
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
}`,Av=`#define PHONG
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
}`,Cv=`#define STANDARD
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
}`,Rv=`#define STANDARD
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
}`,Iv=`#define TOON
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
}`,Pv=`#define TOON
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
}`,Lv=`uniform float size;
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
}`,Nv=`uniform vec3 diffuse;
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
}`,Dv=`#include <common>
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
}`,Uv=`uniform vec3 color;
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
}`,Fv=`uniform float rotation;
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
}`,Ov=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:s0,alphahash_pars_fragment:r0,alphamap_fragment:o0,alphamap_pars_fragment:a0,alphatest_fragment:l0,alphatest_pars_fragment:c0,aomap_fragment:u0,aomap_pars_fragment:h0,batching_pars_vertex:d0,batching_vertex:f0,begin_vertex:p0,beginnormal_vertex:m0,bsdfs:g0,iridescence_fragment:_0,bumpmap_pars_fragment:x0,clipping_planes_fragment:v0,clipping_planes_pars_fragment:y0,clipping_planes_pars_vertex:S0,clipping_planes_vertex:M0,color_fragment:b0,color_pars_fragment:E0,color_pars_vertex:T0,color_vertex:w0,common:A0,cube_uv_reflection_fragment:C0,defaultnormal_vertex:R0,displacementmap_pars_vertex:I0,displacementmap_vertex:P0,emissivemap_fragment:L0,emissivemap_pars_fragment:N0,colorspace_fragment:D0,colorspace_pars_fragment:U0,envmap_fragment:F0,envmap_common_pars_fragment:O0,envmap_pars_fragment:B0,envmap_pars_vertex:k0,envmap_physical_pars_fragment:K0,envmap_vertex:z0,fog_vertex:V0,fog_pars_vertex:H0,fog_fragment:G0,fog_pars_fragment:W0,gradientmap_pars_fragment:X0,lightmap_pars_fragment:$0,lights_lambert_fragment:q0,lights_lambert_pars_fragment:Y0,lights_pars_begin:Z0,lights_toon_fragment:J0,lights_toon_pars_fragment:j0,lights_phong_fragment:Q0,lights_phong_pars_fragment:ex,lights_physical_fragment:tx,lights_physical_pars_fragment:nx,lights_fragment_begin:ix,lights_fragment_maps:sx,lights_fragment_end:rx,lightprobes_pars_fragment:ox,logdepthbuf_fragment:ax,logdepthbuf_pars_fragment:lx,logdepthbuf_pars_vertex:cx,logdepthbuf_vertex:ux,map_fragment:hx,map_pars_fragment:dx,map_particle_fragment:fx,map_particle_pars_fragment:px,metalnessmap_fragment:mx,metalnessmap_pars_fragment:gx,morphinstance_vertex:_x,morphcolor_vertex:xx,morphnormal_vertex:vx,morphtarget_pars_vertex:yx,morphtarget_vertex:Sx,normal_fragment_begin:Mx,normal_fragment_maps:bx,normal_pars_fragment:Ex,normal_pars_vertex:Tx,normal_vertex:wx,normalmap_pars_fragment:Ax,clearcoat_normal_fragment_begin:Cx,clearcoat_normal_fragment_maps:Rx,clearcoat_pars_fragment:Ix,iridescence_pars_fragment:Px,opaque_fragment:Lx,packing:Nx,premultiplied_alpha_fragment:Dx,project_vertex:Ux,dithering_fragment:Fx,dithering_pars_fragment:Ox,roughnessmap_fragment:Bx,roughnessmap_pars_fragment:kx,shadowmap_pars_fragment:zx,shadowmap_pars_vertex:Vx,shadowmap_vertex:Hx,shadowmask_pars_fragment:Gx,skinbase_vertex:Wx,skinning_pars_vertex:Xx,skinning_vertex:$x,skinnormal_vertex:qx,specularmap_fragment:Yx,specularmap_pars_fragment:Zx,tonemapping_fragment:Kx,tonemapping_pars_fragment:Jx,transmission_fragment:jx,transmission_pars_fragment:Qx,uv_pars_fragment:ev,uv_pars_vertex:tv,uv_vertex:nv,worldpos_vertex:iv,background_vert:sv,background_frag:rv,backgroundCube_vert:ov,backgroundCube_frag:av,cube_vert:lv,cube_frag:cv,depth_vert:uv,depth_frag:hv,distance_vert:dv,distance_frag:fv,equirect_vert:pv,equirect_frag:mv,linedashed_vert:gv,linedashed_frag:_v,meshbasic_vert:xv,meshbasic_frag:vv,meshlambert_vert:yv,meshlambert_frag:Sv,meshmatcap_vert:Mv,meshmatcap_frag:bv,meshnormal_vert:Ev,meshnormal_frag:Tv,meshphong_vert:wv,meshphong_frag:Av,meshphysical_vert:Cv,meshphysical_frag:Rv,meshtoon_vert:Iv,meshtoon_frag:Pv,points_vert:Lv,points_frag:Nv,shadow_vert:Dv,shadow_frag:Uv,sprite_vert:Fv,sprite_frag:Ov},ce={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},ii={basic:{uniforms:Yt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Yt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new ze(0)},envMapIntensity:{value:1}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Yt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Yt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Yt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Yt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Yt([ce.points,ce.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Yt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Yt([ce.common,ce.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Yt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Yt([ce.sprite,ce.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distance:{uniforms:Yt([ce.common,ce.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distance_vert,fragmentShader:Ve.distance_frag},shadow:{uniforms:Yt([ce.lights,ce.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};ii.physical={uniforms:Yt([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};var Zl={r:0,b:0,g:0},Bv=new st,ep=new Le;ep.set(-1,0,0,0,1,0,0,0,1);function kv(n,e,t,i,s,r){let o=new ze(0),a=s===!0?0:1,l,c,d=null,h=0,u=null;function f(S){let b=S.isScene===!0?S.background:null;if(b&&b.isTexture){let M=S.backgroundBlurriness>0;b=e.get(b,M)}return b}function g(S){let b=!1,M=f(S);M===null?m(o,a):M&&M.isColor&&(m(M,1),b=!0);let R=n.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(S,b){let M=f(b);M&&(M.isCubeTexture||M.mapping===mo)?(c===void 0&&(c=new qt(new Ui(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:ds(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Bv.makeRotationFromEuler(b.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ep),c.material.toneMapped=Ze.getTransfer(M.colorSpace)!==Qe,(d!==M||h!==M.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,d=M,h=M.version,u=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new qt(new no(2,2),new pn({name:"BackgroundMaterial",uniforms:ds(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(M.colorSpace)!==Qe,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||h!==M.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,d=M,h=M.version,u=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,b){S.getRGB(Zl,Xu(n)),t.buffers.color.setClear(Zl.r,Zl.g,Zl.b,b,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,b=1){o.set(S),a=b,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,m(o,a)},render:g,addToRenderList:y,dispose:p}}function zv(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function a(C,U,G,W,A){let O=!1,k=h(C,W,G,U);r!==k&&(r=k,c(r.object)),O=f(C,W,G,A),O&&g(C,W,G,A),A!==null&&e.update(A,n.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,M(C,U,G,W),A!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(A).buffer))}function l(){return n.createVertexArray()}function c(C){return n.bindVertexArray(C)}function d(C){return n.deleteVertexArray(C)}function h(C,U,G,W){let A=W.wireframe===!0,O=i[U.id];O===void 0&&(O={},i[U.id]=O);let k=C.isInstancedMesh===!0?C.id:0,K=O[k];K===void 0&&(K={},O[k]=K);let J=K[G.id];J===void 0&&(J={},K[G.id]=J);let ie=J[A];return ie===void 0&&(ie=u(l()),J[A]=ie),ie}function u(C){let U=[],G=[],W=[];for(let A=0;A<t;A++)U[A]=0,G[A]=0,W[A]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:G,attributeDivisors:W,object:C,attributes:{},index:null}}function f(C,U,G,W){let A=r.attributes,O=U.attributes,k=0,K=G.getAttributes();for(let J in K)if(K[J].location>=0){let pe=A[J],ve=O[J];if(ve===void 0&&(J==="instanceMatrix"&&C.instanceMatrix&&(ve=C.instanceMatrix),J==="instanceColor"&&C.instanceColor&&(ve=C.instanceColor)),pe===void 0||pe.attribute!==ve||ve&&pe.data!==ve.data)return!0;k++}return r.attributesNum!==k||r.index!==W}function g(C,U,G,W){let A={},O=U.attributes,k=0,K=G.getAttributes();for(let J in K)if(K[J].location>=0){let pe=O[J];pe===void 0&&(J==="instanceMatrix"&&C.instanceMatrix&&(pe=C.instanceMatrix),J==="instanceColor"&&C.instanceColor&&(pe=C.instanceColor));let ve={};ve.attribute=pe,pe&&pe.data&&(ve.data=pe.data),A[J]=ve,k++}r.attributes=A,r.attributesNum=k,r.index=W}function y(){let C=r.newAttributes;for(let U=0,G=C.length;U<G;U++)C[U]=0}function m(C){p(C,0)}function p(C,U){let G=r.newAttributes,W=r.enabledAttributes,A=r.attributeDivisors;G[C]=1,W[C]===0&&(n.enableVertexAttribArray(C),W[C]=1),A[C]!==U&&(n.vertexAttribDivisor(C,U),A[C]=U)}function S(){let C=r.newAttributes,U=r.enabledAttributes;for(let G=0,W=U.length;G<W;G++)U[G]!==C[G]&&(n.disableVertexAttribArray(G),U[G]=0)}function b(C,U,G,W,A,O,k){k===!0?n.vertexAttribIPointer(C,U,G,A,O):n.vertexAttribPointer(C,U,G,W,A,O)}function M(C,U,G,W){y();let A=W.attributes,O=G.getAttributes(),k=U.defaultAttributeValues;for(let K in O){let J=O[K];if(J.location>=0){let ie=A[K];if(ie===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(ie=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(ie=C.instanceColor)),ie!==void 0){let pe=ie.normalized,ve=ie.itemSize,Ge=e.get(ie);if(Ge===void 0)continue;let $e=Ge.buffer,Oe=Ge.type,Z=Ge.bytesPerElement,de=Oe===n.INT||Oe===n.UNSIGNED_INT||ie.gpuType===ul;if(ie.isInterleavedBufferAttribute){let se=ie.data,Re=se.stride,De=ie.offset;if(se.isInstancedInterleavedBuffer){for(let Ie=0;Ie<J.locationSize;Ie++)p(J.location+Ie,se.meshPerAttribute);C.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Ie=0;Ie<J.locationSize;Ie++)m(J.location+Ie);n.bindBuffer(n.ARRAY_BUFFER,$e);for(let Ie=0;Ie<J.locationSize;Ie++)b(J.location+Ie,ve/J.locationSize,Oe,pe,Re*Z,(De+ve/J.locationSize*Ie)*Z,de)}else{if(ie.isInstancedBufferAttribute){for(let se=0;se<J.locationSize;se++)p(J.location+se,ie.meshPerAttribute);C.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let se=0;se<J.locationSize;se++)m(J.location+se);n.bindBuffer(n.ARRAY_BUFFER,$e);for(let se=0;se<J.locationSize;se++)b(J.location+se,ve/J.locationSize,Oe,pe,ve*Z,ve/J.locationSize*se*Z,de)}}else if(k!==void 0){let pe=k[K];if(pe!==void 0)switch(pe.length){case 2:n.vertexAttrib2fv(J.location,pe);break;case 3:n.vertexAttrib3fv(J.location,pe);break;case 4:n.vertexAttrib4fv(J.location,pe);break;default:n.vertexAttrib1fv(J.location,pe)}}}}S()}function R(){w();for(let C in i){let U=i[C];for(let G in U){let W=U[G];for(let A in W){let O=W[A];for(let k in O)d(O[k].object),delete O[k];delete W[A]}}delete i[C]}}function T(C){if(i[C.id]===void 0)return;let U=i[C.id];for(let G in U){let W=U[G];for(let A in W){let O=W[A];for(let k in O)d(O[k].object),delete O[k];delete W[A]}}delete i[C.id]}function P(C){for(let U in i){let G=i[U];for(let W in G){let A=G[W];if(A[C.id]===void 0)continue;let O=A[C.id];for(let k in O)d(O[k].object),delete O[k];delete A[C.id]}}}function x(C){for(let U in i){let G=i[U],W=C.isInstancedMesh===!0?C.id:0,A=G[W];if(A!==void 0){for(let O in A){let k=A[O];for(let K in k)d(k[K].object),delete k[K];delete A[O]}delete G[W],Object.keys(G).length===0&&delete i[U]}}}function w(){L(),o=!0,r!==s&&(r=s,c(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:L,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:P,initAttributes:y,enableAttribute:m,disableUnusedAttributes:S}}function Vv(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,d){d!==0&&(n.drawArraysInstanced(i,l,c,d),t.update(c,i,d))}function a(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,d);let u=0;for(let f=0;f<d;f++)u+=c[f];t.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Hv(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==En&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let x=P===ti&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==nn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==bn&&!x)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",d=l(c);d!==c&&(Te("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);let h=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Te("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:b,maxFragmentUniforms:M,maxSamples:R,samples:T}}function Gv(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Sn,a=new Le,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let f=h.length!==0||u||i!==0||s;return s=u,i=h.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){t=d(h,u,0)},this.setState=function(h,u,f){let g=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?d(null):c();else{let S=r?0:i,b=S*4,M=p.clippingState||null;l.value=M,M=d(g,u,b,f);for(let R=0;R!==b;++R)M[R]=t[R];p.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,u,f,g){let y=h!==null?h.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let p=f+y*4,S=u.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,M=f;b!==y;++b,M+=4)o.copy(h[b]).applyMatrix4(S,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}var Wi=4,Pf=[.125,.215,.35,.446,.526,.582],fs=20,Wv=256,bo=new tr,Lf=new ze,Zu=null,Ku=0,Ju=0,ju=!1,Xv=new I,Jl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=Xv}=r;Zu=this._renderer.getRenderTarget(),Ku=this._renderer.getActiveCubeFace(),Ju=this._renderer.getActiveMipmapLevel(),ju=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Df(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Zu,Ku,Ju),this._renderer.xr.enabled=ju,e.scissorTest=!1,ar(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zi||e.mapping===hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zu=this._renderer.getRenderTarget(),Ku=this._renderer.getActiveCubeFace(),Ju=this._renderer.getActiveMipmapLevel(),ju=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:ti,format:En,colorSpace:Vr,depthBuffer:!1},s=Nf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nf(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=$v(r)),this._blurMaterial=Yv(r,e,t),this._ggxMaterial=qv(r,e,t)}return s}_compileMaterial(e){let t=new qt(new Ct,e);this._renderer.compile(t,bo)}_sceneToCubeUV(e,t,i,s,r){let l=new $t(90,1,t,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Lf),h.toneMapping=Bn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new qt(new Ui,new Fn({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,p=!1,S=e.background;S?S.isColor&&(m.color.copy(S),e.background=null,p=!0):(m.color.copy(Lf),p=!0);for(let b=0;b<6;b++){let M=b%3;M===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[b],r.y,r.z)):M===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[b]));let R=this._cubeSize;ar(s,M*R,b>2?R:0,R,R),h.setRenderTarget(s),p&&h.render(y,l),h.render(e,l)}h.toneMapping=f,h.autoClear=u,e.background=S}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===zi||e.mapping===hs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Df());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;ar(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,bo)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let l=o.uniforms,c=i/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-d*d),u=0+c*1.25,f=h*u,{_lodMax:g}=this,y=this._sizeLods[i],m=3*y*(i>g-Wi?i-g+Wi:0),p=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,ar(r,m,p,3*y,2*y),s.setRenderTarget(r),s.render(a,bo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,ar(e,m,p,3*y,2*y),s.setRenderTarget(e),s.render(a,bo)}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ae("blur direction must be either latitudinal or longitudinal!");let d=3,h=this._lodMeshes[s];h.material=c;let u=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*fs-1),y=r/g,m=isFinite(r)?1+Math.floor(d*y):fs;m>fs&&Te(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fs}`);let p=[],S=0;for(let P=0;P<fs;++P){let x=P/y,w=Math.exp(-x*x/2);p.push(w),P===0?S+=w:P<m&&(S+=2*w)}for(let P=0;P<p.length;P++)p[P]=p[P]/S;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:b}=this;u.dTheta.value=g,u.mipInt.value=b-i;let M=this._sizeLods[s],R=3*M*(s>b-Wi?s-b+Wi:0),T=4*(this._cubeSize-M);ar(t,R,T,3*M,2*M),l.setRenderTarget(t),l.render(h,bo)}};function $v(n){let e=[],t=[],i=[],s=n,r=n-Wi+1+Pf.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Wi?l=Pf[o-n+Wi-1]:o===0&&(l=0),t.push(l);let c=1/(a-2),d=-c,h=1+c,u=[d,d,h,d,h,h,d,d,h,h,d,h],f=6,g=6,y=3,m=2,p=1,S=new Float32Array(y*g*f),b=new Float32Array(m*g*f),M=new Float32Array(p*g*f);for(let T=0;T<f;T++){let P=T%3*2/3-1,x=T>2?0:-1,w=[P,x,0,P+2/3,x,0,P+2/3,x+1,0,P,x,0,P+2/3,x+1,0,P,x+1,0];S.set(w,y*g*T),b.set(u,m*g*T);let L=[T,T,T,T,T,T];M.set(L,p*g*T)}let R=new Ct;R.setAttribute("position",new Bt(S,y)),R.setAttribute("uv",new Bt(b,m)),R.setAttribute("faceIndex",new Bt(M,p)),i.push(new qt(R,null)),s>Wi&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Nf(n,e,t){let i=new fn(n,e,t);return i.texture.mapping=mo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ar(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function qv(n,e,t){return new pn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Wv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ec(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Yv(n,e,t){let i=new Float32Array(fs),s=new I(0,1,0);return new pn({name:"SphericalGaussianBlur",defines:{n:fs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ec(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Df(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ec(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Uf(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function ec(){return`

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
	`}var jl=class extends fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new jr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ui(5,5,5),r=new pn({name:"CubemapFromEquirect",uniforms:ds(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Jt,blending:ei});r.uniforms.tEquirect.value=t;let o=new qt(s,r),a=t.minFilter;return t.minFilter===Vi&&(t.minFilter=Ht),new rl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}};function Zv(n){let e=new WeakMap,t=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===al||f===ll)if(e.has(u)){let g=e.get(u).texture;return a(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let y=new jl(g.height);return y.fromEquirectangularTexture(n,u),e.set(u,y),u.addEventListener("dispose",c),a(y.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,g=f===al||f===ll,y=f===zi||f===hs;if(g||y){let m=t.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new Jl(n)),m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let S=u.image;return g&&S&&S.height>0||y&&S&&l(S)?(i===null&&(i=new Jl(n)),m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",d),m.texture):null}}}return u}function a(u,f){return f===al?u.mapping=zi:f===ll&&(u.mapping=hs),u}function l(u){let f=0,g=6;for(let y=0;y<g;y++)u[y]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(u){let f=u.target;f.removeEventListener("dispose",d);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function Kv(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Oa("WebGLRenderer: "+i+" extension not supported."),s}}}function Jv(n,e,t,i){let s={},r=new WeakMap;function o(h){let u=h.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(h,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function l(h){let u=h.attributes;for(let f in u)e.update(u[f],n.ARRAY_BUFFER)}function c(h){let u=[],f=h.index,g=h.attributes.position,y=0;if(g===void 0)return;if(f!==null){let S=f.array;y=f.version;for(let b=0,M=S.length;b<M;b+=3){let R=S[b+0],T=S[b+1],P=S[b+2];u.push(R,T,T,P,P,R)}}else{let S=g.array;y=g.version;for(let b=0,M=S.length/3-1;b<M;b+=3){let R=b+0,T=b+1,P=b+2;u.push(R,T,T,P,P,R)}}let m=new(g.count>=65535?qr:$r)(u,1);m.version=y;let p=r.get(h);p&&e.remove(p),r.set(h,m)}function d(h){let u=r.get(h);if(u){let f=h.index;f!==null&&u.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function jv(n,e,t){let i;function s(h){i=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,u){n.drawElements(i,u,r,h*o),t.update(u,i,1)}function c(h,u,f){f!==0&&(n.drawElementsInstanced(i,u,r,h*o,f),t.update(u,i,f))}function d(h,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,h,0,f);let y=0;for(let m=0;m<f;m++)y+=u[m];t.update(y,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function Qv(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:Ae("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function ey(n,e,t){let i=new WeakMap,s=new vt;function r(o,a,l){let c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=d!==void 0?d.length:0,u=i.get(a);if(u===void 0||u.count!==h){let w=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],b=0;f===!0&&(b=1),g===!0&&(b=2),y===!0&&(b=3);let M=a.attributes.position.count*b,R=1;M>e.maxTextureSize&&(R=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let T=new Float32Array(M*R*4*h),P=new Wr(T,M,R,h);P.type=bn,P.needsUpdate=!0;let x=b*4;for(let L=0;L<h;L++){let C=m[L],U=p[L],G=S[L],W=M*R*4*L;for(let A=0;A<C.count;A++){let O=A*x;f===!0&&(s.fromBufferAttribute(C,A),T[W+O+0]=s.x,T[W+O+1]=s.y,T[W+O+2]=s.z,T[W+O+3]=0),g===!0&&(s.fromBufferAttribute(U,A),T[W+O+4]=s.x,T[W+O+5]=s.y,T[W+O+6]=s.z,T[W+O+7]=0),y===!0&&(s.fromBufferAttribute(G,A),T[W+O+8]=s.x,T[W+O+9]=s.y,T[W+O+10]=s.z,T[W+O+11]=G.itemSize===4?s.w:1)}}u={count:h,texture:P,size:new Ce(M,R)},i.set(a,u),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function ty(n,e,t,i,s){let r=new WeakMap;function o(c){let d=s.render.frame,h=c.geometry,u=e.get(c,h);if(r.get(u)!==d&&(e.update(u),r.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==d&&(f.update(),r.set(f,d))}return u}function a(){r=new WeakMap}function l(c){let d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:o,dispose:a}}var ny={[Tu]:"LINEAR_TONE_MAPPING",[wu]:"REINHARD_TONE_MAPPING",[Au]:"CINEON_TONE_MAPPING",[Cu]:"ACES_FILMIC_TONE_MAPPING",[Iu]:"AGX_TONE_MAPPING",[Pu]:"NEUTRAL_TONE_MAPPING",[Ru]:"CUSTOM_TONE_MAPPING"};function iy(n,e,t,i,s){let r=new fn(e,t,{type:n,depthBuffer:i,stencilBuffer:s,depthTexture:i?new xi(e,t):void 0}),o=new fn(e,t,{type:ti,depthBuffer:!1,stencilBuffer:!1}),a=new Ct;a.setAttribute("position",new rt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new rt([0,2,0,0,2,0],2));let l=new $a({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new qt(a,l),d=new tr(-1,1,1,-1,0,1),h=null,u=null,f=!1,g,y=null,m=[],p=!1;this.setSize=function(S,b){r.setSize(S,b),o.setSize(S,b);for(let M=0;M<m.length;M++){let R=m[M];R.setSize&&R.setSize(S,b)}},this.setEffects=function(S){m=S,p=m.length>0&&m[0].isRenderPass===!0;let b=r.width,M=r.height;for(let R=0;R<m.length;R++){let T=m[R];T.setSize&&T.setSize(b,M)}},this.begin=function(S,b){if(f||S.toneMapping===Bn&&m.length===0)return!1;if(y=b,b!==null){let M=b.width,R=b.height;(r.width!==M||r.height!==R)&&this.setSize(M,R)}return p===!1&&S.setRenderTarget(r),g=S.toneMapping,S.toneMapping=Bn,!0},this.hasRenderPass=function(){return p},this.end=function(S,b){S.toneMapping=g,f=!0;let M=r,R=o;for(let T=0;T<m.length;T++){let P=m[T];if(P.enabled!==!1&&(P.render(S,R,M,b),P.needsSwap!==!1)){let x=M;M=R,R=x}}if(h!==S.outputColorSpace||u!==S.toneMapping){h=S.outputColorSpace,u=S.toneMapping,l.defines={},Ze.getTransfer(h)===Qe&&(l.defines.SRGB_TRANSFER="");let T=ny[u];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,S.setRenderTarget(y),S.render(c,d),y=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),o.dispose(),a.dispose(),l.dispose()}}var tp=new en,th=new xi(1,1),np=new Wr,ip=new za,sp=new jr,Ff=[],Of=[],Bf=new Float32Array(16),kf=new Float32Array(9),zf=new Float32Array(4);function cr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Ff[s];if(r===void 0&&(r=new Float32Array(s),Ff[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Nt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Dt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function tc(n,e){let t=Of[e];t===void 0&&(t=new Int32Array(e),Of[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function sy(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function ry(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2fv(this.addr,e),Dt(t,e)}}function oy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;n.uniform3fv(this.addr,e),Dt(t,e)}}function ay(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4fv(this.addr,e),Dt(t,e)}}function ly(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Nt(t,i))return;zf.set(i),n.uniformMatrix2fv(this.addr,!1,zf),Dt(t,i)}}function cy(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Nt(t,i))return;kf.set(i),n.uniformMatrix3fv(this.addr,!1,kf),Dt(t,i)}}function uy(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Nt(t,i))return;Bf.set(i),n.uniformMatrix4fv(this.addr,!1,Bf),Dt(t,i)}}function hy(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function dy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2iv(this.addr,e),Dt(t,e)}}function fy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;n.uniform3iv(this.addr,e),Dt(t,e)}}function py(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4iv(this.addr,e),Dt(t,e)}}function my(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function gy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2uiv(this.addr,e),Dt(t,e)}}function _y(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;n.uniform3uiv(this.addr,e),Dt(t,e)}}function xy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4uiv(this.addr,e),Dt(t,e)}}function vy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(th.compareFunction=t.isReversedDepthBuffer()?Yl:ql,r=th):r=tp,t.setTexture2D(e||r,s)}function yy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||ip,s)}function Sy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||sp,s)}function My(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||np,s)}function by(n){switch(n){case 5126:return sy;case 35664:return ry;case 35665:return oy;case 35666:return ay;case 35674:return ly;case 35675:return cy;case 35676:return uy;case 5124:case 35670:return hy;case 35667:case 35671:return dy;case 35668:case 35672:return fy;case 35669:case 35673:return py;case 5125:return my;case 36294:return gy;case 36295:return _y;case 36296:return xy;case 35678:case 36198:case 36298:case 36306:case 35682:return vy;case 35679:case 36299:case 36307:return yy;case 35680:case 36300:case 36308:case 36293:return Sy;case 36289:case 36303:case 36311:case 36292:return My}}function Ey(n,e){n.uniform1fv(this.addr,e)}function Ty(n,e){let t=cr(e,this.size,2);n.uniform2fv(this.addr,t)}function wy(n,e){let t=cr(e,this.size,3);n.uniform3fv(this.addr,t)}function Ay(n,e){let t=cr(e,this.size,4);n.uniform4fv(this.addr,t)}function Cy(n,e){let t=cr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Ry(n,e){let t=cr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Iy(n,e){let t=cr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Py(n,e){n.uniform1iv(this.addr,e)}function Ly(n,e){n.uniform2iv(this.addr,e)}function Ny(n,e){n.uniform3iv(this.addr,e)}function Dy(n,e){n.uniform4iv(this.addr,e)}function Uy(n,e){n.uniform1uiv(this.addr,e)}function Fy(n,e){n.uniform2uiv(this.addr,e)}function Oy(n,e){n.uniform3uiv(this.addr,e)}function By(n,e){n.uniform4uiv(this.addr,e)}function ky(n,e,t){let i=this.cache,s=e.length,r=tc(t,s);Nt(i,r)||(n.uniform1iv(this.addr,r),Dt(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=th:o=tp;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function zy(n,e,t){let i=this.cache,s=e.length,r=tc(t,s);Nt(i,r)||(n.uniform1iv(this.addr,r),Dt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||ip,r[o])}function Vy(n,e,t){let i=this.cache,s=e.length,r=tc(t,s);Nt(i,r)||(n.uniform1iv(this.addr,r),Dt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||sp,r[o])}function Hy(n,e,t){let i=this.cache,s=e.length,r=tc(t,s);Nt(i,r)||(n.uniform1iv(this.addr,r),Dt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||np,r[o])}function Gy(n){switch(n){case 5126:return Ey;case 35664:return Ty;case 35665:return wy;case 35666:return Ay;case 35674:return Cy;case 35675:return Ry;case 35676:return Iy;case 5124:case 35670:return Py;case 35667:case 35671:return Ly;case 35668:case 35672:return Ny;case 35669:case 35673:return Dy;case 5125:return Uy;case 36294:return Fy;case 36295:return Oy;case 36296:return By;case 35678:case 36198:case 36298:case 36306:case 35682:return ky;case 35679:case 36299:case 36307:return zy;case 35680:case 36300:case 36308:case 36293:return Vy;case 36289:case 36303:case 36311:case 36292:return Hy}}var nh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=by(t.type)}},ih=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Gy(t.type)}},sh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Qu=/(\w+)(\])?(\[|\.)?/g;function Vf(n,e){n.seq.push(e),n.map[e.id]=e}function Wy(n,e,t){let i=n.name,s=i.length;for(Qu.lastIndex=0;;){let r=Qu.exec(i),o=Qu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Vf(t,c===void 0?new nh(a,n,e):new ih(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new sh(a),Vf(t,h)),t=h}}}var lr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);Wy(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Hf(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Xy=37297,$y=0;function qy(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Gf=new Le;function Yy(n){Ze._getMatrix(Gf,Ze.workingColorSpace,n);let e=`mat3( ${Gf.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(n)){case Hr:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return Te("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Wf(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+qy(n.getShaderSource(e),a)}else return r}function Zy(n,e){let t=Yy(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Ky={[Tu]:"Linear",[wu]:"Reinhard",[Au]:"Cineon",[Cu]:"ACESFilmic",[Iu]:"AgX",[Pu]:"Neutral",[Ru]:"Custom"};function Jy(n,e){let t=Ky[e];return t===void 0?(Te("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Kl=new I;function jy(){Ze.getLuminanceCoefficients(Kl);let n=Kl.x.toFixed(4),e=Kl.y.toFixed(4),t=Kl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Qy(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(To).join(`
`)}function eS(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function tS(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function To(n){return n!==""}function Xf(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $f(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var nS=/^[ \t]*#include +<([\w\d./]+)>/gm;function rh(n){return n.replace(nS,sS)}var iS=new Map;function sS(n,e){let t=Ve[e];if(t===void 0){let i=iS.get(e);if(i!==void 0)t=Ve[i],Te('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return rh(t)}var rS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qf(n){return n.replace(rS,oS)}function oS(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Yf(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var aS={[fo]:"SHADOWMAP_TYPE_PCF",[ir]:"SHADOWMAP_TYPE_VSM"};function lS(n){return aS[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var cS={[zi]:"ENVMAP_TYPE_CUBE",[hs]:"ENVMAP_TYPE_CUBE",[mo]:"ENVMAP_TYPE_CUBE_UV"};function uS(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":cS[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var hS={[hs]:"ENVMAP_MODE_REFRACTION"};function dS(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":hS[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var fS={[Eu]:"ENVMAP_BLENDING_MULTIPLY",[ff]:"ENVMAP_BLENDING_MIX",[pf]:"ENVMAP_BLENDING_ADD"};function pS(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":fS[n.combine]||"ENVMAP_BLENDING_NONE"}function mS(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function gS(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=lS(t),c=uS(t),d=dS(t),h=pS(t),u=mS(t),f=Qy(t),g=eS(r),y=s.createProgram(),m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(To).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(To).join(`
`),p.length>0&&(p+=`
`)):(m=[Yf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(To).join(`
`),p=[Yf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bn?"#define TONE_MAPPING":"",t.toneMapping!==Bn?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Bn?Jy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,Zy("linearToOutputTexel",t.outputColorSpace),jy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(To).join(`
`)),o=rh(o),o=Xf(o,t),o=$f(o,t),a=rh(a),a=Xf(a,t),a=$f(a,t),o=qf(o),a=qf(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Vu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=S+m+o,M=S+p+a,R=Hf(s,s.VERTEX_SHADER,b),T=Hf(s,s.FRAGMENT_SHADER,M);s.attachShader(y,R),s.attachShader(y,T),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function P(C){if(n.debug.checkShaderErrors){let U=s.getProgramInfoLog(y)||"",G=s.getShaderInfoLog(R)||"",W=s.getShaderInfoLog(T)||"",A=U.trim(),O=G.trim(),k=W.trim(),K=!0,J=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(K=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,R,T);else{let ie=Wf(s,R,"vertex"),pe=Wf(s,T,"fragment");Ae("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+A+`
`+ie+`
`+pe)}else A!==""?Te("WebGLProgram: Program Info Log:",A):(O===""||k==="")&&(J=!1);J&&(C.diagnostics={runnable:K,programLog:A,vertexShader:{log:O,prefix:m},fragmentShader:{log:k,prefix:p}})}s.deleteShader(R),s.deleteShader(T),x=new lr(s,y),w=tS(s,y)}let x;this.getUniforms=function(){return x===void 0&&P(this),x};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(y,Xy)),L},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$y++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=R,this.fragmentShader=T,this}var _S=0,oh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new ah(e),t.set(e,i)),i}},ah=class{constructor(e){this.id=_S++,this.code=e,this.usedTimes=0}};function xS(n){return n===Gi||n===So||n===Mo}function vS(n,e,t,i,s,r){let o=new Zs,a=new oh,l=new Set,c=[],d=new Map,h=i.logarithmicDepthBuffer,u=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function y(x,w,L,C,U,G){let W=C.fog,A=U.geometry,O=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,K=e.get(x.envMap||O,k),J=K&&K.mapping===mo?K.image.height:null,ie=f[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&Te("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let pe=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,ve=pe!==void 0?pe.length:0,Ge=0;A.morphAttributes.position!==void 0&&(Ge=1),A.morphAttributes.normal!==void 0&&(Ge=2),A.morphAttributes.color!==void 0&&(Ge=3);let $e,Oe,Z,de;if(ie){let Ue=ii[ie];$e=Ue.vertexShader,Oe=Ue.fragmentShader}else $e=x.vertexShader,Oe=x.fragmentShader,a.update(x),Z=a.getVertexShaderID(x),de=a.getFragmentShaderID(x);let se=n.getRenderTarget(),Re=n.state.buffers.depth.getReversed(),De=U.isInstancedMesh===!0,Ie=U.isBatchedMesh===!0,_t=!!x.map,qe=!!x.matcap,tt=!!K,mt=!!x.aoMap,Xe=!!x.lightMap,Pt=!!x.bumpMap,xt=!!x.normalMap,ln=!!x.displacementMap,D=!!x.emissiveMap,Lt=!!x.metalnessMap,Ye=!!x.roughnessMap,ft=x.anisotropy>0,le=x.clearcoat>0,yt=x.dispersion>0,E=x.iridescence>0,_=x.sheen>0,B=x.transmission>0,q=ft&&!!x.anisotropyMap,Q=le&&!!x.clearcoatMap,ee=le&&!!x.clearcoatNormalMap,ae=le&&!!x.clearcoatRoughnessMap,X=E&&!!x.iridescenceMap,Y=E&&!!x.iridescenceThicknessMap,fe=_&&!!x.sheenColorMap,_e=_&&!!x.sheenRoughnessMap,re=!!x.specularMap,te=!!x.specularColorMap,Pe=!!x.specularIntensityMap,Be=B&&!!x.transmissionMap,je=B&&!!x.thicknessMap,N=!!x.gradientMap,ne=!!x.alphaMap,$=x.alphaTest>0,me=!!x.alphaHash,oe=!!x.extensions,j=Bn;x.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(j=n.toneMapping);let Se={shaderID:ie,shaderType:x.type,shaderName:x.name,vertexShader:$e,fragmentShader:Oe,defines:x.defines,customVertexShaderID:Z,customFragmentShaderID:de,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:Ie,batchingColor:Ie&&U._colorsTexture!==null,instancing:De,instancingColor:De&&U.instanceColor!==null,instancingMorph:De&&U.morphTexture!==null,outputColorSpace:se===null?n.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Ze.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:_t,matcap:qe,envMap:tt,envMapMode:tt&&K.mapping,envMapCubeUVHeight:J,aoMap:mt,lightMap:Xe,bumpMap:Pt,normalMap:xt,displacementMap:ln,emissiveMap:D,normalMapObjectSpace:xt&&x.normalMapType===_f,normalMapTangentSpace:xt&&x.normalMapType===ku,packedNormalMap:xt&&x.normalMapType===ku&&xS(x.normalMap.format),metalnessMap:Lt,roughnessMap:Ye,anisotropy:ft,anisotropyMap:q,clearcoat:le,clearcoatMap:Q,clearcoatNormalMap:ee,clearcoatRoughnessMap:ae,dispersion:yt,iridescence:E,iridescenceMap:X,iridescenceThicknessMap:Y,sheen:_,sheenColorMap:fe,sheenRoughnessMap:_e,specularMap:re,specularColorMap:te,specularIntensityMap:Pe,transmission:B,transmissionMap:Be,thicknessMap:je,gradientMap:N,opaque:x.transparent===!1&&x.blending===ls&&x.alphaToCoverage===!1,alphaMap:ne,alphaTest:$,alphaHash:me,combine:x.combine,mapUv:_t&&g(x.map.channel),aoMapUv:mt&&g(x.aoMap.channel),lightMapUv:Xe&&g(x.lightMap.channel),bumpMapUv:Pt&&g(x.bumpMap.channel),normalMapUv:xt&&g(x.normalMap.channel),displacementMapUv:ln&&g(x.displacementMap.channel),emissiveMapUv:D&&g(x.emissiveMap.channel),metalnessMapUv:Lt&&g(x.metalnessMap.channel),roughnessMapUv:Ye&&g(x.roughnessMap.channel),anisotropyMapUv:q&&g(x.anisotropyMap.channel),clearcoatMapUv:Q&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ee&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:X&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:Y&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:_e&&g(x.sheenRoughnessMap.channel),specularMapUv:re&&g(x.specularMap.channel),specularColorMapUv:te&&g(x.specularColorMap.channel),specularIntensityMapUv:Pe&&g(x.specularIntensityMap.channel),transmissionMapUv:Be&&g(x.transmissionMap.channel),thicknessMapUv:je&&g(x.thicknessMap.channel),alphaMapUv:ne&&g(x.alphaMap.channel),vertexTangents:!!A.attributes.tangent&&(xt||ft),vertexNormals:!!A.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!A.attributes.uv&&(_t||ne),fog:!!W,useFog:x.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||A.attributes.normal===void 0&&xt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Re,skinning:U.isSkinnedMesh===!0,morphTargets:A.morphAttributes.position!==void 0,morphNormals:A.morphAttributes.normal!==void 0,morphColors:A.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Ge,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:j,decodeVideoTexture:_t&&x.map.isVideoTexture===!0&&Ze.getTransfer(x.map.colorSpace)===Qe,decodeVideoTextureEmissive:D&&x.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(x.emissiveMap.colorSpace)===Qe,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Mn,flipSided:x.side===Jt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:oe&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&x.extensions.multiDraw===!0||Ie)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Se.vertexUv1s=l.has(1),Se.vertexUv2s=l.has(2),Se.vertexUv3s=l.has(3),l.clear(),Se}function m(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let L in x.defines)w.push(L),w.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(p(w,x),S(w,x),w.push(n.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function p(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function S(x,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),x.push(o.mask)}function b(x){let w=f[x.type],L;if(w){let C=ii[w];L=Rf.clone(C.uniforms)}else L=x.uniforms;return L}function M(x,w){let L=d.get(w);return L!==void 0?++L.usedTimes:(L=new gS(n,w,x,s),c.push(L),d.set(w,L)),L}function R(x){if(--x.usedTimes===0){let w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),d.delete(x.cacheKey),x.destroy()}}function T(x){a.remove(x)}function P(){a.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:b,acquireProgram:M,releaseProgram:R,releaseShaderCache:T,programs:c,dispose:P}}function yS(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function SS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Zf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Kf(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,g,y,m,p){let S=n[e];return S===void 0?(S={id:u.id,object:u,geometry:f,material:g,materialVariant:o(u),groupOrder:y,renderOrder:u.renderOrder,z:m,group:p},n[e]=S):(S.id=u.id,S.object=u,S.geometry=f,S.material=g,S.materialVariant=o(u),S.groupOrder=y,S.renderOrder=u.renderOrder,S.z=m,S.group=p),e++,S}function l(u,f,g,y,m,p){let S=a(u,f,g,y,m,p);g.transmission>0?i.push(S):g.transparent===!0?s.push(S):t.push(S)}function c(u,f,g,y,m,p){let S=a(u,f,g,y,m,p);g.transmission>0?i.unshift(S):g.transparent===!0?s.unshift(S):t.unshift(S)}function d(u,f){t.length>1&&t.sort(u||SS),i.length>1&&i.sort(f||Zf),s.length>1&&s.sort(f||Zf)}function h(){for(let u=e,f=n.length;u<f;u++){let g=n[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:h,sort:d}}function MS(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Kf,n.set(i,[o])):s>=r.length?(o=new Kf,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function bS(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new ze};break;case"SpotLight":t={position:new I,direction:new I,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function ES(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var TS=0;function wS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function AS(n){let e=new bS,t=ES(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);let s=new I,r=new st,o=new st;function a(c){let d=0,h=0,u=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,S=0,b=0,M=0,R=0,T=0,P=0;c.sort(wS);for(let w=0,L=c.length;w<L;w++){let C=c[w],U=C.color,G=C.intensity,W=C.distance,A=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Gi?A=C.shadow.map.texture:A=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)d+=U.r*G,h+=U.g*G,u+=U.b*G;else if(C.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(C.sh.coefficients[O],G);P++}else if(C.isDirectionalLight){let O=e.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let k=C.shadow,K=t.get(C);K.shadowIntensity=k.intensity,K.shadowBias=k.bias,K.shadowNormalBias=k.normalBias,K.shadowRadius=k.radius,K.shadowMapSize=k.mapSize,i.directionalShadow[f]=K,i.directionalShadowMap[f]=A,i.directionalShadowMatrix[f]=C.shadow.matrix,S++}i.directional[f]=O,f++}else if(C.isSpotLight){let O=e.get(C);O.position.setFromMatrixPosition(C.matrixWorld),O.color.copy(U).multiplyScalar(G),O.distance=W,O.coneCos=Math.cos(C.angle),O.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),O.decay=C.decay,i.spot[y]=O;let k=C.shadow;if(C.map&&(i.spotLightMap[R]=C.map,R++,k.updateMatrices(C),C.castShadow&&T++),i.spotLightMatrix[y]=k.matrix,C.castShadow){let K=t.get(C);K.shadowIntensity=k.intensity,K.shadowBias=k.bias,K.shadowNormalBias=k.normalBias,K.shadowRadius=k.radius,K.shadowMapSize=k.mapSize,i.spotShadow[y]=K,i.spotShadowMap[y]=A,M++}y++}else if(C.isRectAreaLight){let O=e.get(C);O.color.copy(U).multiplyScalar(G),O.halfWidth.set(C.width*.5,0,0),O.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=O,m++}else if(C.isPointLight){let O=e.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity),O.distance=C.distance,O.decay=C.decay,C.castShadow){let k=C.shadow,K=t.get(C);K.shadowIntensity=k.intensity,K.shadowBias=k.bias,K.shadowNormalBias=k.normalBias,K.shadowRadius=k.radius,K.shadowMapSize=k.mapSize,K.shadowCameraNear=k.camera.near,K.shadowCameraFar=k.camera.far,i.pointShadow[g]=K,i.pointShadowMap[g]=A,i.pointShadowMatrix[g]=C.shadow.matrix,b++}i.point[g]=O,g++}else if(C.isHemisphereLight){let O=e.get(C);O.skyColor.copy(C.color).multiplyScalar(G),O.groundColor.copy(C.groundColor).multiplyScalar(G),i.hemi[p]=O,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=u;let x=i.hash;(x.directionalLength!==f||x.pointLength!==g||x.spotLength!==y||x.rectAreaLength!==m||x.hemiLength!==p||x.numDirectionalShadows!==S||x.numPointShadows!==b||x.numSpotShadows!==M||x.numSpotMaps!==R||x.numLightProbes!==P)&&(i.directional.length=f,i.spot.length=y,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=M+R-T,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=P,x.directionalLength=f,x.pointLength=g,x.spotLength=y,x.rectAreaLength=m,x.hemiLength=p,x.numDirectionalShadows=S,x.numPointShadows=b,x.numSpotShadows=M,x.numSpotMaps=R,x.numLightProbes=P,i.version=TS++)}function l(c,d){let h=0,u=0,f=0,g=0,y=0,m=d.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){let b=c[p];if(b.isDirectionalLight){let M=i.directional[h];M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),h++}else if(b.isSpotLight){let M=i.spot[f];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(b.isRectAreaLight){let M=i.rectArea[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){let M=i.point[u];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),u++}else if(b.isHemisphereLight){let M=i.hemi[y];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function Jf(n){let e=new AS(n),t=[],i=[],s=[];function r(u){h.camera=u,t.length=0,i.length=0,s.length=0}function o(u){t.push(u)}function a(u){i.push(u)}function l(u){s.push(u)}function c(){e.setup(t)}function d(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:d,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function CS(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Jf(n),e.set(s,[a])):r>=o.length?(a=new Jf(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var RS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IS=`uniform sampler2D shadow_pass;
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
}`,PS=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],LS=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],jf=new st,Eo=new I,eh=new I;function NS(n,e,t){let i=new Js,s=new Ce,r=new Ce,o=new vt,a=new qa,l=new Ya,c={},d=t.maxTextureSize,h={[mi]:Jt,[Jt]:mi,[Mn]:Mn},u=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:RS,fragmentShader:IS}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ct;g.setAttribute("position",new Bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new qt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fo;let p=this.type;this.render=function(T,P,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===qd&&(Te("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=fo);let w=n.getRenderTarget(),L=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),U=n.state;U.setBlending(ei),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let G=p!==this.type;G&&P.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(A=>A.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,A=T.length;W<A;W++){let O=T[W],k=O.shadow;if(k===void 0){Te("WebGLShadowMap:",O,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let K=k.getFrameExtents();s.multiply(K),r.copy(k.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/K.x),s.x=r.x*K.x,k.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/K.y),s.y=r.y*K.y,k.mapSize.y=r.y));let J=n.state.buffers.depth.getReversed();if(k.camera._reversedDepth=J,k.map===null||G===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===ir){if(O.isPointLight){Te("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new fn(s.x,s.y,{format:Gi,type:ti,minFilter:Ht,magFilter:Ht,generateMipmaps:!1}),k.map.texture.name=O.name+".shadowMap",k.map.depthTexture=new xi(s.x,s.y,bn),k.map.depthTexture.name=O.name+".shadowMapDepth",k.map.depthTexture.format=Jn,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=kt,k.map.depthTexture.magFilter=kt}else O.isPointLight?(k.map=new jl(s.x),k.map.depthTexture=new Wa(s.x,kn)):(k.map=new fn(s.x,s.y),k.map.depthTexture=new xi(s.x,s.y,kn)),k.map.depthTexture.name=O.name+".shadowMap",k.map.depthTexture.format=Jn,this.type===fo?(k.map.depthTexture.compareFunction=J?Yl:ql,k.map.depthTexture.minFilter=Ht,k.map.depthTexture.magFilter=Ht):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=kt,k.map.depthTexture.magFilter=kt);k.camera.updateProjectionMatrix()}let ie=k.map.isWebGLCubeRenderTarget?6:1;for(let pe=0;pe<ie;pe++){if(k.map.isWebGLCubeRenderTarget)n.setRenderTarget(k.map,pe),n.clear();else{pe===0&&(n.setRenderTarget(k.map),n.clear());let ve=k.getViewport(pe);o.set(r.x*ve.x,r.y*ve.y,r.x*ve.z,r.y*ve.w),U.viewport(o)}if(O.isPointLight){let ve=k.camera,Ge=k.matrix,$e=O.distance||ve.far;$e!==ve.far&&(ve.far=$e,ve.updateProjectionMatrix()),Eo.setFromMatrixPosition(O.matrixWorld),ve.position.copy(Eo),eh.copy(ve.position),eh.add(PS[pe]),ve.up.copy(LS[pe]),ve.lookAt(eh),ve.updateMatrixWorld(),Ge.makeTranslation(-Eo.x,-Eo.y,-Eo.z),jf.multiplyMatrices(ve.projectionMatrix,ve.matrixWorldInverse),k._frustum.setFromProjectionMatrix(jf,ve.coordinateSystem,ve.reversedDepth)}else k.updateMatrices(O);i=k.getFrustum(),M(P,x,k.camera,O,this.type)}k.isPointLightShadow!==!0&&this.type===ir&&S(k,x),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(w,L,C)};function S(T,P){let x=e.update(y);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new fn(s.x,s.y,{format:Gi,type:ti})),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(P,null,x,u,y,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(P,null,x,f,y,null)}function b(T,P,x,w){let L=null,C=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)L=C;else if(L=x.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let U=L.uuid,G=P.uuid,W=c[U];W===void 0&&(W={},c[U]=W);let A=W[G];A===void 0&&(A=L.clone(),W[G]=A,P.addEventListener("dispose",R)),L=A}if(L.visible=P.visible,L.wireframe=P.wireframe,w===ir?L.side=P.shadowSide!==null?P.shadowSide:P.side:L.side=P.shadowSide!==null?P.shadowSide:h[P.side],L.alphaMap=P.alphaMap,L.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,L.map=P.map,L.clipShadows=P.clipShadows,L.clippingPlanes=P.clippingPlanes,L.clipIntersection=P.clipIntersection,L.displacementMap=P.displacementMap,L.displacementScale=P.displacementScale,L.displacementBias=P.displacementBias,L.wireframeLinewidth=P.wireframeLinewidth,L.linewidth=P.linewidth,x.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let U=n.properties.get(L);U.light=x}return L}function M(T,P,x,w,L){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&L===ir)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);let G=e.update(T),W=T.material;if(Array.isArray(W)){let A=G.groups;for(let O=0,k=A.length;O<k;O++){let K=A[O],J=W[K.materialIndex];if(J&&J.visible){let ie=b(T,J,w,L);T.onBeforeShadow(n,T,P,x,G,ie,K),n.renderBufferDirect(x,null,G,ie,T,K),T.onAfterShadow(n,T,P,x,G,ie,K)}}}else if(W.visible){let A=b(T,W,w,L);T.onBeforeShadow(n,T,P,x,G,A,null),n.renderBufferDirect(x,null,G,A,T,null),T.onAfterShadow(n,T,P,x,G,A,null)}}let U=T.children;for(let G=0,W=U.length;G<W;G++)M(U[G],P,x,w,L)}function R(T){T.target.removeEventListener("dispose",R);for(let x in c){let w=c[x],L=T.target.uuid;L in w&&(w[L].dispose(),delete w[L])}}}function DS(n,e){function t(){let N=!1,ne=new vt,$=null,me=new vt(0,0,0,0);return{setMask:function(oe){$!==oe&&!N&&(n.colorMask(oe,oe,oe,oe),$=oe)},setLocked:function(oe){N=oe},setClear:function(oe,j,Se,Ue,bt){bt===!0&&(oe*=Ue,j*=Ue,Se*=Ue),ne.set(oe,j,Se,Ue),me.equals(ne)===!1&&(n.clearColor(oe,j,Se,Ue),me.copy(ne))},reset:function(){N=!1,$=null,me.set(-1,0,0,0)}}}function i(){let N=!1,ne=!1,$=null,me=null,oe=null;return{setReversed:function(j){if(ne!==j){let Se=e.get("EXT_clip_control");j?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),ne=j;let Ue=oe;oe=null,this.setClear(Ue)}},getReversed:function(){return ne},setTest:function(j){j?se(n.DEPTH_TEST):Re(n.DEPTH_TEST)},setMask:function(j){$!==j&&!N&&(n.depthMask(j),$=j)},setFunc:function(j){if(ne&&(j=Af[j]),me!==j){switch(j){case Aa:n.depthFunc(n.NEVER);break;case Ca:n.depthFunc(n.ALWAYS);break;case Ra:n.depthFunc(n.LESS);break;case cs:n.depthFunc(n.LEQUAL);break;case Ia:n.depthFunc(n.EQUAL);break;case Pa:n.depthFunc(n.GEQUAL);break;case La:n.depthFunc(n.GREATER);break;case Na:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}me=j}},setLocked:function(j){N=j},setClear:function(j){oe!==j&&(oe=j,ne&&(j=1-j),n.clearDepth(j))},reset:function(){N=!1,$=null,me=null,oe=null,ne=!1}}}function s(){let N=!1,ne=null,$=null,me=null,oe=null,j=null,Se=null,Ue=null,bt=null;return{setTest:function(nt){N||(nt?se(n.STENCIL_TEST):Re(n.STENCIL_TEST))},setMask:function(nt){ne!==nt&&!N&&(n.stencilMask(nt),ne=nt)},setFunc:function(nt,li,$n){($!==nt||me!==li||oe!==$n)&&(n.stencilFunc(nt,li,$n),$=nt,me=li,oe=$n)},setOp:function(nt,li,$n){(j!==nt||Se!==li||Ue!==$n)&&(n.stencilOp(nt,li,$n),j=nt,Se=li,Ue=$n)},setLocked:function(nt){N=nt},setClear:function(nt){bt!==nt&&(n.clearStencil(nt),bt=nt)},reset:function(){N=!1,ne=null,$=null,me=null,oe=null,j=null,Se=null,Ue=null,bt=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,d={},h={},u={},f=new WeakMap,g=[],y=null,m=!1,p=null,S=null,b=null,M=null,R=null,T=null,P=null,x=new ze(0,0,0),w=0,L=!1,C=null,U=null,G=null,W=null,A=null,O=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,K=0,J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(J)[1]),k=K>=1):J.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),k=K>=2);let ie=null,pe={},ve=n.getParameter(n.SCISSOR_BOX),Ge=n.getParameter(n.VIEWPORT),$e=new vt().fromArray(ve),Oe=new vt().fromArray(Ge);function Z(N,ne,$,me){let oe=new Uint8Array(4),j=n.createTexture();n.bindTexture(N,j),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Se=0;Se<$;Se++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(ne,0,n.RGBA,1,1,me,0,n.RGBA,n.UNSIGNED_BYTE,oe):n.texImage2D(ne+Se,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,oe);return j}let de={};de[n.TEXTURE_2D]=Z(n.TEXTURE_2D,n.TEXTURE_2D,1),de[n.TEXTURE_CUBE_MAP]=Z(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[n.TEXTURE_2D_ARRAY]=Z(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),de[n.TEXTURE_3D]=Z(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(n.DEPTH_TEST),o.setFunc(cs),Pt(!1),xt(Su),se(n.CULL_FACE),mt(ei);function se(N){d[N]!==!0&&(n.enable(N),d[N]=!0)}function Re(N){d[N]!==!1&&(n.disable(N),d[N]=!1)}function De(N,ne){return u[N]!==ne?(n.bindFramebuffer(N,ne),u[N]=ne,N===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ne),N===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ne),!0):!1}function Ie(N,ne){let $=g,me=!1;if(N){$=f.get(ne),$===void 0&&($=[],f.set(ne,$));let oe=N.textures;if($.length!==oe.length||$[0]!==n.COLOR_ATTACHMENT0){for(let j=0,Se=oe.length;j<Se;j++)$[j]=n.COLOR_ATTACHMENT0+j;$.length=oe.length,me=!0}}else $[0]!==n.BACK&&($[0]=n.BACK,me=!0);me&&n.drawBuffers($)}function _t(N){return y!==N?(n.useProgram(N),y=N,!0):!1}let qe={[Di]:n.FUNC_ADD,[Zd]:n.FUNC_SUBTRACT,[Kd]:n.FUNC_REVERSE_SUBTRACT};qe[Jd]=n.MIN,qe[jd]=n.MAX;let tt={[Qd]:n.ZERO,[ef]:n.ONE,[tf]:n.SRC_COLOR,[Ta]:n.SRC_ALPHA,[lf]:n.SRC_ALPHA_SATURATE,[of]:n.DST_COLOR,[sf]:n.DST_ALPHA,[nf]:n.ONE_MINUS_SRC_COLOR,[wa]:n.ONE_MINUS_SRC_ALPHA,[af]:n.ONE_MINUS_DST_COLOR,[rf]:n.ONE_MINUS_DST_ALPHA,[cf]:n.CONSTANT_COLOR,[uf]:n.ONE_MINUS_CONSTANT_COLOR,[hf]:n.CONSTANT_ALPHA,[df]:n.ONE_MINUS_CONSTANT_ALPHA};function mt(N,ne,$,me,oe,j,Se,Ue,bt,nt){if(N===ei){m===!0&&(Re(n.BLEND),m=!1);return}if(m===!1&&(se(n.BLEND),m=!0),N!==Yd){if(N!==p||nt!==L){if((S!==Di||R!==Di)&&(n.blendEquation(n.FUNC_ADD),S=Di,R=Di),nt)switch(N){case ls:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case po:n.blendFunc(n.ONE,n.ONE);break;case Mu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case bu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ae("WebGLState: Invalid blending: ",N);break}else switch(N){case ls:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case po:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Mu:Ae("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bu:Ae("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ae("WebGLState: Invalid blending: ",N);break}b=null,M=null,T=null,P=null,x.set(0,0,0),w=0,p=N,L=nt}return}oe=oe||ne,j=j||$,Se=Se||me,(ne!==S||oe!==R)&&(n.blendEquationSeparate(qe[ne],qe[oe]),S=ne,R=oe),($!==b||me!==M||j!==T||Se!==P)&&(n.blendFuncSeparate(tt[$],tt[me],tt[j],tt[Se]),b=$,M=me,T=j,P=Se),(Ue.equals(x)===!1||bt!==w)&&(n.blendColor(Ue.r,Ue.g,Ue.b,bt),x.copy(Ue),w=bt),p=N,L=!1}function Xe(N,ne){N.side===Mn?Re(n.CULL_FACE):se(n.CULL_FACE);let $=N.side===Jt;ne&&($=!$),Pt($),N.blending===ls&&N.transparent===!1?mt(ei):mt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let me=N.stencilWrite;a.setTest(me),me&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),D(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?se(n.SAMPLE_ALPHA_TO_COVERAGE):Re(n.SAMPLE_ALPHA_TO_COVERAGE)}function Pt(N){C!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),C=N)}function xt(N){N!==Xd?(se(n.CULL_FACE),N!==U&&(N===Su?n.cullFace(n.BACK):N===$d?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Re(n.CULL_FACE),U=N}function ln(N){N!==G&&(k&&n.lineWidth(N),G=N)}function D(N,ne,$){N?(se(n.POLYGON_OFFSET_FILL),(W!==ne||A!==$)&&(W=ne,A=$,o.getReversed()&&(ne=-ne),n.polygonOffset(ne,$))):Re(n.POLYGON_OFFSET_FILL)}function Lt(N){N?se(n.SCISSOR_TEST):Re(n.SCISSOR_TEST)}function Ye(N){N===void 0&&(N=n.TEXTURE0+O-1),ie!==N&&(n.activeTexture(N),ie=N)}function ft(N,ne,$){$===void 0&&(ie===null?$=n.TEXTURE0+O-1:$=ie);let me=pe[$];me===void 0&&(me={type:void 0,texture:void 0},pe[$]=me),(me.type!==N||me.texture!==ne)&&(ie!==$&&(n.activeTexture($),ie=$),n.bindTexture(N,ne||de[N]),me.type=N,me.texture=ne)}function le(){let N=pe[ie];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function yt(){try{n.compressedTexImage2D(...arguments)}catch(N){Ae("WebGLState:",N)}}function E(){try{n.compressedTexImage3D(...arguments)}catch(N){Ae("WebGLState:",N)}}function _(){try{n.texSubImage2D(...arguments)}catch(N){Ae("WebGLState:",N)}}function B(){try{n.texSubImage3D(...arguments)}catch(N){Ae("WebGLState:",N)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(N){Ae("WebGLState:",N)}}function Q(){try{n.compressedTexSubImage3D(...arguments)}catch(N){Ae("WebGLState:",N)}}function ee(){try{n.texStorage2D(...arguments)}catch(N){Ae("WebGLState:",N)}}function ae(){try{n.texStorage3D(...arguments)}catch(N){Ae("WebGLState:",N)}}function X(){try{n.texImage2D(...arguments)}catch(N){Ae("WebGLState:",N)}}function Y(){try{n.texImage3D(...arguments)}catch(N){Ae("WebGLState:",N)}}function fe(N){return h[N]!==void 0?h[N]:n.getParameter(N)}function _e(N,ne){h[N]!==ne&&(n.pixelStorei(N,ne),h[N]=ne)}function re(N){$e.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),$e.copy(N))}function te(N){Oe.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),Oe.copy(N))}function Pe(N,ne){let $=c.get(ne);$===void 0&&($=new WeakMap,c.set(ne,$));let me=$.get(N);me===void 0&&(me=n.getUniformBlockIndex(ne,N.name),$.set(N,me))}function Be(N,ne){let me=c.get(ne).get(N);l.get(ne)!==me&&(n.uniformBlockBinding(ne,me,N.__bindingPointIndex),l.set(ne,me))}function je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),d={},h={},ie=null,pe={},u={},f=new WeakMap,g=[],y=null,m=!1,p=null,S=null,b=null,M=null,R=null,T=null,P=null,x=new ze(0,0,0),w=0,L=!1,C=null,U=null,G=null,W=null,A=null,$e.set(0,0,n.canvas.width,n.canvas.height),Oe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:se,disable:Re,bindFramebuffer:De,drawBuffers:Ie,useProgram:_t,setBlending:mt,setMaterial:Xe,setFlipSided:Pt,setCullFace:xt,setLineWidth:ln,setPolygonOffset:D,setScissorTest:Lt,activeTexture:Ye,bindTexture:ft,unbindTexture:le,compressedTexImage2D:yt,compressedTexImage3D:E,texImage2D:X,texImage3D:Y,pixelStorei:_e,getParameter:fe,updateUBOMapping:Pe,uniformBlockBinding:Be,texStorage2D:ee,texStorage3D:ae,texSubImage2D:_,texSubImage3D:B,compressedTexSubImage2D:q,compressedTexSubImage3D:Q,scissor:re,viewport:te,reset:je}}function US(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ce,d=new WeakMap,h=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(E,_){return g?new OffscreenCanvas(E,_):Gr("canvas")}function m(E,_,B){let q=1,Q=yt(E);if((Q.width>B||Q.height>B)&&(q=B/Math.max(Q.width,Q.height)),q<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let ee=Math.floor(q*Q.width),ae=Math.floor(q*Q.height);u===void 0&&(u=y(ee,ae));let X=_?y(ee,ae):u;return X.width=ee,X.height=ae,X.getContext("2d").drawImage(E,0,0,ee,ae),Te("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ee+"x"+ae+")."),X}else return"data"in E&&Te("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),E;return E}function p(E){return E.generateMipmaps}function S(E){n.generateMipmap(E)}function b(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(E,_,B,q,Q,ee=!1){if(E!==null){if(n[E]!==void 0)return n[E];Te("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ae;q&&(ae=e.get("EXT_texture_norm16"),ae||Te("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let X=_;if(_===n.RED&&(B===n.FLOAT&&(X=n.R32F),B===n.HALF_FLOAT&&(X=n.R16F),B===n.UNSIGNED_BYTE&&(X=n.R8),B===n.UNSIGNED_SHORT&&ae&&(X=ae.R16_EXT),B===n.SHORT&&ae&&(X=ae.R16_SNORM_EXT)),_===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(X=n.R8UI),B===n.UNSIGNED_SHORT&&(X=n.R16UI),B===n.UNSIGNED_INT&&(X=n.R32UI),B===n.BYTE&&(X=n.R8I),B===n.SHORT&&(X=n.R16I),B===n.INT&&(X=n.R32I)),_===n.RG&&(B===n.FLOAT&&(X=n.RG32F),B===n.HALF_FLOAT&&(X=n.RG16F),B===n.UNSIGNED_BYTE&&(X=n.RG8),B===n.UNSIGNED_SHORT&&ae&&(X=ae.RG16_EXT),B===n.SHORT&&ae&&(X=ae.RG16_SNORM_EXT)),_===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(X=n.RG8UI),B===n.UNSIGNED_SHORT&&(X=n.RG16UI),B===n.UNSIGNED_INT&&(X=n.RG32UI),B===n.BYTE&&(X=n.RG8I),B===n.SHORT&&(X=n.RG16I),B===n.INT&&(X=n.RG32I)),_===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(X=n.RGB8UI),B===n.UNSIGNED_SHORT&&(X=n.RGB16UI),B===n.UNSIGNED_INT&&(X=n.RGB32UI),B===n.BYTE&&(X=n.RGB8I),B===n.SHORT&&(X=n.RGB16I),B===n.INT&&(X=n.RGB32I)),_===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),B===n.UNSIGNED_INT&&(X=n.RGBA32UI),B===n.BYTE&&(X=n.RGBA8I),B===n.SHORT&&(X=n.RGBA16I),B===n.INT&&(X=n.RGBA32I)),_===n.RGB&&(B===n.UNSIGNED_SHORT&&ae&&(X=ae.RGB16_EXT),B===n.SHORT&&ae&&(X=ae.RGB16_SNORM_EXT),B===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&(X=n.R11F_G11F_B10F)),_===n.RGBA){let Y=ee?Hr:Ze.getTransfer(Q);B===n.FLOAT&&(X=n.RGBA32F),B===n.HALF_FLOAT&&(X=n.RGBA16F),B===n.UNSIGNED_BYTE&&(X=Y===Qe?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT&&ae&&(X=ae.RGBA16_EXT),B===n.SHORT&&ae&&(X=ae.RGBA16_SNORM_EXT),B===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function R(E,_){let B;return E?_===null||_===kn||_===rr?B=n.DEPTH24_STENCIL8:_===bn?B=n.DEPTH32F_STENCIL8:_===sr&&(B=n.DEPTH24_STENCIL8,Te("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===kn||_===rr?B=n.DEPTH_COMPONENT24:_===bn?B=n.DEPTH_COMPONENT32F:_===sr&&(B=n.DEPTH_COMPONENT16),B}function T(E,_){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==kt&&E.minFilter!==Ht?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function P(E){let _=E.target;_.removeEventListener("dispose",P),w(_),_.isVideoTexture&&d.delete(_),_.isHTMLTexture&&h.delete(_)}function x(E){let _=E.target;_.removeEventListener("dispose",x),C(_)}function w(E){let _=i.get(E);if(_.__webglInit===void 0)return;let B=E.source,q=f.get(B);if(q){let Q=q[_.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&L(E),Object.keys(q).length===0&&f.delete(B)}i.remove(E)}function L(E){let _=i.get(E);n.deleteTexture(_.__webglTexture);let B=E.source,q=f.get(B);delete q[_.__cacheKey],o.memory.textures--}function C(E){let _=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(_.__webglFramebuffer[q]))for(let Q=0;Q<_.__webglFramebuffer[q].length;Q++)n.deleteFramebuffer(_.__webglFramebuffer[q][Q]);else n.deleteFramebuffer(_.__webglFramebuffer[q]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[q])}else{if(Array.isArray(_.__webglFramebuffer))for(let q=0;q<_.__webglFramebuffer.length;q++)n.deleteFramebuffer(_.__webglFramebuffer[q]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let q=0;q<_.__webglColorRenderbuffer.length;q++)_.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[q]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let B=E.textures;for(let q=0,Q=B.length;q<Q;q++){let ee=i.get(B[q]);ee.__webglTexture&&(n.deleteTexture(ee.__webglTexture),o.memory.textures--),i.remove(B[q])}i.remove(E)}let U=0;function G(){U=0}function W(){return U}function A(E){U=E}function O(){let E=U;return E>=s.maxTextures&&Te("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),U+=1,E}function k(E){let _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function K(E,_){let B=i.get(E);if(E.isVideoTexture&&ft(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&B.__version!==E.version){let q=E.image;if(q===null)Te("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Te("WebGLRenderer: Texture marked for update but image is incomplete");else{Re(B,E,_);return}}else E.isExternalTexture&&(B.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+_)}function J(E,_){let B=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){Re(B,E,_);return}else E.isExternalTexture&&(B.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+_)}function ie(E,_){let B=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){Re(B,E,_);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+_)}function pe(E,_){let B=i.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&B.__version!==E.version){De(B,E,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+_)}let ve={[Da]:n.REPEAT,[Zn]:n.CLAMP_TO_EDGE,[Ua]:n.MIRRORED_REPEAT},Ge={[kt]:n.NEAREST,[mf]:n.NEAREST_MIPMAP_NEAREST,[go]:n.NEAREST_MIPMAP_LINEAR,[Ht]:n.LINEAR,[cl]:n.LINEAR_MIPMAP_NEAREST,[Vi]:n.LINEAR_MIPMAP_LINEAR},$e={[xf]:n.NEVER,[bf]:n.ALWAYS,[vf]:n.LESS,[ql]:n.LEQUAL,[yf]:n.EQUAL,[Yl]:n.GEQUAL,[Sf]:n.GREATER,[Mf]:n.NOTEQUAL};function Oe(E,_){if(_.type===bn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Ht||_.magFilter===cl||_.magFilter===go||_.magFilter===Vi||_.minFilter===Ht||_.minFilter===cl||_.minFilter===go||_.minFilter===Vi)&&Te("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,ve[_.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,ve[_.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,ve[_.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,Ge[_.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,Ge[_.minFilter]),_.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,$e[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===kt||_.minFilter!==go&&_.minFilter!==Vi||_.type===bn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Z(E,_){let B=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",P));let q=_.source,Q=f.get(q);Q===void 0&&(Q={},f.set(q,Q));let ee=k(_);if(ee!==E.__cacheKey){Q[ee]===void 0&&(Q[ee]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),Q[ee].usedTimes++;let ae=Q[E.__cacheKey];ae!==void 0&&(Q[E.__cacheKey].usedTimes--,ae.usedTimes===0&&L(_)),E.__cacheKey=ee,E.__webglTexture=Q[ee].texture}return B}function de(E,_,B){return Math.floor(Math.floor(E/B)/_)}function se(E,_,B,q){let ee=E.updateRanges;if(ee.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,B,q,_.data);else{ee.sort((_e,re)=>_e.start-re.start);let ae=0;for(let _e=1;_e<ee.length;_e++){let re=ee[ae],te=ee[_e],Pe=re.start+re.count,Be=de(te.start,_.width,4),je=de(re.start,_.width,4);te.start<=Pe+1&&Be===je&&de(te.start+te.count-1,_.width,4)===Be?re.count=Math.max(re.count,te.start+te.count-re.start):(++ae,ee[ae]=te)}ee.length=ae+1;let X=t.getParameter(n.UNPACK_ROW_LENGTH),Y=t.getParameter(n.UNPACK_SKIP_PIXELS),fe=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let _e=0,re=ee.length;_e<re;_e++){let te=ee[_e],Pe=Math.floor(te.start/4),Be=Math.ceil(te.count/4),je=Pe%_.width,N=Math.floor(Pe/_.width),ne=Be,$=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,je),t.pixelStorei(n.UNPACK_SKIP_ROWS,N),t.texSubImage2D(n.TEXTURE_2D,0,je,N,ne,$,B,q,_.data)}E.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,X),t.pixelStorei(n.UNPACK_SKIP_PIXELS,Y),t.pixelStorei(n.UNPACK_SKIP_ROWS,fe)}}function Re(E,_,B){let q=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(q=n.TEXTURE_3D);let Q=Z(E,_),ee=_.source;t.bindTexture(q,E.__webglTexture,n.TEXTURE0+B);let ae=i.get(ee);if(ee.version!==ae.__version||Q===!0){if(t.activeTexture(n.TEXTURE0+B),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let $=Ze.getPrimaries(Ze.workingColorSpace),me=_.colorSpace===vi?null:Ze.getPrimaries(_.colorSpace),oe=_.colorSpace===vi||$===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe)}t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment);let Y=m(_.image,!1,s.maxTextureSize);Y=le(_,Y);let fe=r.convert(_.format,_.colorSpace),_e=r.convert(_.type),re=M(_.internalFormat,fe,_e,_.normalized,_.colorSpace,_.isVideoTexture);Oe(q,_);let te,Pe=_.mipmaps,Be=_.isVideoTexture!==!0,je=ae.__version===void 0||Q===!0,N=ee.dataReady,ne=T(_,Y);if(_.isDepthTexture)re=R(_.format===Hi,_.type),je&&(Be?t.texStorage2D(n.TEXTURE_2D,1,re,Y.width,Y.height):t.texImage2D(n.TEXTURE_2D,0,re,Y.width,Y.height,0,fe,_e,null));else if(_.isDataTexture)if(Pe.length>0){Be&&je&&t.texStorage2D(n.TEXTURE_2D,ne,re,Pe[0].width,Pe[0].height);for(let $=0,me=Pe.length;$<me;$++)te=Pe[$],Be?N&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,te.width,te.height,fe,_e,te.data):t.texImage2D(n.TEXTURE_2D,$,re,te.width,te.height,0,fe,_e,te.data);_.generateMipmaps=!1}else Be?(je&&t.texStorage2D(n.TEXTURE_2D,ne,re,Y.width,Y.height),N&&se(_,Y,fe,_e)):t.texImage2D(n.TEXTURE_2D,0,re,Y.width,Y.height,0,fe,_e,Y.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Be&&je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ne,re,Pe[0].width,Pe[0].height,Y.depth);for(let $=0,me=Pe.length;$<me;$++)if(te=Pe[$],_.format!==En)if(fe!==null)if(Be){if(N)if(_.layerUpdates.size>0){let oe=Yu(te.width,te.height,_.format,_.type);for(let j of _.layerUpdates){let Se=te.data.subarray(j*oe/te.data.BYTES_PER_ELEMENT,(j+1)*oe/te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,j,te.width,te.height,1,fe,Se)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,te.width,te.height,Y.depth,fe,te.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,$,re,te.width,te.height,Y.depth,0,te.data,0,0);else Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?N&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,te.width,te.height,Y.depth,fe,_e,te.data):t.texImage3D(n.TEXTURE_2D_ARRAY,$,re,te.width,te.height,Y.depth,0,fe,_e,te.data)}else{Be&&je&&t.texStorage2D(n.TEXTURE_2D,ne,re,Pe[0].width,Pe[0].height);for(let $=0,me=Pe.length;$<me;$++)te=Pe[$],_.format!==En?fe!==null?Be?N&&t.compressedTexSubImage2D(n.TEXTURE_2D,$,0,0,te.width,te.height,fe,te.data):t.compressedTexImage2D(n.TEXTURE_2D,$,re,te.width,te.height,0,te.data):Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?N&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,te.width,te.height,fe,_e,te.data):t.texImage2D(n.TEXTURE_2D,$,re,te.width,te.height,0,fe,_e,te.data)}else if(_.isDataArrayTexture)if(Be){if(je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ne,re,Y.width,Y.height,Y.depth),N)if(_.layerUpdates.size>0){let $=Yu(Y.width,Y.height,_.format,_.type);for(let me of _.layerUpdates){let oe=Y.data.subarray(me*$/Y.data.BYTES_PER_ELEMENT,(me+1)*$/Y.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,me,Y.width,Y.height,1,fe,_e,oe)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,fe,_e,Y.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,re,Y.width,Y.height,Y.depth,0,fe,_e,Y.data);else if(_.isData3DTexture)Be?(je&&t.texStorage3D(n.TEXTURE_3D,ne,re,Y.width,Y.height,Y.depth),N&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,fe,_e,Y.data)):t.texImage3D(n.TEXTURE_3D,0,re,Y.width,Y.height,Y.depth,0,fe,_e,Y.data);else if(_.isFramebufferTexture){if(je)if(Be)t.texStorage2D(n.TEXTURE_2D,ne,re,Y.width,Y.height);else{let $=Y.width,me=Y.height;for(let oe=0;oe<ne;oe++)t.texImage2D(n.TEXTURE_2D,oe,re,$,me,0,fe,_e,null),$>>=1,me>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in n){let $=n.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),Y.parentNode!==$){$.appendChild(Y),h.add(_),$.onpaint=Ue=>{let bt=Ue.changedElements;for(let nt of h)bt.includes(nt.image)&&(nt.needsUpdate=!0)},$.requestPaint();return}let me=0,oe=n.RGBA,j=n.RGBA,Se=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,me,oe,j,Se,Y),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Pe.length>0){if(Be&&je){let $=yt(Pe[0]);t.texStorage2D(n.TEXTURE_2D,ne,re,$.width,$.height)}for(let $=0,me=Pe.length;$<me;$++)te=Pe[$],Be?N&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,fe,_e,te):t.texImage2D(n.TEXTURE_2D,$,re,fe,_e,te);_.generateMipmaps=!1}else if(Be){if(je){let $=yt(Y);t.texStorage2D(n.TEXTURE_2D,ne,re,$.width,$.height)}N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe,_e,Y)}else t.texImage2D(n.TEXTURE_2D,0,re,fe,_e,Y);p(_)&&S(q),ae.__version=ee.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function De(E,_,B){if(_.image.length!==6)return;let q=Z(E,_),Q=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+B);let ee=i.get(Q);if(Q.version!==ee.__version||q===!0){t.activeTexture(n.TEXTURE0+B);let ae=Ze.getPrimaries(Ze.workingColorSpace),X=_.colorSpace===vi?null:Ze.getPrimaries(_.colorSpace),Y=_.colorSpace===vi||ae===X?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y);let fe=_.isCompressedTexture||_.image[0].isCompressedTexture,_e=_.image[0]&&_.image[0].isDataTexture,re=[];for(let j=0;j<6;j++)!fe&&!_e?re[j]=m(_.image[j],!0,s.maxCubemapSize):re[j]=_e?_.image[j].image:_.image[j],re[j]=le(_,re[j]);let te=re[0],Pe=r.convert(_.format,_.colorSpace),Be=r.convert(_.type),je=M(_.internalFormat,Pe,Be,_.normalized,_.colorSpace),N=_.isVideoTexture!==!0,ne=ee.__version===void 0||q===!0,$=Q.dataReady,me=T(_,te);Oe(n.TEXTURE_CUBE_MAP,_);let oe;if(fe){N&&ne&&t.texStorage2D(n.TEXTURE_CUBE_MAP,me,je,te.width,te.height);for(let j=0;j<6;j++){oe=re[j].mipmaps;for(let Se=0;Se<oe.length;Se++){let Ue=oe[Se];_.format!==En?Pe!==null?N?$&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se,0,0,Ue.width,Ue.height,Pe,Ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se,je,Ue.width,Ue.height,0,Ue.data):Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?$&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se,0,0,Ue.width,Ue.height,Pe,Be,Ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se,je,Ue.width,Ue.height,0,Pe,Be,Ue.data)}}}else{if(oe=_.mipmaps,N&&ne){oe.length>0&&me++;let j=yt(re[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,me,je,j.width,j.height)}for(let j=0;j<6;j++)if(_e){N?$&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,re[j].width,re[j].height,Pe,Be,re[j].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,je,re[j].width,re[j].height,0,Pe,Be,re[j].data);for(let Se=0;Se<oe.length;Se++){let bt=oe[Se].image[j].image;N?$&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se+1,0,0,bt.width,bt.height,Pe,Be,bt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se+1,je,bt.width,bt.height,0,Pe,Be,bt.data)}}else{N?$&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Pe,Be,re[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,je,Pe,Be,re[j]);for(let Se=0;Se<oe.length;Se++){let Ue=oe[Se];N?$&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se+1,0,0,Pe,Be,Ue.image[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se+1,je,Pe,Be,Ue.image[j])}}}p(_)&&S(n.TEXTURE_CUBE_MAP),ee.__version=Q.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function Ie(E,_,B,q,Q,ee){let ae=r.convert(B.format,B.colorSpace),X=r.convert(B.type),Y=M(B.internalFormat,ae,X,B.normalized,B.colorSpace),fe=i.get(_),_e=i.get(B);if(_e.__renderTarget=_,!fe.__hasExternalTextures){let re=Math.max(1,_.width>>ee),te=Math.max(1,_.height>>ee);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,ee,Y,re,te,_.depth,0,ae,X,null):t.texImage2D(Q,ee,Y,re,te,0,ae,X,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),Ye(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,Q,_e.__webglTexture,0,Lt(_)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,Q,_e.__webglTexture,ee),t.bindFramebuffer(n.FRAMEBUFFER,null)}function _t(E,_,B){if(n.bindRenderbuffer(n.RENDERBUFFER,E),_.depthBuffer){let q=_.depthTexture,Q=q&&q.isDepthTexture?q.type:null,ee=R(_.stencilBuffer,Q),ae=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ye(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Lt(_),ee,_.width,_.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,Lt(_),ee,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ee,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ae,n.RENDERBUFFER,E)}else{let q=_.textures;for(let Q=0;Q<q.length;Q++){let ee=q[Q],ae=r.convert(ee.format,ee.colorSpace),X=r.convert(ee.type),Y=M(ee.internalFormat,ae,X,ee.normalized,ee.colorSpace);Ye(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Lt(_),Y,_.width,_.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,Lt(_),Y,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Y,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function qe(E,_,B){let q=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Q=i.get(_.depthTexture);if(Q.__renderTarget=_,(!Q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),q){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,_.depthTexture.addEventListener("dispose",P)),Q.__webglTexture===void 0){Q.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),Oe(n.TEXTURE_CUBE_MAP,_.depthTexture);let fe=r.convert(_.depthTexture.format),_e=r.convert(_.depthTexture.type),re;_.depthTexture.format===Jn?re=n.DEPTH_COMPONENT24:_.depthTexture.format===Hi&&(re=n.DEPTH24_STENCIL8);for(let te=0;te<6;te++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,re,_.width,_.height,0,fe,_e,null)}}else K(_.depthTexture,0);let ee=Q.__webglTexture,ae=Lt(_),X=q?n.TEXTURE_CUBE_MAP_POSITIVE_X+B:n.TEXTURE_2D,Y=_.depthTexture.format===Hi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===Jn)Ye(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,X,ee,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,Y,X,ee,0);else if(_.depthTexture.format===Hi)Ye(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,X,ee,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,Y,X,ee,0);else throw new Error("Unknown depthTexture format")}function tt(E){let _=i.get(E),B=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){let q=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),q){let Q=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,q.removeEventListener("dispose",Q)};q.addEventListener("dispose",Q),_.__depthDisposeCallback=Q}_.__boundDepthTexture=q}if(E.depthTexture&&!_.__autoAllocateDepthBuffer)if(B)for(let q=0;q<6;q++)qe(_.__webglFramebuffer[q],E,q);else{let q=E.texture.mipmaps;q&&q.length>0?qe(_.__webglFramebuffer[0],E,0):qe(_.__webglFramebuffer,E,0)}else if(B){_.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[q]),_.__webglDepthbuffer[q]===void 0)_.__webglDepthbuffer[q]=n.createRenderbuffer(),_t(_.__webglDepthbuffer[q],E,!1);else{let Q=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=_.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,ee)}}else{let q=E.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),_t(_.__webglDepthbuffer,E,!1);else{let Q=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,ee)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function mt(E,_,B){let q=i.get(E);_!==void 0&&Ie(q.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&tt(E)}function Xe(E){let _=E.texture,B=i.get(E),q=i.get(_);E.addEventListener("dispose",x);let Q=E.textures,ee=E.isWebGLCubeRenderTarget===!0,ae=Q.length>1;if(ae||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=_.version,o.memory.textures++),ee){B.__webglFramebuffer=[];for(let X=0;X<6;X++)if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer[X]=[];for(let Y=0;Y<_.mipmaps.length;Y++)B.__webglFramebuffer[X][Y]=n.createFramebuffer()}else B.__webglFramebuffer[X]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer=[];for(let X=0;X<_.mipmaps.length;X++)B.__webglFramebuffer[X]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(ae)for(let X=0,Y=Q.length;X<Y;X++){let fe=i.get(Q[X]);fe.__webglTexture===void 0&&(fe.__webglTexture=n.createTexture(),o.memory.textures++)}if(E.samples>0&&Ye(E)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let X=0;X<Q.length;X++){let Y=Q[X];B.__webglColorRenderbuffer[X]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[X]);let fe=r.convert(Y.format,Y.colorSpace),_e=r.convert(Y.type),re=M(Y.internalFormat,fe,_e,Y.normalized,Y.colorSpace,E.isXRRenderTarget===!0),te=Lt(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,te,re,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+X,n.RENDERBUFFER,B.__webglColorRenderbuffer[X])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),_t(B.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ee){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),Oe(n.TEXTURE_CUBE_MAP,_);for(let X=0;X<6;X++)if(_.mipmaps&&_.mipmaps.length>0)for(let Y=0;Y<_.mipmaps.length;Y++)Ie(B.__webglFramebuffer[X][Y],E,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+X,Y);else Ie(B.__webglFramebuffer[X],E,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);p(_)&&S(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let X=0,Y=Q.length;X<Y;X++){let fe=Q[X],_e=i.get(fe),re=n.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(re=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(re,_e.__webglTexture),Oe(re,fe),Ie(B.__webglFramebuffer,E,fe,n.COLOR_ATTACHMENT0+X,re,0),p(fe)&&S(re)}t.unbindTexture()}else{let X=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(X=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(X,q.__webglTexture),Oe(X,_),_.mipmaps&&_.mipmaps.length>0)for(let Y=0;Y<_.mipmaps.length;Y++)Ie(B.__webglFramebuffer[Y],E,_,n.COLOR_ATTACHMENT0,X,Y);else Ie(B.__webglFramebuffer,E,_,n.COLOR_ATTACHMENT0,X,0);p(_)&&S(X),t.unbindTexture()}E.depthBuffer&&tt(E)}function Pt(E){let _=E.textures;for(let B=0,q=_.length;B<q;B++){let Q=_[B];if(p(Q)){let ee=b(E),ae=i.get(Q).__webglTexture;t.bindTexture(ee,ae),S(ee),t.unbindTexture()}}}let xt=[],ln=[];function D(E){if(E.samples>0){if(Ye(E)===!1){let _=E.textures,B=E.width,q=E.height,Q=n.COLOR_BUFFER_BIT,ee=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=i.get(E),X=_.length>1;if(X)for(let fe=0;fe<_.length;fe++)t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);let Y=E.texture.mipmaps;Y&&Y.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let fe=0;fe<_.length;fe++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),X){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ae.__webglColorRenderbuffer[fe]);let _e=i.get(_[fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,_e,0)}n.blitFramebuffer(0,0,B,q,0,0,B,q,Q,n.NEAREST),l===!0&&(xt.length=0,ln.length=0,xt.push(n.COLOR_ATTACHMENT0+fe),E.depthBuffer&&E.resolveDepthBuffer===!1&&(xt.push(ee),ln.push(ee),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ln)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,xt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),X)for(let fe=0;fe<_.length;fe++){t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,ae.__webglColorRenderbuffer[fe]);let _e=i.get(_[fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,_e,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){let _=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function Lt(E){return Math.min(s.maxSamples,E.samples)}function Ye(E){let _=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ft(E){let _=o.render.frame;d.get(E)!==_&&(d.set(E,_),E.update())}function le(E,_){let B=E.colorSpace,q=E.format,Q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||B!==Vr&&B!==vi&&(Ze.getTransfer(B)===Qe?(q!==En||Q!==nn)&&Te("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ae("WebGLTextures: Unsupported texture color space:",B)),_}function yt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=G,this.getTextureUnits=W,this.setTextureUnits=A,this.setTexture2D=K,this.setTexture2DArray=J,this.setTexture3D=ie,this.setTextureCube=pe,this.rebindTextures=mt,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=D,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=Ye,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function FS(n,e){function t(i,s=vi){let r,o=Ze.getTransfer(s);if(i===nn)return n.UNSIGNED_BYTE;if(i===hl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===dl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Uu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Fu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Nu)return n.BYTE;if(i===Du)return n.SHORT;if(i===sr)return n.UNSIGNED_SHORT;if(i===ul)return n.INT;if(i===kn)return n.UNSIGNED_INT;if(i===bn)return n.FLOAT;if(i===ti)return n.HALF_FLOAT;if(i===Ou)return n.ALPHA;if(i===Bu)return n.RGB;if(i===En)return n.RGBA;if(i===Jn)return n.DEPTH_COMPONENT;if(i===Hi)return n.DEPTH_STENCIL;if(i===fl)return n.RED;if(i===pl)return n.RED_INTEGER;if(i===Gi)return n.RG;if(i===ml)return n.RG_INTEGER;if(i===gl)return n.RGBA_INTEGER;if(i===_o||i===xo||i===vo||i===yo)if(o===Qe)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===_o)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===_o)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===xo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===vo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===yo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===_l||i===xl||i===vl||i===yl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===_l)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===xl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===vl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===yl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Sl||i===Ml||i===bl||i===El||i===Tl||i===So||i===wl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Sl||i===Ml)return o===Qe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===bl)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===El)return r.COMPRESSED_R11_EAC;if(i===Tl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===So)return r.COMPRESSED_RG11_EAC;if(i===wl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Al||i===Cl||i===Rl||i===Il||i===Pl||i===Ll||i===Nl||i===Dl||i===Ul||i===Fl||i===Ol||i===Bl||i===kl||i===zl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Al)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Cl)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Rl)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Il)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Pl)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ll)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Nl)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Dl)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ul)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Fl)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ol)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Bl)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===kl)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===zl)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Vl||i===Hl||i===Gl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Vl)return o===Qe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Hl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Gl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Wl||i===Xl||i===Mo||i===$l)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Wl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Xl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Mo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===$l)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===rr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var OS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,BS=`
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

}`,lh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Qr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new pn({vertexShader:OS,fragmentShader:BS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new qt(new no(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ch=class extends Un{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,d=null,h=null,u=null,f=null,g=null,y=typeof XRWebGLBinding<"u",m=new lh,p={},S=t.getContextAttributes(),b=null,M=null,R=[],T=[],P=new Ce,x=null,w=new $t;w.viewport=new vt;let L=new $t;L.viewport=new vt;let C=[w,L],U=new ol,G=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let de=R[Z];return de===void 0&&(de=new Ks,R[Z]=de),de.getTargetRaySpace()},this.getControllerGrip=function(Z){let de=R[Z];return de===void 0&&(de=new Ks,R[Z]=de),de.getGripSpace()},this.getHand=function(Z){let de=R[Z];return de===void 0&&(de=new Ks,R[Z]=de),de.getHandSpace()};function A(Z){let de=T.indexOf(Z.inputSource);if(de===-1)return;let se=R[de];se!==void 0&&(se.update(Z.inputSource,Z.frame,c||o),se.dispatchEvent({type:Z.type,data:Z.inputSource}))}function O(){s.removeEventListener("select",A),s.removeEventListener("selectstart",A),s.removeEventListener("selectend",A),s.removeEventListener("squeeze",A),s.removeEventListener("squeezestart",A),s.removeEventListener("squeezeend",A),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",k);for(let Z=0;Z<R.length;Z++){let de=T[Z];de!==null&&(T[Z]=null,R[Z].disconnect(de))}G=null,W=null,m.reset();for(let Z in p)delete p[Z];e.setRenderTarget(b),f=null,u=null,h=null,s=null,M=null,Oe.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&Te("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&Te("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",A),s.addEventListener("selectstart",A),s.addEventListener("selectend",A),s.addEventListener("squeeze",A),s.addEventListener("squeezestart",A),s.addEventListener("squeezeend",A),s.addEventListener("end",O),s.addEventListener("inputsourceschange",k),S.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(P),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,Re=null,De=null;S.depth&&(De=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=S.stencil?Hi:Jn,Re=S.stencil?rr:kn);let Ie={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:r};h=this.getBinding(),u=h.createProjectionLayer(Ie),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new fn(u.textureWidth,u.textureHeight,{format:En,type:nn,depthTexture:new xi(u.textureWidth,u.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let se={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,se),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new fn(f.framebufferWidth,f.framebufferHeight,{format:En,type:nn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Oe.setContext(s),Oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function k(Z){for(let de=0;de<Z.removed.length;de++){let se=Z.removed[de],Re=T.indexOf(se);Re>=0&&(T[Re]=null,R[Re].disconnect(se))}for(let de=0;de<Z.added.length;de++){let se=Z.added[de],Re=T.indexOf(se);if(Re===-1){for(let Ie=0;Ie<R.length;Ie++)if(Ie>=T.length){T.push(se),Re=Ie;break}else if(T[Ie]===null){T[Ie]=se,Re=Ie;break}if(Re===-1)break}let De=R[Re];De&&De.connect(se)}}let K=new I,J=new I;function ie(Z,de,se){K.setFromMatrixPosition(de.matrixWorld),J.setFromMatrixPosition(se.matrixWorld);let Re=K.distanceTo(J),De=de.projectionMatrix.elements,Ie=se.projectionMatrix.elements,_t=De[14]/(De[10]-1),qe=De[14]/(De[10]+1),tt=(De[9]+1)/De[5],mt=(De[9]-1)/De[5],Xe=(De[8]-1)/De[0],Pt=(Ie[8]+1)/Ie[0],xt=_t*Xe,ln=_t*Pt,D=Re/(-Xe+Pt),Lt=D*-Xe;if(de.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Lt),Z.translateZ(D),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),De[10]===-1)Z.projectionMatrix.copy(de.projectionMatrix),Z.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{let Ye=_t+D,ft=qe+D,le=xt-Lt,yt=ln+(Re-Lt),E=tt*qe/ft*Ye,_=mt*qe/ft*Ye;Z.projectionMatrix.makePerspective(le,yt,E,_,Ye,ft),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function pe(Z,de){de===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(de.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let de=Z.near,se=Z.far;m.texture!==null&&(m.depthNear>0&&(de=m.depthNear),m.depthFar>0&&(se=m.depthFar)),U.near=L.near=w.near=de,U.far=L.far=w.far=se,(G!==U.near||W!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),G=U.near,W=U.far),U.layers.mask=Z.layers.mask|6,w.layers.mask=U.layers.mask&-5,L.layers.mask=U.layers.mask&-3;let Re=Z.parent,De=U.cameras;pe(U,Re);for(let Ie=0;Ie<De.length;Ie++)pe(De[Ie],Re);De.length===2?ie(U,w,L):U.projectionMatrix.copy(w.projectionMatrix),ve(Z,U,Re)};function ve(Z,de,se){se===null?Z.matrix.copy(de.matrixWorld):(Z.matrix.copy(se.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(de.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(de.projectionMatrix),Z.projectionMatrixInverse.copy(de.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=qs*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(Z){return p[Z]};let Ge=null;function $e(Z,de){if(d=de.getViewerPose(c||o),g=de,d!==null){let se=d.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let Re=!1;se.length!==U.cameras.length&&(U.cameras.length=0,Re=!0);for(let qe=0;qe<se.length;qe++){let tt=se[qe],mt=null;if(f!==null)mt=f.getViewport(tt);else{let Pt=h.getViewSubImage(u,tt);mt=Pt.viewport,qe===0&&(e.setRenderTargetTextures(M,Pt.colorTexture,Pt.depthStencilTexture),e.setRenderTarget(M))}let Xe=C[qe];Xe===void 0&&(Xe=new $t,Xe.layers.enable(qe),Xe.viewport=new vt,C[qe]=Xe),Xe.matrix.fromArray(tt.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(tt.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(mt.x,mt.y,mt.width,mt.height),qe===0&&(U.matrix.copy(Xe.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Re===!0&&U.cameras.push(Xe)}let De=s.enabledFeatures;if(De&&De.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){h=i.getBinding();let qe=h.getDepthInformation(se[0]);qe&&qe.isValid&&qe.texture&&m.init(qe,s.renderState)}if(De&&De.includes("camera-access")&&y){e.state.unbindTexture(),h=i.getBinding();for(let qe=0;qe<se.length;qe++){let tt=se[qe].camera;if(tt){let mt=p[tt];mt||(mt=new Qr,p[tt]=mt);let Xe=h.getCameraImage(tt);mt.sourceTexture=Xe}}}}for(let se=0;se<R.length;se++){let Re=T[se],De=R[se];Re!==null&&De!==void 0&&De.update(Re,de,c||o)}Ge&&Ge(Z,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),g=null}let Oe=new Qf;Oe.setAnimationLoop($e),this.setAnimationLoop=function(Z){Ge=Z},this.dispose=function(){}}},kS=new st,rp=new Le;rp.set(-1,0,0,0,1,0,0,0,1);function zS(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Xu(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,b,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),d(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Jt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Jt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=e.get(p),b=S.envMap,M=S.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(kS.makeRotationFromEuler(M)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(rp),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Jt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function VS(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,b){let M=b.program;i.uniformBlockBinding(S,M)}function c(S,b){let M=s[S.id];M===void 0&&(g(S),M=d(S),s[S.id]=M,S.addEventListener("dispose",m));let R=b.program;i.updateUBOMapping(S,R);let T=e.render.frame;r[S.id]!==T&&(u(S),r[S.id]=T)}function d(S){let b=h();S.__bindingPointIndex=b;let M=n.createBuffer(),R=S.__size,T=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,R,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,M),M}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return Ae("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){let b=s[S.id],M=S.uniforms,R=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let T=0,P=M.length;T<P;T++){let x=Array.isArray(M[T])?M[T]:[M[T]];for(let w=0,L=x.length;w<L;w++){let C=x[w];if(f(C,T,w,R)===!0){let U=C.__offset,G=Array.isArray(C.value)?C.value:[C.value],W=0;for(let A=0;A<G.length;A++){let O=G[A],k=y(O);typeof O=="number"||typeof O=="boolean"?(C.__data[0]=O,n.bufferSubData(n.UNIFORM_BUFFER,U+W,C.__data)):O.isMatrix3?(C.__data[0]=O.elements[0],C.__data[1]=O.elements[1],C.__data[2]=O.elements[2],C.__data[3]=0,C.__data[4]=O.elements[3],C.__data[5]=O.elements[4],C.__data[6]=O.elements[5],C.__data[7]=0,C.__data[8]=O.elements[6],C.__data[9]=O.elements[7],C.__data[10]=O.elements[8],C.__data[11]=0):ArrayBuffer.isView(O)?C.__data.set(new O.constructor(O.buffer,O.byteOffset,C.__data.length)):(O.toArray(C.__data,W),W+=k.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(S,b,M,R){let T=S.value,P=b+"_"+M;if(R[P]===void 0)return typeof T=="number"||typeof T=="boolean"?R[P]=T:ArrayBuffer.isView(T)?R[P]=T.slice():R[P]=T.clone(),!0;{let x=R[P];if(typeof T=="number"||typeof T=="boolean"){if(x!==T)return R[P]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(x.equals(T)===!1)return x.copy(T),!0}}return!1}function g(S){let b=S.uniforms,M=0,R=16;for(let P=0,x=b.length;P<x;P++){let w=Array.isArray(b[P])?b[P]:[b[P]];for(let L=0,C=w.length;L<C;L++){let U=w[L],G=Array.isArray(U.value)?U.value:[U.value];for(let W=0,A=G.length;W<A;W++){let O=G[W],k=y(O),K=M%R,J=K%k.boundary,ie=K+J;M+=J,ie!==0&&R-ie<k.storage&&(M+=R-ie),U.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=M,M+=k.storage}}}let T=M%R;return T>0&&(M+=R-T),S.__size=M,S.__cache={},this}function y(S){let b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?Te("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(b.boundary=16,b.storage=S.byteLength):Te("WebGLRenderer: Unsupported uniform value type.",S),b}function m(S){let b=S.target;b.removeEventListener("dispose",m);let M=o.indexOf(b.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(let S in s)n.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var HS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ni=null;function GS(){return ni===null&&(ni=new Yr(HS,16,16,Gi,ti),ni.name="DFG_LUT",ni.minFilter=Ht,ni.magFilter=Ht,ni.wrapS=Zn,ni.wrapT=Zn,ni.generateMipmaps=!1,ni.needsUpdate=!0),ni}var Ql=class{constructor(e={}){let{canvas:t=Ef(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:f=nn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;let y=f,m=new Set([gl,ml,pl]),p=new Set([nn,kn,sr,rr,hl,dl]),S=new Uint32Array(4),b=new Int32Array(4),M=new I,R=null,T=null,P=[],x=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,C=!1,U=null;this._outputColorSpace=Kt;let G=0,W=0,A=null,O=-1,k=null,K=new vt,J=new vt,ie=null,pe=new ze(0),ve=0,Ge=t.width,$e=t.height,Oe=1,Z=null,de=null,se=new vt(0,0,Ge,$e),Re=new vt(0,0,Ge,$e),De=!1,Ie=new Js,_t=!1,qe=!1,tt=new st,mt=new I,Xe=new vt,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},xt=!1;function ln(){return A===null?Oe:1}let D=i;function Lt(v,F){return t.getContext(v,F)}try{let v={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"184"}`),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",Se,!1),t.addEventListener("webglcontextcreationerror",Ue,!1),D===null){let F="webgl2";if(D=Lt(F,v),D===null)throw Lt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw Ae("WebGLRenderer: "+v.message),v}let Ye,ft,le,yt,E,_,B,q,Q,ee,ae,X,Y,fe,_e,re,te,Pe,Be,je,N,ne,$;function me(){Ye=new Kv(D),Ye.init(),N=new FS(D,Ye),ft=new Hv(D,Ye,e,N),le=new DS(D,Ye),ft.reversedDepthBuffer&&u&&le.buffers.depth.setReversed(!0),yt=new Qv(D),E=new yS,_=new US(D,Ye,le,E,ft,N,yt),B=new Zv(L),q=new i0(D),ne=new zv(D,q),Q=new Jv(D,q,yt,ne),ee=new ty(D,Q,q,ne,yt),Pe=new ey(D,ft,_),_e=new Gv(E),ae=new vS(L,B,Ye,ft,ne,_e),X=new zS(L,E),Y=new MS,fe=new CS(Ye),te=new kv(L,B,le,ee,g,l),re=new NS(L,ee,ft),$=new VS(D,yt,ft,le),Be=new Vv(D,Ye,yt),je=new jv(D,Ye,yt),yt.programs=ae.programs,L.capabilities=ft,L.extensions=Ye,L.properties=E,L.renderLists=Y,L.shadowMap=re,L.state=le,L.info=yt}me(),y!==nn&&(w=new iy(y,t.width,t.height,s,r));let oe=new ch(L,D);this.xr=oe,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let v=Ye.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=Ye.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return Oe},this.setPixelRatio=function(v){v!==void 0&&(Oe=v,this.setSize(Ge,$e,!1))},this.getSize=function(v){return v.set(Ge,$e)},this.setSize=function(v,F,H=!0){if(oe.isPresenting){Te("WebGLRenderer: Can't change size while VR device is presenting.");return}Ge=v,$e=F,t.width=Math.floor(v*Oe),t.height=Math.floor(F*Oe),H===!0&&(t.style.width=v+"px",t.style.height=F+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,v,F)},this.getDrawingBufferSize=function(v){return v.set(Ge*Oe,$e*Oe).floor()},this.setDrawingBufferSize=function(v,F,H){Ge=v,$e=F,Oe=H,t.width=Math.floor(v*H),t.height=Math.floor(F*H),this.setViewport(0,0,v,F)},this.setEffects=function(v){if(y===nn){Ae("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let F=0;F<v.length;F++)if(v[F].isOutputPass===!0){Te("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(K)},this.getViewport=function(v){return v.copy(se)},this.setViewport=function(v,F,H,z){v.isVector4?se.set(v.x,v.y,v.z,v.w):se.set(v,F,H,z),le.viewport(K.copy(se).multiplyScalar(Oe).round())},this.getScissor=function(v){return v.copy(Re)},this.setScissor=function(v,F,H,z){v.isVector4?Re.set(v.x,v.y,v.z,v.w):Re.set(v,F,H,z),le.scissor(J.copy(Re).multiplyScalar(Oe).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(v){le.setScissorTest(De=v)},this.setOpaqueSort=function(v){Z=v},this.setTransparentSort=function(v){de=v},this.getClearColor=function(v){return v.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor(...arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha(...arguments)},this.clear=function(v=!0,F=!0,H=!0){let z=0;if(v){let V=!1;if(A!==null){let he=A.texture.format;V=m.has(he)}if(V){let he=A.texture.type,xe=p.has(he),ue=te.getClearColor(),ye=te.getClearAlpha(),Me=ue.r,Fe=ue.g,He=ue.b;xe?(S[0]=Me,S[1]=Fe,S[2]=He,S[3]=ye,D.clearBufferuiv(D.COLOR,0,S)):(b[0]=Me,b[1]=Fe,b[2]=He,b[3]=ye,D.clearBufferiv(D.COLOR,0,b))}else z|=D.COLOR_BUFFER_BIT}F&&(z|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&D.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),U=v},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",Ue,!1),te.dispose(),Y.dispose(),fe.dispose(),E.dispose(),B.dispose(),ee.dispose(),ne.dispose(),$.dispose(),ae.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",od),oe.removeEventListener("sessionend",ad),ns.stop()};function j(v){v.preventDefault(),Hu("WebGLRenderer: Context Lost."),C=!0}function Se(){Hu("WebGLRenderer: Context Restored."),C=!1;let v=yt.autoReset,F=re.enabled,H=re.autoUpdate,z=re.needsUpdate,V=re.type;me(),yt.autoReset=v,re.enabled=F,re.autoUpdate=H,re.needsUpdate=z,re.type=V}function Ue(v){Ae("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function bt(v){let F=v.target;F.removeEventListener("dispose",bt),nt(F)}function nt(v){li(v),E.remove(v)}function li(v){let F=E.get(v).programs;F!==void 0&&(F.forEach(function(H){ae.releaseProgram(H)}),v.isShaderMaterial&&ae.releaseShaderCache(v))}this.renderBufferDirect=function(v,F,H,z,V,he){F===null&&(F=Pt);let xe=V.isMesh&&V.matrixWorld.determinant()<0,ue=t_(v,F,H,z,V);le.setMaterial(z,xe);let ye=H.index,Me=1;if(z.wireframe===!0){if(ye=Q.getWireframeAttribute(H),ye===void 0)return;Me=2}let Fe=H.drawRange,He=H.attributes.position,be=Fe.start*Me,it=(Fe.start+Fe.count)*Me;he!==null&&(be=Math.max(be,he.start*Me),it=Math.min(it,(he.start+he.count)*Me)),ye!==null?(be=Math.max(be,0),it=Math.min(it,ye.count)):He!=null&&(be=Math.max(be,0),it=Math.min(it,He.count));let Et=it-be;if(Et<0||Et===1/0)return;ne.setup(V,z,ue,H,ye);let St,ut=Be;if(ye!==null&&(St=q.get(ye),ut=je,ut.setIndex(St)),V.isMesh)z.wireframe===!0?(le.setLineWidth(z.wireframeLinewidth*ln()),ut.setMode(D.LINES)):ut.setMode(D.TRIANGLES);else if(V.isLine){let Gt=z.linewidth;Gt===void 0&&(Gt=1),le.setLineWidth(Gt*ln()),V.isLineSegments?ut.setMode(D.LINES):V.isLineLoop?ut.setMode(D.LINE_LOOP):ut.setMode(D.LINE_STRIP)}else V.isPoints?ut.setMode(D.POINTS):V.isSprite&&ut.setMode(D.TRIANGLES);if(V.isBatchedMesh)if(Ye.get("WEBGL_multi_draw"))ut.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Gt=V._multiDrawStarts,ge=V._multiDrawCounts,cn=V._multiDrawCount,Je=ye?q.get(ye).bytesPerElement:1,vn=E.get(z).currentProgram.getUniforms();for(let qn=0;qn<cn;qn++)vn.setValue(D,"_gl_DrawID",qn),ut.render(Gt[qn]/Je,ge[qn])}else if(V.isInstancedMesh)ut.renderInstances(be,Et,V.count);else if(H.isInstancedBufferGeometry){let Gt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,ge=Math.min(H.instanceCount,Gt);ut.renderInstances(be,Et,ge)}else ut.render(be,Et)};function $n(v,F,H){v.transparent===!0&&v.side===Mn&&v.forceSinglePass===!1?(v.side=Jt,v.needsUpdate=!0,jo(v,F,H),v.side=mi,v.needsUpdate=!0,jo(v,F,H),v.side=Mn):jo(v,F,H)}this.compile=function(v,F,H=null){H===null&&(H=v),T=fe.get(H),T.init(F),x.push(T),H.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),v!==H&&v.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),T.setupLights();let z=new Set;return v.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let he=V.material;if(he)if(Array.isArray(he))for(let xe=0;xe<he.length;xe++){let ue=he[xe];$n(ue,H,V),z.add(ue)}else $n(he,H,V),z.add(he)}),T=x.pop(),z},this.compileAsync=function(v,F,H=null){let z=this.compile(v,F,H);return new Promise(V=>{function he(){if(z.forEach(function(xe){E.get(xe).currentProgram.isReady()&&z.delete(xe)}),z.size===0){V(v);return}setTimeout(he,10)}Ye.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Bc=null;function Qg(v){Bc&&Bc(v)}function od(){ns.stop()}function ad(){ns.start()}let ns=new Qf;ns.setAnimationLoop(Qg),typeof self<"u"&&ns.setContext(self),this.setAnimationLoop=function(v){Bc=v,oe.setAnimationLoop(v),v===null?ns.stop():ns.start()},oe.addEventListener("sessionstart",od),oe.addEventListener("sessionend",ad),this.render=function(v,F){if(F!==void 0&&F.isCamera!==!0){Ae("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;U!==null&&U.renderStart(v,F);let H=oe.enabled===!0&&oe.isPresenting===!0,z=w!==null&&(A===null||H)&&w.begin(L,A);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(F),F=oe.getCamera()),v.isScene===!0&&v.onBeforeRender(L,v,F,A),T=fe.get(v,x.length),T.init(F),T.state.textureUnits=_.getTextureUnits(),x.push(T),tt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ie.setFromProjectionMatrix(tt,Dn,F.reversedDepth),qe=this.localClippingEnabled,_t=_e.init(this.clippingPlanes,qe),R=Y.get(v,P.length),R.init(),P.push(R),oe.enabled===!0&&oe.isPresenting===!0){let xe=L.xr.getDepthSensingMesh();xe!==null&&kc(xe,F,-1/0,L.sortObjects)}kc(v,F,0,L.sortObjects),R.finish(),L.sortObjects===!0&&R.sort(Z,de),xt=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,xt&&te.addToRenderList(R,v),this.info.render.frame++,_t===!0&&_e.beginShadows();let V=T.state.shadowsArray;if(re.render(V,v,F),_t===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset(),(z&&w.hasRenderPass())===!1){let xe=R.opaque,ue=R.transmissive;if(T.setupLights(),F.isArrayCamera){let ye=F.cameras;if(ue.length>0)for(let Me=0,Fe=ye.length;Me<Fe;Me++){let He=ye[Me];cd(xe,ue,v,He)}xt&&te.render(v);for(let Me=0,Fe=ye.length;Me<Fe;Me++){let He=ye[Me];ld(R,v,He,He.viewport)}}else ue.length>0&&cd(xe,ue,v,F),xt&&te.render(v),ld(R,v,F)}A!==null&&W===0&&(_.updateMultisampleRenderTarget(A),_.updateRenderTargetMipmap(A)),z&&w.end(L),v.isScene===!0&&v.onAfterRender(L,v,F),ne.resetDefaultState(),O=-1,k=null,x.pop(),x.length>0?(T=x[x.length-1],_.setTextureUnits(T.state.textureUnits),_t===!0&&_e.setGlobalState(L.clippingPlanes,T.state.camera)):T=null,P.pop(),P.length>0?R=P[P.length-1]:R=null,U!==null&&U.renderEnd()};function kc(v,F,H,z){if(v.visible===!1)return;if(v.layers.test(F.layers)){if(v.isGroup)H=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(F);else if(v.isLightProbeGrid)T.pushLightProbeGrid(v);else if(v.isLight)T.pushLight(v),v.castShadow&&T.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||Ie.intersectsSprite(v)){z&&Xe.setFromMatrixPosition(v.matrixWorld).applyMatrix4(tt);let xe=ee.update(v),ue=v.material;ue.visible&&R.push(v,xe,ue,H,Xe.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||Ie.intersectsObject(v))){let xe=ee.update(v),ue=v.material;if(z&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Xe.copy(v.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Xe.copy(xe.boundingSphere.center)),Xe.applyMatrix4(v.matrixWorld).applyMatrix4(tt)),Array.isArray(ue)){let ye=xe.groups;for(let Me=0,Fe=ye.length;Me<Fe;Me++){let He=ye[Me],be=ue[He.materialIndex];be&&be.visible&&R.push(v,xe,be,H,Xe.z,He)}}else ue.visible&&R.push(v,xe,ue,H,Xe.z,null)}}let he=v.children;for(let xe=0,ue=he.length;xe<ue;xe++)kc(he[xe],F,H,z)}function ld(v,F,H,z){let{opaque:V,transmissive:he,transparent:xe}=v;T.setupLightsView(H),_t===!0&&_e.setGlobalState(L.clippingPlanes,H),z&&le.viewport(K.copy(z)),V.length>0&&Jo(V,F,H),he.length>0&&Jo(he,F,H),xe.length>0&&Jo(xe,F,H),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function cd(v,F,H,z){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[z.id]===void 0){let be=Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[z.id]=new fn(1,1,{generateMipmaps:!0,type:be?ti:nn,minFilter:Vi,samples:Math.max(4,ft.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}let he=T.state.transmissionRenderTarget[z.id],xe=z.viewport||K;he.setSize(xe.z*L.transmissionResolutionScale,xe.w*L.transmissionResolutionScale);let ue=L.getRenderTarget(),ye=L.getActiveCubeFace(),Me=L.getActiveMipmapLevel();L.setRenderTarget(he),L.getClearColor(pe),ve=L.getClearAlpha(),ve<1&&L.setClearColor(16777215,.5),L.clear(),xt&&te.render(H);let Fe=L.toneMapping;L.toneMapping=Bn;let He=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),T.setupLightsView(z),_t===!0&&_e.setGlobalState(L.clippingPlanes,z),Jo(v,H,z),_.updateMultisampleRenderTarget(he),_.updateRenderTargetMipmap(he),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let it=0,Et=F.length;it<Et;it++){let St=F[it],{object:ut,geometry:Gt,material:ge,group:cn}=St;if(ge.side===Mn&&ut.layers.test(z.layers)){let Je=ge.side;ge.side=Jt,ge.needsUpdate=!0,ud(ut,H,z,Gt,ge,cn),ge.side=Je,ge.needsUpdate=!0,be=!0}}be===!0&&(_.updateMultisampleRenderTarget(he),_.updateRenderTargetMipmap(he))}L.setRenderTarget(ue,ye,Me),L.setClearColor(pe,ve),He!==void 0&&(z.viewport=He),L.toneMapping=Fe}function Jo(v,F,H){let z=F.isScene===!0?F.overrideMaterial:null;for(let V=0,he=v.length;V<he;V++){let xe=v[V],{object:ue,geometry:ye,group:Me}=xe,Fe=xe.material;Fe.allowOverride===!0&&z!==null&&(Fe=z),ue.layers.test(H.layers)&&ud(ue,F,H,ye,Fe,Me)}}function ud(v,F,H,z,V,he){v.onBeforeRender(L,F,H,z,V,he),v.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),V.onBeforeRender(L,F,H,z,v,he),V.transparent===!0&&V.side===Mn&&V.forceSinglePass===!1?(V.side=Jt,V.needsUpdate=!0,L.renderBufferDirect(H,F,z,V,v,he),V.side=mi,V.needsUpdate=!0,L.renderBufferDirect(H,F,z,V,v,he),V.side=Mn):L.renderBufferDirect(H,F,z,V,v,he),v.onAfterRender(L,F,H,z,V,he)}function jo(v,F,H){F.isScene!==!0&&(F=Pt);let z=E.get(v),V=T.state.lights,he=T.state.shadowsArray,xe=V.state.version,ue=ae.getParameters(v,V.state,he,F,H,T.state.lightProbeGridArray),ye=ae.getProgramCacheKey(ue),Me=z.programs;z.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?F.environment:null,z.fog=F.fog;let Fe=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;z.envMap=B.get(v.envMap||z.environment,Fe),z.envMapRotation=z.environment!==null&&v.envMap===null?F.environmentRotation:v.envMapRotation,Me===void 0&&(v.addEventListener("dispose",bt),Me=new Map,z.programs=Me);let He=Me.get(ye);if(He!==void 0){if(z.currentProgram===He&&z.lightsStateVersion===xe)return dd(v,ue),He}else ue.uniforms=ae.getUniforms(v),U!==null&&v.isNodeMaterial&&U.build(v,H,ue),v.onBeforeCompile(ue,L),He=ae.acquireProgram(ue,ye),Me.set(ye,He),z.uniforms=ue.uniforms;let be=z.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(be.clippingPlanes=_e.uniform),dd(v,ue),z.needsLights=i_(v),z.lightsStateVersion=xe,z.needsLights&&(be.ambientLightColor.value=V.state.ambient,be.lightProbe.value=V.state.probe,be.directionalLights.value=V.state.directional,be.directionalLightShadows.value=V.state.directionalShadow,be.spotLights.value=V.state.spot,be.spotLightShadows.value=V.state.spotShadow,be.rectAreaLights.value=V.state.rectArea,be.ltc_1.value=V.state.rectAreaLTC1,be.ltc_2.value=V.state.rectAreaLTC2,be.pointLights.value=V.state.point,be.pointLightShadows.value=V.state.pointShadow,be.hemisphereLights.value=V.state.hemi,be.directionalShadowMatrix.value=V.state.directionalShadowMatrix,be.spotLightMatrix.value=V.state.spotLightMatrix,be.spotLightMap.value=V.state.spotLightMap,be.pointShadowMatrix.value=V.state.pointShadowMatrix),z.lightProbeGrid=T.state.lightProbeGridArray.length>0,z.currentProgram=He,z.uniformsList=null,He}function hd(v){if(v.uniformsList===null){let F=v.currentProgram.getUniforms();v.uniformsList=lr.seqWithValue(F.seq,v.uniforms)}return v.uniformsList}function dd(v,F){let H=E.get(v);H.outputColorSpace=F.outputColorSpace,H.batching=F.batching,H.batchingColor=F.batchingColor,H.instancing=F.instancing,H.instancingColor=F.instancingColor,H.instancingMorph=F.instancingMorph,H.skinning=F.skinning,H.morphTargets=F.morphTargets,H.morphNormals=F.morphNormals,H.morphColors=F.morphColors,H.morphTargetsCount=F.morphTargetsCount,H.numClippingPlanes=F.numClippingPlanes,H.numIntersection=F.numClipIntersection,H.vertexAlphas=F.vertexAlphas,H.vertexTangents=F.vertexTangents,H.toneMapping=F.toneMapping}function e_(v,F){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;M.setFromMatrixPosition(F.matrixWorld);for(let H=0,z=v.length;H<z;H++){let V=v[H];if(V.texture!==null&&V.boundingBox.containsPoint(M))return V}return null}function t_(v,F,H,z,V){F.isScene!==!0&&(F=Pt),_.resetTextureUnits();let he=F.fog,xe=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?F.environment:null,ue=A===null?L.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ze.workingColorSpace,ye=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Me=B.get(z.envMap||xe,ye),Fe=z.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,He=!!H.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),be=!!H.morphAttributes.position,it=!!H.morphAttributes.normal,Et=!!H.morphAttributes.color,St=Bn;z.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(St=L.toneMapping);let ut=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Gt=ut!==void 0?ut.length:0,ge=E.get(z),cn=T.state.lights;if(_t===!0&&(qe===!0||v!==k)){let pt=v===k&&z.id===O;_e.setState(z,v,pt)}let Je=!1;z.version===ge.__version?(ge.needsLights&&ge.lightsStateVersion!==cn.state.version||ge.outputColorSpace!==ue||V.isBatchedMesh&&ge.batching===!1||!V.isBatchedMesh&&ge.batching===!0||V.isBatchedMesh&&ge.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&ge.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&ge.instancing===!1||!V.isInstancedMesh&&ge.instancing===!0||V.isSkinnedMesh&&ge.skinning===!1||!V.isSkinnedMesh&&ge.skinning===!0||V.isInstancedMesh&&ge.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&ge.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&ge.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&ge.instancingMorph===!1&&V.morphTexture!==null||ge.envMap!==Me||z.fog===!0&&ge.fog!==he||ge.numClippingPlanes!==void 0&&(ge.numClippingPlanes!==_e.numPlanes||ge.numIntersection!==_e.numIntersection)||ge.vertexAlphas!==Fe||ge.vertexTangents!==He||ge.morphTargets!==be||ge.morphNormals!==it||ge.morphColors!==Et||ge.toneMapping!==St||ge.morphTargetsCount!==Gt||!!ge.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Je=!0):(Je=!0,ge.__version=z.version);let vn=ge.currentProgram;Je===!0&&(vn=jo(z,F,V),U&&z.isNodeMaterial&&U.onUpdateProgram(z,vn,ge));let qn=!1,Ei=!1,Cs=!1,ht=vn.getUniforms(),Tt=ge.uniforms;if(le.useProgram(vn.program)&&(qn=!0,Ei=!0,Cs=!0),z.id!==O&&(O=z.id,Ei=!0),ge.needsLights){let pt=e_(T.state.lightProbeGridArray,V);ge.lightProbeGrid!==pt&&(ge.lightProbeGrid=pt,Ei=!0)}if(qn||k!==v){le.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),ht.setValue(D,"projectionMatrix",v.projectionMatrix),ht.setValue(D,"viewMatrix",v.matrixWorldInverse);let wi=ht.map.cameraPosition;wi!==void 0&&wi.setValue(D,mt.setFromMatrixPosition(v.matrixWorld)),ft.logarithmicDepthBuffer&&ht.setValue(D,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ht.setValue(D,"isOrthographic",v.isOrthographicCamera===!0),k!==v&&(k=v,Ei=!0,Cs=!0)}if(ge.needsLights&&(cn.state.directionalShadowMap.length>0&&ht.setValue(D,"directionalShadowMap",cn.state.directionalShadowMap,_),cn.state.spotShadowMap.length>0&&ht.setValue(D,"spotShadowMap",cn.state.spotShadowMap,_),cn.state.pointShadowMap.length>0&&ht.setValue(D,"pointShadowMap",cn.state.pointShadowMap,_)),V.isSkinnedMesh){ht.setOptional(D,V,"bindMatrix"),ht.setOptional(D,V,"bindMatrixInverse");let pt=V.skeleton;pt&&(pt.boneTexture===null&&pt.computeBoneTexture(),ht.setValue(D,"boneTexture",pt.boneTexture,_))}V.isBatchedMesh&&(ht.setOptional(D,V,"batchingTexture"),ht.setValue(D,"batchingTexture",V._matricesTexture,_),ht.setOptional(D,V,"batchingIdTexture"),ht.setValue(D,"batchingIdTexture",V._indirectTexture,_),ht.setOptional(D,V,"batchingColorTexture"),V._colorsTexture!==null&&ht.setValue(D,"batchingColorTexture",V._colorsTexture,_));let Ti=H.morphAttributes;if((Ti.position!==void 0||Ti.normal!==void 0||Ti.color!==void 0)&&Pe.update(V,H,vn),(Ei||ge.receiveShadow!==V.receiveShadow)&&(ge.receiveShadow=V.receiveShadow,ht.setValue(D,"receiveShadow",V.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&F.environment!==null&&(Tt.envMapIntensity.value=F.environmentIntensity),Tt.dfgLUT!==void 0&&(Tt.dfgLUT.value=GS()),Ei){if(ht.setValue(D,"toneMappingExposure",L.toneMappingExposure),ge.needsLights&&n_(Tt,Cs),he&&z.fog===!0&&X.refreshFogUniforms(Tt,he),X.refreshMaterialUniforms(Tt,z,Oe,$e,T.state.transmissionRenderTarget[v.id]),ge.needsLights&&ge.lightProbeGrid){let pt=ge.lightProbeGrid;Tt.probesSH.value=pt.texture,Tt.probesMin.value.copy(pt.boundingBox.min),Tt.probesMax.value.copy(pt.boundingBox.max),Tt.probesResolution.value.copy(pt.resolution)}lr.upload(D,hd(ge),Tt,_)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(lr.upload(D,hd(ge),Tt,_),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ht.setValue(D,"center",V.center),ht.setValue(D,"modelViewMatrix",V.modelViewMatrix),ht.setValue(D,"normalMatrix",V.normalMatrix),ht.setValue(D,"modelMatrix",V.matrixWorld),z.uniformsGroups!==void 0){let pt=z.uniformsGroups;for(let wi=0,Rs=pt.length;wi<Rs;wi++){let fd=pt[wi];$.update(fd,vn),$.bind(fd,vn)}}return vn}function n_(v,F){v.ambientLightColor.needsUpdate=F,v.lightProbe.needsUpdate=F,v.directionalLights.needsUpdate=F,v.directionalLightShadows.needsUpdate=F,v.pointLights.needsUpdate=F,v.pointLightShadows.needsUpdate=F,v.spotLights.needsUpdate=F,v.spotLightShadows.needsUpdate=F,v.rectAreaLights.needsUpdate=F,v.hemisphereLights.needsUpdate=F}function i_(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(v,F,H){let z=E.get(v);z.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),E.get(v.texture).__webglTexture=F,E.get(v.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:H,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,F){let H=E.get(v);H.__webglFramebuffer=F,H.__useDefaultFramebuffer=F===void 0};let s_=D.createFramebuffer();this.setRenderTarget=function(v,F=0,H=0){A=v,G=F,W=H;let z=null,V=!1,he=!1;if(v){let ue=E.get(v);if(ue.__useDefaultFramebuffer!==void 0){le.bindFramebuffer(D.FRAMEBUFFER,ue.__webglFramebuffer),K.copy(v.viewport),J.copy(v.scissor),ie=v.scissorTest,le.viewport(K),le.scissor(J),le.setScissorTest(ie),O=-1;return}else if(ue.__webglFramebuffer===void 0)_.setupRenderTarget(v);else if(ue.__hasExternalTextures)_.rebindTextures(v,E.get(v.texture).__webglTexture,E.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Fe=v.depthTexture;if(ue.__boundDepthTexture!==Fe){if(Fe!==null&&E.has(Fe)&&(v.width!==Fe.image.width||v.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_.setupDepthRenderbuffer(v)}}let ye=v.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(he=!0);let Me=E.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Me[F])?z=Me[F][H]:z=Me[F],V=!0):v.samples>0&&_.useMultisampledRTT(v)===!1?z=E.get(v).__webglMultisampledFramebuffer:Array.isArray(Me)?z=Me[H]:z=Me,K.copy(v.viewport),J.copy(v.scissor),ie=v.scissorTest}else K.copy(se).multiplyScalar(Oe).floor(),J.copy(Re).multiplyScalar(Oe).floor(),ie=De;if(H!==0&&(z=s_),le.bindFramebuffer(D.FRAMEBUFFER,z)&&le.drawBuffers(v,z),le.viewport(K),le.scissor(J),le.setScissorTest(ie),V){let ue=E.get(v.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,ue.__webglTexture,H)}else if(he){let ue=F;for(let ye=0;ye<v.textures.length;ye++){let Me=E.get(v.textures[ye]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+ye,Me.__webglTexture,H,ue)}}else if(v!==null&&H!==0){let ue=E.get(v.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ue.__webglTexture,H)}O=-1},this.readRenderTargetPixels=function(v,F,H,z,V,he,xe,ue=0){if(!(v&&v.isWebGLRenderTarget)){Ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=E.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&xe!==void 0&&(ye=ye[xe]),ye){le.bindFramebuffer(D.FRAMEBUFFER,ye);try{let Me=v.textures[ue],Fe=Me.format,He=Me.type;if(v.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ue),!ft.textureFormatReadable(Fe)){Ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(He)){Ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=v.width-z&&H>=0&&H<=v.height-V&&D.readPixels(F,H,z,V,N.convert(Fe),N.convert(He),he)}finally{let Me=A!==null?E.get(A).__webglFramebuffer:null;le.bindFramebuffer(D.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(v,F,H,z,V,he,xe,ue=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=E.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&xe!==void 0&&(ye=ye[xe]),ye)if(F>=0&&F<=v.width-z&&H>=0&&H<=v.height-V){le.bindFramebuffer(D.FRAMEBUFFER,ye);let Me=v.textures[ue],Fe=Me.format,He=Me.type;if(v.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ue),!ft.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let be=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,be),D.bufferData(D.PIXEL_PACK_BUFFER,he.byteLength,D.STREAM_READ),D.readPixels(F,H,z,V,N.convert(Fe),N.convert(He),0);let it=A!==null?E.get(A).__webglFramebuffer:null;le.bindFramebuffer(D.FRAMEBUFFER,it);let Et=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await wf(D,Et,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,be),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,he),D.deleteBuffer(be),D.deleteSync(Et),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,F=null,H=0){let z=Math.pow(2,-H),V=Math.floor(v.image.width*z),he=Math.floor(v.image.height*z),xe=F!==null?F.x:0,ue=F!==null?F.y:0;_.setTexture2D(v,0),D.copyTexSubImage2D(D.TEXTURE_2D,H,0,0,xe,ue,V,he),le.unbindTexture()};let r_=D.createFramebuffer(),o_=D.createFramebuffer();this.copyTextureToTexture=function(v,F,H=null,z=null,V=0,he=0){let xe,ue,ye,Me,Fe,He,be,it,Et,St=v.isCompressedTexture?v.mipmaps[he]:v.image;if(H!==null)xe=H.max.x-H.min.x,ue=H.max.y-H.min.y,ye=H.isBox3?H.max.z-H.min.z:1,Me=H.min.x,Fe=H.min.y,He=H.isBox3?H.min.z:0;else{let Tt=Math.pow(2,-V);xe=Math.floor(St.width*Tt),ue=Math.floor(St.height*Tt),v.isDataArrayTexture?ye=St.depth:v.isData3DTexture?ye=Math.floor(St.depth*Tt):ye=1,Me=0,Fe=0,He=0}z!==null?(be=z.x,it=z.y,Et=z.z):(be=0,it=0,Et=0);let ut=N.convert(F.format),Gt=N.convert(F.type),ge;F.isData3DTexture?(_.setTexture3D(F,0),ge=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(_.setTexture2DArray(F,0),ge=D.TEXTURE_2D_ARRAY):(_.setTexture2D(F,0),ge=D.TEXTURE_2D),le.activeTexture(D.TEXTURE0),le.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),le.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),le.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);let cn=le.getParameter(D.UNPACK_ROW_LENGTH),Je=le.getParameter(D.UNPACK_IMAGE_HEIGHT),vn=le.getParameter(D.UNPACK_SKIP_PIXELS),qn=le.getParameter(D.UNPACK_SKIP_ROWS),Ei=le.getParameter(D.UNPACK_SKIP_IMAGES);le.pixelStorei(D.UNPACK_ROW_LENGTH,St.width),le.pixelStorei(D.UNPACK_IMAGE_HEIGHT,St.height),le.pixelStorei(D.UNPACK_SKIP_PIXELS,Me),le.pixelStorei(D.UNPACK_SKIP_ROWS,Fe),le.pixelStorei(D.UNPACK_SKIP_IMAGES,He);let Cs=v.isDataArrayTexture||v.isData3DTexture,ht=F.isDataArrayTexture||F.isData3DTexture;if(v.isDepthTexture){let Tt=E.get(v),Ti=E.get(F),pt=E.get(Tt.__renderTarget),wi=E.get(Ti.__renderTarget);le.bindFramebuffer(D.READ_FRAMEBUFFER,pt.__webglFramebuffer),le.bindFramebuffer(D.DRAW_FRAMEBUFFER,wi.__webglFramebuffer);for(let Rs=0;Rs<ye;Rs++)Cs&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,E.get(v).__webglTexture,V,He+Rs),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,E.get(F).__webglTexture,he,Et+Rs)),D.blitFramebuffer(Me,Fe,xe,ue,be,it,xe,ue,D.DEPTH_BUFFER_BIT,D.NEAREST);le.bindFramebuffer(D.READ_FRAMEBUFFER,null),le.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(V!==0||v.isRenderTargetTexture||E.has(v)){let Tt=E.get(v),Ti=E.get(F);le.bindFramebuffer(D.READ_FRAMEBUFFER,r_),le.bindFramebuffer(D.DRAW_FRAMEBUFFER,o_);for(let pt=0;pt<ye;pt++)Cs?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Tt.__webglTexture,V,He+pt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Tt.__webglTexture,V),ht?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ti.__webglTexture,he,Et+pt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ti.__webglTexture,he),V!==0?D.blitFramebuffer(Me,Fe,xe,ue,be,it,xe,ue,D.COLOR_BUFFER_BIT,D.NEAREST):ht?D.copyTexSubImage3D(ge,he,be,it,Et+pt,Me,Fe,xe,ue):D.copyTexSubImage2D(ge,he,be,it,Me,Fe,xe,ue);le.bindFramebuffer(D.READ_FRAMEBUFFER,null),le.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ht?v.isDataTexture||v.isData3DTexture?D.texSubImage3D(ge,he,be,it,Et,xe,ue,ye,ut,Gt,St.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(ge,he,be,it,Et,xe,ue,ye,ut,St.data):D.texSubImage3D(ge,he,be,it,Et,xe,ue,ye,ut,Gt,St):v.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,he,be,it,xe,ue,ut,Gt,St.data):v.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,he,be,it,St.width,St.height,ut,St.data):D.texSubImage2D(D.TEXTURE_2D,he,be,it,xe,ue,ut,Gt,St);le.pixelStorei(D.UNPACK_ROW_LENGTH,cn),le.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Je),le.pixelStorei(D.UNPACK_SKIP_PIXELS,vn),le.pixelStorei(D.UNPACK_SKIP_ROWS,qn),le.pixelStorei(D.UNPACK_SKIP_IMAGES,Ei),he===0&&F.generateMipmaps&&D.generateMipmap(ge),le.unbindTexture()},this.initRenderTarget=function(v){E.get(v).__webglFramebuffer===void 0&&_.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?_.setTextureCube(v,0):v.isData3DTexture?_.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?_.setTexture2DArray(v,0):_.setTexture2D(v,0),le.unbindTexture()},this.resetState=function(){G=0,W=0,A=null,le.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}};var op={type:"change"},hh={type:"start"},lp={type:"end"},nc=new _i,ap=new Sn,XS=Math.cos(70*Wu.DEG2RAD),Ut=new I,sn=2*Math.PI,ot={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},uh=1e-6,ic=class extends ho{constructor(e,t=null){super(e,t),this.state=ot.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:On.ROTATE,MIDDLE:On.DOLLY,RIGHT:On.PAN},this.touches={ONE:ki.ROTATE,TWO:ki.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new dn,this._lastTargetPosition=new I,this._quat=new dn().setFromUnitVectors(e.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new nr,this._sphericalDelta=new nr,this._scale=1,this._panOffset=new I,this._rotateStart=new Ce,this._rotateEnd=new Ce,this._rotateDelta=new Ce,this._panStart=new Ce,this._panEnd=new Ce,this._panDelta=new Ce,this._dollyStart=new Ce,this._dollyEnd=new Ce,this._dollyDelta=new Ce,this._dollyDirection=new I,this._mouse=new Ce,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=qS.bind(this),this._onPointerDown=$S.bind(this),this._onPointerUp=YS.bind(this),this._onContextMenu=tM.bind(this),this._onMouseWheel=JS.bind(this),this._onKeyDown=jS.bind(this),this._onTouchStart=QS.bind(this),this._onTouchMove=eM.bind(this),this._onMouseDown=ZS.bind(this),this._onMouseMove=KS.bind(this),this._interceptControlDown=nM.bind(this),this._interceptControlUp=iM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(op),this.update(),this.state=ot.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Ut.copy(t).sub(this.target),Ut.applyQuaternion(this._quat),this._spherical.setFromVector3(Ut),this.autoRotate&&this.state===ot.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=sn:i>Math.PI&&(i-=sn),s<-Math.PI?s+=sn:s>Math.PI&&(s-=sn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ut.setFromSpherical(this._spherical),Ut.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ut),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Ut.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ut.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(nc.origin.copy(this.object.position),nc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(nc.direction))<XS?this.object.lookAt(this.target):(ap.setFromNormalAndCoplanarPoint(this.object.up,this.target),nc.intersectPlane(ap,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>uh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>uh||this._lastTargetPosition.distanceToSquared(this.target)>uh?(this.dispatchEvent(op),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?sn/60*this.autoRotateSpeed*e:sn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ut.setFromMatrixColumn(t,0),Ut.multiplyScalar(-e),this._panOffset.add(Ut)}_panUp(e,t){this.screenSpacePanning===!0?Ut.setFromMatrixColumn(t,1):(Ut.setFromMatrixColumn(t,0),Ut.crossVectors(this.object.up,Ut)),Ut.multiplyScalar(e),this._panOffset.add(Ut)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ut.copy(s).sub(this.target);let r=Ut.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(sn*this._rotateDelta.x/t.clientHeight),this._rotateUp(sn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(sn*this._rotateDelta.x/t.clientHeight),this._rotateUp(sn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ce,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function $S(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function qS(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function YS(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(lp),this.state=ot.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function ZS(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case On.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ot.DOLLY;break;case On.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ot.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ot.ROTATE}break;case On.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ot.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ot.PAN}break;default:this.state=ot.NONE}this.state!==ot.NONE&&this.dispatchEvent(hh)}function KS(n){switch(this.state){case ot.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ot.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ot.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function JS(n){this.enabled===!1||this.enableZoom===!1||this.state!==ot.NONE||(n.preventDefault(),this.dispatchEvent(hh),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(lp))}function jS(n){this.enabled!==!1&&this._handleKeyDown(n)}function QS(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case ki.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ot.TOUCH_ROTATE;break;case ki.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ot.TOUCH_PAN;break;default:this.state=ot.NONE}break;case 2:switch(this.touches.TWO){case ki.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ot.TOUCH_DOLLY_PAN;break;case ki.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ot.TOUCH_DOLLY_ROTATE;break;default:this.state=ot.NONE}break;default:this.state=ot.NONE}this.state!==ot.NONE&&this.dispatchEvent(hh)}function eM(n){switch(this._trackPointer(n),this.state){case ot.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ot.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ot.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ot.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ot.NONE}}function tM(n){this.enabled!==!1&&n.preventDefault()}function nM(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function iM(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function dh(n){let e=new Date(n);return Number.isNaN(e.valueOf())?"":e.toLocaleString(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function cp(n){return n>=1e3?`${(n/1e3).toFixed(2)}s`:`${n}ms`}function up(n){return n<1e3?`${n} ms`:`${(n/1e3).toFixed(1)} s`}function gn(n){let e=n.delta>0?"+":"";return`${n.left} -> ${n.right} (${e}${n.delta})`}function ur(n){return n==null?"n/a":`${n.toFixed(0)}%`}function Ne(n,e="n/a"){return n==null||!Number.isFinite(n)?e:n.toLocaleString()}function sc(n,e,t="..."){return e===Number.POSITIVE_INFINITY||n.length<=e?n:e<=0?"":e<=t.length?t.slice(0,e):`${n.slice(0,e-t.length).replace(/\s+$/,"")}${t}`}function si(n){return n.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function hp(n,e=0){return e>0?`${n} JSONL records + ${wo(e)} pending`:`${n} JSONL records`}function wo(n){return n>=1024*1024?`${(n/(1024*1024)).toFixed(1)} MB`:n>=1024?`${Math.ceil(n/1024)} KB`:`${n} B`}var sM=/([?&])((?:access_)?token|api[_-]?key|secret|password|passwd|auth|session|cookie)=([^&#\s]+)/gi,rM=/\b((?:access_)?token|api[_-]?key|secret|password|passwd|cookie|authorization)\s*([:=])\s*("[^"]*"|'[^']*'|[^\s|;,]+)/gi,oM=/\bBearer\s+[A-Za-z0-9._~+/=-]{6,}/gi,aM=/data:image\/[a-z0-9.+-]+;base64,[A-Za-z0-9+/=]+/gi,lM=/\b[A-Za-z0-9+/]{32,}={0,2}\b/g,cM=/\b[A-Z0-9_]*(?:SECRET|PASSWORD|TOKEN|PRIVATE|COOKIE|DO_NOT_COPY)[A-Z0-9_]*\b/g,uM=/[A-Za-z]:[\\/]+Users[\\/]+[^\s|"'<>]+/g,hM=/\/(?:home|Users)\/[^\s|"'<>]+/g;function Xi(n,e=240){let t=gp(n);if(!t)return"";let i=t.replace(aM,"[REDACTED_IMAGE_PAYLOAD]").replace(sM,(s,r,o)=>`${r}${o}=[REDACTED]`).replace(oM,"Bearer [REDACTED]").replace(rM,(s,r,o)=>`${r}${o===":"?": ":"="}[REDACTED]`).replace(uM,dp).replace(hM,dp).replace(lM,"[REDACTED_BASE64]").replace(cM,"[REDACTED_PRIVATE_TEXT]");return sc(i,e)}function fp(n){let e=[zn(n.role),zn(n.eventType),n.toolName?`tool: ${zn(n.toolName)}`:"",n.filePath?`path: ${Xi(n.filePath,96)}`:"",n.status?`status: ${zn(n.status)}`:""].filter(Boolean),t=gp(n.rawSummary);if(t){let i=Xi(t,Number.POSITIVE_INFINITY);e.push(t===i?"detail: omitted for safe sharing":"detail: redacted for safe sharing")}return e.length?e.join("; "):"event summary unavailable"}function pp(n){return["Perlustron copy-safe reference",n.source?`source: ${zn(n.source)}`:null,n.lineNumber!==null&&n.lineNumber!==void 0?`line: ${n.lineNumber}`:null,n.eventIndex!==null&&n.eventIndex!==void 0?`event_index: ${n.eventIndex}`:null,n.kind?`kind: ${zn(n.kind)}`:null,n.summary?`summary: ${Xi(n.summary,220)}`:null,`perlustron: parser ${zn(n.parserVersion||"unknown")} / schema ${zn(n.schemaVersion||"unknown")}`,"caveat: copy-safe reference only; review raw logs separately before sharing raw content"].filter(e=>!!e).join(`
`)}function mp(n){let e=n.rawLogsSafeToShare?"marked safe by current scan; still review before forwarding":"requires human review before sharing";return["Perlustron copy-safe share summary",n.source?`source: ${zn(n.source)}`:null,n.sessionName?`session: ${Xi(n.sessionName,140)}`:null,`activity: ${Ne(n.totalTurns,"unknown")} turns / ${Ne(n.callCount,"unknown")} tool calls / ${Ne(n.fileChangeCount,"unknown")} file changes`,n.latestEventIndex!==null&&n.latestEventIndex!==void 0?`latest_event_index: ${n.latestEventIndex}`:null,n.cliContext?`cli: ${Xi(n.cliContext,120)}`:null,`perlustron: parser ${zn(n.parserVersion||"unknown")} / schema ${zn(n.schemaVersion||"unknown")}`,`raw_logs: ${e}`,`raw_caution: ${Xi(n.rawLogCaution||"Raw logs can contain prompts, paths, tool output, images, and credentials.",180)}`,"safe_surfaces: sanitized graph/export/copy-safe references are safer than raw logs, but still require human judgment before external sharing",`sanitized_graph: ${Xi(n.sanitizedGraphNote||"Use sanitized graph/export surfaces for review-friendly sharing.",180)}`,`redactions: ${Ne(n.redactedFieldCount,"unknown")} fields; images: ${Ne(n.imageCount,"unknown")}; api_token_required: ${n.apiTokenRequired?"yes (value not copied)":"no"}`].filter(t=>!!t).join(`
`)}function gp(n){return String(n??"").replace(/\s+/g," ").trim()}function zn(n){return Xi(n,120)}function dp(n){let e=n.replace(/\\/g,"/").split("/").filter(Boolean);return`[PATH:${e.length?e[e.length-1]:"path"}]`}var dM=["add","update","delete","move"],fM=72,_p="http://www.w3.org/2000/svg",pM=["summary","map","timeline","transcript"],dm=[...pM,"health","insights","diff","raw","export","settings"],fm=["error","long","file","diff","artifact","compaction"],mM=3e4,gM=["zoom-in","zoom-out","two-d","overview"],_M={codex:["M4 7l5 5-5 5","M12 17h8"],source:["M5 6h14","M5 12h14","M5 18h14","M8 4v4","M16 10v4","M11 16v4"],git:["M6 4m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0","M6 20m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0","M18 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0","M6 6v8a4 4 0 0 0 4 4h6","M6 10h6a4 4 0 0 1 4 4v4"],policy:["M12 3l7 4v5c0 4.5-2.8 7.4-7 9-4.2-1.6-7-4.5-7-9V7l7-4z","M9 12l2 2 4-5"],model:["M8 8h8v8H8z","M4 10h4","M4 14h4","M16 10h4","M16 14h4","M10 4v4","M14 4v4","M10 16v4","M14 16v4"],tools:["M14.7 6.3l3-3a2.1 2.1 0 0 1 3 3l-3 3","M13 8l3 3","M3 21l8-8","M9 11l4 4"]},xM=new Set(dm);function uc(n){return Array.isArray(n)?n[0]:n.fromId}function hc(n){return Array.isArray(n)?n[1]:n.toId}function vM(n){return Array.isArray(n)?1:n.waypoints.length+1}function fh(n){return n.reduce((e,t)=>e+vM(t),0)}function yM(n,e){if(!e||uc(n)!==uc(e)||hc(n)!==hc(e))return!1;let t=Array.isArray(n)?[]:n.waypoints,i=Array.isArray(e)?[]:e.waypoints;return t.length===i.length}function we(n,e=document){let t=e.querySelector(n);if(!t)throw new Error(`Missing required element: ${n}`);return t}function Tc(n){return document.querySelectorAll(n)}function Tr(n){return n instanceof Error?n.message:String(n)}function ph(n,e,t){return e!==void 0&&n.includes(e)?e:t}function Lh(){return{compactionInProgress:!1,pendingPrompt:null,assistantStreaming:!1,latestAssistantEventIndex:null,latestAssistantPreview:null,latestTokenSample:null,activeToolCalls:[],completedToolCalls:[]}}function Vt(){if(!Ee)throw new Error("Session graph has not loaded yet");return Ee}function SM(n){return n.type==="call"?n.source.completedAt||n.source.startedAt||"Live context":n.source.timestamp||"Live context"}function MM(n){let e=new Date(n);return Number.isNaN(e.valueOf())?n:e.toLocaleString([],{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function Nh(n){Mp.textContent=MM(n),Mp.title=n}function bM(n){let e=n.replace(/^\s{0,3}#{1,6}\s+/,"").trim();return(e?e.replace(/:$/,"").trim():n)||n}function Dh(n,e="Selection"){wM.textContent=e,xp.textContent=bM(n),xp.title=n}function EM(n){return n.type==="prompt"?n.source.images:[]}var Ft=we("#space"),TM=we("#metadata-list"),wM=we("#stream-title-label"),xp=we("#stream-kind"),Uh=we("#stream-title"),gs=we("#stream-data"),vp=we("#stream-images"),AM=we("#stream-close"),Po=we("#stream-minimize"),Oo=we("#stream-copy-ref"),pm=we("#stream-open-timeline"),mm=we("#stream-open-transcript"),gm=we("#stream-open-raw"),CM=we("#prev-event"),RM=we("#next-event"),_m=we("#stage-turn-count"),Fh=we("#stage-started"),yp=we("#context-pressure-value"),Sp=we("#context-pressure-bars"),Oh=we("#turn-number"),Mp=we("#turn-timestamp"),IM=we("#metric-prompts"),PM=we("#metric-errors"),LM=we("#metric-long"),NM=we("#metric-files"),DM=we("#metric-diffs"),UM=we("#metric-artifacts"),FM=we("#metric-compactions"),Bh=we("#context-event-title"),Qi=we("#event-popup"),OM=we("#topbar"),BM=we("#live-toggle"),xm=we("#live-state"),vm=we("#live-copy"),qi=we("#search-input"),kM=we("#mode-panel"),zM=we("#mode-panel-kicker"),VM=we("#mode-panel-title"),an=we("#mode-panel-summary"),HM=we("#mode-panel-filters"),zt=we("#mode-panel-content"),dc=we("#mode-filter-role"),fc=we("#mode-filter-type"),pc=we("#mode-filter-tool"),mc=we("#mode-filter-file"),ym=we("#mode-filter-errors"),Sm=we("#mode-filter-unknown"),Mm=we("#mode-filter-malformed"),bm=we("#mode-filter-redacted"),Em=we("#mode-filter-utc"),GM=Tc("[data-view-action]"),Tm=Tc("[data-metric]"),wm=Tc("[data-app-mode]"),Am=Tc("[data-source]"),ri=we("#session-select"),Bo=we("#session-select-status"),vh=we("#settings-button"),Cm=we("#scene-frame"),WM=3500,XM=1e3,$M=180,rc=20,qM=38,YM=52,Rm=46,ZM=58,KM=24,JM=104,jM=1.72,bp=1.08,QM=4.3,eb=2.55,kh=-1e4,zh=3600,Im=28,tb=3,nb=2,Mr="compaction-progress",ys="live-prompt-progress",Ep=4.8,Tp=5.2,ib=1.25,sb=3.7,rb=.04,ob=.42,ab=Math.PI/2,lb=Math.PI*.76,_s=6.8,wp=5.8,cb=1.75,ub=2.65,hb=.16,mr=6,db=.86,fb=3.05,pb=.72,mb=.24,gb=.62,dr=1,_b=1.4,xb=1.35,vb=1.7,yb=.62,Sb=.04,Mb=0,bb=1.15,Eb=0,Tb=1.05,Pm=3.8,wb=5.8,Ap=2.4,yh=4.2,Ab=100,Cp=4,Cb=16,Rb=70,Ib=.72,Pb=2.6,Lb=new Set(["KeyW","KeyA","KeyS","KeyD"]),Lm="Space",Nb=new Set(["ControlLeft","ControlRight"]),Db=new Set(["ShiftLeft","ShiftRight"]),Rp=.0032,Ub=1.4,Nm=28,Ip=Math.PI/2-.08,Pp=24,yi=null;try{yi=new Ql({canvas:Ft,antialias:!1,alpha:!1,powerPreference:"high-performance"}),yi.setClearColor(197894,1),yi.outputColorSpace=Kt,yi.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75))}catch(n){Ft.classList.add("webgl-unavailable"),console.warn(`WebGL renderer unavailable: ${Tr(n)}`)}var An=new Xr,ko=new Kn;ko.renderOrder=4;An.add(ko);var zo=new Kn;zo.renderOrder=4.2;An.add(zo);var lt=new $t(50,1,.1,1200);lt.position.set(0,Rm,.01);var ct=new ic(lt,yi?.domElement??Ft);ct.enableDamping=!0;ct.dampingFactor=.07;ct.enableRotate=!1;ct.enableZoom=!1;ct.mouseButtons.LEFT=On.PAN;ct.mouseButtons.RIGHT=On.ROTATE;ct.maxDistance=Number.POSITIVE_INFINITY;ct.minDistance=0;ct.target.set(0,0,0);var Sh=new co;Sh.params.Points.threshold=1.05;var Vo=new Ce,Tn=new At,ps=new ze,fr=new I,Ki=new I,Lp=new I,Ao=new I,Co=new jn(0,0,0,"YXZ"),Np=new ze(16777215),Ee=null,ke=[],Ji=[],It=new Map,Do=new Map,Ho=[],oi={},ai=null,rn=null,Mh=new Map,bh=new Map,et=null,dt=null,lc=null,cc=null,_r=null,$i=null,mh=!1,Yi=null,Lo=null,Dm=0,Eh=0,Mt="overview",Rt=Fb(new URLSearchParams(window.location.search).get("mode")),xr="three-d",Ss=Um(new URLSearchParams(window.location.search).get("source")),Rn=Fm(new URLSearchParams(window.location.search).get("session")),Hn=[],Vn=null,jt=null,Th=!1,Si=null,Dp=0,_n=null,wh=!1,xs=null,Ro=null,vr=null,Ms="",Yo=null,Gn=!0,vs=!1,gc=!1,ms=!1,pr=!1,Ts=0,Uo=null,wc=!1,Go=!1,_c=0,Wn=Lh(),Zi=Number.POSITIVE_INFINITY,yr=null;var wr=!0,wn=new Set,Vh=!1,Wo=null,Ah=0,Ch=0,Up=performance.now()/1e3,oc=0,xc={prompt:6547455,local:15908444,browser:7467682,web:8229887,coordination:15887725,tool:12044492,assistant:16777215,message:16777215,error:16736102,long:16760138,file:6615680,diff:4446719,artifact:9464063,compaction:16216063,subagent:9403903,"subagent-result":13023487,"file-add":6615680,"file-update":4446719,"file-delete":16736102,"file-move":16760138};function Um(n){return n==="claude"?"claude":"codex"}function Fb(n){let e=n?.trim().toLowerCase();return e&&xM.has(e)?e:"summary"}function Mi(n=Ss){return n==="claude"?"Claude":"Codex"}function Fm(n){let e=n?.trim();return e||null}function Ob(){let n=new URL(window.location.href);n.searchParams.has("token")&&(n.searchParams.delete("token"),window.history.replaceState(window.history.state,"",`${n.pathname}${n.search}${n.hash}`))}var Fp=(()=>{let n=new URLSearchParams(window.location.search),e=n.get("token");try{let t=e||sessionStorage.getItem("perlustronToken");return t&&sessionStorage.setItem("perlustronToken",t),n.has("token")&&Ob(),t}catch{return e}})();function Om(n,{includeSession:e=!0,includeSource:t=!0,sessionPath:i=Rn}={}){return t&&n.searchParams.set("source",Ss),e&&i&&n.searchParams.set("session",i),Fp&&n.searchParams.set("token",Fp),n}function Ar(n,e={}){let t=new URL(n,window.location.origin);return Om(t,e)}function bs(n){return n===Ts}var Op=new io(.78,16,10),Bb=new eo(.72,.72,.12,32),kb=new to(.72,0),zb=new Ui(.96,.12,.58),Vb=new er(.78,.9,96),Hb=new er(.9,1.02,96),Bp=new Fn({color:16777215}),Gb=new Fn({color:16777215}),Wb=new Fn({color:16777215}),Xb=new Fn({color:16777215});An.add(new oo(8778239,1052688,1.5));var Bm=new lo(16777215,2.2);Bm.position.set(14,24,12);An.add(Bm);var br=new uo(2400,240,1456447,1456447);br.position.y=-1.4;br.material.transparent=!0;br.material.opacity=.34;An.add(br);AM.addEventListener("click",()=>{dt=null,Mg(),Rc(),xn(),Rr()});Po.addEventListener("click",()=>Ug(!ms));Oo.addEventListener("click",zT);pm.addEventListener("click",()=>Ic("timeline"));mm.addEventListener("click",()=>Ic("transcript"));gm.addEventListener("click",()=>Ic("raw"));Ug(!1);window.addEventListener("resize",Ag);Ft.addEventListener("contextmenu",sT);Ft.addEventListener("wheel",rT,{passive:!1});Ft.addEventListener("pointerdown",oT);Ft.addEventListener("pointermove",Zh);Ft.addEventListener("pointermove",aT);Ft.addEventListener("pointerup",vg);Ft.addEventListener("pointercancel",vg);Ft.addEventListener("click",ST);Ft.addEventListener("dblclick",MT);Ew();Ag();await Hh();await Cr();Uc();yi?.setAnimationLoop(nT);async function Cr({previousLineCountOverride:n=null,previousLatestOverride:e=null,suppressLiveAnimation:t=!1}={}){let i=++Dm,s=Ts;try{let r=await fetch(Ar("/api/session"),{cache:"no-store"});if(!r.ok)throw new Error(`Session API returned ${r.status}`);let o=await r.json();if(!bs(s)||i<Eh)return;Eh=i;let a=Ee!==null,l=a&&Gm()?DT()?.clone()??null:null,c=n??Ee?.lineCount??o.lineCount,d=e??Uo??o.latestEventIndex,h=a&&o.latestEventIndex>d,u=a&&o.latestEventIndex===d&&o.lineCount===c,f=h&&!t;if(Zi=f?d:Number.POSITIVE_INFINITY,Uo=o.latestEventIndex,wc=!1,Ee=o,u&&pr){ji(),gh();return}if(a&&pr&&fE()){ji(),f&&(Hp(l),hm()),gh();return}Xm({preserveView:a&&pr,preserveEventContext:a&&pr}),pr=!0,ji(),f&&(Hp(l),hm()),(o.pendingBytes??0)>0&&!Yi&&Wm(o.lineCount,Uo??o.latestEventIndex),gh()}catch(r){if(!bs(s))return;gc=!1,Jb(),qo(r)}}async function Rh(){if(mh)return;mh=!0;let n=Ts;try{if(!Ee){await Cr();return}let e=await $b();if(!bs(n))return;Hm(e)}catch(e){qo(e)}finally{mh=!1}}async function $b(){let n=await fetch(Ar("/api/session/status"),{cache:"no-store"});if(!n.ok)throw new Error(`Session status returned ${n.status}`);return await n.json()}async function qb(n){let e=Vt(),t=Ar("/api/session/diff");t.searchParams.set("leftSession",e.sessionPath),t.searchParams.set("rightSession",n),t.searchParams.set("redacted","true"),t.searchParams.set("profile","strict");let i=await fetch(t,{cache:"no-store"});if(!i.ok)throw new Error(`Diff API returned ${i.status}`);return await i.json()}async function Yb(){let n=Ar("/api/session/unknowns");n.searchParams.set("profile","strict");let e=await fetch(n,{cache:"no-store"});if(!e.ok)throw new Error(`Unknowns API returned ${e.status}`);return await e.json()}async function Hh({retryWithoutSelection:n=!0,generation:e=Ts}={}){Vm();try{let t=await fetch(Ar("/api/sessions"),{cache:"no-store"});if(!t.ok)throw new Error(`Sessions API returned ${t.status}`);let i=await t.json();if(!bs(e))return;Hn=i.sessions??[],kp(i)}catch(t){if(!bs(e))return;if(Rn&&n){Rn=null,Zo(),await Hh({retryWithoutSelection:!1,generation:e});return}Hn=[],kp(),qo(t)}}function kp(n){let e=document.createDocumentFragment(),t=n?.selectedPath||Rn||Hn[0]?.path||"";if(!Hn.length){let i=document.createElement("option");i.value="",i.textContent="No sessions found",e.append(i),ri.replaceChildren(e),ri.disabled=!0,Bo.textContent="0";return}Hn.forEach(i=>{let s=document.createElement("option");s.value=i.path,s.textContent=km(i),s.title=i.path,e.append(s)}),ri.replaceChildren(e),ri.value=t,ri.disabled=!1,Bo.textContent=`${Hn.length}`}function km(n){return[n.isLive?"Live":"",n.explicit?"Default":"",n.label,dh(n.lastModifiedAt),wo(n.byteLength)].filter(Boolean).join(" - ")}async function Zb(n){let e=Fm(n);if(e===Rn)return;Fc(),Rn=e,jt=null,Si=null,_n=null,xs=null,gc=!0,Zo(),zm();let t=Ts;jb(),await Cr({suppressLiveAnimation:!0}),bs(t)&&Uc()}function Zo(){let n=new URL(window.location.href);n.searchParams.set("source",Ss),n.searchParams.set("mode",Rt),Rn?n.searchParams.set("session",Rn):n.searchParams.delete("session"),n.searchParams.delete("token"),window.history.replaceState({},"",`${n.pathname}${n.search}${n.hash}`)}function zm(){Ts+=1,Yi&&clearTimeout(Yi),Yi=null,Lo=null,Dm=0,Eh=0,dt=null,et=null,Yo=null,Mt="overview",Uo=null,wc=!1,Wn=Lh(),Go=!1,_c=0,Zi=Number.POSITIVE_INFINITY,yr&&clearTimeout(yr),yr=null,pr=!1,Ee=null,ke=[],Ji=[],It.clear(),Do.clear(),ag(),Ig()}function Vm(){ri.disabled=!0,Bo.textContent="Loading"}function gh(){Kb({switched:gc}),gc=!1}function Kb({switched:n=!1}={}){ri.disabled=Hn.length===0,Bo.textContent=n?"Loaded":Hn.length?`${Hn.length}`:"0"}function Jb(){ri.disabled=Hn.length===0,Bo.textContent="Error"}function jb(){_m.textContent="Loading",Fh.textContent="Reading JSONL",xm.textContent="LOAD",vm.textContent="Switching session...",Vm()}function Hm(n){if(!Ee){Cr();return}let e=Ee,t=e.lineCount,i=Uo??e.latestEventIndex,s=e.byteLength??e.processedByteLength??0,r=n.byteLength??s,o=e.pendingBytes??0,a=n.pendingBytes??0,l=n.graphChanged===!0,c=eE(n),d=c.compactionInProgress,h=zp(c)!==zp(Wn),u=Math.max(0,r-s),f=a>0,g=u>0||a>o,y=n.renderableEventCount!==Qb(e),m=a===0&&(n.latestEventIndex>i||n.lineCount>t||y),p=n.latestEventIndex===i&&n.lineCount===t&&u===0&&a===o&&l===wc&&!h,S=l||f&&!d||g&&!d||y||m;nE(n,c),h&&(d||!S)&&Xm({preserveView:!0,preserveEventContext:!0}),S&&(!p||f||y||m)&&Wm(t,i)}function Qb(n){return n.totals.promptCount+n.totals.callCount+n.totals.assistantMessageCount+n.totals.fileChangeCount+n.totals.compactionCount}function eE(n){let e=n.liveCues??Lh();return{compactionInProgress:e.compactionInProgress||n.compactionInProgress===!0,pendingPrompt:e.pendingPrompt??null,assistantStreaming:e.assistantStreaming===!0,latestAssistantEventIndex:e.latestAssistantEventIndex??null,latestAssistantPreview:e.latestAssistantPreview??null,latestTokenSample:e.latestTokenSample??null,activeToolCalls:e.activeToolCalls??[],completedToolCalls:e.completedToolCalls??[]}}function zp(n){return[n.compactionInProgress?"compact:1":"compact:0",n.pendingPrompt?`prompt:${n.pendingPrompt.eventIndex}:${Fo(n.pendingPrompt.title)}:${Fo(n.pendingPrompt.text)}`:"prompt:",n.assistantStreaming?`assistant:${n.latestAssistantEventIndex??""}:${Fo(n.latestAssistantPreview)}`:"assistant:",n.latestTokenSample?`tokens:${n.latestTokenSample.eventIndex}:${n.latestTokenSample.totalTokens}:${n.latestTokenSample.contextPercent??""}`:"tokens:",`active:${Vp(n.activeToolCalls)}`,`done:${Vp(n.completedToolCalls)}`].join("|")}function Vp(n){return n.map(e=>`${e.id}:${e.eventIndex}:${e.status}:${e.completedAt??""}:${Fo(e.argumentPreview)}:${Fo(e.outputPreview)}`).join(",")}function Fo(n){return n?`${n.length}:${n.slice(0,48)}`:""}function Hp(n=null){if(!Gm())return;let e=Qh();if(!e)return;e.type==="prompt"?et=e.id:e.type==="compaction"?et=null:et=e.promptId;let t=dt!==e.id,i=Ng();Mt="overview",es({preserveCamera:!0}),n?tE(n,yc(e)):Er({preserveDistance:!0}),i?As(e,{restartStream:t}):(dt=e.id,xn())}function Gm(){return Gn&&!Ms&&!vr}function tE(n,e){let t=e.x-n.x,i=e.y-n.y,s=e.z-n.z;ct.target.x+=t,ct.target.y+=i,ct.target.z+=s,lt.position.x+=t,lt.position.y+=i,lt.position.z+=s,ct.update()}function Wm(n,e){Lo||(Lo={previousLineCount:n,previousLatest:e}),Yi&&clearTimeout(Yi),Yi=setTimeout(()=>{let t=Lo;Lo=null,Yi=null,t&&Cr({previousLineCountOverride:t.previousLineCount,previousLatestOverride:t.previousLatest,suppressLiveAnimation:!1})},$M)}function nE(n,e){let t=Vt();t.source=n.source,t.sessionPath=n.sessionPath,t.sessionId=n.sessionId,t.generatedAt=n.generatedAt,t.lastModifiedAt=n.lastModifiedAt,t.lineCount=n.lineCount,t.latestEventIndex=n.latestEventIndex,t.isLive=n.isLive,t.byteLength=n.byteLength,t.processedByteLength=n.processedByteLength,t.pendingBytes=n.pendingBytes,wc=n.graphChanged===!0,Wn=e,iE(Wn.compactionInProgress),Fh.textContent=qm(n.lineCount,t.pendingBytes),jm(dE(t.tokenTelemetry,Wn.latestTokenSample)),ji(),Ir()}function iE(n){return Go===n?!1:(Go=n,_c=n?performance.now():0,!0)}function Xm({preserveView:n=!1,preserveEventContext:e=!1}={}){let t=n?pE():null;ag();let i=ig(Vt());ke=i.nodes,Ji=i.connectors,Qm(),et=et&&It.has(et)?et:ke.find(s=>s.type==="prompt")?.id??null,$m(),es({preserveCamera:n}),t&&mE(t),BE(),vT(),kE(),Ko(),xn(),dt&&It.has(dt)?jg({restartStream:!e}):(dt=null,e?Pg():Ig())}function $m(){let n=Vt(),e=n.ui,t=sE();_m.textContent=Ne(e.totalTurns),Fh.textContent=qm(n.lineCount,n.pendingBytes),IM.textContent=Ne(t.prompts),PM.textContent=Ne(t.error),LM.textContent=Ne(t.long),NM.textContent=Ne(t.file),DM.textContent=Ne(t.diff),UM.textContent=Ne(t.artifact),FM.textContent=Ne(t.compaction),jm(n.tokenTelemetry),eT(),Ir()}function sE(){let n={prompts:0,error:0,long:0,file:0,diff:0,artifact:0,compaction:0};return ke.forEach(e=>{if(e.type==="prompt"){n.prompts+=1;return}fm.forEach(t=>{Oc(e,t)&&(n[t]+=1)})}),n}function Cn(n){return`${n}`}function qm(n,e=0){return e>0?`${Ne(n)} + ${wo(e)} pending`:Ne(n)}function Ac(n){return`${n.parserVersion} / ${n.schemaVersion}`}function Gh(n,e=Cn){return["Renderable events",e(n.renderableEventCount)]}function Ym(n,e=Cn){return["Unknown events",e(n.unknownEventCount)]}function Zm(n,e=Cn){return["Malformed lines",e(n.malformedLineCount)]}function Km(n,e=Cn,t="Skipped payloads"){return[t,e(n.skippedLargePayloadCount)]}function Jm(n,e=Cn){return["Warnings",e(n.warnings.length)]}function Wh(n,e=Cn,t="Skipped payloads"){return[Ym(n,e),Zm(n,e),Km(n,e,t),Jm(n,e)]}function rE(n,e=Cn,t="Skipped payloads"){return[["Parser",Ac(n)],Gh(n,e),...Wh(n,e,t)]}function Xo(n){return n.map(([e,t])=>`${e}: ${t}`)}function oE(n){return(n.unknownEventTypes||[]).map(e=>`${e.sourceEventType}: ${e.count}`)}function aE(n){let[,e]=Ym(n);return[`${e} total`,...oE(n)]}function lE(n){return(n.unknownEventTypes||[]).map(e=>`Unknown: ${e.sourceEventType} x${e.count}`)}function cE(n){return(n.malformedLines||[]).slice(0,5).map(e=>`Line ${e.lineNumber}: ${e.error}`)}function uE(n){return[...Xo([Zm(n),Km(n,Cn,"Skipped large payloads")]),...cE(n)]}function hE(n){return[...Xo([["Parser",Ac(n)],["Lines read",Cn(n.totalLinesRead)],["Parsed events",Cn(n.parsedEventCount)],Gh(n),...Wh(n,Cn,"Skipped large payloads"),["Token telemetry",n.tokenTelemetryAvailable?"available":"not logged"]]),...lE(n)]}function jm(n){let e=n?.latestContextPercent??null;yp.textContent=e===null?"n/a":`${Math.min(999,Math.round(e))}%`,yp.title=n?.latestTotalTokens&&n?.contextWindow?`${Ne(n.latestTotalTokens)} / ${Ne(n.contextWindow)} tokens`:"No token telemetry in this session";let t=n?.samples?.length?n.samples.slice(-Im):[];if(!t.length){Sp.replaceChildren();return}let i=document.createDocumentFragment();t.forEach(s=>{let r=document.createElement("span"),o=Math.max(2,Math.min(28,Math.round((s.contextPercent??0)/4)));r.style.height=`${o}px`,r.title=`${Math.round(s.contextPercent??0)}% context at event ${s.eventIndex}`,i.append(r)}),Sp.replaceChildren(i)}function dE(n,e){if(!e)return n;let t=n.samples??[],s=t.at(-1)?.eventIndex===e.eventIndex?t:[...t,e].slice(-Im);return{...n,samples:s,latestTotalTokens:e.totalTokens,contextWindow:e.contextWindow,latestContextPercent:e.contextPercent,primaryRateLimitPercent:e.primaryRateLimitPercent,secondaryRateLimitPercent:e.secondaryRateLimitPercent}}function fE(){let n=ig(Vt());if(n.nodes.length!==ke.length||n.connectors.length!==Ji.length)return!1;for(let t=0;t<n.nodes.length;t+=1)if(n.nodes[t].id!==ke[t]?.id)return!1;for(let t=0;t<n.connectors.length;t+=1)if(!yM(n.connectors[t],Ji[t]))return!1;let e=performance.now();return n.nodes.forEach((t,i)=>{let s=ke[i];s.kind=t.kind,s.eventIndex=t.eventIndex,s.title=t.title,s.body=t.body,s.detail=t.detail,s.source=t.source,t.isNew&&(s.freshUntil=Math.max(s.freshUntil||0,t.freshUntil||0)),s.isNew=t.isNew||ws(s,e),s.baseScale=t.baseScale,s.matrixDirty=!0,Mt==="overview"&&s.target.copy(t.target)}),Ji=n.connectors,Qm(),es({preserveCamera:!0}),Ko(),$m(),xn(),dt&&It.has(dt)?jg({restartStream:!1}):Pg(),!0}function pE(){return new Map(ke.map(n=>[n.id,{position:n.position.clone(),target:n.target.clone(),scale:n.scale}]))}function Qm(){It=new Map,Do=new Map,ke.forEach(n=>{It.set(n.id,n);let e=Do.get(n.promptId);e?e.push(n):Do.set(n.promptId,[n])})}function mE(n){let e=new Map(Ji.map(a=>[hc(a),uc(a)])),t=gE(n),i=t?n.get(Mr):null,s=_E(n),r=s?n.get(ys):null,o=performance.now();ke.forEach(a=>{let l=n.get(a.id);if(l){a.position.copy(l.position),a.scale=l.scale,a.matrixDirty=!0;return}let c=a.id===t?i:a.id===s?r:null;if(c){a.position.copy(c.position),a.scale=Math.max(a.scale,c.scale),a.freshUntil=Math.min(a.freshUntil||Number.POSITIVE_INFINITY,o+zh*.58),a.isNew=!0,a.matrixDirty=!0;return}a.position.copy(Mt==="inspect"?a.target:xE(a,n,e)),a.matrixDirty=!0})}function gE(n){if(!n.has(Mr))return null;let e=ke.filter(t=>t.type==="compaction"&&t.id!==Mr&&!n.has(t.id));return e.length?e.reduce((t,i)=>i.eventIndex>=t.eventIndex?i:t).id:null}function _E(n){if(!n.has(ys))return null;let e=ke.filter(t=>t.type==="prompt"&&t.id!==ys&&!n.has(t.id));return e.length?e.reduce((t,i)=>i.eventIndex>=t.eventIndex?i:t).id:null}function xE(n,e,t){let i=t.get(n.id);if(!i)return n.target;let s=e.get(i);return s?s.position:It.get(i)?.position??n.target}function eg(n,e){let t=new Set(n.assistantMessages.map(o=>o.id)),i=new Map,s=new Set;return e.forEach(o=>{let a=o.assistantMessageId||"";if(!t.has(a))return;let l=i.get(a)??[];l.push(o),i.set(a,l),s.add(o.id)}),[...n.assistantMessages.map(o=>({type:"assistant",message:o,calls:i.get(o.id)??[]})),...e.filter(o=>!s.has(o.id)).map(o=>({type:"call",call:o}))].sort((o,a)=>{let l=Gp(o)-Gp(a);return l!==0?l:Wp(o)-Wp(a)})}function Gp(n){return n.type==="assistant"?n.message.eventIndex:n.call.eventIndex}function Wp(n){return n.type==="assistant"?0:1}function vE(n,e){if(e.type==="compaction")return{above:Ep,below:Tp,promptCalls:[],subagentBranches:[],activityUnits:[],activityDepth:0,fileRows:0};let t=e.prompt,i=_g(n,t),s=rg(i),r=new Set(s.flatMap(u=>[u.launch?.id,u.result?.id].filter(f=>!!f))),o=i.filter(u=>!r.has(u.id)),a=eg(t,o),l=yE(a),c=Math.ceil((t.fileChanges?.length??0)/dr),d=l+bE(c)+Ap,h=l+EE(s)+Ap;return{above:Math.max(Ep,d),below:Math.max(Tp,h),promptCalls:i,subagentBranches:s,activityUnits:a,activityDepth:l,fileRows:c}}function yE(n){if(!n.length)return 0;let e=0,t=0;return n.forEach((i,s)=>{let r=SE(s);e=Math.max(e,r),t=Math.min(t,r),i.type==="assistant"&&i.calls.forEach((o,a)=>{let l=r+tg(a,i.calls.length);e=Math.max(e,l),t=Math.min(t,l)})}),Math.max(Math.abs(t),Math.abs(e))+ib}function SE(n){return vc(n).z}function vc(n){let e=ab+n*lb,t=sb+Math.min(ob,n*rb);return new I(Math.sin(e)*t,-cb-n*ub+Math.cos(e)*hb,Math.cos(e)*t)}function ME(n,e){let t=vc(e);return new I(t.x,_s+t.y,n+t.z)}function Xp(n,e,t,i,s){if(i==null){let a=vc(s);return{fromId:n,toId:e,waypoints:[new I(0,_s+a.y*.36,t+a.z*.18),new I(a.x*.58,_s+a.y*.72,t+a.z*.58)]}}let r=5,o=[];for(let a=1;a<=r;a+=1){let l=a/(r+1),c=i+(s-i)*l,d=vc(c);o.push(new I(d.x,_s+d.y,t+d.z))}return{fromId:n,toId:e,waypoints:o}}function tg(n,e){let t=Math.floor(n/mr),i=n%mr,s=Math.min(e-t*mr,mr);return(i-(s-1)/2)*db+t*.32}function bE(n){return n<=0?0:_b+(n-1)*xb+vb}function EE(n){if(!n.length)return 0;let e=n.reduce((t,i)=>{let s=sg(i.nodes);return Math.max(t,s.length*3)},0);return Pm+wb+e}function TE(n){return n.x<0?-1:1}function ng(n,e){let t=n.x,i=n.z-e,s=Math.hypot(t,i);return s<.001&&(t=TE(n),i=0,s=1),t/=s,i/=s,{radialX:t,radialZ:i,tangentX:-i,tangentZ:t}}function wE(n,e,t,i){let s=ng(n,e),r=Math.floor(t/mr),o=t%mr,a=tg(t,i),l=fb+r*pb;return new I(n.x+s.radialX*l+s.tangentX*a,n.y-.48-o*mb-r*gb,n.z+s.radialZ*l+s.tangentZ*a)}function $p(n,e,t){let i=n.assistantMessageId||"";return t.has(i)?i:e}function AE(n,e,t){if(!e.length||n==null)return e.at(-1)?.id??t;let i=t,s=Number.NEGATIVE_INFINITY;return e.forEach(r=>{r.eventIndex<=n&&r.eventIndex>=s&&(i=r.id,s=r.eventIndex)}),i}function CE(n,e,t,i){let s=ng(n,e),r=Math.floor(t/dr),o=t%dr,a=Math.min(i-r*dr,dr),l=o-(a-1)/2,c=r*dr+o,d=yb+r*Sb,h=l*Mb;return new I(n.x+s.radialX*d+s.tangentX*h,n.y-1.62-c*bb-r*Eb,n.z+s.radialZ*d+s.tangentZ*h)}function RE(n,e,t){return{fromId:n,toId:e,waypoints:[new I(t.x,t.y-Tb,t.z)]}}function ig(n){let e=[],t=[],i=mg(n,{includeCompactionProgress:!0}),s=i.map(c=>vE(n,c)),o=s.reduce((c,d)=>c+d.above+d.below,0)/2,a=performance.now()+zh,l=[];return i.forEach((c,d)=>{let h=s[d],u=o-h.above;if(o-=h.above+h.below,c.type==="compaction"){let A=c.compaction,O=A.eventIndex>Zi,k={id:A.id,type:"compaction",kind:"compaction",promptId:A.id,promptIndex:c.compactionIndex,callIndex:-1,eventIndex:A.eventIndex,title:A.title,body:A.text,detail:A.detail,source:A,isNew:O,freshUntil:O?a:0,position:new I(0,wp,u),target:new I(0,wp,u),baseScale:.58,scale:.58};e.push(k),l.push(k);return}let{prompt:f,promptIndex:g}=c,y=e.length,{promptCalls:m,subagentBranches:p}=h,S=f.fileChanges||[],b=f.eventIndex>Zi,M={id:f.id,type:"prompt",kind:"prompt",promptId:f.id,promptIndex:g,callIndex:-1,eventIndex:f.eventIndex??g,title:f.title,body:f.text,detail:f.text,source:f,isNew:b,freshUntil:b?a:0,position:new I(0,_s,u),target:new I(0,_s,u),baseScale:.78,scale:.78};e.push(M),l.push(M);let R=new Set(m.map(A=>A.id)),T=new Set(f.assistantMessages.map(A=>A.id)),P=h.activityUnits,x=[],w=M.id,L=null,C=0;P.forEach((A,O)=>{let k=ME(u,O);if(A.type==="call"){e.push(gr(f,g,A.call,C,k,a)),t.push(Xp(w,A.call.id,u,L,O)),x.push({id:A.call.id,eventIndex:A.call.eventIndex}),w=A.call.id,L=O,C+=1;return}let K=LE(f,g,A.message,C,k,a,A.calls.length?.58:.32);e.push(K),t.push(Xp(w,K.id,u,L,O)),x.push({id:K.id,eventIndex:A.message.eventIndex}),w=K.id,L=O,C+=1,A.calls.forEach((J,ie)=>{let pe=wE(K.target,u,ie,A.calls.length);e.push(gr(f,g,J,C,pe,a)),t.push([K.id,J.id]),x.push({id:J.id,eventIndex:J.eventIndex}),C+=1})}),p.forEach((A,O)=>{let k=O%2===0?1:-1,K=Math.floor(O/2),J=k*Math.min(13.5,4.8+K*2.2),ie=u-Pm-K*.55,pe=ie-3.3,ve=_s-1.2-O%2*.28,Ge=C+p.length*2+O*fM;if(A.launch){let $e=gr(f,g,A.launch,C,new I(J,ve,ie),a,{kind:"subagent",title:Zp(A.launch),baseScale:.52});e.push($e),t.push([$p(A.launch,M.id,T),$e.id]),C+=1}if(A.result){let $e=gr(f,g,A.result,C,new I(J,ve-.34,A.launch?pe:ie),a,{kind:"subagent-result",title:Zp(A.result),baseScale:.38});e.push($e),t.push([A.launch?.id??$p(A.result,M.id,T),$e.id]),C+=1}IE({branch:A,parentId:A.result?.id??A.launch?.id??M.id,prompt:f,promptIndex:g,branchX:J,branchY:ve,startZ:(A.result?pe:ie)-2.1,callIndexStart:Ge,freshUntil:a,allNodes:e,allConnectors:t})});let U=new Map;for(let A=y;A<e.length;A+=1){let O=e[A];U.set(O.id,O)}let G=new Map,W=new Map;S.forEach(A=>{let O=A.callId&&R.has(A.callId)&&U.has(A.callId)?A.callId:AE(A.eventIndex,x,M.id);G.set(A.id,O);let k=W.get(O)??[];k.push(A),W.set(O,k)}),S.forEach((A,O)=>{let k=G.get(A.id)??M.id,K=U.get(k)??M,J=W.get(k)??[A],ie=Math.max(0,J.findIndex($e=>$e.id===A.id)),pe=CE(K.target,u,ie,J.length),ve=`file-${$h(A)}`,Ge={id:A.id,type:"fileChange",kind:ve,promptId:f.id,promptIndex:g,callIndex:C+O,eventIndex:A.eventIndex??f.eventIndex??g,title:A.shortPath||Xn(A.path)||"file change",body:A.preview||A.path,detail:OE(A),source:A,isNew:A.eventIndex>Zi,freshUntil:A.eventIndex>Zi?a:0,position:pe.clone(),target:pe,baseScale:.42,scale:.42};e.push(Ge),t.push(RE(k,Ge.id,K.target))})}),l.forEach((c,d)=>{let h=l[d+1];h&&t.push([c.id,h.id])}),e.forEach(c=>{c.home=c.target.clone()}),{nodes:e,connectors:t}}function IE({branch:n,parentId:e,prompt:t,promptIndex:i,branchX:s,branchY:r,startZ:o,callIndexStart:a,freshUntil:l,allNodes:c,allConnectors:d}){let h=sg(n.nodes),u=e,f=0;h.forEach((g,y)=>{let m=o-y*3,p=u;if(g.prompt){let b=gr(t,i,g.prompt,a+f,new I(s,r-.9,m),l,{kind:"subagent",title:Kp(g.prompt),baseScale:.3});c.push(b),d.push([u,b.id]),u=b.id,p=b.id,f+=1}let S=p;g.children.forEach((b,M)=>{let R=PE(s,r,m,M),T=gr(t,i,b,a+f,R,l,{title:Kp(b),baseScale:UE(b)});c.push(T),d.push([S,T.id]),S=T.id,f+=1})})}function PE(n,e,t,i){let s=i%8,r=Math.floor(i/8),o=s%2===0?-1:1,a=Math.floor(s/2),l=n+o*(.68+a*.42),c=e-1.16-r*.18+s%4*.06,d=t-.58-r*.92-Math.floor(s/2)*.18;return new I(l,c,d)}function sg(n){let e=[],t=null;return n.forEach(i=>{if(i.name==="subagent.prompt"){t={prompt:i,children:[]},e.push(t);return}t||(t={prompt:null,children:[]},e.push(t)),t.children.push(i)}),e}function gr(n,e,t,i,s,r,{kind:o=t.kind||"tool",title:a=t.name,baseScale:l=t.status==="completed"?.3:.4}={}){let c=t.eventIndex>Zi;return{id:t.id,type:"call",kind:o,promptId:n.id,promptIndex:e,callIndex:i,eventIndex:t.eventIndex??n.eventIndex??e,title:a,body:t.argumentPreview||"",detail:FE(t),source:t,isNew:c,freshUntil:c?r:0,position:s.clone(),target:s,baseScale:l,scale:l}}function LE(n,e,t,i,s,r,o=.32){let a=t.eventIndex>Zi;return{id:t.id,type:"message",kind:"assistant",promptId:n.id,promptIndex:e,callIndex:i,eventIndex:t.eventIndex??n.eventIndex??e,title:"assistant message",body:t.text,detail:t.text,source:t,isNew:a,freshUntil:a?r:0,position:s.clone(),target:s,baseScale:o,scale:o}}function rg(n){let e=n.filter(NE),t=n.filter(og),i=new Set(t),s=new Map;t.forEach(o=>{let a=Yp(o);if(!a)return;let l=s.get(a)??[];l.push(o),s.set(a,l)});let r=e.map((o,a)=>{let l=Yp(o),d=(l?s.get(l)?.find(h=>i.has(h)):null)??t.find(h=>i.has(h)&&h.eventIndex>=o.eventIndex)??null;return d&&i.delete(d),{launch:o,result:d,nodes:qp(o,d),eventIndex:Math.min(o.eventIndex,d?.eventIndex??o.eventIndex),order:a}});return i.forEach(o=>{r.push({launch:null,result:o,nodes:qp(null,o),eventIndex:o.eventIndex,order:e.length+r.length})}),r.sort((o,a)=>o.eventIndex-a.eventIndex||o.order-a.order)}function NE(n){return n.name==="spawn_agent"}function og(n){return n.name==="subagent"}function qp(n,e){return n?.subagentNodes?.length?n.subagentNodes:e?.subagentNodes??[]}function Yp(n){let e=`${n.argumentPreview||""}
${n.outputPreview||""}`;return e.match(/"agent_id"\s*:\s*"([^"]+)"/)?.[1]??e.match(/\bagent:\s*([^\s,}]+)/)?.[1]??e.match(/"agent_path"\s*:\s*"([^"]+)"/)?.[1]??null}function Zp(n){let e=DE(n);return e||(og(n)?"subagent result":"subagent")}function DE(n){let e=n.outputPreview;if(!e)return null;try{let t=JSON.parse(e);return typeof t.nickname=="string"&&t.nickname.trim()?t.nickname:null}catch{return e.match(/"nickname"\s*:\s*"([^"]+)"/)?.[1]??null}}function Kp(n){if(n.name.startsWith("subagent.")){let e=n.name.slice(9);return e==="more"?n.argumentPreview||"more":e}return n.name}function UE(n){return n.name==="subagent.prompt"?.34:n.name==="subagent.more"?.26:n.status==="completed"?.24:.32}function FE(n){let e=[`call: ${n.name}`,`kind: ${n.kind}`,`status: ${n.status}`,n.assistantMessageId?`assistant message: ${n.assistantMessageId}`:"",n.subagentSessionPath?`subagent session: ${n.subagentSessionPath}`:"",n.subagentNodes?.length?`subagent nodes: ${n.subagentNodes.length}`:"",n.startedAt?`started: ${n.startedAt}`:"",n.completedAt?`completed: ${n.completedAt}`:"",n.durationMs!==null&&n.durationMs!==void 0?`duration: ${cp(n.durationMs)}`:"","","arguments:",n.argumentPreview||"{}"];return n.outputPreview&&e.push("","output:",n.outputPreview),e.filter(Boolean).join(`
`)}function OE(n){return[`change: ${n.changeType}`,`path: ${n.path}`,n.callId?`call: ${n.callId}`:"",n.timestamp?`time: ${n.timestamp}`:"","",n.detail||n.preview].filter(Boolean).join(`
`)}function BE(){let n=ke.filter(r=>r.type==="prompt"),e=ke.filter(r=>r.type==="call"),t=ke.filter(r=>r.type==="fileChange"),i=ke.filter(r=>r.type==="message"),s=ke.filter(r=>r.type==="compaction");oi.prompt=Io("prompt",n,Bb,Gb),oi.call=Io("call",e,Op,Bp),oi.fileChange=Io("fileChange",t,zb,Xb),oi.message=Io("message",i,Op,Bp),oi.compaction=Io("compaction",s,kb,Wb)}function Io(n,e,t,i){if(!e.length)return;let s=new Kr(t.clone(),i.clone(),e.length);s.instanceMatrix.setUsage(zu),s.userData.bucket=n,s.userData.nodes=e,s.boundingSphere=new tn(new I,600),s.castShadow=!1,s.receiveShadow=!1,An.add(s);let r=performance.now();return e.forEach((o,a)=>{o.bucket=n,o.instanceIndex=a,yg(s,o,a,0,r),o.matrixDirty=!1,s.setColorAt(a,Jh(o,!1))}),s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0),s}function kE(){let n=Math.max(fh(Ji),fh(Ho),Math.max(ke.length-1,1)),e=new Float32Array(n*2*3),t=new Ct;t.setAttribute("position",new Bt(e,3)),t.setDrawRange(0,fh(Ho)*2),t.boundingSphere=new tn(new I,600);let i=new us({color:6547455,transparent:!0,opacity:.42});ai=new js(t,i),An.add(ai)}function ag(){Object.values(oi).forEach(n=>{n&&(An.remove(n),n.geometry.dispose(),n.material.dispose())}),oi={},ai&&(An.remove(ai),ai.geometry.dispose(),ai.material.dispose(),ai=null),rn&&(An.remove(rn),rn.geometry.dispose(),rn.material.dispose(),rn=null),Jp(Mh,ko),Jp(bh,zo)}function Jp(n,e){n.forEach(t=>{cg(t,e)}),n.clear()}function lg(n,e,t){Array.from(n.keys()).forEach(i=>{t.has(i)||(cg(n.get(i),e),n.delete(i))})}function cg(n,e){n?.forEach(t=>{e.remove(t),t.material.dispose()})}function ug(n,e,t,i,s,r){let o=n.get(e);return o||(o=Array.from({length:t},(a,l)=>zE(e,l/t,i,s,r)),n.set(e,o)),o}function zE(n,e,t,i,s){let r=new Fn({color:s,transparent:!0,opacity:0,side:Mn,depthWrite:!1,blending:po}),o=new qt(i,r);return o.userData={nodeId:n,offset:e},o.rotation.x=-Math.PI/2,o.visible=!1,t.add(o),o}function es({preserveCamera:n=!1}={}){let e;if(Mt==="inspect"&&et){let t=Xh(et);e=t;let i=new Map(t.placements.map(s=>[s.node.id,s]));ke.forEach(s=>{let r=i.get(s.id);r?(s.target.copy(r.target),s.scale=r.scale):(s.target.set(s.position.x,kh,s.position.z),s.scale=0),s.matrixDirty=!0}),n||(ct.target.set(0,.2,-t.laneDepth*.12),lt.position.set(0,18,Math.max(27,t.laneDepth*.58)))}else ke.forEach(t=>{t.target.copy(t.home??t.position),t.scale=t.baseScale,t.position.y<-1e3&&t.position.copy(t.target),t.matrixDirty=!0}),n||Er();qE(),hg(e),Ko(),wr=!0,Cc()}function hg(n){if(Mt==="inspect"&&et){Ho=(n??Xh(et)).connectors;return}Ho=Ji}function Xh(n){let e=ke.filter(f=>f.promptId===n),t=VE(n),i=new Set(t.flatMap(f=>f.nodes.map(g=>g.id))),s=e.filter(f=>f.type==="prompt"||!i.has(f.id)).sort(fg),r=[...s.map((f,g)=>({type:"node",eventIndex:f.eventIndex,order:g*2,node:f})),...t.map(f=>({type:"branch",eventIndex:f.eventIndex,order:f.order*2+1,branch:f}))].sort(WE),o=t.reduce((f,g)=>Math.max(f,g.nodes.length),0),a=Math.min(JM,Math.max(KM,Math.max(0,r.length-1)*jM,Math.max(0,o-1)*bp+8)),l=r.length>1?a/(r.length-1):0,c=a/2,d=new Map;r.forEach((f,g)=>{let y=c-g*l;f.type==="node"?d.set(f.node.id,y):f.branch.startZ=y});let h=s.map(f=>({node:f,target:new I(0,pg(f),d.get(f.id)??0),scale:Qp(f)}));t.forEach(f=>{let g=f.side*(QM+f.lane*eb);f.nodes.forEach((y,m)=>{h.push({node:y,target:new I(g+$E(y,m,f.side),XE(y),f.startZ-m*bp),scale:Qp(y)})})});let u=HE(r,s,t);return{placements:h,visibleNodes:dg([...s,...t.flatMap(f=>f.nodes)]),mainNodes:s,branches:t,connectors:u,laneDepth:a}}function VE(n){let e=Ee,t=e?.prompts.find(i=>i.id===n);return!e||!t?[]:rg(_g(e,t)).map((i,s)=>{let r=dg([i.launch?It.get(i.launch.id):null,...i.nodes.map(o=>It.get(o.id)),i.result?It.get(i.result.id):null]);return r.length?{nodes:r,eventIndex:i.eventIndex,order:s,side:s%2===0?-1:1,lane:Math.floor(s/2),startZ:0}:null}).filter(i=>!!i)}function HE(n,e,t){let i=[];return e.slice(1).forEach((s,r)=>{i.push([e[r].id,s.id])}),t.forEach(s=>{let r=s.nodes[0];if(!r)return;let o=n.findIndex(l=>l.type==="branch"&&l.branch===s),a=GE(n,o)??e[0]??null;a&&i.push([a.id,r.id]),s.nodes.slice(1).forEach((l,c)=>{i.push([s.nodes[c].id,l.id])})}),i}function GE(n,e){for(let t=e-1;t>=0;t-=1){let i=n[t];if(i?.type==="node")return i.node}return null}function dg(n){let e=new Set;return n.filter(t=>!t||e.has(t.id)?!1:(e.add(t.id),!0))}function fg(n,e){return n.type==="prompt"&&e.type!=="prompt"?-1:e.type==="prompt"&&n.type!=="prompt"?1:n.eventIndex-e.eventIndex||n.callIndex-e.callIndex||jp(n)-jp(e)}function WE(n,e){let t=n.type==="node"&&n.node.type==="prompt",i=e.type==="node"&&e.node.type==="prompt";return t!==i?t?-1:1:n.eventIndex-e.eventIndex||n.order-e.order}function jp(n){return n.type==="prompt"?0:n.type==="message"?1:n.type==="call"?2:n.type==="fileChange"?3:4}function pg(n){return n.type==="prompt"?1.15:n.type==="fileChange"?-.32:n.type==="message"?.62:n.type==="compaction"?.82:.24}function XE(n){return n.type!=="call"?pg(n):n.source.name==="subagent.prompt"?.72:n.source.name==="subagent.compaction"?.54:n.source.name==="spawn_agent"?.46:n.source.name==="subagent"?.3:n.source.name==="subagent.file"?-.16:n.source.name==="subagent.message"?.2:.04}function $E(n,e,t){if(n.type!=="call"||e===0||n.source.name==="subagent.prompt"||n.source.name==="subagent"||n.source.name==="subagent.more")return 0;let i=[.3,-.3,.58,-.58];return i[(e-1)%i.length]*t}function Qp(n){return n.type==="prompt"?.62:n.type==="fileChange"?.36:n.type==="message"?.28:n.type==="compaction"?.48:n.source.name==="spawn_agent"?.44:n.source.name==="subagent"?.36:n.source.name==="subagent.prompt"?.34:n.source.name==="subagent.more"?.26:Math.min(.34,Math.max(.24,n.baseScale))}function qE(){let n=Mt==="inspect"&&!!et;Cm.classList.toggle("inspect-active",n),Ft.setAttribute("aria-label",n?"Perlustron focused prompt inspection":"Perlustron session workflow")}function mg(n,{includeCompactionProgress:e=!1}={}){let t=KE(n),i=[...t.map((r,o)=>({type:"prompt",eventIndex:YE(n,t,r,o),prompt:r,promptIndex:o})),...(n.compactions||[]).map((r,o)=>({type:"compaction",eventIndex:r.eventIndex,compaction:r,compactionIndex:o}))],s=e?JE(n,i):null;return s&&i.push(s),i.sort((r,o)=>r.eventIndex-o.eventIndex)}function YE(n,e,t,i){let s=e[i+1]?.eventIndex??Number.POSITIVE_INFINITY,r=ZE(n,t),o=n.compactions?.filter(a=>a.eventIndex>t.eventIndex&&a.eventIndex<s).reduce((a,l)=>a===null||l.eventIndex>a?l.eventIndex:a,null)??null;return o!==null?Math.max(r,o+.25):r}function ZE(n,e){let t=e.id===xg(n)?[...Wn.activeToolCalls,...Wn.completedToolCalls].map(i=>i.eventIndex):[];return Math.max(e.eventIndex,...e.calls.map(i=>i.eventIndex),...e.assistantMessages.map(i=>i.eventIndex),...(e.fileChanges||[]).map(i=>i.eventIndex),...t)}function KE(n){let e=gg(n);return e?[...n.prompts,e]:n.prompts}function gg(n){let e=Wn.pendingPrompt;return!e||e.eventIndex<=n.latestEventIndex?null:{id:ys,eventIndex:e.eventIndex,timestamp:e.timestamp,title:e.title||"Incoming prompt",text:e.text,images:[],calls:[],assistantMessages:[],fileChanges:[]}}function _g(n,e){if(e.id!==xg(n))return e.calls;let t=new Set(e.calls.map(s=>s.id)),i=[...Wn.activeToolCalls,...Wn.completedToolCalls].filter(s=>!t.has(s.id)&&s.eventIndex>n.latestEventIndex);return i.length?[...e.calls,...i]:e.calls}function xg(n){return gg(n)?ys:n.prompts.at(-1)?.id??null}function JE(n,e){if(!Go)return null;let t=e.reduce((o,a)=>a.type!=="prompt"?o:!o||a.eventIndex>=o.eventIndex?a:o,null),s=Math.max(n.latestEventIndex,t?.eventIndex??0)+.5,r={id:Mr,eventIndex:s,timestamp:n.lastModifiedAt||n.generatedAt||null,title:"Compacting context",text:"Compaction in progress",detail:["compaction: in progress",t?`anchor: ${t.prompt.title}`:"",n.pendingBytes>0?`pending bytes: ${n.pendingBytes}`:""].filter(Boolean).join(`
`),replacedMessageCount:0,encrypted:!1,reason:"in progress"};return{type:"compaction",eventIndex:s,compaction:r,compactionIndex:n.compactions.length}}function jE({label:n,detail:e,icon:t}){let i=document.createElement("div");i.className="root-row metadata-row",i.title=e;let s=QE(t),r=document.createElement("span");r.className="root-copy";let o=document.createElement("strong");o.textContent=n;let a=document.createElement("small");return a.textContent=e,r.append(o,a),i.append(s,r),i}function QE(n){let e=document.createElement("span");e.className=`root-icon ${n}`,e.setAttribute("aria-hidden","true");let t=document.createElementNS(_p,"svg");t.setAttribute("viewBox","0 0 24 24"),t.setAttribute("focusable","false"),t.setAttribute("fill","none"),t.setAttribute("stroke","currentColor"),t.setAttribute("stroke-width","2"),t.setAttribute("stroke-linecap","round"),t.setAttribute("stroke-linejoin","round");for(let i of _M[n]){let s=document.createElementNS(_p,"path");s.setAttribute("d",i),t.append(s)}return e.append(t),e}function eT(){let n=Vt().metadata,e=(n?.dynamicTools||[]).map(s=>s.namespace?`${s.namespace}.${s.name}`:s.name).slice(0,6),t=[{label:"Codex",detail:[n?.originator,n?.cliVersion].filter(Boolean).join(" "),icon:"codex"},{label:"Source",detail:[n?.source,n?.modelProvider].filter(Boolean).join(" / "),icon:"source"},{label:"Git",detail:tT(n?.gitCommitHash)||Xn(n?.repositoryUrl||""),icon:"git"},{label:"Policy",detail:[n?.approvalPolicy,n?.sandbox].filter(Boolean).join(" / "),icon:"policy"},{label:"Model",detail:n?.model||"",icon:"model"},{label:"Tools",detail:e.join(", "),icon:"tools"}].filter(s=>s.detail),i=document.createDocumentFragment();t.forEach(s=>i.append(jE(s))),TM.replaceChildren(i)}function tT(n){return n?n.slice(0,10):""}function $h(n){return dM.includes(n.changeType)?n.changeType:"update"}function nT(){let n=performance.now(),e=n/1e3,t=Math.min(e-Up,.04);Up=e,oc+=t;let i=fT(t);pT(n),yT(oc,n),(i||wr)&&Cc(),i&&Ko(),mT(n,oc),_T(n,oc),iT(t),ct.update(),dT(),yi?.render(An,lt)}function iT(n){let e=(wn.has("KeyW")?1:0)-(wn.has("KeyS")?1:0),t=(wn.has("KeyD")?1:0)-(wn.has("KeyA")?1:0),i=(wn.has(Lm)?1:0)-(Yg()?1:0);if(!e&&!t&&!i||(hT(),lt.getWorldDirection(Ki),Lp.crossVectors(Ki,lt.up).normalize(),Ao.set(0,0,0).addScaledVector(Ki,e).addScaledVector(Lp,t).addScaledVector(lt.up,i),Ao.lengthSq()<1e-6))return;let s=lt.position.distanceTo(ct.target),r=Math.min(Rb,Math.max(Cb,s*Ib)),o=Lw()?r*Pb:r;Ao.normalize().multiplyScalar(o*n),lt.position.add(Ao),ct.target.add(Ao)}function sT(n){n.preventDefault()}function rT(n){let e=n.deltaMode===WheelEvent.DOM_DELTA_PAGE?window.innerHeight:n.deltaMode===WheelEvent.DOM_DELTA_LINE?16:1,t=Math.max(-Cp,Math.min(Cp,n.deltaY*e/Ab));Math.abs(t)<.001||(Ph(-t*yh),n.preventDefault())}function oT(n){if(!(n.button!==2||!uT(n))){Vh=!0,Wo=n.pointerId,Ah=n.clientX,Ch=n.clientY,qh();try{Ft.setPointerCapture(n.pointerId)}catch{}n.preventDefault()}}function aT(n){if(!Vh||n.pointerId!==Wo)return;let e=n.clientX-Ah,t=n.clientY-Ch;Ah=n.clientX,Ch=n.clientY,lT(e,t),n.preventDefault()}function vg(n){n.pointerId===Wo&&(cT(n.pointerId),n.preventDefault())}function lT(n,e){!n&&!e||(Co.setFromQuaternion(lt.quaternion,"YXZ"),Co.y-=n*Rp,Co.x=Math.max(-Ip,Math.min(Ip,Co.x-e*Rp)),lt.quaternion.setFromEuler(Co),qh())}function cT(n=Wo){Vh=!1,Wo=null;try{n!=null&&Ft.hasPointerCapture(n)&&Ft.releasePointerCapture(n)}catch{}}function uT(n){return!(Mt==="overview"&&xr==="two-d")&&!Sr(n.target)}function hT(){lt.position.distanceTo(ct.target)>Nm&&qh()}function qh(){let n=Math.min(Nm,Math.max(Ub,lt.position.distanceTo(ct.target)));lt.getWorldDirection(Ki),ct.target.copy(lt.position).addScaledVector(Ki,n),ct.update()}function dT(){br.position.x=Math.round(ct.target.x/rc)*rc,br.position.z=Math.round(ct.target.z/rc)*rc}function fT(n){let e=1-Math.pow(.001,n),t=!1;return ke.forEach(i=>{i.position.distanceToSquared(i.target)<4e-6||(i.position.lerp(i.target,e),i.matrixDirty=!0,t=!0)}),t}function pT(n){let e=!1;ke.forEach(t=>{t.isNew&&!ws(t,n)&&(t.isNew=!1,t.matrixDirty=!0,e=!0)}),e&&xn()}function mT(n,e){let t=ke.filter(o=>o.type==="compaction"&&In(o)&&ws(o,n)),i=new Map;t.forEach(o=>{i.set(o.id,{position:o.position,eventIndex:o.eventIndex,progress:Yh(o,n),inProgress:!1})});let s=Go?gT():null;if(s){let o=_c?n-_c:0;i.set(Mr,{position:s.position,eventIndex:s.eventIndex,progress:o/2200%1,inProgress:!0})}let r=new Set(i.keys());lg(Mh,ko,r),i.forEach((o,a)=>{let l=ug(Mh,a,tb,ko,Vb,xc.compaction),c=o.inProgress?.82:Math.sin(Math.min(1,o.progress)*Math.PI);l.forEach((d,h)=>{let u=(o.progress+d.userData.offset)%1,f=Math.pow(1-u,o.inProgress?1.35:1.8)*(.18+c*.56);d.position.set(o.position.x,o.position.y-(o.inProgress?.82:.66),o.position.z),d.scale.setScalar(o.inProgress?1.45+u*6.2+Math.sin(e*5.2)*.16:1.2+u*8.4),d.rotation.z=e*(o.inProgress?-.9:.45)+o.eventIndex*.01+h*.72,d.material.opacity=f,d.visible=f>.012})})}function gT(){let n=It.get(Mr);if(n)return n;if(et){let e=It.get(et);if(e?.type==="prompt")return e}return jh()??Rg()??Cg()}function _T(n,e){let t=ke.filter(a=>a.type==="prompt"&&In(a)&&ws(a,n)),i=Wn.assistantStreaming?jh():null,s=i&&In(i)?i:null,r=xT(s?[...t,s]:t),o=new Set(r.map(a=>a.id));lg(bh,zo,o),r.forEach(a=>{let l=ug(bh,a.id,nb,zo,Hb,xc.prompt),c=Yh(a,n),d=Math.sin(Math.min(1,c)*Math.PI);l.forEach((h,u)=>{let f=(c+h.userData.offset)%1,g=Math.pow(1-f,1.55)*(.1+d*.38);h.position.set(a.position.x,a.position.y-.74,a.position.z),h.scale.set(1+f*3.2,1+f*5.4,1),h.rotation.z=e*.72+a.eventIndex*.012+u*Math.PI*.5,h.material.opacity=g,h.visible=g>.01})})}function xT(n){let e=new Set;return n.filter(t=>e.has(t.id)?!1:(e.add(t.id),!0))}function vT(){if(!ke.length)return;let n=new Ct;n.setAttribute("position",new Bt(new Float32Array(ke.length*3),3)),n.setAttribute("color",new Bt(new Float32Array(ke.length*3),3)),n.boundingSphere=new tn(new I,600);let e=new Qs({size:3,sizeAttenuation:!1,vertexColors:!0,transparent:!0,opacity:.92,depthWrite:!1}),t=new Jr(n,e);t.renderOrder=5,t.userData.nodes=ke,rn=t,An.add(t),wr=!0,Cc()}function Cc(){if(!rn)return;let n=rn.geometry.getAttribute("position"),e=n.array;ke.forEach((t,i)=>{let s=i*3;In(t)?(e[s]=t.position.x,e[s+1]=t.position.y,e[s+2]=t.position.z):(e[s]=0,e[s+1]=kh,e[s+2]=0)}),n.needsUpdate=!0,wr&&Tg()}function yT(n,e){Object.values(oi).forEach(t=>{if(!t)return;let i=!1;t.userData.nodes.forEach((s,r)=>{let o=ws(s,e),a=s.id===dt;!s.matrixDirty&&!o&&!a||(yg(t,s,r,n,e,o,a),s.matrixDirty=!1,i=!0)}),i&&(t.instanceMatrix.needsUpdate=!0)})}function yg(n,e,t,i,s=performance.now(),r=ws(e,s),o=e.id===dt){if(!In(e)){Tn.position.set(0,kh,0),Tn.rotation.set(0,0,0),Tn.scale.setScalar(0),Tn.updateMatrix(),n.setMatrixAt(t,Tn.matrix);return}let a=Yh(e,s),l=r&&e.type==="compaction",c=r?l?.18+em(a)*1.08:.26+em(a)*.74:1,d=l?.28:.16,h=r?1+Math.max(0,Math.sin(i*(l?14:9)+e.eventIndex))*d:1,u=(o?1.18:r?1+Math.sin(i*2.3+e.eventIndex)*.018:1)*h;Tn.position.copy(e.position),Mt==="inspect"||!r&&!o?Tn.rotation.set(0,0,0):l?Tn.rotation.set(i*1.45,i*2.2+e.eventIndex*.03,i*1.1):Tn.rotation.set(.08*Math.sin(i+e.eventIndex),i*.2+e.eventIndex*.07,0),Tn.scale.setScalar(e.scale*c*u),Tn.updateMatrix(),n.setMatrixAt(t,Tn.matrix)}function ws(n,e){return!!(n.freshUntil&&n.freshUntil>e)}function Yh(n,e){return!n.freshUntil||n.freshUntil<=e?1:Math.max(0,Math.min(1,1-(n.freshUntil-e)/zh))}function em(n){return 1-Math.pow(1-n,3)}function Ko(){if(!ai)return;let n=ai.geometry.getAttribute("position"),e=n.array,t=0,i=(s,r)=>{let o=t*6;e[o]=s.x,e[o+1]=s.y,e[o+2]=s.z,e[o+3]=r.x,e[o+4]=r.y,e[o+5]=r.z,t+=1};Ho.forEach(s=>{let r=uc(s),o=hc(s),a=It.get(r),l=It.get(o);if(!a||!l||!In(a)||!In(l))return;let c=a.position;Array.isArray(s)||s.waypoints.forEach(d=>{i(c,d),c=d}),i(c,l.position)}),ai.geometry.setDrawRange(0,t*2),n.needsUpdate=!0}function ST(n){Zh(n);let e=Sg();e&&As(e)}function MT(n){Zh(n);let e=Sg();if(e){if(e.type==="compaction"){et=null,Mt="overview",es(),As(e);return}e.type==="prompt"?um(e.id,e):um(e.promptId,e)}}function Zh(n){let e=Ft.getBoundingClientRect();Vo.x=(n.clientX-e.left)/e.width*2-1,Vo.y=-((n.clientY-e.top)/e.height*2-1)}function Sg(){Sh.setFromCamera(Vo,lt);let n=Object.values(oi).filter(t=>!!t);rn&&n.push(rn);let e=Sh.intersectObjects(n,!1);for(let t of e){if(t.object===rn&&t.index!==void 0){let i=rn.userData.nodes[t.index]||null;if(i&&In(i))return i;continue}if(t.instanceId!==void 0){let s=t.object.userData.nodes[t.instanceId]||null;if(s&&In(s))return s}}return bT()}function bT(){let n=Ft.getBoundingClientRect(),e=n.left+(Vo.x+1)/2*n.width,t=n.top+(1-Vo.y)/2*n.height,i=null,s=Pp*Pp;return ke.forEach(r=>{if(!In(r)||(fr.copy(r.position).project(lt),fr.z<-1||fr.z>1))return;let o=n.left+(fr.x+1)/2*n.width,a=n.top+(1-fr.y)/2*n.height,l=(o-e)**2+(a-t)**2;l<=s&&(i=r,s=l)}),i}function Es(n){Yo=n??{},Rt==="raw"&&Ee&&Lc()}function Mg(){Yo=null,Rt==="raw"&&Ee&&Lc()}function As(n,{restartStream:e=!0,reveal:t=!0}={}){if(!n)return;dt=n.id,t&&Lg(),xn(),Bh.textContent=n.kind.toUpperCase(),Qi.classList.toggle("prompt-context",n.type==="prompt"),Dh(n.type==="prompt"?"":n.title,"Selection"),Oh.textContent=n.type==="prompt"?`PROMPT ${n.promptIndex+1}`:n.type==="compaction"?`CHECKPOINT ${n.eventIndex}`:n.type==="fileChange"?`FILE ${n.eventIndex}`:n.type==="message"?`ASSISTANT ${n.eventIndex}`:`TURN ${n.eventIndex}`,Nh(SM(n)),Uh.textContent=n.title,Es(n.source),Rr(),Kh(EM(n));let i=n.detail||n.body||n.title;e&&(n.type==="prompt"?ET(i):bg(i))}function Ih(){lc&&clearInterval(lc),lc=null}function bg(n){Ih();let e=n.split(`
`),t=0;gs.classList.remove("stream-markdown"),gs.textContent="",lc=setInterval(()=>{let i=e.slice(t,t+2);if(!i.length){Ih();return}gs.textContent+=`${i.join(`
`)}
`,t+=2},34)}function ET(n){Ih(),gs.classList.add("stream-markdown"),gs.replaceChildren(AT(n)??PT(n))}var TT=["File","Side","Lines","Node position","Page URL","Frame","Target","Target selector","Target path","Comment"],wT=[{label:"File",field:"File"},{label:"Side",field:"Side"},{label:"Lines",field:"Lines"},{label:"Node",field:"Node position"},{label:"Target",field:"Target"},{label:"Selector",field:"Target selector"},{label:"Path",field:"Target path"},{label:"Page",field:"Page URL",asLink:!0},{label:"Frame",field:"Frame"}];function AT(n){if(!/^#\s+Diff comments:\s*$/m.test(n))return null;let e=CT(n);if(!e.length)return null;let t=document.createDocumentFragment(),i=document.createElement("section");i.className="annotation-prompt";let s=document.createElement("h1");s.textContent="Diff comments",i.append(s);let r=n.match(/^- Current URL:\s*(.+)$/m)?.[1]?.trim();return e.forEach(o=>{let a=document.createElement("article");a.className="annotation-item";let l=document.createElement("span");l.className="annotation-marker",l.textContent=`Comment ${o.number}`,a.append(l);let c=document.createElement("p");c.className="annotation-comment",c.textContent=tm(o,"Comment")||"No comment text.",a.append(c);let d=document.createElement("dl");d.className="annotation-meta",wT.forEach(h=>{nm(d,h.label,tm(o,h.field),h.asLink)}),nm(d,"Current",r,!0),a.append(d),i.append(a)}),t.append(i),t}function CT(n){let e=n.replace(/\r\n?/g,`
`),t=[...e.matchAll(/^##\s+Comment\s+(\d+)\s*$/gm)];return t.map((i,s)=>{let r=t[s+1]?.index??e.search(/\n# In app browser:/),o=r>=0?r:e.length,a=e.slice((i.index??0)+i[0].length,o);return{number:i[1],fields:RT(a)}})}function RT(n){let e=new Map,t=n.split(`
`),i=0;for(;i<t.length;){let s=t[i].match(/^([A-Z][A-Za-z ]+):\s*(.*)$/),r=s?.[1];if(!r||!Eg(r)){i+=1;continue}let o=s[2].trim();if(o){e.set(r,o),i+=1;continue}let a=[];for(i+=1;i<t.length;){let l=t[i];if(!l.trim()||/^#{1,6}\s+/.test(l)||IT(l))break;a.push(l.trim()),i+=1}e.set(r,a.join(`
`).trim())}return e}function Eg(n){return TT.includes(n)}function IT(n){let e=n.match(/^([A-Z][A-Za-z ]+):/);return!!(e&&Eg(e[1]))}function tm(n,e){return n.fields.get(e)??""}function nm(n,e,t,i=!1){let s=t?.trim();if(!s)return;let r=document.createElement("dt");r.textContent=e;let o=document.createElement("dd");if(i&&/^https?:\/\//.test(s)){let a=document.createElement("a");a.href=s,a.target="_blank",a.rel="noopener noreferrer",a.textContent=s,o.append(a)}else o.textContent=s;n.append(r,o)}function PT(n){let e=document.createDocumentFragment(),t=n.replace(/\r\n?/g,`
`).split(`
`),i=0,s=(o,a)=>{o.innerHTML=im(a)},r=(o,a)=>{o.innerHTML=a.map(l=>im(l.trim())).join("<br>")};for(;i<t.length;){let o=t[i]??"";if(!o.trim()){i+=1;continue}let a=o.match(/^\s*```(\S*)\s*$/);if(a){let h=[];for(i+=1;i<t.length&&!/^\s*```\s*$/.test(t[i]??"");)h.push(t[i]??""),i+=1;i<t.length&&(i+=1);let u=document.createElement("pre"),f=document.createElement("code");a[1]&&(f.dataset.language=a[1]),f.textContent=h.join(`
`),u.append(f),e.append(u);continue}let l=o.match(/^\s{0,3}(#{1,6})\s+(.+)$/);if(l){let h=Math.min(6,l[1].length),u=document.createElement(`h${h}`);s(u,l[2]),e.append(u),i+=1;continue}if(/^\s*[-*]\s+/.test(o)){let h=document.createElement("ul");for(;i<t.length;){let u=(t[i]??"").match(/^\s*[-*]\s+(.+)$/);if(!u)break;let f=document.createElement("li");s(f,u[1]),h.append(f),i+=1}e.append(h);continue}if(/^\s*\d+\.\s+/.test(o)){let h=document.createElement("ol");for(;i<t.length;){let u=(t[i]??"").match(/^\s*\d+\.\s+(.+)$/);if(!u)break;let f=document.createElement("li");s(f,u[1]),h.append(f),i+=1}e.append(h);continue}let c=[];for(;i<t.length;){let h=t[i]??"";if(!h.trim()||/^\s*```/.test(h)||/^\s{0,3}#{1,6}\s+/.test(h)||/^\s*[-*]\s+/.test(h)||/^\s*\d+\.\s+/.test(h))break;c.push(h.trim()),i+=1}let d=document.createElement("p");r(d,c),e.append(d)}if(!e.childNodes.length){let o=document.createElement("p");o.textContent="",e.append(o)}return e}function im(n){let e=[],t=si(n).replace(/`([^`]+)`/g,(i,s)=>{let r=`@@CODE_SPAN_${e.length}@@`;return e.push(`<code>${s}</code>`),r});return t=t.replace(/\[([^\]\n]+)\]\(((?:https?:\/\/|\/)[^\s)]+)\)/g,(i,s,r)=>`<a href="${r}" target="_blank" rel="noopener noreferrer">${s}</a>`),t=t.replace(/\*\*([^*\n]+)\*\*/g,"<strong>$1</strong>"),t=t.replace(/(^|[^\*])\*([^*\n]+)\*/g,"$1<em>$2</em>"),t=t.replace(/@@CODE_SPAN_(\d+)@@/g,(i,s)=>e[Number(s)]??""),t}function Kh(n=[]){if(vp.replaceChildren(),!n.length)return;let e=document.createDocumentFragment();n.forEach((t,i)=>{let s=document.createElement("figure"),r=LT(t),o=document.createElement("a");o.className="stream-image-link",o.href=r,o.target="_blank",o.rel="noopener",o.title=`Prompt image ${i+1}`;let a=document.createElement("img");a.loading="eager",a.decoding="async",a.src=r,a.alt=`Prompt image ${i+1}`,a.addEventListener("load",()=>{s.classList.add("loaded"),s.classList.remove("load-error")}),a.addEventListener("error",()=>{s.classList.add("load-error"),l.textContent="Image unavailable in this local/privacy context; use Raw or Export for redacted evidence."});let l=document.createElement("figcaption"),c=t.detail?` (${t.detail})`:"";l.textContent=`${t.mimeType||"image"}${c}`,o.append(a),s.append(o,l),e.append(s)}),vp.append(e)}function LT(n){let e=new URL(n.url,window.location.origin),t=Ee?.lastModifiedAt||Ee?.generatedAt||`${n.eventIndex}`,i=Rn||Ee?.sessionPath||null;return e.searchParams.set("v",t),Om(e,{includeSource:!1,sessionPath:i}),`${e.pathname}${e.search}`}function xn(){ke.forEach(n=>{n.matrixDirty=!0}),Object.values(oi).forEach(n=>{n&&(n.userData.nodes.forEach((e,t)=>{n.setColorAt(t,Jh(e,e.id===dt))}),n.instanceColor&&(n.instanceColor.needsUpdate=!0))}),wr=!0,Tg()}function Tg(){if(!rn)return;let n=rn.geometry.getAttribute("color"),e=n.array;ke.forEach((t,i)=>{let s=i*3,r=Jh(t,t.id===dt);e[s]=r.r,e[s+1]=r.g,e[s+2]=r.b}),n.needsUpdate=!0,wr=!1}function Jh(n,e){let t=xc[n.kind]??xc.tool;return ps.setHex(t),In(n)?e?ps.lerp(Np,.38):n.isNew?ps.lerp(Np,.24):Mt==="inspect"&&n.promptId!==et?ps.multiplyScalar(.34):Ww(n)||ps.multiplyScalar(.38):ps.setRGB(0,0,0),ps}function wg(n){return Mt!=="inspect"||!et||n.promptId===et}function In(n){return wg(n)&&(!vr||Oc(n,vr))}function Ag(){let n=Ft.getBoundingClientRect(),e=Math.max(1,Math.floor(n.width)),t=Math.max(1,Math.floor(n.height));yi?.setSize(e,t,!1),yi?.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75)),lt.aspect=e/t,lt.updateProjectionMatrix()}function Er({preserveDistance:n=!1}={}){if(!ke.length||Mt!=="overview")return;let e=Qh(),t=lt.aspect<.75,i=Math.max(18,lt.position.distanceTo(ct.target)),s=n?Math.min(90,i):t?xr==="two-d"?ZM:YM:xr==="two-d"?Rm:qM,r=e?NT(e):fr.set(0,0,0);ct.target.set(r.x,r.y,r.z),xr==="two-d"?lt.position.set(r.x,r.y+s,r.z+.01):lt.position.set(r.x+s*.38,r.y+s*.68,r.z+s*.58),ct.update()}function NT(n){let e=ke.filter(l=>l.promptId===n.promptId&&wg(l));if(e.length<=1)return yc(n);let t=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY,s=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY,o=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY;return e.forEach(l=>{let c=yc(l);t=Math.min(t,c.x),i=Math.max(i,c.x),s=Math.min(s,c.y),r=Math.max(r,c.y),o=Math.min(o,c.z),a=Math.max(a,c.z)}),new I((t+i)/2,(s+r)/2,(o+a)/2)}function yc(n){return n.home??n.target}function DT(){let n=Qh();return n?yc(n):null}function Cg(){return ke.reduce((n,e)=>!n||e.eventIndex>=n.eventIndex?e:n,null)}function jh(){return ke.reduce((n,e)=>e.type!=="prompt"?n:!n||e.eventIndex>=n.eventIndex?e:n,null)}function UT(){return ke.reduce((n,e)=>e.type!=="prompt"||e.id===ys?n:!n||e.eventIndex>=n.eventIndex?e:n,null)}function Rg(){let n=Ee?mg(Ee).at(-1):null;if(!n)return null;let e=n.type==="prompt"?n.prompt.id:n.compaction.id;return It.get(e)??null}function Qh(){let n=Rg();if(n?.type==="prompt")return n.id===ys?UT()??n:n;if(et){let e=It.get(et);if(e?.type==="prompt")return e}return jh()??n??Cg()}function Ig(){Rc();let n=Ee,e=n?.prompts.at(-1);Qi.classList.remove("prompt-context"),Bh.textContent="SESSION",Dh(n?.ui.sessionName||"Session overview","Session"),Oh.textContent=n?`${n.totals.promptCount} prompts`:"Loading",Nh(n?.lastModifiedAt||"Live context"),Uh.textContent=e?.title||n?.ui.sessionName||"Session overview",gs.classList.remove("stream-markdown"),gs.textContent=WT(),Kh()}function Pg(){Rt==="raw"&&!Yo&&Lc()}function Lg(){if(!FT()){Rc();return}Qi.classList.remove("hidden"),Fg()}function FT(){return Rt==="map"}function Ng(){return!Qi.classList.contains("hidden")}function Rc(){Qi.classList.add("hidden"),Rr()}function ed(){if(!dt)return null;let n=It.get(dt);if(!n)return null;let e=Pc().find(t=>t.node?.id===n.id||t.eventIndex===n.eventIndex);return e?{node:n,row:e}:{node:n}}function Dg(){let n=ed();return n?OT(n.row??zg(n.node)):null}function OT(n){let e=Vt();return pp({source:Mi(e.source),lineNumber:n.lineNumber,eventIndex:n.eventIndex,kind:[n.role,n.eventType,n.toolName].filter(Boolean).join(" / "),summary:BT(n),parserVersion:e.parserVersion,schemaVersion:e.schemaVersion})}function BT(n){return fp({role:n.role,eventType:n.eventType,toolName:n.toolName,filePath:n.filePath,rawSummary:kT(n)})}function kT(n){return[n.title,n.detail].filter(Boolean).join(" - ")}function Rr(){let n=!!ed();Qi.classList.toggle("has-selection",n);for(let e of[Oo,pm,mm,gm])e.disabled=!n;n||(Oo.textContent="Copy Safe Ref")}async function zT(){let n=Dg();if(!n){Rr();return}try{await navigator.clipboard.writeText(n),Oo.textContent="Copied",window.setTimeout(()=>{Oo.textContent="Copy Safe Ref"},1200)}catch(e){bi("COPY","Copy failed",Tr(e))}}function VT(){let n=Dg();if(!n){bi("COPY","Select an event first","Open Map or Timeline and select an event before copying a safe reference.");return}ts(n,"Copy-safe reference copied")}function HT(n){let e=n.shareabilitySummary,t=n.privacySummary,i=n.parserHealth;return mp({source:Mi(n.source),sessionName:n.ui.sessionName||n.sessionPath||`${Mi(n.source)} session`,totalTurns:n.ui.totalTurns,callCount:n.totals.callCount,fileChangeCount:n.totals.fileChangeCount,latestEventIndex:n.latestEventIndex,parserVersion:n.parserVersion,schemaVersion:n.schemaVersion,cliContext:[n.metadata.originator,n.metadata.cliVersion].filter(Boolean).join(" ")||null,rawLogsSafeToShare:e.rawLogsSafeToShare,rawLogCaution:e.rawLogCaution,sanitizedGraphNote:e.sanitizedGraphNote,redactedFieldCount:i.redactedFieldCount,imageCount:i.imageCount,apiTokenRequired:t.apiTokenRequired})}function Ic(n){let e=ed();if(!e){Rr();return}let t=e.node.id,i=e.node.promptId,s=e.row?.source??e.node.source;Es(s),Qt(n),dt=t,et=i,xn(),n!=="map"&&Ir()}function Ug(n){ms=n,Fg()}function Fg(){Qi.classList.toggle("compact",ms),Po.textContent=ms?"+":"-",Po.title=ms?"Expand context":"Minimize context",Po.setAttribute("aria-label",ms?"Expand context":"Collapse context"),Po.setAttribute("aria-expanded",String(!ms))}function td(n,e){for(let t of n)t.classList.toggle("active",e(t))}function Og(){td(wm,n=>n.dataset.appMode===Rt),vh.classList.toggle("active",Rt==="settings"),vh.setAttribute("aria-pressed",String(Rt==="settings"))}function Bg(){td(Am,n=>n.dataset.source===Ss)}async function GT(n){let e=Um(n);if(e===Ss)return;Fc(),Ss=e,Rn=null,Vn=null,jt=null,Si=null,_n=null,xs=null,Bg(),Zo(),zm();let t=Ts;await Hh({generation:t}),await Cr({suppressLiveAnimation:!0}),bs(t)&&Uc()}function WT(){return Ee?[`${Mi(Ee.source)} session`,`Prompts: ${Ee.totals.promptCount}`,`Turns: ${Ee.ui.totalTurns}`,`Calls: ${Ee.totals.callCount}`,`Completed calls: ${Ee.totals.completedCallCount}`,`Messages: ${Ee.totals.assistantMessageCount}`,`File changes: ${Ee.totals.fileChangeCount}`,`Context: ${Xg(Ee.tokenTelemetry)}`,`Compactions: ${Ee.totals.compactionCount}`,`Unknown events: ${Ee.parserHealth?.unknownEventCount??0}`,`Malformed lines: ${Ee.parserHealth?.malformedLineCount??0}`,`Codex: ${[Ee.metadata.originator,Ee.metadata.cliVersion].filter(Boolean).join(" ")||"unknown"}`,`Model: ${Ee.metadata.model||Ee.metadata.modelProvider||"unknown"}`,`Records: ${Ee.lineCount}`,`Session file: ${Xn(Ee.sessionPath)||Ee.sessionPath}`].join(`
`):"Waiting for session data"}function nd(){let n=Rt!=="map";kM.classList.toggle("hidden",!n),Cm.classList.toggle("mode-panel-active",n)}function Ir(){if(nd(),Rt!=="map"){if(zM.textContent=Mi(Ee?.source??Ss),VM.textContent=XT(Rt),HM.classList.toggle("hidden",Rt!=="timeline"),!Ee){an.textContent="Waiting for session data",zt.replaceChildren(on("Waiting for session data."));return}switch(Rt){case"summary":$T();return;case"timeline":KT();return;case"transcript":tw();return;case"health":Hg();return;case"insights":sw();return;case"diff":No();return;case"raw":Lc();return;case"export":rw();return;case"settings":ow();return}}}function XT(n){return n.charAt(0).toUpperCase()+n.slice(1)}function $T(){if(!Ee){an.textContent="Waiting for session data",zt.replaceChildren(on("Waiting for session data."));return}let n=Vt(),e=Ee.privacySummary,t=Ee.shareabilitySummary,i=n.tokenTelemetry,s=n.parserHealth,r=n.ui.sessionName||n.cwd?.split(/[\\/]/).filter(Boolean).at(-1)||`${Mi(n.source)} session`,o=t.rawLogsSafeToShare?"Raw logs marked safe to share":"Raw logs require review before sharing";an.textContent=`${o} - ${Xg(i)}`;let a=document.createElement("div");a.className="summary-shell";let l=Ke("Session Summary");l.classList.add("summary-hero"),l.append($o(`${r} is a ${Mi(n.source)} trace with ${Ne(n.ui.totalTurns)} turns, ${Ne(n.totals.callCount)} tool calls, and ${Ne(n.totals.fileChangeCount)} file changes.`),$o(`${o}. Sanitized graph/export and copy-safe references reduce exposure compared with raw logs, but they still require human judgment before sharing.`));let c=document.createElement("div");c.className="summary-triage";let d=Ke("What Happened",[`${Ne(n.ui.totalTurns)} turns across ${Ne(n.totals.promptCount)} prompts`,`${Ne(n.totals.completedCallCount)} completed tool calls; ${Ne(n.totals.fileChangeCount)} file changes`,`${Ne(s.unknownEventCount)} unknown and ${Ne(s.malformedLineCount)} malformed parser records`]),h=document.createElement("div");h.className="mode-actions",h.append(at("Open Timeline",()=>Qt("timeline")),at("Read Transcript",()=>Qt("transcript"))),d.append(h);let u=Ke("Safe To Share",[o,t.sanitizedGraphNote||"Sanitized graph data is intended for UI and report sharing after review.",e.apiTokenRequired?"Local API token is required for browser/API access; token value is not shown.":"No local API token required by this run."]),f=document.createElement("div");f.className="mode-actions",f.append(at("Copy Share Summary",()=>ts(HT(n),"Copy-safe share summary copied")),at("Open Export",()=>Qt("export")),at("Audit Raw",()=>Qt("raw"))),u.append(f),c.append(d,qT(n.insights),u);let g=document.createElement("div");g.className="summary-shell-grid",g.append(hr("Session",[["Source",Mi(n.source)],["Session",r],["Model",n.metadata.model||n.metadata.modelProvider||"unknown"],["CLI",[n.metadata.originator,n.metadata.cliVersion].filter(Boolean).join(" ")||"unknown"],["Records",hp(n.lineCount,n.pendingBytes)],["Size",wo(n.byteLength)],["Modified",dh(n.lastModifiedAt)||"unknown"],["Path",Xn(n.sessionPath)||n.sessionPath]]),hr("Activity",[["Prompts",Ne(n.totals.promptCount)],["Turns",Ne(n.ui.totalTurns)],["Tool calls",`${Ne(n.totals.completedCallCount)} / ${Ne(n.totals.callCount)} completed`],["Assistant messages",Ne(n.totals.assistantMessageCount)],["File changes",Ne(n.totals.fileChangeCount)],["Compactions",Ne(n.totals.compactionCount)],["Dynamic tools",n.metadata.dynamicTools.length?n.metadata.dynamicTools.map(y=>y.name).slice(0,5).join(", "):"none logged"]]),hr("Privacy",[["Mode",e.privacyMode||"unknown"],["Redaction profile",e.redactionProfile||"default"],["API token required",e.apiTokenRequired?"yes":"no"],["Images",e.imageRouteBehavior||"not logged"],["Telemetry",e.noTelemetry?"disabled":"check deployment settings"],["Third-party uploads",e.noThirdPartyUploads?"disabled":"check before sharing"]]),hr("Shareability",[["Raw logs",t.rawLogsSafeToShare?"safe to share":"review/redact first"],["Raw caution",t.rawLogCaution||"Review prompts, paths, and tool output before sharing raw logs."],["Sanitized graph",t.sanitizedGraphNote||"Use sanitized graph/export surfaces for sharing."],["Redacted fields",Ne(s.redactedFieldCount)],["Images",Ne(s.imageCount)]]),hr("Parser Health",rE(s,Ne)),hr("Token Context",[["Telemetry",i.latestTotalTokens?"available":"not logged"],["Latest tokens",Ne(i.latestTotalTokens)],["Context window",Ne(i.contextWindow)],["Context pressure",ur(i.latestContextPercent)],["Primary rate limit",ur(i.primaryRateLimitPercent)],["Secondary rate limit",ur(i.secondaryRateLimitPercent)]])),a.append(l,c,g),(s.warnings.length||n.insights.warnings.length)&&a.append(Ke("Warnings",[...s.warnings,...n.insights.warnings].slice(0,10))),zt.replaceChildren(a)}function hr(n,e){let t=document.createElement("article");t.className="summary-fact";let i=document.createElement("h3");i.textContent=n;let s=document.createElement("dl");return e.forEach(([r,o])=>{let a=document.createElement("dt");a.textContent=r;let l=document.createElement("dd");l.textContent=o,s.append(a,l)}),t.append(i,s),t}function qT(n){let e=Ke("Inspect First");e.classList.add("summary-insights");let t=n.inspectionQueue.slice(0,3);if(!t.length)return e.append($o("No high-priority findings detected. Parser health and raw inspection remain available for audit."),sm([at("Open Insights",()=>Qt("insights")),at("Audit Raw",()=>Qt("raw"))])),e;let i=$o("Top queued findings are ready for inspect-first review; each evidence action routes to an existing panel and falls back clearly when no event line is logged."),s=document.createElement("div");return s.className="summary-insight-list",t.forEach((r,o)=>{let a=document.createElement("article");a.className=`summary-insight severity-${r.severity}`;let l=document.createElement("div"),c=document.createElement("strong");c.textContent=`${o+1}. ${r.title}`;let d=document.createElement("small");d.textContent=YT(r);let h=document.createElement("p");h.textContent=r.redactionSafeSummary||r.summary,l.append(c,d,h);let u=sm([at("Open Insights",()=>kg(r)),at("Timeline Evidence",()=>_h(r,"timeline")),at("Transcript Evidence",()=>_h(r,"transcript")),at("Raw Evidence",()=>_h(r,"raw"))]);a.append(l,u),s.append(a)}),e.append(i,s),e}function sm(n){let e=document.createElement("div");return e.className="mode-row-actions",e.append(...n),e}function YT(n){let e=id(n),t=n.eventIds.length?`${Ne(n.eventIds.length)} linked events`:"no linked event ids",i=e?`line ${e}`:"no event line logged";return[n.severity,n.confidence,n.directness,i,t].filter(Boolean).join(" - ")}function id(n){return n.lineNumbers.find(e=>Number.isFinite(e)&&e>0)??null}function ZT(n){let e=Pc(),t=id(n),i=t?e.find(r=>r.lineNumber===t):null;if(i)return i;if(!n.eventIds.length)return null;let s=new Set(n.eventIds);return e.find(r=>s.has(r.id)||(r.node?s.has(r.node.id):!1))??null}function kg(n){Qt("insights"),Es(n),an.textContent=`Queued insight selected - ${n.title}`;let e=on("Selected insight loaded in Raw for audit; use evidence actions to jump into Timeline, Transcript, or Raw rows when line/event data is available.");e.classList.add("mode-notice"),zt.prepend(e)}function _h(n,e){let t=ZT(n);if(t){Dc(t.lineNumber,n.title,n,e);return}let i=id(n)||n.eventIds.length?"Logged evidence did not match a rendered Timeline or Transcript row; showing the queued insight instead.":"No event line is logged for this insight; showing the queued insight instead.";kg(n),sd(n.title,n,i)}function KT(){let n=Pc();JT(n);let e=n.filter(jT),t=e.slice(0,600);if(an.textContent=`${e.length} of ${n.length} events`,!t.length){zt.replaceChildren(on("No timeline events match the current filters."));return}let i=document.createDocumentFragment(),s=document.createElement("div");s.className="mode-actions",s.append(at("Copy Safe Reference",()=>VT())),i.append(s),t.forEach(r=>i.append(QT(r))),e.length>t.length&&i.append(on(`${e.length-t.length} additional events hidden; narrow filters or search to inspect them.`)),zt.replaceChildren(i)}function Pc(){if(!Ee)return[];let n=ke.map(zg);for(let e of Ee.parserHealth.unknownEvents||[])n.push({id:`unknown-${e.eventIndex}`,eventIndex:e.eventIndex,lineNumber:e.lineNumber,role:"unknown",eventType:e.sourceEventType,toolName:"",filePath:"",title:`Unknown event ${e.sourceEventType}`,detail:e.preview,timestamp:null,flags:["unknown"],source:e});for(let e of Ee.parserHealth.malformedLines||[])n.push({id:`malformed-${e.eventIndex}`,eventIndex:e.eventIndex,lineNumber:e.lineNumber,role:"malformed",eventType:"malformed_jsonl",toolName:"",filePath:"",title:e.error,detail:e.preview,timestamp:null,flags:["malformed"],source:e});for(let e of Ee.parserHealth.skippedLargePayloads||[])n.push({id:`skipped-${e.eventIndex}`,eventIndex:e.eventIndex,lineNumber:e.lineNumber,role:"parser",eventType:"skipped_large_payload",toolName:"",filePath:"",title:e.reason,detail:`${Ne(e.byteLength)} bytes`,timestamp:null,flags:["large"],source:e});return n.sort((e,t)=>e.eventIndex-t.eventIndex||e.lineNumber-t.lineNumber),n}function zg(n){let e=n.type==="prompt"?"user":n.type==="message"?"assistant":n.type==="call"?"tool":n.type==="fileChange"?"file":"system",t=n.type==="call"?n.source.name:"",i=n.type==="fileChange"?n.source.path:"",s=[n.detail,n.body].filter(Boolean).join(`
`),r=new Set;(Oc(n,"error")||Wg(`${n.title} ${s}`))&&r.add("error"),n.type==="call"&&Jg(n.source)&&r.add("long"),n.type==="fileChange"&&r.add("file"),n.type==="compaction"&&r.add("compaction"),`${n.title} ${s}`.includes("[REDACTED")&&r.add("redacted");let o=n.type==="call"&&n.source.durationMs!==null?up(n.source.durationMs):"";return{id:n.id,eventIndex:n.eventIndex,lineNumber:n.eventIndex+1,role:e,eventType:n.type==="fileChange"?`file_${n.source.changeType}`:n.type,toolName:t,filePath:i,title:n.title,detail:[o,s].filter(Boolean).join(`
`),timestamp:n.type==="call"?n.source.startedAt||n.source.completedAt:n.source.timestamp,flags:[...r],source:n.source,node:n}}function JT(n){ac(dc,"All roles",n.map(e=>e.role)),ac(fc,"All types",n.map(e=>e.eventType)),ac(pc,"All tools",n.map(e=>e.toolName).filter(Boolean)),ac(mc,"All files",n.map(e=>Xn(e.filePath)||e.filePath).filter(Boolean))}function ac(n,e,t){let i=n.value,s=[...new Set(t)].sort((a,l)=>a.localeCompare(l)),r=document.createDocumentFragment(),o=document.createElement("option");o.value="",o.textContent=e,r.append(o),s.forEach(a=>{let l=document.createElement("option");l.value=a,l.textContent=a,r.append(l)}),n.replaceChildren(r),n.value=s.includes(i)?i:""}function jT(n){if(dc.value&&n.role!==dc.value||fc.value&&n.eventType!==fc.value||pc.value&&n.toolName!==pc.value)return!1;let e=Xn(n.filePath)||n.filePath;return mc.value&&e!==mc.value||ym.checked&&!n.flags.includes("error")||Sm.checked&&!n.flags.includes("unknown")||Mm.checked&&!n.flags.includes("malformed")||bm.checked&&!n.flags.includes("redacted")?!1:Ms?[n.role,n.eventType,n.toolName,n.filePath,n.title,n.detail,n.flags.join(" ")].join(" ").toLowerCase().includes(Ms):!0}function QT(n){let e=document.createElement("button");e.type="button",e.className=`mode-row ${n.node?.id===dt?"active":""}`;let t=document.createElement("code");t.textContent=[`L${n.lineNumber}`,ew(n.timestamp)].filter(Boolean).join(`
`);let i=document.createElement("small");i.textContent=[n.role,n.eventType,n.toolName].filter(Boolean).join(" / ");let s=document.createElement("strong");s.textContent=n.title;let r=document.createElement("small");return r.textContent=rd([n.filePath,n.detail].filter(Boolean).join(" - "),260),e.append(t,i,s,r),e.addEventListener("click",()=>Vg(n)),e}function ew(n){if(!n)return"";let e=new Date(n);return Number.isNaN(e.valueOf())?n:Em.checked?e.toISOString().replace(".000Z","Z"):e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"})}function Vg(n){n.node?(dt=n.node.id,et=n.node.promptId,xn(),As(n.node,{reveal:!1})):bi(n.eventType.toUpperCase(),n.title,n.detail||n.title),Es(n.source)}function tw(){let n=Vt();an.textContent=`${n.prompts.length} turns`;let e=document.createDocumentFragment();n.prompts.forEach((t,i)=>{let s=Ke(`User ${i+1}: ${t.title}`),r=document.createElement("div");r.className="transcript-flow",nw(t).forEach(o=>{r.append(iw(o))}),s.append(r),e.append(s)}),zt.replaceChildren(e.childNodes.length?e:on("No transcript events were parsed."))}function nw(n){let e=[];return eg(n,n.calls).forEach(t=>{if(t.type==="assistant"){e.push({label:"Assistant",title:"Response",body:t.message.text,eventIndex:t.message.eventIndex}),t.calls.forEach(i=>e.push(...rm(i)));return}e.push(...rm(t.call))}),n.fileChanges.forEach(t=>{e.push({label:"File",title:`${t.changeType}: ${t.shortPath||t.path}`,body:t.preview||t.detail,eventIndex:t.eventIndex})}),[{label:"Prompt",title:n.title,body:n.text,eventIndex:n.eventIndex},...e.sort((t,i)=>t.eventIndex-i.eventIndex)]}function rm(n){let e=n.argumentPreview||"No arguments logged.",t=n.outputPreview||(n.status==="completed"?"No result preview logged.":`Status: ${n.status}`);return[{label:"Tool",title:`${n.name} (${n.status})`,body:e,eventIndex:n.eventIndex},{label:"Result",title:n.name,body:t,eventIndex:n.eventIndex}]}function iw(n){let e=document.createElement("div");e.className="transcript-step";let t=document.createElement("code");t.textContent=n.label;let i=document.createElement("div"),s=document.createElement("strong");s.textContent=n.title;let r=$o(rd(n.body,520));return i.append(s,r),e.append(t,i),e}function Hg(){let n=Vt().parserHealth;an.textContent=`${n.unknownEventCount} unknown / ${n.malformedLineCount} malformed / ${n.skippedLargePayloadCount} skipped`,Nc();let e=document.createDocumentFragment(),t=document.createElement("div");t.className="mode-actions",t.append(at("Copy Parser Summary",()=>ts(dw(Vt()),"Parser health summary copied")),at("Export Unknowns JSON",()=>mw()),at("Copy Issue Body",()=>gw()),at("Fixture Report",()=>_w())),e.append(t);let i=document.createElement("div");i.className="mode-card-grid",i.append(Ke("Parser",[Ac(n),`Source confidence: ${n.sourceDetectionConfidence}`,`Parsed ${n.parsedEventCount} of ${n.totalLinesRead} lines`,...Xo([Gh(n)])]),Ke("Unknown Events",aE(n)),Ke("Malformed And Skipped",uE(n)),Ke("Coverage",[`Tool calls/results: ${n.toolCallCount}/${n.toolResultCount}`,`File activity: ${n.fileActivityCount}`,`Token telemetry: ${n.tokenTelemetryAvailable?"available":"not logged"}`,`Redacted fields: ${n.redactedFieldCount}`,...Xo([Jm(n)])])),e.append(i);let s=Ke("Unknown Samples");s.append(uw(n)),e.append(s),wh?e.append(on("Preparing redacted schema-drift report...")):xs?e.append(on(xs)):_n&&e.append(Ke("Issue Template",[`Fixture: ${_n.suggestedFixtureName}`,`Samples: ${_n.redactedSamples.length}`,`Profile: ${_n.redactionReport.profile}`])),zt.replaceChildren(e)}function sw(){let n=Vt().insights;an.textContent=`${n.inspectionQueue.length} queued / ${n.repeatedPatterns.length} repeated / ${n.suspiciousToolCalls.length} suspicious`;let e=document.createDocumentFragment(),t=document.createElement("div");t.className="mode-actions",t.append(at("Copy Insight Summary",()=>ts(fw(n),"Insight summary copied"))),e.append(t);let i=Ke("What Should I Inspect First?");i.append(lw(n)),e.append(i);let s=document.createElement("div");s.className="mode-card-grid",s.append(Ke("Failure Chain",n.failureChain?[`First logged error-like event: line ${n.failureChain.firstLoggedError.lineNumber} - ${n.failureChain.firstLoggedError.title}`,`Possible retries: ${n.failureChain.subsequentRetries.length}`,`File changes after first error: ${n.failureChain.fileChangesAfterFirstError.length}`,`Final logged outcome: ${n.failureChain.finalOutcome}`]:["No logged error-like event detected."]),Ke("Repeated Patterns",n.repeatedPatterns.slice(0,8).map(r=>`${r.patternType} x${r.count} lines ${r.firstLine}-${r.lastLine}: ${r.key}`)),Ke("Suspicious Tool Calls",n.suspiciousToolCalls.slice(0,8).map(r=>`Line ${r.call.lineNumber} ${r.toolName}: ${r.reason}`)),Ke("Context Pressure",[n.contextPressure.status,n.contextPressure.explanation,`High-context markers: ${n.contextPressure.highContextMarkers.length}`,`Compaction markers: ${n.contextPressure.compactionMarkers.length}`]),Ke("File Impact",[`Edited: ${n.fileImpact.filesEdited.length}`,`Read: ${n.fileImpact.filesRead.length}`,`Referenced: ${n.fileImpact.filesReferenced.length}`,...n.fileImpact.filesEdited.slice(0,6).map(r=>`${r.path} (${r.count})`)]),Ke("Approval And Sandbox",n.approvalFriction.slice(0,8).map(r=>`${r.severity}: ${r.title}`))),e.append(s),zt.replaceChildren(e)}function No(){let n=Vt(),t=hw(n).filter(y=>y.path!==n.sessionPath);(!Vn||Vn===n.sessionPath||!t.some(y=>y.path===Vn))&&(Vn=t[0]?.path??null),an.textContent=jt?`${jt.toolDelta.calls.left} -> ${jt.toolDelta.calls.right} tools / ${jt.errorDelta.errors.left} -> ${jt.errorDelta.errors.right} errors`:"Select Run B to compare";let i=document.createDocumentFragment(),s=Ke("Compare Sessions"),r=document.createElement("div");r.className="mode-control-row";let o=document.createElement("div");o.className="mode-field",o.append(om("Run A"),aw(n.sessionPath));let a=document.createElement("div");a.className="mode-field",a.append(om("Run B"));let l=document.createElement("select");l.className="mode-select",l.setAttribute("aria-label","Run B session"),t.forEach(y=>{let m=document.createElement("option");m.value=y.path,m.textContent=km(y),m.title=y.path,l.append(m)}),l.value=Vn??"",l.disabled=t.length===0;let c=()=>{Vn=am(l),jt=null,Si=null,an.textContent="Select Run B to compare"};l.addEventListener("change",()=>{c(),lm()}),l.addEventListener("input",c);let d=at("Compare",()=>{Vn=am(l),lm()});if(d.disabled=t.length===0,a.append(l,d),r.append(o,a),s.append(r),i.append(s),t.length===0){i.append(on("No other sessions are available to compare with this run.")),zt.replaceChildren(i);return}if(Th){i.append(on("Comparing normalized traces...")),zt.replaceChildren(i);return}if(Si&&i.append(on(Si)),!jt){i.append(on("Choose a second session and compare. Diff results are redacted by default.")),zt.replaceChildren(i);return}let h=jt,u=document.createElement("div");u.className="mode-actions",u.append(at("Copy Summary",()=>ts(pw(h),"Diff summary copied")),at("Export JSON",()=>Mc("perlustron-diff.json",JSON.stringify(h,null,2),"application/json")),at("Export HTML",()=>Mc("perlustron-diff.html",vw(h),"text/html"))),i.append(u);let f=document.createElement("div");f.className="mode-card-grid",f.append(Ke("Overview",[`Sources: ${h.leftSummary.source} -> ${h.rightSummary.source}`,`Session IDs: ${h.leftSummary.sessionId||"unknown"} -> ${h.rightSummary.sessionId||"unknown"}`,`Models: ${h.leftSummary.model||"unknown"} -> ${h.rightSummary.model||"unknown"}`,`Events: ${h.leftSummary.renderableEventCount} -> ${h.rightSummary.renderableEventCount}`,`Duration: ${h.leftSummary.loggedDuration} / ${h.rightSummary.loggedDuration}`]),Ke("Parser Health Delta",[`Parsed: ${h.leftSummary.parsedEventCount} -> ${h.rightSummary.parsedEventCount}`,`Renderable: ${h.leftSummary.renderableEventCount} -> ${h.rightSummary.renderableEventCount}`,`Unknown: ${gn(h.parserHealthDelta.unknownEvents)}`,`Malformed: ${gn(h.parserHealthDelta.malformedLines)}`,`Skipped payloads: ${gn(h.parserHealthDelta.skippedLargePayloads)}`]),Ke("Tool Delta",[`Calls: ${gn(h.toolDelta.calls)}`,`Results: ${gn(h.toolDelta.results)}`,`Missing results: ${gn(h.toolDelta.missingResults)}`,`Only A: ${Sc(h.toolDelta.onlyLeftTools,6)}`,`Only B: ${Sc(h.toolDelta.onlyRightTools,6)}`]),Ke("File Delta",[`Only A: ${h.fileDelta.onlyLeft.length}`,`Only B: ${h.fileDelta.onlyRight.length}`,`Both: ${h.fileDelta.both.length}`,...h.fileDelta.onlyLeft.slice(0,4).map(y=>`A: ${y}`),...h.fileDelta.onlyRight.slice(0,4).map(y=>`B: ${y}`)]),Ke("Error And Failure Delta",[`Error-like events: ${gn(h.errorDelta.errors)}`,`First A: ${h.errorDelta.leftFirstError||"none"}`,`First B: ${h.errorDelta.rightFirstError||"none"}`,`Repeated patterns: ${h.repeatedPatternDelta.leftCount} -> ${h.repeatedPatternDelta.rightCount}`]),Ke("Token And Context Delta",[`Telemetry: ${h.tokenDelta.leftAvailable?"A yes":"A no"} / ${h.tokenDelta.rightAvailable?"B yes":"B no"}`,`Latest tokens: ${h.tokenDelta.leftLatestTotalTokens??"n/a"} -> ${h.tokenDelta.rightLatestTotalTokens??"n/a"}`,`Context percent: ${ur(h.tokenDelta.leftContextPercent)} -> ${ur(h.tokenDelta.rightContextPercent)}`,`Compactions: ${gn(h.compactionDelta)}`])),i.append(f);let g=Ke("Divergence");g.append(cw(h)),i.append(g),h.warnings.length&&i.append(Ke("Warnings",h.warnings)),zt.replaceChildren(i)}function Lc(){let n=Vt();an.textContent=dt?"Selected event":"Session graph";let e=Yo??(dt?It.get(dt)?.source:n),t=document.createElement("pre");t.textContent=JSON.stringify(e??n.totals,null,2),zt.replaceChildren(t)}function rw(){let n=Vt();an.textContent="Redacted reports";let e=document.createElement("div");e.className="mode-card-grid",e.append(Ke("Reports",[`perlustron export ${n.sessionPath} --format html --redacted -o report.html`,`perlustron export ${n.sessionPath} --format markdown --redacted -o report.md`,`perlustron export ${n.sessionPath} --format json -o normalized-trace.json`]),Ke("Schema Drift",[`perlustron unknowns ${n.sessionPath} --redacted -o unknowns-redacted.json`,`perlustron fixture-report ${n.sessionPath} --redacted -o fixture-report.md`])),zt.replaceChildren(e)}function ow(){let n=Vt();an.textContent="Local observatory settings";let e=document.createElement("div");e.className="mode-card-grid",e.append(Ke("Session",[`Source: ${Mi(n.source)}`,`Session: ${Rn?Xn(Rn):Xn(n.sessionPath)||"latest"}`,`Live updates: ${Gn?vs?"SSE stream":"fallback polling":"paused"}`]),Ke("Renderer",["Three.js instancing",`Mode panel: ${Rt==="settings"?"visible":"hidden"}`]),Ke("Backend",["Rust Axum JSONL parser",`Parser: ${n.parserHealth.parserVersion} / ${n.parserHealth.schemaVersion}`,`API token required: ${n.privacySummary.apiTokenRequired?"yes":"no"}`])),zt.replaceChildren(e)}function Ke(n,e=[]){let t=document.createElement("section");t.className="mode-card";let i=document.createElement("h3");if(i.textContent=n,t.append(i),e.length){let s=document.createElement("ul");e.forEach(r=>{let o=document.createElement("li");o.textContent=r,s.append(o)}),t.append(s)}return t}function $o(n){let e=document.createElement("p");return e.textContent=n,e}function on(n){let e=document.createElement("p");return e.className="mode-empty",e.textContent=n,e}function at(n,e){let t=document.createElement("button");return t.type="button",t.className="mode-action-button",t.textContent=n,t.addEventListener("click",()=>{e()}),t}function om(n){let e=document.createElement("span");return e.className="mode-small-label",e.textContent=n,e}function aw(n){let e=document.createElement("code");return e.textContent=n,e}function lw(n){if(!n.inspectionQueue.length)return on("No high-priority findings detected. Parser health and raw inspection remain available.");let e=document.createElement("div");return e.className="mode-linked-list",n.inspectionQueue.slice(0,12).forEach((t,i)=>{let s=document.createElement("article");s.className=`mode-linked-row severity-${t.severity}`;let r=document.createElement("div"),o=document.createElement("strong");o.textContent=`${i+1}. ${t.title}`;let a=document.createElement("small");a.textContent=`${t.summary} - ${t.confidence} - ${t.directness}`;let l=document.createElement("p");l.textContent=t.explanation,r.append(o,a,l);let c=document.createElement("div");c.className="mode-row-actions";let d=t.lineNumbers[0];c.append(at("Open Raw",()=>Dc(d,t.title,t)),at("Copy Ref",()=>ts(`line ${d??"n/a"} - ${t.redactionSafeSummary}`,"Line reference copied"))),s.append(r,c),e.append(s)}),e}function cw(n){let e=document.createElement("div");return e.className="mode-linked-list",Gg(n).forEach(i=>{let s=document.createElement("article");s.className="mode-linked-row";let r=document.createElement("div"),o=document.createElement("strong");o.textContent=i.kind.replaceAll("_"," ");let a=document.createElement("small");a.textContent=`${i.confidence} - A line ${i.leftLine??"n/a"} - B line ${i.rightLine??"n/a"}`;let l=document.createElement("p");l.textContent=i.summary,r.append(o,a,l);let c=document.createElement("div");c.className="mode-row-actions",c.append(at("Open A",()=>Dc(i.leftLine,i.kind,i)),at("Copy Ref",()=>ts(`${i.kind}: A line ${i.leftLine??"n/a"}, B line ${i.rightLine??"n/a"}`,"Divergence reference copied"))),s.append(r,c),e.append(s)}),e}function uw(n){let e=document.createElement("div");e.className="mode-linked-list";let t=[...(n.unknownEvents||[]).map(i=>({title:`Unknown ${i.sourceEventType}`,detail:i.preview,lineNumber:i.lineNumber,payload:i})),...(n.malformedLines||[]).map(i=>({title:"Malformed JSONL",detail:i.error,lineNumber:i.lineNumber,payload:i}))].slice(0,12);return t.length?(t.forEach(i=>{let s=document.createElement("article");s.className="mode-linked-row";let r=document.createElement("div"),o=document.createElement("strong");o.textContent=i.title;let a=document.createElement("small");a.textContent=`line ${i.lineNumber} - ${rd(i.detail,180)}`,r.append(o,a);let l=document.createElement("div");l.className="mode-row-actions",l.append(at("Open Raw",()=>Dc(i.lineNumber,i.title,i.payload))),s.append(r,l),e.append(s)}),e):on("No unknown or malformed samples captured.")}function hw(n){let e=Hn.filter(i=>i.source===n.source),t=e.find(i=>i.path===n.sessionPath);return t?[t,...e.filter(i=>i.path!==n.sessionPath)]:[{source:n.source,path:n.sessionPath,label:"Current session",detail:n.sessionId||"loaded",lastModifiedAt:n.lastModifiedAt,byteLength:n.byteLength,isLive:n.isLive,explicit:!0},...e]}function am(n){return n.selectedOptions.item(0)?.value||n.value||null}async function lm(){if(!Vn){Si="Select a Run B session first.",jt=null,No();return}let n=Vt().sessionPath,e=Vn;if(e===n){Si="Run A and Run B must be different sessions.",jt=null,No();return}let t=++Dp,i=()=>t===Dp&&Vt().sessionPath===n&&Vn===e;jt=null,Th=!0,Si=null,No();try{let s=await qb(e);if(!i())return;jt=s}catch(s){if(!i())return;jt=null,Si=Tr(s)}finally{i()&&(Th=!1,No())}}async function Nc(n=!1){return!n&&_n?_n:!n&&xs?null:Ro||(_n=null,xs=null,wh=!0,Ro=Yb().then(e=>(_n=e,e)).catch(e=>(xs=Tr(e),null)).finally(()=>{wh=!1,Ro=null,Rt==="health"&&Hg()}),Ro)}function sd(n,e,t){let i=`${t} Insights remains available and Raw is updated with the selected evidence payload.`;Es(e),an.textContent="Evidence fallback";let s=Ke("Evidence Fallback",[i]);s.classList.add("mode-notice");let r=document.createElement("div");if(r.className="mode-row-actions",r.append(at("Open Insights",()=>{Qt("insights"),Es(e)}),at("Audit Raw",()=>{Qt("raw"),sd(n,e,t)})),s.append(r),Rt==="raw"){let o=document.createElement("pre");o.textContent=JSON.stringify(e??{},null,2),zt.replaceChildren(s,o);return}zt.prepend(s)}function Dc(n,e,t,i="raw"){if(n){let r=Pc().find(o=>o.lineNumber===n);if(r){Vg(r),r.node?Ic(i):i!=="map"&&(Qt(i),Es(r.source));return}}i!=="map"&&Qt(i);let s=n?`Line ${n} is logged for ${e}, but no rendered Timeline or Transcript row is available.`:"No event line is logged for this insight or evidence reference; showing fallback payload instead.";sd(e,t,s)}function dw(n){let e=n.parserHealth;return[`Perlustron parser health for ${Xn(n.sessionPath)}`,`Parser: ${Ac(e)}`,`Source: ${e.source} (${e.sourceDetectionConfidence})`,`Lines: ${e.totalLinesRead}`,`Parsed/renderable: ${e.parsedEventCount}/${e.renderableEventCount}`,...Xo(Wh(e,Cn,"Skipped large payloads"))].join(`
`)}function fw(n){let e=["Perlustron insights","What should I inspect first?"];return n.inspectionQueue.length?n.inspectionQueue.slice(0,6).forEach((t,i)=>{e.push(`${i+1}. [${t.severity}] ${t.title}: ${t.redactionSafeSummary||t.summary}`)}):e.push("- No high-priority findings detected."),e.push(`Repeated patterns: ${n.repeatedPatterns.length}`),e.push(`Suspicious tool calls: ${n.suspiciousToolCalls.length}`),e.push(`Approval/sandbox friction: ${n.approvalFriction.length}`),e.join(`
`)}function pw(n){return["Perlustron redacted diff summary",`A: ${Xn(n.metadata.leftPath)} (${n.metadata.leftSource})`,`B: ${Xn(n.metadata.rightPath)} (${n.metadata.rightSource})`,`Events: ${n.leftSummary.renderableEventCount} -> ${n.rightSummary.renderableEventCount}`,`Tools: ${n.toolDelta.calls.left} -> ${n.toolDelta.calls.right}`,`Errors: ${n.errorDelta.errors.left} -> ${n.errorDelta.errors.right}`,`Files: ${n.fileDelta.leftCount} -> ${n.fileDelta.rightCount}`,`First likely divergence: ${n.divergence.summary} (${n.divergence.confidence})`].join(`
`)}function Sc(n,e){if(!n.length)return"none";let t=n.slice(0,e).join(", ");return n.length>e?`${t} ... +${n.length-e}`:t}async function mw(){let n=_n??await Nc(!0);n&&Mc("perlustron-unknowns-redacted.json",JSON.stringify(n,null,2),"application/json")}async function gw(){let n=_n??await Nc(!0);n&&ts(n.suggestedGithubIssue,"Schema-drift issue body copied")}async function _w(){let n=_n??await Nc(!0);n&&Mc("perlustron-fixture-report.md",xw(n),"text/markdown")}function Gg(n){return n.divergence.clusters.length?n.divergence.clusters:[{kind:n.divergence.kind,confidence:n.divergence.confidence,summary:n.divergence.summary,explanation:n.divergence.explanation,leftLine:n.divergence.leftLine,rightLine:n.divergence.rightLine,leftEventId:n.divergence.leftEventId,rightEventId:n.divergence.rightEventId,leftSignature:n.divergence.leftSignature,rightSignature:n.divergence.rightSignature}]}function xw(n){let e=n.redactedSamples.slice(0,12).map(t=>`### Line ${t.lineNumber} ${t.sourceEventType}

Shape hash: \`${t.shapeHash}\`

\`\`\`json
${t.redactedPreview}
\`\`\``).join(`

`);return["# Perlustron Fixture Report","","This report avoids raw private log content.","","## Parser Health","",`- Perlustron version: \`${n.parserVersion}\``,`- Trace schema: \`${n.traceSchemaVersion}\``,`- Source guess: \`${n.sourceGuess}\``,`- Unknown events: \`${n.unknownEventCount}\``,`- Malformed lines: \`${n.malformedLineCount}\``,`- Suggested fixture: \`${n.suggestedFixtureName}\``,"","## Redacted Samples","",e||"No unknown or malformed samples captured.","","## Safe Contribution Checklist","","- Do not attach raw private Codex or Claude logs.","- Prefer synthetic data.","- Review prompts, paths, command output, images, and tool results before sharing."].join(`
`)}function vw(n){let e=Gg(n).map(t=>`<tr><td>${si(t.kind)}</td><td>${si(t.confidence)}</td><td>${t.leftLine??"n/a"}</td><td>${t.rightLine??"n/a"}</td><td>${si(t.summary)}</td></tr>`).join("");return`<!doctype html><meta charset="utf-8"><title>Perlustron Diff Report</title><style>body{font-family:system-ui,sans-serif;margin:32px;color:#182125;line-height:1.45}table{border-collapse:collapse;width:100%;margin:16px 0}td,th{border:1px solid #d7dee2;padding:6px 8px;text-align:left}code{background:#f4f6f7;padding:2px 4px}.redacted{color:#7a1f1f;font-weight:700}</style><h1>Perlustron Session Diff</h1><p class="redacted">Redacted diff. Review before sharing.</p><h2>Overview</h2><table><tr><td>A</td><td>${si(n.metadata.leftPath)}</td></tr><tr><td>B</td><td>${si(n.metadata.rightPath)}</td></tr><tr><td>Events</td><td>${n.leftSummary.renderableEventCount} -> ${n.rightSummary.renderableEventCount}</td></tr><tr><td>Tools</td><td>${gn(n.toolDelta.calls)}</td></tr><tr><td>Errors</td><td>${gn(n.errorDelta.errors)}</td></tr></table><h2>Parser Health</h2><table><tr><td>Unknown</td><td>${gn(n.parserHealthDelta.unknownEvents)}</td></tr><tr><td>Malformed</td><td>${gn(n.parserHealthDelta.malformedLines)}</td></tr></table><h2>Files</h2><table><tr><td>Only A</td><td>${si(Sc(n.fileDelta.onlyLeft,20))}</td></tr><tr><td>Only B</td><td>${si(Sc(n.fileDelta.onlyRight,20))}</td></tr></table><h2>Divergence</h2><table><thead><tr><th>Kind</th><th>Confidence</th><th>A line</th><th>B line</th><th>Summary</th></tr></thead><tbody>${e}</tbody></table><h2>Redaction</h2><p>Profile: ${si(n.metadata.redactionProfile||"strict")}. Raw prompts, command output, sensitive paths, and tool outputs are not intentionally included.</p>`}function Mc(n,e,t){let i=new Blob([e],{type:t}),s=URL.createObjectURL(i),r=document.createElement("a");r.href=s,r.download=n,r.click(),window.setTimeout(()=>URL.revokeObjectURL(s),0)}function ts(n,e="Copied"){navigator.clipboard.writeText(n).then(()=>bi("COPY",e,n)).catch(t=>bi("COPY","Copy failed",Tr(t)))}function Wg(n){return/\b(error|failed|failure|exception|panic|denied|permission|timeout|traceback|not found|exit code|fatal|forbidden|sandbox)\b/i.test(n)}function Qt(n){if(Rt=n,Zo(),Og(),nd(),n!=="map"&&Rc(),n==="map"){bc({preserveCamera:!0}),Er();return}if(Ir(),n!=="summary"&&n!=="timeline"&&n!=="transcript"){if(n==="health"){bi("HEALTH","Parser health",yw());return}if(n==="insights"){bi("INSIGHTS","Debugging insights",Sw());return}if(n!=="raw"){if(n==="diff"){bc({preserveCamera:!0});return}n!=="settings"&&bi("EXPORT","Export reports",Mw())}}}function cm(){Rt!=="transcript"&&Ir()}function yw(){return Ee?hE(Ee.parserHealth).join(`
`):"Waiting for session data."}function Sw(){let n=Ee?.insights;if(!Ee||!n)return"Waiting for session insights.";let e=["Insights are heuristics over logged events only. Hidden or unlogged reasoning cannot be recovered."];return n.failureChain?(e.push(`First logged error-like event: line ${n.failureChain.firstLoggedError.lineNumber} - ${n.failureChain.firstLoggedError.title}`),e.push(`Final logged outcome: ${n.failureChain.finalOutcome}`)):e.push("First logged error-like event: none detected"),e.push(`Repeated patterns: ${n.repeatedPatterns.length}`),n.repeatedPatterns.slice(0,6).forEach(t=>{e.push(`  ${t.patternType} x${t.count} lines ${t.firstLine}-${t.lastLine}: ${t.key}`)}),e.push(`Suspicious tool calls: ${n.suspiciousToolCalls.length}`),n.suspiciousToolCalls.slice(0,6).forEach(t=>{e.push(`  line ${t.call.lineNumber} ${t.toolName}: ${t.reason}`)}),e.push(`Context pressure: ${n.contextPressure.status}`),e.push(`File impact: ${n.fileImpact.filesEdited.length} edited, ${n.fileImpact.filesRead.length} read, ${n.fileImpact.filesReferenced.length} referenced`),e.push(`Approval/sandbox friction: ${n.approvalFriction.length}`),e.join(`
`)}function Mw(){return Ee?["Export redacted reports from the CLI:",`perlustron export ${Ee.sessionPath} --format html --redacted -o report.html`,`perlustron export ${Ee.sessionPath} --format markdown --redacted -o report.md`,`perlustron export ${Ee.sessionPath} --format json -o normalized-trace.json`,"","Redacted exports are best-effort sharing aids. Review before sending."].join(`
`):"Waiting for session data."}function bw(){return["/ search","n next event","N previous event","m map","l timeline","t transcript","h health","i insights","r raw","e export","Esc close inspection"].join(`
`)}function rd(n,e){return sc(n,e,`
...[truncated]`)}function Xg(n){if(!n?.latestTotalTokens)return"no token telemetry";let e=n.latestContextPercent===null?"n/a":`${Math.round(n.latestContextPercent)}%`,t=n.contextWindow?` / ${Ne(n.contextWindow)}`:"";return`${Ne(n.latestTotalTokens)}${t} tokens (${e})`}function um(n,e=It.get(n)){et=n,Mt="inspect",es(),As(e)}function bc({preserveCamera:n=!1}={}){Mt==="inspect"&&(Mt="overview",es({preserveCamera:n}))}function Ew(){Bg(),Og(),nd(),Zo(),wm.forEach(n=>{n.addEventListener("click",()=>{Qt(ph(dm,n.dataset.appMode,"map"))})}),Am.forEach(n=>{n.addEventListener("click",()=>{GT(n.dataset.source)})}),ri.addEventListener("change",()=>{Zb(ri.value)}),BM.addEventListener("click",()=>{Gn=!Gn,ji(),Gn?Uc():Fc()}),qi.addEventListener("input",()=>{Ms=qi.value.trim().toLowerCase(),xn(),cm()}),qi.addEventListener("keydown",n=>{n.key==="Escape"&&(qi.value="",Ms="",xn(),cm())}),[dc,fc,pc,mc,ym,Sm,Mm,bm,Em].forEach(n=>{n.addEventListener("change",Ir)}),document.addEventListener("keydown",Aw),document.addEventListener("keyup",Cw),document.addEventListener("keydown",Tw),document.addEventListener("visibilitychange",Nw),window.addEventListener("blur",Zg),GM.forEach(n=>{n.addEventListener("click",()=>{let e=ph(gM,n.dataset.viewAction,"two-d");e==="zoom-in"?Ph(yh):e==="zoom-out"?Ph(-yh):e==="overview"?(bc(),xr="three-d",Er()):(Mt="overview",xr="two-d",es({preserveCamera:!0}),Er())})}),CM.addEventListener("click",()=>Ec(-1)),RM.addEventListener("click",()=>Ec(1)),Tm.forEach(n=>{n.addEventListener("click",()=>{zw(ph(fm,n.dataset.metric,"error"))})}),vh.addEventListener("click",()=>{Qt("settings")})}function Tw(n){if(n.key==="/"&&!Sr(n.target)){n.preventDefault(),qi.focus(),qi.select();return}if((n.ctrlKey||n.metaKey)&&n.key.toLowerCase()==="k"){n.preventDefault(),qi.focus(),qi.select();return}if(!Sr(n.target)){let e=ww(n.key);if(e){n.preventDefault(),Qt(e);return}if(n.key==="n"){n.preventDefault(),Ec(1);return}if(n.key==="N"){n.preventDefault(),Ec(-1);return}if(n.key==="?"){n.preventDefault(),bi("SHORTCUTS","Keyboard shortcuts",bw());return}}n.key!=="Escape"||Mt!=="inspect"||Sr(n.target)||(n.preventDefault(),bc(),Er())}function ww(n){switch(n){case"m":return"map";case"l":return"timeline";case"t":return"transcript";case"h":return"health";case"i":return"insights";case"r":return"raw";case"e":return"export";default:return null}}function Aw(n){Rw(n)&&(wn.add(n.code),n.preventDefault())}function Cw(n){if(!$g(n.code))return;wn.delete(n.code)&&n.preventDefault()}function Rw(n){let e=qg(n.code);if(e&&(Rt!=="map"||Dw(n.target)))return!1;let t=e||Rt==="map"&&Yg();return $g(n.code)&&(!n.ctrlKey||t)&&!n.metaKey&&!n.altKey&&!Sr(n.target)}function $g(n){return Iw(n)||qg(n)||Db.has(n)}function Iw(n){return Lb.has(n)}function qg(n){return n===Lm||Pw(n)}function Pw(n){return Nb.has(n)}function Lw(){return wn.has("ShiftLeft")||wn.has("ShiftRight")}function Yg(){return wn.has("ControlLeft")||wn.has("ControlRight")}function Zg(){wn.clear()}function Nw(){document.hidden&&Zg()}function Sr(n){return n instanceof HTMLInputElement||n instanceof HTMLTextAreaElement||n instanceof HTMLElement&&n.isContentEditable}function Dw(n){return n instanceof HTMLElement&&(Sr(n)||!!n.closest("button, select, a[href]"))}function Uc(){Fc(),Gn&&(Fw(),!(typeof EventSource>"u")&&($i=new EventSource(Ar("/api/session/events").toString()),$i.addEventListener("open",()=>{vs=!0,ji()}),$i.addEventListener("session-status",n=>{vs=!0,ji();try{Hm(JSON.parse(n.data))}catch(e){qo(e)}}),$i.addEventListener("session-error",n=>{qo(n.data||"Session stream error")}),$i.addEventListener("error",()=>{vs=!1,ji(),Ow()})))}function Fc(){Uw(),Kg(),Bw()}function Uw(){$i&&($i.close(),$i=null),vs=!1}function Fw(){Kg(),Gn&&(Rh(),cc=setInterval(Rh,WM))}function Kg(){cc&&(clearInterval(cc),cc=null)}function Ow(){_r||(_r=setTimeout(()=>{_r=null,!vs&&Gn&&Rh()},XM))}function Bw(){_r&&(clearTimeout(_r),_r=null)}function ji(){let n=!!Ee?.isLive;OM.classList.toggle("paused",!Gn||!n),xm.textContent=Gn?n?"LIVE":"STALE":"PAUSED",vm.textContent=Gn?n?vs?"Streaming session...":"Watching session...":"Waiting for writes...":"Updates paused"}function hm(){yr||(yr=setTimeout(()=>{yr=null;let n=performance.now(),e=ke.filter(t=>ws(t,n));e.length&&(e.forEach(t=>{t.matrixDirty=!0}),xn())},120))}function qo(n){console.warn(Tr(n))}function Ph(n){Math.abs(n)<.001||(lt.getWorldDirection(Ki),lt.position.addScaledVector(Ki,n),ct.target.addScaledVector(Ki,n),ct.update())}function Ec(n){let e=kw();if(!e.length)return;let i=(Math.max(0,e.findIndex(r=>r.id===dt))+n+e.length)%e.length,s=e[i];dt=s.id,et=s.promptId,As(s)}function kw(){return(Mt==="inspect"&&et?Xh(et).visibleNodes:ke).filter(e=>In(e)&&(e.type!=="prompt"||e.promptId===et||Mt==="overview")).sort(fg)}function zw(n){vr=vr===n?null:n,td(Tm,e=>e.dataset.metric===vr),Mt==="inspect"?(Mt="overview",et=null,es({preserveCamera:!0})):(hg(),Ko(),Cc()),xn()}function Oc(n,e){return e?e==="compaction"?n.type==="compaction":n.type==="compaction"?!1:n.type==="prompt"?(Do.get(n.id)||[]).some(t=>t.id!==n.id&&Oc(t,e)):n.type==="fileChange"?Vw(n.source,e):n.type==="message"?!1:Gw(n.source,e):!0}function Vw(n,e){if(e==="file")return!0;if(e==="diff"){let t=Hw(n).toLowerCase();return $h(n)!=="add"||t.includes("diff")||t.includes("@@")}return!1}function Hw(n){return`${$h(n)} ${n.path} ${n.preview} ${n.detail}`}function Gw(n,e){if(e==="long")return Jg(n);if(e==="error"){let t=n.kind.toLowerCase(),i=n.status.toLowerCase();return t==="error"||Wg(i)}return e==="file"?xh(n.name,["file","read","write","edit","multiedit","grep","glob","ls","apply_patch"]):e==="diff"?xh(n.name,["diff","apply_patch"]):e==="artifact"?n.kind.toLowerCase()==="artifact"||xh(n.name,["artifact"]):!1}function Jg(n){return n.durationMs!==null&&n.durationMs>=mM}function xh(n,e){let t=n.toLowerCase();return e.some(i=>t===i?!0:new RegExp(`(^|[._:-])${i}([._:-]|$)`).test(t))}function Ww(n){return Ms?`${n.kind} ${n.title} ${n.body}`.toLowerCase().includes(Ms):!0}function jg({restartStream:n=!1}={}){let e=dt?It.get(dt):null;e&&Ng()&&As(e,{restartStream:n})}function bi(n,e,t){dt=null,Mg(),Lg(),xn(),Qi.classList.remove("prompt-context"),Bh.textContent=n,Dh(e,"Selection"),Oh.textContent="Control surface",Nh(new Date().toISOString()),Uh.textContent=e,Rr(),Kh(),bg(t)}function Xn(n){if(!n)return"";let e=n.split(/[\\/]/);return e.length<=4?n:`${e.at(-4)}/${e.at(-3)}/${e.at(-2)}/${e.at(-1)}`}
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
