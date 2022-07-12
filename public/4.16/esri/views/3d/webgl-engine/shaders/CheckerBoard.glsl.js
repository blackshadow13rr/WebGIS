// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../core/shaderModules/interfaces","../core/shaderModules/ShaderBuilder"],function(h,b,c,d,g){Object.defineProperty(b,"__esModule",{value:!0});b.build=function(){var a=new g.ShaderBuilder;a.extensions.add("GL_OES_standard_derivatives");a.attributes.add("position","vec3");a.attributes.add("uv0","vec2");a.vertex.uniforms.add("proj","mat4").add("view","mat4");a.varyings.add("vUV","vec2");a.vertex.code.add(d.glsl(e||(e=c.__makeTemplateObject(["\n    void main(void) {\n      vUV \x3d uv0;\n      gl_Position \x3d proj * view * vec4(position.xyz, 1.0);\n    }\n  "],
["\n    void main(void) {\n      vUV \x3d uv0;\n      gl_Position \x3d proj * view * vec4(position.xyz, 1.0);\n    }\n  "]))));a.fragment.uniforms.add("size","vec2").add("color1","vec4").add("color2","vec4");a.fragment.code.add(d.glsl(f||(f=c.__makeTemplateObject(["\n    void main() {\n      vec2 uvScaled \x3d vUV / (2.0 * size);\n\n      vec2 uv \x3d fract(uvScaled - 0.25);\n      vec2 ab \x3d clamp((abs(uv - 0.5) - 0.25) / fwidth(uvScaled), -0.5, 0.5);\n      float fade \x3d smoothstep(0.25, 0.5, max(fwidth(uvScaled.x), fwidth(uvScaled.y)));\n      float t \x3d mix(abs(ab.x + ab.y), 0.5, fade);\n\n      gl_FragColor \x3d mix(color2, color1, t);\n    }\n  "],
["\n    void main() {\n      vec2 uvScaled \x3d vUV / (2.0 * size);\n\n      vec2 uv \x3d fract(uvScaled - 0.25);\n      vec2 ab \x3d clamp((abs(uv - 0.5) - 0.25) / fwidth(uvScaled), -0.5, 0.5);\n      float fade \x3d smoothstep(0.25, 0.5, max(fwidth(uvScaled.x), fwidth(uvScaled.y)));\n      float t \x3d mix(abs(ab.x + ab.y), 0.5, fade);\n\n      gl_FragColor \x3d mix(color2, color1, t);\n    }\n  "]))));return a};var e,f});