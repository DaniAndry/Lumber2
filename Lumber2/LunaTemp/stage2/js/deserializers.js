var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i918 = root || request.c( 'UnityEngine.JointSpring' )
  var i919 = data
  i918.spring = i919[0]
  i918.damper = i919[1]
  i918.targetPosition = i919[2]
  return i918
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i920 = root || request.c( 'UnityEngine.JointMotor' )
  var i921 = data
  i920.m_TargetVelocity = i921[0]
  i920.m_Force = i921[1]
  i920.m_FreeSpin = i921[2]
  return i920
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i922 = root || request.c( 'UnityEngine.JointLimits' )
  var i923 = data
  i922.m_Min = i923[0]
  i922.m_Max = i923[1]
  i922.m_Bounciness = i923[2]
  i922.m_BounceMinVelocity = i923[3]
  i922.m_ContactDistance = i923[4]
  i922.minBounce = i923[5]
  i922.maxBounce = i923[6]
  return i922
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i924 = root || request.c( 'UnityEngine.JointDrive' )
  var i925 = data
  i924.m_PositionSpring = i925[0]
  i924.m_PositionDamper = i925[1]
  i924.m_MaximumForce = i925[2]
  i924.m_UseAcceleration = i925[3]
  return i924
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i926 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i927 = data
  i926.m_Spring = i927[0]
  i926.m_Damper = i927[1]
  return i926
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i928 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i929 = data
  i928.m_Limit = i929[0]
  i928.m_Bounciness = i929[1]
  i928.m_ContactDistance = i929[2]
  return i928
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i930 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i931 = data
  i930.m_ExtremumSlip = i931[0]
  i930.m_ExtremumValue = i931[1]
  i930.m_AsymptoteSlip = i931[2]
  i930.m_AsymptoteValue = i931[3]
  i930.m_Stiffness = i931[4]
  return i930
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i932 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i933 = data
  i932.m_LowerAngle = i933[0]
  i932.m_UpperAngle = i933[1]
  return i932
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i934 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i935 = data
  i934.m_MotorSpeed = i935[0]
  i934.m_MaximumMotorTorque = i935[1]
  return i934
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i936 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i937 = data
  i936.m_DampingRatio = i937[0]
  i936.m_Frequency = i937[1]
  i936.m_Angle = i937[2]
  return i936
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i938 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i939 = data
  i938.m_LowerTranslation = i939[0]
  i938.m_UpperTranslation = i939[1]
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i941 = data
  i940.position = new pc.Vec3( i941[0], i941[1], i941[2] )
  i940.scale = new pc.Vec3( i941[3], i941[4], i941[5] )
  i940.rotation = new pc.Quat(i941[6], i941[7], i941[8], i941[9])
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i943 = data
  request.r(i943[0], i943[1], 0, i942, 'sharedMesh')
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i945 = data
  request.r(i945[0], i945[1], 0, i944, 'additionalVertexStreams')
  i944.enabled = !!i945[2]
  request.r(i945[3], i945[4], 0, i944, 'sharedMaterial')
  var i947 = i945[5]
  var i946 = []
  for(var i = 0; i < i947.length; i += 2) {
  request.r(i947[i + 0], i947[i + 1], 2, i946, '')
  }
  i944.sharedMaterials = i946
  i944.receiveShadows = !!i945[6]
  i944.shadowCastingMode = i945[7]
  i944.sortingLayerID = i945[8]
  i944.sortingOrder = i945[9]
  i944.lightmapIndex = i945[10]
  i944.lightmapSceneIndex = i945[11]
  i944.lightmapScaleOffset = new pc.Vec4( i945[12], i945[13], i945[14], i945[15] )
  i944.lightProbeUsage = i945[16]
  i944.reflectionProbeUsage = i945[17]
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i951 = data
  i950.name = i951[0]
  i950.tagId = i951[1]
  i950.enabled = !!i951[2]
  i950.isStatic = !!i951[3]
  i950.layer = i951[4]
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i953 = data
  i952.name = i953[0]
  i952.halfPrecision = !!i953[1]
  i952.useUInt32IndexFormat = !!i953[2]
  i952.vertexCount = i953[3]
  i952.aabb = i953[4]
  var i955 = i953[5]
  var i954 = []
  for(var i = 0; i < i955.length; i += 1) {
    i954.push( !!i955[i + 0] );
  }
  i952.streams = i954
  i952.vertices = i953[6]
  var i957 = i953[7]
  var i956 = []
  for(var i = 0; i < i957.length; i += 1) {
    i956.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i957[i + 0]) );
  }
  i952.subMeshes = i956
  var i959 = i953[8]
  var i958 = []
  for(var i = 0; i < i959.length; i += 16) {
    i958.push( new pc.Mat4().setData(i959[i + 0], i959[i + 1], i959[i + 2], i959[i + 3],  i959[i + 4], i959[i + 5], i959[i + 6], i959[i + 7],  i959[i + 8], i959[i + 9], i959[i + 10], i959[i + 11],  i959[i + 12], i959[i + 13], i959[i + 14], i959[i + 15]) );
  }
  i952.bindposes = i958
  var i961 = i953[9]
  var i960 = []
  for(var i = 0; i < i961.length; i += 1) {
    i960.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i961[i + 0]) );
  }
  i952.blendShapes = i960
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i967 = data
  i966.triangles = i967[0]
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i973 = data
  i972.name = i973[0]
  var i975 = i973[1]
  var i974 = []
  for(var i = 0; i < i975.length; i += 1) {
    i974.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i975[i + 0]) );
  }
  i972.frames = i974
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i976 = root || new pc.UnityMaterial()
  var i977 = data
  i976.name = i977[0]
  request.r(i977[1], i977[2], 0, i976, 'shader')
  i976.renderQueue = i977[3]
  i976.enableInstancing = !!i977[4]
  var i979 = i977[5]
  var i978 = []
  for(var i = 0; i < i979.length; i += 1) {
    i978.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i979[i + 0]) );
  }
  i976.floatParameters = i978
  var i981 = i977[6]
  var i980 = []
  for(var i = 0; i < i981.length; i += 1) {
    i980.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i981[i + 0]) );
  }
  i976.colorParameters = i980
  var i983 = i977[7]
  var i982 = []
  for(var i = 0; i < i983.length; i += 1) {
    i982.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i983[i + 0]) );
  }
  i976.vectorParameters = i982
  var i985 = i977[8]
  var i984 = []
  for(var i = 0; i < i985.length; i += 1) {
    i984.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i985[i + 0]) );
  }
  i976.textureParameters = i984
  var i987 = i977[9]
  var i986 = []
  for(var i = 0; i < i987.length; i += 1) {
    i986.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i987[i + 0]) );
  }
  i976.materialFlags = i986
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i991 = data
  i990.name = i991[0]
  i990.value = i991[1]
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i995 = data
  i994.name = i995[0]
  i994.value = new pc.Color(i995[1], i995[2], i995[3], i995[4])
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i999 = data
  i998.name = i999[0]
  i998.value = new pc.Vec4( i999[1], i999[2], i999[3], i999[4] )
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1003 = data
  i1002.name = i1003[0]
  request.r(i1003[1], i1003[2], 0, i1002, 'value')
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1007 = data
  i1006.name = i1007[0]
  i1006.enabled = !!i1007[1]
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1009 = data
  i1008.name = i1009[0]
  i1008.width = i1009[1]
  i1008.height = i1009[2]
  i1008.mipmapCount = i1009[3]
  i1008.anisoLevel = i1009[4]
  i1008.filterMode = i1009[5]
  i1008.hdr = !!i1009[6]
  i1008.format = i1009[7]
  i1008.wrapMode = i1009[8]
  i1008.alphaIsTransparency = !!i1009[9]
  i1008.alphaSource = i1009[10]
  i1008.graphicsFormat = i1009[11]
  i1008.sRGBTexture = !!i1009[12]
  i1008.desiredColorSpace = i1009[13]
  i1008.wrapU = i1009[14]
  i1008.wrapV = i1009[15]
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1011 = data
  i1010.pivot = new pc.Vec2( i1011[0], i1011[1] )
  i1010.anchorMin = new pc.Vec2( i1011[2], i1011[3] )
  i1010.anchorMax = new pc.Vec2( i1011[4], i1011[5] )
  i1010.sizeDelta = new pc.Vec2( i1011[6], i1011[7] )
  i1010.anchoredPosition3D = new pc.Vec3( i1011[8], i1011[9], i1011[10] )
  i1010.rotation = new pc.Quat(i1011[11], i1011[12], i1011[13], i1011[14])
  i1010.scale = new pc.Vec3( i1011[15], i1011[16], i1011[17] )
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1013 = data
  i1012.cullTransparentMesh = !!i1013[0]
  return i1012
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1014 = root || request.c( 'UnityEngine.UI.Image' )
  var i1015 = data
  request.r(i1015[0], i1015[1], 0, i1014, 'm_Sprite')
  i1014.m_Type = i1015[2]
  i1014.m_PreserveAspect = !!i1015[3]
  i1014.m_FillCenter = !!i1015[4]
  i1014.m_FillMethod = i1015[5]
  i1014.m_FillAmount = i1015[6]
  i1014.m_FillClockwise = !!i1015[7]
  i1014.m_FillOrigin = i1015[8]
  i1014.m_UseSpriteMesh = !!i1015[9]
  i1014.m_PixelsPerUnitMultiplier = i1015[10]
  request.r(i1015[11], i1015[12], 0, i1014, 'm_Material')
  i1014.m_Maskable = !!i1015[13]
  i1014.m_Color = new pc.Color(i1015[14], i1015[15], i1015[16], i1015[17])
  i1014.m_RaycastTarget = !!i1015[18]
  i1014.m_RaycastPadding = new pc.Vec4( i1015[19], i1015[20], i1015[21], i1015[22] )
  return i1014
}

