var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i274 = root || request.c( 'UnityEngine.JointSpring' )
  var i275 = data
  i274.spring = i275[0]
  i274.damper = i275[1]
  i274.targetPosition = i275[2]
  return i274
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i276 = root || request.c( 'UnityEngine.JointMotor' )
  var i277 = data
  i276.m_TargetVelocity = i277[0]
  i276.m_Force = i277[1]
  i276.m_FreeSpin = i277[2]
  return i276
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i278 = root || request.c( 'UnityEngine.JointLimits' )
  var i279 = data
  i278.m_Min = i279[0]
  i278.m_Max = i279[1]
  i278.m_Bounciness = i279[2]
  i278.m_BounceMinVelocity = i279[3]
  i278.m_ContactDistance = i279[4]
  i278.minBounce = i279[5]
  i278.maxBounce = i279[6]
  return i278
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i280 = root || request.c( 'UnityEngine.JointDrive' )
  var i281 = data
  i280.m_PositionSpring = i281[0]
  i280.m_PositionDamper = i281[1]
  i280.m_MaximumForce = i281[2]
  i280.m_UseAcceleration = i281[3]
  return i280
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i282 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i283 = data
  i282.m_Spring = i283[0]
  i282.m_Damper = i283[1]
  return i282
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i284 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i285 = data
  i284.m_Limit = i285[0]
  i284.m_Bounciness = i285[1]
  i284.m_ContactDistance = i285[2]
  return i284
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i286 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i287 = data
  i286.m_ExtremumSlip = i287[0]
  i286.m_ExtremumValue = i287[1]
  i286.m_AsymptoteSlip = i287[2]
  i286.m_AsymptoteValue = i287[3]
  i286.m_Stiffness = i287[4]
  return i286
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i288 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i289 = data
  i288.m_LowerAngle = i289[0]
  i288.m_UpperAngle = i289[1]
  return i288
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i290 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i291 = data
  i290.m_MotorSpeed = i291[0]
  i290.m_MaximumMotorTorque = i291[1]
  return i290
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i292 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i293 = data
  i292.m_DampingRatio = i293[0]
  i292.m_Frequency = i293[1]
  i292.m_Angle = i293[2]
  return i292
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i294 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i295 = data
  i294.m_LowerTranslation = i295[0]
  i294.m_UpperTranslation = i295[1]
  return i294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i297 = data
  i296.position = new pc.Vec3( i297[0], i297[1], i297[2] )
  i296.scale = new pc.Vec3( i297[3], i297[4], i297[5] )
  i296.rotation = new pc.Quat(i297[6], i297[7], i297[8], i297[9])
  return i296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i299 = data
  request.r(i299[0], i299[1], 0, i298, 'sharedMesh')
  return i298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i301 = data
  request.r(i301[0], i301[1], 0, i300, 'additionalVertexStreams')
  i300.enabled = !!i301[2]
  request.r(i301[3], i301[4], 0, i300, 'sharedMaterial')
  var i303 = i301[5]
  var i302 = []
  for(var i = 0; i < i303.length; i += 2) {
  request.r(i303[i + 0], i303[i + 1], 2, i302, '')
  }
  i300.sharedMaterials = i302
  i300.receiveShadows = !!i301[6]
  i300.shadowCastingMode = i301[7]
  i300.sortingLayerID = i301[8]
  i300.sortingOrder = i301[9]
  i300.lightmapIndex = i301[10]
  i300.lightmapSceneIndex = i301[11]
  i300.lightmapScaleOffset = new pc.Vec4( i301[12], i301[13], i301[14], i301[15] )
  i300.lightProbeUsage = i301[16]
  i300.reflectionProbeUsage = i301[17]
  return i300
}

