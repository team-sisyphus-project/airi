const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/renderer-BsKHgvC-.js","assets/renderer-pXd6d37N.js","assets/context-Do0TNnqd-CJRBeI88.js","assets/rolldown-runtime-Dd_uD5pT.js","assets/internal-CpuCilTX-0TnbFU32.js"])))=>i.map(i=>d[i]);
import{l as e,n as t,r as n,t as r}from"./context-Do0TNnqd-CJRBeI88.js";import{l as i}from"./src-MXkzMrUz.js";import{n as a,r as o}from"./invoke-BPvOIpeR-Cq5OapVj.js";import{a as s,i as c,r as l,t as u}from"./environment-Dk5-uxoS.js";import{t as d}from"./window-DWx5vER0.js";import{t as f}from"./preload-helper-Czpn1I53.js";import{n as p,t as m}from"./internal-CpuCilTX-0TnbFU32.js";import{D as h,E as g,O as _,S as v,T as y,b,d as x,f as S,i as C,k as w,l as T,o as E}from"./display-BFEFvZQO.js";var D=function(e,t){return D=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},D(e,t)};function O(e,t){D(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var k=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,A=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform float gamma;
uniform float contrast;
uniform float saturation;
uniform float brightness;
uniform float red;
uniform float green;
uniform float blue;
uniform float alpha;

void main(void)
{
    vec4 c = texture2D(uSampler, vTextureCoord);

    if (c.a > 0.0) {
        c.rgb /= c.a;

        vec3 rgb = pow(c.rgb, vec3(1. / gamma));
        rgb = mix(vec3(.5), mix(vec3(dot(vec3(.2125, .7154, .0721), rgb)), rgb, saturation), contrast);
        rgb.r *= red;
        rgb.g *= green;
        rgb.b *= blue;
        c.rgb = rgb * brightness;

        c.rgb *= c.a;
    }

    gl_FragColor = c * alpha;
}
`;(function(e){O(t,e);function t(t){var n=e.call(this,k,A)||this;return n.gamma=1,n.saturation=1,n.contrast=1,n.brightness=1,n.red=1,n.green=1,n.blue=1,n.alpha=1,Object.assign(n,t),n}return t.prototype.apply=function(e,t,n,r){this.uniforms.gamma=Math.max(this.gamma,1e-4),this.uniforms.saturation=this.saturation,this.uniforms.contrast=this.contrast,this.uniforms.brightness=this.brightness,this.uniforms.red=this.red,this.uniforms.green=this.green,this.uniforms.blue=this.blue,this.uniforms.alpha=this.alpha,e.applyFilter(this,t,n,r)},t})(C);var j=function(e,t){return j=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},j(e,t)};function M(e,t){j(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var N=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,ee=`
varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec2 uOffset;

void main(void)
{
    vec4 color = vec4(0.0);

    // Sample top left pixel
    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y));

    // Sample top right pixel
    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y));

    // Sample bottom right pixel
    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y));

    // Sample bottom left pixel
    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y));

    // Average
    color *= 0.25;

    gl_FragColor = color;
}`,P=`
varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec2 uOffset;
uniform vec4 filterClamp;

void main(void)
{
    vec4 color = vec4(0.0);

    // Sample top left pixel
    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));

    // Sample top right pixel
    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));

    // Sample bottom right pixel
    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));

    // Sample bottom left pixel
    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));

    // Average
    color *= 0.25;

    gl_FragColor = color;
}
`,F=function(e){M(t,e);function t(t,n,r){t===void 0&&(t=4),n===void 0&&(n=3),r===void 0&&(r=!1);var i=e.call(this,N,r?P:ee)||this;return i._kernels=[],i._blur=4,i._quality=3,i.uniforms.uOffset=new Float32Array(2),i._pixelSize=new S,i.pixelSize=1,i._clamp=r,Array.isArray(t)?i.kernels=t:(i._blur=t,i.quality=n),i}return t.prototype.apply=function(e,t,n,r){var i=this._pixelSize.x/t._frame.width,a=this._pixelSize.y/t._frame.height,o;if(this._quality===1||this._blur===0)o=this._kernels[0]+.5,this.uniforms.uOffset[0]=o*i,this.uniforms.uOffset[1]=o*a,e.applyFilter(this,t,n,r);else{for(var s=e.getFilterTexture(),c=t,l=s,u=void 0,d=this._quality-1,f=0;f<d;f++)o=this._kernels[f]+.5,this.uniforms.uOffset[0]=o*i,this.uniforms.uOffset[1]=o*a,e.applyFilter(this,c,l,1),u=c,c=l,l=u;o=this._kernels[d]+.5,this.uniforms.uOffset[0]=o*i,this.uniforms.uOffset[1]=o*a,e.applyFilter(this,c,n,r),e.returnFilterTexture(s)}},t.prototype._updatePadding=function(){this.padding=Math.ceil(this._kernels.reduce(function(e,t){return e+t+.5},0))},t.prototype._generateKernels=function(){var e=this._blur,t=this._quality,n=[e];if(e>0)for(var r=e,i=e/t,a=1;a<t;a++)r-=i,n.push(r);this._kernels=n,this._updatePadding()},Object.defineProperty(t.prototype,"kernels",{get:function(){return this._kernels},set:function(e){Array.isArray(e)&&e.length>0?(this._kernels=e,this._quality=e.length,this._blur=Math.max.apply(Math,e)):(this._kernels=[0],this._quality=1)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"clamp",{get:function(){return this._clamp},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"pixelSize",{get:function(){return this._pixelSize},set:function(e){typeof e==`number`?(this._pixelSize.x=e,this._pixelSize.y=e):Array.isArray(e)?(this._pixelSize.x=e[0],this._pixelSize.y=e[1]):e instanceof S?(this._pixelSize.x=e.x,this._pixelSize.y=e.y):(this._pixelSize.x=1,this._pixelSize.y=1)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"quality",{get:function(){return this._quality},set:function(e){this._quality=Math.max(1,Math.round(e)),this._generateKernels()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"blur",{get:function(){return this._blur},set:function(e){this._blur=e,this._generateKernels()},enumerable:!1,configurable:!0}),t}(C),I=function(e,t){return I=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},I(e,t)};function L(e,t){I(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var R=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,z=`
uniform sampler2D uSampler;
varying vec2 vTextureCoord;

uniform float threshold;

void main() {
    vec4 color = texture2D(uSampler, vTextureCoord);

    // A simple & fast algorithm for getting brightness.
    // It's inaccuracy , but good enought for this feature.
    float _max = max(max(color.r, color.g), color.b);
    float _min = min(min(color.r, color.g), color.b);
    float brightness = (_max + _min) * 0.5;

    if(brightness > threshold) {
        gl_FragColor = color;
    } else {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
    }
}
`,B=function(e){L(t,e);function t(t){t===void 0&&(t=.5);var n=e.call(this,R,z)||this;return n.threshold=t,n}return Object.defineProperty(t.prototype,"threshold",{get:function(){return this.uniforms.threshold},set:function(e){this.uniforms.threshold=e},enumerable:!1,configurable:!0}),t}(C),V=`uniform sampler2D uSampler;
varying vec2 vTextureCoord;

uniform sampler2D bloomTexture;
uniform float bloomScale;
uniform float brightness;

void main() {
    vec4 color = texture2D(uSampler, vTextureCoord);
    color.rgb *= brightness;
    vec4 bloomColor = vec4(texture2D(bloomTexture, vTextureCoord).rgb, 0.0);
    bloomColor.rgb *= bloomScale;
    gl_FragColor = color + bloomColor;
}
`;(function(e){L(t,e);function t(n){var r=e.call(this,R,V)||this;r.bloomScale=1,r.brightness=1,r._resolution=y.FILTER_RESOLUTION,typeof n==`number`&&(n={threshold:n});var i=Object.assign(t.defaults,n);r.bloomScale=i.bloomScale,r.brightness=i.brightness;var a=i.kernels,o=i.blur,s=i.quality,c=i.pixelSize,l=i.resolution;return r._extractFilter=new B(i.threshold),r._extractFilter.resolution=l,r._blurFilter=a?new F(a):new F(o,s),r.pixelSize=c,r.resolution=l,r}return t.prototype.apply=function(e,t,n,r,i){var a=e.getFilterTexture();this._extractFilter.apply(e,t,a,1,i);var o=e.getFilterTexture();this._blurFilter.apply(e,a,o,1),this.uniforms.bloomScale=this.bloomScale,this.uniforms.brightness=this.brightness,this.uniforms.bloomTexture=o,e.applyFilter(this,t,n,r),e.returnFilterTexture(o),e.returnFilterTexture(a)},Object.defineProperty(t.prototype,"resolution",{get:function(){return this._resolution},set:function(e){this._resolution=e,this._extractFilter&&(this._extractFilter.resolution=e),this._blurFilter&&(this._blurFilter.resolution=e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"threshold",{get:function(){return this._extractFilter.threshold},set:function(e){this._extractFilter.threshold=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"kernels",{get:function(){return this._blurFilter.kernels},set:function(e){this._blurFilter.kernels=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"blur",{get:function(){return this._blurFilter.blur},set:function(e){this._blurFilter.blur=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"quality",{get:function(){return this._blurFilter.quality},set:function(e){this._blurFilter.quality=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"pixelSize",{get:function(){return this._blurFilter.pixelSize},set:function(e){this._blurFilter.pixelSize=e},enumerable:!1,configurable:!0}),t.defaults={threshold:.5,bloomScale:1,brightness:1,kernels:null,blur:8,quality:4,pixelSize:1,resolution:y.FILTER_RESOLUTION},t})(C);var H=function(e,t){return H=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},H(e,t)};function U(e,t){H(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var W=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,G=`varying vec2 vTextureCoord;

uniform vec4 filterArea;
uniform float pixelSize;
uniform sampler2D uSampler;

vec2 mapCoord( vec2 coord )
{
    coord *= filterArea.xy;
    coord += filterArea.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= filterArea.zw;
    coord /= filterArea.xy;

    return coord;
}

vec2 pixelate(vec2 coord, vec2 size)
{
    return floor( coord / size ) * size;
}

vec2 getMod(vec2 coord, vec2 size)
{
    return mod( coord , size) / size;
}

float character(float n, vec2 p)
{
    p = floor(p*vec2(4.0, -4.0) + 2.5);

    if (clamp(p.x, 0.0, 4.0) == p.x)
    {
        if (clamp(p.y, 0.0, 4.0) == p.y)
        {
            if (int(mod(n/exp2(p.x + 5.0*p.y), 2.0)) == 1) return 1.0;
        }
    }
    return 0.0;
}

void main()
{
    vec2 coord = mapCoord(vTextureCoord);

    // get the rounded color..
    vec2 pixCoord = pixelate(coord, vec2(pixelSize));
    pixCoord = unmapCoord(pixCoord);

    vec4 color = texture2D(uSampler, pixCoord);

    // determine the character to use
    float gray = (color.r + color.g + color.b) / 3.0;

    float n =  65536.0;             // .
    if (gray > 0.2) n = 65600.0;    // :
    if (gray > 0.3) n = 332772.0;   // *
    if (gray > 0.4) n = 15255086.0; // o
    if (gray > 0.5) n = 23385164.0; // &
    if (gray > 0.6) n = 15252014.0; // 8
    if (gray > 0.7) n = 13199452.0; // @
    if (gray > 0.8) n = 11512810.0; // #

    // get the mod..
    vec2 modd = getMod(coord, vec2(pixelSize));

    gl_FragColor = color * character( n, vec2(-1.0) + modd * 2.0);

}
`;(function(e){U(t,e);function t(t){t===void 0&&(t=8);var n=e.call(this,W,G)||this;return n.size=t,n}return Object.defineProperty(t.prototype,"size",{get:function(){return this.uniforms.pixelSize},set:function(e){this.uniforms.pixelSize=e},enumerable:!1,configurable:!0}),t})(C);var K=function(e,t){return K=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},K(e,t)};function q(e,t){K(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var J=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Y=`precision mediump float;

varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;

uniform float transformX;
uniform float transformY;
uniform vec3 lightColor;
uniform float lightAlpha;
uniform vec3 shadowColor;
uniform float shadowAlpha;

