var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i560 = root || request.c( 'UnityEngine.JointSpring' )
  var i561 = data
  i560.spring = i561[0]
  i560.damper = i561[1]
  i560.targetPosition = i561[2]
  return i560
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i562 = root || request.c( 'UnityEngine.JointMotor' )
  var i563 = data
  i562.m_TargetVelocity = i563[0]
  i562.m_Force = i563[1]
  i562.m_FreeSpin = i563[2]
  return i562
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i564 = root || request.c( 'UnityEngine.JointLimits' )
  var i565 = data
  i564.m_Min = i565[0]
  i564.m_Max = i565[1]
  i564.m_Bounciness = i565[2]
  i564.m_BounceMinVelocity = i565[3]
  i564.m_ContactDistance = i565[4]
  i564.minBounce = i565[5]
  i564.maxBounce = i565[6]
  return i564
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i566 = root || request.c( 'UnityEngine.JointDrive' )
  var i567 = data
  i566.m_PositionSpring = i567[0]
  i566.m_PositionDamper = i567[1]
  i566.m_MaximumForce = i567[2]
  i566.m_UseAcceleration = i567[3]
  return i566
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i568 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i569 = data
  i568.m_Spring = i569[0]
  i568.m_Damper = i569[1]
  return i568
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i570 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i571 = data
  i570.m_Limit = i571[0]
  i570.m_Bounciness = i571[1]
  i570.m_ContactDistance = i571[2]
  return i570
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i572 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i573 = data
  i572.m_ExtremumSlip = i573[0]
  i572.m_ExtremumValue = i573[1]
  i572.m_AsymptoteSlip = i573[2]
  i572.m_AsymptoteValue = i573[3]
  i572.m_Stiffness = i573[4]
  return i572
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i574 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i575 = data
  i574.m_LowerAngle = i575[0]
  i574.m_UpperAngle = i575[1]
  return i574
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i576 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i577 = data
  i576.m_MotorSpeed = i577[0]
  i576.m_MaximumMotorTorque = i577[1]
  return i576
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i578 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i579 = data
  i578.m_DampingRatio = i579[0]
  i578.m_Frequency = i579[1]
  i578.m_Angle = i579[2]
  return i578
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i580 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i581 = data
  i580.m_LowerTranslation = i581[0]
  i580.m_UpperTranslation = i581[1]
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i583 = data
  i582.position = new pc.Vec3( i583[0], i583[1], i583[2] )
  i582.scale = new pc.Vec3( i583[3], i583[4], i583[5] )
  i582.rotation = new pc.Quat(i583[6], i583[7], i583[8], i583[9])
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i585 = data
  request.r(i585[0], i585[1], 0, i584, 'sharedMesh')
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i587 = data
  request.r(i587[0], i587[1], 0, i586, 'additionalVertexStreams')
  i586.enabled = !!i587[2]
  request.r(i587[3], i587[4], 0, i586, 'sharedMaterial')
  var i589 = i587[5]
  var i588 = []
  for(var i = 0; i < i589.length; i += 2) {
  request.r(i589[i + 0], i589[i + 1], 2, i588, '')
  }
  i586.sharedMaterials = i588
  i586.receiveShadows = !!i587[6]
  i586.shadowCastingMode = i587[7]
  i586.sortingLayerID = i587[8]
  i586.sortingOrder = i587[9]
  i586.lightmapIndex = i587[10]
  i586.lightmapSceneIndex = i587[11]
  i586.lightmapScaleOffset = new pc.Vec4( i587[12], i587[13], i587[14], i587[15] )
  i586.lightProbeUsage = i587[16]
  i586.reflectionProbeUsage = i587[17]
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i593 = data
  i592.name = i593[0]
  i592.tagId = i593[1]
  i592.enabled = !!i593[2]
  i592.isStatic = !!i593[3]
  i592.layer = i593[4]
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i595 = data
  i594.name = i595[0]
  i594.halfPrecision = !!i595[1]
  i594.useUInt32IndexFormat = !!i595[2]
  i594.vertexCount = i595[3]
  i594.aabb = i595[4]
  var i597 = i595[5]
  var i596 = []
  for(var i = 0; i < i597.length; i += 1) {
    i596.push( !!i597[i + 0] );
  }
  i594.streams = i596
  i594.vertices = i595[6]
  var i599 = i595[7]
  var i598 = []
  for(var i = 0; i < i599.length; i += 1) {
    i598.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i599[i + 0]) );
  }
  i594.subMeshes = i598
  var i601 = i595[8]
  var i600 = []
  for(var i = 0; i < i601.length; i += 16) {
    i600.push( new pc.Mat4().setData(i601[i + 0], i601[i + 1], i601[i + 2], i601[i + 3],  i601[i + 4], i601[i + 5], i601[i + 6], i601[i + 7],  i601[i + 8], i601[i + 9], i601[i + 10], i601[i + 11],  i601[i + 12], i601[i + 13], i601[i + 14], i601[i + 15]) );
  }
  i594.bindposes = i600
  var i603 = i595[9]
  var i602 = []
  for(var i = 0; i < i603.length; i += 1) {
    i602.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i603[i + 0]) );
  }
  i594.blendShapes = i602
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i609 = data
  i608.triangles = i609[0]
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i615 = data
  i614.name = i615[0]
  var i617 = i615[1]
  var i616 = []
  for(var i = 0; i < i617.length; i += 1) {
    i616.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i617[i + 0]) );
  }
  i614.frames = i616
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i618 = root || new pc.UnityMaterial()
  var i619 = data
  i618.name = i619[0]
  request.r(i619[1], i619[2], 0, i618, 'shader')
  i618.renderQueue = i619[3]
  i618.enableInstancing = !!i619[4]
  var i621 = i619[5]
  var i620 = []
  for(var i = 0; i < i621.length; i += 1) {
    i620.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i621[i + 0]) );
  }
  i618.floatParameters = i620
  var i623 = i619[6]
  var i622 = []
  for(var i = 0; i < i623.length; i += 1) {
    i622.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i623[i + 0]) );
  }
  i618.colorParameters = i622
  var i625 = i619[7]
  var i624 = []
  for(var i = 0; i < i625.length; i += 1) {
    i624.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i625[i + 0]) );
  }
  i618.vectorParameters = i624
  var i627 = i619[8]
  var i626 = []
  for(var i = 0; i < i627.length; i += 1) {
    i626.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i627[i + 0]) );
  }
  i618.textureParameters = i626
  var i629 = i619[9]
  var i628 = []
  for(var i = 0; i < i629.length; i += 1) {
    i628.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i629[i + 0]) );
  }
  i618.materialFlags = i628
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i633 = data
  i632.name = i633[0]
  i632.value = i633[1]
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i637 = data
  i636.name = i637[0]
  i636.value = new pc.Color(i637[1], i637[2], i637[3], i637[4])
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i641 = data
  i640.name = i641[0]
  i640.value = new pc.Vec4( i641[1], i641[2], i641[3], i641[4] )
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i645 = data
  i644.name = i645[0]
  request.r(i645[1], i645[2], 0, i644, 'value')
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i649 = data
  i648.name = i649[0]
  i648.enabled = !!i649[1]
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i651 = data
  i650.name = i651[0]
  i650.width = i651[1]
  i650.height = i651[2]
  i650.mipmapCount = i651[3]
  i650.anisoLevel = i651[4]
  i650.filterMode = i651[5]
  i650.hdr = !!i651[6]
  i650.format = i651[7]
  i650.wrapMode = i651[8]
  i650.alphaIsTransparency = !!i651[9]
  i650.alphaSource = i651[10]
  i650.graphicsFormat = i651[11]
  i650.sRGBTexture = !!i651[12]
  i650.desiredColorSpace = i651[13]
  i650.wrapU = i651[14]
  i650.wrapV = i651[15]
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i653 = data
  i652.pivot = new pc.Vec2( i653[0], i653[1] )
  i652.anchorMin = new pc.Vec2( i653[2], i653[3] )
  i652.anchorMax = new pc.Vec2( i653[4], i653[5] )
  i652.sizeDelta = new pc.Vec2( i653[6], i653[7] )
  i652.anchoredPosition3D = new pc.Vec3( i653[8], i653[9], i653[10] )
  i652.rotation = new pc.Quat(i653[11], i653[12], i653[13], i653[14])
  i652.scale = new pc.Vec3( i653[15], i653[16], i653[17] )
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i655 = data
  i654.cullTransparentMesh = !!i655[0]
  return i654
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i656 = root || request.c( 'UnityEngine.UI.Image' )
  var i657 = data
  request.r(i657[0], i657[1], 0, i656, 'm_Sprite')
  i656.m_Type = i657[2]
  i656.m_PreserveAspect = !!i657[3]
  i656.m_FillCenter = !!i657[4]
  i656.m_FillMethod = i657[5]
  i656.m_FillAmount = i657[6]
  i656.m_FillClockwise = !!i657[7]
  i656.m_FillOrigin = i657[8]
  i656.m_UseSpriteMesh = !!i657[9]
  i656.m_PixelsPerUnitMultiplier = i657[10]
  request.r(i657[11], i657[12], 0, i656, 'm_Material')
  i656.m_Maskable = !!i657[13]
  i656.m_Color = new pc.Color(i657[14], i657[15], i657[16], i657[17])
  i656.m_RaycastTarget = !!i657[18]
  i656.m_RaycastPadding = new pc.Vec4( i657[19], i657[20], i657[21], i657[22] )
  return i656
}