Deserializers["CodeBase.Hero.HeroMove"] = function (request, data, root) {
  var i306 = root || request.c( 'CodeBase.Hero.HeroMove' )
  var i307 = data
  request.r(i307[0], i307[1], 0, i306, 'CharacterController')
  i306.MovementSpeed = i307[2]
  return i306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CharacterController"] = function (request, data, root) {
  var i308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CharacterController' )
  var i309 = data
  i308.enabled = !!i309[0]
  i308.center = new pc.Vec3( i309[1], i309[2], i309[3] )
  i308.radius = i309[4]
  i308.height = i309[5]
  i308.minMoveDistance = i309[6]
  i308.skinWidth = i309[7]
  i308.enableOverlapRecovery = !!i309[8]
  return i308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i311 = data
  i310.name = i311[0]
  i310.tagId = i311[1]
  i310.enabled = !!i311[2]
  i310.isStatic = !!i311[3]
  i310.layer = i311[4]
  return i310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i313 = data
  i312.name = i313[0]
  i312.halfPrecision = !!i313[1]
  i312.useUInt32IndexFormat = !!i313[2]
  i312.vertexCount = i313[3]
  i312.aabb = i313[4]
  var i315 = i313[5]
  var i314 = []
  for(var i = 0; i < i315.length; i += 1) {
    i314.push( !!i315[i + 0] );
  }
  i312.streams = i314
  i312.vertices = i313[6]
  var i317 = i313[7]
  var i316 = []
  for(var i = 0; i < i317.length; i += 1) {
    i316.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i317[i + 0]) );
  }
  i312.subMeshes = i316
  var i319 = i313[8]
  var i318 = []
  for(var i = 0; i < i319.length; i += 16) {
    i318.push( new pc.Mat4().setData(i319[i + 0], i319[i + 1], i319[i + 2], i319[i + 3],  i319[i + 4], i319[i + 5], i319[i + 6], i319[i + 7],  i319[i + 8], i319[i + 9], i319[i + 10], i319[i + 11],  i319[i + 12], i319[i + 13], i319[i + 14], i319[i + 15]) );
  }
  i312.bindposes = i318
  var i321 = i313[9]
  var i320 = []
  for(var i = 0; i < i321.length; i += 1) {
    i320.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i321[i + 0]) );
  }
  i312.blendShapes = i320
  return i312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i327 = data
  i326.triangles = i327[0]
  return i326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i333 = data
  i332.name = i333[0]
  var i335 = i333[1]
  var i334 = []
  for(var i = 0; i < i335.length; i += 1) {
    i334.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i335[i + 0]) );
  }
  i332.frames = i334
  return i332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i336 = root || new pc.UnityMaterial()
  var i337 = data
  i336.name = i337[0]
  request.r(i337[1], i337[2], 0, i336, 'shader')
  i336.renderQueue = i337[3]
  i336.enableInstancing = !!i337[4]
  var i339 = i337[5]
  var i338 = []
  for(var i = 0; i < i339.length; i += 1) {
    i338.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i339[i + 0]) );
  }
  i336.floatParameters = i338
  var i341 = i337[6]
  var i340 = []
  for(var i = 0; i < i341.length; i += 1) {
    i340.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i341[i + 0]) );
  }
  i336.colorParameters = i340
  var i343 = i337[7]
  var i342 = []
  for(var i = 0; i < i343.length; i += 1) {
    i342.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i343[i + 0]) );
  }
  i336.vectorParameters = i342
  var i345 = i337[8]
  var i344 = []
  for(var i = 0; i < i345.length; i += 1) {
    i344.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i345[i + 0]) );
  }
  i336.textureParameters = i344
  var i347 = i337[9]
  var i346 = []
  for(var i = 0; i < i347.length; i += 1) {
    i346.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i347[i + 0]) );
  }
  i336.materialFlags = i346
  return i336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i351 = data
  i350.name = i351[0]
  i350.value = i351[1]
  return i350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i355 = data
  i354.name = i355[0]
  i354.value = new pc.Color(i355[1], i355[2], i355[3], i355[4])
  return i354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i359 = data
  i358.name = i359[0]
  i358.value = new pc.Vec4( i359[1], i359[2], i359[3], i359[4] )
  return i358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i363 = data
  i362.name = i363[0]
  request.r(i363[1], i363[2], 0, i362, 'value')
  return i362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i367 = data
  i366.name = i367[0]
  i366.enabled = !!i367[1]
  return i366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i369 = data
  i368.name = i369[0]
  i368.width = i369[1]
  i368.height = i369[2]
  i368.mipmapCount = i369[3]
  i368.anisoLevel = i369[4]
  i368.filterMode = i369[5]
  i368.hdr = !!i369[6]
  i368.format = i369[7]
  i368.wrapMode = i369[8]
  i368.alphaIsTransparency = !!i369[9]
  i368.alphaSource = i369[10]
  i368.graphicsFormat = i369[11]
  i368.sRGBTexture = !!i369[12]
  i368.desiredColorSpace = i369[13]
  i368.wrapU = i369[14]
  i368.wrapV = i369[15]
  return i368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i371 = data
  i370.pivot = new pc.Vec2( i371[0], i371[1] )
  i370.anchorMin = new pc.Vec2( i371[2], i371[3] )
  i370.anchorMax = new pc.Vec2( i371[4], i371[5] )
  i370.sizeDelta = new pc.Vec2( i371[6], i371[7] )
  i370.anchoredPosition3D = new pc.Vec3( i371[8], i371[9], i371[10] )
  i370.rotation = new pc.Quat(i371[11], i371[12], i371[13], i371[14])
  i370.scale = new pc.Vec3( i371[15], i371[16], i371[17] )
  return i370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i373 = data
  i372.cullTransparentMesh = !!i373[0]
  return i372
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i374 = root || request.c( 'UnityEngine.UI.Image' )
  var i375 = data
  request.r(i375[0], i375[1], 0, i374, 'm_Sprite')
  i374.m_Type = i375[2]
  i374.m_PreserveAspect = !!i375[3]
  i374.m_FillCenter = !!i375[4]
  i374.m_FillMethod = i375[5]
  i374.m_FillAmount = i375[6]
  i374.m_FillClockwise = !!i375[7]
  i374.m_FillOrigin = i375[8]
  i374.m_UseSpriteMesh = !!i375[9]
  i374.m_PixelsPerUnitMultiplier = i375[10]
  request.r(i375[11], i375[12], 0, i374, 'm_Material')
  i374.m_Maskable = !!i375[13]
  i374.m_Color = new pc.Color(i375[14], i375[15], i375[16], i375[17])
  i374.m_RaycastTarget = !!i375[18]
  i374.m_RaycastPadding = new pc.Vec4( i375[19], i375[20], i375[21], i375[22] )
  return i374
}