void main(void) {
    vec2 transform = vec2(1.0 / filterArea) * vec2(transformX, transformY);
    vec4 color = texture2D(uSampler, vTextureCoord);
    float light = texture2D(uSampler, vTextureCoord - transform).a;
    float shadow = texture2D(uSampler, vTextureCoord + transform).a;

    color.rgb = mix(color.rgb, lightColor, clamp((color.a - light) * lightAlpha, 0.0, 1.0));
    color.rgb = mix(color.rgb, shadowColor, clamp((color.a - shadow) * shadowAlpha, 0.0, 1.0));
    gl_FragColor = vec4(color.rgb * color.a, color.a);
}
`;(function(e){q(t,e);function t(t){var n=e.call(this,J,Y)||this;return n._thickness=2,n._angle=0,n.uniforms.lightColor=new Float32Array(3),n.uniforms.shadowColor=new Float32Array(3),Object.assign(n,{rotation:45,thickness:2,lightColor:16777215,lightAlpha:.7,shadowColor:0,shadowAlpha:.7},t),n.padding=1,n}return t.prototype._updateTransform=function(){this.uniforms.transformX=this._thickness*Math.cos(this._angle),this.uniforms.transformY=this._thickness*Math.sin(this._angle)},Object.defineProperty(t.prototype,"rotation",{get:function(){return this._angle/T},set:function(e){this._angle=e*T,this._updateTransform()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"thickness",{get:function(){return this._thickness},set:function(e){this._thickness=e,this._updateTransform()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"lightColor",{get:function(){return v(this.uniforms.lightColor)},set:function(e){b(e,this.uniforms.lightColor)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"lightAlpha",{get:function(){return this.uniforms.lightAlpha},set:function(e){this.uniforms.lightAlpha=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"shadowColor",{get:function(){return v(this.uniforms.shadowColor)},set:function(e){b(e,this.uniforms.shadowColor)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"shadowAlpha",{get:function(){return this.uniforms.shadowAlpha},set:function(e){this.uniforms.shadowAlpha=e},enumerable:!1,configurable:!0}),t})(C);var X=function(e,t){return X=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},X(e,t)};function Z(e,t){X(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var te=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float uAlpha;

void main(void)
{
   gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;
}
`,ne=function(e){Z(t,e);function t(t){t===void 0&&(t=1);var n=e.call(this,`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,te,{uAlpha:1})||this;return n.alpha=t,n}return Object.defineProperty(t.prototype,"alpha",{get:function(){return this.uniforms.uAlpha},set:function(e){this.uniforms.uAlpha=e},enumerable:!1,configurable:!0}),t}(C),re=function(e,t){return re=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},re(e,t)};function ie(e,t){re(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var ae=`
    attribute vec2 aVertexPosition;

    uniform mat3 projectionMatrix;

    uniform float strength;

    varying vec2 vBlurTexCoords[%size%];

    uniform vec4 inputSize;
    uniform vec4 outputFrame;

    vec4 filterVertexPosition( void )
    {
        vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

        return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
    }

    vec2 filterTextureCoord( void )
    {
        return aVertexPosition * (outputFrame.zw * inputSize.zw);
    }

    void main(void)
    {
        gl_Position = filterVertexPosition();

        vec2 textureCoord = filterTextureCoord();
        %blur%
    }`;function oe(e,t){for(var n=Math.ceil(e/2),r=ae,i=``,a=t?`vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * strength, 0.0);`:`vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * strength);`,o=0;o<e;o++){var s=a.replace(`%index%`,o.toString());s=s.replace(`%sampleIndex%`,o-(n-1)+`.0`),i+=s,i+=`
`}return r=r.replace(`%blur%`,i),r=r.replace(`%size%`,e.toString()),r}var se={5:[.153388,.221461,.250301],7:[.071303,.131514,.189879,.214607],9:[.028532,.067234,.124009,.179044,.20236],11:[.0093,.028002,.065984,.121703,.175713,.198596],13:[.002406,.009255,.027867,.065666,.121117,.174868,.197641],15:[489e-6,.002403,.009246,.02784,.065602,.120999,.174697,.197448]},ce=[`varying vec2 vBlurTexCoords[%size%];`,`uniform sampler2D uSampler;`,`void main(void)`,`{`,`    gl_FragColor = vec4(0.0);`,`    %blur%`,`}`].join(`
`);function le(e){for(var t=se[e],n=t.length,r=ce,i=``,a=`gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;`,o,s=0;s<e;s++){var c=a.replace(`%index%`,s.toString());o=s,s>=n&&(o=e-s-1),c=c.replace(`%value%`,t[o].toString()),i+=c,i+=`
`}return r=r.replace(`%blur%`,i),r=r.replace(`%size%`,e.toString()),r}var ue=function(e){ie(t,e);function t(t,n,r,i,a){n===void 0&&(n=8),r===void 0&&(r=4),i===void 0&&(i=y.FILTER_RESOLUTION),a===void 0&&(a=5);var o=this,s=oe(a,t),c=le(a);return o=e.call(this,s,c)||this,o.horizontal=t,o.resolution=i,o._quality=0,o.quality=r,o.blur=n,o}return t.prototype.apply=function(e,t,n,r){if(n?this.horizontal?this.uniforms.strength=1/n.width*(n.width/t.width):this.uniforms.strength=1/n.height*(n.height/t.height):this.horizontal?this.uniforms.strength=1/e.renderer.width*(e.renderer.width/t.width):this.uniforms.strength=1/e.renderer.height*(e.renderer.height/t.height),this.uniforms.strength*=this.strength,this.uniforms.strength/=this.passes,this.passes===1)e.applyFilter(this,t,n,r);else{var i=e.getFilterTexture(),a=e.renderer,o=t,s=i;this.state.blend=!1,e.applyFilter(this,o,s,h.CLEAR);for(var c=1;c<this.passes-1;c++){e.bindAndClear(o,h.BLIT),this.uniforms.uSampler=s;var l=s;s=o,o=l,a.shader.bind(this),a.geometry.draw(5)}this.state.blend=!0,e.applyFilter(this,s,n,r),e.returnFilterTexture(i)}},Object.defineProperty(t.prototype,"blur",{get:function(){return this.strength},set:function(e){this.padding=1+Math.abs(e)*2,this.strength=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"quality",{get:function(){return this._quality},set:function(e){this._quality=e,this.passes=e},enumerable:!1,configurable:!0}),t}(C);(function(e){ie(t,e);function t(t,n,r,i){t===void 0&&(t=8),n===void 0&&(n=4),r===void 0&&(r=y.FILTER_RESOLUTION),i===void 0&&(i=5);var a=e.call(this)||this;return a.blurXFilter=new ue(!0,t,n,r,i),a.blurYFilter=new ue(!1,t,n,r,i),a.resolution=r,a.quality=n,a.blur=t,a.repeatEdgePixels=!1,a}return t.prototype.apply=function(e,t,n,r){var i=Math.abs(this.blurXFilter.strength),a=Math.abs(this.blurYFilter.strength);if(i&&a){var o=e.getFilterTexture();this.blurXFilter.apply(e,t,o,h.CLEAR),this.blurYFilter.apply(e,o,n,r),e.returnFilterTexture(o)}else a?this.blurYFilter.apply(e,t,n,r):this.blurXFilter.apply(e,t,n,r)},t.prototype.updatePadding=function(){this.padding=this._repeatEdgePixels?0:Math.max(Math.abs(this.blurXFilter.strength),Math.abs(this.blurYFilter.strength))*2},Object.defineProperty(t.prototype,"blur",{get:function(){return this.blurXFilter.blur},set:function(e){this.blurXFilter.blur=this.blurYFilter.blur=e,this.updatePadding()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"quality",{get:function(){return this.blurXFilter.quality},set:function(e){this.blurXFilter.quality=this.blurYFilter.quality=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"blurX",{get:function(){return this.blurXFilter.blur},set:function(e){this.blurXFilter.blur=e,this.updatePadding()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"blurY",{get:function(){return this.blurYFilter.blur},set:function(e){this.blurYFilter.blur=e,this.updatePadding()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"blendMode",{get:function(){return this.blurYFilter.blendMode},set:function(e){this.blurYFilter.blendMode=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"repeatEdgePixels",{get:function(){return this._repeatEdgePixels},set:function(e){this._repeatEdgePixels=e,this.updatePadding()},enumerable:!1,configurable:!0}),t})(C);var de=function(e,t){return de=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},de(e,t)};function fe(e,t){de(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}(function(e){fe(t,e);function t(t,n,r,i){t===void 0&&(t=2),n===void 0&&(n=4),r===void 0&&(r=y.FILTER_RESOLUTION),i===void 0&&(i=5);var a=e.call(this)||this,o,s;return typeof t==`number`?(o=t,s=t):t instanceof S?(o=t.x,s=t.y):Array.isArray(t)&&(o=t[0],s=t[1]),a.blurXFilter=new ue(!0,o,n,r,i),a.blurYFilter=new ue(!1,s,n,r,i),a.blurYFilter.blendMode=g.SCREEN,a.defaultFilter=new ne,a}return t.prototype.apply=function(e,t,n,r){var i=e.getFilterTexture();this.defaultFilter.apply(e,t,n,r),this.blurXFilter.apply(e,t,i,1),this.blurYFilter.apply(e,i,n,0),e.returnFilterTexture(i)},Object.defineProperty(t.prototype,"blur",{get:function(){return this.blurXFilter.blur},set:function(e){this.blurXFilter.blur=this.blurYFilter.blur=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"blurX",{get:function(){return this.blurXFilter.blur},set:function(e){this.blurXFilter.blur=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"blurY",{get:function(){return this.blurYFilter.blur},set:function(e){this.blurYFilter.blur=e},enumerable:!1,configurable:!0}),t})(C);var pe=function(e,t){return pe=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},pe(e,t)};function me(e,t){pe(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var he=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,ge=`uniform float radius;
uniform float strength;
uniform vec2 center;
uniform sampler2D uSampler;
varying vec2 vTextureCoord;

uniform vec4 filterArea;
uniform vec4 filterClamp;
uniform vec2 dimensions;

void main()
{
    vec2 coord = vTextureCoord * filterArea.xy;
    coord -= center * dimensions.xy;
    float distance = length(coord);
    if (distance < radius) {
        float percent = distance / radius;
        if (strength > 0.0) {
            coord *= mix(1.0, smoothstep(0.0, radius / distance, percent), strength * 0.75);
        } else {
            coord *= mix(1.0, pow(percent, 1.0 + strength * 0.75) * radius / distance, 1.0 - percent);
        }
    }
    coord += center * dimensions.xy;
    coord /= filterArea.xy;
    vec2 clampedCoord = clamp(coord, filterClamp.xy, filterClamp.zw);
    vec4 color = texture2D(uSampler, clampedCoord);
    if (coord != clampedCoord) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    gl_FragColor = color;
}
`;(function(e){me(t,e);function t(n){var r=e.call(this,he,ge)||this;return r.uniforms.dimensions=new Float32Array(2),Object.assign(r,t.defaults,n),r}return t.prototype.apply=function(e,t,n,r){var i=t.filterFrame,a=i.width,o=i.height;this.uniforms.dimensions[0]=a,this.uniforms.dimensions[1]=o,e.applyFilter(this,t,n,r)},Object.defineProperty(t.prototype,"radius",{get:function(){return this.uniforms.radius},set:function(e){this.uniforms.radius=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"strength",{get:function(){return this.uniforms.strength},set:function(e){this.uniforms.strength=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"center",{get:function(){return this.uniforms.center},set:function(e){this.uniforms.center=e},enumerable:!1,configurable:!0}),t.defaults={center:[.5,.5],radius:100,strength:1},t})(C);var _e=function(e,t){return _e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},_e(e,t)};function ve(e,t){_e(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var ye=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,be=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform sampler2D colorMap;
uniform float _mix;
uniform float _size;
uniform float _sliceSize;
uniform float _slicePixelSize;
uniform float _sliceInnerSize;
void main() {
    vec4 color = texture2D(uSampler, vTextureCoord.xy);

    vec4 adjusted;
    if (color.a > 0.0) {
        color.rgb /= color.a;
        float innerWidth = _size - 1.0;
        float zSlice0 = min(floor(color.b * innerWidth), innerWidth);
        float zSlice1 = min(zSlice0 + 1.0, innerWidth);
        float xOffset = _slicePixelSize * 0.5 + color.r * _sliceInnerSize;
        float s0 = xOffset + (zSlice0 * _sliceSize);
        float s1 = xOffset + (zSlice1 * _sliceSize);
        float yOffset = _sliceSize * 0.5 + color.g * (1.0 - _sliceSize);
        vec4 slice0Color = texture2D(colorMap, vec2(s0,yOffset));
        vec4 slice1Color = texture2D(colorMap, vec2(s1,yOffset));
        float zOffset = fract(color.b * innerWidth);
        adjusted = mix(slice0Color, slice1Color, zOffset);

        color.rgb *= color.a;
    }
    gl_FragColor = vec4(mix(color, adjusted, _mix).rgb, color.a);

}`;(function(e){ve(t,e);function t(t,n,r){n===void 0&&(n=!1),r===void 0&&(r=1);var i=e.call(this,ye,be)||this;return i.mix=1,i._size=0,i._sliceSize=0,i._slicePixelSize=0,i._sliceInnerSize=0,i._nearest=!1,i._scaleMode=null,i._colorMap=null,i._scaleMode=null,i.nearest=n,i.mix=r,i.colorMap=t,i}return t.prototype.apply=function(e,t,n,r){this.uniforms._mix=this.mix,e.applyFilter(this,t,n,r)},Object.defineProperty(t.prototype,"colorSize",{get:function(){return this._size},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"colorMap",{get:function(){return this._colorMap},set:function(e){e&&(e instanceof E||(e=E.from(e)),e?.baseTexture&&(e.baseTexture.scaleMode=this._scaleMode,e.baseTexture.mipmap=_.OFF,this._size=e.height,this._sliceSize=1/this._size,this._slicePixelSize=this._sliceSize/this._size,this._sliceInnerSize=this._slicePixelSize*(this._size-1),this.uniforms._size=this._size,this.uniforms._sliceSize=this._sliceSize,this.uniforms._slicePixelSize=this._slicePixelSize,this.uniforms._sliceInnerSize=this._sliceInnerSize,this.uniforms.colorMap=e),this._colorMap=e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"nearest",{get:function(){return this._nearest},set:function(e){this._nearest=e,this._scaleMode=e?w.NEAREST:w.LINEAR;var t=this._colorMap;t&&t.baseTexture&&(t.baseTexture._glTextures={},t.baseTexture.scaleMode=this._scaleMode,t.baseTexture.mipmap=_.OFF,t._updateID++,t.baseTexture.emit(`update`,t.baseTexture))},enumerable:!1,configurable:!0}),t.prototype.updateColorMap=function(){var e=this._colorMap;e&&e.baseTexture&&(e._updateID++,e.baseTexture.emit(`update`,e.baseTexture),this.colorMap=e)},t.prototype.destroy=function(t){t===void 0&&(t=!1),this._colorMap&&this._colorMap.destroy(t),e.prototype.destroy.call(this)},t})(C);var xe=function(e,t){return xe=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},xe(e,t)};function Se(e,t){xe(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var Ce=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,we=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec3 color;
uniform float alpha;

void main(void) {
    vec4 currentColor = texture2D(uSampler, vTextureCoord);
    gl_FragColor = vec4(mix(currentColor.rgb, color.rgb, currentColor.a * alpha), currentColor.a);
}
`;(function(e){Se(t,e);function t(t,n){t===void 0&&(t=0),n===void 0&&(n=1);var r=e.call(this,Ce,we)||this;return r._color=0,r._alpha=1,r.uniforms.color=new Float32Array(3),r.color=t,r.alpha=n,r}return Object.defineProperty(t.prototype,"color",{get:function(){return this._color},set:function(e){var t=this.uniforms.color;typeof e==`number`?(b(e,t),this._color=e):(t[0]=e[0],t[1]=e[1],t[2]=e[2],this._color=v(t))},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"alpha",{get:function(){return this._alpha},set:function(e){this.uniforms.alpha=e,this._alpha=e},enumerable:!1,configurable:!0}),t})(C);var Te=function(e,t){return Te=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},Te(e,t)};function Ee(e,t){Te(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var De=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Oe=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec3 originalColor;
uniform vec3 newColor;
uniform float epsilon;
void main(void) {
    vec4 currentColor = texture2D(uSampler, vTextureCoord);
    vec3 colorDiff = originalColor - (currentColor.rgb / max(currentColor.a, 0.0000000001));
    float colorDistance = length(colorDiff);
    float doReplace = step(colorDistance, epsilon);
    gl_FragColor = vec4(mix(currentColor.rgb, (newColor + colorDiff) * currentColor.a, doReplace), currentColor.a);
}
`;(function(e){Ee(t,e);function t(t,n,r){t===void 0&&(t=16711680),n===void 0&&(n=0),r===void 0&&(r=.4);var i=e.call(this,De,Oe)||this;return i._originalColor=16711680,i._newColor=0,i.uniforms.originalColor=new Float32Array(3),i.uniforms.newColor=new Float32Array(3),i.originalColor=t,i.newColor=n,i.epsilon=r,i}return Object.defineProperty(t.prototype,"originalColor",{get:function(){return this._originalColor},set:function(e){var t=this.uniforms.originalColor;typeof e==`number`?(b(e,t),this._originalColor=e):(t[0]=e[0],t[1]=e[1],t[2]=e[2],this._originalColor=v(t))},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"newColor",{get:function(){return this._newColor},set:function(e){var t=this.uniforms.newColor;typeof e==`number`?(b(e,t),this._newColor=e):(t[0]=e[0],t[1]=e[1],t[2]=e[2],this._newColor=v(t))},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"epsilon",{get:function(){return this.uniforms.epsilon},set:function(e){this.uniforms.epsilon=e},enumerable:!1,configurable:!0}),t})(C);var ke=function(e,t){return ke=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},ke(e,t)};function Ae(e,t){ke(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var je=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Me=`precision mediump float;

varying mediump vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec2 texelSize;
uniform float matrix[9];

void main(void)
{
   vec4 c11 = texture2D(uSampler, vTextureCoord - texelSize); // top left
   vec4 c12 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - texelSize.y)); // top center
   vec4 c13 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y - texelSize.y)); // top right

   vec4 c21 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y)); // mid left
   vec4 c22 = texture2D(uSampler, vTextureCoord); // mid center
   vec4 c23 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y)); // mid right

   vec4 c31 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y + texelSize.y)); // bottom left
   vec4 c32 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + texelSize.y)); // bottom center
   vec4 c33 = texture2D(uSampler, vTextureCoord + texelSize); // bottom right

   gl_FragColor =
       c11 * matrix[0] + c12 * matrix[1] + c13 * matrix[2] +
       c21 * matrix[3] + c22 * matrix[4] + c23 * matrix[5] +
       c31 * matrix[6] + c32 * matrix[7] + c33 * matrix[8];

   gl_FragColor.a = c22.a;
}
`;(function(e){Ae(t,e);function t(t,n,r){n===void 0&&(n=200),r===void 0&&(r=200);var i=e.call(this,je,Me)||this;return i.uniforms.texelSize=new Float32Array(2),i.uniforms.matrix=new Float32Array(9),t!==void 0&&(i.matrix=t),i.width=n,i.height=r,i}return Object.defineProperty(t.prototype,"matrix",{get:function(){return this.uniforms.matrix},set:function(e){var t=this;e.forEach(function(e,n){t.uniforms.matrix[n]=e})},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"width",{get:function(){return 1/this.uniforms.texelSize[0]},set:function(e){this.uniforms.texelSize[0]=1/e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"height",{get:function(){return 1/this.uniforms.texelSize[1]},set:function(e){this.uniforms.texelSize[1]=1/e},enumerable:!1,configurable:!0}),t})(C);var Ne=function(e,t){return Ne=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},Ne(e,t)};function Pe(e,t){Ne(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var Fe=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Ie=`precision mediump float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void)
{
    float lum = length(texture2D(uSampler, vTextureCoord.xy).rgb);

    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);

    if (lum < 1.00)
    {
        if (mod(gl_FragCoord.x + gl_FragCoord.y, 10.0) == 0.0)
        {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    }

    if (lum < 0.75)
    {
        if (mod(gl_FragCoord.x - gl_FragCoord.y, 10.0) == 0.0)
        {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    }

    if (lum < 0.50)
    {
        if (mod(gl_FragCoord.x + gl_FragCoord.y - 5.0, 10.0) == 0.0)
        {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    }

    if (lum < 0.3)
    {
        if (mod(gl_FragCoord.x - gl_FragCoord.y - 5.0, 10.0) == 0.0)
        {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    }
}
`;(function(e){Pe(t,e);function t(){return e.call(this,Fe,Ie)||this}return t})(C);var Le=function(e,t){return Le=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},Le(e,t)};function Re(e,t){Le(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var ze=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Be=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec4 filterArea;
uniform vec2 dimensions;

const float SQRT_2 = 1.414213;

const float light = 1.0;

uniform float curvature;
uniform float lineWidth;
uniform float lineContrast;
uniform bool verticalLine;
uniform float noise;
uniform float noiseSize;

uniform float vignetting;
uniform float vignettingAlpha;
uniform float vignettingBlur;

uniform float seed;
uniform float time;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main(void)
{
    vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;
    vec2 dir = vec2(vTextureCoord.xy * filterArea.xy / dimensions - vec2(0.5, 0.5));
    
    gl_FragColor = texture2D(uSampler, vTextureCoord);
    vec3 rgb = gl_FragColor.rgb;

    if (noise > 0.0 && noiseSize > 0.0)
    {
        pixelCoord.x = floor(pixelCoord.x / noiseSize);
        pixelCoord.y = floor(pixelCoord.y / noiseSize);
        float _noise = rand(pixelCoord * noiseSize * seed) - 0.5;
        rgb += _noise * noise;
    }

    if (lineWidth > 0.0)
    {
        float _c = curvature > 0. ? curvature : 1.;
        float k = curvature > 0. ?(length(dir * dir) * 0.25 * _c * _c + 0.935 * _c) : 1.;
        vec2 uv = dir * k;

        float v = (verticalLine ? uv.x * dimensions.x : uv.y * dimensions.y) * min(1.0, 2.0 / lineWidth ) / _c;
        float j = 1. + cos(v * 1.2 - time) * 0.5 * lineContrast;
        rgb *= j;
        float segment = verticalLine ? mod((dir.x + .5) * dimensions.x, 4.) : mod((dir.y + .5) * dimensions.y, 4.);
        rgb *= 0.99 + ceil(segment) * 0.015;
    }

    if (vignetting > 0.0)
    {
        float outter = SQRT_2 - vignetting * SQRT_2;
        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignettingBlur * SQRT_2), 0.0, 1.0);
        rgb *= darker + (1.0 - darker) * (1.0 - vignettingAlpha);
    }

    gl_FragColor.rgb = rgb;
}
`;(function(e){Re(t,e);function t(n){var r=e.call(this,ze,Be)||this;return r.time=0,r.seed=0,r.uniforms.dimensions=new Float32Array(2),Object.assign(r,t.defaults,n),r}return t.prototype.apply=function(e,t,n,r){var i=t.filterFrame,a=i.width,o=i.height;this.uniforms.dimensions[0]=a,this.uniforms.dimensions[1]=o,this.uniforms.seed=this.seed,this.uniforms.time=this.time,e.applyFilter(this,t,n,r)},Object.defineProperty(t.prototype,"curvature",{get:function(){return this.uniforms.curvature},set:function(e){this.uniforms.curvature=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"lineWidth",{get:function(){return this.uniforms.lineWidth},set:function(e){this.uniforms.lineWidth=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"lineContrast",{get:function(){return this.uniforms.lineContrast},set:function(e){this.uniforms.lineContrast=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"verticalLine",{get:function(){return this.uniforms.verticalLine},set:function(e){this.uniforms.verticalLine=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"noise",{get:function(){return this.uniforms.noise},set:function(e){this.uniforms.noise=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"noiseSize",{get:function(){return this.uniforms.noiseSize},set:function(e){this.uniforms.noiseSize=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"vignetting",{get:function(){return this.uniforms.vignetting},set:function(e){this.uniforms.vignetting=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"vignettingAlpha",{get:function(){return this.uniforms.vignettingAlpha},set:function(e){this.uniforms.vignettingAlpha=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"vignettingBlur",{get:function(){return this.uniforms.vignettingBlur},set:function(e){this.uniforms.vignettingBlur=e},enumerable:!1,configurable:!0}),t.defaults={curvature:1,lineWidth:1,lineContrast:.25,verticalLine:!1,noise:0,noiseSize:1,seed:0,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,time:0},t})(C);var Ve=function(e,t){return Ve=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},Ve(e,t)};function He(e,t){Ve(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var Ue=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,We=`precision mediump float;

varying vec2 vTextureCoord;
varying vec4 vColor;

uniform vec4 filterArea;
uniform sampler2D uSampler;

uniform float angle;
uniform float scale;

float pattern()
{
   float s = sin(angle), c = cos(angle);
   vec2 tex = vTextureCoord * filterArea.xy;
   vec2 point = vec2(
       c * tex.x - s * tex.y,
       s * tex.x + c * tex.y
   ) * scale;
   return (sin(point.x) * sin(point.y)) * 4.0;
}

void main()
{
   vec4 color = texture2D(uSampler, vTextureCoord);
   float average = (color.r + color.g + color.b) / 3.0;
   gl_FragColor = vec4(vec3(average * 10.0 - 5.0 + pattern()), color.a);
}
`;(function(e){He(t,e);function t(t,n){t===void 0&&(t=1),n===void 0&&(n=5);var r=e.call(this,Ue,We)||this;return r.scale=t,r.angle=n,r}return Object.defineProperty(t.prototype,"scale",{get:function(){return this.uniforms.scale},set:function(e){this.uniforms.scale=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"angle",{get:function(){return this.uniforms.angle},set:function(e){this.uniforms.angle=e},enumerable:!1,configurable:!0}),t})(C);var Ge=function(e,t){return Ge=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},Ge(e,t)};function Ke(e,t){Ge(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var qe=function(){return qe=Object.assign||function(e){for(var t=arguments,n,r=1,i=arguments.length;r<i;r++)for(var a in n=t[r],n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},qe.apply(this,arguments)},Je=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Ye=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float alpha;
uniform vec3 color;

uniform vec2 shift;
uniform vec4 inputSize;

void main(void){
    vec4 sample = texture2D(uSampler, vTextureCoord - shift * inputSize.zw);

    // Premultiply alpha
    sample.rgb = color.rgb * sample.a;

    // alpha user alpha
    sample *= alpha;

    gl_FragColor = sample;
}`,Xe=function(e){Ke(t,e);function t(n){var r=e.call(this)||this;r.angle=45,r._distance=5,r._resolution=y.FILTER_RESOLUTION;var i=n?qe(qe({},t.defaults),n):t.defaults,a=i.kernels,o=i.blur,s=i.quality,c=i.pixelSize,l=i.resolution;r._tintFilter=new C(Je,Ye),r._tintFilter.uniforms.color=new Float32Array(4),r._tintFilter.uniforms.shift=new S,r._tintFilter.resolution=l,r._blurFilter=a?new F(a):new F(o,s),r.pixelSize=c,r.resolution=l;var u=i.shadowOnly,d=i.rotation,f=i.distance,p=i.alpha,m=i.color;return r.shadowOnly=u,r.rotation=d,r.distance=f,r.alpha=p,r.color=m,r._updatePadding(),r}return t.prototype.apply=function(e,t,n,r){var i=e.getFilterTexture();this._tintFilter.apply(e,t,i,1),this._blurFilter.apply(e,i,n,r),this.shadowOnly!==!0&&e.applyFilter(this,t,n,0),e.returnFilterTexture(i)},t.prototype._updatePadding=function(){this.padding=this.distance+this.blur*2},t.prototype._updateShift=function(){this._tintFilter.uniforms.shift.set(this.distance*Math.cos(this.angle),this.distance*Math.sin(this.angle))},Object.defineProperty(t.prototype,"resolution",{get:function(){return this._resolution},set:function(e){this._resolution=e,this._tintFilter&&(this._tintFilter.resolution=e),this._blurFilter&&(this._blurFilter.resolution=e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"distance",{get:function(){return this._distance},set:function(e){this._distance=e,this._updatePadding(),this._updateShift()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"rotation",{get:function(){return this.angle/T},set:function(e){this.angle=e*T,this._updateShift()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"alpha",{get:function(){return this._tintFilter.uniforms.alpha},set:function(e){this._tintFilter.uniforms.alpha=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"color",{get:function(){return v(this._tintFilter.uniforms.color)},set:function(e){b(e,this._tintFilter.uniforms.color)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"kernels",{get:function(){return this._blurFilter.kernels},set:function(e){this._blurFilter.kernels=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"blur",{get:function(){return this._blurFilter.blur},set:function(e){this._blurFilter.blur=e,this._updatePadding()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"quality",{get:function(){return this._blurFilter.quality},set:function(e){this._blurFilter.quality=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"pixelSize",{get:function(){return this._blurFilter.pixelSize},set:function(e){this._blurFilter.pixelSize=e},enumerable:!1,configurable:!0}),t.defaults={rotation:45,distance:5,color:0,alpha:.5,shadowOnly:!1,kernels:null,blur:2,quality:3,pixelSize:1,resolution:y.FILTER_RESOLUTION},t}(C),Ze=function(e,t){return Ze=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},Ze(e,t)};function Qe(e,t){Ze(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var $e=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,et=`precision mediump float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float strength;
uniform vec4 filterArea;


void main(void)
{
	vec2 onePixel = vec2(1.0 / filterArea);

	vec4 color;

	color.rgb = vec3(0.5);

	color -= texture2D(uSampler, vTextureCoord - onePixel) * strength;
	color += texture2D(uSampler, vTextureCoord + onePixel) * strength;

	color.rgb = vec3((color.r + color.g + color.b) / 3.0);

	float alpha = texture2D(uSampler, vTextureCoord).a;

	gl_FragColor = vec4(color.rgb * alpha, alpha);
}
`;(function(e){Qe(t,e);function t(t){t===void 0&&(t=5);var n=e.call(this,$e,et)||this;return n.strength=t,n}return Object.defineProperty(t.prototype,"strength",{get:function(){return this.uniforms.strength},set:function(e){this.uniforms.strength=e},enumerable:!1,configurable:!0}),t})(C);var tt=function(e,t){return tt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},tt(e,t)};function nt(e,t){tt(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var rt=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,it=`// precision highp float;

varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec4 filterArea;
uniform vec4 filterClamp;
uniform vec2 dimensions;
uniform float aspect;

uniform sampler2D displacementMap;
uniform float offset;
uniform float sinDir;
uniform float cosDir;
uniform int fillMode;

uniform float seed;
uniform vec2 red;
uniform vec2 green;
uniform vec2 blue;

const int TRANSPARENT = 0;
const int ORIGINAL = 1;
const int LOOP = 2;
const int CLAMP = 3;
const int MIRROR = 4;

void main(void)
{
    vec2 coord = (vTextureCoord * filterArea.xy) / dimensions;

    if (coord.x > 1.0 || coord.y > 1.0) {
        return;
    }

    float cx = coord.x - 0.5;
    float cy = (coord.y - 0.5) * aspect;
    float ny = (-sinDir * cx + cosDir * cy) / aspect + 0.5;

    // displacementMap: repeat
    // ny = ny > 1.0 ? ny - 1.0 : (ny < 0.0 ? 1.0 + ny : ny);

    // displacementMap: mirror
    ny = ny > 1.0 ? 2.0 - ny : (ny < 0.0 ? -ny : ny);

    vec4 dc = texture2D(displacementMap, vec2(0.5, ny));

    float displacement = (dc.r - dc.g) * (offset / filterArea.x);

    coord = vTextureCoord + vec2(cosDir * displacement, sinDir * displacement * aspect);

    if (fillMode == CLAMP) {
        coord = clamp(coord, filterClamp.xy, filterClamp.zw);
    } else {
        if( coord.x > filterClamp.z ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.x -= filterClamp.z;
            } else if (fillMode == MIRROR) {
                coord.x = filterClamp.z * 2.0 - coord.x;
            }
        } else if( coord.x < filterClamp.x ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.x += filterClamp.z;
            } else if (fillMode == MIRROR) {
                coord.x *= -filterClamp.z;
            }
        }

        if( coord.y > filterClamp.w ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.y -= filterClamp.w;
            } else if (fillMode == MIRROR) {
                coord.y = filterClamp.w * 2.0 - coord.y;
            }
        } else if( coord.y < filterClamp.y ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.y += filterClamp.w;
            } else if (fillMode == MIRROR) {
                coord.y *= -filterClamp.w;
            }
        }
    }

    gl_FragColor.r = texture2D(uSampler, coord + red * (1.0 - seed * 0.4) / filterArea.xy).r;
    gl_FragColor.g = texture2D(uSampler, coord + green * (1.0 - seed * 0.3) / filterArea.xy).g;
    gl_FragColor.b = texture2D(uSampler, coord + blue * (1.0 - seed * 0.2) / filterArea.xy).b;
    gl_FragColor.a = texture2D(uSampler, coord).a;
}
`;(function(e){nt(t,e);function t(n){var r=e.call(this,rt,it)||this;return r.offset=100,r.fillMode=t.TRANSPARENT,r.average=!1,r.seed=0,r.minSize=8,r.sampleSize=512,r._slices=0,r._offsets=new Float32Array(1),r._sizes=new Float32Array(1),r._direction=-1,r.uniforms.dimensions=new Float32Array(2),r._canvas=document.createElement(`canvas`),r._canvas.width=4,r._canvas.height=r.sampleSize,r.texture=E.from(r._canvas,{scaleMode:w.NEAREST}),Object.assign(r,t.defaults,n),r}return t.prototype.apply=function(e,t,n,r){var i=t.filterFrame,a=i.width,o=i.height;this.uniforms.dimensions[0]=a,this.uniforms.dimensions[1]=o,this.uniforms.aspect=o/a,this.uniforms.seed=this.seed,this.uniforms.offset=this.offset,this.uniforms.fillMode=this.fillMode,e.applyFilter(this,t,n,r)},t.prototype._randomizeSizes=function(){var e=this._sizes,t=this._slices-1,n=this.sampleSize,r=Math.min(this.minSize/n,.9/this._slices);if(this.average){for(var i=this._slices,a=1,o=0;o<t;o++){var s=a/(i-o),c=Math.max(s*(1-Math.random()*.6),r);e[o]=c,a-=c}e[t]=a}else{for(var a=1,l=Math.sqrt(1/this._slices),o=0;o<t;o++){var c=Math.max(l*a*Math.random(),r);e[o]=c,a-=c}e[t]=a}this.shuffle()},t.prototype.shuffle=function(){for(var e=this._sizes,t=this._slices-1;t>0;t--){var n=Math.random()*t>>0,r=e[t];e[t]=e[n],e[n]=r}},t.prototype._randomizeOffsets=function(){for(var e=0;e<this._slices;e++)this._offsets[e]=Math.random()*(Math.random()<.5?-1:1)},t.prototype.refresh=function(){this._randomizeSizes(),this._randomizeOffsets(),this.redraw()},t.prototype.redraw=function(){var e=this.sampleSize,t=this.texture,n=this._canvas.getContext(`2d`);n.clearRect(0,0,8,e);for(var r,i=0,a=0;a<this._slices;a++){r=Math.floor(this._offsets[a]*256);var o=this._sizes[a]*e,s=r>0?r:0,c=r<0?-r:0;n.fillStyle=`rgba(`+s+`, `+c+`, 0, 1)`,n.fillRect(0,i>>0,e,o+1>>0),i+=o}t.baseTexture.update(),this.uniforms.displacementMap=t},Object.defineProperty(t.prototype,"sizes",{get:function(){return this._sizes},set:function(e){for(var t=Math.min(this._slices,e.length),n=0;n<t;n++)this._sizes[n]=e[n]},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"offsets",{get:function(){return this._offsets},set:function(e){for(var t=Math.min(this._slices,e.length),n=0;n<t;n++)this._offsets[n]=e[n]},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"slices",{get:function(){return this._slices},set:function(e){this._slices!==e&&(this._slices=e,this.uniforms.slices=e,this._sizes=this.uniforms.slicesWidth=new Float32Array(e),this._offsets=this.uniforms.slicesOffset=new Float32Array(e),this.refresh())},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"direction",{get:function(){return this._direction},set:function(e){if(this._direction!==e){this._direction=e;var t=e*T;this.uniforms.sinDir=Math.sin(t),this.uniforms.cosDir=Math.cos(t)}},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"red",{get:function(){return this.uniforms.red},set:function(e){this.uniforms.red=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"green",{get:function(){return this.uniforms.green},set:function(e){this.uniforms.green=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"blue",{get:function(){return this.uniforms.blue},set:function(e){this.uniforms.blue=e},enumerable:!1,configurable:!0}),t.prototype.destroy=function(){var e;(e=this.texture)==null||e.destroy(!0),this.texture=this._canvas=this.red=this.green=this.blue=this._sizes=this._offsets=null},t.defaults={slices:5,offset:100,direction:0,fillMode:0,average:!1,seed:0,red:[0,0],green:[0,0],blue:[0,0],minSize:8,sampleSize:512},t.TRANSPARENT=0,t.ORIGINAL=1,t.LOOP=2,t.CLAMP=3,t.MIRROR=4,t})(C);var at=function(e,t){return at=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},at(e,t)};function ot(e,t){at(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var st=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,ct=`varying vec2 vTextureCoord;
varying vec4 vColor;

uniform sampler2D uSampler;

uniform float outerStrength;
uniform float innerStrength;

uniform vec4 glowColor;

uniform vec4 filterArea;
uniform vec4 filterClamp;
uniform bool knockout;

const float PI = 3.14159265358979323846264;

const float DIST = __DIST__;
const float ANGLE_STEP_SIZE = min(__ANGLE_STEP_SIZE__, PI * 2.0);
const float ANGLE_STEP_NUM = ceil(PI * 2.0 / ANGLE_STEP_SIZE);

const float MAX_TOTAL_ALPHA = ANGLE_STEP_NUM * DIST * (DIST + 1.0) / 2.0;

void main(void) {
    vec2 px = vec2(1.0 / filterArea.x, 1.0 / filterArea.y);

    float totalAlpha = 0.0;

    vec2 direction;
    vec2 displaced;
    vec4 curColor;

    for (float angle = 0.0; angle < PI * 2.0; angle += ANGLE_STEP_SIZE) {
       direction = vec2(cos(angle), sin(angle)) * px;

       for (float curDistance = 0.0; curDistance < DIST; curDistance++) {
           displaced = clamp(vTextureCoord + direction * 
                   (curDistance + 1.0), filterClamp.xy, filterClamp.zw);

           curColor = texture2D(uSampler, displaced);

           totalAlpha += (DIST - curDistance) * curColor.a;
       }
    }
    
    curColor = texture2D(uSampler, vTextureCoord);

    float alphaRatio = (totalAlpha / MAX_TOTAL_ALPHA);

    float innerGlowAlpha = (1.0 - alphaRatio) * innerStrength * curColor.a;
    float innerGlowStrength = min(1.0, innerGlowAlpha);
    
    vec4 innerColor = mix(curColor, glowColor, innerGlowStrength);

    float outerGlowAlpha = alphaRatio * outerStrength * (1. - curColor.a);
    float outerGlowStrength = min(1.0 - innerColor.a, outerGlowAlpha);

    vec4 outerGlowColor = outerGlowStrength * glowColor.rgba;
    
    if (knockout) {
      float resultAlpha = outerGlowAlpha + innerGlowAlpha;
      gl_FragColor = vec4(glowColor.rgb * resultAlpha, resultAlpha);
    }
    else {
      gl_FragColor = innerColor + outerGlowColor;
    }
}
`;(function(e){ot(t,e);function t(n){var r=this,i=Object.assign({},t.defaults,n),a=i.outerStrength,o=i.innerStrength,s=i.color,c=i.knockout,l=i.quality,u=Math.round(i.distance);return r=e.call(this,st,ct.replace(/__ANGLE_STEP_SIZE__/gi,``+(1/l/u).toFixed(7)).replace(/__DIST__/gi,u.toFixed(0)+`.0`))||this,r.uniforms.glowColor=new Float32Array([0,0,0,1]),Object.assign(r,{color:s,outerStrength:a,innerStrength:o,padding:u,knockout:c}),r}return Object.defineProperty(t.prototype,"color",{get:function(){return v(this.uniforms.glowColor)},set:function(e){b(e,this.uniforms.glowColor)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"outerStrength",{get:function(){return this.uniforms.outerStrength},set:function(e){this.uniforms.outerStrength=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"innerStrength",{get:function(){return this.uniforms.innerStrength},set:function(e){this.uniforms.innerStrength=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"knockout",{get:function(){return this.uniforms.knockout},set:function(e){this.uniforms.knockout=e},enumerable:!1,configurable:!0}),t.defaults={distance:10,outerStrength:4,innerStrength:0,color:16777215,quality:.1,knockout:!1},t})(C);var lt=function(e,t){return lt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},lt(e,t)};function ut(e,t){lt(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var dt=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,ft=`vec3 mod289(vec3 x)
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 mod289(vec4 x)
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 permute(vec4 x)
{
    return mod289(((x * 34.0) + 1.0) * x);
}
vec4 taylorInvSqrt(vec4 r)
{
    return 1.79284291400159 - 0.85373472095314 * r;
}
vec3 fade(vec3 t)
{
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}
// Classic Perlin noise, periodic variant
float pnoise(vec3 P, vec3 rep)
{
    vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
    vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
    Pi0 = mod289(Pi0);
    Pi1 = mod289(Pi1);
    vec3 Pf0 = fract(P); // Fractional part for interpolation
    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;
    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);
    vec4 gx0 = ixy0 * (1.0 / 7.0);
    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);
    vec4 gx1 = ixy1 * (1.0 / 7.0);
    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);
    vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);
    vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);
    vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);
    vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);
    vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);
    vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);
    vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);
    vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);
    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;
    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);
    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
}
float turb(vec3 P, vec3 rep, float lacunarity, float gain)
{
    float sum = 0.0;
    float sc = 1.0;
    float totalgain = 1.0;
    for (float i = 0.0; i < 6.0; i++)
    {
        sum += totalgain * pnoise(P * sc, rep);
        sc *= lacunarity;
        totalgain *= gain;
    }
    return abs(sum);
}
`,pt=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;
uniform vec2 dimensions;

uniform vec2 light;
uniform bool parallel;
uniform float aspect;

uniform float gain;
uniform float lacunarity;
uniform float time;
uniform float alpha;

\${perlin}

void main(void) {
    vec2 coord = vTextureCoord * filterArea.xy / dimensions.xy;

    float d;

    if (parallel) {
        float _cos = light.x;
        float _sin = light.y;
        d = (_cos * coord.x) + (_sin * coord.y * aspect);
    } else {
        float dx = coord.x - light.x / dimensions.x;
        float dy = (coord.y - light.y / dimensions.y) * aspect;
        float dis = sqrt(dx * dx + dy * dy) + 0.00001;
        d = dy / dis;
    }

    vec3 dir = vec3(d, d, 0.0);

    float noise = turb(dir + vec3(time, 0.0, 62.1 + time) * 0.05, vec3(480.0, 320.0, 480.0), lacunarity, gain);
    noise = mix(noise, 0.0, 0.3);
    //fade vertically.
    vec4 mist = vec4(noise, noise, noise, 1.0) * (1.0 - coord.y);
    mist.a = 1.0;
    // apply user alpha
    mist *= alpha;

    gl_FragColor = texture2D(uSampler, vTextureCoord) + mist;

}
`;(function(e){ut(t,e);function t(n){var r=e.call(this,dt,pt.replace("${perlin}",ft))||this;r.parallel=!0,r.time=0,r._angle=0,r.uniforms.dimensions=new Float32Array(2);var i=Object.assign(t.defaults,n);return r._angleLight=new S,r.angle=i.angle,r.gain=i.gain,r.lacunarity=i.lacunarity,r.alpha=i.alpha,r.parallel=i.parallel,r.center=i.center,r.time=i.time,r}return t.prototype.apply=function(e,t,n,r){var i=t.filterFrame,a=i.width,o=i.height;this.uniforms.light=this.parallel?this._angleLight:this.center,this.uniforms.parallel=this.parallel,this.uniforms.dimensions[0]=a,this.uniforms.dimensions[1]=o,this.uniforms.aspect=o/a,this.uniforms.time=this.time,this.uniforms.alpha=this.alpha,e.applyFilter(this,t,n,r)},Object.defineProperty(t.prototype,"angle",{get:function(){return this._angle},set:function(e){this._angle=e;var t=e*T;this._angleLight.x=Math.cos(t),this._angleLight.y=Math.sin(t)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"gain",{get:function(){return this.uniforms.gain},set:function(e){this.uniforms.gain=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"lacunarity",{get:function(){return this.uniforms.lacunarity},set:function(e){this.uniforms.lacunarity=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"alpha",{get:function(){return this.uniforms.alpha},set:function(e){this.uniforms.alpha=e},enumerable:!1,configurable:!0}),t.defaults={angle:30,gain:.5,lacunarity:2.5,time:0,parallel:!0,center:[0,0],alpha:1},t})(C);var mt=function(e,t){return mt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},mt(e,t)};function ht(e,t){mt(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var gt=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,_t=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;

uniform vec2 uVelocity;
uniform int uKernelSize;
uniform float uOffset;

const int MAX_KERNEL_SIZE = 2048;

// Notice:
// the perfect way:
//    int kernelSize = min(uKernelSize, MAX_KERNELSIZE);
// BUT in real use-case , uKernelSize < MAX_KERNELSIZE almost always.
// So use uKernelSize directly.

void main(void)
{
    vec4 color = texture2D(uSampler, vTextureCoord);

    if (uKernelSize == 0)
    {
        gl_FragColor = color;
        return;
    }

    vec2 velocity = uVelocity / filterArea.xy;
    float offset = -uOffset / length(uVelocity) - 0.5;
    int k = uKernelSize - 1;

    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {
        if (i == k) {
            break;
        }
        vec2 bias = velocity * (float(i) / float(k) + offset);
        color += texture2D(uSampler, vTextureCoord + bias);
    }
    gl_FragColor = color / float(uKernelSize);
}
`;(function(e){ht(t,e);function t(t,n,r){t===void 0&&(t=[0,0]),n===void 0&&(n=5),r===void 0&&(r=0);var i=e.call(this,gt,_t)||this;return i.kernelSize=5,i.uniforms.uVelocity=new Float32Array(2),i._velocity=new x(i.velocityChanged,i),i.setVelocity(t),i.kernelSize=n,i.offset=r,i}return t.prototype.apply=function(e,t,n,r){var i=this.velocity,a=i.x,o=i.y;this.uniforms.uKernelSize=a!==0||o!==0?this.kernelSize:0,e.applyFilter(this,t,n,r)},Object.defineProperty(t.prototype,"velocity",{get:function(){return this._velocity},set:function(e){this.setVelocity(e)},enumerable:!1,configurable:!0}),t.prototype.setVelocity=function(e){if(Array.isArray(e)){var t=e[0],n=e[1];this._velocity.set(t,n)}else this._velocity.copyFrom(e)},t.prototype.velocityChanged=function(){this.uniforms.uVelocity[0]=this._velocity.x,this.uniforms.uVelocity[1]=this._velocity.y,this.padding=(Math.max(Math.abs(this._velocity.x),Math.abs(this._velocity.y))>>0)+1},Object.defineProperty(t.prototype,"offset",{get:function(){return this.uniforms.uOffset},set:function(e){this.uniforms.uOffset=e},enumerable:!1,configurable:!0}),t})(C);var vt=function(e,t){return vt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},vt(e,t)};function yt(e,t){vt(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var bt=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,xt=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform float epsilon;

const int MAX_COLORS = %maxColors%;

uniform vec3 originalColors[MAX_COLORS];
uniform vec3 targetColors[MAX_COLORS];

void main(void)
{
    gl_FragColor = texture2D(uSampler, vTextureCoord);

    float alpha = gl_FragColor.a;
    if (alpha < 0.0001)
    {
      return;
    }

    vec3 color = gl_FragColor.rgb / alpha;

    for(int i = 0; i < MAX_COLORS; i++)
    {
      vec3 origColor = originalColors[i];
      if (origColor.r < 0.0)
      {
        break;
      }
      vec3 colorDiff = origColor - color;
      if (length(colorDiff) < epsilon)
      {
        vec3 targetColor = targetColors[i];
        gl_FragColor = vec4((targetColor + colorDiff) * alpha, alpha);
        return;
      }
    }
}
`;(function(e){yt(t,e);function t(t,n,r){n===void 0&&(n=.05),r===void 0&&(r=t.length);var i=e.call(this,bt,xt.replace(/%maxColors%/g,r.toFixed(0)))||this;return i._replacements=[],i._maxColors=0,i.epsilon=n,i._maxColors=r,i.uniforms.originalColors=new Float32Array(r*3),i.uniforms.targetColors=new Float32Array(r*3),i.replacements=t,i}return Object.defineProperty(t.prototype,"replacements",{get:function(){return this._replacements},set:function(e){var t=this.uniforms.originalColors,n=this.uniforms.targetColors,r=e.length;if(r>this._maxColors)throw Error(`Length of replacements (`+r+`) exceeds the maximum colors length (`+this._maxColors+`)`);t[r*3]=-1;for(var i=0;i<r;i++){var a=e[i],o=a[0];typeof o==`number`?o=b(o):a[0]=v(o),t[i*3]=o[0],t[i*3+1]=o[1],t[i*3+2]=o[2];var s=a[1];typeof s==`number`?s=b(s):a[1]=v(s),n[i*3]=s[0],n[i*3+1]=s[1],n[i*3+2]=s[2]}this._replacements=e},enumerable:!1,configurable:!0}),t.prototype.refresh=function(){this.replacements=this._replacements},Object.defineProperty(t.prototype,"maxColors",{get:function(){return this._maxColors},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"epsilon",{get:function(){return this.uniforms.epsilon},set:function(e){this.uniforms.epsilon=e},enumerable:!1,configurable:!0}),t})(C);var St=function(e,t){return St=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},St(e,t)};function Ct(e,t){St(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var wt=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Tt=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;
uniform vec2 dimensions;

uniform float sepia;
uniform float noise;
uniform float noiseSize;
uniform float scratch;
uniform float scratchDensity;
uniform float scratchWidth;
uniform float vignetting;
uniform float vignettingAlpha;
uniform float vignettingBlur;
uniform float seed;

const float SQRT_2 = 1.414213;
const vec3 SEPIA_RGB = vec3(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

vec3 Overlay(vec3 src, vec3 dst)
{
    // if (dst <= 0.5) then: 2 * src * dst
    // if (dst > 0.5) then: 1 - 2 * (1 - dst) * (1 - src)
    return vec3((dst.x <= 0.5) ? (2.0 * src.x * dst.x) : (1.0 - 2.0 * (1.0 - dst.x) * (1.0 - src.x)),
                (dst.y <= 0.5) ? (2.0 * src.y * dst.y) : (1.0 - 2.0 * (1.0 - dst.y) * (1.0 - src.y)),
                (dst.z <= 0.5) ? (2.0 * src.z * dst.z) : (1.0 - 2.0 * (1.0 - dst.z) * (1.0 - src.z)));
}


void main()
{
    gl_FragColor = texture2D(uSampler, vTextureCoord);
    vec3 color = gl_FragColor.rgb;

    if (sepia > 0.0)
    {
        float gray = (color.x + color.y + color.z) / 3.0;
        vec3 grayscale = vec3(gray);

        color = Overlay(SEPIA_RGB, grayscale);

        color = grayscale + sepia * (color - grayscale);
    }

    vec2 coord = vTextureCoord * filterArea.xy / dimensions.xy;

    if (vignetting > 0.0)
    {
        float outter = SQRT_2 - vignetting * SQRT_2;
        vec2 dir = vec2(vec2(0.5, 0.5) - coord);
        dir.y *= dimensions.y / dimensions.x;
        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignettingBlur * SQRT_2), 0.0, 1.0);
        color.rgb *= darker + (1.0 - darker) * (1.0 - vignettingAlpha);
    }

    if (scratchDensity > seed && scratch != 0.0)
    {
        float phase = seed * 256.0;
        float s = mod(floor(phase), 2.0);
        float dist = 1.0 / scratchDensity;
        float d = distance(coord, vec2(seed * dist, abs(s - seed * dist)));
        if (d < seed * 0.6 + 0.4)
        {
            highp float period = scratchDensity * 10.0;

            float xx = coord.x * period + phase;
            float aa = abs(mod(xx, 0.5) * 4.0);
            float bb = mod(floor(xx / 0.5), 2.0);
            float yy = (1.0 - bb) * aa + bb * (2.0 - aa);

            float kk = 2.0 * period;
            float dw = scratchWidth / dimensions.x * (0.75 + seed);
            float dh = dw * kk;

            float tine = (yy - (2.0 - dh));

            if (tine > 0.0) {
                float _sign = sign(scratch);

                tine = s * tine / period + scratch + 0.1;
                tine = clamp(tine + 1.0, 0.5 + _sign * 0.5, 1.5 + _sign * 0.5);

                color.rgb *= tine;
            }
        }
    }

    if (noise > 0.0 && noiseSize > 0.0)
    {
        vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;
        pixelCoord.x = floor(pixelCoord.x / noiseSize);
        pixelCoord.y = floor(pixelCoord.y / noiseSize);
        // vec2 d = pixelCoord * noiseSize * vec2(1024.0 + seed * 512.0, 1024.0 - seed * 512.0);
        // float _noise = snoise(d) * 0.5;
        float _noise = rand(pixelCoord * noiseSize * seed) - 0.5;
        color += _noise * noise;
    }

    gl_FragColor.rgb = color;
}
`;(function(e){Ct(t,e);function t(n,r){r===void 0&&(r=0);var i=e.call(this,wt,Tt)||this;return i.seed=0,i.uniforms.dimensions=new Float32Array(2),typeof n==`number`?(i.seed=n,n=void 0):i.seed=r,Object.assign(i,t.defaults,n),i}return t.prototype.apply=function(e,t,n,r){this.uniforms.dimensions[0]=t.filterFrame?.width,this.uniforms.dimensions[1]=t.filterFrame?.height,this.uniforms.seed=this.seed,e.applyFilter(this,t,n,r)},Object.defineProperty(t.prototype,"sepia",{get:function(){return this.uniforms.sepia},set:function(e){this.uniforms.sepia=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"noise",{get:function(){return this.uniforms.noise},set:function(e){this.uniforms.noise=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"noiseSize",{get:function(){return this.uniforms.noiseSize},set:function(e){this.uniforms.noiseSize=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"scratch",{get:function(){return this.uniforms.scratch},set:function(e){this.uniforms.scratch=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"scratchDensity",{get:function(){return this.uniforms.scratchDensity},set:function(e){this.uniforms.scratchDensity=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"scratchWidth",{get:function(){return this.uniforms.scratchWidth},set:function(e){this.uniforms.scratchWidth=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"vignetting",{get:function(){return this.uniforms.vignetting},set:function(e){this.uniforms.vignetting=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"vignettingAlpha",{get:function(){return this.uniforms.vignettingAlpha},set:function(e){this.uniforms.vignettingAlpha=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"vignettingBlur",{get:function(){return this.uniforms.vignettingBlur},set:function(e){this.uniforms.vignettingBlur=e},enumerable:!1,configurable:!0}),t.defaults={sepia:.3,noise:.3,noiseSize:1,scratch:.5,scratchDensity:.3,scratchWidth:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3},t})(C);var Et=function(e,t){return Et=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},Et(e,t)};function Dt(e,t){Et(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var Ot=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,kt=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec2 thickness;
uniform vec4 outlineColor;
uniform vec4 filterClamp;

const float DOUBLE_PI = 3.14159265358979323846264 * 2.;

void main(void) {
    vec4 ownColor = texture2D(uSampler, vTextureCoord);
    vec4 curColor;
    float maxAlpha = 0.;
    vec2 displaced;
    for (float angle = 0.; angle <= DOUBLE_PI; angle += \${angleStep}) {
        displaced.x = vTextureCoord.x + thickness.x * cos(angle);
        displaced.y = vTextureCoord.y + thickness.y * sin(angle);
        curColor = texture2D(uSampler, clamp(displaced, filterClamp.xy, filterClamp.zw));
        maxAlpha = max(maxAlpha, curColor.a);
    }
    float resultAlpha = max(maxAlpha, ownColor.a);
    gl_FragColor = vec4((ownColor.rgb + outlineColor.rgb * (1. - ownColor.a)) * resultAlpha, resultAlpha);
}
`;(function(e){Dt(t,e);function t(n,r,i){n===void 0&&(n=1),r===void 0&&(r=0),i===void 0&&(i=.1);var a=e.call(this,Ot,kt.replace(/\$\{angleStep\}/,t.getAngleStep(i)))||this;return a._thickness=1,a.uniforms.thickness=new Float32Array([0,0]),a.uniforms.outlineColor=new Float32Array([0,0,0,1]),Object.assign(a,{thickness:n,color:r,quality:i}),a}return t.getAngleStep=function(e){var n=Math.max(e*t.MAX_SAMPLES,t.MIN_SAMPLES);return(Math.PI*2/n).toFixed(7)},t.prototype.apply=function(e,t,n,r){this.uniforms.thickness[0]=this._thickness/t._frame.width,this.uniforms.thickness[1]=this._thickness/t._frame.height,e.applyFilter(this,t,n,r)},Object.defineProperty(t.prototype,"color",{get:function(){return v(this.uniforms.outlineColor)},set:function(e){b(e,this.uniforms.outlineColor)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"thickness",{get:function(){return this._thickness},set:function(e){this._thickness=e,this.padding=e},enumerable:!1,configurable:!0}),t.MIN_SAMPLES=1,t.MAX_SAMPLES=100,t})(C);var At=function(e,t){return At=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},At(e,t)};function jt(e,t){At(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var Mt=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Nt=`precision mediump float;

varying vec2 vTextureCoord;

uniform vec2 size;
uniform sampler2D uSampler;

uniform vec4 filterArea;

vec2 mapCoord( vec2 coord )
{
    coord *= filterArea.xy;
    coord += filterArea.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= filterArea.zw;
    coord /= filterArea.xy;

    return coord;
}

vec2 pixelate(vec2 coord, vec2 size)
{
	return floor( coord / size ) * size;
}

void main(void)
{
    vec2 coord = mapCoord(vTextureCoord);

    coord = pixelate(coord, size);

    coord = unmapCoord(coord);

    gl_FragColor = texture2D(uSampler, coord);
}
`;(function(e){jt(t,e);function t(t){t===void 0&&(t=10);var n=e.call(this,Mt,Nt)||this;return n.size=t,n}return Object.defineProperty(t.prototype,"size",{get:function(){return this.uniforms.size},set:function(e){typeof e==`number`&&(e=[e,e]),this.uniforms.size=e},enumerable:!1,configurable:!0}),t})(C);var Pt=function(e,t){return Pt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},Pt(e,t)};function Ft(e,t){Pt(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var It=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Lt=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;

uniform float uRadian;
uniform vec2 uCenter;
uniform float uRadius;
uniform int uKernelSize;

const int MAX_KERNEL_SIZE = 2048;

void main(void)
{
    vec4 color = texture2D(uSampler, vTextureCoord);

    if (uKernelSize == 0)
    {
        gl_FragColor = color;
        return;
    }

    float aspect = filterArea.y / filterArea.x;
    vec2 center = uCenter.xy / filterArea.xy;
    float gradient = uRadius / filterArea.x * 0.3;
    float radius = uRadius / filterArea.x - gradient * 0.5;
    int k = uKernelSize - 1;

    vec2 coord = vTextureCoord;
    vec2 dir = vec2(center - coord);
    float dist = length(vec2(dir.x, dir.y * aspect));

    float radianStep = uRadian;
    if (radius >= 0.0 && dist > radius) {
        float delta = dist - radius;
        float gap = gradient;
        float scale = 1.0 - abs(delta / gap);
        if (scale <= 0.0) {
            gl_FragColor = color;
            return;
        }
        radianStep *= scale;
    }
    radianStep /= float(k);

    float s = sin(radianStep);
    float c = cos(radianStep);
    mat2 rotationMatrix = mat2(vec2(c, -s), vec2(s, c));

    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {
        if (i == k) {
            break;
        }

        coord -= center;
        coord.y *= aspect;
        coord = rotationMatrix * coord;
        coord.y /= aspect;
        coord += center;

        vec4 sample = texture2D(uSampler, coord);

        // switch to pre-multiplied alpha to correctly blur transparent images
        // sample.rgb *= sample.a;

        color += sample;
    }

    gl_FragColor = color / float(uKernelSize);
}
`;(function(e){Ft(t,e);function t(t,n,r,i){t===void 0&&(t=0),n===void 0&&(n=[0,0]),r===void 0&&(r=5),i===void 0&&(i=-1);var a=e.call(this,It,Lt)||this;return a._angle=0,a.angle=t,a.center=n,a.kernelSize=r,a.radius=i,a}return t.prototype.apply=function(e,t,n,r){this.uniforms.uKernelSize=this._angle===0?0:this.kernelSize,e.applyFilter(this,t,n,r)},Object.defineProperty(t.prototype,"angle",{get:function(){return this._angle},set:function(e){this._angle=e,this.uniforms.uRadian=e*Math.PI/180},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"center",{get:function(){return this.uniforms.uCenter},set:function(e){this.uniforms.uCenter=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"radius",{get:function(){return this.uniforms.uRadius},set:function(e){(e<0||e===1/0)&&(e=-1),this.uniforms.uRadius=e},enumerable:!1,configurable:!0}),t})(C);var Rt=function(e,t){return Rt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},Rt(e,t)};function zt(e,t){Rt(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var Bt=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Vt=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec4 filterArea;
uniform vec4 filterClamp;
uniform vec2 dimensions;

uniform bool mirror;
uniform float boundary;
uniform vec2 amplitude;
uniform vec2 waveLength;
uniform vec2 alpha;
uniform float time;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main(void)
{
    vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;
    vec2 coord = pixelCoord / dimensions;

    if (coord.y < boundary) {
        gl_FragColor = texture2D(uSampler, vTextureCoord);
        return;
    }

    float k = (coord.y - boundary) / (1. - boundary + 0.0001);
    float areaY = boundary * dimensions.y / filterArea.y;
    float v = areaY + areaY - vTextureCoord.y;
    float y = mirror ? v : vTextureCoord.y;

    float _amplitude = ((amplitude.y - amplitude.x) * k + amplitude.x ) / filterArea.x;
    float _waveLength = ((waveLength.y - waveLength.x) * k + waveLength.x) / filterArea.y;
    float _alpha = (alpha.y - alpha.x) * k + alpha.x;

    float x = vTextureCoord.x + cos(v * 6.28 / _waveLength - time) * _amplitude;
    x = clamp(x, filterClamp.x, filterClamp.z);

    vec4 color = texture2D(uSampler, vec2(x, y));

    gl_FragColor = color * _alpha;
}
`;(function(e){zt(t,e);function t(n){var r=e.call(this,Bt,Vt)||this;return r.time=0,r.uniforms.amplitude=new Float32Array(2),r.uniforms.waveLength=new Float32Array(2),r.uniforms.alpha=new Float32Array(2),r.uniforms.dimensions=new Float32Array(2),Object.assign(r,t.defaults,n),r}return t.prototype.apply=function(e,t,n,r){this.uniforms.dimensions[0]=t.filterFrame?.width,this.uniforms.dimensions[1]=t.filterFrame?.height,this.uniforms.time=this.time,e.applyFilter(this,t,n,r)},Object.defineProperty(t.prototype,"mirror",{get:function(){return this.uniforms.mirror},set:function(e){this.uniforms.mirror=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"boundary",{get:function(){return this.uniforms.boundary},set:function(e){this.uniforms.boundary=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"amplitude",{get:function(){return this.uniforms.amplitude},set:function(e){this.uniforms.amplitude[0]=e[0],this.uniforms.amplitude[1]=e[1]},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"waveLength",{get:function(){return this.uniforms.waveLength},set:function(e){this.uniforms.waveLength[0]=e[0],this.uniforms.waveLength[1]=e[1]},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"alpha",{get:function(){return this.uniforms.alpha},set:function(e){this.uniforms.alpha[0]=e[0],this.uniforms.alpha[1]=e[1]},enumerable:!1,configurable:!0}),t.defaults={mirror:!0,boundary:.5,amplitude:[0,20],waveLength:[30,100],alpha:[1,1],time:0},t})(C);var Ht=function(e,t){return Ht=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},Ht(e,t)};function Ut(e,t){Ht(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var Wt=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Gt=`precision mediump float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 filterArea;
uniform vec2 red;
uniform vec2 green;
uniform vec2 blue;

void main(void)
{
   gl_FragColor.r = texture2D(uSampler, vTextureCoord + red/filterArea.xy).r;
   gl_FragColor.g = texture2D(uSampler, vTextureCoord + green/filterArea.xy).g;
   gl_FragColor.b = texture2D(uSampler, vTextureCoord + blue/filterArea.xy).b;
   gl_FragColor.a = texture2D(uSampler, vTextureCoord).a;
}
`;(function(e){Ut(t,e);function t(t,n,r){t===void 0&&(t=[-10,0]),n===void 0&&(n=[0,10]),r===void 0&&(r=[0,0]);var i=e.call(this,Wt,Gt)||this;return i.red=t,i.green=n,i.blue=r,i}return Object.defineProperty(t.prototype,"red",{get:function(){return this.uniforms.red},set:function(e){this.uniforms.red=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"green",{get:function(){return this.uniforms.green},set:function(e){this.uniforms.green=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"blue",{get:function(){return this.uniforms.blue},set:function(e){this.uniforms.blue=e},enumerable:!1,configurable:!0}),t})(C);var Kt=function(e,t){return Kt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},Kt(e,t)};function qt(e,t){Kt(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var Jt=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Yt=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;
uniform vec4 filterClamp;

uniform vec2 center;

uniform float amplitude;
uniform float wavelength;
// uniform float power;
uniform float brightness;
uniform float speed;
uniform float radius;

uniform float time;

const float PI = 3.14159;

void main()
{
    float halfWavelength = wavelength * 0.5 / filterArea.x;
    float maxRadius = radius / filterArea.x;
    float currentRadius = time * speed / filterArea.x;

    float fade = 1.0;

    if (maxRadius > 0.0) {
        if (currentRadius > maxRadius) {
            gl_FragColor = texture2D(uSampler, vTextureCoord);
            return;
        }
        fade = 1.0 - pow(currentRadius / maxRadius, 2.0);
    }

    vec2 dir = vec2(vTextureCoord - center / filterArea.xy);
    dir.y *= filterArea.y / filterArea.x;
    float dist = length(dir);

    if (dist <= 0.0 || dist < currentRadius - halfWavelength || dist > currentRadius + halfWavelength) {
        gl_FragColor = texture2D(uSampler, vTextureCoord);
        return;
    }

    vec2 diffUV = normalize(dir);

    float diff = (dist - currentRadius) / halfWavelength;

    float p = 1.0 - pow(abs(diff), 2.0);

    // float powDiff = diff * pow(p, 2.0) * ( amplitude * fade );
    float powDiff = 1.25 * sin(diff * PI) * p * ( amplitude * fade );

    vec2 offset = diffUV * powDiff / filterArea.xy;

    // Do clamp :
    vec2 coord = vTextureCoord + offset;
    vec2 clampedCoord = clamp(coord, filterClamp.xy, filterClamp.zw);
    vec4 color = texture2D(uSampler, clampedCoord);
    if (coord != clampedCoord) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    // No clamp :
    // gl_FragColor = texture2D(uSampler, vTextureCoord + offset);

    color.rgb *= 1.0 + (brightness - 1.0) * p * fade;

    gl_FragColor = color;
}
`;(function(e){qt(t,e);function t(n,r,i){n===void 0&&(n=[0,0]),i===void 0&&(i=0);var a=e.call(this,Jt,Yt)||this;return a.center=n,Object.assign(a,t.defaults,r),a.time=i,a}return t.prototype.apply=function(e,t,n,r){this.uniforms.time=this.time,e.applyFilter(this,t,n,r)},Object.defineProperty(t.prototype,"center",{get:function(){return this.uniforms.center},set:function(e){this.uniforms.center=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"amplitude",{get:function(){return this.uniforms.amplitude},set:function(e){this.uniforms.amplitude=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"wavelength",{get:function(){return this.uniforms.wavelength},set:function(e){this.uniforms.wavelength=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"brightness",{get:function(){return this.uniforms.brightness},set:function(e){this.uniforms.brightness=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"speed",{get:function(){return this.uniforms.speed},set:function(e){this.uniforms.speed=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"radius",{get:function(){return this.uniforms.radius},set:function(e){this.uniforms.radius=e},enumerable:!1,configurable:!0}),t.defaults={amplitude:30,wavelength:160,brightness:1,speed:500,radius:-1},t})(C);var Xt=function(e,t){return Xt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},Xt(e,t)};function Zt(e,t){Xt(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var Qt=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,$t=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform sampler2D uLightmap;
uniform vec4 filterArea;
uniform vec2 dimensions;
uniform vec4 ambientColor;
void main() {
    vec4 diffuseColor = texture2D(uSampler, vTextureCoord);
    vec2 lightCoord = (vTextureCoord * filterArea.xy) / dimensions;
    vec4 light = texture2D(uLightmap, lightCoord);
    vec3 ambient = ambientColor.rgb * ambientColor.a;
    vec3 intensity = ambient + light.rgb;
    vec3 finalColor = diffuseColor.rgb * intensity;
    gl_FragColor = vec4(finalColor, diffuseColor.a);
}
`;(function(e){Zt(t,e);function t(t,n,r){n===void 0&&(n=0),r===void 0&&(r=1);var i=e.call(this,Qt,$t)||this;return i._color=0,i.uniforms.dimensions=new Float32Array(2),i.uniforms.ambientColor=new Float32Array([0,0,0,r]),i.texture=t,i.color=n,i}return t.prototype.apply=function(e,t,n,r){this.uniforms.dimensions[0]=t.filterFrame?.width,this.uniforms.dimensions[1]=t.filterFrame?.height,e.applyFilter(this,t,n,r)},Object.defineProperty(t.prototype,"texture",{get:function(){return this.uniforms.uLightmap},set:function(e){this.uniforms.uLightmap=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"color",{get:function(){return this._color},set:function(e){var t=this.uniforms.ambientColor;typeof e==`number`?(b(e,t),this._color=e):(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],this._color=v(t))},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"alpha",{get:function(){return this.uniforms.ambientColor[3]},set:function(e){this.uniforms.ambientColor[3]=e},enumerable:!1,configurable:!0}),t})(C);var en=function(e,t){return en=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},en(e,t)};function tn(e,t){en(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var nn=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,rn=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float blur;
uniform float gradientBlur;
uniform vec2 start;
uniform vec2 end;
uniform vec2 delta;
uniform vec2 texSize;

float random(vec3 scale, float seed)
{
    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);
}

void main(void)
{
    vec4 color = vec4(0.0);
    float total = 0.0;

    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);
    vec2 normal = normalize(vec2(start.y - end.y, end.x - start.x));
    float radius = smoothstep(0.0, 1.0, abs(dot(vTextureCoord * texSize - start, normal)) / gradientBlur) * blur;

    for (float t = -30.0; t <= 30.0; t++)
    {
        float percent = (t + offset - 0.5) / 30.0;
        float weight = 1.0 - abs(percent);
        vec4 sample = texture2D(uSampler, vTextureCoord + delta / texSize * percent * radius);
        sample.rgb *= sample.a;
        color += sample * weight;
        total += weight;
    }

    color /= total;
    color.rgb /= color.a + 0.00001;

    gl_FragColor = color;
}
`,an=function(e){tn(t,e);function t(t,n,r,i){t===void 0&&(t=100),n===void 0&&(n=600);var a=e.call(this,nn,rn)||this;return a.uniforms.blur=t,a.uniforms.gradientBlur=n,a.uniforms.start=r||new S(0,window.innerHeight/2),a.uniforms.end=i||new S(600,window.innerHeight/2),a.uniforms.delta=new S(30,30),a.uniforms.texSize=new S(window.innerWidth,window.innerHeight),a.updateDelta(),a}return t.prototype.updateDelta=function(){this.uniforms.delta.x=0,this.uniforms.delta.y=0},Object.defineProperty(t.prototype,"blur",{get:function(){return this.uniforms.blur},set:function(e){this.uniforms.blur=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"gradientBlur",{get:function(){return this.uniforms.gradientBlur},set:function(e){this.uniforms.gradientBlur=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"start",{get:function(){return this.uniforms.start},set:function(e){this.uniforms.start=e,this.updateDelta()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"end",{get:function(){return this.uniforms.end},set:function(e){this.uniforms.end=e,this.updateDelta()},enumerable:!1,configurable:!0}),t}(C),on=function(e){tn(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.updateDelta=function(){var e=this.uniforms.end.x-this.uniforms.start.x,t=this.uniforms.end.y-this.uniforms.start.y,n=Math.sqrt(e*e+t*t);this.uniforms.delta.x=e/n,this.uniforms.delta.y=t/n},t}(an),sn=function(e){tn(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.updateDelta=function(){var e=this.uniforms.end.x-this.uniforms.start.x,t=this.uniforms.end.y-this.uniforms.start.y,n=Math.sqrt(e*e+t*t);this.uniforms.delta.x=-t/n,this.uniforms.delta.y=e/n},t}(an);(function(e){tn(t,e);function t(t,n,r,i){t===void 0&&(t=100),n===void 0&&(n=600);var a=e.call(this)||this;return a.tiltShiftXFilter=new on(t,n,r,i),a.tiltShiftYFilter=new sn(t,n,r,i),a}return t.prototype.apply=function(e,t,n,r){var i=e.getFilterTexture();this.tiltShiftXFilter.apply(e,t,i,1),this.tiltShiftYFilter.apply(e,i,n,r),e.returnFilterTexture(i)},Object.defineProperty(t.prototype,"blur",{get:function(){return this.tiltShiftXFilter.blur},set:function(e){this.tiltShiftXFilter.blur=this.tiltShiftYFilter.blur=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"gradientBlur",{get:function(){return this.tiltShiftXFilter.gradientBlur},set:function(e){this.tiltShiftXFilter.gradientBlur=this.tiltShiftYFilter.gradientBlur=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"start",{get:function(){return this.tiltShiftXFilter.start},set:function(e){this.tiltShiftXFilter.start=this.tiltShiftYFilter.start=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"end",{get:function(){return this.tiltShiftXFilter.end},set:function(e){this.tiltShiftXFilter.end=this.tiltShiftYFilter.end=e},enumerable:!1,configurable:!0}),t})(C);var cn=function(e,t){return cn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},cn(e,t)};function ln(e,t){cn(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var un=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,dn=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float radius;
uniform float angle;
uniform vec2 offset;
uniform vec4 filterArea;

vec2 mapCoord( vec2 coord )
{
    coord *= filterArea.xy;
    coord += filterArea.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= filterArea.zw;
    coord /= filterArea.xy;

    return coord;
}

vec2 twist(vec2 coord)
{
    coord -= offset;

    float dist = length(coord);

    if (dist < radius)
    {
        float ratioDist = (radius - dist) / radius;
        float angleMod = ratioDist * ratioDist * angle;
        float s = sin(angleMod);
        float c = cos(angleMod);
        coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);
    }

    coord += offset;

    return coord;
}

void main(void)
{

    vec2 coord = mapCoord(vTextureCoord);

    coord = twist(coord);

    coord = unmapCoord(coord);

    gl_FragColor = texture2D(uSampler, coord );

}
`;(function(e){ln(t,e);function t(n){var r=e.call(this,un,dn)||this;return Object.assign(r,t.defaults,n),r}return Object.defineProperty(t.prototype,"offset",{get:function(){return this.uniforms.offset},set:function(e){this.uniforms.offset=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"radius",{get:function(){return this.uniforms.radius},set:function(e){this.uniforms.radius=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"angle",{get:function(){return this.uniforms.angle},set:function(e){this.uniforms.angle=e},enumerable:!1,configurable:!0}),t.defaults={radius:200,angle:4,padding:20,offset:new S},t})(C);var fn=function(e,t){return fn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},fn(e,t)};function pn(e,t){fn(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}function mn(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols==`function`)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}var hn=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,gn=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;

uniform vec2 uCenter;
uniform float uStrength;
uniform float uInnerRadius;
uniform float uRadius;

const float MAX_KERNEL_SIZE = \${maxKernelSize};

// author: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
highp float rand(vec2 co, float seed) {
    const highp float a = 12.9898, b = 78.233, c = 43758.5453;
    highp float dt = dot(co + seed, vec2(a, b)), sn = mod(dt, 3.14159);
    return fract(sin(sn) * c + seed);
}

void main() {

    float minGradient = uInnerRadius * 0.3;
    float innerRadius = (uInnerRadius + minGradient * 0.5) / filterArea.x;

    float gradient = uRadius * 0.3;
    float radius = (uRadius - gradient * 0.5) / filterArea.x;

    float countLimit = MAX_KERNEL_SIZE;

    vec2 dir = vec2(uCenter.xy / filterArea.xy - vTextureCoord);
    float dist = length(vec2(dir.x, dir.y * filterArea.y / filterArea.x));

    float strength = uStrength;

    float delta = 0.0;
    float gap;
    if (dist < innerRadius) {
        delta = innerRadius - dist;
        gap = minGradient;
    } else if (radius >= 0.0 && dist > radius) { // radius < 0 means it's infinity
        delta = dist - radius;
        gap = gradient;
    }

    if (delta > 0.0) {
        float normalCount = gap / filterArea.x;
        delta = (normalCount - delta) / normalCount;
        countLimit *= delta;
        strength *= delta;
        if (countLimit < 1.0)
        {
            gl_FragColor = texture2D(uSampler, vTextureCoord);
            return;
        }
    }

    // randomize the lookup values to hide the fixed number of samples
    float offset = rand(vTextureCoord, 0.0);

    float total = 0.0;
    vec4 color = vec4(0.0);

    dir *= strength;

    for (float t = 0.0; t < MAX_KERNEL_SIZE; t++) {
        float percent = (t + offset) / MAX_KERNEL_SIZE;
        float weight = 4.0 * (percent - percent * percent);
        vec2 p = vTextureCoord + dir * percent;
        vec4 sample = texture2D(uSampler, p);

        // switch to pre-multiplied alpha to correctly blur transparent images
        // sample.rgb *= sample.a;

        color += sample * weight;
        total += weight;

        if (t > countLimit){
            break;
        }
    }

    color /= total;
    // switch back from pre-multiplied alpha
    // color.rgb /= color.a + 0.00001;

    gl_FragColor = color;
}
`;(function(e){pn(t,e);function t(n){var r=this,i=Object.assign(t.defaults,n),a=i.maxKernelSize,o=mn(i,[`maxKernelSize`]);return r=e.call(this,hn,gn.replace("${maxKernelSize}",a.toFixed(1)))||this,Object.assign(r,o),r}return Object.defineProperty(t.prototype,"center",{get:function(){return this.uniforms.uCenter},set:function(e){this.uniforms.uCenter=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"strength",{get:function(){return this.uniforms.uStrength},set:function(e){this.uniforms.uStrength=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"innerRadius",{get:function(){return this.uniforms.uInnerRadius},set:function(e){this.uniforms.uInnerRadius=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"radius",{get:function(){return this.uniforms.uRadius},set:function(e){(e<0||e===1/0)&&(e=-1),this.uniforms.uRadius=e},enumerable:!1,configurable:!0}),t.defaults={strength:.1,center:[0,0],innerRadius:0,radius:-1,maxKernelSize:32},t})(C);var _n=`/assets/worklet-Cz9xG9JO.mjs`,vn=`workletAnalyserProcessor`,yn={minBeatInterval:.2,sensitivity:.7,lowpassFilterFrequency:200,highpassFilterFrequency:30,envelopeFilterFrequency:12,warmup:!0,bufferDuration:4,adaptiveThreshold:!0,spectralFlux:!0};function bn(e){let{mode:t=`default`,onReport:n}=e,r=0,i=0,a=[];return{push:(e,o)=>{for(a.push([e,o]),r+=e,i+=o,t===`eager`&&i<60&&n?.(i===0?0:r/i*60,i,!1);i>=60;){if(a.length===0)throw Error(`Expected the bucket to be non-empty`);if(i-a[0][1]<1)break;let[e,t]=a.shift();r-=e,i-=t}n?.(i===0?0:r/i*60,i,i>60)},clear:()=>{i=0,r=0,a=[]}}}async function xn(e){let{context:t,worklet:n,listeners:r,workletParams:i,reportBPM:a}=e,o=!1;if(!t.audioWorklet)throw Error(`AudioWorklet is not supported in this context`);let s;a&&(s=bn(a)),await t.audioWorklet.addModule(n);let c=new AudioWorkletNode(t,vn,{channelCountMode:`max`,numberOfInputs:1,numberOfOutputs:1,outputChannelCount:[1]});c.port.onmessage=e=>{switch(e.data.type){case`beat`:{let{energy:t,interval:n}=e.data;s?.push(1,n),r?.onBeat?.({energy:t,interval:n});break}}};let l=(e,t=!1)=>{if(o)throw Error(`Analyser is already stopped`);c.port.postMessage({type:`parameters`,parameters:{...e},reset:t})};return i&&l(i),{workletNode:c,updateParameters:l,stop:()=>{o||(o=!0,c.disconnect(),c.port.postMessage({type:`stop`}),c.port.close(),s?.clear())}}}var Sn=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),Cn=Sn(((e,t)=>{let n=`[^\\\\/]`,r=`[^/]`,i=`(?:\\/|$)`,a=`(?:^|\\/)`,o=`\\.{1,2}${i}`,s={DOT_LITERAL:`\\.`,PLUS_LITERAL:`\\+`,QMARK_LITERAL:`\\?`,SLASH_LITERAL:`\\/`,ONE_CHAR:`(?=.)`,QMARK:r,END_ANCHOR:i,DOTS_SLASH:o,NO_DOT:`(?!\\.)`,NO_DOTS:`(?!${a}${o})`,NO_DOT_SLASH:`(?!\\.{0,1}${i})`,NO_DOTS_SLASH:`(?!${o})`,QMARK_NO_DOT:`[^.\\/]`,STAR:`${r}*?`,START_ANCHOR:a,SEP:`/`},c={...s,SLASH_LITERAL:`[\\\\/]`,QMARK:n,STAR:`${n}*?`,DOTS_SLASH:`\\.{1,2}(?:[\\\\/]|$)`,NO_DOT:`(?!\\.)`,NO_DOTS:`(?!(?:^|[\\\\/])\\.{1,2}(?:[\\\\/]|$))`,NO_DOT_SLASH:`(?!\\.{0,1}(?:[\\\\/]|$))`,NO_DOTS_SLASH:`(?!\\.{1,2}(?:[\\\\/]|$))`,QMARK_NO_DOT:`[^.\\\\/]`,START_ANCHOR:`(?:^|[\\\\/])`,END_ANCHOR:`(?:[\\\\/]|$)`,SEP:`\\`};t.exports={DEFAULT_MAX_EXTGLOB_RECURSION:0,MAX_LENGTH:65536,POSIX_REGEX_SOURCE:{__proto__:null,alnum:`a-zA-Z0-9`,alpha:`a-zA-Z`,ascii:`\\x00-\\x7F`,blank:` \\t`,cntrl:`\\x00-\\x1F\\x7F`,digit:`0-9`,graph:`\\x21-\\x7E`,lower:`a-z`,print:`\\x20-\\x7E `,punct:`\\-!"#$%&'()\\*+,./:;<=>?@[\\]^_\`{|}~`,space:` \\t\\r\\n\\v\\f`,upper:`A-Z`,word:`A-Za-z0-9_`,xdigit:`A-Fa-f0-9`},REGEX_BACKSLASH:/\\(?![*+?^${}(|)[\]])/g,REGEX_NON_SPECIAL_CHARS:/^[^@![\].,$*+?^{}()|\\/]+/,REGEX_SPECIAL_CHARS:/[-*+?.^${}(|)[\]]/,REGEX_SPECIAL_CHARS_BACKREF:/(\\?)((\W)(\3*))/g,REGEX_SPECIAL_CHARS_GLOBAL:/([-*+?.^${}(|)[\]])/g,REGEX_REMOVE_BACKSLASH:/(?:\[.*?[^\\]\]|\\(?=.))/g,REPLACEMENTS:{__proto__:null,"***":`*`,"**/**":`**`,"**/**/**":`**`},CHAR_0:48,CHAR_9:57,CHAR_UPPERCASE_A:65,CHAR_LOWERCASE_A:97,CHAR_UPPERCASE_Z:90,CHAR_LOWERCASE_Z:122,CHAR_LEFT_PARENTHESES:40,CHAR_RIGHT_PARENTHESES:41,CHAR_ASTERISK:42,CHAR_AMPERSAND:38,CHAR_AT:64,CHAR_BACKWARD_SLASH:92,CHAR_CARRIAGE_RETURN:13,CHAR_CIRCUMFLEX_ACCENT:94,CHAR_COLON:58,CHAR_COMMA:44,CHAR_DOT:46,CHAR_DOUBLE_QUOTE:34,CHAR_EQUAL:61,CHAR_EXCLAMATION_MARK:33,CHAR_FORM_FEED:12,CHAR_FORWARD_SLASH:47,CHAR_GRAVE_ACCENT:96,CHAR_HASH:35,CHAR_HYPHEN_MINUS:45,CHAR_LEFT_ANGLE_BRACKET:60,CHAR_LEFT_CURLY_BRACE:123,CHAR_LEFT_SQUARE_BRACKET:91,CHAR_LINE_FEED:10,CHAR_NO_BREAK_SPACE:160,CHAR_PERCENT:37,CHAR_PLUS:43,CHAR_QUESTION_MARK:63,CHAR_RIGHT_ANGLE_BRACKET:62,CHAR_RIGHT_CURLY_BRACE:125,CHAR_RIGHT_SQUARE_BRACKET:93,CHAR_SEMICOLON:59,CHAR_SINGLE_QUOTE:39,CHAR_SPACE:32,CHAR_TAB:9,CHAR_UNDERSCORE:95,CHAR_VERTICAL_LINE:124,CHAR_ZERO_WIDTH_NOBREAK_SPACE:65279,extglobChars(e){return{"!":{type:`negate`,open:`(?:(?!(?:`,close:`))${e.STAR})`},"?":{type:`qmark`,open:`(?:`,close:`)?`},"+":{type:`plus`,open:`(?:`,close:`)+`},"*":{type:`star`,open:`(?:`,close:`)*`},"@":{type:`at`,open:`(?:`,close:`)`}}},globChars(e){return e===!0?c:s}}}));Cn();var wn=Sn((e=>{let{REGEX_BACKSLASH:t,REGEX_REMOVE_BACKSLASH:n,REGEX_SPECIAL_CHARS:r,REGEX_SPECIAL_CHARS_GLOBAL:i}=Cn();e.isObject=e=>typeof e==`object`&&!!e&&!Array.isArray(e),e.hasRegexChars=e=>r.test(e),e.isRegexChar=t=>t.length===1&&e.hasRegexChars(t),e.escapeRegex=e=>e.replace(i,`\\$1`),e.toPosixSlashes=e=>e.replace(t,`/`),e.isWindows=()=>{if(typeof navigator<`u`&&navigator.platform){let e=navigator.platform.toLowerCase();return e===`win32`||e===`windows`}return typeof process<`u`&&process.platform?process.platform===`win32`:!1},e.removeBackslashes=e=>e.replace(n,e=>e===`\\`?``:e),e.escapeLast=(t,n,r)=>{let i=t.lastIndexOf(n,r);return i===-1?t:t[i-1]===`\\`?e.escapeLast(t,n,i-1):`${t.slice(0,i)}\\${t.slice(i)}`},e.removePrefix=(e,t={})=>{let n=e;return n.startsWith(`./`)&&(n=n.slice(2),t.prefix=`./`),n},e.wrapOutput=(e,t={},n={})=>{let r=`${n.contains?``:`^`}(?:${e})${n.contains?``:`$`}`;return t.negated===!0&&(r=`(?:^(?!${r}).*$)`),r},e.basename=(e,{windows:t}={})=>{let n=e.split(t?/[\\/]/:`/`),r=n[n.length-1];return r===``?n[n.length-2]:r}}));wn();var Tn=Sn(((e,t)=>{let n=wn(),{CHAR_ASTERISK:r,CHAR_AT:i,CHAR_BACKWARD_SLASH:a,CHAR_COMMA:o,CHAR_DOT:s,CHAR_EXCLAMATION_MARK:c,CHAR_FORWARD_SLASH:l,CHAR_LEFT_CURLY_BRACE:u,CHAR_LEFT_PARENTHESES:d,CHAR_LEFT_SQUARE_BRACKET:f,CHAR_PLUS:p,CHAR_QUESTION_MARK:m,CHAR_RIGHT_CURLY_BRACE:h,CHAR_RIGHT_PARENTHESES:g,CHAR_RIGHT_SQUARE_BRACKET:_}=Cn(),v=e=>e===l||e===a,y=e=>{e.isPrefix!==!0&&(e.depth=e.isGlobstar?1/0:1)};t.exports=(e,t)=>{let b=t||{},x=e.length-1,S=b.parts===!0||b.scanToEnd===!0,C=[],w=[],T=[],E=e,D=-1,O=0,k=0,A=!1,j=!1,M=!1,N=!1,ee=!1,P=!1,F=!1,I=!1,L=!1,R=!1,z=0,B,V,H={value:``,depth:0,isGlob:!1},U=()=>D>=x,W=()=>E.charCodeAt(D+1),G=()=>(B=V,E.charCodeAt(++D));for(;D<x;){V=G();let e;if(V===a){F=H.backslashes=!0,V=G(),V===u&&(P=!0);continue}if(P===!0||V===u){for(z++;U()!==!0&&(V=G());){if(V===a){F=H.backslashes=!0,G();continue}if(V===u){z++;continue}if(P!==!0&&V===s&&(V=G())===s){if(A=H.isBrace=!0,M=H.isGlob=!0,R=!0,S===!0)continue;break}if(P!==!0&&V===o){if(A=H.isBrace=!0,M=H.isGlob=!0,R=!0,S===!0)continue;break}if(V===h&&(z--,z===0)){P=!1,A=H.isBrace=!0,R=!0;break}}if(S===!0)continue;break}if(V===l){if(C.push(D),w.push(H),H={value:``,depth:0,isGlob:!1},R===!0)continue;if(B===s&&D===O+1){O+=2;continue}k=D+1;continue}if(b.noext!==!0&&(V===p||V===i||V===r||V===m||V===c)&&W()===d){if(M=H.isGlob=!0,N=H.isExtglob=!0,R=!0,V===c&&D===O&&(L=!0),S===!0){for(;U()!==!0&&(V=G());){if(V===a){F=H.backslashes=!0,V=G();continue}if(V===g){M=H.isGlob=!0,R=!0;break}}continue}break}if(V===r){if(B===r&&(ee=H.isGlobstar=!0),M=H.isGlob=!0,R=!0,S===!0)continue;break}if(V===m){if(M=H.isGlob=!0,R=!0,S===!0)continue;break}if(V===f){for(;U()!==!0&&(e=G());){if(e===a){F=H.backslashes=!0,G();continue}if(e===_){j=H.isBracket=!0,M=H.isGlob=!0,R=!0;break}}if(S===!0)continue;break}if(b.nonegate!==!0&&V===c&&D===O){I=H.negated=!0,O++;continue}if(b.noparen!==!0&&V===d){if(M=H.isGlob=!0,S===!0){for(;U()!==!0&&(V=G());){if(V===d){F=H.backslashes=!0,V=G();continue}if(V===g){R=!0;break}}continue}break}if(M===!0){if(R=!0,S===!0)continue;break}}b.noext===!0&&(N=!1,M=!1);let K=E,q=``,J=``;O>0&&(q=E.slice(0,O),E=E.slice(O),k-=O),K&&M===!0&&k>0?(K=E.slice(0,k),J=E.slice(k)):M===!0?(K=``,J=E):K=E,K&&K!==``&&K!==`/`&&K!==E&&v(K.charCodeAt(K.length-1))&&(K=K.slice(0,-1)),b.unescape===!0&&(J&&=n.removeBackslashes(J),K&&F===!0&&(K=n.removeBackslashes(K)));let Y={prefix:q,input:e,start:O,base:K,glob:J,isBrace:A,isBracket:j,isGlob:M,isExtglob:N,isGlobstar:ee,negated:I,negatedExtglob:L};if(b.tokens===!0&&(Y.maxDepth=0,v(V)||w.push(H),Y.tokens=w),b.parts===!0||b.tokens===!0){let t;for(let n=0;n<C.length;n++){let r=t?t+1:O,i=C[n],a=e.slice(r,i);b.tokens&&(n===0&&O!==0?(w[n].isPrefix=!0,w[n].value=q):w[n].value=a,y(w[n]),Y.maxDepth+=w[n].depth),(n!==0||a!==``)&&T.push(a),t=i}if(t&&t+1<e.length){let n=e.slice(t+1);T.push(n),b.tokens&&(w[w.length-1].value=n,y(w[w.length-1]),Y.maxDepth+=w[w.length-1].depth)}Y.slashes=C,Y.parts=T}return Y}}));Tn();var En=Sn(((e,t)=>{let n=Cn(),r=wn(),{MAX_LENGTH:i,POSIX_REGEX_SOURCE:a,REGEX_NON_SPECIAL_CHARS:o,REGEX_SPECIAL_CHARS_BACKREF:s,REPLACEMENTS:c}=n,l=(e,t)=>{if(typeof t.expandRange==`function`)return t.expandRange(...e,t);e.sort();let n=`[${e.join(`-`)}]`;try{new RegExp(n)}catch{return e.map(e=>r.escapeRegex(e)).join(`..`)}return n},u=(e,t)=>`Missing ${e}: "${t}" - use "\\\\${t}" to match literal characters`,d=e=>{let t=[],n=0,r=0,i=0,a=``,o=!1;for(let s of e){if(o===!0){a+=s,o=!1;continue}if(s===`\\`){a+=s,o=!0;continue}if(s===`"`){i=i===1?0:1,a+=s;continue}if(i===0){if(s===`[`)n++;else if(s===`]`&&n>0)n--;else if(n===0){if(s===`(`)r++;else if(s===`)`&&r>0)r--;else if(s===`|`&&r===0){t.push(a),a=``;continue}}}a+=s}return t.push(a),t},f=e=>{let t=!1;for(let n of e){if(t===!0){t=!1;continue}if(n===`\\`){t=!0;continue}if(/[?*+@!()[\]{}]/.test(n))return!1}return!0},p=e=>{let t=e.trim(),n=!0;for(;n===!0;)n=!1,/^@\([^\\()[\]{}|]+\)$/.test(t)&&(t=t.slice(2,-1),n=!0);if(f(t))return t.replace(/\\(.)/g,`$1`)},m=e=>{let t=e.map(p).filter(Boolean);for(let e=0;e<t.length;e++)for(let n=e+1;n<t.length;n++){let r=t[e],i=t[n],a=r[0];if(!(!a||r!==a.repeat(r.length)||i!==a.repeat(i.length))&&(r===i||r.startsWith(i)||i.startsWith(r)))return!0}return!1},h=(e,t=!0)=>{if(e[0]!==`+`&&e[0]!==`*`||e[1]!==`(`)return;let n=0,r=0,i=0,a=!1;for(let o=1;o<e.length;o++){let s=e[o];if(a===!0){a=!1;continue}if(s===`\\`){a=!0;continue}if(s===`"`){i=i===1?0:1;continue}if(i!==1){if(s===`[`){n++;continue}if(s===`]`&&n>0){n--;continue}if(!(n>0)){if(s===`(`){r++;continue}if(s===`)`&&(r--,r===0))return t===!0&&o!==e.length-1?void 0:{type:e[0],body:e.slice(2,o),end:o}}}}},g=e=>`${e.length===1?r.escapeRegex(e[0]):`[${e.map(e=>r.escapeRegex(e)).join(``)}]`}*`,_=e=>{let t=0,n=[];for(;t<e.length;){let r=h(e.slice(t),!1);if(!r||r.type!==`*`)return;let i=d(r.body).map(e=>e.trim());if(i.length!==1)return;let a=p(i[0]);if(!a||a.length!==1)return;n.push(a),t+=r.end+1}if(!(n.length<1))return n},v=e=>{let t=0,n=e.trim(),r=h(n);for(;r;)t++,n=r.body.trim(),r=h(n);return t},y=(e,t)=>{if(t.maxExtglobRecursion===!1)return{risky:!1};let r=typeof t.maxExtglobRecursion==`number`?t.maxExtglobRecursion:n.DEFAULT_MAX_EXTGLOB_RECURSION,i=d(e).map(e=>e.trim());if(i.length>1&&(i.some(e=>e===``)||i.some(e=>/^[*?]+$/.test(e))||m(i)))return{risky:!0};let a=[],o=!1,s=!0;for(let e of i){let t=_(e);if(t){o=!0,a.push(...t);continue}let n=p(e);if(n&&n.length===1){a.push(n);continue}if(s=!1,v(e)>r)return{risky:!0}}return o?s?{risky:!0,safeOutput:g([...new Set(a)])}:{risky:!0}:{risky:!1}},b=(e,t)=>{if(typeof e!=`string`)throw TypeError(`Expected a string`);e=c[e]||e;let d={...t},f=typeof d.maxLength==`number`?Math.min(i,d.maxLength):i,p=e.length;if(p>f)throw SyntaxError(`Input length: ${p}, exceeds maximum allowed length: ${f}`);let m={type:`bos`,value:``,output:d.prepend||``},h=[m],g=d.capture?``:`?:`,_=n.globChars(d.windows),v=n.extglobChars(_),{DOT_LITERAL:x,PLUS_LITERAL:S,SLASH_LITERAL:C,ONE_CHAR:w,DOTS_SLASH:T,NO_DOT:E,NO_DOT_SLASH:D,NO_DOTS_SLASH:O,QMARK:k,QMARK_NO_DOT:A,STAR:j,START_ANCHOR:M}=_,N=e=>`(${g}(?:(?!${M}${e.dot?T:x}).)*?)`,ee=d.dot?``:E,P=d.dot?k:A,F=d.bash===!0?N(d):j;d.capture&&(F=`(${F})`),typeof d.noext==`boolean`&&(d.noextglob=d.noext);let I={input:e,index:-1,start:0,dot:d.dot===!0,consumed:``,output:``,prefix:``,backtrack:!1,negated:!1,brackets:0,braces:0,parens:0,quotes:0,globstar:!1,tokens:h};e=r.removePrefix(e,I),p=e.length;let L=[],R=[],z=[],B=m,V,H=()=>I.index===p-1,U=I.peek=(t=1)=>e[I.index+t],W=I.advance=()=>e[++I.index]||``,G=()=>e.slice(I.index+1),K=(e=``,t=0)=>{I.consumed+=e,I.index+=t},q=e=>{I.output+=e.output==null?e.value:e.output,K(e.value)},J=()=>{let e=1;for(;U()===`!`&&(U(2)!==`(`||U(3)===`?`);)W(),I.start++,e++;return e%2!=0&&(I.negated=!0,I.start++,!0)},Y=e=>{I[e]++,z.push(e)},X=e=>{I[e]--,z.pop()},Z=e=>{if(B.type===`globstar`){let t=I.braces>0&&(e.type===`comma`||e.type===`brace`),n=e.extglob===!0||L.length&&(e.type===`pipe`||e.type===`paren`);e.type!==`slash`&&e.type!==`paren`&&!t&&!n&&(I.output=I.output.slice(0,-B.output.length),B.type=`star`,B.value=`*`,B.output=F,I.output+=B.output)}if(L.length&&e.type!==`paren`&&(L[L.length-1].inner+=e.value),(e.value||e.output)&&q(e),B&&B.type===`text`&&e.type===`text`){B.output=(B.output||B.value)+e.value,B.value+=e.value;return}e.prev=B,h.push(e),B=e},te=(e,t)=>{let n={...v[t],conditions:1,inner:``};n.prev=B,n.parens=I.parens,n.output=I.output,n.startIndex=I.index,n.tokensIndex=h.length;let r=(d.capture?`(`:``)+n.open;Y(`parens`),Z({type:e,value:t,output:I.output?``:w}),Z({type:`paren`,extglob:!0,value:W(),output:r}),L.push(n)},ne=n=>{let i=e.slice(n.startIndex,I.index+1),a=e.slice(n.startIndex+2,I.index),o=y(a,d);if((n.type===`plus`||n.type===`star`)&&o.risky){let e=o.safeOutput?(n.output?``:w)+(d.capture?`(${o.safeOutput})`:o.safeOutput):void 0,t=h[n.tokensIndex];t.type=`text`,t.value=i,t.output=e||r.escapeRegex(i);for(let e=n.tokensIndex+1;e<h.length;e++)h[e].value=``,h[e].output=``,delete h[e].suffix;I.output=n.output+t.output,I.backtrack=!0,Z({type:`paren`,extglob:!0,value:V,output:``}),X(`parens`);return}let s=n.close+(d.capture?`)`:``),c;if(n.type===`negate`){let e=F;n.inner&&n.inner.length>1&&n.inner.includes(`/`)&&(e=N(d)),(e!==F||H()||/^\)+$/.test(G()))&&(s=n.close=`)$))${e}`),n.inner.includes(`*`)&&(c=G())&&/^\.[^\\/.]+$/.test(c)&&(s=n.close=`)${b(c,{...t,fastpaths:!1}).output})${e})`),n.prev.type===`bos`&&(I.negatedExtglob=!0)}Z({type:`paren`,extglob:!0,value:V,output:s}),X(`parens`)};if(d.fastpaths!==!1&&!/(^[*!]|[/()[\]{}"])/.test(e)){let n=!1,i=e.replace(s,(e,t,r,i,a,o)=>i===`\\`?(n=!0,e):i===`?`?t?t+i+(a?k.repeat(a.length):``):o===0?P+(a?k.repeat(a.length):``):k.repeat(r.length):i===`.`?x.repeat(r.length):i===`*`?t?t+i+(a?F:``):F:t?e:`\\${e}`);return n===!0&&(i=d.unescape===!0?i.replace(/\\/g,``):i.replace(/\\+/g,e=>e.length%2==0?`\\\\`:e?`\\`:``)),i===e&&d.contains===!0?(I.output=e,I):(I.output=r.wrapOutput(i,I,t),I)}for(;!H();){if(V=W(),V===`\0`)continue;if(V===`\\`){let e=U();if(e===`/`&&d.bash!==!0||e===`.`||e===`;`)continue;if(!e){V+=`\\`,Z({type:`text`,value:V});continue}let t=/^\\+/.exec(G()),n=0;if(t&&t[0].length>2&&(n=t[0].length,I.index+=n,n%2!=0&&(V+=`\\`)),d.unescape===!0?V=W():V+=W(),I.brackets===0){Z({type:`text`,value:V});continue}}if(I.brackets>0&&(V!==`]`||B.value===`[`||B.value===`[^`)){if(d.posix!==!1&&V===`:`){let e=B.value.slice(1);if(e.includes(`[`)&&(B.posix=!0,e.includes(`:`))){let e=B.value.lastIndexOf(`[`),t=B.value.slice(0,e),n=B.value.slice(e+2),r=a[n];if(r){B.value=t+r,I.backtrack=!0,W(),!m.output&&h.indexOf(B)===1&&(m.output=w);continue}}}(V===`[`&&U()!==`:`||V===`-`&&U()===`]`)&&(V=`\\${V}`),V===`]`&&(B.value===`[`||B.value===`[^`)&&(V=`\\${V}`),d.posix===!0&&V===`!`&&B.value===`[`&&(V=`^`),B.value+=V,q({value:V});continue}if(I.quotes===1&&V!==`"`){V=r.escapeRegex(V),B.value+=V,q({value:V});continue}if(V===`"`){I.quotes=I.quotes===1?0:1,d.keepQuotes===!0&&Z({type:`text`,value:V});continue}if(V===`(`){Y(`parens`),Z({type:`paren`,value:V});continue}if(V===`)`){if(I.parens===0&&d.strictBrackets===!0)throw SyntaxError(u(`opening`,`(`));let e=L[L.length-1];if(e&&I.parens===e.parens+1){ne(L.pop());continue}Z({type:`paren`,value:V,output:I.parens?`)`:`\\)`}),X(`parens`);continue}if(V===`[`){if(d.nobracket===!0||!G().includes(`]`)){if(d.nobracket!==!0&&d.strictBrackets===!0)throw SyntaxError(u(`closing`,`]`));V=`\\${V}`}else Y(`brackets`);Z({type:`bracket`,value:V});continue}if(V===`]`){if(d.nobracket===!0||B&&B.type===`bracket`&&B.value.length===1){Z({type:`text`,value:V,output:`\\${V}`});continue}if(I.brackets===0){if(d.strictBrackets===!0)throw SyntaxError(u(`opening`,`[`));Z({type:`text`,value:V,output:`\\${V}`});continue}X(`brackets`);let e=B.value.slice(1);if(B.posix!==!0&&e[0]===`^`&&!e.includes(`/`)&&(V=`/${V}`),B.value+=V,q({value:V}),d.literalBrackets===!1||r.hasRegexChars(e))continue;let t=r.escapeRegex(B.value);if(I.output=I.output.slice(0,-B.value.length),d.literalBrackets===!0){I.output+=t,B.value=t;continue}B.value=`(${g}${t}|${B.value})`,I.output+=B.value;continue}if(V===`{`&&d.nobrace!==!0){Y(`braces`);let e={type:`brace`,value:V,output:`(`,outputIndex:I.output.length,tokensIndex:I.tokens.length};R.push(e),Z(e);continue}if(V===`}`){let e=R[R.length-1];if(d.nobrace===!0||!e){Z({type:`text`,value:V,output:V});continue}let t=`)`;if(e.dots===!0){let e=h.slice(),n=[];for(let t=e.length-1;t>=0&&(h.pop(),e[t].type!==`brace`);t--)e[t].type!==`dots`&&n.unshift(e[t].value);t=l(n,d),I.backtrack=!0}if(e.comma!==!0&&e.dots!==!0){let n=I.output.slice(0,e.outputIndex),r=I.tokens.slice(e.tokensIndex);e.value=e.output=`\\{`,V=t=`\\}`,I.output=n;for(let e of r)I.output+=e.output||e.value}Z({type:`brace`,value:V,output:t}),X(`braces`),R.pop();continue}if(V===`|`){L.length>0&&L[L.length-1].conditions++,Z({type:`text`,value:V});continue}if(V===`,`){let e=V,t=R[R.length-1];t&&z[z.length-1]===`braces`&&(t.comma=!0,e=`|`),Z({type:`comma`,value:V,output:e});continue}if(V===`/`){if(B.type===`dot`&&I.index===I.start+1){I.start=I.index+1,I.consumed=``,I.output=``,h.pop(),B=m;continue}Z({type:`slash`,value:V,output:C});continue}if(V===`.`){if(I.braces>0&&B.type===`dot`){B.value===`.`&&(B.output=x);let e=R[R.length-1];B.type=`dots`,B.output+=V,B.value+=V,e.dots=!0;continue}if(I.braces+I.parens===0&&B.type!==`bos`&&B.type!==`slash`){Z({type:`text`,value:V,output:x});continue}Z({type:`dot`,value:V,output:x});continue}if(V===`?`){if(!(B&&B.value===`(`)&&d.noextglob!==!0&&U()===`(`&&U(2)!==`?`){te(`qmark`,V);continue}if(B&&B.type===`paren`){let e=U(),t=V;(B.value===`(`&&!/[!=<:]/.test(e)||e===`<`&&!/<([!=]|\w+>)/.test(G()))&&(t=`\\${V}`),Z({type:`text`,value:V,output:t});continue}if(d.dot!==!0&&(B.type===`slash`||B.type===`bos`)){Z({type:`qmark`,value:V,output:A});continue}Z({type:`qmark`,value:V,output:k});continue}if(V===`!`){if(d.noextglob!==!0&&U()===`(`&&(U(2)!==`?`||!/[!=<:]/.test(U(3)))){te(`negate`,V);continue}if(d.nonegate!==!0&&I.index===0){J();continue}}if(V===`+`){if(d.noextglob!==!0&&U()===`(`&&U(2)!==`?`){te(`plus`,V);continue}if(B&&B.value===`(`||d.regex===!1){Z({type:`plus`,value:V,output:S});continue}if(B&&(B.type===`bracket`||B.type===`paren`||B.type===`brace`)||I.parens>0){Z({type:`plus`,value:V});continue}Z({type:`plus`,value:S});continue}if(V===`@`){if(d.noextglob!==!0&&U()===`(`&&U(2)!==`?`){Z({type:`at`,extglob:!0,value:V,output:``});continue}Z({type:`text`,value:V});continue}if(V!==`*`){(V===`$`||V===`^`)&&(V=`\\${V}`);let e=o.exec(G());e&&(V+=e[0],I.index+=e[0].length),Z({type:`text`,value:V});continue}if(B&&(B.type===`globstar`||B.star===!0)){B.type=`star`,B.star=!0,B.value+=V,B.output=F,I.backtrack=!0,I.globstar=!0,K(V);continue}let t=G();if(d.noextglob!==!0&&/^\([^?]/.test(t)){te(`star`,V);continue}if(B.type===`star`){if(d.noglobstar===!0){K(V);continue}let n=B.prev,r=n.prev,i=n.type===`slash`||n.type===`bos`,a=r&&(r.type===`star`||r.type===`globstar`);if(d.bash===!0&&(!i||t[0]&&t[0]!==`/`)){Z({type:`star`,value:V,output:``});continue}let o=I.braces>0&&(n.type===`comma`||n.type===`brace`),s=L.length&&(n.type===`pipe`||n.type===`paren`);if(!i&&n.type!==`paren`&&!o&&!s){Z({type:`star`,value:V,output:``});continue}for(;t.slice(0,3)===`/**`;){let n=e[I.index+4];if(n&&n!==`/`)break;t=t.slice(3),K(`/**`,3)}if(n.type===`bos`&&H()){B.type=`globstar`,B.value+=V,B.output=N(d),I.output=B.output,I.globstar=!0,K(V);continue}if(n.type===`slash`&&n.prev.type!==`bos`&&!a&&H()){I.output=I.output.slice(0,-(n.output+B.output).length),n.output=`(?:${n.output}`,B.type=`globstar`,B.output=N(d)+(d.strictSlashes?`)`:`|$)`),B.value+=V,I.globstar=!0,I.output+=n.output+B.output,K(V);continue}if(n.type===`slash`&&n.prev.type!==`bos`&&t[0]===`/`){let e=t[1]===void 0?``:`|$`;I.output=I.output.slice(0,-(n.output+B.output).length),n.output=`(?:${n.output}`,B.type=`globstar`,B.output=`${N(d)}${C}|${C}${e})`,B.value+=V,I.output+=n.output+B.output,I.globstar=!0,K(V+W()),Z({type:`slash`,value:`/`,output:``});continue}if(n.type===`bos`&&t[0]===`/`){B.type=`globstar`,B.value+=V,B.output=`(?:^|${C}|${N(d)}${C})`,I.output=B.output,I.globstar=!0,K(V+W()),Z({type:`slash`,value:`/`,output:``});continue}I.output=I.output.slice(0,-B.output.length),B.type=`globstar`,B.output=N(d),B.value+=V,I.output+=B.output,I.globstar=!0,K(V);continue}let n={type:`star`,value:V,output:F};if(d.bash===!0){n.output=`.*?`,(B.type===`bos`||B.type===`slash`)&&(n.output=ee+n.output),Z(n);continue}if(B&&(B.type===`bracket`||B.type===`paren`)&&d.regex===!0){n.output=V,Z(n);continue}(I.index===I.start||B.type===`slash`||B.type===`dot`)&&(B.type===`dot`?(I.output+=D,B.output+=D):d.dot===!0?(I.output+=O,B.output+=O):(I.output+=ee,B.output+=ee),U()!==`*`&&(I.output+=w,B.output+=w)),Z(n)}for(;I.brackets>0;){if(d.strictBrackets===!0)throw SyntaxError(u(`closing`,`]`));I.output=r.escapeLast(I.output,`[`),X(`brackets`)}for(;I.parens>0;){if(d.strictBrackets===!0)throw SyntaxError(u(`closing`,`)`));I.output=r.escapeLast(I.output,`(`),X(`parens`)}for(;I.braces>0;){if(d.strictBrackets===!0)throw SyntaxError(u(`closing`,`}`));I.output=r.escapeLast(I.output,`{`),X(`braces`)}if(d.strictSlashes!==!0&&(B.type===`star`||B.type===`bracket`)&&Z({type:`maybe_slash`,value:``,output:`${C}?`}),I.backtrack===!0){I.output=``;for(let e of I.tokens)I.output+=e.output==null?e.value:e.output,e.suffix&&(I.output+=e.suffix)}return I};b.fastpaths=(e,t)=>{let a={...t},o=typeof a.maxLength==`number`?Math.min(i,a.maxLength):i,s=e.length;if(s>o)throw SyntaxError(`Input length: ${s}, exceeds maximum allowed length: ${o}`);e=c[e]||e;let{DOT_LITERAL:l,SLASH_LITERAL:u,ONE_CHAR:d,DOTS_SLASH:f,NO_DOT:p,NO_DOTS:m,NO_DOTS_SLASH:h,STAR:g,START_ANCHOR:_}=n.globChars(a.windows),v=a.dot?m:p,y=a.dot?h:p,b=a.capture?``:`?:`,x={negated:!1,prefix:``},S=a.bash===!0?`.*?`:g;a.capture&&(S=`(${S})`);let C=e=>e.noglobstar===!0?S:`(${b}(?:(?!${_}${e.dot?f:l}).)*?)`,w=e=>{switch(e){case`*`:return`${v}${d}${S}`;case`.*`:return`${l}${d}${S}`;case`*.*`:return`${v}${S}${l}${d}${S}`;case`*/*`:return`${v}${S}${u}${d}${y}${S}`;case`**`:return v+C(a);case`**/*`:return`(?:${v}${C(a)}${u})?${y}${d}${S}`;case`**/*.*`:return`(?:${v}${C(a)}${u})?${y}${S}${l}${d}${S}`;case`**/.*`:return`(?:${v}${C(a)}${u})?${l}${d}${S}`;default:{let t=/^(.*?)\.(\w+)$/.exec(e);if(!t)return;let n=w(t[1]);return n?n+l+t[2]:void 0}}},T=w(r.removePrefix(e,x));return T&&a.strictSlashes!==!0&&(T+=`${u}?`),T},t.exports=b}));En();var Dn=Sn(((e,t)=>{let n=Tn(),r=En(),i=wn(),a=Cn(),o=e=>e&&typeof e==`object`&&!Array.isArray(e),s=(e,t,n=!1)=>{if(Array.isArray(e)){let r=e.map(e=>s(e,t,n));return e=>{for(let t of r){let n=t(e);if(n)return n}return!1}}let r=o(e)&&e.tokens&&e.input;if(e===``||typeof e!=`string`&&!r)throw TypeError(`Expected pattern to be a non-empty string`);let i=t||{},a=i.windows,c=r?s.compileRe(e,t):s.makeRe(e,t,!1,!0),l=c.state;delete c.state;let u=()=>!1;if(i.ignore){let e={...t,ignore:null,onMatch:null,onResult:null};u=s(i.ignore,e,n)}let d=(n,r=!1)=>{let{isMatch:o,match:d,output:f}=s.test(n,c,t,{glob:e,posix:a}),p={glob:e,state:l,regex:c,posix:a,input:n,output:f,match:d,isMatch:o};return typeof i.onResult==`function`&&i.onResult(p),o===!1?(p.isMatch=!1,r?p:!1):u(n)?(typeof i.onIgnore==`function`&&i.onIgnore(p),p.isMatch=!1,r?p:!1):(typeof i.onMatch==`function`&&i.onMatch(p),!r||p)};return n&&(d.state=l),d};s.test=(e,t,n,{glob:r,posix:a}={})=>{if(typeof e!=`string`)throw TypeError(`Expected input to be a string`);if(e===``)return{isMatch:!1,output:``};let o=n||{},c=o.format||(a?i.toPosixSlashes:null),l=e===r,u=l&&c?c(e):e;return l===!1&&(u=c?c(e):e,l=u===r),(l===!1||o.capture===!0)&&(l=o.matchBase===!0||o.basename===!0?s.matchBase(e,t,n,a):t.exec(u)),{isMatch:!!l,match:l,output:u}},s.matchBase=(e,t,n,r=n&&n.windows)=>(t instanceof RegExp?t:s.makeRe(t,n)).test(i.basename(e,{windows:r})),s.isMatch=(e,t,n)=>s(t,n)(e),s.parse=(e,t)=>Array.isArray(e)?e.map(e=>s.parse(e,t)):r(e,{...t,fastpaths:!1}),s.scan=(e,t)=>n(e,t),s.compileRe=(e,t,n=!1,r=!1)=>{if(n===!0)return e.output;let i=t||{},a=i.contains?``:`^`,o=i.contains?``:`$`,c=`${a}(?:${e.output})${o}`;e&&e.negated===!0&&(c=`^(?!${c}).*$`);let l=s.toRegex(c,t);return r===!0&&(l.state=e),l},s.makeRe=(e,t={},n=!1,i=!1)=>{if(!e||typeof e!=`string`)throw TypeError(`Expected a non-empty string`);let a={negated:!1,fastpaths:!0};return t.fastpaths!==!1&&(e[0]===`.`||e[0]===`*`)&&(a.output=r.fastpaths(e,t)),a.output||(a=r(e,t)),s.compileRe(a,t,n,i)},s.toRegex=(e,t)=>{try{let n=t||{};return new RegExp(e,n.flags||(n.nocase?`i`:``))}catch(e){if(t&&t.debug===!0)throw e;return/$^/}},s.constants=a,t.exports=s}));Dn();var On=Sn(((e,t)=>{let n=Dn(),r=wn();function i(e,t,i=!1){return t&&(t.windows===null||t.windows===void 0)&&(t={...t,windows:r.isWindows()}),n(e,t,i)}Object.assign(i,n),t.exports=i}));On();var kn=(e,t=21)=>(n=t)=>{let r=``,i=n|0;for(;i-->0;)r+=e[Math.random()*e.length|0];return r};On();function An(){return kn(`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`,16)()}function Q(e,t){e||=An();let n={id:t?.inheritFrom?.id||e,type:t?.inheritFrom?.type||`event`},r=t?.inheritFrom?.metadata||t?.metadata;r&&(n.metadata=r);let i=t?.inheritFrom?.invokeMetadata||t?.invokeMetadata;return i&&(n.invokeMetadata=i),n}function jn(e){return typeof e==`object`&&!!e&&Symbol.asyncIterator in e}function Mn(e){return!!(e&&typeof e==`object`&&`getReader`in e&&typeof e.getReader==`function`)}function Nn(e){if(e instanceof Error&&e.name===`AbortError`)return e;if(typeof DOMException<`u`)try{return new DOMException(e?String(e):`Aborted`,`AbortError`)}catch{}let t=e instanceof Error?e:Error(e?String(e):`Aborted`);return t.name=`AbortError`,t}function Pn(e,t){function n(){return typeof e==`function`?e():e}function r(e,n,r){return new Promise((i,a)=>{let o=e,s=An(),c=Q(`${t.receiveEvent.id}-${s}`);delete c.metadata;let l=Q(`${t.receiveEventError.id}-${s}`);delete l.metadata;let{signal:u,...d}=r??{},f=d,p=!1,m=()=>{o.emit(t.sendEventAbort,{invokeId:s,content:u?.reason},f).catch(()=>void 0),v(Nn(u?.reason))},h=o.signal,g=()=>{v(h?.reason)},_=()=>{o.off(c),o.off(l),h&&h.removeEventListener(`abort`,g),u&&u.removeEventListener(`abort`,m)},v=e=>{p||(p=!0,a(e),_())},y=e=>{p||(p=!0,i(e),_())};if(o.on(c,e=>{if(!e.body||e.body.invokeId!==s)return;let{content:t}=e.body;y(t)}),o.on(l,e=>{if(!e.body||e.body.invokeId!==s)return;let{error:t}=e.body.content;v(t)}),h){if(h.aborted){g();return}h.addEventListener(`abort`,g,{once:!0})}if(u){if(u.aborted){m();return}u.addEventListener(`abort`,m,{once:!0})}if(!Mn(n)&&!jn(n))o.emit(t.sendEvent,{invokeId:s,content:n},f).catch(v);else{let e=e=>p?Promise.resolve():o.emit(t.sendEvent,{invokeId:s,content:e,isReqStream:!0},f),r=()=>p?Promise.resolve():o.emit(t.sendEventStreamEnd,{invokeId:s,content:void 0},f);(async()=>{let i=!1;try{for await(let t of n)if(u?.aborted||(i=!0,await e(t),i=!1,p))return;if(p)return;i=!0,await r()}catch(e){if(i)o.emit(t.sendEventAbort,{invokeId:s,content:e},f).catch(()=>void 0);else{v(e);try{await o.emit(t.sendEventError,{invokeId:s,content:e},f)}catch(e){o.emit(t.sendEventAbort,{invokeId:s,content:e},f).catch(()=>void 0)}}i&&v(e)}})()}})}function i(e,t){let i=n();return i instanceof Promise?i.then(n=>r(n,e,t)):r(i,e,t)}return i}function Fn(e,t){return e||=An(),{sendEvent:{...Q(`${e}-send`,{metadata:t?.metadata,invokeMetadata:t?.invokeMetadata}),invokeType:0},sendEventError:{...Q(`${e}-send-error`,{metadata:t?.metadata,invokeMetadata:t?.invokeMetadata}),invokeType:1},sendEventStreamEnd:{...Q(`${e}-send-stream-end`,{metadata:t?.metadata,invokeMetadata:t?.invokeMetadata}),invokeType:2},sendEventAbort:{...Q(`${e}-send-abort`,{metadata:t?.metadata,invokeMetadata:t?.invokeMetadata}),invokeType:3},receiveEvent:{...Q(`${e}-receive`,{metadata:t?.metadata,invokeMetadata:t?.invokeMetadata}),invokeType:4},receiveEventError:{...Q(`${e}-receive-error`,{metadata:t?.metadata,invokeMetadata:t?.invokeMetadata}),invokeType:5},receiveEventStreamEnd:{...Q(`${e}-receive-stream-end`,{metadata:t?.metadata,invokeMetadata:t?.invokeMetadata}),invokeType:6}}}var In=Fn(`eventa:invoke:electron:screen-capture:get-sources`),Ln=Fn(`eventa:invoke:electron:screen-capture:set-source`),Rn=Fn(`eventa:invoke:electron:screen-capture:reset-source`),zn=Fn(`eventa:invoke:electron:screen-capture:check-macos-permission`),Bn=Fn(`eventa:invoke:electron:screen-capture:request-macos-permission`);function Vn(e){let t=Pn(e,In),n=Pn(e,Ln),r=Pn(e,Rn),i=Pn(e,zn),a=Pn(e,Bn);async function o(e){return t(e)}async function s(e,t,i){let a=await e(await o(i.sourcesOptions)),s;try{return s=await n({options:i.sourcesOptions,sourceId:a,timeout:i.request?.timeout}),await t()}finally{s&&await r(s)}}return{getSources:o,setSource:n,selectWithSource:s,resetSource:r,checkMacOSPermission:i,requestMacOSPermission:a}}var Hn={...n()};function Un(e,t,n){return e.addEventListener(t,n),{remove:()=>{e.removeEventListener(t,n)}}}function Wn(n,i){let a=t(i?.context),{messageEvents:o=!0,messageErrorEvents:s=!0,closeOnDispose:c=!1}=i||{},l=[],u=a.on(r(e(e=>!(`_flowDirection`in e)||!e._flowDirection||e._flowDirection===`outbound`),e(`*`)),e=>{let t=m(e);t&&n.postMessage(t)});return o&&l.push(Un(n,`message`,e=>{try{let t=p(e.data);a.emit(t.eventa,t.eventa.body,{raw:{message:e}}).catch(e=>console.error(`Failed to emit BroadcastChannel message:`,e))}catch(e){console.error(`Failed to parse BroadcastChannel message:`,e),a.emit(Hn,{error:e},{raw:{error:e}}).catch(e=>console.error(`Failed to emit BroadcastChannel parse error:`,e))}})),s&&l.push(Un(n,`messageerror`,e=>{a.emit(Hn,{error:e},{raw:{messageError:e}}).catch(e=>console.error(`Failed to emit BroadcastChannel message error:`,e))})),{context:a,dispose:e=>{u(),a.abort(e??Error(`eventa: invoke cancelled, BroadcastChannel disposed`)),l.forEach(e=>e.remove()),c&&n.close?.()}}}var Gn=i(`eventa:invoke:electron:beat-sync:toggle`),Kn=i(`eventa:invoke:electron:beat-sync:get-state`),qn=i(`eventa:event:electron:beat-sync:update-parameters`),Jn=i(`eventa:invoke:electron:beat-sync:get-input-byte-frequency-data`),Yn=i(`eventa:event:electron:beat-sync:state-changed`),Xn=i(`eventa:event:electron:beat-sync:beat-signaled`),Zn;function Qn(){return Zn??=new BroadcastChannel(`airi::beat-sync`),Zn}function $n(){return d(window)?Wn(Qn()).context:t()}var er=1024;function tr(e){let t,n,r,i={isActive:!1},a,o,s,c={stateChange:[],beat:[]},l=(e,...t)=>{c[e].forEach(e=>e(...t))},p=()=>{i.isActive&&(i.isActive=!1,l(`stateChange`,i),a?.(),a=void 0,o&&(o.disconnect(),o=void 0,s=void 0),r?.disconnect(),r=void 0,n?.stop(),n=void 0,t?.close(),t=void 0)},m=async e=>{p(),t=new AudioContext,n=await xn({context:t,worklet:_n,listeners:{onBeat:e=>l(`beat`,e)}});let a=await e(t);o=t.createAnalyser(),o.fftSize=er,o.smoothingTimeConstant=.8,s=new Uint8Array(o.frequencyBinCount),a.connect(o),o.connect(n?.workletNode),r=a,i.isActive=!0,l(`stateChange`,i)},h=e=>{n?.updateParameters(e)},g=async()=>m(async t=>{switch(e.env){case u.Web:{let e=await navigator.mediaDevices.getDisplayMedia({audio:{echoCancellation:!1,noiseSuppression:!1,autoGainControl:!1},video:!0});if(e.getAudioTracks().length===0)throw Error(`No audio track available in the stream`);e.getAudioTracks().forEach(e=>{let t=!1;e.addEventListener(`ended`,()=>{t||(t=!0,p())})});let n=t.createMediaStreamSource(e);return a=()=>{e.getTracks().forEach(e=>e.stop())},n}case u.Tamagotchi:{if(!d(window))throw Error(`Electron window is required for this environment: ${e.env}`);let{createContext:n}=await f(async()=>{let{createContext:e}=await import(`./renderer-BsKHgvC-.js`);return{createContext:e}},__vite__mapDeps([0,1,2,3,4])),{selectWithSource:r}=Vn(n(window.electron.ipcRenderer).context),i=await r(e=>{if(e.length===0)throw Error(`No screen source available`);return e[0].id},async()=>await navigator.mediaDevices.getDisplayMedia({video:!0,audio:!0}),{sourcesOptions:{types:[`screen`]}});i.getVideoTracks().forEach(e=>{e.stop(),i.removeTrack(e)});let o=t.createMediaStreamSource(i);return a=()=>{i.getTracks().forEach(e=>e.stop())},o}default:throw Error(`Failed to start screen capture: Unsupported environment`)}}),_=(e,t)=>{let n=c[e];if(!n)throw Error(`Unknown event: ${e}`);let r=n.indexOf(t);r!==-1&&n.splice(r,1)};return{start:m,updateParameters:h,startScreenCapture:g,stop:p,on:(e,t)=>{let n=c[e];if(!n)throw Error(`Unknown event: ${e}`);return n.push(t),()=>_(e,t)},off:_,getInputByteFrequencyData:()=>(o?.getByteFrequencyData(s),s),get state(){return i},get context(){return t},get analyser(){return n},get source(){return r}}}var nr;function $(){if(!s())throw Error(`getDetector() is only available in Stage Web environment`);return nr||=tr({env:u.Web}),nr}var rr;function ir(e){o(e,Gn,async e=>{if(e)throw Error(`Beat Sync is not available in Stage Pocket`)}),o(e,Kn,async()=>({isActive:!1})),o(e,qn,async()=>{}),o(e,Jn,async()=>new Uint8Array(er/2))}function ar(){return rr||(rr=$n(),l()&&ir(rr)),rr}function or(){return s()||c()}function sr(e){if(s())return e?$().startScreenCapture():$().stop();if(c()||l())return a(ar(),Gn)(e);throw Error(`Unknown environment for beatSyncToggle()`)}async function cr(){if(s())return $().state;if(c()||l())return a(ar(),Kn)();throw Error(`Unknown environment for getBeatSyncState()`)}function lr(e){if(s())return $().updateParameters(e);if(c()||l())return a(ar(),qn)(e);throw Error(`Unknown environment for updateBeatSyncParameters()`)}function ur(e){if(s())return $().on(`stateChange`,e);if(c()||l())return o(ar(),Yn,e);throw Error(`Unknown environment for listenBeatSyncStateChange()`)}function dr(e){if(s())return $().on(`beat`,e);if(c()||l())return o(ar(),Xn,e);throw Error(`Unknown environment for listenBeatSyncBeatSignal()`)}async function fr(){if(s())return $().getInputByteFrequencyData();if(c()||l())return a(ar(),Jn)();throw Error(`Unknown environment for getBeatSyncInputByteFrequencyData()`)}var pr={...yn,warmup:!1,spectralFlux:!1,adaptiveThreshold:!1};export{dr as a,lr as c,or as i,Wn as l,fr as n,ur as o,cr as r,sr as s,pr as t,Xe as u};
//# sourceMappingURL=beat-sync-FcHoxi6P.js.map