Deserializers["SimpleInputNamespace.Joystick"] = function (request, data, root) {
  var i658 = root || request.c( 'SimpleInputNamespace.Joystick' )
  var i659 = data
  i658.xAxis = request.d('SimpleInput+AxisInput', i659[0], i658.xAxis)
  i658.yAxis = request.d('SimpleInput+AxisInput', i659[1], i658.yAxis)
  i658.movementAxes = i659[2]
  i658.valueMultiplier = i659[3]
  request.r(i659[4], i659[5], 0, i658, 'thumb')
  i658.movementAreaRadius = i659[6]
  i658.deadzoneRadius = i659[7]
  i658.isDynamicJoystick = !!i659[8]
  request.r(i659[9], i659[10], 0, i658, 'dynamicJoystickMovementArea')
  i658.canFollowPointer = !!i659[11]
  return i658
}

Deserializers["SimpleInput+AxisInput"] = function (request, data, root) {
  var i660 = root || request.c( 'SimpleInput+AxisInput' )
  var i661 = data
  i660.value = i661[0]
  i660.m_key = i661[1]
  return i660
}

Deserializers["Logic.Items.Tree"] = function (request, data, root) {
  var i662 = root || request.c( 'Logic.Items.Tree' )
  var i663 = data
  request.r(i663[0], i663[1], 0, i662, 'GameObject')
  i662._duration = i663[2]
  return i662
}

Deserializers["Logic.Items.ItemSpawner"] = function (request, data, root) {
  var i664 = root || request.c( 'Logic.Items.ItemSpawner' )
  var i665 = data
  request.r(i665[0], i665[1], 0, i664, '_itemPrefab')
  request.r(i665[2], i665[3], 0, i664, '_spawnPoint')
  request.r(i665[4], i665[5], 0, i664, '_items')
  return i664
}

Deserializers["Logic.Items.ItemMover"] = function (request, data, root) {
  var i666 = root || request.c( 'Logic.Items.ItemMover' )
  var i667 = data
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i669 = data
  i668.center = new pc.Vec3( i669[0], i669[1], i669[2] )
  i668.size = new pc.Vec3( i669[3], i669[4], i669[5] )
  i668.enabled = !!i669[6]
  i668.isTrigger = !!i669[7]
  request.r(i669[8], i669[9], 0, i668, 'material')
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i671 = data
  i670.mass = i671[0]
  i670.drag = i671[1]
  i670.angularDrag = i671[2]
  i670.useGravity = !!i671[3]
  i670.isKinematic = !!i671[4]
  i670.constraints = i671[5]
  i670.maxAngularVelocity = i671[6]
  i670.collisionDetectionMode = i671[7]
  i670.interpolation = i671[8]
  return i670
}

Deserializers["Logic.Place.TreeLoadPlace"] = function (request, data, root) {
  var i672 = root || request.c( 'Logic.Place.TreeLoadPlace' )
  var i673 = data
  request.r(i673[0], i673[1], 0, i672, '_items')
  request.r(i673[2], i673[3], 0, i672, '_targetItems')
  return i672
}

Deserializers["Logic.Items.ItemMovePoints"] = function (request, data, root) {
  var i674 = root || request.c( 'Logic.Items.ItemMovePoints' )
  var i675 = data
  var i677 = i675[0]
  var i676 = new (System.Collections.Generic.List$1(Bridge.ns('Logic.Points.ItemMovePoint')))
  for(var i = 0; i < i677.length; i += 2) {
  request.r(i677[i + 0], i677[i + 1], 1, i676, '')
  }
  i674.Points = i676
  return i674
}

Deserializers["Logic.Points.ItemMovePoint"] = function (request, data, root) {
  var i680 = root || request.c( 'Logic.Points.ItemMovePoint' )
  var i681 = data
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i683 = data
  request.r(i683[0], i683[1], 0, i682, 'animatorController')
  request.r(i683[2], i683[3], 0, i682, 'avatar')
  i682.updateMode = i683[4]
  i682.hasTransformHierarchy = !!i683[5]
  i682.applyRootMotion = !!i683[6]
  var i685 = i683[7]
  var i684 = []
  for(var i = 0; i < i685.length; i += 2) {
  request.r(i685[i + 0], i685[i + 1], 2, i684, '')
  }
  i682.humanBones = i684
  i682.enabled = !!i683[8]
  return i682
}

Deserializers["Logic.Items.Timber"] = function (request, data, root) {
  var i688 = root || request.c( 'Logic.Items.Timber' )
  var i689 = data
  request.r(i689[0], i689[1], 0, i688, 'GameObject')
  i688._duration = i689[2]
  return i688
}

Deserializers["TextureAnimator"] = function (request, data, root) {
  var i690 = root || request.c( 'TextureAnimator' )
  var i691 = data
  request.r(i691[0], i691[1], 0, i690, 'targetMaterial')
  i690.texturePropertyName = i691[2]
  i690.scrollSpeed = new pc.Vec2( i691[3], i691[4] )
  return i690
}

Deserializers["Logic.Items.Money"] = function (request, data, root) {
  var i692 = root || request.c( 'Logic.Items.Money' )
  var i693 = data
  request.r(i693[0], i693[1], 0, i692, 'GameObject')
  i692._duration = i693[2]
  return i692
}

Deserializers["Logic.Place.TimberUnloadPlace"] = function (request, data, root) {
  var i694 = root || request.c( 'Logic.Place.TimberUnloadPlace' )
  var i695 = data
  i694._timberReward = i695[0]
  request.r(i695[1], i695[2], 0, i694, '_unloadPoints')
  request.r(i695[3], i695[4], 0, i694, '_forkliftPoints')
  request.r(i695[5], i695[6], 0, i694, '_targetUsePoint')
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i697 = data
  i696.name = i697[0]
  i696.atlasId = i697[1]
  i696.mipmapCount = i697[2]
  i696.hdr = !!i697[3]
  i696.size = i697[4]
  i696.anisoLevel = i697[5]
  i696.filterMode = i697[6]
  var i699 = i697[7]
  var i698 = []
  for(var i = 0; i < i699.length; i += 4) {
    i698.push( UnityEngine.Rect.MinMaxRect(i699[i + 0], i699[i + 1], i699[i + 2], i699[i + 3]) );
  }
  i696.rects = i698
  i696.wrapU = i697[8]
  i696.wrapV = i697[9]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i703 = data
  i702.name = i703[0]
  i702.index = i703[1]
  i702.startup = !!i703[2]
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i705 = data
  i704.enabled = !!i705[0]
  i704.aspect = i705[1]
  i704.orthographic = !!i705[2]
  i704.orthographicSize = i705[3]
  i704.backgroundColor = new pc.Color(i705[4], i705[5], i705[6], i705[7])
  i704.nearClipPlane = i705[8]
  i704.farClipPlane = i705[9]
  i704.fieldOfView = i705[10]
  i704.depth = i705[11]
  i704.clearFlags = i705[12]
  i704.cullingMask = i705[13]
  i704.rect = i705[14]
  request.r(i705[15], i705[16], 0, i704, 'targetTexture')
  i704.usePhysicalProperties = !!i705[17]
  i704.focalLength = i705[18]
  i704.sensorSize = new pc.Vec2( i705[19], i705[20] )
  i704.lensShift = new pc.Vec2( i705[21], i705[22] )
  i704.gateFit = i705[23]
  i704.commandBufferCount = i705[24]
  i704.cameraType = i705[25]
  return i704
}

Deserializers["CameraLogic.CameraFollow"] = function (request, data, root) {
  var i706 = root || request.c( 'CameraLogic.CameraFollow' )
  var i707 = data
  i706.RotationAngleX = i707[0]
  i706.Distance = i707[1]
  i706.OffsetY = i707[2]
  request.r(i707[3], i707[4], 0, i706, '_following')
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i709 = data
  i708.enabled = !!i709[0]
  i708.planeDistance = i709[1]
  i708.referencePixelsPerUnit = i709[2]
  i708.isFallbackOverlay = !!i709[3]
  i708.renderMode = i709[4]
  i708.renderOrder = i709[5]
  i708.sortingLayerName = i709[6]
  i708.sortingOrder = i709[7]
  i708.scaleFactor = i709[8]
  request.r(i709[9], i709[10], 0, i708, 'worldCamera')
  i708.overrideSorting = !!i709[11]
  i708.pixelPerfect = !!i709[12]
  i708.targetDisplay = i709[13]
  i708.overridePixelPerfect = !!i709[14]
  return i708
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i710 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i711 = data
  i710.m_UiScaleMode = i711[0]
  i710.m_ReferencePixelsPerUnit = i711[1]
  i710.m_ScaleFactor = i711[2]
  i710.m_ReferenceResolution = new pc.Vec2( i711[3], i711[4] )
  i710.m_ScreenMatchMode = i711[5]
  i710.m_MatchWidthOrHeight = i711[6]
  i710.m_PhysicalUnit = i711[7]
  i710.m_FallbackScreenDPI = i711[8]
  i710.m_DefaultSpriteDPI = i711[9]
  i710.m_DynamicPixelsPerUnit = i711[10]
  i710.m_PresetInfoIsWorld = !!i711[11]
  return i710
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i712 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i713 = data
  i712.m_IgnoreReversedGraphics = !!i713[0]
  i712.m_BlockingObjects = i713[1]
  i712.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i713[2] )
  return i712
}