Deserializers["SimpleInputNamespace.Joystick"] = function (request, data, root) {
  var i376 = root || request.c( 'SimpleInputNamespace.Joystick' )
  var i377 = data
  i376.xAxis = request.d('SimpleInput+AxisInput', i377[0], i376.xAxis)
  i376.yAxis = request.d('SimpleInput+AxisInput', i377[1], i376.yAxis)
  i376.movementAxes = i377[2]
  i376.valueMultiplier = i377[3]
  request.r(i377[4], i377[5], 0, i376, 'thumb')
  i376.movementAreaRadius = i377[6]
  i376.deadzoneRadius = i377[7]
  i376.isDynamicJoystick = !!i377[8]
  request.r(i377[9], i377[10], 0, i376, 'dynamicJoystickMovementArea')
  i376.canFollowPointer = !!i377[11]
  return i376
}

Deserializers["SimpleInput+AxisInput"] = function (request, data, root) {
  var i378 = root || request.c( 'SimpleInput+AxisInput' )
  var i379 = data
  i378.value = i379[0]
  i378.m_key = i379[1]
  return i378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i381 = data
  i380.name = i381[0]
  i380.atlasId = i381[1]
  i380.mipmapCount = i381[2]
  i380.hdr = !!i381[3]
  i380.size = i381[4]
  i380.anisoLevel = i381[5]
  i380.filterMode = i381[6]
  var i383 = i381[7]
  var i382 = []
  for(var i = 0; i < i383.length; i += 4) {
    i382.push( UnityEngine.Rect.MinMaxRect(i383[i + 0], i383[i + 1], i383[i + 2], i383[i + 3]) );
  }
  i380.rects = i382
  i380.wrapU = i381[8]
  i380.wrapV = i381[9]
  return i380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i387 = data
  i386.name = i387[0]
  i386.index = i387[1]
  i386.startup = !!i387[2]
  return i386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i389 = data
  i388.enabled = !!i389[0]
  i388.aspect = i389[1]
  i388.orthographic = !!i389[2]
  i388.orthographicSize = i389[3]
  i388.backgroundColor = new pc.Color(i389[4], i389[5], i389[6], i389[7])
  i388.nearClipPlane = i389[8]
  i388.farClipPlane = i389[9]
  i388.fieldOfView = i389[10]
  i388.depth = i389[11]
  i388.clearFlags = i389[12]
  i388.cullingMask = i389[13]
  i388.rect = i389[14]
  request.r(i389[15], i389[16], 0, i388, 'targetTexture')
  i388.usePhysicalProperties = !!i389[17]
  i388.focalLength = i389[18]
  i388.sensorSize = new pc.Vec2( i389[19], i389[20] )
  i388.lensShift = new pc.Vec2( i389[21], i389[22] )
  i388.gateFit = i389[23]
  i388.commandBufferCount = i389[24]
  i388.cameraType = i389[25]
  return i388
}