Deserializers["SimpleInputNamespace.Joystick"] = function (request, data, root) {
  var i1016 = root || request.c( 'SimpleInputNamespace.Joystick' )
  var i1017 = data
  i1016.xAxis = request.d('SimpleInput+AxisInput', i1017[0], i1016.xAxis)
  i1016.yAxis = request.d('SimpleInput+AxisInput', i1017[1], i1016.yAxis)
  i1016.movementAxes = i1017[2]
  i1016.valueMultiplier = i1017[3]
  request.r(i1017[4], i1017[5], 0, i1016, 'thumb')
  i1016.movementAreaRadius = i1017[6]
  i1016.deadzoneRadius = i1017[7]
  i1016.isDynamicJoystick = !!i1017[8]
  request.r(i1017[9], i1017[10], 0, i1016, 'dynamicJoystickMovementArea')
  i1016.canFollowPointer = !!i1017[11]
  return i1016
}

Deserializers["SimpleInput+AxisInput"] = function (request, data, root) {
  var i1018 = root || request.c( 'SimpleInput+AxisInput' )
  var i1019 = data
  i1018.value = i1019[0]
  i1018.m_key = i1019[1]
  return i1018
}

Deserializers["Logic.Items.Item"] = function (request, data, root) {
  var i1020 = root || request.c( 'Logic.Items.Item' )
  var i1021 = data
  request.r(i1021[0], i1021[1], 0, i1020, 'GameObject')
  i1020._duration = i1021[2]
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1023 = data
  i1022.center = new pc.Vec3( i1023[0], i1023[1], i1023[2] )
  i1022.size = new pc.Vec3( i1023[3], i1023[4], i1023[5] )
  i1022.enabled = !!i1023[6]
  i1022.isTrigger = !!i1023[7]
  request.r(i1023[8], i1023[9], 0, i1022, 'material')
  return i1022
}