Deserializers["Logic.MoneyManager"] = function (request, data, root) {
  var i714 = root || request.c( 'Logic.MoneyManager' )
  var i715 = data
  request.r(i715[0], i715[1], 0, i714, '_balanceText')
  i714._animationSpeed = i715[2]
  i714._startingBalance = i715[3]
  return i714
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i716 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i717 = data
  i716.m_hasFontAssetChanged = !!i717[0]
  request.r(i717[1], i717[2], 0, i716, 'm_baseMaterial')
  i716.m_maskOffset = new pc.Vec4( i717[3], i717[4], i717[5], i717[6] )
  i716.m_text = i717[7]
  i716.m_isRightToLeft = !!i717[8]
  request.r(i717[9], i717[10], 0, i716, 'm_fontAsset')
  request.r(i717[11], i717[12], 0, i716, 'm_sharedMaterial')
  var i719 = i717[13]
  var i718 = []
  for(var i = 0; i < i719.length; i += 2) {
  request.r(i719[i + 0], i719[i + 1], 2, i718, '')
  }
  i716.m_fontSharedMaterials = i718
  request.r(i717[14], i717[15], 0, i716, 'm_fontMaterial')
  var i721 = i717[16]
  var i720 = []
  for(var i = 0; i < i721.length; i += 2) {
  request.r(i721[i + 0], i721[i + 1], 2, i720, '')
  }
  i716.m_fontMaterials = i720
  i716.m_fontColor32 = UnityEngine.Color32.ConstructColor(i717[17], i717[18], i717[19], i717[20])
  i716.m_fontColor = new pc.Color(i717[21], i717[22], i717[23], i717[24])
  i716.m_enableVertexGradient = !!i717[25]
  i716.m_colorMode = i717[26]
  i716.m_fontColorGradient = request.d('TMPro.VertexGradient', i717[27], i716.m_fontColorGradient)
  request.r(i717[28], i717[29], 0, i716, 'm_fontColorGradientPreset')
  request.r(i717[30], i717[31], 0, i716, 'm_spriteAsset')
  i716.m_tintAllSprites = !!i717[32]
  request.r(i717[33], i717[34], 0, i716, 'm_StyleSheet')
  i716.m_TextStyleHashCode = i717[35]
  i716.m_overrideHtmlColors = !!i717[36]
  i716.m_faceColor = UnityEngine.Color32.ConstructColor(i717[37], i717[38], i717[39], i717[40])
  i716.m_fontSize = i717[41]
  i716.m_fontSizeBase = i717[42]
  i716.m_fontWeight = i717[43]
  i716.m_enableAutoSizing = !!i717[44]
  i716.m_fontSizeMin = i717[45]
  i716.m_fontSizeMax = i717[46]
  i716.m_fontStyle = i717[47]
  i716.m_HorizontalAlignment = i717[48]
  i716.m_VerticalAlignment = i717[49]
  i716.m_textAlignment = i717[50]
  i716.m_characterSpacing = i717[51]
  i716.m_wordSpacing = i717[52]
  i716.m_lineSpacing = i717[53]
  i716.m_lineSpacingMax = i717[54]
  i716.m_paragraphSpacing = i717[55]
  i716.m_charWidthMaxAdj = i717[56]
  i716.m_enableWordWrapping = !!i717[57]
  i716.m_wordWrappingRatios = i717[58]
  i716.m_overflowMode = i717[59]
  request.r(i717[60], i717[61], 0, i716, 'm_linkedTextComponent')
  request.r(i717[62], i717[63], 0, i716, 'parentLinkedComponent')
  i716.m_enableKerning = !!i717[64]
  i716.m_enableExtraPadding = !!i717[65]
  i716.checkPaddingRequired = !!i717[66]
  i716.m_isRichText = !!i717[67]
  i716.m_parseCtrlCharacters = !!i717[68]
  i716.m_isOrthographic = !!i717[69]
  i716.m_isCullingEnabled = !!i717[70]
  i716.m_horizontalMapping = i717[71]
  i716.m_verticalMapping = i717[72]
  i716.m_uvLineOffset = i717[73]
  i716.m_geometrySortingOrder = i717[74]
  i716.m_IsTextObjectScaleStatic = !!i717[75]
  i716.m_VertexBufferAutoSizeReduction = !!i717[76]
  i716.m_useMaxVisibleDescender = !!i717[77]
  i716.m_pageToDisplay = i717[78]
  i716.m_margin = new pc.Vec4( i717[79], i717[80], i717[81], i717[82] )
  i716.m_isUsingLegacyAnimationComponent = !!i717[83]
  i716.m_isVolumetricText = !!i717[84]
  request.r(i717[85], i717[86], 0, i716, 'm_Material')
  i716.m_Maskable = !!i717[87]
  i716.m_Color = new pc.Color(i717[88], i717[89], i717[90], i717[91])
  i716.m_RaycastTarget = !!i717[92]
  i716.m_RaycastPadding = new pc.Vec4( i717[93], i717[94], i717[95], i717[96] )
  return i716
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i722 = root || request.c( 'TMPro.VertexGradient' )
  var i723 = data
  i722.topLeft = new pc.Color(i723[0], i723[1], i723[2], i723[3])
  i722.topRight = new pc.Color(i723[4], i723[5], i723[6], i723[7])
  i722.bottomLeft = new pc.Color(i723[8], i723[9], i723[10], i723[11])
  i722.bottomRight = new pc.Color(i723[12], i723[13], i723[14], i723[15])
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i725 = data
  i724.enabled = !!i725[0]
  i724.type = i725[1]
  i724.color = new pc.Color(i725[2], i725[3], i725[4], i725[5])
  i724.cullingMask = i725[6]
  i724.intensity = i725[7]
  i724.range = i725[8]
  i724.spotAngle = i725[9]
  i724.shadows = i725[10]
  i724.shadowNormalBias = i725[11]
  i724.shadowBias = i725[12]
  i724.shadowStrength = i725[13]
  i724.shadowResolution = i725[14]
  i724.lightmapBakeType = i725[15]
  i724.renderMode = i725[16]
  request.r(i725[17], i725[18], 0, i724, 'cookie')
  i724.cookieSize = i725[19]
  return i724
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i726 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i727 = data
  request.r(i727[0], i727[1], 0, i726, 'm_FirstSelected')
  i726.m_sendNavigationEvents = !!i727[2]
  i726.m_DragThreshold = i727[3]
  return i726
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i728 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i729 = data
  i728.m_HorizontalAxis = i729[0]
  i728.m_VerticalAxis = i729[1]
  i728.m_SubmitButton = i729[2]
  i728.m_CancelButton = i729[3]
  i728.m_InputActionsPerSecond = i729[4]
  i728.m_RepeatDelay = i729[5]
  i728.m_ForceModuleActive = !!i729[6]
  i728.m_SendPointerHoverToParent = !!i729[7]
  return i728
}

Deserializers["Infrastructure.GameBootstrapper"] = function (request, data, root) {
  var i730 = root || request.c( 'Infrastructure.GameBootstrapper' )
  var i731 = data
  return i730
}

Deserializers["Forklift.ForkliftMover"] = function (request, data, root) {
  var i732 = root || request.c( 'Forklift.ForkliftMover' )
  var i733 = data
  request.r(i733[0], i733[1], 0, i732, 'CharacterController')
  i732.MovementSpeed = i733[2]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CharacterController"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CharacterController' )
  var i735 = data
  i734.enabled = !!i735[0]
  i734.center = new pc.Vec3( i735[1], i735[2], i735[3] )
  i734.radius = i735[4]
  i734.height = i735[5]
  i734.minMoveDistance = i735[6]
  i734.skinWidth = i735[7]
  i734.enableOverlapRecovery = !!i735[8]
  return i734
}

Deserializers["Forklift.ForkliftMovePoints"] = function (request, data, root) {
  var i736 = root || request.c( 'Forklift.ForkliftMovePoints' )
  var i737 = data
  request.r(i737[0], i737[1], 0, i736, 'Mover')
  var i739 = i737[2]
  var i738 = new (System.Collections.Generic.List$1(Bridge.ns('Logic.Points.ItemMovePoint')))
  for(var i = 0; i < i739.length; i += 2) {
  request.r(i739[i + 0], i739[i + 1], 1, i738, '')
  }
  i736.Points = i738
  return i736
}

Deserializers["Forklift.ForkliftMoneyHandler"] = function (request, data, root) {
  var i740 = root || request.c( 'Forklift.ForkliftMoneyHandler' )
  var i741 = data
  request.r(i741[0], i741[1], 0, i740, '_moneyManager')
  return i740
}

Deserializers["Logic.Place.TreeUnloadPlace"] = function (request, data, root) {
  var i742 = root || request.c( 'Logic.Place.TreeUnloadPlace' )
  var i743 = data
  i742._rewardAmount = i743[0]
  request.r(i743[1], i743[2], 0, i742, '_itemSpawner')
  request.r(i743[3], i743[4], 0, i742, '_unloadPoints')
  request.r(i743[5], i743[6], 0, i742, '_forkliftPoints')
  request.r(i743[7], i743[8], 0, i742, '_targetUsePoint')
  return i742
}

Deserializers["Logic.Place.MoneyLoadPlace"] = function (request, data, root) {
  var i744 = root || request.c( 'Logic.Place.MoneyLoadPlace' )
  var i745 = data
  request.r(i745[0], i745[1], 0, i744, '_moneyManager')
  request.r(i745[2], i745[3], 0, i744, '_items')
  request.r(i745[4], i745[5], 0, i744, '_targetItems')
  return i744
}