Deserializers["CodeBase.CameraLogic.CameraFollow"] = function (request, data, root) {
  var i390 = root || request.c( 'CodeBase.CameraLogic.CameraFollow' )
  var i391 = data
  i390.RotationAngleX = i391[0]
  i390.Distance = i391[1]
  i390.OffsetY = i391[2]
  request.r(i391[3], i391[4], 0, i390, '_following')
  return i390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i393 = data
  i392.enabled = !!i393[0]
  i392.planeDistance = i393[1]
  i392.referencePixelsPerUnit = i393[2]
  i392.isFallbackOverlay = !!i393[3]
  i392.renderMode = i393[4]
  i392.renderOrder = i393[5]
  i392.sortingLayerName = i393[6]
  i392.sortingOrder = i393[7]
  i392.scaleFactor = i393[8]
  request.r(i393[9], i393[10], 0, i392, 'worldCamera')
  i392.overrideSorting = !!i393[11]
  i392.pixelPerfect = !!i393[12]
  i392.targetDisplay = i393[13]
  i392.overridePixelPerfect = !!i393[14]
  return i392
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i394 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i395 = data
  i394.m_UiScaleMode = i395[0]
  i394.m_ReferencePixelsPerUnit = i395[1]
  i394.m_ScaleFactor = i395[2]
  i394.m_ReferenceResolution = new pc.Vec2( i395[3], i395[4] )
  i394.m_ScreenMatchMode = i395[5]
  i394.m_MatchWidthOrHeight = i395[6]
  i394.m_PhysicalUnit = i395[7]
  i394.m_FallbackScreenDPI = i395[8]
  i394.m_DefaultSpriteDPI = i395[9]
  i394.m_DynamicPixelsPerUnit = i395[10]
  i394.m_PresetInfoIsWorld = !!i395[11]
  return i394
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i396 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i397 = data
  i396.m_IgnoreReversedGraphics = !!i397[0]
  i396.m_BlockingObjects = i397[1]
  i396.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i397[2] )
  return i396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i399 = data
  i398.enabled = !!i399[0]
  i398.type = i399[1]
  i398.color = new pc.Color(i399[2], i399[3], i399[4], i399[5])
  i398.cullingMask = i399[6]
  i398.intensity = i399[7]
  i398.range = i399[8]
  i398.spotAngle = i399[9]
  i398.shadows = i399[10]
  i398.shadowNormalBias = i399[11]
  i398.shadowBias = i399[12]
  i398.shadowStrength = i399[13]
  i398.shadowResolution = i399[14]
  i398.lightmapBakeType = i399[15]
  i398.renderMode = i399[16]
  request.r(i399[17], i399[18], 0, i398, 'cookie')
  i398.cookieSize = i399[19]
  return i398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i401 = data
  i400.center = new pc.Vec3( i401[0], i401[1], i401[2] )
  i400.size = new pc.Vec3( i401[3], i401[4], i401[5] )
  i400.enabled = !!i401[6]
  i400.isTrigger = !!i401[7]
  request.r(i401[8], i401[9], 0, i400, 'material')
  return i400
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i402 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i403 = data
  request.r(i403[0], i403[1], 0, i402, 'm_FirstSelected')
  i402.m_sendNavigationEvents = !!i403[2]
  i402.m_DragThreshold = i403[3]
  return i402
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i404 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i405 = data
  i404.m_HorizontalAxis = i405[0]
  i404.m_VerticalAxis = i405[1]
  i404.m_SubmitButton = i405[2]
  i404.m_CancelButton = i405[3]
  i404.m_InputActionsPerSecond = i405[4]
  i404.m_RepeatDelay = i405[5]
  i404.m_ForceModuleActive = !!i405[6]
  i404.m_SendPointerHoverToParent = !!i405[7]
  return i404
}

