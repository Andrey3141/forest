# PROJECT_STRUCTURE.md

```
forest/
├── CHANGELOG.md
├── FAQ.md
├── LICENSE
├── PROJECT_STRUCTURE.md
├── README.md
├── ROADMAP.md
├── branches.js
├── clock.js
├── hold/
│   ├── app/
│   │   ├── build.gradle.kts
│   │   ├── proguard-rules.pro
│   │   └── src/
│   │       └── main/
│   │           ├── AndroidManifest.xml
│   │           ├── java/
│   │           │   └── com/
│   │           │       └── printer/
│   │           │           └── hold/
│   │           │               └── MainActivity.kt
│   │           └── res/
│   │               ├── drawable/
│   │               │   ├── ic_launcher_background.xml
│   │               │   └── ic_launcher_foreground.xml
│   │               ├── layout/
│   │               │   └── activity_main.xml
│   │               ├── mipmap-anydpi-v26/
│   │               │   ├── ic_launcher.xml
│   │               │   └── ic_launcher_round.xml
│   │               ├── mipmap-hdpi/
│   │               │   ├── ic_launcher.webp
│   │               │   └── ic_launcher_round.webp
│   │               ├── mipmap-mdpi/
│   │               │   ├── ic_launcher.webp
│   │               │   └── ic_launcher_round.webp
│   │               ├── mipmap-xhdpi/
│   │               │   ├── ic_launcher.webp
│   │               │   └── ic_launcher_round.webp
│   │               ├── mipmap-xxhdpi/
│   │               │   ├── ic_launcher.webp
│   │               │   └── ic_launcher_round.webp
│   │               ├── mipmap-xxxhdpi/
│   │               │   ├── ic_launcher.webp
│   │               │   └── ic_launcher_round.webp
│   │               ├── values/
│   │               │   ├── colors.xml
│   │               │   ├── strings.xml
│   │               │   └── themes.xml
│   │               ├── values-night/
│   │               │   └── themes.xml
│   │               └── xml/
│   │                   ├── backup_rules.xml
│   │                   └── data_extraction_rules.xml
│   ├── build.gradle.kts
│   ├── gradle/
│   │   ├── gradle-daemon-jvm.properties
│   │   ├── libs.versions.toml
│   │   └── wrapper/
│   │       ├── gradle-wrapper.jar
│   │       └── gradle-wrapper.properties
│   ├── gradle.properties
│   ├── gradlew
│   ├── gradlew.bat
│   ├── local.properties
│   └── settings.gradle.kts
├── index.html
├── needles.js
├── node_modules/
│   ├── .package-lock.json
│   ├── @akb2/
│   │   ├── math/
│   │   │   ├── README.MD
│   │   │   └── package.json
│   │   ├── three-tree-geometry/
│   │   │   ├── README.md
│   │   │   └── package.json
│   │   └── types-tools/
│   │       ├── README.MD
│   │       └── package.json
│   ├── @dimforge/
│   │   └── rapier3d-compat/
│   │       ├── LICENSE
│   │       ├── README.md
│   │       ├── coarena.d.ts
│   │       ├── control/
│   │       │   ├── character_controller.d.ts
│   │       │   ├── index.d.ts
│   │       │   └── ray_cast_vehicle_controller.d.ts
│   │       ├── dynamics/
│   │       │   ├── ccd_solver.d.ts
│   │       │   ├── coefficient_combine_rule.d.ts
│   │       │   ├── impulse_joint.d.ts
│   │       │   ├── impulse_joint_set.d.ts
│   │       │   ├── index.d.ts
│   │       │   ├── integration_parameters.d.ts
│   │       │   ├── island_manager.d.ts
│   │       │   ├── multibody_joint.d.ts
│   │       │   ├── multibody_joint_set.d.ts
│   │       │   ├── rigid_body.d.ts
│   │       │   └── rigid_body_set.d.ts
│   │       ├── exports.d.ts
│   │       ├── geometry/
│   │       │   ├── broad_phase.d.ts
│   │       │   ├── collider.d.ts
│   │       │   ├── collider_set.d.ts
│   │       │   ├── contact.d.ts
│   │       │   ├── feature.d.ts
│   │       │   ├── index.d.ts
│   │       │   ├── interaction_groups.d.ts
│   │       │   ├── narrow_phase.d.ts
│   │       │   ├── point.d.ts
│   │       │   ├── ray.d.ts
│   │       │   ├── shape.d.ts
│   │       │   └── toi.d.ts
│   │       ├── init.d.ts
│   │       ├── math.d.ts
│   │       ├── package.json
│   │       ├── pipeline/
│   │       │   ├── debug_render_pipeline.d.ts
│   │       │   ├── event_queue.d.ts
│   │       │   ├── index.d.ts
│   │       │   ├── physics_hooks.d.ts
│   │       │   ├── physics_pipeline.d.ts
│   │       │   ├── query_pipeline.d.ts
│   │       │   ├── serialization_pipeline.d.ts
│   │       │   └── world.d.ts
│   │       ├── rapier.cjs.js
│   │       ├── rapier.cjs.js.map
│   │       ├── rapier.d.ts
│   │       ├── rapier.es.js
│   │       ├── rapier.es.js.map
│   │       ├── rapier_wasm3d.d.ts
│   │       ├── rapier_wasm3d.js
│   │       ├── rapier_wasm3d_bg.wasm
│   │       ├── rapier_wasm3d_bg.wasm.d.ts
│   │       └── raw.d.ts
│   ├── @tweenjs/
│   │   └── tween.js/
│   │       ├── LICENSE
│   │       ├── README.md
│   │       └── package.json
│   ├── @types/
│   │   ├── stats.js/
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── index.d.ts
│   │   │   └── package.json
│   │   ├── three/
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── examples/
│   │   │   │   └── jsm/
│   │   │   │       ├── Addons.d.ts
│   │   │   │       ├── animation/
│   │   │   │       │   ├── AnimationClipCreator.d.ts
│   │   │   │       │   └── CCDIKSolver.d.ts
│   │   │   │       ├── capabilities/
│   │   │   │       │   ├── WebGL.d.ts
│   │   │   │       │   └── WebGPU.d.ts
│   │   │   │       ├── controls/
│   │   │   │       │   ├── ArcballControls.d.ts
│   │   │   │       │   ├── DragControls.d.ts
│   │   │   │       │   ├── FirstPersonControls.d.ts
│   │   │   │       │   ├── FlyControls.d.ts
│   │   │   │       │   ├── MapControls.d.ts
│   │   │   │       │   ├── OrbitControls.d.ts
│   │   │   │       │   ├── PointerLockControls.d.ts
│   │   │   │       │   ├── TrackballControls.d.ts
│   │   │   │       │   └── TransformControls.d.ts
│   │   │   │       ├── csm/
│   │   │   │       │   ├── CSM.d.ts
│   │   │   │       │   ├── CSMFrustum.d.ts
│   │   │   │       │   ├── CSMHelper.d.ts
│   │   │   │       │   ├── CSMShader.d.ts
│   │   │   │       │   └── CSMShadowNode.d.ts
│   │   │   │       ├── curves/
│   │   │   │       │   ├── CurveExtras.d.ts
│   │   │   │       │   ├── NURBSCurve.d.ts
│   │   │   │       │   ├── NURBSSurface.d.ts
│   │   │   │       │   ├── NURBSUtils.d.ts
│   │   │   │       │   └── NURBSVolume.d.ts
│   │   │   │       ├── effects/
│   │   │   │       │   ├── AnaglyphEffect.d.ts
│   │   │   │       │   ├── AsciiEffect.d.ts
│   │   │   │       │   ├── OutlineEffect.d.ts
│   │   │   │       │   ├── ParallaxBarrierEffect.d.ts
│   │   │   │       │   └── StereoEffect.d.ts
│   │   │   │       ├── environments/
│   │   │   │       │   ├── ColorEnvironment.d.ts
│   │   │   │       │   ├── DebugEnvironment.d.ts
│   │   │   │       │   └── RoomEnvironment.d.ts
│   │   │   │       ├── exporters/
│   │   │   │       │   ├── DRACOExporter.d.ts
│   │   │   │       │   ├── EXRExporter.d.ts
│   │   │   │       │   ├── GLTFExporter.d.ts
│   │   │   │       │   ├── KTX2Exporter.d.ts
│   │   │   │       │   ├── OBJExporter.d.ts
│   │   │   │       │   ├── PLYExporter.d.ts
│   │   │   │       │   ├── STLExporter.d.ts
│   │   │   │       │   └── USDZExporter.d.ts
│   │   │   │       ├── geometries/
│   │   │   │       │   ├── BoxLineGeometry.d.ts
│   │   │   │       │   ├── ConvexGeometry.d.ts
│   │   │   │       │   ├── DecalGeometry.d.ts
│   │   │   │       │   ├── ParametricFunctions.d.ts
│   │   │   │       │   ├── ParametricGeometry.d.ts
│   │   │   │       │   ├── RoundedBoxGeometry.d.ts
│   │   │   │       │   ├── TeapotGeometry.d.ts
│   │   │   │       │   └── TextGeometry.d.ts
│   │   │   │       ├── gpgpu/
│   │   │   │       │   └── BitonicSort.d.ts
│   │   │   │       ├── helpers/
│   │   │   │       │   ├── AnimationPathHelper.d.ts
│   │   │   │       │   ├── LightProbeGridHelper.d.ts
│   │   │   │       │   ├── LightProbeHelper.d.ts
│   │   │   │       │   ├── LightProbeHelperGPU.d.ts
│   │   │   │       │   ├── OctreeHelper.d.ts
│   │   │   │       │   ├── PositionalAudioHelper.d.ts
│   │   │   │       │   ├── RapierHelper.d.ts
│   │   │   │       │   ├── RectAreaLightHelper.d.ts
│   │   │   │       │   ├── TextureHelper.d.ts
│   │   │   │       │   ├── TextureHelperGPU.d.ts
│   │   │   │       │   ├── VertexNormalsHelper.d.ts
│   │   │   │       │   ├── VertexTangentsHelper.d.ts
│   │   │   │       │   └── ViewHelper.d.ts
│   │   │   │       ├── inspector/
│   │   │   │       │   ├── Extension.d.ts
│   │   │   │       │   ├── Inspector.d.ts
│   │   │   │       │   ├── RendererInspector.d.ts
│   │   │   │       │   ├── extensions/
│   │   │   │       │   │   └── tsl-graph/
│   │   │   │       │   │       ├── TSLGraphEditor.d.ts
│   │   │   │       │   │       └── TSLGraphLoader.d.ts
│   │   │   │       │   ├── tabs/
│   │   │   │       │   │   └── Parameters.d.ts
│   │   │   │       │   └── ui/
│   │   │   │       │       ├── Item.d.ts
│   │   │   │       │       ├── Tab.d.ts
│   │   │   │       │       └── Values.d.ts
│   │   │   │       ├── interaction/
│   │   │   │       │   └── InteractionManager.d.ts
│   │   │   │       ├── interactive/
│   │   │   │       │   ├── HTMLMesh.d.ts
│   │   │   │       │   ├── InteractiveGroup.d.ts
│   │   │   │       │   ├── SelectionBox.d.ts
│   │   │   │       │   └── SelectionHelper.d.ts
│   │   │   │       ├── libs/
│   │   │   │       │   ├── fflate.module.d.ts
│   │   │   │       │   ├── lil-gui.module.min.d.ts
│   │   │   │       │   ├── meshopt_decoder.module.d.ts
│   │   │   │       │   ├── stats.module.d.ts
│   │   │   │       │   └── tween.module.d.ts
│   │   │   │       ├── lighting/
│   │   │   │       │   ├── DynamicLighting.d.ts
│   │   │   │       │   ├── LightProbeGrid.d.ts
│   │   │   │       │   └── TiledLighting.d.ts
│   │   │   │       ├── lights/
│   │   │   │       │   ├── LightProbeGenerator.d.ts
│   │   │   │       │   ├── RectAreaLightTexturesLib.d.ts
│   │   │   │       │   └── RectAreaLightUniformsLib.d.ts
│   │   │   │       ├── lines/
│   │   │   │       │   ├── Line2.d.ts
│   │   │   │       │   ├── LineGeometry.d.ts
│   │   │   │       │   ├── LineMaterial.d.ts
│   │   │   │       │   ├── LineSegments2.d.ts
│   │   │   │       │   ├── LineSegmentsGeometry.d.ts
│   │   │   │       │   ├── Wireframe.d.ts
│   │   │   │       │   ├── WireframeGeometry2.d.ts
│   │   │   │       │   └── webgpu/
│   │   │   │       │       ├── Line2.d.ts
│   │   │   │       │       ├── LineSegments2.d.ts
│   │   │   │       │       └── Wireframe.d.ts
│   │   │   │       ├── loaders/
│   │   │   │       │   ├── 3DMLoader.d.ts
│   │   │   │       │   ├── 3MFLoader.d.ts
│   │   │   │       │   ├── AMFLoader.d.ts
│   │   │   │       │   ├── BVHLoader.d.ts
│   │   │   │       │   ├── ColladaLoader.d.ts
│   │   │   │       │   ├── DDSLoader.d.ts
│   │   │   │       │   ├── DRACOLoader.d.ts
│   │   │   │       │   ├── EXRLoader.d.ts
│   │   │   │       │   ├── FBXLoader.d.ts
│   │   │   │       │   ├── FontLoader.d.ts
│   │   │   │       │   ├── GCodeLoader.d.ts
│   │   │   │       │   ├── GLTFLoader.d.ts
│   │   │   │       │   ├── HDRCubeTextureLoader.d.ts
│   │   │   │       │   ├── HDRLoader.d.ts
│   │   │   │       │   ├── IESLoader.d.ts
│   │   │   │       │   ├── KMZLoader.d.ts
│   │   │   │       │   ├── KTX2Loader.d.ts
│   │   │   │       │   ├── KTXLoader.d.ts
│   │   │   │       │   ├── LDrawLoader.d.ts
│   │   │   │       │   ├── LUT3dlLoader.d.ts
│   │   │   │       │   ├── LUTCubeLoader.d.ts
│   │   │   │       │   ├── LUTImageLoader.d.ts
│   │   │   │       │   ├── LWOLoader.d.ts
│   │   │   │       │   ├── LottieLoader.d.ts
│   │   │   │       │   ├── MD2Loader.d.ts
│   │   │   │       │   ├── MDDLoader.d.ts
│   │   │   │       │   ├── MTLLoader.d.ts
│   │   │   │       │   ├── MaterialXLoader.d.ts
│   │   │   │       │   ├── NRRDLoader.d.ts
│   │   │   │       │   ├── OBJLoader.d.ts
│   │   │   │       │   ├── PCDLoader.d.ts
│   │   │   │       │   ├── PDBLoader.d.ts
│   │   │   │       │   ├── PLYLoader.d.ts
│   │   │   │       │   ├── PVRLoader.d.ts
│   │   │   │       │   ├── RGBELoader.d.ts
│   │   │   │       │   ├── STLLoader.d.ts
│   │   │   │       │   ├── SVGLoader.d.ts
│   │   │   │       │   ├── TDSLoader.d.ts
│   │   │   │       │   ├── TGALoader.d.ts
│   │   │   │       │   ├── TIFFLoader.d.ts
│   │   │   │       │   ├── TTFLoader.d.ts
│   │   │   │       │   ├── USDLoader.d.ts
│   │   │   │       │   ├── USDZLoader.d.ts
│   │   │   │       │   ├── UltraHDRLoader.d.ts
│   │   │   │       │   ├── VOXLoader.d.ts
│   │   │   │       │   ├── VRMLLoader.d.ts
│   │   │   │       │   ├── VTKLoader.d.ts
│   │   │   │       │   └── XYZLoader.d.ts
│   │   │   │       ├── materials/
│   │   │   │       │   ├── LDrawConditionalLineMaterial.d.ts
│   │   │   │       │   ├── LDrawConditionalLineNodeMaterial.d.ts
│   │   │   │       │   └── WoodNodeMaterial.d.ts
│   │   │   │       ├── math/
│   │   │   │       │   ├── Capsule.d.ts
│   │   │   │       │   ├── ColorConverter.d.ts
│   │   │   │       │   ├── ColorSpaces.d.ts
│   │   │   │       │   ├── ConvexHull.d.ts
│   │   │   │       │   ├── ImprovedNoise.d.ts
│   │   │   │       │   ├── Lut.d.ts
│   │   │   │       │   ├── MeshSurfaceSampler.d.ts
│   │   │   │       │   ├── OBB.d.ts
│   │   │   │       │   ├── Octree.d.ts
│   │   │   │       │   └── SimplexNoise.d.ts
│   │   │   │       ├── misc/
│   │   │   │       │   ├── ConvexObjectBreaker.d.ts
│   │   │   │       │   ├── GPUComputationRenderer.d.ts
│   │   │   │       │   ├── Gyroscope.d.ts
│   │   │   │       │   ├── MD2Character.d.ts
│   │   │   │       │   ├── MD2CharacterComplex.d.ts
│   │   │   │       │   ├── MorphAnimMesh.d.ts
│   │   │   │       │   ├── MorphBlendMesh.d.ts
│   │   │   │       │   ├── ProgressiveLightMap.d.ts
│   │   │   │       │   ├── ProgressiveLightMapGPU.d.ts
│   │   │   │       │   ├── RollerCoaster.d.ts
│   │   │   │       │   ├── TubePainter.d.ts
│   │   │   │       │   ├── Volume.d.ts
│   │   │   │       │   └── VolumeSlice.d.ts
│   │   │   │       ├── modifiers/
│   │   │   │       │   ├── CurveModifier.d.ts
│   │   │   │       │   ├── CurveModifierGPU.d.ts
│   │   │   │       │   ├── EdgeSplitModifier.d.ts
│   │   │   │       │   ├── SimplifyModifier.d.ts
│   │   │   │       │   └── TessellateModifier.d.ts
│   │   │   │       ├── objects/
│   │   │   │       │   ├── GroundedSkybox.d.ts
│   │   │   │       │   ├── Lensflare.d.ts
│   │   │   │       │   ├── LensflareMesh.d.ts
│   │   │   │       │   ├── MarchingCubes.d.ts
│   │   │   │       │   ├── Reflector.d.ts
│   │   │   │       │   ├── ReflectorForSSRPass.d.ts
│   │   │   │       │   ├── Refractor.d.ts
│   │   │   │       │   ├── ShadowMesh.d.ts
│   │   │   │       │   ├── Sky.d.ts
│   │   │   │       │   ├── SkyMesh.d.ts
│   │   │   │       │   ├── Water.d.ts
│   │   │   │       │   ├── Water2.d.ts
│   │   │   │       │   ├── Water2Mesh.d.ts
│   │   │   │       │   └── WaterMesh.d.ts
│   │   │   │       ├── physics/
│   │   │   │       │   ├── AmmoPhysics.d.ts
│   │   │   │       │   ├── JoltPhysics.d.ts
│   │   │   │       │   └── RapierPhysics.d.ts
│   │   │   │       ├── postprocessing/
│   │   │   │       │   ├── AfterimagePass.d.ts
│   │   │   │       │   ├── BloomPass.d.ts
│   │   │   │       │   ├── BokehPass.d.ts
│   │   │   │       │   ├── ClearPass.d.ts
│   │   │   │       │   ├── CubeTexturePass.d.ts
│   │   │   │       │   ├── DotScreenPass.d.ts
│   │   │   │       │   ├── EffectComposer.d.ts
│   │   │   │       │   ├── FXAAPass.d.ts
│   │   │   │       │   ├── FilmPass.d.ts
│   │   │   │       │   ├── GTAOPass.d.ts
│   │   │   │       │   ├── GlitchPass.d.ts
│   │   │   │       │   ├── HalftonePass.d.ts
│   │   │   │       │   ├── LUTPass.d.ts
│   │   │   │       │   ├── MaskPass.d.ts
│   │   │   │       │   ├── OutlinePass.d.ts
│   │   │   │       │   ├── OutputPass.d.ts
│   │   │   │       │   ├── Pass.d.ts
│   │   │   │       │   ├── RenderPass.d.ts
│   │   │   │       │   ├── RenderPixelatedPass.d.ts
│   │   │   │       │   ├── RenderTransitionPass.d.ts
│   │   │   │       │   ├── SAOPass.d.ts
│   │   │   │       │   ├── SMAAPass.d.ts
│   │   │   │       │   ├── SSAARenderPass.d.ts
│   │   │   │       │   ├── SSAOPass.d.ts
│   │   │   │       │   ├── SSRPass.d.ts
│   │   │   │       │   ├── SavePass.d.ts
│   │   │   │       │   ├── ShaderPass.d.ts
│   │   │   │       │   ├── TAARenderPass.d.ts
│   │   │   │       │   ├── TexturePass.d.ts
│   │   │   │       │   └── UnrealBloomPass.d.ts
│   │   │   │       ├── renderers/
│   │   │   │       │   ├── CSS2DRenderer.d.ts
│   │   │   │       │   ├── CSS3DRenderer.d.ts
│   │   │   │       │   ├── Projector.d.ts
│   │   │   │       │   └── SVGRenderer.d.ts
│   │   │   │       ├── shaders/
│   │   │   │       │   ├── ACESFilmicToneMappingShader.d.ts
│   │   │   │       │   ├── AfterimageShader.d.ts
│   │   │   │       │   ├── BasicShader.d.ts
│   │   │   │       │   ├── BleachBypassShader.d.ts
│   │   │   │       │   ├── BlendShader.d.ts
│   │   │   │       │   ├── BokehShader.d.ts
│   │   │   │       │   ├── BokehShader2.d.ts
│   │   │   │       │   ├── BrightnessContrastShader.d.ts
│   │   │   │       │   ├── ColorCorrectionShader.d.ts
│   │   │   │       │   ├── ColorifyShader.d.ts
│   │   │   │       │   ├── ConvolutionShader.d.ts
│   │   │   │       │   ├── CopyShader.d.ts
│   │   │   │       │   ├── DOFMipMapShader.d.ts
│   │   │   │       │   ├── DepthLimitedBlurShader.d.ts
│   │   │   │       │   ├── DigitalGlitch.d.ts
│   │   │   │       │   ├── DotScreenShader.d.ts
│   │   │   │       │   ├── ExposureShader.d.ts
│   │   │   │       │   ├── FXAAShader.d.ts
│   │   │   │       │   ├── FilmShader.d.ts
│   │   │   │       │   ├── FocusShader.d.ts
│   │   │   │       │   ├── FreiChenShader.d.ts
│   │   │   │       │   ├── GTAOShader.d.ts
│   │   │   │       │   ├── GammaCorrectionShader.d.ts
│   │   │   │       │   ├── HalftoneShader.d.ts
│   │   │   │       │   ├── HorizontalBlurShader.d.ts
│   │   │   │       │   ├── HorizontalTiltShiftShader.d.ts
│   │   │   │       │   ├── HueSaturationShader.d.ts
│   │   │   │       │   ├── KaleidoShader.d.ts
│   │   │   │       │   ├── LuminosityHighPassShader.d.ts
│   │   │   │       │   ├── LuminosityShader.d.ts
│   │   │   │       │   ├── MirrorShader.d.ts
│   │   │   │       │   ├── NormalMapShader.d.ts
│   │   │   │       │   ├── OutputShader.d.ts
│   │   │   │       │   ├── PoissonDenoiseShader.d.ts
│   │   │   │       │   ├── RGBShiftShader.d.ts
│   │   │   │       │   ├── SAOShader.d.ts
│   │   │   │       │   ├── SMAAShader.d.ts
│   │   │   │       │   ├── SSAOShader.d.ts
│   │   │   │       │   ├── SSRShader.d.ts
│   │   │   │       │   ├── SepiaShader.d.ts
│   │   │   │       │   ├── SobelOperatorShader.d.ts
│   │   │   │       │   ├── SubsurfaceScatteringShader.d.ts
│   │   │   │       │   ├── TechnicolorShader.d.ts
│   │   │   │       │   ├── ToonShader.d.ts
│   │   │   │       │   ├── TriangleBlurShader.d.ts
│   │   │   │       │   ├── UnpackDepthRGBAShader.d.ts
│   │   │   │       │   ├── VelocityShader.d.ts
│   │   │   │       │   ├── VerticalBlurShader.d.ts
│   │   │   │       │   ├── VerticalTiltShiftShader.d.ts
│   │   │   │       │   ├── VignetteShader.d.ts
│   │   │   │       │   ├── VolumeShader.d.ts
│   │   │   │       │   └── WaterRefractionShader.d.ts
│   │   │   │       ├── textures/
│   │   │   │       │   └── FlakesTexture.d.ts
│   │   │   │       ├── transpiler/
│   │   │   │       │   ├── AST.d.ts
│   │   │   │       │   ├── GLSLDecoder.d.ts
│   │   │   │       │   ├── ShaderToyDecoder.d.ts
│   │   │   │       │   ├── TSLEncoder.d.ts
│   │   │   │       │   └── Transpiler.d.ts
│   │   │   │       ├── tsl/
│   │   │   │       │   ├── WebGLNodesHandler.d.ts
│   │   │   │       │   ├── display/
│   │   │   │       │   │   ├── AfterImageNode.d.ts
│   │   │   │       │   │   ├── AnaglyphPassNode.d.ts
│   │   │   │       │   │   ├── AnamorphicNode.d.ts
│   │   │   │       │   │   ├── BilateralBlurNode.d.ts
│   │   │   │       │   │   ├── BleachBypass.d.ts
│   │   │   │       │   │   ├── BloomNode.d.ts
│   │   │   │       │   │   ├── CRT.d.ts
│   │   │   │       │   │   ├── ChromaticAberrationNode.d.ts
│   │   │   │       │   │   ├── DenoiseNode.d.ts
│   │   │   │       │   │   ├── DepthOfFieldNode.d.ts
│   │   │   │       │   │   ├── DotScreenNode.d.ts
│   │   │   │       │   │   ├── FSR1Node.d.ts
│   │   │   │       │   │   ├── FXAANode.d.ts
│   │   │   │       │   │   ├── FilmNode.d.ts
│   │   │   │       │   │   ├── GTAONode.d.ts
│   │   │   │       │   │   ├── GaussianBlurNode.d.ts
│   │   │   │       │   │   ├── GodraysNode.d.ts
│   │   │   │       │   │   ├── LensflareNode.d.ts
│   │   │   │       │   │   ├── Lut3DNode.d.ts
│   │   │   │       │   │   ├── MotionBlur.d.ts
│   │   │   │       │   │   ├── OutlineNode.d.ts
│   │   │   │       │   │   ├── ParallaxBarrierPassNode.d.ts
│   │   │   │       │   │   ├── PixelationPassNode.d.ts
│   │   │   │       │   │   ├── RGBShiftNode.d.ts
│   │   │   │       │   │   ├── RetroPassNode.d.ts
│   │   │   │       │   │   ├── SMAANode.d.ts
│   │   │   │       │   │   ├── SSAAPassNode.d.ts
│   │   │   │       │   │   ├── SSGINode.d.ts
│   │   │   │       │   │   ├── SSRNode.d.ts
│   │   │   │       │   │   ├── SSSNode.d.ts
│   │   │   │       │   │   ├── Sepia.d.ts
│   │   │   │       │   │   ├── Shape.d.ts
│   │   │   │       │   │   ├── SharpenNode.d.ts
│   │   │   │       │   │   ├── SobelOperatorNode.d.ts
│   │   │   │       │   │   ├── StereoCompositePassNode.d.ts
│   │   │   │       │   │   ├── StereoPassNode.d.ts
│   │   │   │       │   │   ├── TAAUNode.d.ts
│   │   │   │       │   │   ├── TRAANode.d.ts
│   │   │   │       │   │   ├── TransitionNode.d.ts
│   │   │   │       │   │   ├── boxBlur.d.ts
│   │   │   │       │   │   ├── depthAwareBlend.d.ts
│   │   │   │       │   │   ├── hashBlur.d.ts
│   │   │   │       │   │   └── radialBlur.d.ts
│   │   │   │       │   ├── lighting/
│   │   │   │       │   │   ├── DynamicLightsNode.d.ts
│   │   │   │       │   │   ├── TiledLightsNode.d.ts
│   │   │   │       │   │   └── data/
│   │   │   │       │   │       ├── AmbientLightDataNode.d.ts
│   │   │   │       │   │       ├── DirectionalLightDataNode.d.ts
│   │   │   │       │   │       ├── HemisphereLightDataNode.d.ts
│   │   │   │       │   │       ├── PointLightDataNode.d.ts
│   │   │   │       │   │       └── SpotLightDataNode.d.ts
│   │   │   │       │   ├── math/
│   │   │   │       │   │   └── Bayer.d.ts
│   │   │   │       │   ├── shadows/
│   │   │   │       │   │   ├── TileShadowNode.d.ts
│   │   │   │       │   │   └── TileShadowNodeHelper.d.ts
│   │   │   │       │   └── utils/
│   │   │   │       │       └── Raymarching.d.ts
│   │   │   │       ├── utils/
│   │   │   │       │   ├── BufferGeometryUtils.d.ts
│   │   │   │       │   ├── CameraUtils.d.ts
│   │   │   │       │   ├── ColorUtils.d.ts
│   │   │   │       │   ├── GeometryCompressionUtils.d.ts
│   │   │   │       │   ├── GeometryUtils.d.ts
│   │   │   │       │   ├── LDrawUtils.d.ts
│   │   │   │       │   ├── SceneOptimizer.d.ts
│   │   │   │       │   ├── SceneUtils.d.ts
│   │   │   │       │   ├── ShadowMapViewer.d.ts
│   │   │   │       │   ├── ShadowMapViewerGPU.d.ts
│   │   │   │       │   ├── SkeletonUtils.d.ts
│   │   │   │       │   ├── SortUtils.d.ts
│   │   │   │       │   ├── UVsDebug.d.ts
│   │   │   │       │   ├── WebGLTextureUtils.d.ts
│   │   │   │       │   ├── WebGPUTextureUtils.d.ts
│   │   │   │       │   └── WorkerPool.d.ts
│   │   │   │       └── webxr/
│   │   │   │           ├── ARButton.d.ts
│   │   │   │           ├── OculusHandModel.d.ts
│   │   │   │           ├── OculusHandPointerModel.d.ts
│   │   │   │           ├── Text2D.d.ts
│   │   │   │           ├── VRButton.d.ts
│   │   │   │           ├── XRButton.d.ts
│   │   │   │           ├── XRControllerModelFactory.d.ts
│   │   │   │           ├── XREstimatedLight.d.ts
│   │   │   │           ├── XRHandMeshModel.d.ts
│   │   │   │           ├── XRHandModelFactory.d.ts
│   │   │   │           ├── XRHandPrimitiveModel.d.ts
│   │   │   │           └── XRPlanes.d.ts
│   │   │   ├── index.d.ts
│   │   │   ├── package.json
│   │   │   └── src/
│   │   │       ├── Three.Core.d.ts
│   │   │       ├── Three.TSL.d.ts
│   │   │       ├── Three.WebGPU.Nodes.d.ts
│   │   │       ├── Three.WebGPU.d.ts
│   │   │       ├── Three.d.ts
│   │   │       ├── animation/
│   │   │       │   ├── AnimationAction.d.ts
│   │   │       │   ├── AnimationClip.d.ts
│   │   │       │   ├── AnimationMixer.d.ts
│   │   │       │   ├── AnimationObjectGroup.d.ts
│   │   │       │   ├── AnimationUtils.d.ts
│   │   │       │   ├── KeyframeTrack.d.ts
│   │   │       │   ├── PropertyBinding.d.ts
│   │   │       │   ├── PropertyMixer.d.ts
│   │   │       │   └── tracks/
│   │   │       │       ├── BooleanKeyframeTrack.d.ts
│   │   │       │       ├── ColorKeyframeTrack.d.ts
│   │   │       │       ├── NumberKeyframeTrack.d.ts
│   │   │       │       ├── QuaternionKeyframeTrack.d.ts
│   │   │       │       ├── StringKeyframeTrack.d.ts
│   │   │       │       └── VectorKeyframeTrack.d.ts
│   │   │       ├── audio/
│   │   │       │   ├── Audio.d.ts
│   │   │       │   ├── AudioAnalyser.d.ts
│   │   │       │   ├── AudioContext.d.ts
│   │   │       │   ├── AudioListener.d.ts
│   │   │       │   └── PositionalAudio.d.ts
│   │   │       ├── cameras/
│   │   │       │   ├── ArrayCamera.d.ts
│   │   │       │   ├── Camera.d.ts
│   │   │       │   ├── CubeCamera.d.ts
│   │   │       │   ├── OrthographicCamera.d.ts
│   │   │       │   ├── PerspectiveCamera.d.ts
│   │   │       │   └── StereoCamera.d.ts
│   │   │       ├── constants.d.ts
│   │   │       ├── core/
│   │   │       │   ├── BufferAttribute.d.ts
│   │   │       │   ├── BufferGeometry.d.ts
│   │   │       │   ├── Clock.d.ts
│   │   │       │   ├── EventDispatcher.d.ts
│   │   │       │   ├── GLBufferAttribute.d.ts
│   │   │       │   ├── InstancedBufferAttribute.d.ts
│   │   │       │   ├── InstancedBufferGeometry.d.ts
│   │   │       │   ├── InstancedInterleavedBuffer.d.ts
│   │   │       │   ├── InterleavedBuffer.d.ts
│   │   │       │   ├── InterleavedBufferAttribute.d.ts
│   │   │       │   ├── Layers.d.ts
│   │   │       │   ├── Object3D.d.ts
│   │   │       │   ├── Raycaster.d.ts
│   │   │       │   ├── RenderTarget.d.ts
│   │   │       │   ├── RenderTarget3D.d.ts
│   │   │       │   ├── Timer.d.ts
│   │   │       │   ├── Uniform.d.ts
│   │   │       │   └── UniformsGroup.d.ts
│   │   │       ├── extras/
│   │   │       │   ├── Controls.d.ts
│   │   │       │   ├── DataUtils.d.ts
│   │   │       │   ├── Earcut.d.ts
│   │   │       │   ├── ImageUtils.d.ts
│   │   │       │   ├── PMREMGenerator.d.ts
│   │   │       │   ├── ShapeUtils.d.ts
│   │   │       │   ├── TextureUtils.d.ts
│   │   │       │   ├── core/
│   │   │       │   │   ├── Curve.d.ts
│   │   │       │   │   ├── CurvePath.d.ts
│   │   │       │   │   ├── Interpolations.d.ts
│   │   │       │   │   ├── Path.d.ts
│   │   │       │   │   ├── Shape.d.ts
│   │   │       │   │   └── ShapePath.d.ts
│   │   │       │   └── curves/
│   │   │       │       ├── ArcCurve.d.ts
│   │   │       │       ├── CatmullRomCurve3.d.ts
│   │   │       │       ├── CubicBezierCurve.d.ts
│   │   │       │       ├── CubicBezierCurve3.d.ts
│   │   │       │       ├── Curves.d.ts
│   │   │       │       ├── EllipseCurve.d.ts
│   │   │       │       ├── LineCurve.d.ts
│   │   │       │       ├── LineCurve3.d.ts
│   │   │       │       ├── QuadraticBezierCurve.d.ts
│   │   │       │       ├── QuadraticBezierCurve3.d.ts
│   │   │       │       └── SplineCurve.d.ts
│   │   │       ├── geometries/
│   │   │       │   ├── BoxGeometry.d.ts
│   │   │       │   ├── CapsuleGeometry.d.ts
│   │   │       │   ├── CircleGeometry.d.ts
│   │   │       │   ├── ConeGeometry.d.ts
│   │   │       │   ├── CylinderGeometry.d.ts
│   │   │       │   ├── DodecahedronGeometry.d.ts
│   │   │       │   ├── EdgesGeometry.d.ts
│   │   │       │   ├── ExtrudeGeometry.d.ts
│   │   │       │   ├── Geometries.d.ts
│   │   │       │   ├── IcosahedronGeometry.d.ts
│   │   │       │   ├── LatheGeometry.d.ts
│   │   │       │   ├── OctahedronGeometry.d.ts
│   │   │       │   ├── PlaneGeometry.d.ts
│   │   │       │   ├── PolyhedronGeometry.d.ts
│   │   │       │   ├── RingGeometry.d.ts
│   │   │       │   ├── ShapeGeometry.d.ts
│   │   │       │   ├── SphereGeometry.d.ts
│   │   │       │   ├── TetrahedronGeometry.d.ts
│   │   │       │   ├── TorusGeometry.d.ts
│   │   │       │   ├── TorusKnotGeometry.d.ts
│   │   │       │   ├── TubeGeometry.d.ts
│   │   │       │   └── WireframeGeometry.d.ts
│   │   │       ├── helpers/
│   │   │       │   ├── ArrowHelper.d.ts
│   │   │       │   ├── AxesHelper.d.ts
│   │   │       │   ├── Box3Helper.d.ts
│   │   │       │   ├── BoxHelper.d.ts
│   │   │       │   ├── CameraHelper.d.ts
│   │   │       │   ├── DirectionalLightHelper.d.ts
│   │   │       │   ├── GridHelper.d.ts
│   │   │       │   ├── HemisphereLightHelper.d.ts
│   │   │       │   ├── PlaneHelper.d.ts
│   │   │       │   ├── PointLightHelper.d.ts
│   │   │       │   ├── PolarGridHelper.d.ts
│   │   │       │   ├── SkeletonHelper.d.ts
│   │   │       │   └── SpotLightHelper.d.ts
│   │   │       ├── lights/
│   │   │       │   ├── AmbientLight.d.ts
│   │   │       │   ├── DirectionalLight.d.ts
│   │   │       │   ├── DirectionalLightShadow.d.ts
│   │   │       │   ├── HemisphereLight.d.ts
│   │   │       │   ├── Light.d.ts
│   │   │       │   ├── LightProbe.d.ts
│   │   │       │   ├── LightShadow.d.ts
│   │   │       │   ├── PointLight.d.ts
│   │   │       │   ├── PointLightShadow.d.ts
│   │   │       │   ├── RectAreaLight.d.ts
│   │   │       │   ├── SpotLight.d.ts
│   │   │       │   ├── SpotLightShadow.d.ts
│   │   │       │   └── webgpu/
│   │   │       │       ├── IESSpotLight.d.ts
│   │   │       │       └── ProjectorLight.d.ts
│   │   │       ├── loaders/
│   │   │       │   ├── AnimationLoader.d.ts
│   │   │       │   ├── AudioLoader.d.ts
│   │   │       │   ├── BufferGeometryLoader.d.ts
│   │   │       │   ├── Cache.d.ts
│   │   │       │   ├── CompressedTextureLoader.d.ts
│   │   │       │   ├── CubeTextureLoader.d.ts
│   │   │       │   ├── DataTextureLoader.d.ts
│   │   │       │   ├── FileLoader.d.ts
│   │   │       │   ├── ImageBitmapLoader.d.ts
│   │   │       │   ├── ImageLoader.d.ts
│   │   │       │   ├── Loader.d.ts
│   │   │       │   ├── LoaderUtils.d.ts
│   │   │       │   ├── LoadingManager.d.ts
│   │   │       │   ├── MaterialLoader.d.ts
│   │   │       │   ├── ObjectLoader.d.ts
│   │   │       │   ├── TextureLoader.d.ts
│   │   │       │   └── nodes/
│   │   │       │       ├── NodeLoader.d.ts
│   │   │       │       ├── NodeMaterialLoader.d.ts
│   │   │       │       └── NodeObjectLoader.d.ts
│   │   │       ├── materials/
│   │   │       │   ├── LineBasicMaterial.d.ts
│   │   │       │   ├── LineDashedMaterial.d.ts
│   │   │       │   ├── Material.d.ts
│   │   │       │   ├── Materials.d.ts
│   │   │       │   ├── MeshBasicMaterial.d.ts
│   │   │       │   ├── MeshDepthMaterial.d.ts
│   │   │       │   ├── MeshDistanceMaterial.d.ts
│   │   │       │   ├── MeshLambertMaterial.d.ts
│   │   │       │   ├── MeshMatcapMaterial.d.ts
│   │   │       │   ├── MeshNormalMaterial.d.ts
│   │   │       │   ├── MeshPhongMaterial.d.ts
│   │   │       │   ├── MeshPhysicalMaterial.d.ts
│   │   │       │   ├── MeshStandardMaterial.d.ts
│   │   │       │   ├── MeshToonMaterial.d.ts
│   │   │       │   ├── PointsMaterial.d.ts
│   │   │       │   ├── RawShaderMaterial.d.ts
│   │   │       │   ├── ShaderMaterial.d.ts
│   │   │       │   ├── ShadowMaterial.d.ts
│   │   │       │   ├── SpriteMaterial.d.ts
│   │   │       │   └── nodes/
│   │   │       │       ├── Line2NodeMaterial.d.ts
│   │   │       │       ├── LineBasicNodeMaterial.d.ts
│   │   │       │       ├── LineDashedNodeMaterial.d.ts
│   │   │       │       ├── MeshBasicNodeMaterial.d.ts
│   │   │       │       ├── MeshLambertNodeMaterial.d.ts
│   │   │       │       ├── MeshMatcapNodeMaterial.d.ts
│   │   │       │       ├── MeshNormalNodeMaterial.d.ts
│   │   │       │       ├── MeshPhongNodeMaterial.d.ts
│   │   │       │       ├── MeshPhysicalNodeMaterial.d.ts
│   │   │       │       ├── MeshSSSNodeMaterial.d.ts
│   │   │       │       ├── MeshStandardNodeMaterial.d.ts
│   │   │       │       ├── MeshToonNodeMaterial.d.ts
│   │   │       │       ├── NodeMaterial.d.ts
│   │   │       │       ├── NodeMaterials.d.ts
│   │   │       │       ├── PointsNodeMaterial.d.ts
│   │   │       │       ├── ShadowNodeMaterial.d.ts
│   │   │       │       ├── SpriteNodeMaterial.d.ts
│   │   │       │       ├── VolumeNodeMaterial.d.ts
│   │   │       │       └── manager/
│   │   │       │           └── NodeMaterialObserver.d.ts
│   │   │       ├── math/
│   │   │       │   ├── Box2.d.ts
│   │   │       │   ├── Box3.d.ts
│   │   │       │   ├── Color.d.ts
│   │   │       │   ├── ColorManagement.d.ts
│   │   │       │   ├── Cylindrical.d.ts
│   │   │       │   ├── Euler.d.ts
│   │   │       │   ├── Frustum.d.ts
│   │   │       │   ├── FrustumArray.d.ts
│   │   │       │   ├── Interpolant.d.ts
│   │   │       │   ├── Line3.d.ts
│   │   │       │   ├── MathUtils.d.ts
│   │   │       │   ├── Matrix2.d.ts
│   │   │       │   ├── Matrix3.d.ts
│   │   │       │   ├── Matrix4.d.ts
│   │   │       │   ├── Plane.d.ts
│   │   │       │   ├── Quaternion.d.ts
│   │   │       │   ├── Ray.d.ts
│   │   │       │   ├── Sphere.d.ts
│   │   │       │   ├── Spherical.d.ts
│   │   │       │   ├── SphericalHarmonics3.d.ts
│   │   │       │   ├── Triangle.d.ts
│   │   │       │   ├── Vector2.d.ts
│   │   │       │   ├── Vector3.d.ts
│   │   │       │   ├── Vector4.d.ts
│   │   │       │   └── interpolants/
│   │   │       │       ├── BezierInterpolant.d.ts
│   │   │       │       ├── CubicInterpolant.d.ts
│   │   │       │       ├── DiscreteInterpolant.d.ts
│   │   │       │       ├── LinearInterpolant.d.ts
│   │   │       │       └── QuaternionLinearInterpolant.d.ts
│   │   │       ├── nodes/
│   │   │       │   ├── Nodes.d.ts
│   │   │       │   ├── TSL.d.ts
│   │   │       │   ├── accessors/
│   │   │       │   │   ├── AccessorsUtils.d.ts
│   │   │       │   │   ├── Arrays.d.ts
│   │   │       │   │   ├── BatchNode.d.ts
│   │   │       │   │   ├── Bitangent.d.ts
│   │   │       │   │   ├── BufferAttributeNode.d.ts
│   │   │       │   │   ├── BufferNode.d.ts
│   │   │       │   │   ├── BuiltinNode.d.ts
│   │   │       │   │   ├── Camera.d.ts
│   │   │       │   │   ├── ClippingNode.d.ts
│   │   │       │   │   ├── CubeTextureNode.d.ts
│   │   │       │   │   ├── InstanceNode.d.ts
│   │   │       │   │   ├── InstancedMeshNode.d.ts
│   │   │       │   │   ├── Lights.d.ts
│   │   │       │   │   ├── MaterialNode.d.ts
│   │   │       │   │   ├── MaterialProperties.d.ts
│   │   │       │   │   ├── MaterialReferenceNode.d.ts
│   │   │       │   │   ├── ModelNode.d.ts
│   │   │       │   │   ├── ModelViewProjectionNode.d.ts
│   │   │       │   │   ├── MorphNode.d.ts
│   │   │       │   │   ├── Normal.d.ts
│   │   │       │   │   ├── Object3DNode.d.ts
│   │   │       │   │   ├── PointUVNode.d.ts
│   │   │       │   │   ├── Position.d.ts
│   │   │       │   │   ├── ReferenceBaseNode.d.ts
│   │   │       │   │   ├── ReferenceNode.d.ts
│   │   │       │   │   ├── ReflectVector.d.ts
│   │   │       │   │   ├── RendererReferenceNode.d.ts
│   │   │       │   │   ├── SceneProperties.d.ts
│   │   │       │   │   ├── SkinningNode.d.ts
│   │   │       │   │   ├── StorageBufferNode.d.ts
│   │   │       │   │   ├── StorageTextureNode.d.ts
│   │   │       │   │   ├── Tangent.d.ts
│   │   │       │   │   ├── TangentUtils.d.ts
│   │   │       │   │   ├── Texture3DNode.d.ts
│   │   │       │   │   ├── TextureBicubic.d.ts
│   │   │       │   │   ├── TextureNode.d.ts
│   │   │       │   │   ├── TextureSizeNode.d.ts
│   │   │       │   │   ├── UV.d.ts
│   │   │       │   │   ├── UniformArrayNode.d.ts
│   │   │       │   │   ├── UserDataNode.d.ts
│   │   │       │   │   ├── VelocityNode.d.ts
│   │   │       │   │   └── VertexColorNode.d.ts
│   │   │       │   ├── code/
│   │   │       │   │   ├── CodeNode.d.ts
│   │   │       │   │   ├── ExpressionNode.d.ts
│   │   │       │   │   ├── FunctionCallNode.d.ts
│   │   │       │   │   └── FunctionNode.d.ts
│   │   │       │   ├── core/
│   │   │       │   │   ├── ArrayNode.d.ts
│   │   │       │   │   ├── AssignNode.d.ts
│   │   │       │   │   ├── AttributeNode.d.ts
│   │   │       │   │   ├── BypassNode.d.ts
│   │   │       │   │   ├── ConstNode.d.ts
│   │   │       │   │   ├── ContextNode.d.ts
│   │   │       │   │   ├── IndexNode.d.ts
│   │   │       │   │   ├── InputNode.d.ts
│   │   │       │   │   ├── InspectorNode.d.ts
│   │   │       │   │   ├── IsolateNode.d.ts
│   │   │       │   │   ├── LightingModel.d.ts
│   │   │       │   │   ├── MRTNode.d.ts
│   │   │       │   │   ├── Node.d.ts
│   │   │       │   │   ├── NodeAttribute.d.ts
│   │   │       │   │   ├── NodeBuilder.d.ts
│   │   │       │   │   ├── NodeCache.d.ts
│   │   │       │   │   ├── NodeCode.d.ts
│   │   │       │   │   ├── NodeError.d.ts
│   │   │       │   │   ├── NodeFrame.d.ts
│   │   │       │   │   ├── NodeFunction.d.ts
│   │   │       │   │   ├── NodeFunctionInput.d.ts
│   │   │       │   │   ├── NodeParser.d.ts
│   │   │       │   │   ├── NodeUniform.d.ts
│   │   │       │   │   ├── NodeUtils.d.ts
│   │   │       │   │   ├── NodeVar.d.ts
│   │   │       │   │   ├── NodeVarying.d.ts
│   │   │       │   │   ├── OutputStructNode.d.ts
│   │   │       │   │   ├── ParameterNode.d.ts
│   │   │       │   │   ├── PropertyNode.d.ts
│   │   │       │   │   ├── StackNode.d.ts
│   │   │       │   │   ├── StackTrace.d.ts
│   │   │       │   │   ├── StructNode.d.ts
│   │   │       │   │   ├── StructType.d.ts
│   │   │       │   │   ├── StructTypeNode.d.ts
│   │   │       │   │   ├── SubBuildNode.d.ts
│   │   │       │   │   ├── TempNode.d.ts
│   │   │       │   │   ├── UniformGroupNode.d.ts
│   │   │       │   │   ├── UniformNode.d.ts
│   │   │       │   │   ├── VarNode.d.ts
│   │   │       │   │   ├── VaryingNode.d.ts
│   │   │       │   │   └── constants.d.ts
│   │   │       │   ├── display/
│   │   │       │   │   ├── BlendModes.d.ts
│   │   │       │   │   ├── BumpMapNode.d.ts
│   │   │       │   │   ├── ColorAdjustment.d.ts
│   │   │       │   │   ├── ColorSpaceFunctions.d.ts
│   │   │       │   │   ├── ColorSpaceNode.d.ts
│   │   │       │   │   ├── FrontFacingNode.d.ts
│   │   │       │   │   ├── NormalMapNode.d.ts
│   │   │       │   │   ├── PassNode.d.ts
│   │   │       │   │   ├── RenderOutputNode.d.ts
│   │   │       │   │   ├── ScreenNode.d.ts
│   │   │       │   │   ├── ToneMappingFunctions.d.ts
│   │   │       │   │   ├── ToneMappingNode.d.ts
│   │   │       │   │   ├── ToonOutlinePassNode.d.ts
│   │   │       │   │   ├── ViewportDepthNode.d.ts
│   │   │       │   │   ├── ViewportDepthTextureNode.d.ts
│   │   │       │   │   ├── ViewportSharedTextureNode.d.ts
│   │   │       │   │   └── ViewportTextureNode.d.ts
│   │   │       │   ├── fog/
│   │   │       │   │   └── Fog.d.ts
│   │   │       │   ├── functions/
│   │   │       │   │   ├── BSDF/
│   │   │       │   │   │   ├── BRDF_GGX.d.ts
│   │   │       │   │   │   ├── BRDF_GGX_Multiscatter.d.ts
│   │   │       │   │   │   ├── BRDF_Lambert.d.ts
│   │   │       │   │   │   ├── BRDF_Sheen.d.ts
│   │   │       │   │   │   ├── DFGLUT.d.ts
│   │   │       │   │   │   ├── D_GGX.d.ts
│   │   │       │   │   │   ├── D_GGX_Anisotropic.d.ts
│   │   │       │   │   │   ├── F_Schlick.d.ts
│   │   │       │   │   │   ├── LTC.d.ts
│   │   │       │   │   │   ├── Schlick_to_F0.d.ts
│   │   │       │   │   │   ├── V_GGX_SmithCorrelated.d.ts
│   │   │       │   │   │   └── V_GGX_SmithCorrelated_Anisotropic.d.ts
│   │   │       │   │   ├── BasicLightingModel.d.ts
│   │   │       │   │   ├── PhongLightingModel.d.ts
│   │   │       │   │   ├── PhysicalLightingModel.d.ts
│   │   │       │   │   ├── ShadowMaskModel.d.ts
│   │   │       │   │   ├── ToonLightingModel.d.ts
│   │   │       │   │   ├── VolumetricLightingModel.d.ts
│   │   │       │   │   └── material/
│   │   │       │   │       ├── getAlphaHashThreshold.d.ts
│   │   │       │   │       ├── getGeometryRoughness.d.ts
│   │   │       │   │       ├── getParallaxCorrectNormal.d.ts
│   │   │       │   │       ├── getRoughness.d.ts
│   │   │       │   │       └── getShIrradianceAt.d.ts
│   │   │       │   ├── geometry/
│   │   │       │   │   └── RangeNode.d.ts
│   │   │       │   ├── gpgpu/
│   │   │       │   │   ├── AtomicFunctionNode.d.ts
│   │   │       │   │   ├── BarrierNode.d.ts
│   │   │       │   │   ├── ComputeBuiltinNode.d.ts
│   │   │       │   │   ├── ComputeNode.d.ts
│   │   │       │   │   ├── SubgroupFunctionNode.d.ts
│   │   │       │   │   └── WorkgroupInfoNode.d.ts
│   │   │       │   ├── lighting/
│   │   │       │   │   ├── AONode.d.ts
│   │   │       │   │   ├── AmbientLightNode.d.ts
│   │   │       │   │   ├── AnalyticLightNode.d.ts
│   │   │       │   │   ├── BasicEnvironmentNode.d.ts
│   │   │       │   │   ├── BasicLightMapNode.d.ts
│   │   │       │   │   ├── DirectionalLightNode.d.ts
│   │   │       │   │   ├── EnvironmentNode.d.ts
│   │   │       │   │   ├── HemisphereLightNode.d.ts
│   │   │       │   │   ├── IESSpotLightNode.d.ts
│   │   │       │   │   ├── IrradianceNode.d.ts
│   │   │       │   │   ├── LightProbeNode.d.ts
│   │   │       │   │   ├── LightUtils.d.ts
│   │   │       │   │   ├── LightingContextNode.d.ts
│   │   │       │   │   ├── LightingNode.d.ts
│   │   │       │   │   ├── LightsNode.d.ts
│   │   │       │   │   ├── PointLightNode.d.ts
│   │   │       │   │   ├── PointShadowNode.d.ts
│   │   │       │   │   ├── ProjectorLightNode.d.ts
│   │   │       │   │   ├── RectAreaLightNode.d.ts
│   │   │       │   │   ├── ShadowBaseNode.d.ts
│   │   │       │   │   ├── ShadowFilterNode.d.ts
│   │   │       │   │   ├── ShadowNode.d.ts
│   │   │       │   │   └── SpotLightNode.d.ts
│   │   │       │   ├── materialx/
│   │   │       │   │   ├── MaterialXNodes.d.ts
│   │   │       │   │   └── lib/
│   │   │       │   │       ├── mx_hsv.d.ts
│   │   │       │   │       ├── mx_noise.d.ts
│   │   │       │   │       └── mx_transform_color.d.ts
│   │   │       │   ├── math/
│   │   │       │   │   ├── BitcastNode.d.ts
│   │   │       │   │   ├── BitcountNode.d.ts
│   │   │       │   │   ├── ConditionalNode.d.ts
│   │   │       │   │   ├── Hash.d.ts
│   │   │       │   │   ├── MathNode.d.ts
│   │   │       │   │   ├── MathUtils.d.ts
│   │   │       │   │   ├── OperatorNode.d.ts
│   │   │       │   │   ├── PackFloatNode.d.ts
│   │   │       │   │   ├── TriNoise3D.d.ts
│   │   │       │   │   └── UnpackFloatNode.d.ts
│   │   │       │   ├── parsers/
│   │   │       │   │   ├── GLSLNodeFunction.d.ts
│   │   │       │   │   └── GLSLNodeParser.d.ts
│   │   │       │   ├── pmrem/
│   │   │       │   │   ├── PMREMNode.d.ts
│   │   │       │   │   └── PMREMUtils.d.ts
│   │   │       │   ├── procedural/
│   │   │       │   │   └── Checker.d.ts
│   │   │       │   ├── shapes/
│   │   │       │   │   └── Shapes.d.ts
│   │   │       │   ├── tsl/
│   │   │       │   │   ├── TSLBase.d.ts
│   │   │       │   │   └── TSLCore.d.ts
│   │   │       │   └── utils/
│   │   │       │       ├── ArrayElementNode.d.ts
│   │   │       │       ├── ConvertNode.d.ts
│   │   │       │       ├── CubeMapNode.d.ts
│   │   │       │       ├── DebugNode.d.ts
│   │   │       │       ├── Discard.d.ts
│   │   │       │       ├── EquirectUV.d.ts
│   │   │       │       ├── EventNode.d.ts
│   │   │       │       ├── FlipNode.d.ts
│   │   │       │       ├── FunctionOverloadingNode.d.ts
│   │   │       │       ├── JoinNode.d.ts
│   │   │       │       ├── LoopNode.d.ts
│   │   │       │       ├── MatcapUV.d.ts
│   │   │       │       ├── MaxMipLevelNode.d.ts
│   │   │       │       ├── MemberNode.d.ts
│   │   │       │       ├── Oscillators.d.ts
│   │   │       │       ├── Packing.d.ts
│   │   │       │       ├── PostProcessingUtils.d.ts
│   │   │       │       ├── RTTNode.d.ts
│   │   │       │       ├── ReflectorNode.d.ts
│   │   │       │       ├── Remap.d.ts
│   │   │       │       ├── RotateNode.d.ts
│   │   │       │       ├── SampleNode.d.ts
│   │   │       │       ├── SetNode.d.ts
│   │   │       │       ├── SplitNode.d.ts
│   │   │       │       ├── SpriteSheetUV.d.ts
│   │   │       │       ├── SpriteUtils.d.ts
│   │   │       │       ├── StorageArrayElementNode.d.ts
│   │   │       │       ├── Timer.d.ts
│   │   │       │       ├── TriplanarTextures.d.ts
│   │   │       │       ├── UVUtils.d.ts
│   │   │       │       └── ViewportUtils.d.ts
│   │   │       ├── objects/
│   │   │       │   ├── BatchedMesh.d.ts
│   │   │       │   ├── Bone.d.ts
│   │   │       │   ├── ClippingGroup.d.ts
│   │   │       │   ├── Group.d.ts
│   │   │       │   ├── InstancedMesh.d.ts
│   │   │       │   ├── LOD.d.ts
│   │   │       │   ├── Line.d.ts
│   │   │       │   ├── LineLoop.d.ts
│   │   │       │   ├── LineSegments.d.ts
│   │   │       │   ├── Mesh.d.ts
│   │   │       │   ├── Points.d.ts
│   │   │       │   ├── Skeleton.d.ts
│   │   │       │   ├── SkinnedMesh.d.ts
│   │   │       │   └── Sprite.d.ts
│   │   │       ├── renderers/
│   │   │       │   ├── WebGL3DRenderTarget.d.ts
│   │   │       │   ├── WebGLArrayRenderTarget.d.ts
│   │   │       │   ├── WebGLCubeRenderTarget.d.ts
│   │   │       │   ├── WebGLRenderTarget.d.ts
│   │   │       │   ├── WebGLRenderer.d.ts
│   │   │       │   ├── common/
│   │   │       │   │   ├── Animation.d.ts
│   │   │       │   │   ├── Attributes.d.ts
│   │   │       │   │   ├── Backend.d.ts
│   │   │       │   │   ├── Background.d.ts
│   │   │       │   │   ├── BindGroup.d.ts
│   │   │       │   │   ├── Binding.d.ts
│   │   │       │   │   ├── Bindings.d.ts
│   │   │       │   │   ├── BlendMode.d.ts
│   │   │       │   │   ├── Buffer.d.ts
│   │   │       │   │   ├── BufferUtils.d.ts
│   │   │       │   │   ├── BundleGroup.d.ts
│   │   │       │   │   ├── CanvasTarget.d.ts
│   │   │       │   │   ├── ChainMap.d.ts
│   │   │       │   │   ├── ClippingContext.d.ts
│   │   │       │   │   ├── Color4.d.ts
│   │   │       │   │   ├── ComputePipeline.d.ts
│   │   │       │   │   ├── Constants.d.ts
│   │   │       │   │   ├── CubeRenderTarget.d.ts
│   │   │       │   │   ├── DataMap.d.ts
│   │   │       │   │   ├── Geometries.d.ts
│   │   │       │   │   ├── IndirectStorageBufferAttribute.d.ts
│   │   │       │   │   ├── Info.d.ts
│   │   │       │   │   ├── InspectorBase.d.ts
│   │   │       │   │   ├── Lighting.d.ts
│   │   │       │   │   ├── Pipeline.d.ts
│   │   │       │   │   ├── Pipelines.d.ts
│   │   │       │   │   ├── PostProcessing.d.ts
│   │   │       │   │   ├── ProgrammableStage.d.ts
│   │   │       │   │   ├── QuadMesh.d.ts
│   │   │       │   │   ├── ReadbackBuffer.d.ts
│   │   │       │   │   ├── RenderBundle.d.ts
│   │   │       │   │   ├── RenderBundles.d.ts
│   │   │       │   │   ├── RenderContext.d.ts
│   │   │       │   │   ├── RenderContexts.d.ts
│   │   │       │   │   ├── RenderList.d.ts
│   │   │       │   │   ├── RenderLists.d.ts
│   │   │       │   │   ├── RenderObject.d.ts
│   │   │       │   │   ├── RenderObjectPipeline.d.ts
│   │   │       │   │   ├── RenderObjects.d.ts
│   │   │       │   │   ├── RenderPipeline.d.ts
│   │   │       │   │   ├── Renderer.d.ts
│   │   │       │   │   ├── RendererUtils.d.ts
│   │   │       │   │   ├── SampledTexture.d.ts
│   │   │       │   │   ├── Sampler.d.ts
│   │   │       │   │   ├── Storage3DTexture.d.ts
│   │   │       │   │   ├── StorageArrayTexture.d.ts
│   │   │       │   │   ├── StorageBufferAttribute.d.ts
│   │   │       │   │   ├── StorageInstancedBufferAttribute.d.ts
│   │   │       │   │   ├── StorageTexture.d.ts
│   │   │       │   │   ├── Textures.d.ts
│   │   │       │   │   ├── TimestampQueryPool.d.ts
│   │   │       │   │   ├── Uniform.d.ts
│   │   │       │   │   ├── UniformBuffer.d.ts
│   │   │       │   │   ├── UniformsGroup.d.ts
│   │   │       │   │   ├── XRManager.d.ts
│   │   │       │   │   ├── XRRenderTarget.d.ts
│   │   │       │   │   ├── extras/
│   │   │       │   │   │   └── PMREMGenerator.d.ts
│   │   │       │   │   └── nodes/
│   │   │       │   │       ├── NodeBuilderState.d.ts
│   │   │       │   │       ├── NodeLibrary.d.ts
│   │   │       │   │       ├── NodeManager.d.ts
│   │   │       │   │       ├── NodeSampledTexture.d.ts
│   │   │       │   │       ├── NodeSampler.d.ts
│   │   │       │   │       ├── NodeUniform.d.ts
│   │   │       │   │       └── NodeUniformsGroup.d.ts
│   │   │       │   ├── shaders/
│   │   │       │   │   ├── ShaderChunk.d.ts
│   │   │       │   │   ├── ShaderLib.d.ts
│   │   │       │   │   ├── UniformsLib.d.ts
│   │   │       │   │   └── UniformsUtils.d.ts
│   │   │       │   ├── webgl/
│   │   │       │   │   ├── WebGLAttributes.d.ts
│   │   │       │   │   ├── WebGLBindingStates.d.ts
│   │   │       │   │   ├── WebGLBufferRenderer.d.ts
│   │   │       │   │   ├── WebGLCapabilities.d.ts
│   │   │       │   │   ├── WebGLClipping.d.ts
│   │   │       │   │   ├── WebGLEnvironments.d.ts
│   │   │       │   │   ├── WebGLExtensions.d.ts
│   │   │       │   │   ├── WebGLGeometries.d.ts
│   │   │       │   │   ├── WebGLIndexedBufferRenderer.d.ts
│   │   │       │   │   ├── WebGLInfo.d.ts
│   │   │       │   │   ├── WebGLLights.d.ts
│   │   │       │   │   ├── WebGLObjects.d.ts
│   │   │       │   │   ├── WebGLProgram.d.ts
│   │   │       │   │   ├── WebGLPrograms.d.ts
│   │   │       │   │   ├── WebGLProperties.d.ts
│   │   │       │   │   ├── WebGLRenderLists.d.ts
│   │   │       │   │   ├── WebGLShader.d.ts
│   │   │       │   │   ├── WebGLShadowMap.d.ts
│   │   │       │   │   ├── WebGLState.d.ts
│   │   │       │   │   ├── WebGLTextures.d.ts
│   │   │       │   │   ├── WebGLUniforms.d.ts
│   │   │       │   │   ├── WebGLUniformsGroups.d.ts
│   │   │       │   │   └── WebGLUtils.d.ts
│   │   │       │   ├── webgl-fallback/
│   │   │       │   │   ├── WebGLBackend.d.ts
│   │   │       │   │   ├── nodes/
│   │   │       │   │   │   └── GLSLNodeBuilder.d.ts
│   │   │       │   │   └── utils/
│   │   │       │   │       └── WebGLCapabilities.d.ts
│   │   │       │   ├── webgpu/
│   │   │       │   │   ├── WebGPUBackend.d.ts
│   │   │       │   │   ├── WebGPURenderer.Nodes.d.ts
│   │   │       │   │   ├── WebGPURenderer.d.ts
│   │   │       │   │   ├── nodes/
│   │   │       │   │   │   ├── BasicNodeLibrary.d.ts
│   │   │       │   │   │   ├── StandardNodeLibrary.d.ts
│   │   │       │   │   │   ├── WGSLNodeBuilder.d.ts
│   │   │       │   │   │   ├── WGSLNodeFunction.d.ts
│   │   │       │   │   │   └── WGSLNodeParser.d.ts
│   │   │       │   │   └── utils/
│   │   │       │   │       └── WebGPUConstants.d.ts
│   │   │       │   └── webxr/
│   │   │       │       ├── WebXRController.d.ts
│   │   │       │       ├── WebXRDepthSensing.d.ts
│   │   │       │       └── WebXRManager.d.ts
│   │   │       ├── scenes/
│   │   │       │   ├── Fog.d.ts
│   │   │       │   ├── FogExp2.d.ts
│   │   │       │   └── Scene.d.ts
│   │   │       ├── textures/
│   │   │       │   ├── CanvasTexture.d.ts
│   │   │       │   ├── CompressedArrayTexture.d.ts
│   │   │       │   ├── CompressedCubeTexture.d.ts
│   │   │       │   ├── CompressedTexture.d.ts
│   │   │       │   ├── CubeDepthTexture.d.ts
│   │   │       │   ├── CubeTexture.d.ts
│   │   │       │   ├── Data3DTexture.d.ts
│   │   │       │   ├── DataArrayTexture.d.ts
│   │   │       │   ├── DataTexture.d.ts
│   │   │       │   ├── DepthTexture.d.ts
│   │   │       │   ├── ExternalTexture.d.ts
│   │   │       │   ├── FramebufferTexture.d.ts
│   │   │       │   ├── HTMLTexture.d.ts
│   │   │       │   ├── Source.d.ts
│   │   │       │   ├── Texture.d.ts
│   │   │       │   ├── VideoFrameTexture.d.ts
│   │   │       │   └── VideoTexture.d.ts
│   │   │       └── utils.d.ts
│   │   └── webxr/
│   │       ├── LICENSE
│   │       ├── README.md
│   │       ├── index.d.ts
│   │       └── package.json
│   ├── fflate/
│   │   ├── CHANGELOG.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── esm/
│   │   │   ├── browser.d.ts
│   │   │   ├── browser.js
│   │   │   ├── index.d.mts
│   │   │   └── index.mjs
│   │   ├── lib/
│   │   │   ├── browser.cjs
│   │   │   ├── browser.d.cts
│   │   │   ├── index.cjs
│   │   │   ├── index.d.ts
│   │   │   ├── node-worker.cjs
│   │   │   ├── node.cjs
│   │   │   ├── node.d.cts
│   │   │   └── worker.cjs
│   │   ├── package.json
│   │   └── umd/
│   │       └── index.js
│   ├── meshoptimizer/
│   │   ├── LICENSE.md
│   │   ├── README.md
│   │   ├── benchmark.js
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── meshopt_clusterizer.d.ts
│   │   ├── meshopt_clusterizer.js
│   │   ├── meshopt_clusterizer.test.js
│   │   ├── meshopt_decoder.cjs
│   │   ├── meshopt_decoder.d.ts
│   │   ├── meshopt_decoder.mjs
│   │   ├── meshopt_decoder.test.js
│   │   ├── meshopt_decoder_reference.js
│   │   ├── meshopt_encoder.d.ts
│   │   ├── meshopt_encoder.js
│   │   ├── meshopt_encoder.test.js
│   │   ├── meshopt_simplifier.d.ts
│   │   ├── meshopt_simplifier.js
│   │   ├── meshopt_simplifier.test.js
│   │   ├── package.json
│   │   └── wasi_trace.js
│   └── three/
│       ├── LICENSE
│       ├── README.md
│       ├── examples/
│       │   ├── fonts/
│       │   │   ├── LICENSE
│       │   │   ├── MPLUSRounded1c/
│       │   │   │   ├── MPLUSRounded1c-Regular.typeface.json.zip
│       │   │   │   └── OFL.txt
│       │   │   ├── README.md
│       │   │   ├── droid/
│       │   │   │   ├── NOTICE
│       │   │   │   ├── README.txt
│       │   │   │   ├── droid_sans_bold.typeface.json
│       │   │   │   ├── droid_sans_mono_regular.typeface.json
│       │   │   │   ├── droid_sans_regular.typeface.json
│       │   │   │   ├── droid_serif_bold.typeface.json
│       │   │   │   └── droid_serif_regular.typeface.json
│       │   │   ├── gentilis_bold.typeface.json
│       │   │   ├── gentilis_regular.typeface.json
│       │   │   ├── helvetiker_bold.typeface.json
│       │   │   ├── helvetiker_regular.typeface.json
│       │   │   ├── optimer_bold.typeface.json
│       │   │   ├── optimer_regular.typeface.json
│       │   │   └── ttf/
│       │   │       ├── README.md
│       │   │       └── kenpixel.ttf
│       │   └── jsm/
│       │       ├── Addons.js
│       │       ├── animation/
│       │       │   ├── AnimationClipCreator.js
│       │       │   └── CCDIKSolver.js
│       │       ├── capabilities/
│       │       │   ├── WebGL.js
│       │       │   └── WebGPU.js
│       │       ├── controls/
│       │       │   ├── ArcballControls.js
│       │       │   ├── DragControls.js
│       │       │   ├── FirstPersonControls.js
│       │       │   ├── FlyControls.js
│       │       │   ├── MapControls.js
│       │       │   ├── OrbitControls.js
│       │       │   ├── PointerLockControls.js
│       │       │   ├── TrackballControls.js
│       │       │   └── TransformControls.js
│       │       ├── csm/
│       │       │   ├── CSM.js
│       │       │   ├── CSMFrustum.js
│       │       │   ├── CSMHelper.js
│       │       │   ├── CSMShader.js
│       │       │   └── CSMShadowNode.js
│       │       ├── curves/
│       │       │   ├── CurveExtras.js
│       │       │   ├── NURBSCurve.js
│       │       │   ├── NURBSSurface.js
│       │       │   ├── NURBSUtils.js
│       │       │   └── NURBSVolume.js
│       │       ├── effects/
│       │       │   ├── AnaglyphEffect.js
│       │       │   ├── AsciiEffect.js
│       │       │   ├── OutlineEffect.js
│       │       │   ├── ParallaxBarrierEffect.js
│       │       │   └── StereoEffect.js
│       │       ├── environments/
│       │       │   ├── ColorEnvironment.js
│       │       │   ├── DebugEnvironment.js
│       │       │   └── RoomEnvironment.js
│       │       ├── exporters/
│       │       │   ├── DRACOExporter.js
│       │       │   ├── EXRExporter.js
│       │       │   ├── GLTFExporter.js
│       │       │   ├── KTX2Exporter.js
│       │       │   ├── OBJExporter.js
│       │       │   ├── PLYExporter.js
│       │       │   ├── STLExporter.js
│       │       │   └── USDZExporter.js
│       │       ├── geometries/
│       │       │   ├── BoxLineGeometry.js
│       │       │   ├── ConvexGeometry.js
│       │       │   ├── DecalGeometry.js
│       │       │   ├── ParametricFunctions.js
│       │       │   ├── ParametricGeometry.js
│       │       │   ├── RoundedBoxGeometry.js
│       │       │   ├── TeapotGeometry.js
│       │       │   └── TextGeometry.js
│       │       ├── gpgpu/
│       │       │   └── BitonicSort.js
│       │       ├── helpers/
│       │       │   ├── AnimationPathHelper.js
│       │       │   ├── LightProbeGridHelper.js
│       │       │   ├── LightProbeHelper.js
│       │       │   ├── LightProbeHelperGPU.js
│       │       │   ├── OctreeHelper.js
│       │       │   ├── PositionalAudioHelper.js
│       │       │   ├── RapierHelper.js
│       │       │   ├── RectAreaLightHelper.js
│       │       │   ├── TextureHelper.js
│       │       │   ├── TextureHelperGPU.js
│       │       │   ├── VertexNormalsHelper.js
│       │       │   ├── VertexTangentsHelper.js
│       │       │   └── ViewHelper.js
│       │       ├── inspector/
│       │       │   ├── Extension.js
│       │       │   ├── Inspector.js
│       │       │   ├── RendererInspector.js
│       │       │   ├── extensions/
│       │       │   │   ├── extensions.json
│       │       │   │   └── tsl-graph/
│       │       │   │       ├── TSLGraphEditor.js
│       │       │   │       └── TSLGraphLoader.js
│       │       │   ├── tabs/
│       │       │   │   ├── Console.js
│       │       │   │   ├── Memory.js
│       │       │   │   ├── Parameters.js
│       │       │   │   ├── Performance.js
│       │       │   │   ├── Settings.js
│       │       │   │   ├── Timeline.js
│       │       │   │   └── Viewer.js
│       │       │   └── ui/
│       │       │       ├── Graph.js
│       │       │       ├── Item.js
│       │       │       ├── List.js
│       │       │       ├── Profiler.js
│       │       │       ├── Style.js
│       │       │       ├── Tab.js
│       │       │       ├── Values.js
│       │       │       └── utils.js
│       │       ├── interaction/
│       │       │   └── InteractionManager.js
│       │       ├── interactive/
│       │       │   ├── HTMLMesh.js
│       │       │   ├── InteractiveGroup.js
│       │       │   ├── SelectionBox.js
│       │       │   └── SelectionHelper.js
│       │       ├── libs/
│       │       │   ├── ammo.wasm.js
│       │       │   ├── ammo.wasm.wasm
│       │       │   ├── basis/
│       │       │   │   ├── README.md
│       │       │   │   ├── basis_transcoder.js
│       │       │   │   └── basis_transcoder.wasm
│       │       │   ├── chevrotain.module.min.js
│       │       │   ├── demuxer_mp4.js
│       │       │   ├── draco/
│       │       │   │   ├── README.md
│       │       │   │   ├── draco_decoder.js
│       │       │   │   ├── draco_decoder.wasm
│       │       │   │   ├── draco_encoder.js
│       │       │   │   ├── draco_wasm_wrapper.js
│       │       │   │   └── gltf/
│       │       │   │       ├── draco_decoder.js
│       │       │   │       ├── draco_decoder.wasm
│       │       │   │       ├── draco_encoder.js
│       │       │   │       └── draco_wasm_wrapper.js
│       │       │   ├── ecsy.module.js
│       │       │   ├── fflate.module.js
│       │       │   ├── ktx-parse.module.js
│       │       │   ├── lil-gui.module.min.js
│       │       │   ├── lottie_canvas.module.js
│       │       │   ├── meshopt_decoder.module.js
│       │       │   ├── mikktspace.module.js
│       │       │   ├── motion-controllers.module.js
│       │       │   ├── opentype.module.js
│       │       │   ├── potpack.module.js
│       │       │   ├── rhino3dm/
│       │       │   │   ├── rhino3dm.js
│       │       │   │   ├── rhino3dm.module.js
│       │       │   │   └── rhino3dm.wasm
│       │       │   ├── stats.module.js
│       │       │   ├── surfaceNet.js
│       │       │   ├── tween.module.js
│       │       │   ├── utif.module.js
│       │       │   └── zstddec.module.js
│       │       ├── lighting/
│       │       │   ├── DynamicLighting.js
│       │       │   ├── LightProbeGrid.js
│       │       │   └── TiledLighting.js
│       │       ├── lights/
│       │       │   ├── LightProbeGenerator.js
│       │       │   ├── RectAreaLightTexturesLib.js
│       │       │   └── RectAreaLightUniformsLib.js
│       │       ├── lines/
│       │       │   ├── Line2.js
│       │       │   ├── LineGeometry.js
│       │       │   ├── LineMaterial.js
│       │       │   ├── LineSegments2.js
│       │       │   ├── LineSegmentsGeometry.js
│       │       │   ├── Wireframe.js
│       │       │   ├── WireframeGeometry2.js
│       │       │   └── webgpu/
│       │       │       ├── Line2.js
│       │       │       ├── LineSegments2.js
│       │       │       └── Wireframe.js
│       │       ├── loaders/
│       │       │   ├── 3DMLoader.js
│       │       │   ├── 3MFLoader.js
│       │       │   ├── AMFLoader.js
│       │       │   ├── BVHLoader.js
│       │       │   ├── ColladaLoader.js
│       │       │   ├── DDSLoader.js
│       │       │   ├── DRACOLoader.js
│       │       │   ├── EXRLoader.js
│       │       │   ├── FBXLoader.js
│       │       │   ├── FontLoader.js
│       │       │   ├── GCodeLoader.js
│       │       │   ├── GLTFLoader.js
│       │       │   ├── HDRCubeTextureLoader.js
│       │       │   ├── HDRLoader.js
│       │       │   ├── IESLoader.js
│       │       │   ├── KMZLoader.js
│       │       │   ├── KTX2Loader.js
│       │       │   ├── KTXLoader.js
│       │       │   ├── LDrawLoader.js
│       │       │   ├── LUT3dlLoader.js
│       │       │   ├── LUTCubeLoader.js
│       │       │   ├── LUTImageLoader.js
│       │       │   ├── LWOLoader.js
│       │       │   ├── LottieLoader.js
│       │       │   ├── MD2Loader.js
│       │       │   ├── MDDLoader.js
│       │       │   ├── MTLLoader.js
│       │       │   ├── MaterialXLoader.js
│       │       │   ├── NRRDLoader.js
│       │       │   ├── OBJLoader.js
│       │       │   ├── PCDLoader.js
│       │       │   ├── PDBLoader.js
│       │       │   ├── PLYLoader.js
│       │       │   ├── PVRLoader.js
│       │       │   ├── RGBELoader.js
│       │       │   ├── STLLoader.js
│       │       │   ├── SVGLoader.js
│       │       │   ├── TDSLoader.js
│       │       │   ├── TGALoader.js
│       │       │   ├── TIFFLoader.js
│       │       │   ├── TTFLoader.js
│       │       │   ├── USDLoader.js
│       │       │   ├── USDZLoader.js
│       │       │   ├── UltraHDRLoader.js
│       │       │   ├── VOXLoader.js
│       │       │   ├── VRMLLoader.js
│       │       │   ├── VTKLoader.js
│       │       │   ├── XYZLoader.js
│       │       │   ├── collada/
│       │       │   │   ├── ColladaComposer.js
│       │       │   │   └── ColladaParser.js
│       │       │   ├── lwo/
│       │       │   │   ├── IFFParser.js
│       │       │   │   ├── LWO2Parser.js
│       │       │   │   └── LWO3Parser.js
│       │       │   └── usd/
│       │       │       ├── USDAParser.js
│       │       │       ├── USDCParser.js
│       │       │       └── USDComposer.js
│       │       ├── materials/
│       │       │   ├── LDrawConditionalLineMaterial.js
│       │       │   ├── LDrawConditionalLineNodeMaterial.js
│       │       │   └── WoodNodeMaterial.js
│       │       ├── math/
│       │       │   ├── Capsule.js
│       │       │   ├── ColorConverter.js
│       │       │   ├── ColorSpaces.js
│       │       │   ├── ConvexHull.js
│       │       │   ├── ImprovedNoise.js
│       │       │   ├── Lut.js
│       │       │   ├── MeshSurfaceSampler.js
│       │       │   ├── OBB.js
│       │       │   ├── Octree.js
│       │       │   └── SimplexNoise.js
│       │       ├── misc/
│       │       │   ├── ConvexObjectBreaker.js
│       │       │   ├── GPUComputationRenderer.js
│       │       │   ├── Gyroscope.js
│       │       │   ├── MD2Character.js
│       │       │   ├── MD2CharacterComplex.js
│       │       │   ├── MorphAnimMesh.js
│       │       │   ├── MorphBlendMesh.js
│       │       │   ├── ProgressiveLightMap.js
│       │       │   ├── ProgressiveLightMapGPU.js
│       │       │   ├── RollerCoaster.js
│       │       │   ├── TubePainter.js
│       │       │   ├── Volume.js
│       │       │   └── VolumeSlice.js
│       │       ├── modifiers/
│       │       │   ├── CurveModifier.js
│       │       │   ├── CurveModifierGPU.js
│       │       │   ├── EdgeSplitModifier.js
│       │       │   ├── SimplifyModifier.js
│       │       │   └── TessellateModifier.js
│       │       ├── objects/
│       │       │   ├── GroundedSkybox.js
│       │       │   ├── Lensflare.js
│       │       │   ├── LensflareMesh.js
│       │       │   ├── MarchingCubes.js
│       │       │   ├── Reflector.js
│       │       │   ├── ReflectorForSSRPass.js
│       │       │   ├── Refractor.js
│       │       │   ├── ShadowMesh.js
│       │       │   ├── Sky.js
│       │       │   ├── SkyMesh.js
│       │       │   ├── Water.js
│       │       │   ├── Water2.js
│       │       │   ├── Water2Mesh.js
│       │       │   └── WaterMesh.js
│       │       ├── offscreen/
│       │       │   ├── jank.js
│       │       │   ├── offscreen.js
│       │       │   └── scene.js
│       │       ├── physics/
│       │       │   ├── AmmoPhysics.js
│       │       │   ├── JoltPhysics.js
│       │       │   └── RapierPhysics.js
│       │       ├── postprocessing/
│       │       │   ├── AfterimagePass.js
│       │       │   ├── BloomPass.js
│       │       │   ├── BokehPass.js
│       │       │   ├── ClearPass.js
│       │       │   ├── CubeTexturePass.js
│       │       │   ├── DotScreenPass.js
│       │       │   ├── EffectComposer.js
│       │       │   ├── FXAAPass.js
│       │       │   ├── FilmPass.js
│       │       │   ├── GTAOPass.js
│       │       │   ├── GlitchPass.js
│       │       │   ├── HalftonePass.js
│       │       │   ├── LUTPass.js
│       │       │   ├── MaskPass.js
│       │       │   ├── OutlinePass.js
│       │       │   ├── OutputPass.js
│       │       │   ├── Pass.js
│       │       │   ├── RenderPass.js
│       │       │   ├── RenderPixelatedPass.js
│       │       │   ├── RenderTransitionPass.js
│       │       │   ├── SAOPass.js
│       │       │   ├── SMAAPass.js
│       │       │   ├── SSAARenderPass.js
│       │       │   ├── SSAOPass.js
│       │       │   ├── SSRPass.js
│       │       │   ├── SavePass.js
│       │       │   ├── ShaderPass.js
│       │       │   ├── TAARenderPass.js
│       │       │   ├── TexturePass.js
│       │       │   └── UnrealBloomPass.js
│       │       ├── renderers/
│       │       │   ├── CSS2DRenderer.js
│       │       │   ├── CSS3DRenderer.js
│       │       │   ├── Projector.js
│       │       │   └── SVGRenderer.js
│       │       ├── shaders/
│       │       │   ├── ACESFilmicToneMappingShader.js
│       │       │   ├── AfterimageShader.js
│       │       │   ├── BasicShader.js
│       │       │   ├── BleachBypassShader.js
│       │       │   ├── BlendShader.js
│       │       │   ├── BokehShader.js
│       │       │   ├── BokehShader2.js
│       │       │   ├── BrightnessContrastShader.js
│       │       │   ├── ColorCorrectionShader.js
│       │       │   ├── ColorifyShader.js
│       │       │   ├── ConvolutionShader.js
│       │       │   ├── CopyShader.js
│       │       │   ├── DOFMipMapShader.js
│       │       │   ├── DepthLimitedBlurShader.js
│       │       │   ├── DigitalGlitch.js
│       │       │   ├── DotScreenShader.js
│       │       │   ├── ExposureShader.js
│       │       │   ├── FXAAShader.js
│       │       │   ├── FilmShader.js
│       │       │   ├── FocusShader.js
│       │       │   ├── FreiChenShader.js
│       │       │   ├── GTAOShader.js
│       │       │   ├── GammaCorrectionShader.js
│       │       │   ├── HalftoneShader.js
│       │       │   ├── HorizontalBlurShader.js
│       │       │   ├── HorizontalTiltShiftShader.js
│       │       │   ├── HueSaturationShader.js
│       │       │   ├── KaleidoShader.js
│       │       │   ├── LuminosityHighPassShader.js
│       │       │   ├── LuminosityShader.js
│       │       │   ├── MirrorShader.js
│       │       │   ├── NormalMapShader.js
│       │       │   ├── OutputShader.js
│       │       │   ├── PoissonDenoiseShader.js
│       │       │   ├── RGBShiftShader.js
│       │       │   ├── SAOShader.js
│       │       │   ├── SMAAShader.js
│       │       │   ├── SSAOShader.js
│       │       │   ├── SSRShader.js
│       │       │   ├── SepiaShader.js
│       │       │   ├── SobelOperatorShader.js
│       │       │   ├── SubsurfaceScatteringShader.js
│       │       │   ├── TechnicolorShader.js
│       │       │   ├── ToonShader.js
│       │       │   ├── TriangleBlurShader.js
│       │       │   ├── UnpackDepthRGBAShader.js
│       │       │   ├── VelocityShader.js
│       │       │   ├── VerticalBlurShader.js
│       │       │   ├── VerticalTiltShiftShader.js
│       │       │   ├── VignetteShader.js
│       │       │   ├── VolumeShader.js
│       │       │   └── WaterRefractionShader.js
│       │       ├── textures/
│       │       │   └── FlakesTexture.js
│       │       ├── transpiler/
│       │       │   ├── AST.js
│       │       │   ├── GLSLDecoder.js
│       │       │   ├── Linker.js
│       │       │   ├── ShaderToyDecoder.js
│       │       │   ├── TSLEncoder.js
│       │       │   ├── Transpiler.js
│       │       │   ├── TranspilerUtils.js
│       │       │   └── WGSLEncoder.js
│       │       ├── tsl/
│       │       │   ├── WebGLNodesHandler.js
│       │       │   ├── display/
│       │       │   │   ├── AfterImageNode.js
│       │       │   │   ├── AnaglyphPassNode.js
│       │       │   │   ├── AnamorphicNode.js
│       │       │   │   ├── BilateralBlurNode.js
│       │       │   │   ├── BleachBypass.js
│       │       │   │   ├── BloomNode.js
│       │       │   │   ├── CRT.js
│       │       │   │   ├── ChromaticAberrationNode.js
│       │       │   │   ├── DenoiseNode.js
│       │       │   │   ├── DepthOfFieldNode.js
│       │       │   │   ├── DotScreenNode.js
│       │       │   │   ├── FSR1Node.js
│       │       │   │   ├── FXAANode.js
│       │       │   │   ├── FilmNode.js
│       │       │   │   ├── GTAONode.js
│       │       │   │   ├── GaussianBlurNode.js
│       │       │   │   ├── GodraysNode.js
│       │       │   │   ├── LensflareNode.js
│       │       │   │   ├── Lut3DNode.js
│       │       │   │   ├── MotionBlur.js
│       │       │   │   ├── OutlineNode.js
│       │       │   │   ├── ParallaxBarrierPassNode.js
│       │       │   │   ├── PixelationPassNode.js
│       │       │   │   ├── RGBShiftNode.js
│       │       │   │   ├── RetroPassNode.js
│       │       │   │   ├── SMAANode.js
│       │       │   │   ├── SSAAPassNode.js
│       │       │   │   ├── SSGINode.js
│       │       │   │   ├── SSRNode.js
│       │       │   │   ├── SSSNode.js
│       │       │   │   ├── Sepia.js
│       │       │   │   ├── Shape.js
│       │       │   │   ├── SharpenNode.js
│       │       │   │   ├── SobelOperatorNode.js
│       │       │   │   ├── StereoCompositePassNode.js
│       │       │   │   ├── StereoPassNode.js
│       │       │   │   ├── TAAUNode.js
│       │       │   │   ├── TRAANode.js
│       │       │   │   ├── TransitionNode.js
│       │       │   │   ├── boxBlur.js
│       │       │   │   ├── depthAwareBlend.js
│       │       │   │   ├── hashBlur.js
│       │       │   │   └── radialBlur.js
│       │       │   ├── lighting/
│       │       │   │   ├── DynamicLightsNode.js
│       │       │   │   ├── TiledLightsNode.js
│       │       │   │   └── data/
│       │       │   │       ├── AmbientLightDataNode.js
│       │       │   │       ├── DirectionalLightDataNode.js
│       │       │   │       ├── HemisphereLightDataNode.js
│       │       │   │       ├── PointLightDataNode.js
│       │       │   │       └── SpotLightDataNode.js
│       │       │   ├── math/
│       │       │   │   └── Bayer.js
│       │       │   ├── shadows/
│       │       │   │   ├── TileShadowNode.js
│       │       │   │   └── TileShadowNodeHelper.js
│       │       │   └── utils/
│       │       │       └── Raymarching.js
│       │       ├── utils/
│       │       │   ├── BufferGeometryUtils.js
│       │       │   ├── CameraUtils.js
│       │       │   ├── ColorUtils.js
│       │       │   ├── GeometryCompressionUtils.js
│       │       │   ├── GeometryUtils.js
│       │       │   ├── LDrawUtils.js
│       │       │   ├── SceneOptimizer.js
│       │       │   ├── SceneUtils.js
│       │       │   ├── ShadowMapViewer.js
│       │       │   ├── ShadowMapViewerGPU.js
│       │       │   ├── SkeletonUtils.js
│       │       │   ├── SortUtils.js
│       │       │   ├── UVsDebug.js
│       │       │   ├── WebGLTextureUtils.js
│       │       │   ├── WebGPUTextureUtils.js
│       │       │   └── WorkerPool.js
│       │       └── webxr/
│       │           ├── ARButton.js
│       │           ├── OculusHandModel.js
│       │           ├── OculusHandPointerModel.js
│       │           ├── Text2D.js
│       │           ├── VRButton.js
│       │           ├── XRButton.js
│       │           ├── XRControllerModelFactory.js
│       │           ├── XREstimatedLight.js
│       │           ├── XRHandMeshModel.js
│       │           ├── XRHandModelFactory.js
│       │           ├── XRHandPrimitiveModel.js
│       │           └── XRPlanes.js
│       ├── package.json
│       └── src/
│           ├── Three.Core.js
│           ├── Three.Legacy.js
│           ├── Three.TSL.js
│           ├── Three.WebGPU.Nodes.js
│           ├── Three.WebGPU.js
│           ├── Three.js
│           ├── animation/
│           │   ├── AnimationAction.js
│           │   ├── AnimationClip.js
│           │   ├── AnimationMixer.js
│           │   ├── AnimationObjectGroup.js
│           │   ├── AnimationUtils.js
│           │   ├── KeyframeTrack.js
│           │   ├── PropertyBinding.js
│           │   ├── PropertyMixer.js
│           │   └── tracks/
│           │       ├── BooleanKeyframeTrack.js
│           │       ├── ColorKeyframeTrack.js
│           │       ├── NumberKeyframeTrack.js
│           │       ├── QuaternionKeyframeTrack.js
│           │       ├── StringKeyframeTrack.js
│           │       └── VectorKeyframeTrack.js
│           ├── audio/
│           │   ├── Audio.js
│           │   ├── AudioAnalyser.js
│           │   ├── AudioContext.js
│           │   ├── AudioListener.js
│           │   └── PositionalAudio.js
│           ├── cameras/
│           │   ├── ArrayCamera.js
│           │   ├── Camera.js
│           │   ├── CubeCamera.js
│           │   ├── OrthographicCamera.js
│           │   ├── PerspectiveCamera.js
│           │   └── StereoCamera.js
│           ├── constants.js
│           ├── core/
│           │   ├── BufferAttribute.js
│           │   ├── BufferGeometry.js
│           │   ├── Clock.js
│           │   ├── EventDispatcher.js
│           │   ├── GLBufferAttribute.js
│           │   ├── InstancedBufferAttribute.js
│           │   ├── InstancedBufferGeometry.js
│           │   ├── InstancedInterleavedBuffer.js
│           │   ├── InterleavedBuffer.js
│           │   ├── InterleavedBufferAttribute.js
│           │   ├── Layers.js
│           │   ├── Object3D.js
│           │   ├── Raycaster.js
│           │   ├── RenderTarget.js
│           │   ├── RenderTarget3D.js
│           │   ├── Timer.js
│           │   ├── Uniform.js
│           │   └── UniformsGroup.js
│           ├── extras/
│           │   ├── Controls.js
│           │   ├── DataUtils.js
│           │   ├── Earcut.js
│           │   ├── ImageUtils.js
│           │   ├── PMREMGenerator.js
│           │   ├── ShapeUtils.js
│           │   ├── TextureUtils.js
│           │   ├── core/
│           │   │   ├── Curve.js
│           │   │   ├── CurvePath.js
│           │   │   ├── Interpolations.js
│           │   │   ├── Path.js
│           │   │   ├── Shape.js
│           │   │   └── ShapePath.js
│           │   ├── curves/
│           │   │   ├── ArcCurve.js
│           │   │   ├── CatmullRomCurve3.js
│           │   │   ├── CubicBezierCurve.js
│           │   │   ├── CubicBezierCurve3.js
│           │   │   ├── Curves.js
│           │   │   ├── EllipseCurve.js
│           │   │   ├── LineCurve.js
│           │   │   ├── LineCurve3.js
│           │   │   ├── QuadraticBezierCurve.js
│           │   │   ├── QuadraticBezierCurve3.js
│           │   │   └── SplineCurve.js
│           │   └── lib/
│           │       └── earcut.js
│           ├── geometries/
│           │   ├── BoxGeometry.js
│           │   ├── CapsuleGeometry.js
│           │   ├── CircleGeometry.js
│           │   ├── ConeGeometry.js
│           │   ├── CylinderGeometry.js
│           │   ├── DodecahedronGeometry.js
│           │   ├── EdgesGeometry.js
│           │   ├── ExtrudeGeometry.js
│           │   ├── Geometries.js
│           │   ├── IcosahedronGeometry.js
│           │   ├── LatheGeometry.js
│           │   ├── OctahedronGeometry.js
│           │   ├── PlaneGeometry.js
│           │   ├── PolyhedronGeometry.js
│           │   ├── RingGeometry.js
│           │   ├── ShapeGeometry.js
│           │   ├── SphereGeometry.js
│           │   ├── TetrahedronGeometry.js
│           │   ├── TorusGeometry.js
│           │   ├── TorusKnotGeometry.js
│           │   ├── TubeGeometry.js
│           │   └── WireframeGeometry.js
│           ├── helpers/
│           │   ├── ArrowHelper.js
│           │   ├── AxesHelper.js
│           │   ├── Box3Helper.js
│           │   ├── BoxHelper.js
│           │   ├── CameraHelper.js
│           │   ├── DirectionalLightHelper.js
│           │   ├── GridHelper.js
│           │   ├── HemisphereLightHelper.js
│           │   ├── PlaneHelper.js
│           │   ├── PointLightHelper.js
│           │   ├── PolarGridHelper.js
│           │   ├── SkeletonHelper.js
│           │   └── SpotLightHelper.js
│           ├── lights/
│           │   ├── AmbientLight.js
│           │   ├── DirectionalLight.js
│           │   ├── DirectionalLightShadow.js
│           │   ├── HemisphereLight.js
│           │   ├── Light.js
│           │   ├── LightProbe.js
│           │   ├── LightShadow.js
│           │   ├── PointLight.js
│           │   ├── PointLightShadow.js
│           │   ├── RectAreaLight.js
│           │   ├── SpotLight.js
│           │   ├── SpotLightShadow.js
│           │   └── webgpu/
│           │       ├── IESSpotLight.js
│           │       └── ProjectorLight.js
│           ├── loaders/
│           │   ├── AnimationLoader.js
│           │   ├── AudioLoader.js
│           │   ├── BufferGeometryLoader.js
│           │   ├── Cache.js
│           │   ├── CompressedTextureLoader.js
│           │   ├── CubeTextureLoader.js
│           │   ├── DataTextureLoader.js
│           │   ├── FileLoader.js
│           │   ├── ImageBitmapLoader.js
│           │   ├── ImageLoader.js
│           │   ├── Loader.js
│           │   ├── LoaderUtils.js
│           │   ├── LoadingManager.js
│           │   ├── MaterialLoader.js
│           │   ├── ObjectLoader.js
│           │   ├── TextureLoader.js
│           │   └── nodes/
│           │       ├── NodeLoader.js
│           │       ├── NodeMaterialLoader.js
│           │       └── NodeObjectLoader.js
│           ├── materials/
│           │   ├── LineBasicMaterial.js
│           │   ├── LineDashedMaterial.js
│           │   ├── Material.js
│           │   ├── Materials.js
│           │   ├── MeshBasicMaterial.js
│           │   ├── MeshDepthMaterial.js
│           │   ├── MeshDistanceMaterial.js
│           │   ├── MeshLambertMaterial.js
│           │   ├── MeshMatcapMaterial.js
│           │   ├── MeshNormalMaterial.js
│           │   ├── MeshPhongMaterial.js
│           │   ├── MeshPhysicalMaterial.js
│           │   ├── MeshStandardMaterial.js
│           │   ├── MeshToonMaterial.js
│           │   ├── PointsMaterial.js
│           │   ├── RawShaderMaterial.js
│           │   ├── ShaderMaterial.js
│           │   ├── ShadowMaterial.js
│           │   ├── SpriteMaterial.js
│           │   └── nodes/
│           │       ├── Line2NodeMaterial.js
│           │       ├── LineBasicNodeMaterial.js
│           │       ├── LineDashedNodeMaterial.js
│           │       ├── MeshBasicNodeMaterial.js
│           │       ├── MeshLambertNodeMaterial.js
│           │       ├── MeshMatcapNodeMaterial.js
│           │       ├── MeshNormalNodeMaterial.js
│           │       ├── MeshPhongNodeMaterial.js
│           │       ├── MeshPhysicalNodeMaterial.js
│           │       ├── MeshSSSNodeMaterial.js
│           │       ├── MeshStandardNodeMaterial.js
│           │       ├── MeshToonNodeMaterial.js
│           │       ├── NodeMaterial.js
│           │       ├── NodeMaterials.js
│           │       ├── PointsNodeMaterial.js
│           │       ├── ShadowNodeMaterial.js
│           │       ├── SpriteNodeMaterial.js
│           │       ├── VolumeNodeMaterial.js
│           │       └── manager/
│           │           └── NodeMaterialObserver.js
│           ├── math/
│           │   ├── Box2.js
│           │   ├── Box3.js
│           │   ├── Color.js
│           │   ├── ColorManagement.js
│           │   ├── Cylindrical.js
│           │   ├── Euler.js
│           │   ├── Frustum.js
│           │   ├── FrustumArray.js
│           │   ├── Interpolant.js
│           │   ├── Line3.js
│           │   ├── MathUtils.js
│           │   ├── Matrix2.js
│           │   ├── Matrix3.js
│           │   ├── Matrix4.js
│           │   ├── Plane.js
│           │   ├── Quaternion.js
│           │   ├── Ray.js
│           │   ├── Sphere.js
│           │   ├── Spherical.js
│           │   ├── SphericalHarmonics3.js
│           │   ├── Triangle.js
│           │   ├── Vector2.js
│           │   ├── Vector3.js
│           │   ├── Vector4.js
│           │   └── interpolants/
│           │       ├── BezierInterpolant.js
│           │       ├── CubicInterpolant.js
│           │       ├── DiscreteInterpolant.js
│           │       ├── LinearInterpolant.js
│           │       └── QuaternionLinearInterpolant.js
│           ├── nodes/
│           │   ├── Nodes.js
│           │   ├── TSL.js
│           │   ├── accessors/
│           │   │   ├── AccessorsUtils.js
│           │   │   ├── Arrays.js
│           │   │   ├── BatchNode.js
│           │   │   ├── Bitangent.js
│           │   │   ├── BufferAttributeNode.js
│           │   │   ├── BufferNode.js
│           │   │   ├── BuiltinNode.js
│           │   │   ├── Camera.js
│           │   │   ├── ClippingNode.js
│           │   │   ├── CubeTextureNode.js
│           │   │   ├── InstanceNode.js
│           │   │   ├── InstancedMeshNode.js
│           │   │   ├── Lights.js
│           │   │   ├── MaterialNode.js
│           │   │   ├── MaterialProperties.js
│           │   │   ├── MaterialReferenceNode.js
│           │   │   ├── ModelNode.js
│           │   │   ├── ModelViewProjectionNode.js
│           │   │   ├── MorphNode.js
│           │   │   ├── Normal.js
│           │   │   ├── Object3DNode.js
│           │   │   ├── PointUVNode.js
│           │   │   ├── Position.js
│           │   │   ├── ReferenceBaseNode.js
│           │   │   ├── ReferenceNode.js
│           │   │   ├── ReflectVector.js
│           │   │   ├── RendererReferenceNode.js
│           │   │   ├── SceneProperties.js
│           │   │   ├── SkinningNode.js
│           │   │   ├── StorageBufferNode.js
│           │   │   ├── StorageTextureNode.js
│           │   │   ├── Tangent.js
│           │   │   ├── TangentUtils.js
│           │   │   ├── Texture3DNode.js
│           │   │   ├── TextureBicubic.js
│           │   │   ├── TextureNode.js
│           │   │   ├── TextureSizeNode.js
│           │   │   ├── UV.js
│           │   │   ├── UniformArrayNode.js
│           │   │   ├── UserDataNode.js
│           │   │   ├── VelocityNode.js
│           │   │   └── VertexColorNode.js
│           │   ├── code/
│           │   │   ├── CodeNode.js
│           │   │   ├── ExpressionNode.js
│           │   │   ├── FunctionCallNode.js
│           │   │   └── FunctionNode.js
│           │   ├── core/
│           │   │   ├── ArrayNode.js
│           │   │   ├── AssignNode.js
│           │   │   ├── AttributeNode.js
│           │   │   ├── BypassNode.js
│           │   │   ├── ConstNode.js
│           │   │   ├── ContextNode.js
│           │   │   ├── IndexNode.js
│           │   │   ├── InputNode.js
│           │   │   ├── InspectorNode.js
│           │   │   ├── IsolateNode.js
│           │   │   ├── LightingModel.js
│           │   │   ├── MRTNode.js
│           │   │   ├── Node.js
│           │   │   ├── NodeAttribute.js
│           │   │   ├── NodeBuilder.js
│           │   │   ├── NodeCache.js
│           │   │   ├── NodeCode.js
│           │   │   ├── NodeError.js
│           │   │   ├── NodeFrame.js
│           │   │   ├── NodeFunction.js
│           │   │   ├── NodeFunctionInput.js
│           │   │   ├── NodeParser.js
│           │   │   ├── NodeUniform.js
│           │   │   ├── NodeUtils.js
│           │   │   ├── NodeVar.js
│           │   │   ├── NodeVarying.js
│           │   │   ├── OutputStructNode.js
│           │   │   ├── ParameterNode.js
│           │   │   ├── PropertyNode.js
│           │   │   ├── StackNode.js
│           │   │   ├── StackTrace.js
│           │   │   ├── StructNode.js
│           │   │   ├── StructType.js
│           │   │   ├── StructTypeNode.js
│           │   │   ├── SubBuildNode.js
│           │   │   ├── TempNode.js
│           │   │   ├── UniformGroupNode.js
│           │   │   ├── UniformNode.js
│           │   │   ├── VarNode.js
│           │   │   ├── VaryingNode.js
│           │   │   └── constants.js
│           │   ├── display/
│           │   │   ├── BlendModes.js
│           │   │   ├── BumpMapNode.js
│           │   │   ├── ColorAdjustment.js
│           │   │   ├── ColorSpaceFunctions.js
│           │   │   ├── ColorSpaceNode.js
│           │   │   ├── FrontFacingNode.js
│           │   │   ├── NormalMapNode.js
│           │   │   ├── PassNode.js
│           │   │   ├── RenderOutputNode.js
│           │   │   ├── ScreenNode.js
│           │   │   ├── ToneMappingFunctions.js
│           │   │   ├── ToneMappingNode.js
│           │   │   ├── ToonOutlinePassNode.js
│           │   │   ├── ViewportDepthNode.js
│           │   │   ├── ViewportDepthTextureNode.js
│           │   │   ├── ViewportSharedTextureNode.js
│           │   │   └── ViewportTextureNode.js
│           │   ├── fog/
│           │   │   └── Fog.js
│           │   ├── functions/
│           │   │   ├── BSDF/
│           │   │   │   ├── BRDF_GGX.js
│           │   │   │   ├── BRDF_GGX_Multiscatter.js
│           │   │   │   ├── BRDF_Lambert.js
│           │   │   │   ├── BRDF_Sheen.js
│           │   │   │   ├── DFGLUT.js
│           │   │   │   ├── D_GGX.js
│           │   │   │   ├── D_GGX_Anisotropic.js
│           │   │   │   ├── EnvironmentBRDF.js
│           │   │   │   ├── F_Schlick.js
│           │   │   │   ├── LTC.js
│           │   │   │   ├── Schlick_to_F0.js
│           │   │   │   ├── V_GGX_SmithCorrelated.js
│           │   │   │   └── V_GGX_SmithCorrelated_Anisotropic.js
│           │   │   ├── BasicLightingModel.js
│           │   │   ├── PhongLightingModel.js
│           │   │   ├── PhysicalLightingModel.js
│           │   │   ├── ShadowMaskModel.js
│           │   │   ├── ToonLightingModel.js
│           │   │   ├── VolumetricLightingModel.js
│           │   │   └── material/
│           │   │       ├── getAlphaHashThreshold.js
│           │   │       ├── getGeometryRoughness.js
│           │   │       ├── getParallaxCorrectNormal.js
│           │   │       ├── getRoughness.js
│           │   │       └── getShIrradianceAt.js
│           │   ├── geometry/
│           │   │   └── RangeNode.js
│           │   ├── gpgpu/
│           │   │   ├── AtomicFunctionNode.js
│           │   │   ├── BarrierNode.js
│           │   │   ├── ComputeBuiltinNode.js
│           │   │   ├── ComputeNode.js
│           │   │   ├── SubgroupFunctionNode.js
│           │   │   └── WorkgroupInfoNode.js
│           │   ├── lighting/
│           │   │   ├── AONode.js
│           │   │   ├── AmbientLightNode.js
│           │   │   ├── AnalyticLightNode.js
│           │   │   ├── BasicEnvironmentNode.js
│           │   │   ├── BasicLightMapNode.js
│           │   │   ├── DirectionalLightNode.js
│           │   │   ├── EnvironmentNode.js
│           │   │   ├── HemisphereLightNode.js
│           │   │   ├── IESSpotLightNode.js
│           │   │   ├── IrradianceNode.js
│           │   │   ├── LightProbeNode.js
│           │   │   ├── LightUtils.js
│           │   │   ├── LightingContextNode.js
│           │   │   ├── LightingNode.js
│           │   │   ├── LightsNode.js
│           │   │   ├── PointLightNode.js
│           │   │   ├── PointShadowNode.js
│           │   │   ├── ProjectorLightNode.js
│           │   │   ├── RectAreaLightNode.js
│           │   │   ├── ShadowBaseNode.js
│           │   │   ├── ShadowFilterNode.js
│           │   │   ├── ShadowNode.js
│           │   │   └── SpotLightNode.js
│           │   ├── materialx/
│           │   │   ├── DISCLAIMER.md
│           │   │   ├── MaterialXNodes.js
│           │   │   └── lib/
│           │   │       ├── mx_hsv.js
│           │   │       ├── mx_noise.js
│           │   │       └── mx_transform_color.js
│           │   ├── math/
│           │   │   ├── BitcastNode.js
│           │   │   ├── BitcountNode.js
│           │   │   ├── ConditionalNode.js
│           │   │   ├── Hash.js
│           │   │   ├── MathNode.js
│           │   │   ├── MathUtils.js
│           │   │   ├── OperatorNode.js
│           │   │   ├── PackFloatNode.js
│           │   │   ├── TriNoise3D.js
│           │   │   └── UnpackFloatNode.js
│           │   ├── parsers/
│           │   │   ├── GLSLNodeFunction.js
│           │   │   └── GLSLNodeParser.js
│           │   ├── pmrem/
│           │   │   ├── PMREMNode.js
│           │   │   └── PMREMUtils.js
│           │   ├── procedural/
│           │   │   └── Checker.js
│           │   ├── shapes/
│           │   │   └── Shapes.js
│           │   ├── tsl/
│           │   │   ├── TSLBase.js
│           │   │   └── TSLCore.js
│           │   └── utils/
│           │       ├── ArrayElementNode.js
│           │       ├── ConvertNode.js
│           │       ├── CubeMapNode.js
│           │       ├── DebugNode.js
│           │       ├── Discard.js
│           │       ├── EquirectUV.js
│           │       ├── EventNode.js
│           │       ├── FlipNode.js
│           │       ├── FunctionOverloadingNode.js
│           │       ├── JoinNode.js
│           │       ├── LoopNode.js
│           │       ├── MatcapUV.js
│           │       ├── MaxMipLevelNode.js
│           │       ├── MemberNode.js
│           │       ├── Oscillators.js
│           │       ├── Packing.js
│           │       ├── PostProcessingUtils.js
│           │       ├── RTTNode.js
│           │       ├── ReflectorNode.js
│           │       ├── Remap.js
│           │       ├── RotateNode.js
│           │       ├── SampleNode.js
│           │       ├── SetNode.js
│           │       ├── SplitNode.js
│           │       ├── SpriteSheetUV.js
│           │       ├── SpriteUtils.js
│           │       ├── StorageArrayElementNode.js
│           │       ├── Timer.js
│           │       ├── TriplanarTextures.js
│           │       ├── UVUtils.js
│           │       └── ViewportUtils.js
│           ├── objects/
│           │   ├── BatchedMesh.js
│           │   ├── Bone.js
│           │   ├── ClippingGroup.js
│           │   ├── Group.js
│           │   ├── InstancedMesh.js
│           │   ├── LOD.js
│           │   ├── Line.js
│           │   ├── LineLoop.js
│           │   ├── LineSegments.js
│           │   ├── Mesh.js
│           │   ├── Points.js
│           │   ├── Skeleton.js
│           │   ├── SkinnedMesh.js
│           │   └── Sprite.js
│           ├── renderers/
│           │   ├── WebGL3DRenderTarget.js
│           │   ├── WebGLArrayRenderTarget.js
│           │   ├── WebGLCubeRenderTarget.js
│           │   ├── WebGLRenderTarget.js
│           │   ├── WebGLRenderer.js
│           │   ├── common/
│           │   │   ├── Animation.js
│           │   │   ├── Attributes.js
│           │   │   ├── Backend.js
│           │   │   ├── Background.js
│           │   │   ├── BindGroup.js
│           │   │   ├── Binding.js
│           │   │   ├── Bindings.js
│           │   │   ├── BlendMode.js
│           │   │   ├── Buffer.js
│           │   │   ├── BufferUtils.js
│           │   │   ├── BundleGroup.js
│           │   │   ├── CanvasTarget.js
│           │   │   ├── ChainMap.js
│           │   │   ├── ClippingContext.js
│           │   │   ├── Color4.js
│           │   │   ├── ComputePipeline.js
│           │   │   ├── Constants.js
│           │   │   ├── CubeRenderTarget.js
│           │   │   ├── DataMap.js
│           │   │   ├── Geometries.js
│           │   │   ├── IndirectStorageBufferAttribute.js
│           │   │   ├── Info.js
│           │   │   ├── InspectorBase.js
│           │   │   ├── Lighting.js
│           │   │   ├── Pipeline.js
│           │   │   ├── Pipelines.js
│           │   │   ├── PostProcessing.js
│           │   │   ├── ProgrammableStage.js
│           │   │   ├── QuadMesh.js
│           │   │   ├── ReadbackBuffer.js
│           │   │   ├── RenderBundle.js
│           │   │   ├── RenderBundles.js
│           │   │   ├── RenderContext.js
│           │   │   ├── RenderContexts.js
│           │   │   ├── RenderList.js
│           │   │   ├── RenderLists.js
│           │   │   ├── RenderObject.js
│           │   │   ├── RenderObjectPipeline.js
│           │   │   ├── RenderObjects.js
│           │   │   ├── RenderPipeline.js
│           │   │   ├── Renderer.js
│           │   │   ├── RendererUtils.js
│           │   │   ├── SampledTexture.js
│           │   │   ├── Sampler.js
│           │   │   ├── Storage3DTexture.js
│           │   │   ├── StorageArrayTexture.js
│           │   │   ├── StorageBuffer.js
│           │   │   ├── StorageBufferAttribute.js
│           │   │   ├── StorageInstancedBufferAttribute.js
│           │   │   ├── StorageTexture.js
│           │   │   ├── Textures.js
│           │   │   ├── TimestampQueryPool.js
│           │   │   ├── Uniform.js
│           │   │   ├── UniformBuffer.js
│           │   │   ├── UniformsGroup.js
│           │   │   ├── XRManager.js
│           │   │   ├── XRRenderTarget.js
│           │   │   ├── extras/
│           │   │   │   └── PMREMGenerator.js
│           │   │   └── nodes/
│           │   │       ├── NodeBuilderState.js
│           │   │       ├── NodeLibrary.js
│           │   │       ├── NodeManager.js
│           │   │       ├── NodeSampledTexture.js
│           │   │       ├── NodeSampler.js
│           │   │       ├── NodeStorageBuffer.js
│           │   │       ├── NodeUniform.js
│           │   │       ├── NodeUniformBuffer.js
│           │   │       └── NodeUniformsGroup.js
│           │   ├── shaders/
│           │   │   ├── DFGLUTData.js
│           │   │   ├── ShaderChunk/
│           │   │   │   ├── alphahash_fragment.glsl.js
│           │   │   │   ├── alphahash_pars_fragment.glsl.js
│           │   │   │   ├── alphamap_fragment.glsl.js
│           │   │   │   ├── alphamap_pars_fragment.glsl.js
│           │   │   │   ├── alphatest_fragment.glsl.js
│           │   │   │   ├── alphatest_pars_fragment.glsl.js
│           │   │   │   ├── aomap_fragment.glsl.js
│           │   │   │   ├── aomap_pars_fragment.glsl.js
│           │   │   │   ├── batching_pars_vertex.glsl.js
│           │   │   │   ├── batching_vertex.glsl.js
│           │   │   │   ├── begin_vertex.glsl.js
│           │   │   │   ├── beginnormal_vertex.glsl.js
│           │   │   │   ├── bsdfs.glsl.js
│           │   │   │   ├── bumpmap_pars_fragment.glsl.js
│           │   │   │   ├── clearcoat_normal_fragment_begin.glsl.js
│           │   │   │   ├── clearcoat_normal_fragment_maps.glsl.js
│           │   │   │   ├── clearcoat_pars_fragment.glsl.js
│           │   │   │   ├── clipping_planes_fragment.glsl.js
│           │   │   │   ├── clipping_planes_pars_fragment.glsl.js
│           │   │   │   ├── clipping_planes_pars_vertex.glsl.js
│           │   │   │   ├── clipping_planes_vertex.glsl.js
│           │   │   │   ├── color_fragment.glsl.js
│           │   │   │   ├── color_pars_fragment.glsl.js
│           │   │   │   ├── color_pars_vertex.glsl.js
│           │   │   │   ├── color_vertex.glsl.js
│           │   │   │   ├── colorspace_fragment.glsl.js
│           │   │   │   ├── colorspace_pars_fragment.glsl.js
│           │   │   │   ├── common.glsl.js
│           │   │   │   ├── cube_uv_reflection_fragment.glsl.js
│           │   │   │   ├── default_fragment.glsl.js
│           │   │   │   ├── default_vertex.glsl.js
│           │   │   │   ├── defaultnormal_vertex.glsl.js
│           │   │   │   ├── displacementmap_pars_vertex.glsl.js
│           │   │   │   ├── displacementmap_vertex.glsl.js
│           │   │   │   ├── dithering_fragment.glsl.js
│           │   │   │   ├── dithering_pars_fragment.glsl.js
│           │   │   │   ├── emissivemap_fragment.glsl.js
│           │   │   │   ├── emissivemap_pars_fragment.glsl.js
│           │   │   │   ├── envmap_common_pars_fragment.glsl.js
│           │   │   │   ├── envmap_fragment.glsl.js
│           │   │   │   ├── envmap_pars_fragment.glsl.js
│           │   │   │   ├── envmap_pars_vertex.glsl.js
│           │   │   │   ├── envmap_physical_pars_fragment.glsl.js
│           │   │   │   ├── envmap_vertex.glsl.js
│           │   │   │   ├── fog_fragment.glsl.js
│           │   │   │   ├── fog_pars_fragment.glsl.js
│           │   │   │   ├── fog_pars_vertex.glsl.js
│           │   │   │   ├── fog_vertex.glsl.js
│           │   │   │   ├── gradientmap_pars_fragment.glsl.js
│           │   │   │   ├── iridescence_fragment.glsl.js
│           │   │   │   ├── iridescence_pars_fragment.glsl.js
│           │   │   │   ├── lightmap_pars_fragment.glsl.js
│           │   │   │   ├── lightprobes_pars_fragment.glsl.js
│           │   │   │   ├── lights_fragment_begin.glsl.js
│           │   │   │   ├── lights_fragment_end.glsl.js
│           │   │   │   ├── lights_fragment_maps.glsl.js
│           │   │   │   ├── lights_lambert_fragment.glsl.js
│           │   │   │   ├── lights_lambert_pars_fragment.glsl.js
│           │   │   │   ├── lights_pars_begin.glsl.js
│           │   │   │   ├── lights_phong_fragment.glsl.js
│           │   │   │   ├── lights_phong_pars_fragment.glsl.js
│           │   │   │   ├── lights_physical_fragment.glsl.js
│           │   │   │   ├── lights_physical_pars_fragment.glsl.js
│           │   │   │   ├── lights_toon_fragment.glsl.js
│           │   │   │   ├── lights_toon_pars_fragment.glsl.js
│           │   │   │   ├── logdepthbuf_fragment.glsl.js
│           │   │   │   ├── logdepthbuf_pars_fragment.glsl.js
│           │   │   │   ├── logdepthbuf_pars_vertex.glsl.js
│           │   │   │   ├── logdepthbuf_vertex.glsl.js
│           │   │   │   ├── map_fragment.glsl.js
│           │   │   │   ├── map_pars_fragment.glsl.js
│           │   │   │   ├── map_particle_fragment.glsl.js
│           │   │   │   ├── map_particle_pars_fragment.glsl.js
│           │   │   │   ├── metalnessmap_fragment.glsl.js
│           │   │   │   ├── metalnessmap_pars_fragment.glsl.js
│           │   │   │   ├── morphcolor_vertex.glsl.js
│           │   │   │   ├── morphinstance_vertex.glsl.js
│           │   │   │   ├── morphnormal_vertex.glsl.js
│           │   │   │   ├── morphtarget_pars_vertex.glsl.js
│           │   │   │   ├── morphtarget_vertex.glsl.js
│           │   │   │   ├── normal_fragment_begin.glsl.js
│           │   │   │   ├── normal_fragment_maps.glsl.js
│           │   │   │   ├── normal_pars_fragment.glsl.js
│           │   │   │   ├── normal_pars_vertex.glsl.js
│           │   │   │   ├── normal_vertex.glsl.js
│           │   │   │   ├── normalmap_pars_fragment.glsl.js
│           │   │   │   ├── opaque_fragment.glsl.js
│           │   │   │   ├── packing.glsl.js
│           │   │   │   ├── premultiplied_alpha_fragment.glsl.js
│           │   │   │   ├── project_vertex.glsl.js
│           │   │   │   ├── roughnessmap_fragment.glsl.js
│           │   │   │   ├── roughnessmap_pars_fragment.glsl.js
│           │   │   │   ├── shadowmap_pars_fragment.glsl.js
│           │   │   │   ├── shadowmap_pars_vertex.glsl.js
│           │   │   │   ├── shadowmap_vertex.glsl.js
│           │   │   │   ├── shadowmask_pars_fragment.glsl.js
│           │   │   │   ├── skinbase_vertex.glsl.js
│           │   │   │   ├── skinning_pars_vertex.glsl.js
│           │   │   │   ├── skinning_vertex.glsl.js
│           │   │   │   ├── skinnormal_vertex.glsl.js
│           │   │   │   ├── specularmap_fragment.glsl.js
│           │   │   │   ├── specularmap_pars_fragment.glsl.js
│           │   │   │   ├── tonemapping_fragment.glsl.js
│           │   │   │   ├── tonemapping_pars_fragment.glsl.js
│           │   │   │   ├── transmission_fragment.glsl.js
│           │   │   │   ├── transmission_pars_fragment.glsl.js
│           │   │   │   ├── uv_pars_fragment.glsl.js
│           │   │   │   ├── uv_pars_vertex.glsl.js
│           │   │   │   ├── uv_vertex.glsl.js
│           │   │   │   └── worldpos_vertex.glsl.js
│           │   │   ├── ShaderChunk.js
│           │   │   ├── ShaderLib/
│           │   │   │   ├── background.glsl.js
│           │   │   │   ├── backgroundCube.glsl.js
│           │   │   │   ├── cube.glsl.js
│           │   │   │   ├── depth.glsl.js
│           │   │   │   ├── distance.glsl.js
│           │   │   │   ├── equirect.glsl.js
│           │   │   │   ├── linedashed.glsl.js
│           │   │   │   ├── meshbasic.glsl.js
│           │   │   │   ├── meshlambert.glsl.js
│           │   │   │   ├── meshmatcap.glsl.js
│           │   │   │   ├── meshnormal.glsl.js
│           │   │   │   ├── meshphong.glsl.js
│           │   │   │   ├── meshphysical.glsl.js
│           │   │   │   ├── meshtoon.glsl.js
│           │   │   │   ├── points.glsl.js
│           │   │   │   ├── shadow.glsl.js
│           │   │   │   ├── sprite.glsl.js
│           │   │   │   └── vsm.glsl.js
│           │   │   ├── ShaderLib.js
│           │   │   ├── UniformsLib.js
│           │   │   └── UniformsUtils.js
│           │   ├── webgl/
│           │   │   ├── WebGLAnimation.js
│           │   │   ├── WebGLAttributes.js
│           │   │   ├── WebGLBackground.js
│           │   │   ├── WebGLBindingStates.js
│           │   │   ├── WebGLBufferRenderer.js
│           │   │   ├── WebGLCapabilities.js
│           │   │   ├── WebGLClipping.js
│           │   │   ├── WebGLEnvironments.js
│           │   │   ├── WebGLExtensions.js
│           │   │   ├── WebGLGeometries.js
│           │   │   ├── WebGLIndexedBufferRenderer.js
│           │   │   ├── WebGLInfo.js
│           │   │   ├── WebGLLights.js
│           │   │   ├── WebGLMaterials.js
│           │   │   ├── WebGLMorphtargets.js
│           │   │   ├── WebGLObjects.js
│           │   │   ├── WebGLOutput.js
│           │   │   ├── WebGLProgram.js
│           │   │   ├── WebGLPrograms.js
│           │   │   ├── WebGLProperties.js
│           │   │   ├── WebGLRenderLists.js
│           │   │   ├── WebGLRenderStates.js
│           │   │   ├── WebGLShader.js
│           │   │   ├── WebGLShaderCache.js
│           │   │   ├── WebGLShadowMap.js
│           │   │   ├── WebGLState.js
│           │   │   ├── WebGLTextures.js
│           │   │   ├── WebGLUniforms.js
│           │   │   ├── WebGLUniformsGroups.js
│           │   │   └── WebGLUtils.js
│           │   ├── webgl-fallback/
│           │   │   ├── WebGLBackend.js
│           │   │   ├── WebGLBufferRenderer.js
│           │   │   ├── nodes/
│           │   │   │   └── GLSLNodeBuilder.js
│           │   │   └── utils/
│           │   │       ├── WebGLAttributeUtils.js
│           │   │       ├── WebGLCapabilities.js
│           │   │       ├── WebGLConstants.js
│           │   │       ├── WebGLExtensions.js
│           │   │       ├── WebGLState.js
│           │   │       ├── WebGLTextureUtils.js
│           │   │       ├── WebGLTimestampQueryPool.js
│           │   │       └── WebGLUtils.js
│           │   ├── webgpu/
│           │   │   ├── WebGPUBackend.js
│           │   │   ├── WebGPURenderer.Nodes.js
│           │   │   ├── WebGPURenderer.js
│           │   │   ├── nodes/
│           │   │   │   ├── BasicNodeLibrary.js
│           │   │   │   ├── StandardNodeLibrary.js
│           │   │   │   ├── WGSLNodeBuilder.js
│           │   │   │   ├── WGSLNodeFunction.js
│           │   │   │   └── WGSLNodeParser.js
│           │   │   └── utils/
│           │   │       ├── WebGPUAttributeUtils.js
│           │   │       ├── WebGPUBindingUtils.js
│           │   │       ├── WebGPUCapabilities.js
│           │   │       ├── WebGPUConstants.js
│           │   │       ├── WebGPUPipelineUtils.js
│           │   │       ├── WebGPUTexturePassUtils.js
│           │   │       ├── WebGPUTextureUtils.js
│           │   │       ├── WebGPUTimestampQueryPool.js
│           │   │       └── WebGPUUtils.js
│           │   └── webxr/
│           │       ├── WebXRController.js
│           │       ├── WebXRDepthSensing.js
│           │       └── WebXRManager.js
│           ├── scenes/
│           │   ├── Fog.js
│           │   ├── FogExp2.js
│           │   └── Scene.js
│           ├── textures/
│           │   ├── CanvasTexture.js
│           │   ├── CompressedArrayTexture.js
│           │   ├── CompressedCubeTexture.js
│           │   ├── CompressedTexture.js
│           │   ├── CubeDepthTexture.js
│           │   ├── CubeTexture.js
│           │   ├── Data3DTexture.js
│           │   ├── DataArrayTexture.js
│           │   ├── DataTexture.js
│           │   ├── DepthTexture.js
│           │   ├── ExternalTexture.js
│           │   ├── FramebufferTexture.js
│           │   ├── HTMLTexture.js
│           │   ├── Source.js
│           │   ├── Texture.js
│           │   ├── VideoFrameTexture.js
│           │   └── VideoTexture.js
│           └── utils.js
├── package-lock.json
├── package.json
├── precompute.js
├── screenshots/
│   ├── image_mode.png
│   ├── settings.png
│   └── test_mod.png
├── script.py
├── snow.js
├── sun.js
└── trunk.js
```