Deserializers["Logic.Items.MoneyMovePoints"] = function (request, data, root) {
  var i746 = root || request.c( 'Logic.Items.MoneyMovePoints' )
  var i747 = data
  var i749 = i747[0]
  var i748 = new (System.Collections.Generic.List$1(Bridge.ns('Logic.Points.ItemMovePoint')))
  for(var i = 0; i < i749.length; i += 2) {
  request.r(i749[i + 0], i749[i + 1], 1, i748, '')
  }
  i746.Points = i748
  return i746
}

Deserializers["Logic.Place.MoneyUnloadPlace"] = function (request, data, root) {
  var i750 = root || request.c( 'Logic.Place.MoneyUnloadPlace' )
  var i751 = data
  i750._targetBalance = i751[0]
  i750._currentBalance = i751[1]
  request.r(i751[2], i751[3], 0, i750, '_progressBar')
  request.r(i751[4], i751[5], 0, i750, '_completedBuilding')
  request.r(i751[6], i751[7], 0, i750, '_uncompletedBuilding')
  request.r(i751[8], i751[9], 0, i750, '_moneyManager')
  request.r(i751[10], i751[11], 0, i750, '_unloadPoints')
  request.r(i751[12], i751[13], 0, i750, '_forkliftPoints')
  request.r(i751[14], i751[15], 0, i750, '_targetUsePoint')
  return i750
}