Deserializers["CodeBase.Infrastructure.GameBootstrapper"] = function (request, data, root) {
  var i406 = root || request.c( 'CodeBase.Infrastructure.GameBootstrapper' )
  var i407 = data
  return i406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i409 = data
  i408.ambientIntensity = i409[0]
  i408.reflectionIntensity = i409[1]
  i408.ambientMode = i409[2]
  i408.ambientLight = new pc.Color(i409[3], i409[4], i409[5], i409[6])
  i408.ambientSkyColor = new pc.Color(i409[7], i409[8], i409[9], i409[10])
  i408.ambientGroundColor = new pc.Color(i409[11], i409[12], i409[13], i409[14])
  i408.ambientEquatorColor = new pc.Color(i409[15], i409[16], i409[17], i409[18])
  i408.fogColor = new pc.Color(i409[19], i409[20], i409[21], i409[22])
  i408.fogEndDistance = i409[23]
  i408.fogStartDistance = i409[24]
  i408.fogDensity = i409[25]
  i408.fog = !!i409[26]
  request.r(i409[27], i409[28], 0, i408, 'skybox')
  i408.fogMode = i409[29]
  var i411 = i409[30]
  var i410 = []
  for(var i = 0; i < i411.length; i += 1) {
    i410.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i411[i + 0]) );
  }
  i408.lightmaps = i410
  i408.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i409[31], i408.lightProbes)
  i408.lightmapsMode = i409[32]
  i408.mixedBakeMode = i409[33]
  i408.environmentLightingMode = i409[34]
  i408.ambientProbe = new pc.SphericalHarmonicsL2(i409[35])
  i408.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i409[36])
  i408.useReferenceAmbientProbe = !!i409[37]
  request.r(i409[38], i409[39], 0, i408, 'customReflection')
  request.r(i409[40], i409[41], 0, i408, 'defaultReflection')
  i408.defaultReflectionMode = i409[42]
  i408.defaultReflectionResolution = i409[43]
  i408.sunLightObjectId = i409[44]
  i408.pixelLightCount = i409[45]
  i408.defaultReflectionHDR = !!i409[46]
  i408.hasLightDataAsset = !!i409[47]
  i408.hasManualGenerate = !!i409[48]
  return i408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i415 = data
  request.r(i415[0], i415[1], 0, i414, 'lightmapColor')
  request.r(i415[2], i415[3], 0, i414, 'lightmapDirection')
  return i414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i416 = root || new UnityEngine.LightProbes()
  var i417 = data
  return i416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i425 = data
  var i427 = i425[0]
  var i426 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i427.length; i += 1) {
    i426.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i427[i + 0]));
  }
  i424.ShaderCompilationErrors = i426
  i424.name = i425[1]
  i424.guid = i425[2]
  var i429 = i425[3]
  var i428 = []
  for(var i = 0; i < i429.length; i += 1) {
    i428.push( i429[i + 0] );
  }
  i424.shaderDefinedKeywords = i428
  var i431 = i425[4]
  var i430 = []
  for(var i = 0; i < i431.length; i += 1) {
    i430.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i431[i + 0]) );
  }
  i424.passes = i430
  var i433 = i425[5]
  var i432 = []
  for(var i = 0; i < i433.length; i += 1) {
    i432.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i433[i + 0]) );
  }
  i424.usePasses = i432
  var i435 = i425[6]
  var i434 = []
  for(var i = 0; i < i435.length; i += 1) {
    i434.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i435[i + 0]) );
  }
  i424.defaultParameterValues = i434
  request.r(i425[7], i425[8], 0, i424, 'unityFallbackShader')
  i424.readDepth = !!i425[9]
  i424.isCreatedByShaderGraph = !!i425[10]
  i424.compiled = !!i425[11]
  return i424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i439 = data
  i438.shaderName = i439[0]
  i438.errorMessage = i439[1]
  return i438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i444 = root || new pc.UnityShaderPass()
  var i445 = data
  i444.id = i445[0]
  i444.subShaderIndex = i445[1]
  i444.name = i445[2]
  i444.passType = i445[3]
  i444.grabPassTextureName = i445[4]
  i444.usePass = !!i445[5]
  i444.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i445[6], i444.zTest)
  i444.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i445[7], i444.zWrite)
  i444.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i445[8], i444.culling)
  i444.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i445[9], i444.blending)
  i444.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i445[10], i444.alphaBlending)
  i444.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i445[11], i444.colorWriteMask)
  i444.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i445[12], i444.offsetUnits)
  i444.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i445[13], i444.offsetFactor)
  i444.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i445[14], i444.stencilRef)
  i444.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i445[15], i444.stencilReadMask)
  i444.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i445[16], i444.stencilWriteMask)
  i444.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i445[17], i444.stencilOp)
  i444.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i445[18], i444.stencilOpFront)
  i444.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i445[19], i444.stencilOpBack)
  var i447 = i445[20]
  var i446 = []
  for(var i = 0; i < i447.length; i += 1) {
    i446.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i447[i + 0]) );
  }
  i444.tags = i446
  var i449 = i445[21]
  var i448 = []
  for(var i = 0; i < i449.length; i += 1) {
    i448.push( i449[i + 0] );
  }
  i444.passDefinedKeywords = i448
  var i451 = i445[22]
  var i450 = []
  for(var i = 0; i < i451.length; i += 1) {
    i450.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i451[i + 0]) );
  }
  i444.passDefinedKeywordGroups = i450
  var i453 = i445[23]
  var i452 = []
  for(var i = 0; i < i453.length; i += 1) {
    i452.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i453[i + 0]) );
  }
  i444.variants = i452
  var i455 = i445[24]
  var i454 = []
  for(var i = 0; i < i455.length; i += 1) {
    i454.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i455[i + 0]) );
  }
  i444.excludedVariants = i454
  i444.hasDepthReader = !!i445[25]
  return i444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i457 = data
  i456.val = i457[0]
  i456.name = i457[1]
  return i456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i459 = data
  i458.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i459[0], i458.src)
  i458.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i459[1], i458.dst)
  i458.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i459[2], i458.op)
  return i458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i461 = data
  i460.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i461[0], i460.pass)
  i460.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i461[1], i460.fail)
  i460.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i461[2], i460.zFail)
  i460.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i461[3], i460.comp)
  return i460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i465 = data
  i464.name = i465[0]
  i464.value = i465[1]
  return i464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i469 = data
  var i471 = i469[0]
  var i470 = []
  for(var i = 0; i < i471.length; i += 1) {
    i470.push( i471[i + 0] );
  }
  i468.keywords = i470
  i468.hasDiscard = !!i469[1]
  return i468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i475 = data
  i474.passId = i475[0]
  i474.subShaderIndex = i475[1]
  var i477 = i475[2]
  var i476 = []
  for(var i = 0; i < i477.length; i += 1) {
    i476.push( i477[i + 0] );
  }
  i474.keywords = i476
  i474.vertexProgram = i475[3]
  i474.fragmentProgram = i475[4]
  i474.exportedForWebGl2 = !!i475[5]
  i474.readDepth = !!i475[6]
  return i474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i481 = data
  request.r(i481[0], i481[1], 0, i480, 'shader')
  i480.pass = i481[2]
  return i480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i485 = data
  i484.name = i485[0]
  i484.type = i485[1]
  i484.value = new pc.Vec4( i485[2], i485[3], i485[4], i485[5] )
  i484.textureValue = i485[6]
  i484.shaderPropertyFlag = i485[7]
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i487 = data
  i486.name = i487[0]
  request.r(i487[1], i487[2], 0, i486, 'texture')
  i486.aabb = i487[3]
  i486.vertices = i487[4]
  i486.triangles = i487[5]
  i486.textureRect = UnityEngine.Rect.MinMaxRect(i487[6], i487[7], i487[8], i487[9])
  i486.packedRect = UnityEngine.Rect.MinMaxRect(i487[10], i487[11], i487[12], i487[13])
  i486.border = new pc.Vec4( i487[14], i487[15], i487[16], i487[17] )
  i486.transparency = i487[18]
  i486.bounds = i487[19]
  i486.pixelsPerUnit = i487[20]
  i486.textureWidth = i487[21]
  i486.textureHeight = i487[22]
  i486.nativeSize = new pc.Vec2( i487[23], i487[24] )
  i486.pivot = new pc.Vec2( i487[25], i487[26] )
  i486.textureRectOffset = new pc.Vec2( i487[27], i487[28] )
  return i486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i489 = data
  var i491 = i489[0]
  var i490 = []
  for(var i = 0; i < i491.length; i += 1) {
    i490.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i491[i + 0]) );
  }
  i488.files = i490
  i488.componentToPrefabIds = i489[1]
  return i488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i495 = data
  i494.path = i495[0]
  request.r(i495[1], i495[2], 0, i494, 'unityObject')
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i497 = data
  var i499 = i497[0]
  var i498 = []
  for(var i = 0; i < i499.length; i += 1) {
    i498.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i499[i + 0]) );
  }
  i496.scriptsExecutionOrder = i498
  var i501 = i497[1]
  var i500 = []
  for(var i = 0; i < i501.length; i += 1) {
    i500.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i501[i + 0]) );
  }
  i496.sortingLayers = i500
  var i503 = i497[2]
  var i502 = []
  for(var i = 0; i < i503.length; i += 1) {
    i502.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i503[i + 0]) );
  }
  i496.cullingLayers = i502
  i496.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i497[3], i496.timeSettings)
  i496.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i497[4], i496.physicsSettings)
  i496.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i497[5], i496.physics2DSettings)
  i496.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i497[6], i496.qualitySettings)
  i496.enableRealtimeShadows = !!i497[7]
  i496.enableAutoInstancing = !!i497[8]
  i496.enableDynamicBatching = !!i497[9]
  i496.lightmapEncodingQuality = i497[10]
  i496.desiredColorSpace = i497[11]
  var i505 = i497[12]
  var i504 = []
  for(var i = 0; i < i505.length; i += 1) {
    i504.push( i505[i + 0] );
  }
  i496.allTags = i504
  return i496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i509 = data
  i508.name = i509[0]
  i508.value = i509[1]
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i513 = data
  i512.id = i513[0]
  i512.name = i513[1]
  i512.value = i513[2]
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i517 = data
  i516.id = i517[0]
  i516.name = i517[1]
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i519 = data
  i518.fixedDeltaTime = i519[0]
  i518.maximumDeltaTime = i519[1]
  i518.timeScale = i519[2]
  i518.maximumParticleTimestep = i519[3]
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i521 = data
  i520.gravity = new pc.Vec3( i521[0], i521[1], i521[2] )
  i520.defaultSolverIterations = i521[3]
  i520.bounceThreshold = i521[4]
  i520.autoSyncTransforms = !!i521[5]
  i520.autoSimulation = !!i521[6]
  var i523 = i521[7]
  var i522 = []
  for(var i = 0; i < i523.length; i += 1) {
    i522.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i523[i + 0]) );
  }
  i520.collisionMatrix = i522
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i527 = data
  i526.enabled = !!i527[0]
  i526.layerId = i527[1]
  i526.otherLayerId = i527[2]
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i529 = data
  request.r(i529[0], i529[1], 0, i528, 'material')
  i528.gravity = new pc.Vec2( i529[2], i529[3] )
  i528.positionIterations = i529[4]
  i528.velocityIterations = i529[5]
  i528.velocityThreshold = i529[6]
  i528.maxLinearCorrection = i529[7]
  i528.maxAngularCorrection = i529[8]
  i528.maxTranslationSpeed = i529[9]
  i528.maxRotationSpeed = i529[10]
  i528.baumgarteScale = i529[11]
  i528.baumgarteTOIScale = i529[12]
  i528.timeToSleep = i529[13]
  i528.linearSleepTolerance = i529[14]
  i528.angularSleepTolerance = i529[15]
  i528.defaultContactOffset = i529[16]
  i528.autoSimulation = !!i529[17]
  i528.queriesHitTriggers = !!i529[18]
  i528.queriesStartInColliders = !!i529[19]
  i528.callbacksOnDisable = !!i529[20]
  i528.reuseCollisionCallbacks = !!i529[21]
  i528.autoSyncTransforms = !!i529[22]
  var i531 = i529[23]
  var i530 = []
  for(var i = 0; i < i531.length; i += 1) {
    i530.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i531[i + 0]) );
  }
  i528.collisionMatrix = i530
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i535 = data
  i534.enabled = !!i535[0]
  i534.layerId = i535[1]
  i534.otherLayerId = i535[2]
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i537 = data
  var i539 = i537[0]
  var i538 = []
  for(var i = 0; i < i539.length; i += 1) {
    i538.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i539[i + 0]) );
  }
  i536.qualityLevels = i538
  var i541 = i537[1]
  var i540 = []
  for(var i = 0; i < i541.length; i += 1) {
    i540.push( i541[i + 0] );
  }
  i536.names = i540
  i536.shadows = i537[2]
  i536.anisotropicFiltering = i537[3]
  i536.antiAliasing = i537[4]
  i536.lodBias = i537[5]
  i536.shadowCascades = i537[6]
  i536.shadowDistance = i537[7]
  i536.shadowmaskMode = i537[8]
  i536.shadowProjection = i537[9]
  i536.shadowResolution = i537[10]
  i536.softParticles = !!i537[11]
  i536.softVegetation = !!i537[12]
  i536.activeColorSpace = i537[13]
  i536.desiredColorSpace = i537[14]
  i536.masterTextureLimit = i537[15]
  i536.maxQueuedFrames = i537[16]
  i536.particleRaycastBudget = i537[17]
  i536.pixelLightCount = i537[18]
  i536.realtimeReflectionProbes = !!i537[19]
  i536.shadowCascade2Split = i537[20]
  i536.shadowCascade4Split = new pc.Vec3( i537[21], i537[22], i537[23] )
  i536.streamingMipmapsActive = !!i537[24]
  i536.vSyncCount = i537[25]
  i536.asyncUploadBufferSize = i537[26]
  i536.asyncUploadTimeSlice = i537[27]
  i536.billboardsFaceCameraPosition = !!i537[28]
  i536.shadowNearPlaneOffset = i537[29]
  i536.streamingMipmapsMemoryBudget = i537[30]
  i536.maximumLODLevel = i537[31]
  i536.streamingMipmapsAddAllCameras = !!i537[32]
  i536.streamingMipmapsMaxLevelReduction = i537[33]
  i536.streamingMipmapsRenderersPerFrame = i537[34]
  i536.resolutionScalingFixedDPIFactor = i537[35]
  i536.streamingMipmapsMaxFileIORequests = i537[36]
  i536.currentQualityLevel = i537[37]
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i547 = data
  i546.weight = i547[0]
  i546.vertices = i547[1]
  i546.normals = i547[2]
  i546.tangents = i547[3]
  return i546
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.CharacterController":{"enabled":0,"center":1,"radius":4,"height":5,"minMoveDistance":6,"skinWidth":7,"enableOverlapRecovery":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"29":[30],"31":[30],"32":[30],"33":[30],"34":[30],"35":[30],"36":[37],"38":[16],"39":[40],"41":[40],"42":[40],"43":[40],"44":[40],"45":[40],"46":[40],"47":[48],"49":[48],"50":[48],"51":[48],"52":[48],"53":[48],"54":[48],"55":[48],"56":[48],"57":[48],"58":[48],"59":[48],"60":[48],"61":[16],"62":[3],"63":[64],"65":[64],"19":[10],"66":[10],"67":[10],"21":[19],"13":[11,10],"68":[10],"20":[19],"69":[10],"70":[10],"71":[10],"72":[10],"73":[10],"74":[10],"75":[10],"76":[10],"77":[10],"78":[11,10],"79":[10],"80":[10],"81":[10],"82":[10],"83":[11,10],"84":[10],"85":[24],"86":[24],"25":[24],"87":[24],"88":[16],"89":[16],"90":[10],"91":[3,10],"92":[10,11],"93":[10],"94":[11,10],"95":[3],"96":[11,10],"97":[10],"98":[99],"100":[101],"102":[101],"103":[101],"104":[101],"105":[101],"106":[101],"107":[11,10],"101":[10],"108":[101],"109":[101],"110":[101],"111":[99],"112":[99]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.MonoBehaviour","CodeBase.Hero.HeroMove","UnityEngine.CharacterController","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","SimpleInputNamespace.Joystick","UnityEngine.Camera","UnityEngine.AudioListener","CodeBase.CameraLogic.CameraFollow","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.Light","UnityEngine.BoxCollider","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","CodeBase.Infrastructure.GameBootstrapper","UnityEngine.Cubemap","UnityEngine.GameObject","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","SimpleInputNamespace.AxisInputMoveGesture","SimpleInputNamespace.SimpleInputMultiDragListener","SimpleInputNamespace.AxisInputPinchGesture","SimpleInputNamespace.AxisInputRotateGesture","SimpleInputNamespace.AxisInputSwipeGesture","SimpleInputNamespace.Touchpad","SimpleInputNamespace.ButtonInputSwipeGesture","SimpleInputNamespace.NonDrawingGraphic","SimpleInputNamespace.SwipeGestureBase`2","SimpleInputNamespace.KeyInputSwipeGesture","SimpleInputNamespace.MouseButtonInputSwipeGesture","Unity.VisualScripting.StateMachine","Unity.VisualScripting.ScriptMachine"]

Deserializers.unityVersion = "2022.3.58f1";

Deserializers.productName = "Lumber2";

Deserializers.lunaInitializationTime = "04/08/2025 09:56:16";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "27856";

Deserializers.projectId = "ee84a2d3fee5642498838a2f0d9624a1";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.7\ncom.unity.timeline: 1.7.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1905";

Deserializers.runtimeAnalysisExcludedMethodsCount = "2684";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, particle-system, reflection, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.Lumber2";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "15879972-ba46-47b2-bcb7-e43675fb848a";

Deserializers.runtimeInitializeOnLoadInfos = [[["SimpleInput","Init"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