Deserializers["TextureAnimator"] = function (request, data, root) {
  var i1024 = root || request.c( 'TextureAnimator' )
  var i1025 = data
  request.r(i1025[0], i1025[1], 0, i1024, 'targetMaterial')
  i1024.texturePropertyName = i1025[2]
  i1024.scrollSpeed = new pc.Vec2( i1025[3], i1025[4] )
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1027 = data
  i1026.name = i1027[0]
  i1026.atlasId = i1027[1]
  i1026.mipmapCount = i1027[2]
  i1026.hdr = !!i1027[3]
  i1026.size = i1027[4]
  i1026.anisoLevel = i1027[5]
  i1026.filterMode = i1027[6]
  var i1029 = i1027[7]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 4) {
    i1028.push( UnityEngine.Rect.MinMaxRect(i1029[i + 0], i1029[i + 1], i1029[i + 2], i1029[i + 3]) );
  }
  i1026.rects = i1028
  i1026.wrapU = i1027[8]
  i1026.wrapV = i1027[9]
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1033 = data
  i1032.name = i1033[0]
  i1032.index = i1033[1]
  i1032.startup = !!i1033[2]
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1035 = data
  i1034.enabled = !!i1035[0]
  i1034.aspect = i1035[1]
  i1034.orthographic = !!i1035[2]
  i1034.orthographicSize = i1035[3]
  i1034.backgroundColor = new pc.Color(i1035[4], i1035[5], i1035[6], i1035[7])
  i1034.nearClipPlane = i1035[8]
  i1034.farClipPlane = i1035[9]
  i1034.fieldOfView = i1035[10]
  i1034.depth = i1035[11]
  i1034.clearFlags = i1035[12]
  i1034.cullingMask = i1035[13]
  i1034.rect = i1035[14]
  request.r(i1035[15], i1035[16], 0, i1034, 'targetTexture')
  i1034.usePhysicalProperties = !!i1035[17]
  i1034.focalLength = i1035[18]
  i1034.sensorSize = new pc.Vec2( i1035[19], i1035[20] )
  i1034.lensShift = new pc.Vec2( i1035[21], i1035[22] )
  i1034.gateFit = i1035[23]
  i1034.commandBufferCount = i1035[24]
  i1034.cameraType = i1035[25]
  return i1034
}

Deserializers["CameraLogic.CameraFollow"] = function (request, data, root) {
  var i1036 = root || request.c( 'CameraLogic.CameraFollow' )
  var i1037 = data
  i1036.RotationAngleX = i1037[0]
  i1036.Distance = i1037[1]
  i1036.OffsetY = i1037[2]
  request.r(i1037[3], i1037[4], 0, i1036, '_following')
  return i1036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1039 = data
  i1038.enabled = !!i1039[0]
  i1038.planeDistance = i1039[1]
  i1038.referencePixelsPerUnit = i1039[2]
  i1038.isFallbackOverlay = !!i1039[3]
  i1038.renderMode = i1039[4]
  i1038.renderOrder = i1039[5]
  i1038.sortingLayerName = i1039[6]
  i1038.sortingOrder = i1039[7]
  i1038.scaleFactor = i1039[8]
  request.r(i1039[9], i1039[10], 0, i1038, 'worldCamera')
  i1038.overrideSorting = !!i1039[11]
  i1038.pixelPerfect = !!i1039[12]
  i1038.targetDisplay = i1039[13]
  i1038.overridePixelPerfect = !!i1039[14]
  return i1038
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1040 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1041 = data
  i1040.m_UiScaleMode = i1041[0]
  i1040.m_ReferencePixelsPerUnit = i1041[1]
  i1040.m_ScaleFactor = i1041[2]
  i1040.m_ReferenceResolution = new pc.Vec2( i1041[3], i1041[4] )
  i1040.m_ScreenMatchMode = i1041[5]
  i1040.m_MatchWidthOrHeight = i1041[6]
  i1040.m_PhysicalUnit = i1041[7]
  i1040.m_FallbackScreenDPI = i1041[8]
  i1040.m_DefaultSpriteDPI = i1041[9]
  i1040.m_DynamicPixelsPerUnit = i1041[10]
  i1040.m_PresetInfoIsWorld = !!i1041[11]
  return i1040
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1042 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1043 = data
  i1042.m_IgnoreReversedGraphics = !!i1043[0]
  i1042.m_BlockingObjects = i1043[1]
  i1042.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1043[2] )
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1045 = data
  i1044.enabled = !!i1045[0]
  i1044.type = i1045[1]
  i1044.color = new pc.Color(i1045[2], i1045[3], i1045[4], i1045[5])
  i1044.cullingMask = i1045[6]
  i1044.intensity = i1045[7]
  i1044.range = i1045[8]
  i1044.spotAngle = i1045[9]
  i1044.shadows = i1045[10]
  i1044.shadowNormalBias = i1045[11]
  i1044.shadowBias = i1045[12]
  i1044.shadowStrength = i1045[13]
  i1044.shadowResolution = i1045[14]
  i1044.lightmapBakeType = i1045[15]
  i1044.renderMode = i1045[16]
  request.r(i1045[17], i1045[18], 0, i1044, 'cookie')
  i1044.cookieSize = i1045[19]
  return i1044
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1046 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1047 = data
  request.r(i1047[0], i1047[1], 0, i1046, 'm_FirstSelected')
  i1046.m_sendNavigationEvents = !!i1047[2]
  i1046.m_DragThreshold = i1047[3]
  return i1046
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1048 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1049 = data
  i1048.m_HorizontalAxis = i1049[0]
  i1048.m_VerticalAxis = i1049[1]
  i1048.m_SubmitButton = i1049[2]
  i1048.m_CancelButton = i1049[3]
  i1048.m_InputActionsPerSecond = i1049[4]
  i1048.m_RepeatDelay = i1049[5]
  i1048.m_ForceModuleActive = !!i1049[6]
  i1048.m_SendPointerHoverToParent = !!i1049[7]
  return i1048
}