Deserializers["UI.FillableBar3D"] = function (request, data, root) {
  var i752 = root || request.c( 'UI.FillableBar3D' )
  var i753 = data
  i752.onFillComplete = request.d('UnityEngine.Events.UnityEvent', i753[0], i752.onFillComplete)
  request.r(i753[1], i753[2], 0, i752, 'fillObject')
  i752.fullWidth = i753[3]
  i752.fillSpeed = i753[4]
  i752.minValue = i753[5]
  i752.maxValue = i753[6]
  return i752
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i754 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i755 = data
  i754.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i755[0], i754.m_PersistentCalls)
  return i754
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i756 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i757 = data
  var i759 = i757[0]
  var i758 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i759.length; i += 1) {
    i758.add(request.d('UnityEngine.Events.PersistentCall', i759[i + 0]));
  }
  i756.m_Calls = i758
  return i756
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i762 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i763 = data
  request.r(i763[0], i763[1], 0, i762, 'm_Target')
  i762.m_TargetAssemblyTypeName = i763[2]
  i762.m_MethodName = i763[3]
  i762.m_Mode = i763[4]
  i762.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i763[5], i762.m_Arguments)
  i762.m_CallState = i763[6]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i765 = data
  i764.ambientIntensity = i765[0]
  i764.reflectionIntensity = i765[1]
  i764.ambientMode = i765[2]
  i764.ambientLight = new pc.Color(i765[3], i765[4], i765[5], i765[6])
  i764.ambientSkyColor = new pc.Color(i765[7], i765[8], i765[9], i765[10])
  i764.ambientGroundColor = new pc.Color(i765[11], i765[12], i765[13], i765[14])
  i764.ambientEquatorColor = new pc.Color(i765[15], i765[16], i765[17], i765[18])
  i764.fogColor = new pc.Color(i765[19], i765[20], i765[21], i765[22])
  i764.fogEndDistance = i765[23]
  i764.fogStartDistance = i765[24]
  i764.fogDensity = i765[25]
  i764.fog = !!i765[26]
  request.r(i765[27], i765[28], 0, i764, 'skybox')
  i764.fogMode = i765[29]
  var i767 = i765[30]
  var i766 = []
  for(var i = 0; i < i767.length; i += 1) {
    i766.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i767[i + 0]) );
  }
  i764.lightmaps = i766
  i764.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i765[31], i764.lightProbes)
  i764.lightmapsMode = i765[32]
  i764.mixedBakeMode = i765[33]
  i764.environmentLightingMode = i765[34]
  i764.ambientProbe = new pc.SphericalHarmonicsL2(i765[35])
  i764.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i765[36])
  i764.useReferenceAmbientProbe = !!i765[37]
  request.r(i765[38], i765[39], 0, i764, 'customReflection')
  request.r(i765[40], i765[41], 0, i764, 'defaultReflection')
  i764.defaultReflectionMode = i765[42]
  i764.defaultReflectionResolution = i765[43]
  i764.sunLightObjectId = i765[44]
  i764.pixelLightCount = i765[45]
  i764.defaultReflectionHDR = !!i765[46]
  i764.hasLightDataAsset = !!i765[47]
  i764.hasManualGenerate = !!i765[48]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i771 = data
  request.r(i771[0], i771[1], 0, i770, 'lightmapColor')
  request.r(i771[2], i771[3], 0, i770, 'lightmapDirection')
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i772 = root || new UnityEngine.LightProbes()
  var i773 = data
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i781 = data
  var i783 = i781[0]
  var i782 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i783.length; i += 1) {
    i782.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i783[i + 0]));
  }
  i780.ShaderCompilationErrors = i782
  i780.name = i781[1]
  i780.guid = i781[2]
  var i785 = i781[3]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( i785[i + 0] );
  }
  i780.shaderDefinedKeywords = i784
  var i787 = i781[4]
  var i786 = []
  for(var i = 0; i < i787.length; i += 1) {
    i786.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i787[i + 0]) );
  }
  i780.passes = i786
  var i789 = i781[5]
  var i788 = []
  for(var i = 0; i < i789.length; i += 1) {
    i788.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i789[i + 0]) );
  }
  i780.usePasses = i788
  var i791 = i781[6]
  var i790 = []
  for(var i = 0; i < i791.length; i += 1) {
    i790.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i791[i + 0]) );
  }
  i780.defaultParameterValues = i790
  request.r(i781[7], i781[8], 0, i780, 'unityFallbackShader')
  i780.readDepth = !!i781[9]
  i780.isCreatedByShaderGraph = !!i781[10]
  i780.compiled = !!i781[11]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i795 = data
  i794.shaderName = i795[0]
  i794.errorMessage = i795[1]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i800 = root || new pc.UnityShaderPass()
  var i801 = data
  i800.id = i801[0]
  i800.subShaderIndex = i801[1]
  i800.name = i801[2]
  i800.passType = i801[3]
  i800.grabPassTextureName = i801[4]
  i800.usePass = !!i801[5]
  i800.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i801[6], i800.zTest)
  i800.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i801[7], i800.zWrite)
  i800.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i801[8], i800.culling)
  i800.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i801[9], i800.blending)
  i800.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i801[10], i800.alphaBlending)
  i800.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i801[11], i800.colorWriteMask)
  i800.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i801[12], i800.offsetUnits)
  i800.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i801[13], i800.offsetFactor)
  i800.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i801[14], i800.stencilRef)
  i800.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i801[15], i800.stencilReadMask)
  i800.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i801[16], i800.stencilWriteMask)
  i800.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i801[17], i800.stencilOp)
  i800.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i801[18], i800.stencilOpFront)
  i800.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i801[19], i800.stencilOpBack)
  var i803 = i801[20]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i803[i + 0]) );
  }
  i800.tags = i802
  var i805 = i801[21]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( i805[i + 0] );
  }
  i800.passDefinedKeywords = i804
  var i807 = i801[22]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i807[i + 0]) );
  }
  i800.passDefinedKeywordGroups = i806
  var i809 = i801[23]
  var i808 = []
  for(var i = 0; i < i809.length; i += 1) {
    i808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i809[i + 0]) );
  }
  i800.variants = i808
  var i811 = i801[24]
  var i810 = []
  for(var i = 0; i < i811.length; i += 1) {
    i810.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i811[i + 0]) );
  }
  i800.excludedVariants = i810
  i800.hasDepthReader = !!i801[25]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i813 = data
  i812.val = i813[0]
  i812.name = i813[1]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i815 = data
  i814.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i815[0], i814.src)
  i814.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i815[1], i814.dst)
  i814.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i815[2], i814.op)
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i817 = data
  i816.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i817[0], i816.pass)
  i816.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i817[1], i816.fail)
  i816.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i817[2], i816.zFail)
  i816.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i817[3], i816.comp)
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i821 = data
  i820.name = i821[0]
  i820.value = i821[1]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i825 = data
  var i827 = i825[0]
  var i826 = []
  for(var i = 0; i < i827.length; i += 1) {
    i826.push( i827[i + 0] );
  }
  i824.keywords = i826
  i824.hasDiscard = !!i825[1]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i831 = data
  i830.passId = i831[0]
  i830.subShaderIndex = i831[1]
  var i833 = i831[2]
  var i832 = []
  for(var i = 0; i < i833.length; i += 1) {
    i832.push( i833[i + 0] );
  }
  i830.keywords = i832
  i830.vertexProgram = i831[3]
  i830.fragmentProgram = i831[4]
  i830.exportedForWebGl2 = !!i831[5]
  i830.readDepth = !!i831[6]
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i837 = data
  request.r(i837[0], i837[1], 0, i836, 'shader')
  i836.pass = i837[2]
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i841 = data
  i840.name = i841[0]
  i840.type = i841[1]
  i840.value = new pc.Vec4( i841[2], i841[3], i841[4], i841[5] )
  i840.textureValue = i841[6]
  i840.shaderPropertyFlag = i841[7]
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i843 = data
  i842.name = i843[0]
  request.r(i843[1], i843[2], 0, i842, 'texture')
  i842.aabb = i843[3]
  i842.vertices = i843[4]
  i842.triangles = i843[5]
  i842.textureRect = UnityEngine.Rect.MinMaxRect(i843[6], i843[7], i843[8], i843[9])
  i842.packedRect = UnityEngine.Rect.MinMaxRect(i843[10], i843[11], i843[12], i843[13])
  i842.border = new pc.Vec4( i843[14], i843[15], i843[16], i843[17] )
  i842.transparency = i843[18]
  i842.bounds = i843[19]
  i842.pixelsPerUnit = i843[20]
  i842.textureWidth = i843[21]
  i842.textureHeight = i843[22]
  i842.nativeSize = new pc.Vec2( i843[23], i843[24] )
  i842.pivot = new pc.Vec2( i843[25], i843[26] )
  i842.textureRectOffset = new pc.Vec2( i843[27], i843[28] )
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i845 = data
  i844.name = i845[0]
  i844.wrapMode = i845[1]
  i844.isLooping = !!i845[2]
  i844.length = i845[3]
  var i847 = i845[4]
  var i846 = []
  for(var i = 0; i < i847.length; i += 1) {
    i846.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i847[i + 0]) );
  }
  i844.curves = i846
  var i849 = i845[5]
  var i848 = []
  for(var i = 0; i < i849.length; i += 1) {
    i848.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i849[i + 0]) );
  }
  i844.events = i848
  i844.halfPrecision = !!i845[6]
  i844._frameRate = i845[7]
  i844.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i845[8], i844.localBounds)
  i844.hasMuscleCurves = !!i845[9]
  var i851 = i845[10]
  var i850 = []
  for(var i = 0; i < i851.length; i += 1) {
    i850.push( i851[i + 0] );
  }
  i844.clipMuscleConstant = i850
  i844.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i845[11], i844.clipBindingConstant)
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i855 = data
  i854.path = i855[0]
  i854.hash = i855[1]
  i854.componentType = i855[2]
  i854.property = i855[3]
  i854.keys = i855[4]
  var i857 = i855[5]
  var i856 = []
  for(var i = 0; i < i857.length; i += 1) {
    i856.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i857[i + 0]) );
  }
  i854.objectReferenceKeys = i856
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i861 = data
  i860.time = i861[0]
  request.r(i861[1], i861[2], 0, i860, 'value')
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i865 = data
  i864.functionName = i865[0]
  i864.floatParameter = i865[1]
  i864.intParameter = i865[2]
  i864.stringParameter = i865[3]
  request.r(i865[4], i865[5], 0, i864, 'objectReferenceParameter')
  i864.time = i865[6]
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i867 = data
  i866.center = new pc.Vec3( i867[0], i867[1], i867[2] )
  i866.extends = new pc.Vec3( i867[3], i867[4], i867[5] )
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i871 = data
  var i873 = i871[0]
  var i872 = []
  for(var i = 0; i < i873.length; i += 1) {
    i872.push( i873[i + 0] );
  }
  i870.genericBindings = i872
  var i875 = i871[1]
  var i874 = []
  for(var i = 0; i < i875.length; i += 1) {
    i874.push( i875[i + 0] );
  }
  i870.pptrCurveMapping = i874
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i877 = data
  i876.name = i877[0]
  i876.ascent = i877[1]
  i876.originalLineHeight = i877[2]
  i876.fontSize = i877[3]
  var i879 = i877[4]
  var i878 = []
  for(var i = 0; i < i879.length; i += 1) {
    i878.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i879[i + 0]) );
  }
  i876.characterInfo = i878
  request.r(i877[5], i877[6], 0, i876, 'texture')
  i876.originalFontSize = i877[7]
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i883 = data
  i882.index = i883[0]
  i882.advance = i883[1]
  i882.bearing = i883[2]
  i882.glyphWidth = i883[3]
  i882.glyphHeight = i883[4]
  i882.minX = i883[5]
  i882.maxX = i883[6]
  i882.minY = i883[7]
  i882.maxY = i883[8]
  i882.uvBottomLeftX = i883[9]
  i882.uvBottomLeftY = i883[10]
  i882.uvBottomRightX = i883[11]
  i882.uvBottomRightY = i883[12]
  i882.uvTopLeftX = i883[13]
  i882.uvTopLeftY = i883[14]
  i882.uvTopRightX = i883[15]
  i882.uvTopRightY = i883[16]
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i885 = data
  i884.name = i885[0]
  var i887 = i885[1]
  var i886 = []
  for(var i = 0; i < i887.length; i += 1) {
    i886.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i887[i + 0]) );
  }
  i884.layers = i886
  var i889 = i885[2]
  var i888 = []
  for(var i = 0; i < i889.length; i += 1) {
    i888.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i889[i + 0]) );
  }
  i884.parameters = i888
  i884.animationClips = i885[3]
  i884.avatarUnsupported = i885[4]
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i893 = data
  i892.name = i893[0]
  i892.defaultWeight = i893[1]
  i892.blendingMode = i893[2]
  i892.avatarMask = i893[3]
  i892.syncedLayerIndex = i893[4]
  i892.syncedLayerAffectsTiming = !!i893[5]
  i892.syncedLayers = i893[6]
  i892.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i893[7], i892.stateMachine)
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i895 = data
  i894.id = i895[0]
  i894.name = i895[1]
  i894.path = i895[2]
  var i897 = i895[3]
  var i896 = []
  for(var i = 0; i < i897.length; i += 1) {
    i896.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i897[i + 0]) );
  }
  i894.states = i896
  var i899 = i895[4]
  var i898 = []
  for(var i = 0; i < i899.length; i += 1) {
    i898.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i899[i + 0]) );
  }
  i894.machines = i898
  var i901 = i895[5]
  var i900 = []
  for(var i = 0; i < i901.length; i += 1) {
    i900.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i901[i + 0]) );
  }
  i894.entryStateTransitions = i900
  var i903 = i895[6]
  var i902 = []
  for(var i = 0; i < i903.length; i += 1) {
    i902.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i903[i + 0]) );
  }
  i894.exitStateTransitions = i902
  var i905 = i895[7]
  var i904 = []
  for(var i = 0; i < i905.length; i += 1) {
    i904.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i905[i + 0]) );
  }
  i894.anyStateTransitions = i904
  i894.defaultStateId = i895[8]
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i909 = data
  i908.id = i909[0]
  i908.name = i909[1]
  i908.cycleOffset = i909[2]
  i908.cycleOffsetParameter = i909[3]
  i908.cycleOffsetParameterActive = !!i909[4]
  i908.mirror = !!i909[5]
  i908.mirrorParameter = i909[6]
  i908.mirrorParameterActive = !!i909[7]
  i908.motionId = i909[8]
  i908.nameHash = i909[9]
  i908.fullPathHash = i909[10]
  i908.speed = i909[11]
  i908.speedParameter = i909[12]
  i908.speedParameterActive = !!i909[13]
  i908.tag = i909[14]
  i908.tagHash = i909[15]
  i908.writeDefaultValues = !!i909[16]
  var i911 = i909[17]
  var i910 = []
  for(var i = 0; i < i911.length; i += 2) {
  request.r(i911[i + 0], i911[i + 1], 2, i910, '')
  }
  i908.behaviours = i910
  var i913 = i909[18]
  var i912 = []
  for(var i = 0; i < i913.length; i += 1) {
    i912.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i913[i + 0]) );
  }
  i908.transitions = i912
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i919 = data
  i918.fullPath = i919[0]
  i918.canTransitionToSelf = !!i919[1]
  i918.duration = i919[2]
  i918.exitTime = i919[3]
  i918.hasExitTime = !!i919[4]
  i918.hasFixedDuration = !!i919[5]
  i918.interruptionSource = i919[6]
  i918.offset = i919[7]
  i918.orderedInterruption = !!i919[8]
  i918.destinationStateId = i919[9]
  i918.isExit = !!i919[10]
  i918.mute = !!i919[11]
  i918.solo = !!i919[12]
  var i921 = i919[13]
  var i920 = []
  for(var i = 0; i < i921.length; i += 1) {
    i920.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i921[i + 0]) );
  }
  i918.conditions = i920
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i927 = data
  i926.destinationStateId = i927[0]
  i926.isExit = !!i927[1]
  i926.mute = !!i927[2]
  i926.solo = !!i927[3]
  var i929 = i927[4]
  var i928 = []
  for(var i = 0; i < i929.length; i += 1) {
    i928.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i929[i + 0]) );
  }
  i926.conditions = i928
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i933 = data
  i932.defaultBool = !!i933[0]
  i932.defaultFloat = i933[1]
  i932.defaultInt = i933[2]
  i932.name = i933[3]
  i932.nameHash = i933[4]
  i932.type = i933[5]
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i935 = data
  i934.name = i935[0]
  i934.bytes64 = i935[1]
  i934.data = i935[2]
  return i934
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i936 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i937 = data
  i936.hashCode = i937[0]
  request.r(i937[1], i937[2], 0, i936, 'material')
  i936.materialHashCode = i937[3]
  request.r(i937[4], i937[5], 0, i936, 'atlas')
  i936.normalStyle = i937[6]
  i936.normalSpacingOffset = i937[7]
  i936.boldStyle = i937[8]
  i936.boldSpacing = i937[9]
  i936.italicStyle = i937[10]
  i936.tabSize = i937[11]
  i936.m_Version = i937[12]
  i936.m_SourceFontFileGUID = i937[13]
  request.r(i937[14], i937[15], 0, i936, 'm_SourceFontFile_EditorRef')
  request.r(i937[16], i937[17], 0, i936, 'm_SourceFontFile')
  i936.m_AtlasPopulationMode = i937[18]
  i936.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i937[19], i936.m_FaceInfo)
  var i939 = i937[20]
  var i938 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i939.length; i += 1) {
    i938.add(request.d('UnityEngine.TextCore.Glyph', i939[i + 0]));
  }
  i936.m_GlyphTable = i938
  var i941 = i937[21]
  var i940 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i941.length; i += 1) {
    i940.add(request.d('TMPro.TMP_Character', i941[i + 0]));
  }
  i936.m_CharacterTable = i940
  var i943 = i937[22]
  var i942 = []
  for(var i = 0; i < i943.length; i += 2) {
  request.r(i943[i + 0], i943[i + 1], 2, i942, '')
  }
  i936.m_AtlasTextures = i942
  i936.m_AtlasTextureIndex = i937[23]
  i936.m_IsMultiAtlasTexturesEnabled = !!i937[24]
  i936.m_ClearDynamicDataOnBuild = !!i937[25]
  var i945 = i937[26]
  var i944 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i945.length; i += 1) {
    i944.add(request.d('UnityEngine.TextCore.GlyphRect', i945[i + 0]));
  }
  i936.m_UsedGlyphRects = i944
  var i947 = i937[27]
  var i946 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i947.length; i += 1) {
    i946.add(request.d('UnityEngine.TextCore.GlyphRect', i947[i + 0]));
  }
  i936.m_FreeGlyphRects = i946
  i936.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i937[28], i936.m_fontInfo)
  i936.m_AtlasWidth = i937[29]
  i936.m_AtlasHeight = i937[30]
  i936.m_AtlasPadding = i937[31]
  i936.m_AtlasRenderMode = i937[32]
  var i949 = i937[33]
  var i948 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i949.length; i += 1) {
    i948.add(request.d('TMPro.TMP_Glyph', i949[i + 0]));
  }
  i936.m_glyphInfoList = i948
  i936.m_KerningTable = request.d('TMPro.KerningTable', i937[34], i936.m_KerningTable)
  i936.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i937[35], i936.m_FontFeatureTable)
  var i951 = i937[36]
  var i950 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i951.length; i += 2) {
  request.r(i951[i + 0], i951[i + 1], 1, i950, '')
  }
  i936.fallbackFontAssets = i950
  var i953 = i937[37]
  var i952 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i953.length; i += 2) {
  request.r(i953[i + 0], i953[i + 1], 1, i952, '')
  }
  i936.m_FallbackFontAssetTable = i952
  i936.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i937[38], i936.m_CreationSettings)
  var i955 = i937[39]
  var i954 = []
  for(var i = 0; i < i955.length; i += 1) {
    i954.push( request.d('TMPro.TMP_FontWeightPair', i955[i + 0]) );
  }
  i936.m_FontWeightTable = i954
  var i957 = i937[40]
  var i956 = []
  for(var i = 0; i < i957.length; i += 1) {
    i956.push( request.d('TMPro.TMP_FontWeightPair', i957[i + 0]) );
  }
  i936.fontWeights = i956
  return i936
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i958 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i959 = data
  i958.m_FaceIndex = i959[0]
  i958.m_FamilyName = i959[1]
  i958.m_StyleName = i959[2]
  i958.m_PointSize = i959[3]
  i958.m_Scale = i959[4]
  i958.m_UnitsPerEM = i959[5]
  i958.m_LineHeight = i959[6]
  i958.m_AscentLine = i959[7]
  i958.m_CapLine = i959[8]
  i958.m_MeanLine = i959[9]
  i958.m_Baseline = i959[10]
  i958.m_DescentLine = i959[11]
  i958.m_SuperscriptOffset = i959[12]
  i958.m_SuperscriptSize = i959[13]
  i958.m_SubscriptOffset = i959[14]
  i958.m_SubscriptSize = i959[15]
  i958.m_UnderlineOffset = i959[16]
  i958.m_UnderlineThickness = i959[17]
  i958.m_StrikethroughOffset = i959[18]
  i958.m_StrikethroughThickness = i959[19]
  i958.m_TabWidth = i959[20]
  return i958
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i962 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i963 = data
  i962.m_Index = i963[0]
  i962.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i963[1], i962.m_Metrics)
  i962.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i963[2], i962.m_GlyphRect)
  i962.m_Scale = i963[3]
  i962.m_AtlasIndex = i963[4]
  i962.m_ClassDefinitionType = i963[5]
  return i962
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i964 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i965 = data
  i964.m_Width = i965[0]
  i964.m_Height = i965[1]
  i964.m_HorizontalBearingX = i965[2]
  i964.m_HorizontalBearingY = i965[3]
  i964.m_HorizontalAdvance = i965[4]
  return i964
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i966 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i967 = data
  i966.m_X = i967[0]
  i966.m_Y = i967[1]
  i966.m_Width = i967[2]
  i966.m_Height = i967[3]
  return i966
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i970 = root || request.c( 'TMPro.TMP_Character' )
  var i971 = data
  i970.m_ElementType = i971[0]
  i970.m_Unicode = i971[1]
  i970.m_GlyphIndex = i971[2]
  i970.m_Scale = i971[3]
  return i970
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i976 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i977 = data
  i976.Name = i977[0]
  i976.PointSize = i977[1]
  i976.Scale = i977[2]
  i976.CharacterCount = i977[3]
  i976.LineHeight = i977[4]
  i976.Baseline = i977[5]
  i976.Ascender = i977[6]
  i976.CapHeight = i977[7]
  i976.Descender = i977[8]
  i976.CenterLine = i977[9]
  i976.SuperscriptOffset = i977[10]
  i976.SubscriptOffset = i977[11]
  i976.SubSize = i977[12]
  i976.Underline = i977[13]
  i976.UnderlineThickness = i977[14]
  i976.strikethrough = i977[15]
  i976.strikethroughThickness = i977[16]
  i976.TabWidth = i977[17]
  i976.Padding = i977[18]
  i976.AtlasWidth = i977[19]
  i976.AtlasHeight = i977[20]
  return i976
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i980 = root || request.c( 'TMPro.TMP_Glyph' )
  var i981 = data
  i980.id = i981[0]
  i980.x = i981[1]
  i980.y = i981[2]
  i980.width = i981[3]
  i980.height = i981[4]
  i980.xOffset = i981[5]
  i980.yOffset = i981[6]
  i980.xAdvance = i981[7]
  i980.scale = i981[8]
  return i980
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i982 = root || request.c( 'TMPro.KerningTable' )
  var i983 = data
  var i985 = i983[0]
  var i984 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i985.length; i += 1) {
    i984.add(request.d('TMPro.KerningPair', i985[i + 0]));
  }
  i982.kerningPairs = i984
  return i982
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i988 = root || request.c( 'TMPro.KerningPair' )
  var i989 = data
  i988.xOffset = i989[0]
  i988.m_FirstGlyph = i989[1]
  i988.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i989[2], i988.m_FirstGlyphAdjustments)
  i988.m_SecondGlyph = i989[3]
  i988.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i989[4], i988.m_SecondGlyphAdjustments)
  i988.m_IgnoreSpacingAdjustments = !!i989[5]
  return i988
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i990 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i991 = data
  var i993 = i991[0]
  var i992 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i993.length; i += 1) {
    i992.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i993[i + 0]));
  }
  i990.m_GlyphPairAdjustmentRecords = i992
  return i990
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i996 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i997 = data
  i996.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i997[0], i996.m_FirstAdjustmentRecord)
  i996.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i997[1], i996.m_SecondAdjustmentRecord)
  i996.m_FeatureLookupFlags = i997[2]
  return i996
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i998 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i999 = data
  i998.m_GlyphIndex = i999[0]
  i998.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i999[1], i998.m_GlyphValueRecord)
  return i998
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1000 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1001 = data
  i1000.m_XPlacement = i1001[0]
  i1000.m_YPlacement = i1001[1]
  i1000.m_XAdvance = i1001[2]
  i1000.m_YAdvance = i1001[3]
  return i1000
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1004 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1005 = data
  i1004.sourceFontFileName = i1005[0]
  i1004.sourceFontFileGUID = i1005[1]
  i1004.pointSizeSamplingMode = i1005[2]
  i1004.pointSize = i1005[3]
  i1004.padding = i1005[4]
  i1004.packingMode = i1005[5]
  i1004.atlasWidth = i1005[6]
  i1004.atlasHeight = i1005[7]
  i1004.characterSetSelectionMode = i1005[8]
  i1004.characterSequence = i1005[9]
  i1004.referencedFontAssetGUID = i1005[10]
  i1004.referencedTextAssetGUID = i1005[11]
  i1004.fontStyle = i1005[12]
  i1004.fontStyleModifier = i1005[13]
  i1004.renderMode = i1005[14]
  i1004.includeFontFeatures = !!i1005[15]
  return i1004
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1008 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1009 = data
  request.r(i1009[0], i1009[1], 0, i1008, 'regularTypeface')
  request.r(i1009[2], i1009[3], 0, i1008, 'italicTypeface')
  return i1008
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1010 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1011 = data
  i1010.useSafeMode = !!i1011[0]
  i1010.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1011[1], i1010.safeModeOptions)
  i1010.timeScale = i1011[2]
  i1010.unscaledTimeScale = i1011[3]
  i1010.useSmoothDeltaTime = !!i1011[4]
  i1010.maxSmoothUnscaledTime = i1011[5]
  i1010.rewindCallbackMode = i1011[6]
  i1010.showUnityEditorReport = !!i1011[7]
  i1010.logBehaviour = i1011[8]
  i1010.drawGizmos = !!i1011[9]
  i1010.defaultRecyclable = !!i1011[10]
  i1010.defaultAutoPlay = i1011[11]
  i1010.defaultUpdateType = i1011[12]
  i1010.defaultTimeScaleIndependent = !!i1011[13]
  i1010.defaultEaseType = i1011[14]
  i1010.defaultEaseOvershootOrAmplitude = i1011[15]
  i1010.defaultEasePeriod = i1011[16]
  i1010.defaultAutoKill = !!i1011[17]
  i1010.defaultLoopType = i1011[18]
  i1010.debugMode = !!i1011[19]
  i1010.debugStoreTargetId = !!i1011[20]
  i1010.showPreviewPanel = !!i1011[21]
  i1010.storeSettingsLocation = i1011[22]
  i1010.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1011[23], i1010.modules)
  i1010.createASMDEF = !!i1011[24]
  i1010.showPlayingTweens = !!i1011[25]
  i1010.showPausedTweens = !!i1011[26]
  return i1010
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1012 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1013 = data
  i1012.logBehaviour = i1013[0]
  i1012.nestedTweenFailureBehaviour = i1013[1]
  return i1012
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1014 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1015 = data
  i1014.showPanel = !!i1015[0]
  i1014.audioEnabled = !!i1015[1]
  i1014.physicsEnabled = !!i1015[2]
  i1014.physics2DEnabled = !!i1015[3]
  i1014.spriteEnabled = !!i1015[4]
  i1014.uiEnabled = !!i1015[5]
  i1014.textMeshProEnabled = !!i1015[6]
  i1014.tk2DEnabled = !!i1015[7]
  i1014.deAudioEnabled = !!i1015[8]
  i1014.deUnityExtendedEnabled = !!i1015[9]
  i1014.epoOutlineEnabled = !!i1015[10]
  return i1014
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1016 = root || request.c( 'TMPro.TMP_Settings' )
  var i1017 = data
  i1016.m_enableWordWrapping = !!i1017[0]
  i1016.m_enableKerning = !!i1017[1]
  i1016.m_enableExtraPadding = !!i1017[2]
  i1016.m_enableTintAllSprites = !!i1017[3]
  i1016.m_enableParseEscapeCharacters = !!i1017[4]
  i1016.m_EnableRaycastTarget = !!i1017[5]
  i1016.m_GetFontFeaturesAtRuntime = !!i1017[6]
  i1016.m_missingGlyphCharacter = i1017[7]
  i1016.m_warningsDisabled = !!i1017[8]
  request.r(i1017[9], i1017[10], 0, i1016, 'm_defaultFontAsset')
  i1016.m_defaultFontAssetPath = i1017[11]
  i1016.m_defaultFontSize = i1017[12]
  i1016.m_defaultAutoSizeMinRatio = i1017[13]
  i1016.m_defaultAutoSizeMaxRatio = i1017[14]
  i1016.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1017[15], i1017[16] )
  i1016.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1017[17], i1017[18] )
  i1016.m_autoSizeTextContainer = !!i1017[19]
  i1016.m_IsTextObjectScaleStatic = !!i1017[20]
  var i1019 = i1017[21]
  var i1018 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1019.length; i += 2) {
  request.r(i1019[i + 0], i1019[i + 1], 1, i1018, '')
  }
  i1016.m_fallbackFontAssets = i1018
  i1016.m_matchMaterialPreset = !!i1017[22]
  request.r(i1017[23], i1017[24], 0, i1016, 'm_defaultSpriteAsset')
  i1016.m_defaultSpriteAssetPath = i1017[25]
  i1016.m_enableEmojiSupport = !!i1017[26]
  i1016.m_MissingCharacterSpriteUnicode = i1017[27]
  i1016.m_defaultColorGradientPresetsPath = i1017[28]
  request.r(i1017[29], i1017[30], 0, i1016, 'm_defaultStyleSheet')
  i1016.m_StyleSheetsResourcePath = i1017[31]
  request.r(i1017[32], i1017[33], 0, i1016, 'm_leadingCharacters')
  request.r(i1017[34], i1017[35], 0, i1016, 'm_followingCharacters')
  i1016.m_UseModernHangulLineBreakingRules = !!i1017[36]
  return i1016
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1020 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1021 = data
  i1020.hashCode = i1021[0]
  request.r(i1021[1], i1021[2], 0, i1020, 'material')
  i1020.materialHashCode = i1021[3]
  request.r(i1021[4], i1021[5], 0, i1020, 'spriteSheet')
  var i1023 = i1021[6]
  var i1022 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1023.length; i += 1) {
    i1022.add(request.d('TMPro.TMP_Sprite', i1023[i + 0]));
  }
  i1020.spriteInfoList = i1022
  var i1025 = i1021[7]
  var i1024 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1025.length; i += 2) {
  request.r(i1025[i + 0], i1025[i + 1], 1, i1024, '')
  }
  i1020.fallbackSpriteAssets = i1024
  i1020.m_Version = i1021[8]
  i1020.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1021[9], i1020.m_FaceInfo)
  var i1027 = i1021[10]
  var i1026 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1027.length; i += 1) {
    i1026.add(request.d('TMPro.TMP_SpriteCharacter', i1027[i + 0]));
  }
  i1020.m_SpriteCharacterTable = i1026
  var i1029 = i1021[11]
  var i1028 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.add(request.d('TMPro.TMP_SpriteGlyph', i1029[i + 0]));
  }
  i1020.m_SpriteGlyphTable = i1028
  return i1020
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1032 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1033 = data
  i1032.name = i1033[0]
  i1032.hashCode = i1033[1]
  i1032.unicode = i1033[2]
  i1032.pivot = new pc.Vec2( i1033[3], i1033[4] )
  request.r(i1033[5], i1033[6], 0, i1032, 'sprite')
  i1032.id = i1033[7]
  i1032.x = i1033[8]
  i1032.y = i1033[9]
  i1032.width = i1033[10]
  i1032.height = i1033[11]
  i1032.xOffset = i1033[12]
  i1032.yOffset = i1033[13]
  i1032.xAdvance = i1033[14]
  i1032.scale = i1033[15]
  return i1032
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1038 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1039 = data
  i1038.m_Name = i1039[0]
  i1038.m_HashCode = i1039[1]
  i1038.m_ElementType = i1039[2]
  i1038.m_Unicode = i1039[3]
  i1038.m_GlyphIndex = i1039[4]
  i1038.m_Scale = i1039[5]
  return i1038
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1042 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1043 = data
  request.r(i1043[0], i1043[1], 0, i1042, 'sprite')
  i1042.m_Index = i1043[2]
  i1042.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1043[3], i1042.m_Metrics)
  i1042.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1043[4], i1042.m_GlyphRect)
  i1042.m_Scale = i1043[5]
  i1042.m_AtlasIndex = i1043[6]
  i1042.m_ClassDefinitionType = i1043[7]
  return i1042
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1044 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1045 = data
  var i1047 = i1045[0]
  var i1046 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.add(request.d('TMPro.TMP_Style', i1047[i + 0]));
  }
  i1044.m_StyleList = i1046
  return i1044
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1050 = root || request.c( 'TMPro.TMP_Style' )
  var i1051 = data
  i1050.m_Name = i1051[0]
  i1050.m_HashCode = i1051[1]
  i1050.m_OpeningDefinition = i1051[2]
  i1050.m_ClosingDefinition = i1051[3]
  i1050.m_OpeningTagArray = i1051[4]
  i1050.m_ClosingTagArray = i1051[5]
  i1050.m_OpeningTagUnicodeArray = i1051[6]
  i1050.m_ClosingTagUnicodeArray = i1051[7]
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1053 = data
  var i1055 = i1053[0]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1055[i + 0]) );
  }
  i1052.files = i1054
  i1052.componentToPrefabIds = i1053[1]
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1059 = data
  i1058.path = i1059[0]
  request.r(i1059[1], i1059[2], 0, i1058, 'unityObject')
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1061 = data
  var i1063 = i1061[0]
  var i1062 = []
  for(var i = 0; i < i1063.length; i += 1) {
    i1062.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1063[i + 0]) );
  }
  i1060.scriptsExecutionOrder = i1062
  var i1065 = i1061[1]
  var i1064 = []
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1065[i + 0]) );
  }
  i1060.sortingLayers = i1064
  var i1067 = i1061[2]
  var i1066 = []
  for(var i = 0; i < i1067.length; i += 1) {
    i1066.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1067[i + 0]) );
  }
  i1060.cullingLayers = i1066
  i1060.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1061[3], i1060.timeSettings)
  i1060.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1061[4], i1060.physicsSettings)
  i1060.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1061[5], i1060.physics2DSettings)
  i1060.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1061[6], i1060.qualitySettings)
  i1060.enableRealtimeShadows = !!i1061[7]
  i1060.enableAutoInstancing = !!i1061[8]
  i1060.enableDynamicBatching = !!i1061[9]
  i1060.lightmapEncodingQuality = i1061[10]
  i1060.desiredColorSpace = i1061[11]
  var i1069 = i1061[12]
  var i1068 = []
  for(var i = 0; i < i1069.length; i += 1) {
    i1068.push( i1069[i + 0] );
  }
  i1060.allTags = i1068
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1073 = data
  i1072.name = i1073[0]
  i1072.value = i1073[1]
  return i1072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1077 = data
  i1076.id = i1077[0]
  i1076.name = i1077[1]
  i1076.value = i1077[2]
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1081 = data
  i1080.id = i1081[0]
  i1080.name = i1081[1]
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1083 = data
  i1082.fixedDeltaTime = i1083[0]
  i1082.maximumDeltaTime = i1083[1]
  i1082.timeScale = i1083[2]
  i1082.maximumParticleTimestep = i1083[3]
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1085 = data
  i1084.gravity = new pc.Vec3( i1085[0], i1085[1], i1085[2] )
  i1084.defaultSolverIterations = i1085[3]
  i1084.bounceThreshold = i1085[4]
  i1084.autoSyncTransforms = !!i1085[5]
  i1084.autoSimulation = !!i1085[6]
  var i1087 = i1085[7]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1087[i + 0]) );
  }
  i1084.collisionMatrix = i1086
  return i1084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1091 = data
  i1090.enabled = !!i1091[0]
  i1090.layerId = i1091[1]
  i1090.otherLayerId = i1091[2]
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1093 = data
  request.r(i1093[0], i1093[1], 0, i1092, 'material')
  i1092.gravity = new pc.Vec2( i1093[2], i1093[3] )
  i1092.positionIterations = i1093[4]
  i1092.velocityIterations = i1093[5]
  i1092.velocityThreshold = i1093[6]
  i1092.maxLinearCorrection = i1093[7]
  i1092.maxAngularCorrection = i1093[8]
  i1092.maxTranslationSpeed = i1093[9]
  i1092.maxRotationSpeed = i1093[10]
  i1092.baumgarteScale = i1093[11]
  i1092.baumgarteTOIScale = i1093[12]
  i1092.timeToSleep = i1093[13]
  i1092.linearSleepTolerance = i1093[14]
  i1092.angularSleepTolerance = i1093[15]
  i1092.defaultContactOffset = i1093[16]
  i1092.autoSimulation = !!i1093[17]
  i1092.queriesHitTriggers = !!i1093[18]
  i1092.queriesStartInColliders = !!i1093[19]
  i1092.callbacksOnDisable = !!i1093[20]
  i1092.reuseCollisionCallbacks = !!i1093[21]
  i1092.autoSyncTransforms = !!i1093[22]
  var i1095 = i1093[23]
  var i1094 = []
  for(var i = 0; i < i1095.length; i += 1) {
    i1094.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1095[i + 0]) );
  }
  i1092.collisionMatrix = i1094
  return i1092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1099 = data
  i1098.enabled = !!i1099[0]
  i1098.layerId = i1099[1]
  i1098.otherLayerId = i1099[2]
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1101 = data
  var i1103 = i1101[0]
  var i1102 = []
  for(var i = 0; i < i1103.length; i += 1) {
    i1102.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1103[i + 0]) );
  }
  i1100.qualityLevels = i1102
  var i1105 = i1101[1]
  var i1104 = []
  for(var i = 0; i < i1105.length; i += 1) {
    i1104.push( i1105[i + 0] );
  }
  i1100.names = i1104
  i1100.shadows = i1101[2]
  i1100.anisotropicFiltering = i1101[3]
  i1100.antiAliasing = i1101[4]
  i1100.lodBias = i1101[5]
  i1100.shadowCascades = i1101[6]
  i1100.shadowDistance = i1101[7]
  i1100.shadowmaskMode = i1101[8]
  i1100.shadowProjection = i1101[9]
  i1100.shadowResolution = i1101[10]
  i1100.softParticles = !!i1101[11]
  i1100.softVegetation = !!i1101[12]
  i1100.activeColorSpace = i1101[13]
  i1100.desiredColorSpace = i1101[14]
  i1100.masterTextureLimit = i1101[15]
  i1100.maxQueuedFrames = i1101[16]
  i1100.particleRaycastBudget = i1101[17]
  i1100.pixelLightCount = i1101[18]
  i1100.realtimeReflectionProbes = !!i1101[19]
  i1100.shadowCascade2Split = i1101[20]
  i1100.shadowCascade4Split = new pc.Vec3( i1101[21], i1101[22], i1101[23] )
  i1100.streamingMipmapsActive = !!i1101[24]
  i1100.vSyncCount = i1101[25]
  i1100.asyncUploadBufferSize = i1101[26]
  i1100.asyncUploadTimeSlice = i1101[27]
  i1100.billboardsFaceCameraPosition = !!i1101[28]
  i1100.shadowNearPlaneOffset = i1101[29]
  i1100.streamingMipmapsMemoryBudget = i1101[30]
  i1100.maximumLODLevel = i1101[31]
  i1100.streamingMipmapsAddAllCameras = !!i1101[32]
  i1100.streamingMipmapsMaxLevelReduction = i1101[33]
  i1100.streamingMipmapsRenderersPerFrame = i1101[34]
  i1100.resolutionScalingFixedDPIFactor = i1101[35]
  i1100.streamingMipmapsMaxFileIORequests = i1101[36]
  i1100.currentQualityLevel = i1101[37]
  return i1100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1111 = data
  i1110.weight = i1111[0]
  i1110.vertices = i1111[1]
  i1110.normals = i1111[2]
  i1110.tangents = i1111[3]
  return i1110
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1112 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1113 = data
  request.r(i1113[0], i1113[1], 0, i1112, 'm_ObjectArgument')
  i1112.m_ObjectArgumentAssemblyTypeName = i1113[2]
  i1112.m_IntArgument = i1113[3]
  i1112.m_FloatArgument = i1113[4]
  i1112.m_StringArgument = i1113[5]
  i1112.m_BoolArgument = !!i1113[6]
  return i1112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1117 = data
  i1116.mode = i1117[0]
  i1116.parameter = i1117[1]
  i1116.threshold = i1117[2]
  return i1116
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1118 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1119 = data
  i1118.xPlacement = i1119[0]
  i1118.yPlacement = i1119[1]
  i1118.xAdvance = i1119[2]
  i1118.yAdvance = i1119[3]
  return i1118
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.CharacterController":{"enabled":0,"center":1,"radius":4,"height":5,"minMoveDistance":6,"skinWidth":7,"enableOverlapRecovery":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"58":[59],"60":[59],"61":[59],"62":[59],"63":[59],"64":[59],"65":[66],"67":[29],"68":[20],"69":[20],"70":[20],"71":[20],"72":[20],"73":[20],"74":[20],"75":[76],"77":[76],"78":[76],"79":[76],"80":[76],"81":[76],"82":[76],"83":[76],"84":[76],"85":[76],"86":[76],"87":[76],"88":[76],"89":[29],"90":[3],"91":[92],"93":[92],"32":[7],"94":[7],"95":[7],"34":[32],"10":[8,7],"96":[7],"33":[32],"97":[7],"98":[7],"99":[7],"100":[7],"101":[7],"102":[7],"103":[7],"104":[7],"105":[7],"106":[8,7],"107":[7],"108":[7],"109":[7],"110":[7],"111":[8,7],"112":[7],"113":[39],"114":[39],"40":[39],"115":[39],"116":[29],"117":[29],"118":[7],"119":[3,7],"36":[7,8],"120":[7],"121":[8,7],"122":[3],"123":[8,7],"124":[7],"125":[126],"127":[128],"129":[128],"130":[128],"131":[128],"132":[128],"133":[128],"134":[8,7],"128":[7],"135":[128],"136":[128],"137":[128],"138":[126],"139":[126]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.MonoBehaviour","SimpleInputNamespace.Joystick","Logic.Items.Tree","Logic.Items.ItemSpawner","UnityEngine.GameObject","Logic.Items.ItemMovePoints","Logic.Items.ItemMover","UnityEngine.BoxCollider","UnityEngine.Rigidbody","Logic.Place.TreeLoadPlace","Logic.Points.ItemMovePoint","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","Logic.Items.Timber","TextureAnimator","Logic.Items.Money","Logic.Place.TimberUnloadPlace","UnityEngine.Camera","UnityEngine.AudioListener","CameraLogic.CameraFollow","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","Logic.MoneyManager","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Light","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Infrastructure.GameBootstrapper","Forklift.ForkliftMover","UnityEngine.CharacterController","Forklift.ForkliftMovePoints","Forklift.ForkliftMoneyHandler","Logic.Place.TreeUnloadPlace","Logic.Place.MoneyLoadPlace","Logic.Items.MoneyMovePoints","Logic.Place.MoneyUnloadPlace","UI.FillableBar3D","UnityEngine.Cubemap","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","SimpleInputNamespace.AxisInputMoveGesture","SimpleInputNamespace.SimpleInputMultiDragListener","SimpleInputNamespace.AxisInputPinchGesture","SimpleInputNamespace.AxisInputRotateGesture","SimpleInputNamespace.AxisInputSwipeGesture","SimpleInputNamespace.Touchpad","SimpleInputNamespace.ButtonInputSwipeGesture","SimpleInputNamespace.NonDrawingGraphic","SimpleInputNamespace.SwipeGestureBase`2","SimpleInputNamespace.KeyInputSwipeGesture","SimpleInputNamespace.MouseButtonInputSwipeGesture","Unity.VisualScripting.StateMachine","Unity.VisualScripting.ScriptMachine"]

Deserializers.unityVersion = "2022.3.58f1";

Deserializers.productName = "Lumber2";

Deserializers.lunaInitializationTime = "04/08/2025 09:56:16";

Deserializers.lunaDaysRunning = "7.3";

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

Deserializers.buildID = "18264939-199b-40c7-afd0-fa2fb2e560d6";

Deserializers.runtimeInitializeOnLoadInfos = [[["SimpleInput","Init"],["UnityEditor","Recorder","RecorderWindow","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

