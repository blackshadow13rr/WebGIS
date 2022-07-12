// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../../shaderModules/interfaces"],function(n,e,b,c){Object.defineProperty(e,"__esModule",{value:!0});e.RibbonVertexPosition=function(a,d){a.vertex.uniforms.add("intrinsicWidth","float");d.vvSize?(a.attributes.add("sizeFeatureAttribute","float"),a.vertex.uniforms.add("vvSizeMinSize","vec3"),a.vertex.uniforms.add("vvSizeMaxSize","vec3"),a.vertex.uniforms.add("vvSizeOffset","vec3"),a.vertex.uniforms.add("vvSizeFactor","vec3"),a.vertex.code.add(c.glsl(f||(f=b.__makeTemplateObject(["\n    float getSize() {\n      return intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;\n    }\n    "],
["\n    float getSize() {\n      return intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;\n    }\n    "]))))):(a.attributes.add("size","float"),a.vertex.code.add(c.glsl(g||(g=b.__makeTemplateObject(["\n    float getSize(){\n      return intrinsicWidth * size;\n    }\n    "],["\n    float getSize(){\n      return intrinsicWidth * size;\n    }\n    "])))));d.vvOpacity?(a.attributes.add("opacityFeatureAttribute","float"),a.vertex.defines.addInt("VV_OPACITY_N",
8),a.vertex.code.add(c.glsl(h||(h=b.__makeTemplateObject(["\n    uniform float vvOpacityValues[VV_OPACITY_N];\n    uniform float vvOpacityOpacities[VV_OPACITY_N];\n\n    float interpolateOpacity( float value ){\n      if (value \x3c\x3d vvOpacityValues[0]) {\n        return vvOpacityOpacities[0];\n      }\n\n      for (int i \x3d 1; i \x3c VV_OPACITY_N; ++i) {\n        if (vvOpacityValues[i] \x3e\x3d value) {\n          float f \x3d (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);\n          return mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f);\n        }\n      }\n\n      return vvOpacityOpacities[VV_OPACITY_N - 1];\n    }\n\n    vec4 applyOpacity( vec4 color ){\n      return vec4(color.xyz, interpolateOpacity(opacityFeatureAttribute));\n    }\n    "],
["\n    uniform float vvOpacityValues[VV_OPACITY_N];\n    uniform float vvOpacityOpacities[VV_OPACITY_N];\n\n    float interpolateOpacity( float value ){\n      if (value \x3c\x3d vvOpacityValues[0]) {\n        return vvOpacityOpacities[0];\n      }\n\n      for (int i \x3d 1; i \x3c VV_OPACITY_N; ++i) {\n        if (vvOpacityValues[i] \x3e\x3d value) {\n          float f \x3d (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);\n          return mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f);\n        }\n      }\n\n      return vvOpacityOpacities[VV_OPACITY_N - 1];\n    }\n\n    vec4 applyOpacity( vec4 color ){\n      return vec4(color.xyz, interpolateOpacity(opacityFeatureAttribute));\n    }\n    "]))))):
a.vertex.code.add(c.glsl(k||(k=b.__makeTemplateObject(["\n    vec4 applyOpacity( vec4 color ){\n      return color;\n    }\n    "],["\n    vec4 applyOpacity( vec4 color ){\n      return color;\n    }\n    "]))));d.vvColor?(a.attributes.add("colorFeatureAttribute","float"),a.vertex.defines.addInt("VV_COLOR_N",8),a.vertex.code.add(c.glsl(l||(l=b.__makeTemplateObject(["\n    uniform float vvColorValues[VV_COLOR_N];\n    uniform vec4 vvColorColors[VV_COLOR_N];\n\n    vec4 interpolateColor( float value ) {\n      if (value \x3c\x3d vvColorValues[0]) {\n        return vvColorColors[0];\n      }\n\n      for (int i \x3d 1; i \x3c VV_COLOR_N; ++i) {\n        if (vvColorValues[i] \x3e\x3d value) {\n          float f \x3d (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);\n          return mix(vvColorColors[i-1], vvColorColors[i], f);\n        }\n      }\n\n      return vvColorColors[VV_COLOR_N - 1];\n    }\n\n    vec4 getColor(){\n      return applyOpacity(interpolateColor(colorFeatureAttribute));\n    }\n    "],
["\n    uniform float vvColorValues[VV_COLOR_N];\n    uniform vec4 vvColorColors[VV_COLOR_N];\n\n    vec4 interpolateColor( float value ) {\n      if (value \x3c\x3d vvColorValues[0]) {\n        return vvColorColors[0];\n      }\n\n      for (int i \x3d 1; i \x3c VV_COLOR_N; ++i) {\n        if (vvColorValues[i] \x3e\x3d value) {\n          float f \x3d (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);\n          return mix(vvColorColors[i-1], vvColorColors[i], f);\n        }\n      }\n\n      return vvColorColors[VV_COLOR_N - 1];\n    }\n\n    vec4 getColor(){\n      return applyOpacity(interpolateColor(colorFeatureAttribute));\n    }\n    "]))))):
(a.attributes.add("color","vec4"),a.vertex.code.add(c.glsl(m||(m=b.__makeTemplateObject(["\n    vec4 getColor(){\n      return applyOpacity(color);\n    }\n    "],["\n    vec4 getColor(){\n      return applyOpacity(color);\n    }\n    "])))))};var f,g,h,k,l,m});