Deserializers["Infrastructure.GameBootstrapper"] = function (request, data, root) {
  var i1050 = root || request.c( 'Infrastructure.GameBootstrapper' )
  var i1051 = data
  return i1050
}

Deserializers["Forklift.ForkliftMover"] = function (request, data, root) {
  var i1052 = root || request.c( 'Forklift.ForkliftMover' )
  var i1053 = data
  request.r(i1053[0], i1053[1], 0, i1052, 'CharacterController')
  i1052.MovementSpeed = i1053[2]
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CharacterController"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CharacterController' )
  var i1055 = data
  i1054.enabled = !!i1055[0]
  i1054.center = new pc.Vec3( i1055[1], i1055[2], i1055[3] )
  i1054.radius = i1055[4]
  i1054.height = i1055[5]
  i1054.minMoveDistance = i1055[6]
  i1054.skinWidth = i1055[7]
  i1054.enableOverlapRecovery = !!i1055[8]
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i1056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i1057 = data
  i1056.mass = i1057[0]
  i1056.drag = i1057[1]
  i1056.angularDrag = i1057[2]
  i1056.useGravity = !!i1057[3]
  i1056.isKinematic = !!i1057[4]
  i1056.constraints = i1057[5]
  i1056.maxAngularVelocity = i1057[6]
  i1056.collisionDetectionMode = i1057[7]
  i1056.interpolation = i1057[8]
  return i1056
}

Deserializers["Forklift.ForkliftMovePoints"] = function (request, data, root) {
  var i1058 = root || request.c( 'Forklift.ForkliftMovePoints' )
  var i1059 = data
  request.r(i1059[0], i1059[1], 0, i1058, 'Mover')
  var i1061 = i1059[2]
  var i1060 = new (System.Collections.Generic.List$1(Bridge.ns('Logic.Points.ItemMovePoint')))
  for(var i = 0; i < i1061.length; i += 2) {
  request.r(i1061[i + 0], i1061[i + 1], 1, i1060, '')
  }
  i1058.Points = i1060
  return i1058
}

Deserializers["Logic.Items.ItemMover"] = function (request, data, root) {
  var i1064 = root || request.c( 'Logic.Items.ItemMover' )
  var i1065 = data
  return i1064
}

Deserializers["Logic.Points.ItemMovePoint"] = function (request, data, root) {
  var i1066 = root || request.c( 'Logic.Points.ItemMovePoint' )
  var i1067 = data
  return i1066
}

Deserializers["Logic.Items.ItemSpawner"] = function (request, data, root) {
  var i1068 = root || request.c( 'Logic.Items.ItemSpawner' )
  var i1069 = data
  request.r(i1069[0], i1069[1], 0, i1068, '_itemPrefab')
  request.r(i1069[2], i1069[3], 0, i1068, '_spawnPoint')
  request.r(i1069[4], i1069[5], 0, i1068, '_items')
  return i1068
}

Deserializers["Logic.Place.TreeLoadPlace"] = function (request, data, root) {
  var i1070 = root || request.c( 'Logic.Place.TreeLoadPlace' )
  var i1071 = data
  i1070._spawnInterval = i1071[0]
  request.r(i1071[1], i1071[2], 0, i1070, '_items')
  request.r(i1071[3], i1071[4], 0, i1070, '_targetItems')
  return i1070
}

Deserializers["Logic.Items.ItemMovePoints"] = function (request, data, root) {
  var i1072 = root || request.c( 'Logic.Items.ItemMovePoints' )
  var i1073 = data
  var i1075 = i1073[0]
  var i1074 = new (System.Collections.Generic.List$1(Bridge.ns('Logic.Points.ItemMovePoint')))
  for(var i = 0; i < i1075.length; i += 2) {
  request.r(i1075[i + 0], i1075[i + 1], 1, i1074, '')
  }
  i1072.Points = i1074
  return i1072
}

Deserializers["Logic.Place.TreeUnloadPlace"] = function (request, data, root) {
  var i1076 = root || request.c( 'Logic.Place.TreeUnloadPlace' )
  var i1077 = data
  i1076._rewardAmount = i1077[0]
  request.r(i1077[1], i1077[2], 0, i1076, '_itemSpawner')
  request.r(i1077[3], i1077[4], 0, i1076, '_unloadPoints')
  request.r(i1077[5], i1077[6], 0, i1076, '_forkliftPoints')
  request.r(i1077[7], i1077[8], 0, i1076, '_targetUsePoint')
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1079 = data
  i1078.ambientIntensity = i1079[0]
  i1078.reflectionIntensity = i1079[1]
  i1078.ambientMode = i1079[2]
  i1078.ambientLight = new pc.Color(i1079[3], i1079[4], i1079[5], i1079[6])
  i1078.ambientSkyColor = new pc.Color(i1079[7], i1079[8], i1079[9], i1079[10])
  i1078.ambientGroundColor = new pc.Color(i1079[11], i1079[12], i1079[13], i1079[14])
  i1078.ambientEquatorColor = new pc.Color(i1079[15], i1079[16], i1079[17], i1079[18])
  i1078.fogColor = new pc.Color(i1079[19], i1079[20], i1079[21], i1079[22])
  i1078.fogEndDistance = i1079[23]
  i1078.fogStartDistance = i1079[24]
  i1078.fogDensity = i1079[25]
  i1078.fog = !!i1079[26]
  request.r(i1079[27], i1079[28], 0, i1078, 'skybox')
  i1078.fogMode = i1079[29]
  var i1081 = i1079[30]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1081[i + 0]) );
  }
  i1078.lightmaps = i1080
  i1078.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1079[31], i1078.lightProbes)
  i1078.lightmapsMode = i1079[32]
  i1078.mixedBakeMode = i1079[33]
  i1078.environmentLightingMode = i1079[34]
  i1078.ambientProbe = new pc.SphericalHarmonicsL2(i1079[35])
  i1078.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1079[36])
  i1078.useReferenceAmbientProbe = !!i1079[37]
  request.r(i1079[38], i1079[39], 0, i1078, 'customReflection')
  request.r(i1079[40], i1079[41], 0, i1078, 'defaultReflection')
  i1078.defaultReflectionMode = i1079[42]
  i1078.defaultReflectionResolution = i1079[43]
  i1078.sunLightObjectId = i1079[44]
  i1078.pixelLightCount = i1079[45]
  i1078.defaultReflectionHDR = !!i1079[46]
  i1078.hasLightDataAsset = !!i1079[47]
  i1078.hasManualGenerate = !!i1079[48]
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1085 = data
  request.r(i1085[0], i1085[1], 0, i1084, 'lightmapColor')
  request.r(i1085[2], i1085[3], 0, i1084, 'lightmapDirection')
  return i1084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1086 = root || new UnityEngine.LightProbes()
  var i1087 = data
  return i1086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1095 = data
  var i1097 = i1095[0]
  var i1096 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1097.length; i += 1) {
    i1096.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1097[i + 0]));
  }
  i1094.ShaderCompilationErrors = i1096
  i1094.name = i1095[1]
  i1094.guid = i1095[2]
  var i1099 = i1095[3]
  var i1098 = []
  for(var i = 0; i < i1099.length; i += 1) {
    i1098.push( i1099[i + 0] );
  }
  i1094.shaderDefinedKeywords = i1098
  var i1101 = i1095[4]
  var i1100 = []
  for(var i = 0; i < i1101.length; i += 1) {
    i1100.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1101[i + 0]) );
  }
  i1094.passes = i1100
  var i1103 = i1095[5]
  var i1102 = []
  for(var i = 0; i < i1103.length; i += 1) {
    i1102.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1103[i + 0]) );
  }
  i1094.usePasses = i1102
  var i1105 = i1095[6]
  var i1104 = []
  for(var i = 0; i < i1105.length; i += 1) {
    i1104.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1105[i + 0]) );
  }
  i1094.defaultParameterValues = i1104
  request.r(i1095[7], i1095[8], 0, i1094, 'unityFallbackShader')
  i1094.readDepth = !!i1095[9]
  i1094.isCreatedByShaderGraph = !!i1095[10]
  i1094.compiled = !!i1095[11]
  return i1094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1109 = data
  i1108.shaderName = i1109[0]
  i1108.errorMessage = i1109[1]
  return i1108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1114 = root || new pc.UnityShaderPass()
  var i1115 = data
  i1114.id = i1115[0]
  i1114.subShaderIndex = i1115[1]
  i1114.name = i1115[2]
  i1114.passType = i1115[3]
  i1114.grabPassTextureName = i1115[4]
  i1114.usePass = !!i1115[5]
  i1114.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1115[6], i1114.zTest)
  i1114.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1115[7], i1114.zWrite)
  i1114.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1115[8], i1114.culling)
  i1114.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1115[9], i1114.blending)
  i1114.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1115[10], i1114.alphaBlending)
  i1114.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1115[11], i1114.colorWriteMask)
  i1114.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1115[12], i1114.offsetUnits)
  i1114.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1115[13], i1114.offsetFactor)
  i1114.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1115[14], i1114.stencilRef)
  i1114.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1115[15], i1114.stencilReadMask)
  i1114.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1115[16], i1114.stencilWriteMask)
  i1114.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1115[17], i1114.stencilOp)
  i1114.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1115[18], i1114.stencilOpFront)
  i1114.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1115[19], i1114.stencilOpBack)
  var i1117 = i1115[20]
  var i1116 = []
  for(var i = 0; i < i1117.length; i += 1) {
    i1116.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1117[i + 0]) );
  }
  i1114.tags = i1116
  var i1119 = i1115[21]
  var i1118 = []
  for(var i = 0; i < i1119.length; i += 1) {
    i1118.push( i1119[i + 0] );
  }
  i1114.passDefinedKeywords = i1118
  var i1121 = i1115[22]
  var i1120 = []
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1121[i + 0]) );
  }
  i1114.passDefinedKeywordGroups = i1120
  var i1123 = i1115[23]
  var i1122 = []
  for(var i = 0; i < i1123.length; i += 1) {
    i1122.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1123[i + 0]) );
  }
  i1114.variants = i1122
  var i1125 = i1115[24]
  var i1124 = []
  for(var i = 0; i < i1125.length; i += 1) {
    i1124.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1125[i + 0]) );
  }
  i1114.excludedVariants = i1124
  i1114.hasDepthReader = !!i1115[25]
  return i1114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1127 = data
  i1126.val = i1127[0]
  i1126.name = i1127[1]
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1129 = data
  i1128.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1129[0], i1128.src)
  i1128.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1129[1], i1128.dst)
  i1128.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1129[2], i1128.op)
  return i1128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1131 = data
  i1130.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1131[0], i1130.pass)
  i1130.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1131[1], i1130.fail)
  i1130.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1131[2], i1130.zFail)
  i1130.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1131[3], i1130.comp)
  return i1130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1135 = data
  i1134.name = i1135[0]
  i1134.value = i1135[1]
  return i1134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1139 = data
  var i1141 = i1139[0]
  var i1140 = []
  for(var i = 0; i < i1141.length; i += 1) {
    i1140.push( i1141[i + 0] );
  }
  i1138.keywords = i1140
  i1138.hasDiscard = !!i1139[1]
  return i1138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1145 = data
  i1144.passId = i1145[0]
  i1144.subShaderIndex = i1145[1]
  var i1147 = i1145[2]
  var i1146 = []
  for(var i = 0; i < i1147.length; i += 1) {
    i1146.push( i1147[i + 0] );
  }
  i1144.keywords = i1146
  i1144.vertexProgram = i1145[3]
  i1144.fragmentProgram = i1145[4]
  i1144.exportedForWebGl2 = !!i1145[5]
  i1144.readDepth = !!i1145[6]
  return i1144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1151 = data
  request.r(i1151[0], i1151[1], 0, i1150, 'shader')
  i1150.pass = i1151[2]
  return i1150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1155 = data
  i1154.name = i1155[0]
  i1154.type = i1155[1]
  i1154.value = new pc.Vec4( i1155[2], i1155[3], i1155[4], i1155[5] )
  i1154.textureValue = i1155[6]
  i1154.shaderPropertyFlag = i1155[7]
  return i1154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1157 = data
  i1156.name = i1157[0]
  request.r(i1157[1], i1157[2], 0, i1156, 'texture')
  i1156.aabb = i1157[3]
  i1156.vertices = i1157[4]
  i1156.triangles = i1157[5]
  i1156.textureRect = UnityEngine.Rect.MinMaxRect(i1157[6], i1157[7], i1157[8], i1157[9])
  i1156.packedRect = UnityEngine.Rect.MinMaxRect(i1157[10], i1157[11], i1157[12], i1157[13])
  i1156.border = new pc.Vec4( i1157[14], i1157[15], i1157[16], i1157[17] )
  i1156.transparency = i1157[18]
  i1156.bounds = i1157[19]
  i1156.pixelsPerUnit = i1157[20]
  i1156.textureWidth = i1157[21]
  i1156.textureHeight = i1157[22]
  i1156.nativeSize = new pc.Vec2( i1157[23], i1157[24] )
  i1156.pivot = new pc.Vec2( i1157[25], i1157[26] )
  i1156.textureRectOffset = new pc.Vec2( i1157[27], i1157[28] )
  return i1156
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1158 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1159 = data
  i1158.useSafeMode = !!i1159[0]
  i1158.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1159[1], i1158.safeModeOptions)
  i1158.timeScale = i1159[2]
  i1158.unscaledTimeScale = i1159[3]
  i1158.useSmoothDeltaTime = !!i1159[4]
  i1158.maxSmoothUnscaledTime = i1159[5]
  i1158.rewindCallbackMode = i1159[6]
  i1158.showUnityEditorReport = !!i1159[7]
  i1158.logBehaviour = i1159[8]
  i1158.drawGizmos = !!i1159[9]
  i1158.defaultRecyclable = !!i1159[10]
  i1158.defaultAutoPlay = i1159[11]
  i1158.defaultUpdateType = i1159[12]
  i1158.defaultTimeScaleIndependent = !!i1159[13]
  i1158.defaultEaseType = i1159[14]
  i1158.defaultEaseOvershootOrAmplitude = i1159[15]
  i1158.defaultEasePeriod = i1159[16]
  i1158.defaultAutoKill = !!i1159[17]
  i1158.defaultLoopType = i1159[18]
  i1158.debugMode = !!i1159[19]
  i1158.debugStoreTargetId = !!i1159[20]
  i1158.showPreviewPanel = !!i1159[21]
  i1158.storeSettingsLocation = i1159[22]
  i1158.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1159[23], i1158.modules)
  i1158.createASMDEF = !!i1159[24]
  i1158.showPlayingTweens = !!i1159[25]
  i1158.showPausedTweens = !!i1159[26]
  return i1158
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1160 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1161 = data
  i1160.logBehaviour = i1161[0]
  i1160.nestedTweenFailureBehaviour = i1161[1]
  return i1160
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1162 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1163 = data
  i1162.showPanel = !!i1163[0]
  i1162.audioEnabled = !!i1163[1]
  i1162.physicsEnabled = !!i1163[2]
  i1162.physics2DEnabled = !!i1163[3]
  i1162.spriteEnabled = !!i1163[4]
  i1162.uiEnabled = !!i1163[5]
  i1162.textMeshProEnabled = !!i1163[6]
  i1162.tk2DEnabled = !!i1163[7]
  i1162.deAudioEnabled = !!i1163[8]
  i1162.deUnityExtendedEnabled = !!i1163[9]
  i1162.epoOutlineEnabled = !!i1163[10]
  return i1162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1165 = data
  var i1167 = i1165[0]
  var i1166 = []
  for(var i = 0; i < i1167.length; i += 1) {
    i1166.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1167[i + 0]) );
  }
  i1164.files = i1166
  i1164.componentToPrefabIds = i1165[1]
  return i1164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1171 = data
  i1170.path = i1171[0]
  request.r(i1171[1], i1171[2], 0, i1170, 'unityObject')
  return i1170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1173 = data
  var i1175 = i1173[0]
  var i1174 = []
  for(var i = 0; i < i1175.length; i += 1) {
    i1174.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1175[i + 0]) );
  }
  i1172.scriptsExecutionOrder = i1174
  var i1177 = i1173[1]
  var i1176 = []
  for(var i = 0; i < i1177.length; i += 1) {
    i1176.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1177[i + 0]) );
  }
  i1172.sortingLayers = i1176
  var i1179 = i1173[2]
  var i1178 = []
  for(var i = 0; i < i1179.length; i += 1) {
    i1178.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1179[i + 0]) );
  }
  i1172.cullingLayers = i1178
  i1172.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1173[3], i1172.timeSettings)
  i1172.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1173[4], i1172.physicsSettings)
  i1172.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1173[5], i1172.physics2DSettings)
  i1172.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1173[6], i1172.qualitySettings)
  i1172.enableRealtimeShadows = !!i1173[7]
  i1172.enableAutoInstancing = !!i1173[8]
  i1172.enableDynamicBatching = !!i1173[9]
  i1172.lightmapEncodingQuality = i1173[10]
  i1172.desiredColorSpace = i1173[11]
  var i1181 = i1173[12]
  var i1180 = []
  for(var i = 0; i < i1181.length; i += 1) {
    i1180.push( i1181[i + 0] );
  }
  i1172.allTags = i1180
  return i1172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1185 = data
  i1184.name = i1185[0]
  i1184.value = i1185[1]
  return i1184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1189 = data
  i1188.id = i1189[0]
  i1188.name = i1189[1]
  i1188.value = i1189[2]
  return i1188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1193 = data
  i1192.id = i1193[0]
  i1192.name = i1193[1]
  return i1192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1195 = data
  i1194.fixedDeltaTime = i1195[0]
  i1194.maximumDeltaTime = i1195[1]
  i1194.timeScale = i1195[2]
  i1194.maximumParticleTimestep = i1195[3]
  return i1194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1197 = data
  i1196.gravity = new pc.Vec3( i1197[0], i1197[1], i1197[2] )
  i1196.defaultSolverIterations = i1197[3]
  i1196.bounceThreshold = i1197[4]
  i1196.autoSyncTransforms = !!i1197[5]
  i1196.autoSimulation = !!i1197[6]
  var i1199 = i1197[7]
  var i1198 = []
  for(var i = 0; i < i1199.length; i += 1) {
    i1198.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1199[i + 0]) );
  }
  i1196.collisionMatrix = i1198
  return i1196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1203 = data
  i1202.enabled = !!i1203[0]
  i1202.layerId = i1203[1]
  i1202.otherLayerId = i1203[2]
  return i1202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1205 = data
  request.r(i1205[0], i1205[1], 0, i1204, 'material')
  i1204.gravity = new pc.Vec2( i1205[2], i1205[3] )
  i1204.positionIterations = i1205[4]
  i1204.velocityIterations = i1205[5]
  i1204.velocityThreshold = i1205[6]
  i1204.maxLinearCorrection = i1205[7]
  i1204.maxAngularCorrection = i1205[8]
  i1204.maxTranslationSpeed = i1205[9]
  i1204.maxRotationSpeed = i1205[10]
  i1204.baumgarteScale = i1205[11]
  i1204.baumgarteTOIScale = i1205[12]
  i1204.timeToSleep = i1205[13]
  i1204.linearSleepTolerance = i1205[14]
  i1204.angularSleepTolerance = i1205[15]
  i1204.defaultContactOffset = i1205[16]
  i1204.autoSimulation = !!i1205[17]
  i1204.queriesHitTriggers = !!i1205[18]
  i1204.queriesStartInColliders = !!i1205[19]
  i1204.callbacksOnDisable = !!i1205[20]
  i1204.reuseCollisionCallbacks = !!i1205[21]
  i1204.autoSyncTransforms = !!i1205[22]
  var i1207 = i1205[23]
  var i1206 = []
  for(var i = 0; i < i1207.length; i += 1) {
    i1206.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1207[i + 0]) );
  }
  i1204.collisionMatrix = i1206
  return i1204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1211 = data
  i1210.enabled = !!i1211[0]
  i1210.layerId = i1211[1]
  i1210.otherLayerId = i1211[2]
  return i1210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1213 = data
  var i1215 = i1213[0]
  var i1214 = []
  for(var i = 0; i < i1215.length; i += 1) {
    i1214.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1215[i + 0]) );
  }
  i1212.qualityLevels = i1214
  var i1217 = i1213[1]
  var i1216 = []
  for(var i = 0; i < i1217.length; i += 1) {
    i1216.push( i1217[i + 0] );
  }
  i1212.names = i1216
  i1212.shadows = i1213[2]
  i1212.anisotropicFiltering = i1213[3]
  i1212.antiAliasing = i1213[4]
  i1212.lodBias = i1213[5]
  i1212.shadowCascades = i1213[6]
  i1212.shadowDistance = i1213[7]
  i1212.shadowmaskMode = i1213[8]
  i1212.shadowProjection = i1213[9]
  i1212.shadowResolution = i1213[10]
  i1212.softParticles = !!i1213[11]
  i1212.softVegetation = !!i1213[12]
  i1212.activeColorSpace = i1213[13]
  i1212.desiredColorSpace = i1213[14]
  i1212.masterTextureLimit = i1213[15]
  i1212.maxQueuedFrames = i1213[16]
  i1212.particleRaycastBudget = i1213[17]
  i1212.pixelLightCount = i1213[18]
  i1212.realtimeReflectionProbes = !!i1213[19]
  i1212.shadowCascade2Split = i1213[20]
  i1212.shadowCascade4Split = new pc.Vec3( i1213[21], i1213[22], i1213[23] )
  i1212.streamingMipmapsActive = !!i1213[24]
  i1212.vSyncCount = i1213[25]
  i1212.asyncUploadBufferSize = i1213[26]
  i1212.asyncUploadTimeSlice = i1213[27]
  i1212.billboardsFaceCameraPosition = !!i1213[28]
  i1212.shadowNearPlaneOffset = i1213[29]
  i1212.streamingMipmapsMemoryBudget = i1213[30]
  i1212.maximumLODLevel = i1213[31]
  i1212.streamingMipmapsAddAllCameras = !!i1213[32]
  i1212.streamingMipmapsMaxLevelReduction = i1213[33]
  i1212.streamingMipmapsRenderersPerFrame = i1213[34]
  i1212.resolutionScalingFixedDPIFactor = i1213[35]
  i1212.streamingMipmapsMaxFileIORequests = i1213[36]
  i1212.currentQualityLevel = i1213[37]
  return i1212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1223 = data
  i1222.weight = i1223[0]
  i1222.vertices = i1223[1]
  i1222.normals = i1223[2]
  i1222.tangents = i1223[3]
  return i1222
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.CharacterController":{"enabled":0,"center":1,"radius":4,"height":5,"minMoveDistance":6,"skinWidth":7,"enableOverlapRecovery":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"40":[41],"42":[41],"43":[41],"44":[41],"45":[41],"46":[41],"47":[48],"49":[17],"50":[29],"51":[29],"52":[29],"53":[29],"54":[29],"55":[29],"56":[29],"57":[58],"59":[58],"60":[58],"61":[58],"62":[58],"63":[58],"64":[58],"65":[58],"66":[58],"67":[58],"68":[58],"69":[58],"70":[58],"71":[17],"72":[3],"73":[74],"75":[74],"20":[7],"76":[7],"77":[7],"22":[20],"10":[8,7],"78":[7],"21":[20],"79":[7],"80":[7],"81":[7],"82":[7],"83":[7],"84":[7],"85":[7],"86":[7],"87":[7],"88":[8,7],"89":[7],"90":[7],"91":[7],"92":[7],"93":[8,7],"94":[7],"95":[24],"96":[24],"25":[24],"97":[24],"98":[17],"99":[17],"100":[7],"101":[3,7],"102":[7,8],"103":[7],"104":[8,7],"105":[3],"106":[8,7],"107":[7],"108":[109],"110":[111],"112":[111],"113":[111],"114":[111],"115":[111],"116":[111],"117":[8,7],"111":[7],"118":[111],"119":[111],"120":[111],"121":[109],"122":[109]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.MonoBehaviour","SimpleInputNamespace.Joystick","Logic.Items.Item","UnityEngine.BoxCollider","TextureAnimator","UnityEngine.Camera","UnityEngine.AudioListener","CameraLogic.CameraFollow","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.Light","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Infrastructure.GameBootstrapper","Forklift.ForkliftMover","UnityEngine.CharacterController","UnityEngine.Rigidbody","Forklift.ForkliftMovePoints","Logic.Items.ItemMover","Logic.Points.ItemMovePoint","Logic.Items.ItemSpawner","UnityEngine.GameObject","Logic.Items.ItemMovePoints","Logic.Place.TreeLoadPlace","Logic.Place.TreeUnloadPlace","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","SimpleInputNamespace.AxisInputMoveGesture","SimpleInputNamespace.SimpleInputMultiDragListener","SimpleInputNamespace.AxisInputPinchGesture","SimpleInputNamespace.AxisInputRotateGesture","SimpleInputNamespace.AxisInputSwipeGesture","SimpleInputNamespace.Touchpad","SimpleInputNamespace.ButtonInputSwipeGesture","SimpleInputNamespace.NonDrawingGraphic","SimpleInputNamespace.SwipeGestureBase`2","SimpleInputNamespace.KeyInputSwipeGesture","SimpleInputNamespace.MouseButtonInputSwipeGesture","Unity.VisualScripting.StateMachine","Unity.VisualScripting.ScriptMachine"]

Deserializers.unityVersion = "2022.3.58f1";

Deserializers.productName = "Lumber2";

Deserializers.lunaInitializationTime = "04/08/2025 09:56:16";

Deserializers.lunaDaysRunning = "6.2";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1871";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4187";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, particle-system, mecanim-wasm";

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

Deserializers.buildID = "21aaaa03-3b41-4d58-84f9-1113886bdf7d";

Deserializers.runtimeInitializeOnLoadInfos = [[["SimpleInput","Init"],["UnityEditor","Recorder","RecorderWindow","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

