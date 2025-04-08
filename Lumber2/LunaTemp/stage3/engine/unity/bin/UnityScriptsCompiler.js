if ( TRACE ) { TRACE( JSON.parse( '["CodeBase.CameraLogic.CameraFollow#LateUpdate","CodeBase.CameraLogic.CameraFollow#Follow","CodeBase.CameraLogic.CameraFollow#FollowingPointPosition","CodeBase.Constants#init","CodeBase.Hero.HeroMove#init","CodeBase.Hero.HeroMove#Awake","CodeBase.Hero.HeroMove#Start","CodeBase.Hero.HeroMove#Update","CodeBase.Hero.HeroMove#CameraFollow","CodeBase.Infrastructure.Game#RegisterInputService","CodeBase.Infrastructure.Game#ctor","CodeBase.Infrastructure.GameBootstrapper#Awake","SimpleInput#TrackUnityInput#get","SimpleInput#TrackUnityInput#set","SimpleInput#init","SimpleInput#Init","SimpleInput#OnSceneChanged","SimpleInput#GetAxis","SimpleInput#GetAxisRaw","SimpleInput#GetButtonDown","SimpleInput#GetButton","SimpleInput#GetButtonUp","SimpleInput#GetMouseButtonDown","SimpleInput#GetMouseButton","SimpleInput#GetMouseButtonUp","SimpleInput#GetKeyDown","SimpleInput#GetKey","SimpleInput#GetKeyUp","SimpleInput#RegisterAxis","SimpleInput#UnregisterAxis","SimpleInput#RegisterButton","SimpleInput#UnregisterButton","SimpleInput#RegisterMouseButton","SimpleInput#UnregisterMouseButton","SimpleInput#RegisterKey","SimpleInput#UnregisterKey","SimpleInput#TrackAxis","SimpleInput#TrackButton","SimpleInput#TrackMouseButton","SimpleInput#Awake","SimpleInput#Start","SimpleInput#OnDestroy","SimpleInput#Update","SimpleInput.Axis#init","SimpleInput.Axis#ctor","SimpleInput.Button#init","SimpleInput.Button#ctor","SimpleInput.Key#init","SimpleInput.Key#ctor","SimpleInput.MouseButton#init","SimpleInput.MouseButton#ctor","SimpleInputHelper#TriggerButtonClick","SimpleInputHelper#TriggerMouseButtonClick","SimpleInputHelper#TriggerKeyClick","SimpleInputNamespace.AxisInputKeyboard#init","SimpleInputNamespace.AxisInputKeyboard#OnEnable","SimpleInputNamespace.AxisInputKeyboard#OnDisable","SimpleInputNamespace.AxisInputKeyboard#OnUpdate","SimpleInputNamespace.AxisInputMouse#init","SimpleInputNamespace.AxisInputMouse#OnEnable","SimpleInputNamespace.AxisInputMouse#OnDisable","SimpleInputNamespace.AxisInputMouse#OnUpdate","SimpleInputNamespace.SelectivePointerInput#init","SimpleInputNamespace.SelectivePointerInput#GetSatisfyingPointer","SimpleInputNamespace.AxisInputUI#init","SimpleInputNamespace.AxisInputUI#Awake","SimpleInputNamespace.AxisInputUI#OnEnable","SimpleInputNamespace.AxisInputUI#OnDisable","SimpleInputNamespace.AxisInputUI#OnPointerDown","SimpleInputNamespace.AxisInputUI#OnPointerUp","SimpleInputNamespace.ButtonInputKeyboard#init","SimpleInputNamespace.ButtonInputKeyboard#OnEnable","SimpleInputNamespace.ButtonInputKeyboard#OnDisable","SimpleInputNamespace.ButtonInputKeyboard#OnUpdate","SimpleInputNamespace.ButtonInputUI#init","SimpleInputNamespace.ButtonInputUI#Awake","SimpleInputNamespace.ButtonInputUI#OnEnable","SimpleInputNamespace.ButtonInputUI#OnDisable","SimpleInputNamespace.ButtonInputUI#OnPointerDown","SimpleInputNamespace.ButtonInputUI#OnPointerUp","SimpleInputNamespace.KeyInputKeyboard#init","SimpleInputNamespace.KeyInputKeyboard#OnEnable","SimpleInputNamespace.KeyInputKeyboard#OnDisable","SimpleInputNamespace.KeyInputKeyboard#OnUpdate","SimpleInputNamespace.KeyInputUI#init","SimpleInputNamespace.KeyInputUI#Awake","SimpleInputNamespace.KeyInputUI#OnEnable","SimpleInputNamespace.KeyInputUI#OnDisable","SimpleInputNamespace.KeyInputUI#OnPointerDown","SimpleInputNamespace.KeyInputUI#OnPointerUp","SimpleInputNamespace.MouseButtonInputKeyboard#init","SimpleInputNamespace.MouseButtonInputKeyboard#OnEnable","SimpleInputNamespace.MouseButtonInputKeyboard#OnDisable","SimpleInputNamespace.MouseButtonInputKeyboard#OnUpdate","SimpleInputNamespace.MouseButtonInputUI#init","SimpleInputNamespace.MouseButtonInputUI#Awake","SimpleInputNamespace.MouseButtonInputUI#OnEnable","SimpleInputNamespace.MouseButtonInputUI#OnDisable","SimpleInputNamespace.MouseButtonInputUI#OnPointerDown","SimpleInputNamespace.MouseButtonInputUI#OnPointerUp","SimpleInputNamespace.NonDrawingGraphic#SetMaterialDirty","SimpleInputNamespace.NonDrawingGraphic#SetVerticesDirty","SimpleInputNamespace.NonDrawingGraphic#OnPopulateMesh","SimpleInputNamespace.SimpleInputDragListener#init","SimpleInputNamespace.SimpleInputDragListener#Awake","SimpleInputNamespace.SimpleInputDragListener#OnPointerDown","SimpleInputNamespace.SimpleInputDragListener#OnDrag","SimpleInputNamespace.SimpleInputDragListener#OnPointerUp","SimpleInputNamespace.SimpleInputDragListener#Stop","SimpleInputNamespace.SimpleInputMultiDragListener#init","SimpleInputNamespace.SimpleInputMultiDragListener#init","SimpleInputNamespace.SimpleInputMultiDragListener#Awake","SimpleInputNamespace.SimpleInputMultiDragListener#OnEnable","SimpleInputNamespace.SimpleInputMultiDragListener#OnDisable","SimpleInputNamespace.SimpleInputMultiDragListener#AddListener","SimpleInputNamespace.SimpleInputMultiDragListener#RemoveListener","SimpleInputNamespace.SimpleInputMultiDragListener#OnUpdate","SimpleInputNamespace.SimpleInputMultiDragListener#OnPointerDown","SimpleInputNamespace.SimpleInputMultiDragListener#OnPointerUp","SimpleInputNamespace.SimpleInputMultiDragListener#ValidatePointers","SimpleInputNamespace.SimpleInputUtils#ResolutionMultiplier#get","SimpleInputNamespace.SimpleInputUtils#init","SimpleInputNamespace.SimpleInputUtils#IsTouchInput","SimpleInputNamespace.SimpleInputUtils#IsValid","SimpleInputNamespace.UnityInputProvider#Awake","SimpleInputNamespace.UnityInputProvider#OnEnable","SimpleInputNamespace.UnityInputProvider#OnDisable","SimpleInputNamespace.UnityInputProvider#OnUpdate","CodeBase.Services.Input.InputService#init","CodeBase.Services.Input.InputService#SimpleInputAxis","CodeBase.Services.Input.InputService#IsAttackButtonUp","SimpleInputNamespace.BaseInput$2#Key#get","SimpleInputNamespace.BaseInput$2#Key#set","SimpleInputNamespace.BaseInput$2#init","SimpleInputNamespace.BaseInput$2#ctor","SimpleInputNamespace.BaseInput$2#$ctor1","SimpleInputNamespace.BaseInput$2#StartTracking","SimpleInputNamespace.BaseInput$2#StopTracking","SimpleInputNamespace.BaseInput$2#ResetValue","SimpleInputNamespace.BaseInput$2#IsKeyValid","SimpleInputNamespace.AxisInputMoveGesture#Priority#get","SimpleInputNamespace.AxisInputMoveGesture#init","SimpleInputNamespace.AxisInputMoveGesture#Awake","SimpleInputNamespace.AxisInputMoveGesture#OnEnable","SimpleInputNamespace.AxisInputMoveGesture#OnDisable","SimpleInputNamespace.AxisInputMoveGesture#OnUpdate","SimpleInputNamespace.AxisInputPinchGesture#Priority#get","SimpleInputNamespace.AxisInputPinchGesture#init","SimpleInputNamespace.AxisInputPinchGesture#Awake","SimpleInputNamespace.AxisInputPinchGesture#OnEnable","SimpleInputNamespace.AxisInputPinchGesture#OnDisable","SimpleInputNamespace.AxisInputPinchGesture#OnUpdate","SimpleInputNamespace.AxisInputRotateGesture#init","SimpleInputNamespace.AxisInputRotateGesture#Priority#get","SimpleInputNamespace.AxisInputRotateGesture#init","SimpleInputNamespace.AxisInputRotateGesture#Awake","SimpleInputNamespace.AxisInputRotateGesture#OnEnable","SimpleInputNamespace.AxisInputRotateGesture#OnDisable","SimpleInputNamespace.AxisInputRotateGesture#OnUpdate","SimpleInputNamespace.SwipeGestureBase$2#init","SimpleInputNamespace.SwipeGestureBase$2#Awake","SimpleInputNamespace.SwipeGestureBase$2#OnEnable","SimpleInputNamespace.SwipeGestureBase$2#OnDisable","SimpleInputNamespace.SwipeGestureBase$2#OnUpdate","SimpleInputNamespace.SwipeGestureBase$2#IsSwipeSatisfied","SimpleInputNamespace.AxisInputUIArrows#Value#get","SimpleInputNamespace.AxisInputUIArrows#init","SimpleInputNamespace.AxisInputUIArrows#Awake","SimpleInputNamespace.AxisInputUIArrows#OnEnable","SimpleInputNamespace.AxisInputUIArrows#OnDisable","SimpleInputNamespace.AxisInputUIArrows#OnPointerDown","SimpleInputNamespace.AxisInputUIArrows#OnDrag","SimpleInputNamespace.AxisInputUIArrows#OnPointerUp","SimpleInputNamespace.AxisInputUIArrows#CalculateInput","SimpleInputNamespace.Dpad#Value#get","SimpleInputNamespace.Dpad#init","SimpleInputNamespace.Dpad#Awake","SimpleInputNamespace.Dpad#OnEnable","SimpleInputNamespace.Dpad#OnDisable","SimpleInputNamespace.Dpad#OnPointerDown","SimpleInputNamespace.Dpad#OnDrag","SimpleInputNamespace.Dpad#OnPointerUp","SimpleInputNamespace.Dpad#CalculateInput","SimpleInputNamespace.Joystick#Value#get","SimpleInputNamespace.Joystick#init","SimpleInputNamespace.Joystick#Awake","SimpleInputNamespace.Joystick#Start","SimpleInputNamespace.Joystick#OnEnable","SimpleInputNamespace.Joystick#OnDisable","SimpleInputNamespace.Joystick#OnPointerDown","SimpleInputNamespace.Joystick#OnDrag","SimpleInputNamespace.Joystick#OnPointerUp","SimpleInputNamespace.Joystick#OnUpdate","SimpleInputNamespace.SteeringWheel#Value#get","SimpleInputNamespace.SteeringWheel#Angle#get","SimpleInputNamespace.SteeringWheel#init","SimpleInputNamespace.SteeringWheel#Awake","SimpleInputNamespace.SteeringWheel#OnEnable","SimpleInputNamespace.SteeringWheel#OnDisable","SimpleInputNamespace.SteeringWheel#OnUpdate","SimpleInputNamespace.SteeringWheel#OnPointerDown","SimpleInputNamespace.SteeringWheel#OnDrag","SimpleInputNamespace.SteeringWheel#OnPointerUp","SimpleInputNamespace.Touchpad#Priority#get","SimpleInputNamespace.Touchpad#Value#get","SimpleInputNamespace.Touchpad#init","SimpleInputNamespace.Touchpad#Awake","SimpleInputNamespace.Touchpad#OnEnable","SimpleInputNamespace.Touchpad#OnDisable","SimpleInputNamespace.Touchpad#OnUpdate","CodeBase.Services.Input.MobileInputService#Axis#get","CodeBase.Services.Input.StandaloneInputService#UnityAxis","CodeBase.Services.Input.StandaloneInputService#Axis#get","SimpleInput.AxisInput#ctor","SimpleInput.AxisInput#$ctor1","SimpleInput.AxisInput#IsKeyValid","SimpleInput.AxisInput#KeysEqual","SimpleInput.AxisInput#RegisterInput","SimpleInput.AxisInput#UnregisterInput","SimpleInput.ButtonInput#ctor","SimpleInput.ButtonInput#$ctor1","SimpleInput.ButtonInput#IsKeyValid","SimpleInput.ButtonInput#KeysEqual","SimpleInput.ButtonInput#RegisterInput","SimpleInput.ButtonInput#UnregisterInput","SimpleInput.KeyInput#ctor","SimpleInput.KeyInput#$ctor1","SimpleInput.KeyInput#KeysEqual","SimpleInput.KeyInput#RegisterInput","SimpleInput.KeyInput#UnregisterInput","SimpleInput.MouseButtonInput#ctor","SimpleInput.MouseButtonInput#$ctor1","SimpleInput.MouseButtonInput#KeysEqual","SimpleInput.MouseButtonInput#RegisterInput","SimpleInput.MouseButtonInput#UnregisterInput","SimpleInputNamespace.AxisInputSwipeGesture#Input#get","SimpleInputNamespace.AxisInputSwipeGesture#Value#get","SimpleInputNamespace.AxisInputSwipeGesture#Priority#get","SimpleInputNamespace.AxisInputSwipeGesture#init","SimpleInputNamespace.ButtonInputSwipeGesture#Input#get","SimpleInputNamespace.ButtonInputSwipeGesture#Value#get","SimpleInputNamespace.ButtonInputSwipeGesture#Priority#get","SimpleInputNamespace.ButtonInputSwipeGesture#init","SimpleInputNamespace.KeyInputSwipeGesture#Input#get","SimpleInputNamespace.KeyInputSwipeGesture#Value#get","SimpleInputNamespace.KeyInputSwipeGesture#Priority#get","SimpleInputNamespace.KeyInputSwipeGesture#init","SimpleInputNamespace.MouseButtonInputSwipeGesture#Input#get","SimpleInputNamespace.MouseButtonInputSwipeGesture#Value#get","SimpleInputNamespace.MouseButtonInputSwipeGesture#Priority#get","SimpleInputNamespace.MouseButtonInputSwipeGesture#init","SimpleInputHelper.ButtonClickInput#ctor","SimpleInputHelper.ButtonClickInput#OnUpdate","SimpleInputHelper.KeyClickInput#ctor","SimpleInputHelper.KeyClickInput#OnUpdate","SimpleInputHelper.MouseButtonClickInput#ctor","SimpleInputHelper.MouseButtonClickInput#OnUpdate"]' ) ); }
/**
 * @version 1.0.9229.26137
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*CodeBase.CameraLogic.CameraFollow start.*/
    Bridge.define("CodeBase.CameraLogic.CameraFollow", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            RotationAngleX: 0,
            Distance: 0,
            OffsetY: 0,
            _following: null
        },
        methods: {
            /*CodeBase.CameraLogic.CameraFollow.LateUpdate start.*/
            LateUpdate: function () {
if ( TRACE ) { TRACE( "CodeBase.CameraLogic.CameraFollow#LateUpdate", this ); }

                if (UnityEngine.Component.op_Equality(this._following, null)) {
                    return;
                }
                var rotation = new pc.Quat().setFromEulerAngles_Unity( this.RotationAngleX, 0, 0 );
                var position = rotation.transformVector( new pc.Vec3( 0, 0, ((-this.Distance) | 0) ) ).add( this.FollowingPointPosition() );
                this.transform.rotation = rotation.$clone();
                this.transform.position = position.$clone();
            },
            /*CodeBase.CameraLogic.CameraFollow.LateUpdate end.*/

            /*CodeBase.CameraLogic.CameraFollow.Follow start.*/
            Follow: function (following) {
if ( TRACE ) { TRACE( "CodeBase.CameraLogic.CameraFollow#Follow", this ); }

                this._following = following.transform;
            },
            /*CodeBase.CameraLogic.CameraFollow.Follow end.*/

            /*CodeBase.CameraLogic.CameraFollow.FollowingPointPosition start.*/
            FollowingPointPosition: function () {
if ( TRACE ) { TRACE( "CodeBase.CameraLogic.CameraFollow#FollowingPointPosition", this ); }

                var followingPosition = this._following.position.$clone();
                followingPosition.y += this.OffsetY;
                return followingPosition.$clone();
            },
            /*CodeBase.CameraLogic.CameraFollow.FollowingPointPosition end.*/


        }
    });
    /*CodeBase.CameraLogic.CameraFollow end.*/

    /*CodeBase.Constants start.*/
    Bridge.define("CodeBase.Constants", {
        statics: {
            fields: {
                Epsilon: 0
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "CodeBase.Constants#init", this ); }

                    this.Epsilon = 0.001;
                }
            }
        }
    });
    /*CodeBase.Constants end.*/

    /*CodeBase.Hero.HeroMove start.*/
    Bridge.define("CodeBase.Hero.HeroMove", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            CharacterController: null,
            MovementSpeed: 0,
            _inputService: null,
            _camera: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "CodeBase.Hero.HeroMove#init", this ); }

                this.MovementSpeed = 4.0;
            }
        },
        methods: {
            /*CodeBase.Hero.HeroMove.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "CodeBase.Hero.HeroMove#Awake", this ); }

                this._inputService = CodeBase.Infrastructure.Game.InputService;
            },
            /*CodeBase.Hero.HeroMove.Awake end.*/

            /*CodeBase.Hero.HeroMove.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "CodeBase.Hero.HeroMove#Start", this ); }

                this._camera = UnityEngine.Camera.main;
                this.CameraFollow();
            },
            /*CodeBase.Hero.HeroMove.Start end.*/

            /*CodeBase.Hero.HeroMove.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "CodeBase.Hero.HeroMove#Update", this ); }

                var movementVector = pc.Vec3.ZERO.clone();

                if (this._inputService.CodeBase$Services$Input$IInputService$Axis.lengthSq() > CodeBase.Constants.Epsilon) {
                    movementVector = this._camera.transform.TransformDirection$1(UnityEngine.Vector3.FromVector2(this._inputService.CodeBase$Services$Input$IInputService$Axis.$clone()));
                    movementVector.y = 0;
                    movementVector.normalize();

                    this.transform.forward = movementVector.$clone();
                }

                movementVector = movementVector.$clone().add( UnityEngine.Physics.gravity.$clone() );

                this.CharacterController.Move(movementVector.clone().scale( this.MovementSpeed ).clone().scale( UnityEngine.Time.deltaTime ));
            },
            /*CodeBase.Hero.HeroMove.Update end.*/

            /*CodeBase.Hero.HeroMove.CameraFollow start.*/
            CameraFollow: function () {
if ( TRACE ) { TRACE( "CodeBase.Hero.HeroMove#CameraFollow", this ); }

                this._camera.GetComponent(CodeBase.CameraLogic.CameraFollow).Follow(this.gameObject);
            },
            /*CodeBase.Hero.HeroMove.CameraFollow end.*/


        }
    });
    /*CodeBase.Hero.HeroMove end.*/

    /*CodeBase.Infrastructure.Game start.*/
    Bridge.define("CodeBase.Infrastructure.Game", {
        statics: {
            fields: {
                InputService: null
            },
            methods: {
                /*CodeBase.Infrastructure.Game.RegisterInputService:static start.*/
                RegisterInputService: function () {
if ( TRACE ) { TRACE( "CodeBase.Infrastructure.Game#RegisterInputService", this ); }

                    if (UnityEngine.Application.isEditor) {
                        CodeBase.Infrastructure.Game.InputService = new CodeBase.Services.Input.StandaloneInputService();
                    } else {
                        CodeBase.Infrastructure.Game.InputService = new CodeBase.Services.Input.MobileInputService();
                    }
                },
                /*CodeBase.Infrastructure.Game.RegisterInputService:static end.*/


            }
        },
        ctors: {
            ctor: function () {
if ( TRACE ) { TRACE( "CodeBase.Infrastructure.Game#ctor", this ); }

                this.$initialize();
                CodeBase.Infrastructure.Game.RegisterInputService();
            }
        }
    });
    /*CodeBase.Infrastructure.Game end.*/

    /*CodeBase.Infrastructure.GameBootstrapper start.*/
    Bridge.define("CodeBase.Infrastructure.GameBootstrapper", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _game: null
        },
        methods: {
            /*CodeBase.Infrastructure.GameBootstrapper.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "CodeBase.Infrastructure.GameBootstrapper#Awake", this ); }

                this._game = new CodeBase.Infrastructure.Game();

                UnityEngine.MonoBehaviour.DontDestroyOnLoad(this);
            },
            /*CodeBase.Infrastructure.GameBootstrapper.Awake end.*/


        }
    });
    /*CodeBase.Infrastructure.GameBootstrapper end.*/

    /*CodeBase.Services.Input.IInputService start.*/
    Bridge.define("CodeBase.Services.Input.IInputService", {
        $kind: 3
    });
    /*CodeBase.Services.Input.IInputService end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*SimpleInput start.*/
    Bridge.define("SimpleInput", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                /**
                 * Lerp modifier to move SimpleInput.GetAxis' value towards SimpleInput.GetAxisRaw's value
                 *
                 * @static
                 * @public
                 * @memberof SimpleInput
                 * @default 20.0
                 * @type number
                 */
                GetAxisSensitivity: 0,
                /**
                 * When SimpleInput.GetAxisRaw's value is 0f and SimpleInput.GetAxis' value is within this range, SimpleInput.GetAxis' value will snap to 0f
                 *
                 * @static
                 * @public
                 * @memberof SimpleInput
                 * @default 0.025
                 * @type number
                 */
                GetAxisDeadZone: 0,
                /**
                 * If set to true and the values of SimpleInput.GetAxis and SimpleInput.GetAxisRaw have different signs, SimpleInput.GetAxis will jump to 0f and continue from there
                 *
                 * @static
                 * @public
                 * @memberof SimpleInput
                 * @default true
                 * @type boolean
                 */
                GetAxisSnapValue: false,
                /**
                 * Sets whether or not Time.timeScale should affect SimpleInput.GetAxis' sensitivity
                 *
                 * @static
                 * @public
                 * @memberof SimpleInput
                 * @default true
                 * @type boolean
                 */
                GetAxisTimeScaleDependent: false,
                m_trackUnityInput: false,
                instance: null,
                axes: null,
                axesList: null,
                trackedUnityAxes: null,
                trackedTemporaryAxes: null,
                buttons: null,
                buttonsList: null,
                trackedUnityButtons: null,
                trackedTemporaryButtons: null,
                mouseButtons: null,
                mouseButtonsList: null,
                trackedUnityMouseButtons: null,
                trackedTemporaryMouseButtons: null,
                keys: null,
                keysList: null
            },
            events: {
                OnUpdate: null
            },
            props: {
                TrackUnityInput: {
                    get: function () {
if ( TRACE ) { TRACE( "SimpleInput#TrackUnityInput#get", this ); }

                        return SimpleInput.m_trackUnityInput;
                    },
                    set: function (value) {
if ( TRACE ) { TRACE( "SimpleInput#TrackUnityInput#set", this ); }

                        if (SimpleInput.m_trackUnityInput !== value) {
                            SimpleInput.m_trackUnityInput = value;

                            if (!SimpleInput.m_trackUnityInput) {
                                for (var i = 0; i < SimpleInput.trackedUnityAxes.Count; i = (i + 1) | 0) {
                                    SimpleInput.trackedUnityAxes.getItem(i).ResetValue();
                                }

                                for (var i1 = 0; i1 < SimpleInput.trackedUnityButtons.Count; i1 = (i1 + 1) | 0) {
                                    SimpleInput.trackedUnityButtons.getItem(i1).ResetValue();
                                }

                                for (var i2 = 0; i2 < SimpleInput.trackedUnityMouseButtons.Count; i2 = (i2 + 1) | 0) {
                                    SimpleInput.trackedUnityMouseButtons.getItem(i2).ResetValue();
                                }
                            }
                        }
                    }
                }
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "SimpleInput#init", this ); }

                    this.GetAxisSensitivity = 20.0;
                    this.GetAxisDeadZone = 0.025;
                    this.GetAxisSnapValue = true;
                    this.GetAxisTimeScaleDependent = true;
                    this.m_trackUnityInput = true;
                    this.axes = new (System.Collections.Generic.Dictionary$2(System.String,SimpleInput.Axis)).ctor();
                    this.axesList = new (System.Collections.Generic.List$1(SimpleInput.Axis)).ctor();
                    this.trackedUnityAxes = new (System.Collections.Generic.List$1(SimpleInput.AxisInput)).ctor();
                    this.trackedTemporaryAxes = new (System.Collections.Generic.List$1(SimpleInput.AxisInput)).ctor();
                    this.buttons = new (System.Collections.Generic.Dictionary$2(System.String,SimpleInput.Button)).ctor();
                    this.buttonsList = new (System.Collections.Generic.List$1(SimpleInput.Button)).ctor();
                    this.trackedUnityButtons = new (System.Collections.Generic.List$1(SimpleInput.ButtonInput)).ctor();
                    this.trackedTemporaryButtons = new (System.Collections.Generic.List$1(SimpleInput.ButtonInput)).ctor();
                    this.mouseButtons = new (System.Collections.Generic.Dictionary$2(System.Int32,SimpleInput.MouseButton)).ctor();
                    this.mouseButtonsList = new (System.Collections.Generic.List$1(SimpleInput.MouseButton)).ctor();
                    this.trackedUnityMouseButtons = new (System.Collections.Generic.List$1(SimpleInput.MouseButtonInput)).ctor();
                    this.trackedTemporaryMouseButtons = new (System.Collections.Generic.List$1(SimpleInput.MouseButtonInput)).ctor();
                    this.keys = new (System.Collections.Generic.Dictionary$2(UnityEngine.KeyCode,SimpleInput.Key)).ctor();
                    this.keysList = new (System.Collections.Generic.List$1(SimpleInput.Key)).ctor();
                }
            },
            methods: {
                /*SimpleInput.Init:static start.*/
                Init: function () {
if ( TRACE ) { TRACE( "SimpleInput#Init", this ); }

                    // Initialize singleton instance
                    SimpleInput.instance = new UnityEngine.GameObject.$ctor2("SimpleInput").AddComponent(SimpleInput);
                    UnityEngine.Object.DontDestroyOnLoad(SimpleInput.instance.gameObject);
                },
                /*SimpleInput.Init:static end.*/

                /*SimpleInput.OnSceneChanged:static start.*/
                OnSceneChanged: function (scene, loadSceneMode) {
if ( TRACE ) { TRACE( "SimpleInput#OnSceneChanged", this ); }

                    for (var i = 0; i < SimpleInput.trackedTemporaryAxes.Count; i = (i + 1) | 0) {
                        SimpleInput.trackedTemporaryAxes.getItem(i).StopTracking();
                    }

                    for (var i1 = 0; i1 < SimpleInput.trackedTemporaryButtons.Count; i1 = (i1 + 1) | 0) {
                        SimpleInput.trackedTemporaryButtons.getItem(i1).StopTracking();
                    }

                    for (var i2 = 0; i2 < SimpleInput.trackedTemporaryMouseButtons.Count; i2 = (i2 + 1) | 0) {
                        SimpleInput.trackedTemporaryMouseButtons.getItem(i2).StopTracking();
                    }

                    SimpleInput.trackedTemporaryAxes.clear();
                    SimpleInput.trackedTemporaryButtons.clear();
                    SimpleInput.trackedTemporaryMouseButtons.clear();
                },
                /*SimpleInput.OnSceneChanged:static end.*/

                /*SimpleInput.GetAxis:static start.*/
                GetAxis: function (axis) {
if ( TRACE ) { TRACE( "SimpleInput#GetAxis", this ); }

                    var axisInput = { };
                    if (SimpleInput.axes.tryGetValue(axis, axisInput)) {
                        return axisInput.v.value;
                    }

                    // Try to increase the hit-rate of the above if statement
                    // by tracking the corresponding Unity axis (if exists)
                    // or using a dummy (temporary) AxisInput
                    SimpleInput.TrackAxis(axis);
                    return 0.0;
                },
                /*SimpleInput.GetAxis:static end.*/

                /*SimpleInput.GetAxisRaw:static start.*/
                GetAxisRaw: function (axis) {
if ( TRACE ) { TRACE( "SimpleInput#GetAxisRaw", this ); }

                    var axisInput = { };
                    if (SimpleInput.axes.tryGetValue(axis, axisInput)) {
                        return axisInput.v.valueRaw;
                    }

                    SimpleInput.TrackAxis(axis);
                    return 0.0;
                },
                /*SimpleInput.GetAxisRaw:static end.*/

                /*SimpleInput.GetButtonDown:static start.*/
                GetButtonDown: function (button) {
if ( TRACE ) { TRACE( "SimpleInput#GetButtonDown", this ); }

                    var buttonInput = { };
                    if (SimpleInput.buttons.tryGetValue(button, buttonInput)) {
                        return buttonInput.v.state === SimpleInput.InputState.Pressed;
                    }

                    // Try to increase the hit-rate of the above if statement
                    // by tracking the corresponding Unity button (if exists)
                    // or using a dummy (temporary) ButtonInput
                    SimpleInput.TrackButton(button);
                    return false;
                },
                /*SimpleInput.GetButtonDown:static end.*/

                /*SimpleInput.GetButton:static start.*/
                GetButton: function (button) {
if ( TRACE ) { TRACE( "SimpleInput#GetButton", this ); }

                    var buttonInput = { };
                    if (SimpleInput.buttons.tryGetValue(button, buttonInput)) {
                        return buttonInput.v.state === SimpleInput.InputState.Held || buttonInput.v.state === SimpleInput.InputState.Pressed;
                    }

                    SimpleInput.TrackButton(button);
                    return false;
                },
                /*SimpleInput.GetButton:static end.*/

                /*SimpleInput.GetButtonUp:static start.*/
                GetButtonUp: function (button) {
if ( TRACE ) { TRACE( "SimpleInput#GetButtonUp", this ); }

                    var buttonInput = { };
                    if (SimpleInput.buttons.tryGetValue(button, buttonInput)) {
                        return buttonInput.v.state === SimpleInput.InputState.Released;
                    }

                    SimpleInput.TrackButton(button);
                    return false;
                },
                /*SimpleInput.GetButtonUp:static end.*/

                /*SimpleInput.GetMouseButtonDown:static start.*/
                GetMouseButtonDown: function (button) {
if ( TRACE ) { TRACE( "SimpleInput#GetMouseButtonDown", this ); }

                    var mouseButtonInput = { };
                    if (SimpleInput.mouseButtons.tryGetValue(button, mouseButtonInput)) {
                        return mouseButtonInput.v.state === SimpleInput.InputState.Pressed;
                    }

                    // Try to increase the hit-rate of the above if statement
                    // by tracking the corresponding Unity mouse button (if exists)
                    // or using a dummy (temporary) MouseButtonInput
                    SimpleInput.TrackMouseButton(button);
                    return false;
                },
                /*SimpleInput.GetMouseButtonDown:static end.*/

                /*SimpleInput.GetMouseButton:static start.*/
                GetMouseButton: function (button) {
if ( TRACE ) { TRACE( "SimpleInput#GetMouseButton", this ); }

                    var mouseButtonInput = { };
                    if (SimpleInput.mouseButtons.tryGetValue(button, mouseButtonInput)) {
                        return mouseButtonInput.v.state === SimpleInput.InputState.Held || mouseButtonInput.v.state === SimpleInput.InputState.Pressed;
                    }

                    SimpleInput.TrackMouseButton(button);
                    return false;
                },
                /*SimpleInput.GetMouseButton:static end.*/

                /*SimpleInput.GetMouseButtonUp:static start.*/
                GetMouseButtonUp: function (button) {
if ( TRACE ) { TRACE( "SimpleInput#GetMouseButtonUp", this ); }

                    var mouseButtonInput = { };
                    if (SimpleInput.mouseButtons.tryGetValue(button, mouseButtonInput)) {
                        return mouseButtonInput.v.state === SimpleInput.InputState.Released;
                    }

                    SimpleInput.TrackMouseButton(button);
                    return false;
                },
                /*SimpleInput.GetMouseButtonUp:static end.*/

                /*SimpleInput.GetKeyDown:static start.*/
                GetKeyDown: function (key) {
if ( TRACE ) { TRACE( "SimpleInput#GetKeyDown", this ); }

                    if (SimpleInput.TrackUnityInput && UnityEngine.Input.GetKeyDown(key)) {
                        return true;
                    }

                    var keyInput = { };
                    if (SimpleInput.keys.tryGetValue(key, keyInput)) {
                        return keyInput.v.state === SimpleInput.InputState.Pressed;
                    }

                    return false;
                },
                /*SimpleInput.GetKeyDown:static end.*/

                /*SimpleInput.GetKey:static start.*/
                GetKey: function (key) {
if ( TRACE ) { TRACE( "SimpleInput#GetKey", this ); }

                    if (SimpleInput.TrackUnityInput && UnityEngine.Input.GetKey(key)) {
                        return true;
                    }

                    var keyInput = { };
                    if (SimpleInput.keys.tryGetValue(key, keyInput)) {
                        return keyInput.v.state === SimpleInput.InputState.Held || keyInput.v.state === SimpleInput.InputState.Pressed;
                    }

                    return false;
                },
                /*SimpleInput.GetKey:static end.*/

                /*SimpleInput.GetKeyUp:static start.*/
                GetKeyUp: function (key) {
if ( TRACE ) { TRACE( "SimpleInput#GetKeyUp", this ); }

                    if (SimpleInput.TrackUnityInput && UnityEngine.Input.GetKeyUp(key)) {
                        return true;
                    }

                    var keyInput = { };
                    if (SimpleInput.keys.tryGetValue(key, keyInput)) {
                        return keyInput.v.state === SimpleInput.InputState.Released;
                    }

                    return false;
                },
                /*SimpleInput.GetKeyUp:static end.*/

                /*SimpleInput.RegisterAxis:static start.*/
                RegisterAxis: function (input) {
if ( TRACE ) { TRACE( "SimpleInput#RegisterAxis", this ); }

                    var axisObj = { };
                    if (!SimpleInput.axes.tryGetValue(input.Key, axisObj)) {
                        axisObj.v = new SimpleInput.Axis(input.Key);

                        SimpleInput.axes.setItem(input.Key, axisObj.v);
                        SimpleInput.axesList.add(axisObj.v);

                        // Track corresponding Unity input as well, if exists
                        SimpleInput.TrackAxis(input.Key, true);
                    }

                    axisObj.v.inputs.add(input);
                },
                /*SimpleInput.RegisterAxis:static end.*/

                /*SimpleInput.UnregisterAxis:static start.*/
                UnregisterAxis: function (input) {
if ( TRACE ) { TRACE( "SimpleInput#UnregisterAxis", this ); }

                    var axisObj = { };
                    if (SimpleInput.axes.tryGetValue(input.Key, axisObj)) {
                        if (axisObj.v.inputs.remove(input) && axisObj.v.inputs.Count === 0) {
                            SimpleInput.axes.remove(input.Key);
                            SimpleInput.axesList.remove(axisObj.v);
                        }
                    }
                },
                /*SimpleInput.UnregisterAxis:static end.*/

                /*SimpleInput.RegisterButton:static start.*/
                RegisterButton: function (input) {
if ( TRACE ) { TRACE( "SimpleInput#RegisterButton", this ); }

                    var buttonObj = { };
                    if (!SimpleInput.buttons.tryGetValue(input.Key, buttonObj)) {
                        buttonObj.v = new SimpleInput.Button(input.Key);

                        SimpleInput.buttons.setItem(input.Key, buttonObj.v);
                        SimpleInput.buttonsList.add(buttonObj.v);

                        // Track corresponding Unity input as well, if exists
                        SimpleInput.TrackButton(input.Key, true);
                    }

                    buttonObj.v.inputs.add(input);
                },
                /*SimpleInput.RegisterButton:static end.*/

                /*SimpleInput.UnregisterButton:static start.*/
                UnregisterButton: function (input) {
if ( TRACE ) { TRACE( "SimpleInput#UnregisterButton", this ); }

                    var buttonObj = { };
                    if (SimpleInput.buttons.tryGetValue(input.Key, buttonObj)) {
                        if (buttonObj.v.inputs.remove(input) && buttonObj.v.inputs.Count === 0) {
                            SimpleInput.buttons.remove(input.Key);
                            SimpleInput.buttonsList.remove(buttonObj.v);
                        }
                    }
                },
                /*SimpleInput.UnregisterButton:static end.*/

                /*SimpleInput.RegisterMouseButton:static start.*/
                RegisterMouseButton: function (input) {
if ( TRACE ) { TRACE( "SimpleInput#RegisterMouseButton", this ); }

                    var mouseButtonObj = { };
                    if (!SimpleInput.mouseButtons.tryGetValue(input.Key, mouseButtonObj)) {
                        mouseButtonObj.v = new SimpleInput.MouseButton(input.Key);

                        SimpleInput.mouseButtons.setItem(input.Key, mouseButtonObj.v);
                        SimpleInput.mouseButtonsList.add(mouseButtonObj.v);

                        // Track corresponding Unity input as well, if exists
                        SimpleInput.TrackMouseButton(input.Key, true);
                    }

                    mouseButtonObj.v.inputs.add(input);
                },
                /*SimpleInput.RegisterMouseButton:static end.*/

                /*SimpleInput.UnregisterMouseButton:static start.*/
                UnregisterMouseButton: function (input) {
if ( TRACE ) { TRACE( "SimpleInput#UnregisterMouseButton", this ); }

                    var mouseButtonObj = { };
                    if (SimpleInput.mouseButtons.tryGetValue(input.Key, mouseButtonObj)) {
                        if (mouseButtonObj.v.inputs.remove(input) && mouseButtonObj.v.inputs.Count === 0) {
                            SimpleInput.mouseButtons.remove(input.Key);
                            SimpleInput.mouseButtonsList.remove(mouseButtonObj.v);
                        }
                    }
                },
                /*SimpleInput.UnregisterMouseButton:static end.*/

                /*SimpleInput.RegisterKey:static start.*/
                RegisterKey: function (input) {
if ( TRACE ) { TRACE( "SimpleInput#RegisterKey", this ); }

                    var keyObj = { };
                    if (!SimpleInput.keys.tryGetValue(input.Key, keyObj)) {
                        keyObj.v = new SimpleInput.Key(input.Key);

                        SimpleInput.keys.setItem(input.Key, keyObj.v);
                        SimpleInput.keysList.add(keyObj.v);
                    }

                    keyObj.v.inputs.add(input);
                },
                /*SimpleInput.RegisterKey:static end.*/

                /*SimpleInput.UnregisterKey:static start.*/
                UnregisterKey: function (input) {
if ( TRACE ) { TRACE( "SimpleInput#UnregisterKey", this ); }

                    var keyObj = { };
                    if (SimpleInput.keys.tryGetValue(input.Key, keyObj)) {
                        if (keyObj.v.inputs.remove(input) && keyObj.v.inputs.Count === 0) {
                            SimpleInput.keys.remove(input.Key);
                            SimpleInput.keysList.remove(keyObj.v);
                        }
                    }
                },
                /*SimpleInput.UnregisterKey:static end.*/

                /*SimpleInput.TrackAxis:static start.*/
                TrackAxis: function (axis, trackUnityAxisOnly) {
if ( TRACE ) { TRACE( "SimpleInput#TrackAxis", this ); }

                    var $t;
                    if (trackUnityAxisOnly === void 0) { trackUnityAxisOnly = false; }
                    try {
                        var unityAxis = ($t = new SimpleInput.AxisInput.$ctor1(axis), $t.value = UnityEngine.Input.GetAxisRaw(axis), $t);
                        if (!SimpleInput.m_trackUnityInput) {
                            unityAxis.ResetValue();
                        }

                        SimpleInput.trackedUnityAxes.add(unityAxis);
                        unityAxis.StartTracking();
                    } catch ($e1) {
                        $e1 = System.Exception.create($e1);
                        if (!trackUnityAxisOnly) {
                            var temporaryAxis = ($t = new SimpleInput.AxisInput.$ctor1(axis), $t.value = 0.0, $t);
                            SimpleInput.trackedTemporaryAxes.add(temporaryAxis);
                            temporaryAxis.StartTracking();
                        }
                    }
                },
                /*SimpleInput.TrackAxis:static end.*/

                /*SimpleInput.TrackButton:static start.*/
                TrackButton: function (button, trackUnityButtonOnly) {
if ( TRACE ) { TRACE( "SimpleInput#TrackButton", this ); }

                    var $t;
                    if (trackUnityButtonOnly === void 0) { trackUnityButtonOnly = false; }
                    try {
                        var unityButton = ($t = new SimpleInput.ButtonInput.$ctor1(button), $t.value = UnityEngine.Input.GetButton(button), $t);
                        if (!SimpleInput.m_trackUnityInput) {
                            unityButton.ResetValue();
                        }

                        SimpleInput.trackedUnityButtons.add(unityButton);
                        unityButton.StartTracking();
                    } catch ($e1) {
                        $e1 = System.Exception.create($e1);
                        if (!trackUnityButtonOnly) {
                            var temporaryButton = ($t = new SimpleInput.ButtonInput.$ctor1(button), $t.value = false, $t);
                            SimpleInput.trackedTemporaryButtons.add(temporaryButton);
                            temporaryButton.StartTracking();
                        }
                    }
                },
                /*SimpleInput.TrackButton:static end.*/

                /*SimpleInput.TrackMouseButton:static start.*/
                TrackMouseButton: function (button, trackUnityMouseButtonOnly) {
if ( TRACE ) { TRACE( "SimpleInput#TrackMouseButton", this ); }

                    var $t;
                    if (trackUnityMouseButtonOnly === void 0) { trackUnityMouseButtonOnly = false; }
                    try {
                        var unityMouseButton = ($t = new SimpleInput.MouseButtonInput.$ctor1(button), $t.value = UnityEngine.Input.GetMouseButton(button), $t);
                        if (!SimpleInput.m_trackUnityInput) {
                            unityMouseButton.ResetValue();
                        }

                        SimpleInput.trackedUnityMouseButtons.add(unityMouseButton);
                        unityMouseButton.StartTracking();
                    } catch ($e1) {
                        $e1 = System.Exception.create($e1);
                        if (!trackUnityMouseButtonOnly) {
                            var temporaryMouseButton = ($t = new SimpleInput.MouseButtonInput.$ctor1(button), $t.value = false, $t);
                            SimpleInput.trackedTemporaryMouseButtons.add(temporaryMouseButton);
                            temporaryMouseButton.StartTracking();
                        }
                    }
                },
                /*SimpleInput.TrackMouseButton:static end.*/


            }
        },
        methods: {
            /*SimpleInput.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "SimpleInput#Awake", this ); }

                UnityEngine.SceneManagement.SceneManager.addsceneLoaded(SimpleInput.OnSceneChanged);
            },
            /*SimpleInput.Awake end.*/

            /*SimpleInput.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "SimpleInput#Start", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this, SimpleInput.instance)) {
                    UnityEngine.Object.Destroy(this);
                }
            },
            /*SimpleInput.Start end.*/

            /*SimpleInput.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "SimpleInput#OnDestroy", this ); }

                UnityEngine.SceneManagement.SceneManager.removesceneLoaded(SimpleInput.OnSceneChanged);
            },
            /*SimpleInput.OnDestroy end.*/

            /*SimpleInput.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "SimpleInput#Update", this ); }

                if (!Bridge.staticEquals(SimpleInput.OnUpdate, null)) {
                    SimpleInput.OnUpdate();
                }

                if (SimpleInput.m_trackUnityInput) {
                    for (var i = 0; i < SimpleInput.trackedUnityAxes.Count; i = (i + 1) | 0) {
                        SimpleInput.trackedUnityAxes.getItem(i).value = UnityEngine.Input.GetAxisRaw(SimpleInput.trackedUnityAxes.getItem(i).Key);
                    }

                    for (var i1 = 0; i1 < SimpleInput.trackedUnityButtons.Count; i1 = (i1 + 1) | 0) {
                        SimpleInput.trackedUnityButtons.getItem(i1).value = UnityEngine.Input.GetButton(SimpleInput.trackedUnityButtons.getItem(i1).Key);
                    }

                    for (var i2 = 0; i2 < SimpleInput.trackedUnityMouseButtons.Count; i2 = (i2 + 1) | 0) {
                        SimpleInput.trackedUnityMouseButtons.getItem(i2).value = UnityEngine.Input.GetMouseButton(SimpleInput.trackedUnityMouseButtons.getItem(i2).Key);
                    }
                }

                var sensitivity = SimpleInput.GetAxisSensitivity * (SimpleInput.GetAxisTimeScaleDependent ? UnityEngine.Time.deltaTime : UnityEngine.Time.unscaledDeltaTime);

                for (var i3 = 0; i3 < SimpleInput.axesList.Count; i3 = (i3 + 1) | 0) {
                    var axis = SimpleInput.axesList.getItem(i3);

                    axis.valueRaw = 0.0;
                    for (var j = (axis.inputs.Count - 1) | 0; j >= 0; j = (j - 1) | 0) {
                        var input = axis.inputs.getItem(j);
                        if (input.value !== 0.0) {
                            axis.valueRaw = input.value;
                            break;
                        }
                    }

                    if (axis.value >= 0) {
                        axis.value = pc.math.lerp(axis.valueRaw >= 0 || !SimpleInput.GetAxisSnapValue ? axis.value : 0, axis.valueRaw, sensitivity);
                    } else {
                        axis.value = pc.math.lerp(axis.valueRaw <= 0 || !SimpleInput.GetAxisSnapValue ? axis.value : 0, axis.valueRaw, sensitivity);
                    }

                    if (axis.valueRaw === 0.0 && axis.value !== 0.0) {
                        if (Math.abs(axis.value) < SimpleInput.GetAxisDeadZone) {
                            axis.value = 0.0;
                        }
                    }
                }

                for (var i4 = 0; i4 < SimpleInput.buttonsList.Count; i4 = (i4 + 1) | 0) {
                    var button = SimpleInput.buttonsList.getItem(i4);

                    var isDown = false;
                    for (var j1 = (button.inputs.Count - 1) | 0; j1 >= 0; j1 = (j1 - 1) | 0) {
                        var input1 = button.inputs.getItem(j1);
                        if (input1.value) {
                            isDown = true;
                            break;
                        }
                    }

                    if (isDown) {
                        if (button.state === SimpleInput.InputState.None || button.state === SimpleInput.InputState.Released) {
                            button.state = SimpleInput.InputState.Pressed;
                        } else {
                            button.state = SimpleInput.InputState.Held;
                        }
                    } else {
                        if (button.state === SimpleInput.InputState.Pressed || button.state === SimpleInput.InputState.Held) {
                            button.state = SimpleInput.InputState.Released;
                        } else {
                            button.state = SimpleInput.InputState.None;
                        }
                    }
                }

                for (var i5 = 0; i5 < SimpleInput.mouseButtonsList.Count; i5 = (i5 + 1) | 0) {
                    var mouseButton = SimpleInput.mouseButtonsList.getItem(i5);

                    var isDown1 = false;
                    for (var j2 = (mouseButton.inputs.Count - 1) | 0; j2 >= 0; j2 = (j2 - 1) | 0) {
                        var input2 = mouseButton.inputs.getItem(j2);
                        if (input2.value) {
                            isDown1 = true;
                            break;
                        }
                    }

                    if (isDown1) {
                        if (mouseButton.state === SimpleInput.InputState.None || mouseButton.state === SimpleInput.InputState.Released) {
                            mouseButton.state = SimpleInput.InputState.Pressed;
                        } else {
                            mouseButton.state = SimpleInput.InputState.Held;
                        }
                    } else {
                        if (mouseButton.state === SimpleInput.InputState.Pressed || mouseButton.state === SimpleInput.InputState.Held) {
                            mouseButton.state = SimpleInput.InputState.Released;
                        } else {
                            mouseButton.state = SimpleInput.InputState.None;
                        }
                    }
                }

                for (var i6 = 0; i6 < SimpleInput.keysList.Count; i6 = (i6 + 1) | 0) {
                    var key = SimpleInput.keysList.getItem(i6);

                    var isDown2 = false;
                    for (var j3 = (key.inputs.Count - 1) | 0; j3 >= 0; j3 = (j3 - 1) | 0) {
                        var input3 = key.inputs.getItem(j3);
                        if (input3.value) {
                            isDown2 = true;
                            break;
                        }
                    }

                    if (isDown2) {
                        if (key.state === SimpleInput.InputState.None || key.state === SimpleInput.InputState.Released) {
                            key.state = SimpleInput.InputState.Pressed;
                        } else {
                            key.state = SimpleInput.InputState.Held;
                        }
                    } else {
                        if (key.state === SimpleInput.InputState.Pressed || key.state === SimpleInput.InputState.Held) {
                            key.state = SimpleInput.InputState.Released;
                        } else {
                            key.state = SimpleInput.InputState.None;
                        }
                    }
                }
            },
            /*SimpleInput.Update end.*/


        }
    });
    /*SimpleInput end.*/

    /*SimpleInput+Axis start.*/
    Bridge.define("SimpleInput.Axis", {
        $kind: 1002,
        fields: {
            name: null,
            inputs: null,
            value: 0,
            valueRaw: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SimpleInput.Axis#init", this ); }

                this.value = 0.0;
                this.valueRaw = 0.0;
            },
            ctor: function (axis) {
if ( TRACE ) { TRACE( "SimpleInput.Axis#ctor", this ); }

                this.$initialize();
                this.name = axis;
                this.inputs = new (System.Collections.Generic.List$1(SimpleInput.AxisInput)).ctor();
            }
        }
    });
    /*SimpleInput+Axis end.*/

    /*SimpleInputNamespace.IBaseInput start.*/
    Bridge.define("SimpleInputNamespace.IBaseInput", {
        $kind: 3
    });
    /*SimpleInputNamespace.IBaseInput end.*/

    /*SimpleInput+Button start.*/
    Bridge.define("SimpleInput.Button", {
        $kind: 1002,
        fields: {
            button: null,
            inputs: null,
            state: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SimpleInput.Button#init", this ); }

                this.state = SimpleInput.InputState.None;
            },
            ctor: function (button) {
if ( TRACE ) { TRACE( "SimpleInput.Button#ctor", this ); }

                this.$initialize();
                this.button = button;
                this.inputs = new (System.Collections.Generic.List$1(SimpleInput.ButtonInput)).ctor();
            }
        }
    });
    /*SimpleInput+Button end.*/

    /*SimpleInput+InputState start.*/
    Bridge.define("SimpleInput.InputState", {
        $kind: 1006,
        statics: {
            fields: {
                None: 0,
                Pressed: 1,
                Held: 2,
                Released: 3
            }
        }
    });
    /*SimpleInput+InputState end.*/

    /*SimpleInput+Key start.*/
    Bridge.define("SimpleInput.Key", {
        $kind: 1002,
        fields: {
            key: 0,
            inputs: null,
            state: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SimpleInput.Key#init", this ); }

                this.state = SimpleInput.InputState.None;
            },
            ctor: function (key) {
if ( TRACE ) { TRACE( "SimpleInput.Key#ctor", this ); }

                this.$initialize();
                this.key = key;
                this.inputs = new (System.Collections.Generic.List$1(SimpleInput.KeyInput)).ctor();
            }
        }
    });
    /*SimpleInput+Key end.*/

    /*SimpleInput+MouseButton start.*/
    Bridge.define("SimpleInput.MouseButton", {
        $kind: 1002,
        fields: {
            button: 0,
            inputs: null,
            state: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SimpleInput.MouseButton#init", this ); }

                this.state = SimpleInput.InputState.None;
            },
            ctor: function (button) {
if ( TRACE ) { TRACE( "SimpleInput.MouseButton#ctor", this ); }

                this.$initialize();
                this.button = button;
                this.inputs = new (System.Collections.Generic.List$1(SimpleInput.MouseButtonInput)).ctor();
            }
        }
    });
    /*SimpleInput+MouseButton end.*/

    /*SimpleInputHelper start.*/
    Bridge.define("SimpleInputHelper", {
        statics: {
            methods: {
                /*SimpleInputHelper.TriggerButtonClick:static start.*/
                TriggerButtonClick: function (button) {
if ( TRACE ) { TRACE( "SimpleInputHelper#TriggerButtonClick", this ); }

                    var buttonClick = new SimpleInputHelper.ButtonClickInput(button);
                    buttonClick.StartTracking();
                    SimpleInput.addOnUpdate(Bridge.fn.cacheBind(buttonClick, buttonClick.OnUpdate));
                },
                /*SimpleInputHelper.TriggerButtonClick:static end.*/

                /*SimpleInputHelper.TriggerMouseButtonClick:static start.*/
                TriggerMouseButtonClick: function (button) {
if ( TRACE ) { TRACE( "SimpleInputHelper#TriggerMouseButtonClick", this ); }

                    var mouseButtonClick = new SimpleInputHelper.MouseButtonClickInput(button);
                    mouseButtonClick.StartTracking();
                    SimpleInput.addOnUpdate(Bridge.fn.cacheBind(mouseButtonClick, mouseButtonClick.OnUpdate));
                },
                /*SimpleInputHelper.TriggerMouseButtonClick:static end.*/

                /*SimpleInputHelper.TriggerKeyClick:static start.*/
                TriggerKeyClick: function (key) {
if ( TRACE ) { TRACE( "SimpleInputHelper#TriggerKeyClick", this ); }

                    var keyClick = new SimpleInputHelper.KeyClickInput(key);
                    keyClick.StartTracking();
                    SimpleInput.addOnUpdate(Bridge.fn.cacheBind(keyClick, keyClick.OnUpdate));
                },
                /*SimpleInputHelper.TriggerKeyClick:static end.*/


            }
        }
    });
    /*SimpleInputHelper end.*/

    /*SimpleInputNamespace.AxisInputKeyboard start.*/
    Bridge.define("SimpleInputNamespace.AxisInputKeyboard", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            key: 0,
            axis: null,
            value: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.AxisInputKeyboard#init", this ); }

                this.axis = new SimpleInput.AxisInput.ctor();
                this.value = 1.0;
            }
        },
        methods: {
            /*SimpleInputNamespace.AxisInputKeyboard.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.AxisInputKeyboard#OnEnable", this ); }

                this.axis.StartTracking();
                SimpleInput.addOnUpdate(Bridge.fn.cacheBind(this, this.OnUpdate));
            },
            /*SimpleInputNamespace.AxisInputKeyboard.OnEnable end.*/

            /*SimpleInputNamespace.AxisInputKeyboard.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.AxisInputKeyboard#OnDisable", this ); }

                this.axis.StopTracking();
                SimpleInput.removeOnUpdate(Bridge.fn.cacheBind(this, this.OnUpdate));
            },
            /*SimpleInputNamespace.AxisInputKeyboard.OnDisable end.*/

            /*SimpleInputNamespace.AxisInputKeyboard.OnUpdate start.*/
            OnUpdate: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.AxisInputKeyboard#OnUpdate", this ); }

                this.axis.value = UnityEngine.Input.GetKey(this.key) ? this.value : 0.0;
            },
            /*SimpleInputNamespace.AxisInputKeyboard.OnUpdate end.*/


        }
    });
    /*SimpleInputNamespace.AxisInputKeyboard end.*/

    /*SimpleInputNamespace.AxisInputMouse start.*/
    Bridge.define("SimpleInputNamespace.AxisInputMouse", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            xAxis: null,
            yAxis: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.AxisInputMouse#init", this ); }

                this.xAxis = new SimpleInput.AxisInput.ctor();
                this.yAxis = new SimpleInput.AxisInput.ctor();
            }
        },
        methods: {
            /*SimpleInputNamespace.AxisInputMouse.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.AxisInputMouse#OnEnable", this ); }

                this.xAxis.StartTracking();
                this.yAxis.StartTracking();

                SimpleInput.addOnUpdate(Bridge.fn.cacheBind(this, this.OnUpdate));
            },
            /*SimpleInputNamespace.AxisInputMouse.OnEnable end.*/

            /*SimpleInputNamespace.AxisInputMouse.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.AxisInputMouse#OnDisable", this ); }

                this.xAxis.StopTracking();
                this.yAxis.StopTracking();

                SimpleInput.removeOnUpdate(Bridge.fn.cacheBind(this, this.OnUpdate));
            },
            /*SimpleInputNamespace.AxisInputMouse.OnDisable end.*/

            /*SimpleInputNamespace.AxisInputMouse.OnUpdate start.*/
            OnUpdate: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.AxisInputMouse#OnUpdate", this ); }

                if (UnityEngine.Input.touchCount === 0) {
                    this.xAxis.value = UnityEngine.Input.GetAxisRaw("Mouse X");
                    this.yAxis.value = UnityEngine.Input.GetAxisRaw("Mouse Y");
                } else {
                    this.xAxis.value = 0.0;
                    this.yAxis.value = 0.0;
                }
            },
            /*SimpleInputNamespace.AxisInputMouse.OnUpdate end.*/


        }
    });
    /*SimpleInputNamespace.AxisInputMouse end.*/

    /*SimpleInputNamespace.ISimpleInputDraggableMultiTouch start.*/
    Bridge.define("SimpleInputNamespace.ISimpleInputDraggableMultiTouch", {
        $kind: 3
    });
    /*SimpleInputNamespace.ISimpleInputDraggableMultiTouch end.*/

    /*SimpleInputNamespace.SelectivePointerInput start.*/
    Bridge.define("SimpleInputNamespace.SelectivePointerInput", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            allowTouchInput: false,
            allowedMouseButtons: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.SelectivePointerInput#init", this ); }

                this.allowTouchInput = true;
                this.allowedMouseButtons = function (_o1) {
                        _o1.add(UnityEngine.EventSystems.PointerEventData.InputButton.Left);
                        _o1.add(UnityEngine.EventSystems.PointerEventData.InputButton.Right);
                        _o1.add(UnityEngine.EventSystems.PointerEventData.InputButton.Middle);
                        return _o1;
                    }(new (System.Collections.Generic.List$1(UnityEngine.EventSystems.PointerEventData.InputButton)).ctor());
            }
        },
        methods: {
            /*SimpleInputNamespace.SelectivePointerInput.GetSatisfyingPointer start.*/
            GetSatisfyingPointer: function (mousePointers, touchPointers) {
if ( TRACE ) { TRACE( "SimpleInputNamespace.SelectivePointerInput#GetSatisfyingPointer", this ); }

                if (this.allowTouchInput && touchPointers.Count > 0) {
                    return touchPointers.getItem(((touchPointers.Count - 1) | 0));
                }

                if (mousePointers.Count > 0) {
                    for (var i = (mousePointers.Count - 1) | 0; i >= 0; i = (i - 1) | 0) {
                        var mouseButton = mousePointers.getItem(i).button;
                        for (var j = 0; j < this.allowedMouseButtons.Count; j = (j + 1) | 0) {
                            if (this.allowedMouseButtons.getItem(j) === mouseButton) {
                                return mousePointers.getItem(i);
                            }
                        }
                    }
                }

                return null;
            },
            /*SimpleInputNamespace.SelectivePointerInput.GetSatisfyingPointer end.*/


        }
    });
    /*SimpleInputNamespace.SelectivePointerInput end.*/

    /*SimpleInputNamespace.AxisInputUI start.*/
    Bridge.define("SimpleInputNamespace.AxisInputUI", {
        inherits: [UnityEngine.MonoBehaviour,UnityEngine.EventSystems.IPointerDownHandler,UnityEngine.EventSystems.IPointerUpHandler],
        fields: {
            axis: null,
            value: 0
        },
        alias: [
            "OnPointerDown", "UnityEngine$EventSystems$IPointerDownHandler$OnPointerDown",
            "OnPointerUp", "UnityEngine$EventSystems$IPointerUpHandler$OnPointerUp"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.AxisInputUI#init", this ); }

                this.axis = new SimpleInput.AxisInput.ctor();
                this.value = 1.0;
            }
        },
        methods: {
            /*SimpleInputNamespace.AxisInputUI.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.AxisInputUI#Awake", this ); }

                var graphic = this.GetComponent(UnityEngine.UI.Graphic);
                if (UnityEngine.MonoBehaviour.op_Inequality(graphic, null)) {
                    graphic.raycastTarget = true;
                }
            },
            /*SimpleInputNamespace.AxisInputUI.Awake end.*/

            /*SimpleInputNamespace.AxisInputUI.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.AxisInputUI#OnEnable", this ); }

                this.axis.StartTracking();
            },
            /*SimpleInputNamespace.AxisInputUI.OnEnable end.*/

            /*SimpleInputNamespace.AxisInputUI.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.AxisInputUI#OnDisable", this ); }

                this.axis.StopTracking();
            },
            /*SimpleInputNamespace.AxisInputUI.OnDisable end.*/

            /*SimpleInputNamespace.AxisInputUI.OnPointerDown start.*/
            OnPointerDown: function (eventData) {
if ( TRACE ) { TRACE( "SimpleInputNamespace.AxisInputUI#OnPointerDown", this ); }

                this.axis.value = this.value;
            },
            /*SimpleInputNamespace.AxisInputUI.OnPointerDown end.*/

            /*SimpleInputNamespace.AxisInputUI.OnPointerUp start.*/
            OnPointerUp: function (eventData) {
if ( TRACE ) { TRACE( "SimpleInputNamespace.AxisInputUI#OnPointerUp", this ); }

                this.axis.value = 0.0;
            },
            /*SimpleInputNamespace.AxisInputUI.OnPointerUp end.*/


        }
    });
    /*SimpleInputNamespace.AxisInputUI end.*/

    /*SimpleInputNamespace.ISimpleInputDraggable start.*/
    Bridge.define("SimpleInputNamespace.ISimpleInputDraggable", {
        $kind: 3
    });
    /*SimpleInputNamespace.ISimpleInputDraggable end.*/

    /*SimpleInputNamespace.ButtonInputKeyboard start.*/
    Bridge.define("SimpleInputNamespace.ButtonInputKeyboard", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            key: 0,
            button: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.ButtonInputKeyboard#init", this ); }

                this.button = new SimpleInput.ButtonInput.ctor();
            }
        },
        methods: {
            /*SimpleInputNamespace.ButtonInputKeyboard.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.ButtonInputKeyboard#OnEnable", this ); }

                this.button.StartTracking();
                SimpleInput.addOnUpdate(Bridge.fn.cacheBind(this, this.OnUpdate));
            },
            /*SimpleInputNamespace.ButtonInputKeyboard.OnEnable end.*/

            /*SimpleInputNamespace.ButtonInputKeyboard.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.ButtonInputKeyboard#OnDisable", this ); }

                this.button.StopTracking();
                SimpleInput.removeOnUpdate(Bridge.fn.cacheBind(this, this.OnUpdate));
            },
            /*SimpleInputNamespace.ButtonInputKeyboard.OnDisable end.*/

            /*SimpleInputNamespace.ButtonInputKeyboard.OnUpdate start.*/
            OnUpdate: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.ButtonInputKeyboard#OnUpdate", this ); }

                this.button.value = UnityEngine.Input.GetKey(this.key);
            },
            /*SimpleInputNamespace.ButtonInputKeyboard.OnUpdate end.*/


        }
    });
    /*SimpleInputNamespace.ButtonInputKeyboard end.*/

    /*SimpleInputNamespace.ButtonInputUI start.*/
    Bridge.define("SimpleInputNamespace.ButtonInputUI", {
        inherits: [UnityEngine.MonoBehaviour,UnityEngine.EventSystems.IPointerDownHandler,UnityEngine.EventSystems.IPointerUpHandler],
        fields: {
            button: null
        },
        alias: [
            "OnPointerDown", "UnityEngine$EventSystems$IPointerDownHandler$OnPointerDown",
            "OnPointerUp", "UnityEngine$EventSystems$IPointerUpHandler$OnPointerUp"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.ButtonInputUI#init", this ); }

                this.button = new SimpleInput.ButtonInput.ctor();
            }
        },
        methods: {
            /*SimpleInputNamespace.ButtonInputUI.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.ButtonInputUI#Awake", this ); }

                var graphic = this.GetComponent(UnityEngine.UI.Graphic);
                if (UnityEngine.MonoBehaviour.op_Inequality(graphic, null)) {
                    graphic.raycastTarget = true;
                }
            },
            /*SimpleInputNamespace.ButtonInputUI.Awake end.*/

            /*SimpleInputNamespace.ButtonInputUI.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.ButtonInputUI#OnEnable", this ); }

                this.button.StartTracking();
            },
            /*SimpleInputNamespace.ButtonInputUI.OnEnable end.*/

            /*SimpleInputNamespace.ButtonInputUI.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.ButtonInputUI#OnDisable", this ); }

                this.button.StopTracking();
            },
            /*SimpleInputNamespace.ButtonInputUI.OnDisable end.*/

            /*SimpleInputNamespace.ButtonInputUI.OnPointerDown start.*/
            OnPointerDown: function (eventData) {
if ( TRACE ) { TRACE( "SimpleInputNamespace.ButtonInputUI#OnPointerDown", this ); }

                this.button.value = true;
            },
            /*SimpleInputNamespace.ButtonInputUI.OnPointerDown end.*/

            /*SimpleInputNamespace.ButtonInputUI.OnPointerUp start.*/
            OnPointerUp: function (eventData) {
if ( TRACE ) { TRACE( "SimpleInputNamespace.ButtonInputUI#OnPointerUp", this ); }

                this.button.value = false;
            },
            /*SimpleInputNamespace.ButtonInputUI.OnPointerUp end.*/


        }
    });
    /*SimpleInputNamespace.ButtonInputUI end.*/

    /*SimpleInputNamespace.Joystick+MovementAxes start.*/
    Bridge.define("SimpleInputNamespace.Joystick.MovementAxes", {
        $kind: 1006,
        statics: {
            fields: {
                XandY: 0,
                X: 1,
                Y: 2
            }
        }
    });
    /*SimpleInputNamespace.Joystick+MovementAxes end.*/

    /*SimpleInputNamespace.KeyInputKeyboard start.*/
    Bridge.define("SimpleInputNamespace.KeyInputKeyboard", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            realKey: 0,
            key: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.KeyInputKeyboard#init", this ); }

                this.key = new SimpleInput.KeyInput.ctor();
            }
        },
        methods: {
            /*SimpleInputNamespace.KeyInputKeyboard.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.KeyInputKeyboard#OnEnable", this ); }

                this.key.StartTracking();
                SimpleInput.addOnUpdate(Bridge.fn.cacheBind(this, this.OnUpdate));
            },
            /*SimpleInputNamespace.KeyInputKeyboard.OnEnable end.*/

            /*SimpleInputNamespace.KeyInputKeyboard.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.KeyInputKeyboard#OnDisable", this ); }

                this.key.StopTracking();
                SimpleInput.removeOnUpdate(Bridge.fn.cacheBind(this, this.OnUpdate));
            },
            /*SimpleInputNamespace.KeyInputKeyboard.OnDisable end.*/

            /*SimpleInputNamespace.KeyInputKeyboard.OnUpdate start.*/
            OnUpdate: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.KeyInputKeyboard#OnUpdate", this ); }

                this.key.value = UnityEngine.Input.GetKey(this.realKey);
            },
            /*SimpleInputNamespace.KeyInputKeyboard.OnUpdate end.*/


        }
    });
    /*SimpleInputNamespace.KeyInputKeyboard end.*/

    /*SimpleInputNamespace.KeyInputUI start.*/
    Bridge.define("SimpleInputNamespace.KeyInputUI", {
        inherits: [UnityEngine.MonoBehaviour,UnityEngine.EventSystems.IPointerDownHandler,UnityEngine.EventSystems.IPointerUpHandler],
        fields: {
            key: null
        },
        alias: [
            "OnPointerDown", "UnityEngine$EventSystems$IPointerDownHandler$OnPointerDown",
            "OnPointerUp", "UnityEngine$EventSystems$IPointerUpHandler$OnPointerUp"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.KeyInputUI#init", this ); }

                this.key = new SimpleInput.KeyInput.ctor();
            }
        },
        methods: {
            /*SimpleInputNamespace.KeyInputUI.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.KeyInputUI#Awake", this ); }

                var graphic = this.GetComponent(UnityEngine.UI.Graphic);
                if (UnityEngine.MonoBehaviour.op_Inequality(graphic, null)) {
                    graphic.raycastTarget = true;
                }
            },
            /*SimpleInputNamespace.KeyInputUI.Awake end.*/

            /*SimpleInputNamespace.KeyInputUI.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.KeyInputUI#OnEnable", this ); }

                this.key.StartTracking();
            },
            /*SimpleInputNamespace.KeyInputUI.OnEnable end.*/

            /*SimpleInputNamespace.KeyInputUI.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.KeyInputUI#OnDisable", this ); }

                this.key.StopTracking();
            },
            /*SimpleInputNamespace.KeyInputUI.OnDisable end.*/

            /*SimpleInputNamespace.KeyInputUI.OnPointerDown start.*/
            OnPointerDown: function (eventData) {
if ( TRACE ) { TRACE( "SimpleInputNamespace.KeyInputUI#OnPointerDown", this ); }

                this.key.value = true;
            },
            /*SimpleInputNamespace.KeyInputUI.OnPointerDown end.*/

            /*SimpleInputNamespace.KeyInputUI.OnPointerUp start.*/
            OnPointerUp: function (eventData) {
if ( TRACE ) { TRACE( "SimpleInputNamespace.KeyInputUI#OnPointerUp", this ); }

                this.key.value = false;
            },
            /*SimpleInputNamespace.KeyInputUI.OnPointerUp end.*/


        }
    });
    /*SimpleInputNamespace.KeyInputUI end.*/

    /*SimpleInputNamespace.MouseButtonInputKeyboard start.*/
    Bridge.define("SimpleInputNamespace.MouseButtonInputKeyboard", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            key: 0,
            mouseButton: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.MouseButtonInputKeyboard#init", this ); }

                this.mouseButton = new SimpleInput.MouseButtonInput.ctor();
            }
        },
        methods: {
            /*SimpleInputNamespace.MouseButtonInputKeyboard.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.MouseButtonInputKeyboard#OnEnable", this ); }

                this.mouseButton.StartTracking();
                SimpleInput.addOnUpdate(Bridge.fn.cacheBind(this, this.OnUpdate));
            },
            /*SimpleInputNamespace.MouseButtonInputKeyboard.OnEnable end.*/

            /*SimpleInputNamespace.MouseButtonInputKeyboard.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.MouseButtonInputKeyboard#OnDisable", this ); }

                this.mouseButton.StopTracking();
                SimpleInput.removeOnUpdate(Bridge.fn.cacheBind(this, this.OnUpdate));
            },
            /*SimpleInputNamespace.MouseButtonInputKeyboard.OnDisable end.*/

            /*SimpleInputNamespace.MouseButtonInputKeyboard.OnUpdate start.*/
            OnUpdate: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.MouseButtonInputKeyboard#OnUpdate", this ); }

                this.mouseButton.value = UnityEngine.Input.GetKey(this.key);
            },
            /*SimpleInputNamespace.MouseButtonInputKeyboard.OnUpdate end.*/


        }
    });
    /*SimpleInputNamespace.MouseButtonInputKeyboard end.*/

    /*SimpleInputNamespace.MouseButtonInputUI start.*/
    Bridge.define("SimpleInputNamespace.MouseButtonInputUI", {
        inherits: [UnityEngine.MonoBehaviour,UnityEngine.EventSystems.IPointerDownHandler,UnityEngine.EventSystems.IPointerUpHandler],
        fields: {
            mouseButton: null
        },
        alias: [
            "OnPointerDown", "UnityEngine$EventSystems$IPointerDownHandler$OnPointerDown",
            "OnPointerUp", "UnityEngine$EventSystems$IPointerUpHandler$OnPointerUp"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.MouseButtonInputUI#init", this ); }

                this.mouseButton = new SimpleInput.MouseButtonInput.ctor();
            }
        },
        methods: {
            /*SimpleInputNamespace.MouseButtonInputUI.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.MouseButtonInputUI#Awake", this ); }

                var graphic = this.GetComponent(UnityEngine.UI.Graphic);
                if (UnityEngine.MonoBehaviour.op_Inequality(graphic, null)) {
                    graphic.raycastTarget = true;
                }
            },
            /*SimpleInputNamespace.MouseButtonInputUI.Awake end.*/

            /*SimpleInputNamespace.MouseButtonInputUI.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.MouseButtonInputUI#OnEnable", this ); }

                this.mouseButton.StartTracking();
            },
            /*SimpleInputNamespace.MouseButtonInputUI.OnEnable end.*/

            /*SimpleInputNamespace.MouseButtonInputUI.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.MouseButtonInputUI#OnDisable", this ); }

                this.mouseButton.StopTracking();
            },
            /*SimpleInputNamespace.MouseButtonInputUI.OnDisable end.*/

            /*SimpleInputNamespace.MouseButtonInputUI.OnPointerDown start.*/
            OnPointerDown: function (eventData) {
if ( TRACE ) { TRACE( "SimpleInputNamespace.MouseButtonInputUI#OnPointerDown", this ); }

                this.mouseButton.value = true;
            },
            /*SimpleInputNamespace.MouseButtonInputUI.OnPointerDown end.*/

            /*SimpleInputNamespace.MouseButtonInputUI.OnPointerUp start.*/
            OnPointerUp: function (eventData) {
if ( TRACE ) { TRACE( "SimpleInputNamespace.MouseButtonInputUI#OnPointerUp", this ); }

                this.mouseButton.value = false;
            },
            /*SimpleInputNamespace.MouseButtonInputUI.OnPointerUp end.*/


        }
    });
    /*SimpleInputNamespace.MouseButtonInputUI end.*/

    /*SimpleInputNamespace.NonDrawingGraphic start.*/
    Bridge.define("SimpleInputNamespace.NonDrawingGraphic", {
        inherits: [UnityEngine.UI.Graphic],
        methods: {
            /*SimpleInputNamespace.NonDrawingGraphic.SetMaterialDirty start.*/
            SetMaterialDirty: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.NonDrawingGraphic#SetMaterialDirty", this ); }

                return;
            },
            /*SimpleInputNamespace.NonDrawingGraphic.SetMaterialDirty end.*/

            /*SimpleInputNamespace.NonDrawingGraphic.SetVerticesDirty start.*/
            SetVerticesDirty: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.NonDrawingGraphic#SetVerticesDirty", this ); }

                return;
            },
            /*SimpleInputNamespace.NonDrawingGraphic.SetVerticesDirty end.*/

            /*SimpleInputNamespace.NonDrawingGraphic.OnPopulateMesh start.*/
            OnPopulateMesh: function (vh) {
if ( TRACE ) { TRACE( "SimpleInputNamespace.NonDrawingGraphic#OnPopulateMesh", this ); }

                vh.Clear();
                return;
            },
            /*SimpleInputNamespace.NonDrawingGraphic.OnPopulateMesh end.*/


        }
    });
    /*SimpleInputNamespace.NonDrawingGraphic end.*/

    /*SimpleInputNamespace.SimpleInputDragListener start.*/
    Bridge.define("SimpleInputNamespace.SimpleInputDragListener", {
        inherits: [UnityEngine.MonoBehaviour,UnityEngine.EventSystems.IPointerDownHandler,UnityEngine.EventSystems.IDragHandler,UnityEngine.EventSystems.IPointerUpHandler],
        fields: {
            Listener: null,
            pointerId: 0
        },
        alias: [
            "OnPointerDown", "UnityEngine$EventSystems$IPointerDownHandler$OnPointerDown",
            "OnDrag", "UnityEngine$EventSystems$IDragHandler$OnDrag",
            "OnPointerUp", "UnityEngine$EventSystems$IPointerUpHandler$OnPointerUp"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.SimpleInputDragListener#init", this ); }

                this.pointerId = -98765;
            }
        },
        methods: {
            /*SimpleInputNamespace.SimpleInputDragListener.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.SimpleInputDragListener#Awake", this ); }

                var graphic = this.GetComponent(UnityEngine.UI.Graphic);
                if (!UnityEngine.Object.op_Implicit(graphic)) {
                    graphic = this.gameObject.AddComponent(SimpleInputNamespace.NonDrawingGraphic);
                }

                graphic.raycastTarget = true;
            },
            /*SimpleInputNamespace.SimpleInputDragListener.Awake end.*/

            /*SimpleInputNamespace.SimpleInputDragListener.OnPointerDown start.*/
            OnPointerDown: function (eventData) {
if ( TRACE ) { TRACE( "SimpleInputNamespace.SimpleInputDragListener#OnPointerDown", this ); }

                this.Listener.SimpleInputNamespace$ISimpleInputDraggable$OnPointerDown(eventData);
                this.pointerId = eventData.pointerId;
            },
            /*SimpleInputNamespace.SimpleInputDragListener.OnPointerDown end.*/

            /*SimpleInputNamespace.SimpleInputDragListener.OnDrag start.*/
            OnDrag: function (eventData) {
if ( TRACE ) { TRACE( "SimpleInputNamespace.SimpleInputDragListener#OnDrag", this ); }

                if (this.pointerId !== eventData.pointerId) {
                    return;
                }

                this.Listener.SimpleInputNamespace$ISimpleInputDraggable$OnDrag(eventData);
            },
            /*SimpleInputNamespace.SimpleInputDragListener.OnDrag end.*/

            /*SimpleInputNamespace.SimpleInputDragListener.OnPointerUp start.*/
            OnPointerUp: function (eventData) {
if ( TRACE ) { TRACE( "SimpleInputNamespace.SimpleInputDragListener#OnPointerUp", this ); }

                if (this.pointerId !== eventData.pointerId) {
                    return;
                }

                this.Listener.SimpleInputNamespace$ISimpleInputDraggable$OnPointerUp(eventData);
                this.pointerId = SimpleInputNamespace.SimpleInputUtils.NON_EXISTING_TOUCH;
            },
            /*SimpleInputNamespace.SimpleInputDragListener.OnPointerUp end.*/

            /*SimpleInputNamespace.SimpleInputDragListener.Stop start.*/
            Stop: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.SimpleInputDragListener#Stop", this ); }

                this.pointerId = SimpleInputNamespace.SimpleInputUtils.NON_EXISTING_TOUCH;
            },
            /*SimpleInputNamespace.SimpleInputDragListener.Stop end.*/


        }
    });
    /*SimpleInputNamespace.SimpleInputDragListener end.*/

    /*SimpleInputNamespace.SimpleInputMultiDragListener start.*/
    Bridge.define("SimpleInputNamespace.SimpleInputMultiDragListener", {
        inherits: [UnityEngine.MonoBehaviour,UnityEngine.EventSystems.IPointerDownHandler,UnityEngine.EventSystems.IPointerUpHandler],
        statics: {
            fields: {
                POINTERS_VALIDATION_INTERVAL: 0
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.SimpleInputMultiDragListener#init", this ); }

                    this.POINTERS_VALIDATION_INTERVAL = 5.0;
                }
            }
        },
        fields: {
            listeners: null,
            activeListener: null,
            mousePointers: null,
            touchPointers: null,
            validPointers: null,
            pointersNextValidation: 0
        },
        alias: [
            "OnPointerDown", "UnityEngine$EventSystems$IPointerDownHandler$OnPointerDown",
            "OnPointerUp", "UnityEngine$EventSystems$IPointerUpHandler$OnPointerUp"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.SimpleInputMultiDragListener#init", this ); }

                this.listeners = new (System.Collections.Generic.List$1(SimpleInputNamespace.ISimpleInputDraggableMultiTouch)).$ctor2(1);
                this.mousePointers = new (System.Collections.Generic.List$1(UnityEngine.EventSystems.PointerEventData)).ctor();
                this.touchPointers = new (System.Collections.Generic.List$1(UnityEngine.EventSystems.PointerEventData)).ctor();
                this.validPointers = new (System.Collections.Generic.List$1(UnityEngine.EventSystems.PointerEventData)).ctor();
                this.pointersNextValidation = 5.0;
            }
        },
        methods: {
            /*SimpleInputNamespace.SimpleInputMultiDragListener.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.SimpleInputMultiDragListener#Awake", this ); }

                var graphic = this.GetComponent(UnityEngine.UI.Graphic);
                if (!UnityEngine.Object.op_Implicit(graphic)) {
                    graphic = this.gameObject.AddComponent(SimpleInputNamespace.NonDrawingGraphic);
                }

                graphic.raycastTarget = true;
            },
            /*SimpleInputNamespace.SimpleInputMultiDragListener.Awake end.*/

            /*SimpleInputNamespace.SimpleInputMultiDragListener.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.SimpleInputMultiDragListener#OnEnable", this ); }

                SimpleInput.addOnUpdate(Bridge.fn.cacheBind(this, this.OnUpdate));
            },
            /*SimpleInputNamespace.SimpleInputMultiDragListener.OnEnable end.*/

            /*SimpleInputNamespace.SimpleInputMultiDragListener.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.SimpleInputMultiDragListener#OnDisable", this ); }

                SimpleInput.removeOnUpdate(Bridge.fn.cacheBind(this, this.OnUpdate));
            },
            /*SimpleInputNamespace.SimpleInputMultiDragListener.OnDisable end.*/

            /*SimpleInputNamespace.SimpleInputMultiDragListener.AddListener start.*/
            AddListener: function (listener) {
if ( TRACE ) { TRACE( "SimpleInputNamespace.SimpleInputMultiDragListener#AddListener", this ); }

                var priority = listener.SimpleInputNamespace$ISimpleInputDraggableMultiTouch$Priority;
                var i = 0;
                while (i < this.listeners.Count && this.listeners.getItem(i).SimpleInputNamespace$ISimpleInputDraggableMultiTouch$Priority < priority) {
                    i = (i + 1) | 0;
                }

                this.listeners.insert(i, listener);
            },
            /*SimpleInputNamespace.SimpleInputMultiDragListener.AddListener end.*/

            /*SimpleInputNamespace.SimpleInputMultiDragListener.RemoveListener start.*/
            RemoveListener: function (listener) {
if ( TRACE ) { TRACE( "SimpleInputNamespace.SimpleInputMultiDragListener#RemoveListener", this ); }

                this.listeners.remove(listener);

                if (Bridge.referenceEquals(this.activeListener, listener)) {
                    this.activeListener = null;
                }
            },
            /*SimpleInputNamespace.SimpleInputMultiDragListener.RemoveListener end.*/

            /*SimpleInputNamespace.SimpleInputMultiDragListener.OnUpdate start.*/
            OnUpdate: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.SimpleInputMultiDragListener#OnUpdate", this ); }

                this.pointersNextValidation -= UnityEngine.Time.unscaledDeltaTime;
                if (this.pointersNextValidation <= 0.0) {
                    this.pointersNextValidation = SimpleInputNamespace.SimpleInputMultiDragListener.POINTERS_VALIDATION_INTERVAL;
                    this.ValidatePointers();
                }

                for (var i = (this.listeners.Count - 1) | 0; i >= 0; i = (i - 1) | 0) {
                    if (this.listeners.getItem(i).SimpleInputNamespace$ISimpleInputDraggableMultiTouch$OnUpdate(this.mousePointers, this.touchPointers, this.activeListener)) {
                        if (this.activeListener == null || this.activeListener.SimpleInputNamespace$ISimpleInputDraggableMultiTouch$Priority < this.listeners.getItem(i).SimpleInputNamespace$ISimpleInputDraggableMultiTouch$Priority) {
                            this.activeListener = this.listeners.getItem(i);
                        }
                    } else if (Bridge.referenceEquals(this.activeListener, this.listeners.getItem(i))) {
                        this.activeListener = null;
                    }
                }

                for (var i1 = 0; i1 < this.mousePointers.Count; i1 = (i1 + 1) | 0) {
                    this.mousePointers.getItem(i1).delta = new pc.Vec2( 0.0, 0.0 );
                }

                for (var i2 = 0; i2 < this.touchPointers.Count; i2 = (i2 + 1) | 0) {
                    this.touchPointers.getItem(i2).delta = new pc.Vec2( 0.0, 0.0 );
                }
            },
            /*SimpleInputNamespace.SimpleInputMultiDragListener.OnUpdate end.*/

            /*SimpleInputNamespace.SimpleInputMultiDragListener.OnPointerDown start.*/
            OnPointerDown: function (eventData) {
if ( TRACE ) { TRACE( "SimpleInputNamespace.SimpleInputMultiDragListener#OnPointerDown", this ); }

                var pointers = SimpleInputNamespace.SimpleInputUtils.IsTouchInput(eventData) ? this.touchPointers : this.mousePointers;

                for (var i = 0; i < pointers.Count; i = (i + 1) | 0) {
                    if (pointers.getItem(i).pointerId === eventData.pointerId) {
                        pointers.setItem(i, eventData);
                        return;
                    }
                }

                pointers.add(eventData);
            },
            /*SimpleInputNamespace.SimpleInputMultiDragListener.OnPointerDown end.*/

            /*SimpleInputNamespace.SimpleInputMultiDragListener.OnPointerUp start.*/
            OnPointerUp: function (eventData) {
if ( TRACE ) { TRACE( "SimpleInputNamespace.SimpleInputMultiDragListener#OnPointerUp", this ); }

                for (var i = 0; i < this.mousePointers.Count; i = (i + 1) | 0) {
                    if (this.mousePointers.getItem(i).pointerId === eventData.pointerId) {
                        this.mousePointers.removeAt(i);
                        break;
                    }
                }

                for (var i1 = 0; i1 < this.touchPointers.Count; i1 = (i1 + 1) | 0) {
                    if (this.touchPointers.getItem(i1).pointerId === eventData.pointerId) {
                        this.touchPointers.removeAt(i1);
                        break;
                    }
                }
            },
            /*SimpleInputNamespace.SimpleInputMultiDragListener.OnPointerUp end.*/

            /*SimpleInputNamespace.SimpleInputMultiDragListener.ValidatePointers start.*/
            ValidatePointers: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.SimpleInputMultiDragListener#ValidatePointers", this ); }

                for (var i = (this.mousePointers.Count - 1) | 0; i >= 0; i = (i - 1) | 0) {
                    if (!UnityEngine.Input.GetMouseButton(this.mousePointers.getItem(i).button)) {
                        this.mousePointers.removeAt(i);
                    }
                }

                for (var i1 = (UnityEngine.Input.touchCount - 1) | 0; i1 >= 0; i1 = (i1 - 1) | 0) {
                    var fingerId = UnityEngine.Input.GetTouch(i1).fingerId;
                    for (var j = 0; j < this.touchPointers.Count; j = (j + 1) | 0) {
                        if (this.touchPointers.getItem(j).pointerId === fingerId) {
                            this.validPointers.add(this.touchPointers.getItem(j));
                            break;
                        }
                    }
                }

                var temp = this.touchPointers;
                this.touchPointers = this.validPointers;
                this.validPointers = temp;
                this.validPointers.clear();
            },
            /*SimpleInputNamespace.SimpleInputMultiDragListener.ValidatePointers end.*/


        }
    });
    /*SimpleInputNamespace.SimpleInputMultiDragListener end.*/

    /*SimpleInputNamespace.SimpleInputUtils start.*/
    Bridge.define("SimpleInputNamespace.SimpleInputUtils", {
        statics: {
            fields: {
                NON_EXISTING_TOUCH: 0,
                m_resolutionMultiplier: 0
            },
            props: {
                ResolutionMultiplier: {
                    get: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.SimpleInputUtils#ResolutionMultiplier#get", this ); }

                        if (SimpleInputNamespace.SimpleInputUtils.m_resolutionMultiplier <= 0.0) {
                            SimpleInputNamespace.SimpleInputUtils.m_resolutionMultiplier = 100.0 / (((UnityEngine.Screen.width + UnityEngine.Screen.height) | 0));
                        }

                        return SimpleInputNamespace.SimpleInputUtils.m_resolutionMultiplier;
                    }
                }
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.SimpleInputUtils#init", this ); }

                    this.NON_EXISTING_TOUCH = -98765;
                }
            },
            methods: {
                /*SimpleInputNamespace.SimpleInputUtils.IsTouchInput:static start.*/
                IsTouchInput: function (eventData) {
if ( TRACE ) { TRACE( "SimpleInputNamespace.SimpleInputUtils#IsTouchInput", this ); }

                    if (eventData.button !== UnityEngine.EventSystems.PointerEventData.InputButton.Left) {
                        return false;
                    }

                    for (var i = (UnityEngine.Input.touchCount - 1) | 0; i >= 0; i = (i - 1) | 0) {
                        if (UnityEngine.Input.GetTouch(i).fingerId === eventData.pointerId) {
                            return true;
                        }
                    }

                    return false;
                },
                /*SimpleInputNamespace.SimpleInputUtils.IsTouchInput:static end.*/

                /*SimpleInputNamespace.SimpleInputUtils.IsValid:static start.*/
                IsValid: function (eventData) {
if ( TRACE ) { TRACE( "SimpleInputNamespace.SimpleInputUtils#IsValid", this ); }

                    for (var i = (UnityEngine.Input.touchCount - 1) | 0; i >= 0; i = (i - 1) | 0) {
                        if (UnityEngine.Input.GetTouch(i).fingerId === eventData.pointerId) {
                            return true;
                        }
                    }

                    return UnityEngine.Input.GetMouseButton(eventData.button);
                },
                /*SimpleInputNamespace.SimpleInputUtils.IsValid:static end.*/


            }
        }
    });
    /*SimpleInputNamespace.SimpleInputUtils end.*/

    /*SimpleInputNamespace.UnityInputProvider start.*/
    Bridge.define("SimpleInputNamespace.UnityInputProvider", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            axes: null,
            buttons: null,
            mouseButtons: null,
            keys: null,
            axisInputs: null,
            buttonInputs: null,
            mouseButtonInputs: null,
            keyInputs: null
        },
        methods: {
            /*SimpleInputNamespace.UnityInputProvider.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.UnityInputProvider#Awake", this ); }

                var $t;
                if (this.axes.length > 0) {
                    this.axisInputs = System.Array.init(this.axes.length, null, SimpleInput.AxisInput);

                    var index = 0;
                    for (var i = 0; i < this.axisInputs.length; i = (i + 1) | 0) {
                        try {
                            var unityAxis = ($t = new SimpleInput.AxisInput.$ctor1(this.axes[i]), $t.value = UnityEngine.Input.GetAxisRaw(this.axes[i]), $t);
                            this.axisInputs[Bridge.identity(index, ((index = (index + 1) | 0)))] = unityAxis;
                        } catch ($e1) {
                            $e1 = System.Exception.create($e1);
                        }
                    }

                    if (index < this.axisInputs.length) {
                        System.Array.resize(Bridge.ref(this, "axisInputs"), index, null, SimpleInput.AxisInput);
                    }
                }

                if (this.buttons.length > 0) {
                    this.buttonInputs = System.Array.init(this.buttons.length, null, SimpleInput.ButtonInput);

                    var index1 = 0;
                    for (var i1 = 0; i1 < this.buttonInputs.length; i1 = (i1 + 1) | 0) {
                        try {
                            var unityButton = ($t = new SimpleInput.ButtonInput.$ctor1(this.buttons[i1]), $t.value = UnityEngine.Input.GetButton(this.buttons[i1]), $t);
                            this.buttonInputs[Bridge.identity(index1, ((index1 = (index1 + 1) | 0)))] = unityButton;
                        } catch ($e2) {
                            $e2 = System.Exception.create($e2);
                        }
                    }

                    if (index1 < this.buttonInputs.length) {
                        System.Array.resize(Bridge.ref(this, "buttonInputs"), index1, null, SimpleInput.ButtonInput);
                    }
                }

                if (this.mouseButtons.length > 0) {
                    this.mouseButtonInputs = System.Array.init(this.mouseButtons.length, null, SimpleInput.MouseButtonInput);

                    var index2 = 0;
                    for (var i2 = 0; i2 < this.mouseButtonInputs.length; i2 = (i2 + 1) | 0) {
                        try {
                            var unityMouseButton = ($t = new SimpleInput.MouseButtonInput.$ctor1(this.mouseButtons[i2]), $t.value = UnityEngine.Input.GetMouseButton(this.mouseButtons[i2]), $t);
                            this.mouseButtonInputs[Bridge.identity(index2, ((index2 = (index2 + 1) | 0)))] = unityMouseButton;
                        } catch ($e3) {
                            $e3 = System.Exception.create($e3);
                        }
                    }

                    if (index2 < this.mouseButtonInputs.length) {
                        System.Array.resize(Bridge.ref(this, "mouseButtonInputs"), index2, null, SimpleInput.MouseButtonInput);
                    }
                }

                if (this.keys.length > 0) {
                    this.keyInputs = System.Array.init(this.keys.length, null, SimpleInput.KeyInput);
                    for (var i3 = 0; i3 < this.keyInputs.length; i3 = (i3 + 1) | 0) {
                        var unityKey = ($t = new SimpleInput.KeyInput.$ctor1(this.keys[i3]), $t.value = UnityEngine.Input.GetKey(this.keys[i3]), $t);
                        this.keyInputs[i3] = unityKey;
                    }
                }
            },
            /*SimpleInputNamespace.UnityInputProvider.Awake end.*/

            /*SimpleInputNamespace.UnityInputProvider.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.UnityInputProvider#OnEnable", this ); }

                if (this.axisInputs != null) {
                    for (var i = 0; i < this.axisInputs.length; i = (i + 1) | 0) {
                        this.axisInputs[i].StartTracking();
                    }
                }

                if (this.buttonInputs != null) {
                    for (var i1 = 0; i1 < this.buttonInputs.length; i1 = (i1 + 1) | 0) {
                        this.buttonInputs[i1].StartTracking();
                    }
                }

                if (this.mouseButtonInputs != null) {
                    for (var i2 = 0; i2 < this.mouseButtonInputs.length; i2 = (i2 + 1) | 0) {
                        this.mouseButtonInputs[i2].StartTracking();
                    }
                }

                if (this.keyInputs != null) {
                    for (var i3 = 0; i3 < this.keyInputs.length; i3 = (i3 + 1) | 0) {
                        this.keyInputs[i3].StartTracking();
                    }
                }

                SimpleInput.addOnUpdate(Bridge.fn.cacheBind(this, this.OnUpdate));
            },
            /*SimpleInputNamespace.UnityInputProvider.OnEnable end.*/

            /*SimpleInputNamespace.UnityInputProvider.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.UnityInputProvider#OnDisable", this ); }

                if (this.axisInputs != null) {
                    for (var i = 0; i < this.axisInputs.length; i = (i + 1) | 0) {
                        this.axisInputs[i].StopTracking();
                    }
                }

                if (this.buttonInputs != null) {
                    for (var i1 = 0; i1 < this.buttonInputs.length; i1 = (i1 + 1) | 0) {
                        this.buttonInputs[i1].StopTracking();
                    }
                }

                if (this.mouseButtonInputs != null) {
                    for (var i2 = 0; i2 < this.mouseButtonInputs.length; i2 = (i2 + 1) | 0) {
                        this.mouseButtonInputs[i2].StopTracking();
                    }
                }

                if (this.keyInputs != null) {
                    for (var i3 = 0; i3 < this.keyInputs.length; i3 = (i3 + 1) | 0) {
                        this.keyInputs[i3].StopTracking();
                    }
                }

                SimpleInput.removeOnUpdate(Bridge.fn.cacheBind(this, this.OnUpdate));
            },
            /*SimpleInputNamespace.UnityInputProvider.OnDisable end.*/

            /*SimpleInputNamespace.UnityInputProvider.OnUpdate start.*/
            OnUpdate: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.UnityInputProvider#OnUpdate", this ); }

                if (this.axisInputs != null) {
                    for (var i = 0; i < this.axisInputs.length; i = (i + 1) | 0) {
                        this.axisInputs[i].value = UnityEngine.Input.GetAxisRaw(this.axisInputs[i].Key);
                    }
                }

                if (this.buttonInputs != null) {
                    for (var i1 = 0; i1 < this.buttonInputs.length; i1 = (i1 + 1) | 0) {
                        this.buttonInputs[i1].value = UnityEngine.Input.GetButton(this.buttonInputs[i1].Key);
                    }
                }

                if (this.mouseButtonInputs != null) {
                    for (var i2 = 0; i2 < this.mouseButtonInputs.length; i2 = (i2 + 1) | 0) {
                        this.mouseButtonInputs[i2].value = UnityEngine.Input.GetMouseButton(this.mouseButtonInputs[i2].Key);
                    }
                }

                if (this.keyInputs != null) {
                    for (var i3 = 0; i3 < this.keyInputs.length; i3 = (i3 + 1) | 0) {
                        this.keyInputs[i3].value = UnityEngine.Input.GetKey(this.keyInputs[i3].Key);
                    }
                }
            },
            /*SimpleInputNamespace.UnityInputProvider.OnUpdate end.*/


        }
    });
    /*SimpleInputNamespace.UnityInputProvider end.*/

    /*CodeBase.Services.Input.InputService start.*/
    Bridge.define("CodeBase.Services.Input.InputService", {
        inherits: [CodeBase.Services.Input.IInputService],
        statics: {
            fields: {
                Horizontal: null,
                Vertical: null,
                Button: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "CodeBase.Services.Input.InputService#init", this ); }

                    this.Horizontal = "Horizontal";
                    this.Vertical = "Vertical";
                    this.Button = "Fire";
                }
            },
            methods: {
                /*CodeBase.Services.Input.InputService.SimpleInputAxis:static start.*/
                SimpleInputAxis: function () {
if ( TRACE ) { TRACE( "CodeBase.Services.Input.InputService#SimpleInputAxis", this ); }

                    return new pc.Vec2( SimpleInput.GetAxis(CodeBase.Services.Input.InputService.Horizontal), SimpleInput.GetAxis(CodeBase.Services.Input.InputService.Vertical) );
                },
                /*CodeBase.Services.Input.InputService.SimpleInputAxis:static end.*/


            }
        },
        alias: ["IsAttackButtonUp", "CodeBase$Services$Input$IInputService$IsAttackButtonUp"],
        methods: {
            /*CodeBase.Services.Input.InputService.IsAttackButtonUp start.*/
            IsAttackButtonUp: function () {
if ( TRACE ) { TRACE( "CodeBase.Services.Input.InputService#IsAttackButtonUp", this ); }

                return SimpleInput.GetButtonUp(CodeBase.Services.Input.InputService.Button);
            },
            /*CodeBase.Services.Input.InputService.IsAttackButtonUp end.*/


        }
    });
    /*CodeBase.Services.Input.InputService end.*/

    /*SimpleInputNamespace.BaseInput$2 start.*/
    Bridge.define("SimpleInputNamespace.BaseInput$2", function (K, V) { return {
        inherits: [SimpleInputNamespace.IBaseInput],
        fields: {
            m_key: Bridge.getDefaultValue(K),
            value: Bridge.getDefaultValue(V),
            isTracking: false
        },
        props: {
            Key: {
                get: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.BaseInput$2#Key#get", this ); }

                    return Bridge.rValue(this.m_key);
                },
                set: function (value) {
if ( TRACE ) { TRACE( "SimpleInputNamespace.BaseInput$2#Key#set", this ); }

                    if (!this.KeysEqual(Bridge.rValue(this.m_key), Bridge.rValue(value))) {
                        if (this.isTracking && this.IsKeyValid()) {
                            this.UnregisterInput();
                        }

                        this.m_key = Bridge.rValue(value);

                        if (this.isTracking && this.IsKeyValid()) {
                            this.RegisterInput();
                        }
                    }
                }
            }
        },
        alias: [
            "StartTracking", "SimpleInputNamespace$IBaseInput$StartTracking",
            "StopTracking", "SimpleInputNamespace$IBaseInput$StopTracking",
            "ResetValue", "SimpleInputNamespace$IBaseInput$ResetValue"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.BaseInput$2#init", this ); }

                this.m_key = Bridge.getDefaultValue(K);
                this.value = Bridge.getDefaultValue(V);
                this.isTracking = false;
            },
            ctor: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.BaseInput$2#ctor", this ); }

                this.$initialize();
            },
            $ctor1: function (key) {
if ( TRACE ) { TRACE( "SimpleInputNamespace.BaseInput$2#$ctor1", this ); }

                this.$initialize();
                this.m_key = Bridge.rValue(key);
            }
        },
        methods: {
            /*SimpleInputNamespace.BaseInput$2.StartTracking start.*/
            StartTracking: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.BaseInput$2#StartTracking", this ); }

                if (!this.isTracking) {
                    if (this.IsKeyValid()) {
                        this.RegisterInput();
                    }

                    this.isTracking = true;
                }
            },
            /*SimpleInputNamespace.BaseInput$2.StartTracking end.*/

            /*SimpleInputNamespace.BaseInput$2.StopTracking start.*/
            StopTracking: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.BaseInput$2#StopTracking", this ); }

                if (this.isTracking) {
                    if (this.IsKeyValid()) {
                        this.UnregisterInput();
                    }

                    this.isTracking = false;
                }
            },
            /*SimpleInputNamespace.BaseInput$2.StopTracking end.*/

            /*SimpleInputNamespace.BaseInput$2.ResetValue start.*/
            ResetValue: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.BaseInput$2#ResetValue", this ); }

                this.value = Bridge.getDefaultValue(V);
            },
            /*SimpleInputNamespace.BaseInput$2.ResetValue end.*/

            /*SimpleInputNamespace.BaseInput$2.IsKeyValid start.*/
            IsKeyValid: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.BaseInput$2#IsKeyValid", this ); }

                return true;
            },
            /*SimpleInputNamespace.BaseInput$2.IsKeyValid end.*/


        }
    }; });
    /*SimpleInputNamespace.BaseInput$2 end.*/

    /*SimpleInputNamespace.AxisInputMoveGesture start.*/
    Bridge.define("SimpleInputNamespace.AxisInputMoveGesture", {
        inherits: [UnityEngine.MonoBehaviour,SimpleInputNamespace.ISimpleInputDraggableMultiTouch],
        fields: {
            horizontal: null,
            vertical: null,
            sensitivity: 0,
            invertValue: false,
            eventReceiver: null
        },
        props: {
            Priority: {
                get: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.AxisInputMoveGesture#Priority#get", this ); }

                    return 2;
                }
            }
        },
        alias: [
            "Priority", "SimpleInputNamespace$ISimpleInputDraggableMultiTouch$Priority",
            "OnUpdate", "SimpleInputNamespace$ISimpleInputDraggableMultiTouch$OnUpdate"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.AxisInputMoveGesture#init", this ); }

                this.horizontal = new SimpleInput.AxisInput.$ctor1("Mouse X");
                this.vertical = new SimpleInput.AxisInput.$ctor1("Mouse Y");
                this.sensitivity = 1.0;
                this.invertValue = true;
            }
        },
        methods: {
            /*SimpleInputNamespace.AxisInputMoveGesture.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.AxisInputMoveGesture#Awake", this ); }

                this.eventReceiver = this.GetComponent(SimpleInputNamespace.SimpleInputMultiDragListener);
            },
            /*SimpleInputNamespace.AxisInputMoveGesture.Awake end.*/

            /*SimpleInputNamespace.AxisInputMoveGesture.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.AxisInputMoveGesture#OnEnable", this ); }

                this.eventReceiver.AddListener(this);

                this.horizontal.StartTracking();
                this.vertical.StartTracking();
            },
            /*SimpleInputNamespace.AxisInputMoveGesture.OnEnable end.*/

            /*SimpleInputNamespace.AxisInputMoveGesture.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.AxisInputMoveGesture#OnDisable", this ); }

                this.eventReceiver.RemoveListener(this);

                this.horizontal.StopTracking();
                this.vertical.StopTracking();
            },
            /*SimpleInputNamespace.AxisInputMoveGesture.OnDisable end.*/

            /*SimpleInputNamespace.AxisInputMoveGesture.OnUpdate start.*/
            OnUpdate: function (mousePointers, touchPointers, activeListener) {
if ( TRACE ) { TRACE( "SimpleInputNamespace.AxisInputMoveGesture#OnUpdate", this ); }

                this.horizontal.value = 0.0;
                this.vertical.value = 0.0;

                if (activeListener != null && activeListener.SimpleInputNamespace$ISimpleInputDraggableMultiTouch$Priority > this.Priority) {
                    return false;
                }

                if (touchPointers.Count < 2) {
                    if (Bridge.referenceEquals(activeListener, this) && touchPointers.Count === 1) {
                        touchPointers.getItem(0).pressPosition = touchPointers.getItem(0).position.$clone();
                    }

                    return false;
                }

                var touch1 = touchPointers.getItem(((touchPointers.Count - 1) | 0));
                var touch2 = touchPointers.getItem(((touchPointers.Count - 2) | 0));

                var pinchAmount = (touch1.delta.$clone().add( touch2.delta )).scale( this.sensitivity * SimpleInputNamespace.SimpleInputUtils.ResolutionMultiplier );
                if (this.invertValue) {
                    pinchAmount = pinchAmount.$clone().scale( -1 );
                }

                this.horizontal.value = pinchAmount.x;
                this.vertical.value = pinchAmount.y;

                return true;
            },
            /*SimpleInputNamespace.AxisInputMoveGesture.OnUpdate end.*/


        }
    });
    /*SimpleInputNamespace.AxisInputMoveGesture end.*/

    /*SimpleInputNamespace.AxisInputPinchGesture start.*/
    Bridge.define("SimpleInputNamespace.AxisInputPinchGesture", {
        inherits: [UnityEngine.MonoBehaviour,SimpleInputNamespace.ISimpleInputDraggableMultiTouch],
        fields: {
            axis: null,
            sensitivity: 0,
            invertValue: false,
            eventReceiver: null
        },
        props: {
            Priority: {
                get: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.AxisInputPinchGesture#Priority#get", this ); }

                    return 2;
                }
            }
        },
        alias: [
            "Priority", "SimpleInputNamespace$ISimpleInputDraggableMultiTouch$Priority",
            "OnUpdate", "SimpleInputNamespace$ISimpleInputDraggableMultiTouch$OnUpdate"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.AxisInputPinchGesture#init", this ); }

                this.axis = new SimpleInput.AxisInput.ctor();
                this.sensitivity = 1.0;
            }
        },
        methods: {
            /*SimpleInputNamespace.AxisInputPinchGesture.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.AxisInputPinchGesture#Awake", this ); }

                this.eventReceiver = this.GetComponent(SimpleInputNamespace.SimpleInputMultiDragListener);
            },
            /*SimpleInputNamespace.AxisInputPinchGesture.Awake end.*/

            /*SimpleInputNamespace.AxisInputPinchGesture.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.AxisInputPinchGesture#OnEnable", this ); }

                this.eventReceiver.AddListener(this);
                this.axis.StartTracking();
            },
            /*SimpleInputNamespace.AxisInputPinchGesture.OnEnable end.*/

            /*SimpleInputNamespace.AxisInputPinchGesture.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.AxisInputPinchGesture#OnDisable", this ); }

                this.eventReceiver.RemoveListener(this);
                this.axis.StopTracking();
            },
            /*SimpleInputNamespace.AxisInputPinchGesture.OnDisable end.*/

            /*SimpleInputNamespace.AxisInputPinchGesture.OnUpdate start.*/
            OnUpdate: function (mousePointers, touchPointers, activeListener) {
if ( TRACE ) { TRACE( "SimpleInputNamespace.AxisInputPinchGesture#OnUpdate", this ); }

                this.axis.value = 0.0;

                if (activeListener != null && activeListener.SimpleInputNamespace$ISimpleInputDraggableMultiTouch$Priority > this.Priority) {
                    return false;
                }

                if (touchPointers.Count < 2) {
                    if (Bridge.referenceEquals(activeListener, this) && touchPointers.Count === 1) {
                        touchPointers.getItem(0).pressPosition = touchPointers.getItem(0).position.$clone();
                    }

                    return false;
                }

                var touch1 = touchPointers.getItem(((touchPointers.Count - 1) | 0));
                var touch2 = touchPointers.getItem(((touchPointers.Count - 2) | 0));

                var pinchAmount = (touch2.delta.$clone().sub( touch1.delta )).length();
                var zoomingOut = (touch2.position.$clone().sub( touch1.position )).lengthSq() < ((touch2.position.$clone().sub( touch2.delta )).sub( (touch1.position.$clone().sub( touch1.delta )) )).lengthSq();
                if (this.invertValue !== zoomingOut) {
                    pinchAmount = -pinchAmount;
                }

                this.axis.value = pinchAmount * this.sensitivity * SimpleInputNamespace.SimpleInputUtils.ResolutionMultiplier;
                return true;
            },
            /*SimpleInputNamespace.AxisInputPinchGesture.OnUpdate end.*/


        }
    });
    /*SimpleInputNamespace.AxisInputPinchGesture end.*/

    /*SimpleInputNamespace.AxisInputRotateGesture start.*/
    Bridge.define("SimpleInputNamespace.AxisInputRotateGesture", {
        inherits: [UnityEngine.MonoBehaviour,SimpleInputNamespace.ISimpleInputDraggableMultiTouch],
        statics: {
            fields: {
                MULTIPLIER: 0
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.AxisInputRotateGesture#init", this ); }

                    this.MULTIPLIER = 57.2957764;
                }
            }
        },
        fields: {
            axis: null,
            sensitivity: 0,
            clockwise: false,
            eventReceiver: null
        },
        props: {
            Priority: {
                get: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.AxisInputRotateGesture#Priority#get", this ); }

                    return 2;
                }
            }
        },
        alias: [
            "Priority", "SimpleInputNamespace$ISimpleInputDraggableMultiTouch$Priority",
            "OnUpdate", "SimpleInputNamespace$ISimpleInputDraggableMultiTouch$OnUpdate"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.AxisInputRotateGesture#init", this ); }

                this.axis = new SimpleInput.AxisInput.ctor();
                this.sensitivity = 0.25;
                this.clockwise = true;
            }
        },
        methods: {
            /*SimpleInputNamespace.AxisInputRotateGesture.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.AxisInputRotateGesture#Awake", this ); }

                this.eventReceiver = this.GetComponent(SimpleInputNamespace.SimpleInputMultiDragListener);
            },
            /*SimpleInputNamespace.AxisInputRotateGesture.Awake end.*/

            /*SimpleInputNamespace.AxisInputRotateGesture.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.AxisInputRotateGesture#OnEnable", this ); }

                this.eventReceiver.AddListener(this);
                this.axis.StartTracking();
            },
            /*SimpleInputNamespace.AxisInputRotateGesture.OnEnable end.*/

            /*SimpleInputNamespace.AxisInputRotateGesture.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.AxisInputRotateGesture#OnDisable", this ); }

                this.eventReceiver.RemoveListener(this);
                this.axis.StopTracking();
            },
            /*SimpleInputNamespace.AxisInputRotateGesture.OnDisable end.*/

            /*SimpleInputNamespace.AxisInputRotateGesture.OnUpdate start.*/
            OnUpdate: function (mousePointers, touchPointers, activeListener) {
if ( TRACE ) { TRACE( "SimpleInputNamespace.AxisInputRotateGesture#OnUpdate", this ); }

                this.axis.value = 0.0;

                if (activeListener != null && activeListener.SimpleInputNamespace$ISimpleInputDraggableMultiTouch$Priority > this.Priority) {
                    return false;
                }

                if (touchPointers.Count < 2) {
                    if (Bridge.referenceEquals(activeListener, this) && touchPointers.Count === 1) {
                        touchPointers.getItem(0).pressPosition = touchPointers.getItem(0).position.$clone();
                    }

                    return false;
                }

                var touch1 = touchPointers.getItem(((touchPointers.Count - 1) | 0));
                var touch2 = touchPointers.getItem(((touchPointers.Count - 2) | 0));

                var deltaPosition = touch2.position.$clone().sub( touch1.position );
                var prevDeltaPosition = deltaPosition.$clone().sub( (touch2.delta.$clone().sub( touch1.delta )) );

                var deltaAngle = (Math.atan2(prevDeltaPosition.y, prevDeltaPosition.x) - Math.atan2(deltaPosition.y, deltaPosition.x)) * SimpleInputNamespace.AxisInputRotateGesture.MULTIPLIER;
                if (deltaAngle > 180.0) {
                    deltaAngle -= 360.0;
                } else {
                    if (deltaAngle < -180.0) {
                        deltaAngle += 360.0;
                    }
                }

                this.axis.value = this.clockwise ? deltaAngle * this.sensitivity : -deltaAngle * this.sensitivity;
                return true;
            },
            /*SimpleInputNamespace.AxisInputRotateGesture.OnUpdate end.*/


        }
    });
    /*SimpleInputNamespace.AxisInputRotateGesture end.*/

    /*SimpleInputNamespace.SwipeGestureBase$2 start.*/
    Bridge.define("SimpleInputNamespace.SwipeGestureBase$2", function (K, V) { return {
        inherits: [SimpleInputNamespace.SelectivePointerInput,SimpleInputNamespace.ISimpleInputDraggableMultiTouch],
        fields: {
            swipeAmount: null,
            eventReceiver: null
        },
        alias: ["OnUpdate", "SimpleInputNamespace$ISimpleInputDraggableMultiTouch$OnUpdate"],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.SwipeGestureBase$2#init", this ); }

                this.swipeAmount = new UnityEngine.Vector2();
                this.swipeAmount = new pc.Vec2( 0.0, 25.0 );
            }
        },
        methods: {
            /*SimpleInputNamespace.SwipeGestureBase$2.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.SwipeGestureBase$2#Awake", this ); }

                this.eventReceiver = this.GetComponent(SimpleInputNamespace.SimpleInputMultiDragListener);
            },
            /*SimpleInputNamespace.SwipeGestureBase$2.Awake end.*/

            /*SimpleInputNamespace.SwipeGestureBase$2.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.SwipeGestureBase$2#OnEnable", this ); }

                this.eventReceiver.AddListener(this);
                this.Input.StartTracking();
            },
            /*SimpleInputNamespace.SwipeGestureBase$2.OnEnable end.*/

            /*SimpleInputNamespace.SwipeGestureBase$2.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.SwipeGestureBase$2#OnDisable", this ); }

                this.eventReceiver.RemoveListener(this);
                this.Input.StopTracking();
            },
            /*SimpleInputNamespace.SwipeGestureBase$2.OnDisable end.*/

            /*SimpleInputNamespace.SwipeGestureBase$2.OnUpdate start.*/
            OnUpdate: function (mousePointers, touchPointers, activeListener) {
if ( TRACE ) { TRACE( "SimpleInputNamespace.SwipeGestureBase$2#OnUpdate", this ); }

                this.Input.ResetValue();

                if (activeListener != null && activeListener.SimpleInputNamespace$ISimpleInputDraggableMultiTouch$Priority > this.Priority) {
                    return false;
                }

                var pointer = this.GetSatisfyingPointer(mousePointers, touchPointers);
                if (pointer == null) {
                    return false;
                }

                if (!this.IsSwipeSatisfied(pointer)) {
                    return Bridge.referenceEquals(activeListener, this);
                }

                this.Input.value = Bridge.rValue(this.Value);
                return true;
            },
            /*SimpleInputNamespace.SwipeGestureBase$2.OnUpdate end.*/

            /*SimpleInputNamespace.SwipeGestureBase$2.IsSwipeSatisfied start.*/
            IsSwipeSatisfied: function (eventData) {
if ( TRACE ) { TRACE( "SimpleInputNamespace.SwipeGestureBase$2#IsSwipeSatisfied", this ); }

                var deltaPosition = eventData.position.$clone().sub( eventData.pressPosition );
                if (this.swipeAmount.x > 0.0) {
                    if (deltaPosition.x < this.swipeAmount.x) {
                        return false;
                    }
                } else if (this.swipeAmount.x < 0.0) {
                    if (deltaPosition.x > this.swipeAmount.x) {
                        return false;
                    }
                }

                if (this.swipeAmount.y > 0.0) {
                    if (deltaPosition.y < this.swipeAmount.y) {
                        return false;
                    }
                } else if (this.swipeAmount.y < 0.0) {
                    if (deltaPosition.y > this.swipeAmount.y) {
                        return false;
                    }
                }

                return true;
            },
            /*SimpleInputNamespace.SwipeGestureBase$2.IsSwipeSatisfied end.*/


        }
    }; });
    /*SimpleInputNamespace.SwipeGestureBase$2 end.*/

    /*SimpleInputNamespace.AxisInputUIArrows start.*/
    Bridge.define("SimpleInputNamespace.AxisInputUIArrows", {
        inherits: [UnityEngine.MonoBehaviour,SimpleInputNamespace.ISimpleInputDraggable],
        fields: {
            xAxis: null,
            yAxis: null,
            valueMultiplier: 0,
            deadzoneRadius: 0,
            deadzoneRadiusSqr: 0,
            rectTransform: null,
            m_value: null
        },
        props: {
            Value: {
                get: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.AxisInputUIArrows#Value#get", this ); }

                    return this.m_value.$clone();
                }
            }
        },
        alias: [
            "OnPointerDown", "SimpleInputNamespace$ISimpleInputDraggable$OnPointerDown",
            "OnDrag", "SimpleInputNamespace$ISimpleInputDraggable$OnDrag",
            "OnPointerUp", "SimpleInputNamespace$ISimpleInputDraggable$OnPointerUp"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.AxisInputUIArrows#init", this ); }

                this.m_value = new UnityEngine.Vector2();
                this.xAxis = new SimpleInput.AxisInput.$ctor1("Horizontal");
                this.yAxis = new SimpleInput.AxisInput.$ctor1("Vertical");
                this.valueMultiplier = 1.0;
                this.m_value = pc.Vec2.ZERO.clone();
            }
        },
        methods: {
            /*SimpleInputNamespace.AxisInputUIArrows.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.AxisInputUIArrows#Awake", this ); }

                this.rectTransform = Bridge.cast(this.transform, UnityEngine.RectTransform);
                this.gameObject.AddComponent(SimpleInputNamespace.SimpleInputDragListener).Listener = this;

                this.deadzoneRadiusSqr = this.deadzoneRadius * this.deadzoneRadius;
            },
            /*SimpleInputNamespace.AxisInputUIArrows.Awake end.*/

            /*SimpleInputNamespace.AxisInputUIArrows.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.AxisInputUIArrows#OnEnable", this ); }

                this.xAxis.StartTracking();
                this.yAxis.StartTracking();
            },
            /*SimpleInputNamespace.AxisInputUIArrows.OnEnable end.*/

            /*SimpleInputNamespace.AxisInputUIArrows.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.AxisInputUIArrows#OnDisable", this ); }

                this.xAxis.StopTracking();
                this.yAxis.StopTracking();
            },
            /*SimpleInputNamespace.AxisInputUIArrows.OnDisable end.*/

            /*SimpleInputNamespace.AxisInputUIArrows.OnPointerDown start.*/
            OnPointerDown: function (eventData) {
if ( TRACE ) { TRACE( "SimpleInputNamespace.AxisInputUIArrows#OnPointerDown", this ); }

                this.CalculateInput(eventData);
            },
            /*SimpleInputNamespace.AxisInputUIArrows.OnPointerDown end.*/

            /*SimpleInputNamespace.AxisInputUIArrows.OnDrag start.*/
            OnDrag: function (eventData) {
if ( TRACE ) { TRACE( "SimpleInputNamespace.AxisInputUIArrows#OnDrag", this ); }

                this.CalculateInput(eventData);
            },
            /*SimpleInputNamespace.AxisInputUIArrows.OnDrag end.*/

            /*SimpleInputNamespace.AxisInputUIArrows.OnPointerUp start.*/
            OnPointerUp: function (eventData) {
if ( TRACE ) { TRACE( "SimpleInputNamespace.AxisInputUIArrows#OnPointerUp", this ); }

                this.m_value = pc.Vec2.ZERO.clone();

                this.xAxis.value = 0.0;
                this.yAxis.value = 0.0;
            },
            /*SimpleInputNamespace.AxisInputUIArrows.OnPointerUp end.*/

            /*SimpleInputNamespace.AxisInputUIArrows.CalculateInput start.*/
            CalculateInput: function (eventData) {
if ( TRACE ) { TRACE( "SimpleInputNamespace.AxisInputUIArrows#CalculateInput", this ); }

                var pointerPos = { v : new UnityEngine.Vector2() };
                UnityEngine.RectTransformUtility.ScreenPointToLocalPointInRectangle(this.rectTransform, eventData.position, eventData.pressEventCamera, pointerPos);

                if (!this.yAxis.IsKeyValid()) {
                    if (pointerPos.v.x * pointerPos.v.x <= this.deadzoneRadiusSqr) {
                        this.m_value.set( 0.0, 0.0 );
                    } else {
                        this.m_value.set( pointerPos.v.x >= 0.0 ? this.valueMultiplier : -this.valueMultiplier, 0.0 );
                    }
                } else if (!this.xAxis.IsKeyValid()) {
                    if (pointerPos.v.y * pointerPos.v.y <= this.deadzoneRadiusSqr) {
                        this.m_value.set( 0.0, 0.0 );
                    } else {
                        this.m_value.set( 0.0, pointerPos.v.y >= 0.0 ? this.valueMultiplier : -this.valueMultiplier );
                    }
                } else {
                    if (pointerPos.v.lengthSq() <= this.deadzoneRadiusSqr) {
                        this.m_value.set( 0.0, 0.0 );
                    } else {
                        var angle = pc.Vec2.angle( pointerPos.v, pc.Vec2.RIGHT.clone() );
                        if (pointerPos.v.y < 0.0) {
                            angle = 360.0 - angle;
                        }

                        if (angle >= 45.0 && angle <= 135.0) {
                            this.m_value.set( 0.0, this.valueMultiplier );
                        } else {
                            if (angle >= 135.0 && angle <= 225.0) {
                                this.m_value.set( -this.valueMultiplier, 0.0 );
                            } else {
                                if (angle >= 225.0 && angle <= 315.0) {
                                    this.m_value.set( 0.0, -this.valueMultiplier );
                                } else {
                                    this.m_value.set( this.valueMultiplier, 0.0 );
                                }
                            }
                        }
                    }
                }

                this.xAxis.value = this.m_value.x;
                this.yAxis.value = this.m_value.y;
            },
            /*SimpleInputNamespace.AxisInputUIArrows.CalculateInput end.*/


        }
    });
    /*SimpleInputNamespace.AxisInputUIArrows end.*/

    /*SimpleInputNamespace.Dpad start.*/
    Bridge.define("SimpleInputNamespace.Dpad", {
        inherits: [UnityEngine.MonoBehaviour,SimpleInputNamespace.ISimpleInputDraggable],
        fields: {
            xAxis: null,
            yAxis: null,
            valueMultiplier: 0,
            deadzoneRadius: 0,
            deadzoneRadiusSqr: 0,
            rectTransform: null,
            m_value: null
        },
        props: {
            Value: {
                get: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.Dpad#Value#get", this ); }

                    return this.m_value.$clone();
                }
            }
        },
        alias: [
            "OnPointerDown", "SimpleInputNamespace$ISimpleInputDraggable$OnPointerDown",
            "OnDrag", "SimpleInputNamespace$ISimpleInputDraggable$OnDrag",
            "OnPointerUp", "SimpleInputNamespace$ISimpleInputDraggable$OnPointerUp"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.Dpad#init", this ); }

                this.m_value = new UnityEngine.Vector2();
                this.xAxis = new SimpleInput.AxisInput.$ctor1("Horizontal");
                this.yAxis = new SimpleInput.AxisInput.$ctor1("Vertical");
                this.valueMultiplier = 1.0;
                this.deadzoneRadius = 20.0;
                this.m_value = pc.Vec2.ZERO.clone();
            }
        },
        methods: {
            /*SimpleInputNamespace.Dpad.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.Dpad#Awake", this ); }

                this.rectTransform = Bridge.cast(this.transform, UnityEngine.RectTransform);
                this.gameObject.AddComponent(SimpleInputNamespace.SimpleInputDragListener).Listener = this;

                this.deadzoneRadiusSqr = this.deadzoneRadius * this.deadzoneRadius;
            },
            /*SimpleInputNamespace.Dpad.Awake end.*/

            /*SimpleInputNamespace.Dpad.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.Dpad#OnEnable", this ); }

                this.xAxis.StartTracking();
                this.yAxis.StartTracking();
            },
            /*SimpleInputNamespace.Dpad.OnEnable end.*/

            /*SimpleInputNamespace.Dpad.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.Dpad#OnDisable", this ); }

                this.xAxis.StopTracking();
                this.yAxis.StopTracking();
            },
            /*SimpleInputNamespace.Dpad.OnDisable end.*/

            /*SimpleInputNamespace.Dpad.OnPointerDown start.*/
            OnPointerDown: function (eventData) {
if ( TRACE ) { TRACE( "SimpleInputNamespace.Dpad#OnPointerDown", this ); }

                this.CalculateInput(eventData);
            },
            /*SimpleInputNamespace.Dpad.OnPointerDown end.*/

            /*SimpleInputNamespace.Dpad.OnDrag start.*/
            OnDrag: function (eventData) {
if ( TRACE ) { TRACE( "SimpleInputNamespace.Dpad#OnDrag", this ); }

                this.CalculateInput(eventData);
            },
            /*SimpleInputNamespace.Dpad.OnDrag end.*/

            /*SimpleInputNamespace.Dpad.OnPointerUp start.*/
            OnPointerUp: function (eventData) {
if ( TRACE ) { TRACE( "SimpleInputNamespace.Dpad#OnPointerUp", this ); }

                this.m_value = pc.Vec2.ZERO.clone();

                this.xAxis.value = 0.0;
                this.yAxis.value = 0.0;
            },
            /*SimpleInputNamespace.Dpad.OnPointerUp end.*/

            /*SimpleInputNamespace.Dpad.CalculateInput start.*/
            CalculateInput: function (eventData) {
if ( TRACE ) { TRACE( "SimpleInputNamespace.Dpad#CalculateInput", this ); }

                var pointerPos = { v : new UnityEngine.Vector2() };
                UnityEngine.RectTransformUtility.ScreenPointToLocalPointInRectangle(this.rectTransform, eventData.position, eventData.pressEventCamera, pointerPos);

                if (pointerPos.v.lengthSq() <= this.deadzoneRadiusSqr) {
                    this.m_value.set( 0.0, 0.0 );
                } else {
                    var angle = pc.Vec2.angle( pointerPos.v, pc.Vec2.RIGHT.clone() );
                    if (pointerPos.v.y < 0.0) {
                        angle = 360.0 - angle;
                    }

                    if (angle >= 25.0 && angle <= 155.0) {
                        this.m_value.y = this.valueMultiplier;
                    } else {
                        if (angle >= 205.0 && angle <= 335.0) {
                            this.m_value.y = -this.valueMultiplier;
                        } else {
                            this.m_value.y = 0.0;
                        }
                    }

                    if (angle <= 65.0 || angle >= 295.0) {
                        this.m_value.x = this.valueMultiplier;
                    } else {
                        if (angle >= 115.0 && angle <= 245.0) {
                            this.m_value.x = -this.valueMultiplier;
                        } else {
                            this.m_value.x = 0.0;
                        }
                    }
                }

                this.xAxis.value = this.m_value.x;
                this.yAxis.value = this.m_value.y;
            },
            /*SimpleInputNamespace.Dpad.CalculateInput end.*/


        }
    });
    /*SimpleInputNamespace.Dpad end.*/

    /*SimpleInputNamespace.Joystick start.*/
    Bridge.define("SimpleInputNamespace.Joystick", {
        inherits: [UnityEngine.MonoBehaviour,SimpleInputNamespace.ISimpleInputDraggable],
        fields: {
            xAxis: null,
            yAxis: null,
            joystickTR: null,
            background: null,
            movementAxes: 0,
            valueMultiplier: 0,
            thumb: null,
            thumbTR: null,
            movementAreaRadius: 0,
            deadzoneRadius: 0,
            isDynamicJoystick: false,
            dynamicJoystickMovementArea: null,
            canFollowPointer: false,
            joystickHeld: false,
            pointerInitialPos: null,
            _1OverMovementAreaRadius: 0,
            movementAreaRadiusSqr: 0,
            deadzoneRadiusSqr: 0,
            joystickInitialPos: null,
            opacity: 0,
            m_value: null
        },
        props: {
            Value: {
                get: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.Joystick#Value#get", this ); }

                    return this.m_value.$clone();
                }
            }
        },
        alias: [
            "OnPointerDown", "SimpleInputNamespace$ISimpleInputDraggable$OnPointerDown",
            "OnDrag", "SimpleInputNamespace$ISimpleInputDraggable$OnDrag",
            "OnPointerUp", "SimpleInputNamespace$ISimpleInputDraggable$OnPointerUp"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.Joystick#init", this ); }

                this.pointerInitialPos = new UnityEngine.Vector2();
                this.joystickInitialPos = new UnityEngine.Vector2();
                this.m_value = new UnityEngine.Vector2();
                this.xAxis = new SimpleInput.AxisInput.$ctor1("Horizontal");
                this.yAxis = new SimpleInput.AxisInput.$ctor1("Vertical");
                this.movementAxes = SimpleInputNamespace.Joystick.MovementAxes.XandY;
                this.valueMultiplier = 1.0;
                this.movementAreaRadius = 75.0;
                this.isDynamicJoystick = false;
                this.canFollowPointer = false;
                this.joystickHeld = false;
                this.opacity = 1.0;
                this.m_value = pc.Vec2.ZERO.clone();
            }
        },
        methods: {
            /*SimpleInputNamespace.Joystick.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.Joystick#Awake", this ); }

                this.joystickTR = Bridge.cast(this.transform, UnityEngine.RectTransform);
                this.thumbTR = this.thumb.rectTransform;
                this.background = this.GetComponent(UnityEngine.UI.Graphic);

                if (this.isDynamicJoystick) {
                    this.opacity = 0.0;
                    this.thumb.raycastTarget = false;
                    if (UnityEngine.Object.op_Implicit(this.background)) {
                        this.background.raycastTarget = false;
                    }

                    this.OnUpdate();
                } else {
                    this.thumb.raycastTarget = true;
                    if (UnityEngine.Object.op_Implicit(this.background)) {
                        this.background.raycastTarget = true;
                    }
                }

                this._1OverMovementAreaRadius = 1.0 / this.movementAreaRadius;
                this.movementAreaRadiusSqr = this.movementAreaRadius * this.movementAreaRadius;
                this.deadzoneRadiusSqr = this.deadzoneRadius * this.deadzoneRadius;

                this.joystickInitialPos = this.joystickTR.anchoredPosition.$clone();
                this.thumbTR.localPosition = pc.Vec3.ZERO.clone();
            },
            /*SimpleInputNamespace.Joystick.Awake end.*/

            /*SimpleInputNamespace.Joystick.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.Joystick#Start", this ); }

                var eventReceiver;
                if (!this.isDynamicJoystick) {
                    if (UnityEngine.Object.op_Implicit(this.background)) {
                        eventReceiver = this.background.gameObject.AddComponent(SimpleInputNamespace.SimpleInputDragListener);
                    } else {
                        eventReceiver = this.thumbTR.gameObject.AddComponent(SimpleInputNamespace.SimpleInputDragListener);
                    }
                } else {
                    if (!UnityEngine.Object.op_Implicit(this.dynamicJoystickMovementArea)) {
                        this.dynamicJoystickMovementArea = new UnityEngine.GameObject.$ctor3("Dynamic Joystick Movement Area", UnityEngine.RectTransform).GetComponent(UnityEngine.RectTransform);
                        this.dynamicJoystickMovementArea.SetParent(this.thumb.canvas.transform, false);
                        this.dynamicJoystickMovementArea.SetAsFirstSibling();
                        this.dynamicJoystickMovementArea.anchorMin = pc.Vec2.ZERO.clone();
                        this.dynamicJoystickMovementArea.anchorMax = pc.Vec2.ONE.clone();
                        this.dynamicJoystickMovementArea.sizeDelta = pc.Vec2.ZERO.clone();
                        this.dynamicJoystickMovementArea.anchoredPosition = pc.Vec2.ZERO.clone();
                    }

                    eventReceiver = this.dynamicJoystickMovementArea.gameObject.AddComponent(SimpleInputNamespace.SimpleInputDragListener);
                }

                eventReceiver.Listener = this;
            },
            /*SimpleInputNamespace.Joystick.Start end.*/

            /*SimpleInputNamespace.Joystick.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.Joystick#OnEnable", this ); }

                this.xAxis.StartTracking();
                this.yAxis.StartTracking();

                SimpleInput.addOnUpdate(Bridge.fn.cacheBind(this, this.OnUpdate));
            },
            /*SimpleInputNamespace.Joystick.OnEnable end.*/

            /*SimpleInputNamespace.Joystick.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.Joystick#OnDisable", this ); }

                this.OnPointerUp(null);

                this.xAxis.StopTracking();
                this.yAxis.StopTracking();

                SimpleInput.removeOnUpdate(Bridge.fn.cacheBind(this, this.OnUpdate));
            },
            /*SimpleInputNamespace.Joystick.OnDisable end.*/

            /*SimpleInputNamespace.Joystick.OnPointerDown start.*/
            OnPointerDown: function (eventData) {
if ( TRACE ) { TRACE( "SimpleInputNamespace.Joystick#OnPointerDown", this ); }

                this.joystickHeld = true;

                if (this.isDynamicJoystick) {
                    this.pointerInitialPos = pc.Vec2.ZERO.clone();

                    var joystickPos = { v : new UnityEngine.Vector3() };
                    UnityEngine.RectTransformUtility.ScreenPointToWorldPointInRectangle(this.dynamicJoystickMovementArea, eventData.position, eventData.pressEventCamera, joystickPos);
                    this.joystickTR.position = joystickPos.v.$clone();
                } else {
                    UnityEngine.RectTransformUtility.ScreenPointToLocalPointInRectangle(this.joystickTR, eventData.position, eventData.pressEventCamera, Bridge.ref(this, "pointerInitialPos"));
                }
            },
            /*SimpleInputNamespace.Joystick.OnPointerDown end.*/

            /*SimpleInputNamespace.Joystick.OnDrag start.*/
            OnDrag: function (eventData) {
if ( TRACE ) { TRACE( "SimpleInputNamespace.Joystick#OnDrag", this ); }

                var pointerPos = { v : new UnityEngine.Vector2() };
                UnityEngine.RectTransformUtility.ScreenPointToLocalPointInRectangle(this.joystickTR, eventData.position, eventData.pressEventCamera, pointerPos);

                var direction = pointerPos.v.$clone().sub( this.pointerInitialPos );
                if (this.movementAxes === SimpleInputNamespace.Joystick.MovementAxes.X) {
                    direction.y = 0.0;
                } else {
                    if (this.movementAxes === SimpleInputNamespace.Joystick.MovementAxes.Y) {
                        direction.x = 0.0;
                    }
                }

                if (direction.lengthSq() <= this.deadzoneRadiusSqr) {
                    this.m_value.set( 0.0, 0.0 );
                } else {
                    if (direction.lengthSq() > this.movementAreaRadiusSqr) {
                        var directionNormalized = direction.clone().normalize().$clone().scale( this.movementAreaRadius );
                        if (this.canFollowPointer) {
                            this.joystickTR.localPosition = this.joystickTR.localPosition.$clone().add( UnityEngine.Vector3.FromVector2((direction.$clone().sub( directionNormalized ))) );
                        }

                        direction = directionNormalized.$clone();
                    }

                    this.m_value = direction.$clone().scale( this._1OverMovementAreaRadius ).scale( this.valueMultiplier );
                }

                this.thumbTR.localPosition = UnityEngine.Vector3.FromVector2(direction.$clone());

                this.xAxis.value = this.m_value.x;
                this.yAxis.value = this.m_value.y;
            },
            /*SimpleInputNamespace.Joystick.OnDrag end.*/

            /*SimpleInputNamespace.Joystick.OnPointerUp start.*/
            OnPointerUp: function (eventData) {
if ( TRACE ) { TRACE( "SimpleInputNamespace.Joystick#OnPointerUp", this ); }

                this.joystickHeld = false;
                this.m_value = pc.Vec2.ZERO.clone();

                this.thumbTR.localPosition = pc.Vec3.ZERO.clone();
                if (!this.isDynamicJoystick && this.canFollowPointer) {
                    this.joystickTR.anchoredPosition = this.joystickInitialPos.$clone();
                }

                this.xAxis.value = 0.0;
                this.yAxis.value = 0.0;
            },
            /*SimpleInputNamespace.Joystick.OnPointerUp end.*/

            /*SimpleInputNamespace.Joystick.OnUpdate start.*/
            OnUpdate: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.Joystick#OnUpdate", this ); }

                if (!this.isDynamicJoystick) {
                    return;
                }

                if (this.joystickHeld) {
                    this.opacity = UnityEngine.Mathf.Min(1.0, this.opacity + UnityEngine.Time.unscaledDeltaTime * 4.0);
                } else {
                    this.opacity = UnityEngine.Mathf.Max(0.0, this.opacity - UnityEngine.Time.unscaledDeltaTime * 4.0);
                }

                var c = this.thumb.color.$clone();
                c.a = this.opacity;
                this.thumb.color = c.$clone();

                if (UnityEngine.Object.op_Implicit(this.background)) {
                    c = this.background.color.$clone();
                    c.a = this.opacity;
                    this.background.color = c.$clone();
                }
            },
            /*SimpleInputNamespace.Joystick.OnUpdate end.*/


        }
    });
    /*SimpleInputNamespace.Joystick end.*/

    /*SimpleInputNamespace.SteeringWheel start.*/
    Bridge.define("SimpleInputNamespace.SteeringWheel", {
        inherits: [UnityEngine.MonoBehaviour,SimpleInputNamespace.ISimpleInputDraggable],
        fields: {
            axis: null,
            wheel: null,
            wheelTR: null,
            centerPoint: null,
            maximumSteeringAngle: 0,
            wheelReleasedSpeed: 0,
            valueMultiplier: 0,
            wheelAngle: 0,
            wheelPrevAngle: 0,
            wheelBeingHeld: false,
            m_value: 0
        },
        props: {
            Value: {
                get: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.SteeringWheel#Value#get", this ); }

                    return this.m_value;
                }
            },
            Angle: {
                get: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.SteeringWheel#Angle#get", this ); }

                    return this.wheelAngle;
                }
            }
        },
        alias: [
            "OnPointerDown", "SimpleInputNamespace$ISimpleInputDraggable$OnPointerDown",
            "OnDrag", "SimpleInputNamespace$ISimpleInputDraggable$OnDrag",
            "OnPointerUp", "SimpleInputNamespace$ISimpleInputDraggable$OnPointerUp"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.SteeringWheel#init", this ); }

                this.centerPoint = new UnityEngine.Vector2();
                this.axis = new SimpleInput.AxisInput.$ctor1("Horizontal");
                this.maximumSteeringAngle = 200.0;
                this.wheelReleasedSpeed = 350.0;
                this.valueMultiplier = 1.0;
                this.wheelAngle = 0.0;
                this.wheelPrevAngle = 0.0;
                this.wheelBeingHeld = false;
            }
        },
        methods: {
            /*SimpleInputNamespace.SteeringWheel.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.SteeringWheel#Awake", this ); }

                this.wheel = this.GetComponent(UnityEngine.UI.Graphic);
                this.wheelTR = this.wheel.rectTransform;

                var eventReceiver = this.gameObject.AddComponent(SimpleInputNamespace.SimpleInputDragListener);
                eventReceiver.Listener = this;
            },
            /*SimpleInputNamespace.SteeringWheel.Awake end.*/

            /*SimpleInputNamespace.SteeringWheel.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.SteeringWheel#OnEnable", this ); }

                this.axis.StartTracking();
                SimpleInput.addOnUpdate(Bridge.fn.cacheBind(this, this.OnUpdate));
            },
            /*SimpleInputNamespace.SteeringWheel.OnEnable end.*/

            /*SimpleInputNamespace.SteeringWheel.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.SteeringWheel#OnDisable", this ); }

                this.axis.StopTracking();
                SimpleInput.removeOnUpdate(Bridge.fn.cacheBind(this, this.OnUpdate));
            },
            /*SimpleInputNamespace.SteeringWheel.OnDisable end.*/

            /*SimpleInputNamespace.SteeringWheel.OnUpdate start.*/
            OnUpdate: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.SteeringWheel#OnUpdate", this ); }

                // If the wheel is released, reset the rotation
                // to initial (zero) rotation by wheelReleasedSpeed degrees per second
                if (!this.wheelBeingHeld && this.wheelAngle !== 0.0) {
                    var deltaAngle = this.wheelReleasedSpeed * UnityEngine.Time.deltaTime;
                    if (Math.abs(deltaAngle) > Math.abs(this.wheelAngle)) {
                        this.wheelAngle = 0.0;
                    } else {
                        if (this.wheelAngle > 0.0) {
                            this.wheelAngle -= deltaAngle;
                        } else {
                            this.wheelAngle += deltaAngle;
                        }
                    }
                }

                // Rotate the wheel image
                this.wheelTR.localEulerAngles = new pc.Vec3( 0.0, 0.0, -this.wheelAngle );

                this.m_value = this.wheelAngle * this.valueMultiplier / this.maximumSteeringAngle;
                this.axis.value = this.m_value;
            },
            /*SimpleInputNamespace.SteeringWheel.OnUpdate end.*/

            /*SimpleInputNamespace.SteeringWheel.OnPointerDown start.*/
            OnPointerDown: function (eventData) {
if ( TRACE ) { TRACE( "SimpleInputNamespace.SteeringWheel#OnPointerDown", this ); }

                // Executed when mouse/finger starts touching the steering wheel
                this.wheelBeingHeld = true;
                this.centerPoint = UnityEngine.RectTransformUtility.WorldToScreenPoint(eventData.pressEventCamera, this.wheelTR.position);
                this.wheelPrevAngle = pc.Vec2.angle( pc.Vec2.UP.clone(), eventData.position.$clone().sub( this.centerPoint ) );
            },
            /*SimpleInputNamespace.SteeringWheel.OnPointerDown end.*/

            /*SimpleInputNamespace.SteeringWheel.OnDrag start.*/
            OnDrag: function (eventData) {
if ( TRACE ) { TRACE( "SimpleInputNamespace.SteeringWheel#OnDrag", this ); }

                // Executed when mouse/finger is dragged over the steering wheel
                var pointerPos = eventData.position.$clone();

                var wheelNewAngle = pc.Vec2.angle( pc.Vec2.UP.clone(), pointerPos.$clone().sub( this.centerPoint ) );

                // Do nothing if the pointer is too close to the center of the wheel
                if ((pointerPos.$clone().sub( this.centerPoint )).lengthSq() >= 400.0) {
                    if (pointerPos.x > this.centerPoint.x) {
                        this.wheelAngle += wheelNewAngle - this.wheelPrevAngle;
                    } else {
                        this.wheelAngle -= wheelNewAngle - this.wheelPrevAngle;
                    }
                }

                // Make sure wheel angle never exceeds maximumSteeringAngle
                this.wheelAngle = Math.max(-this.maximumSteeringAngle, Math.min(this.wheelAngle, this.maximumSteeringAngle));
                this.wheelPrevAngle = wheelNewAngle;
            },
            /*SimpleInputNamespace.SteeringWheel.OnDrag end.*/

            /*SimpleInputNamespace.SteeringWheel.OnPointerUp start.*/
            OnPointerUp: function (eventData) {
if ( TRACE ) { TRACE( "SimpleInputNamespace.SteeringWheel#OnPointerUp", this ); }

                // Executed when mouse/finger stops touching the steering wheel
                // Performs one last OnDrag calculation, just in case
                this.OnDrag(eventData);

                this.wheelBeingHeld = false;
            },
            /*SimpleInputNamespace.SteeringWheel.OnPointerUp end.*/


        }
    });
    /*SimpleInputNamespace.SteeringWheel end.*/

    /*SimpleInputNamespace.Touchpad start.*/
    Bridge.define("SimpleInputNamespace.Touchpad", {
        inherits: [SimpleInputNamespace.SelectivePointerInput,SimpleInputNamespace.ISimpleInputDraggableMultiTouch],
        fields: {
            xAxis: null,
            yAxis: null,
            invertHorizontal: false,
            invertVertical: false,
            sensitivity: 0,
            eventReceiver: null,
            m_value: null
        },
        props: {
            Priority: {
                get: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.Touchpad#Priority#get", this ); }

                    return 1;
                }
            },
            Value: {
                get: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.Touchpad#Value#get", this ); }

                    return this.m_value.$clone();
                }
            }
        },
        alias: [
            "Priority", "SimpleInputNamespace$ISimpleInputDraggableMultiTouch$Priority",
            "OnUpdate", "SimpleInputNamespace$ISimpleInputDraggableMultiTouch$OnUpdate"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.Touchpad#init", this ); }

                this.m_value = new UnityEngine.Vector2();
                this.xAxis = new SimpleInput.AxisInput.$ctor1("Horizontal");
                this.yAxis = new SimpleInput.AxisInput.$ctor1("Vertical");
                this.sensitivity = 1.0;
                this.m_value = pc.Vec2.ZERO.clone();
            }
        },
        methods: {
            /*SimpleInputNamespace.Touchpad.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.Touchpad#Awake", this ); }

                this.eventReceiver = this.GetComponent(SimpleInputNamespace.SimpleInputMultiDragListener);
            },
            /*SimpleInputNamespace.Touchpad.Awake end.*/

            /*SimpleInputNamespace.Touchpad.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.Touchpad#OnEnable", this ); }

                this.eventReceiver.AddListener(this);

                this.xAxis.StartTracking();
                this.yAxis.StartTracking();
            },
            /*SimpleInputNamespace.Touchpad.OnEnable end.*/

            /*SimpleInputNamespace.Touchpad.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.Touchpad#OnDisable", this ); }

                this.eventReceiver.RemoveListener(this);

                this.xAxis.StopTracking();
                this.yAxis.StopTracking();
            },
            /*SimpleInputNamespace.Touchpad.OnDisable end.*/

            /*SimpleInputNamespace.Touchpad.OnUpdate start.*/
            OnUpdate: function (mousePointers, touchPointers, activeListener) {
if ( TRACE ) { TRACE( "SimpleInputNamespace.Touchpad#OnUpdate", this ); }

                this.xAxis.value = 0.0;
                this.yAxis.value = 0.0;

                if (activeListener != null && activeListener.SimpleInputNamespace$ISimpleInputDraggableMultiTouch$Priority > this.Priority) {
                    return false;
                }

                var pointer = this.GetSatisfyingPointer(mousePointers, touchPointers);
                if (pointer == null) {
                    return false;
                }

                this.m_value = pointer.delta.$clone().scale( SimpleInputNamespace.SimpleInputUtils.ResolutionMultiplier ).scale( this.sensitivity );

                this.xAxis.value = this.invertHorizontal ? -this.m_value.x : this.m_value.x;
                this.yAxis.value = this.invertVertical ? -this.m_value.y : this.m_value.y;

                return true;
            },
            /*SimpleInputNamespace.Touchpad.OnUpdate end.*/


        }
    });
    /*SimpleInputNamespace.Touchpad end.*/

    /*CodeBase.Services.Input.MobileInputService start.*/
    Bridge.define("CodeBase.Services.Input.MobileInputService", {
        inherits: [CodeBase.Services.Input.InputService],
        props: {
            Axis: {
                get: function () {
if ( TRACE ) { TRACE( "CodeBase.Services.Input.MobileInputService#Axis#get", this ); }

                    return CodeBase.Services.Input.InputService.SimpleInputAxis();
                }
            }
        },
        alias: ["Axis", "CodeBase$Services$Input$IInputService$Axis"]
    });
    /*CodeBase.Services.Input.MobileInputService end.*/

    /*CodeBase.Services.Input.StandaloneInputService start.*/
    Bridge.define("CodeBase.Services.Input.StandaloneInputService", {
        inherits: [CodeBase.Services.Input.InputService],
        statics: {
            methods: {
                /*CodeBase.Services.Input.StandaloneInputService.UnityAxis:static start.*/
                UnityAxis: function () {
if ( TRACE ) { TRACE( "CodeBase.Services.Input.StandaloneInputService#UnityAxis", this ); }

                    return new pc.Vec2( UnityEngine.Input.GetAxis(CodeBase.Services.Input.InputService.Horizontal), UnityEngine.Input.GetAxis(CodeBase.Services.Input.InputService.Vertical) );
                },
                /*CodeBase.Services.Input.StandaloneInputService.UnityAxis:static end.*/


            }
        },
        props: {
            Axis: {
                get: function () {
if ( TRACE ) { TRACE( "CodeBase.Services.Input.StandaloneInputService#Axis#get", this ); }

                    var axis = CodeBase.Services.Input.InputService.SimpleInputAxis();
                    if (pc.Vec2.equals( axis, pc.Vec2.ZERO.clone() )) {
                        axis = CodeBase.Services.Input.StandaloneInputService.UnityAxis();
                    }
                    return axis.$clone();
                }
            }
        },
        alias: ["Axis", "CodeBase$Services$Input$IInputService$Axis"]
    });
    /*CodeBase.Services.Input.StandaloneInputService end.*/

    /*SimpleInput+AxisInput start.*/
    Bridge.define("SimpleInput.AxisInput", {
        inherits: [SimpleInputNamespace.BaseInput$2(System.String,System.Single)],
        $kind: 1002,
        ctors: {
            ctor: function () {
if ( TRACE ) { TRACE( "SimpleInput.AxisInput#ctor", this ); }

                this.$initialize();
                SimpleInputNamespace.BaseInput$2(System.String,System.Single).ctor.call(this);
            },
            $ctor1: function (key) {
if ( TRACE ) { TRACE( "SimpleInput.AxisInput#$ctor1", this ); }

                this.$initialize();
                SimpleInputNamespace.BaseInput$2(System.String,System.Single).$ctor1.call(this, key);
            }
        },
        methods: {
            /*SimpleInput+AxisInput.IsKeyValid start.*/
            IsKeyValid: function () {
if ( TRACE ) { TRACE( "SimpleInput.AxisInput#IsKeyValid", this ); }

                return !System.String.isNullOrEmpty(this.Key);
            },
            /*SimpleInput+AxisInput.IsKeyValid end.*/

            /*SimpleInput+AxisInput.KeysEqual start.*/
            KeysEqual: function (key1, key2) {
if ( TRACE ) { TRACE( "SimpleInput.AxisInput#KeysEqual", this ); }

                return Bridge.referenceEquals(key1, key2);
            },
            /*SimpleInput+AxisInput.KeysEqual end.*/

            /*SimpleInput+AxisInput.RegisterInput start.*/
            RegisterInput: function () {
if ( TRACE ) { TRACE( "SimpleInput.AxisInput#RegisterInput", this ); }

                SimpleInput.RegisterAxis(this);
            },
            /*SimpleInput+AxisInput.RegisterInput end.*/

            /*SimpleInput+AxisInput.UnregisterInput start.*/
            UnregisterInput: function () {
if ( TRACE ) { TRACE( "SimpleInput.AxisInput#UnregisterInput", this ); }

                SimpleInput.UnregisterAxis(this);
            },
            /*SimpleInput+AxisInput.UnregisterInput end.*/


        }
    });
    /*SimpleInput+AxisInput end.*/

    /*SimpleInput+ButtonInput start.*/
    Bridge.define("SimpleInput.ButtonInput", {
        inherits: [SimpleInputNamespace.BaseInput$2(System.String,System.Boolean)],
        $kind: 1002,
        ctors: {
            ctor: function () {
if ( TRACE ) { TRACE( "SimpleInput.ButtonInput#ctor", this ); }

                this.$initialize();
                SimpleInputNamespace.BaseInput$2(System.String,System.Boolean).ctor.call(this);
            },
            $ctor1: function (key) {
if ( TRACE ) { TRACE( "SimpleInput.ButtonInput#$ctor1", this ); }

                this.$initialize();
                SimpleInputNamespace.BaseInput$2(System.String,System.Boolean).$ctor1.call(this, key);
            }
        },
        methods: {
            /*SimpleInput+ButtonInput.IsKeyValid start.*/
            IsKeyValid: function () {
if ( TRACE ) { TRACE( "SimpleInput.ButtonInput#IsKeyValid", this ); }

                return !System.String.isNullOrEmpty(this.Key);
            },
            /*SimpleInput+ButtonInput.IsKeyValid end.*/

            /*SimpleInput+ButtonInput.KeysEqual start.*/
            KeysEqual: function (key1, key2) {
if ( TRACE ) { TRACE( "SimpleInput.ButtonInput#KeysEqual", this ); }

                return Bridge.referenceEquals(key1, key2);
            },
            /*SimpleInput+ButtonInput.KeysEqual end.*/

            /*SimpleInput+ButtonInput.RegisterInput start.*/
            RegisterInput: function () {
if ( TRACE ) { TRACE( "SimpleInput.ButtonInput#RegisterInput", this ); }

                SimpleInput.RegisterButton(this);
            },
            /*SimpleInput+ButtonInput.RegisterInput end.*/

            /*SimpleInput+ButtonInput.UnregisterInput start.*/
            UnregisterInput: function () {
if ( TRACE ) { TRACE( "SimpleInput.ButtonInput#UnregisterInput", this ); }

                SimpleInput.UnregisterButton(this);
            },
            /*SimpleInput+ButtonInput.UnregisterInput end.*/


        }
    });
    /*SimpleInput+ButtonInput end.*/

    /*SimpleInput+KeyInput start.*/
    Bridge.define("SimpleInput.KeyInput", {
        inherits: [SimpleInputNamespace.BaseInput$2(UnityEngine.KeyCode,System.Boolean)],
        $kind: 1002,
        ctors: {
            ctor: function () {
if ( TRACE ) { TRACE( "SimpleInput.KeyInput#ctor", this ); }

                this.$initialize();
                SimpleInputNamespace.BaseInput$2(UnityEngine.KeyCode,System.Boolean).ctor.call(this);
            },
            $ctor1: function (key) {
if ( TRACE ) { TRACE( "SimpleInput.KeyInput#$ctor1", this ); }

                this.$initialize();
                SimpleInputNamespace.BaseInput$2(UnityEngine.KeyCode,System.Boolean).$ctor1.call(this, key);
            }
        },
        methods: {
            /*SimpleInput+KeyInput.KeysEqual start.*/
            KeysEqual: function (key1, key2) {
if ( TRACE ) { TRACE( "SimpleInput.KeyInput#KeysEqual", this ); }

                return key1 === key2;
            },
            /*SimpleInput+KeyInput.KeysEqual end.*/

            /*SimpleInput+KeyInput.RegisterInput start.*/
            RegisterInput: function () {
if ( TRACE ) { TRACE( "SimpleInput.KeyInput#RegisterInput", this ); }

                SimpleInput.RegisterKey(this);
            },
            /*SimpleInput+KeyInput.RegisterInput end.*/

            /*SimpleInput+KeyInput.UnregisterInput start.*/
            UnregisterInput: function () {
if ( TRACE ) { TRACE( "SimpleInput.KeyInput#UnregisterInput", this ); }

                SimpleInput.UnregisterKey(this);
            },
            /*SimpleInput+KeyInput.UnregisterInput end.*/


        }
    });
    /*SimpleInput+KeyInput end.*/

    /*SimpleInput+MouseButtonInput start.*/
    Bridge.define("SimpleInput.MouseButtonInput", {
        inherits: [SimpleInputNamespace.BaseInput$2(System.Int32,System.Boolean)],
        $kind: 1002,
        ctors: {
            ctor: function () {
if ( TRACE ) { TRACE( "SimpleInput.MouseButtonInput#ctor", this ); }

                this.$initialize();
                SimpleInputNamespace.BaseInput$2(System.Int32,System.Boolean).ctor.call(this);
            },
            $ctor1: function (key) {
if ( TRACE ) { TRACE( "SimpleInput.MouseButtonInput#$ctor1", this ); }

                this.$initialize();
                SimpleInputNamespace.BaseInput$2(System.Int32,System.Boolean).$ctor1.call(this, key);
            }
        },
        methods: {
            /*SimpleInput+MouseButtonInput.KeysEqual start.*/
            KeysEqual: function (key1, key2) {
if ( TRACE ) { TRACE( "SimpleInput.MouseButtonInput#KeysEqual", this ); }

                return key1 === key2;
            },
            /*SimpleInput+MouseButtonInput.KeysEqual end.*/

            /*SimpleInput+MouseButtonInput.RegisterInput start.*/
            RegisterInput: function () {
if ( TRACE ) { TRACE( "SimpleInput.MouseButtonInput#RegisterInput", this ); }

                SimpleInput.RegisterMouseButton(this);
            },
            /*SimpleInput+MouseButtonInput.RegisterInput end.*/

            /*SimpleInput+MouseButtonInput.UnregisterInput start.*/
            UnregisterInput: function () {
if ( TRACE ) { TRACE( "SimpleInput.MouseButtonInput#UnregisterInput", this ); }

                SimpleInput.UnregisterMouseButton(this);
            },
            /*SimpleInput+MouseButtonInput.UnregisterInput end.*/


        }
    });
    /*SimpleInput+MouseButtonInput end.*/

    /*SimpleInputNamespace.AxisInputSwipeGesture start.*/
    Bridge.define("SimpleInputNamespace.AxisInputSwipeGesture", {
        inherits: [SimpleInputNamespace.SwipeGestureBase$2(System.String,System.Single)],
        fields: {
            axis: null,
            value: 0
        },
        props: {
            Input: {
                get: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.AxisInputSwipeGesture#Input#get", this ); }

                    return this.axis;
                }
            },
            Value: {
                get: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.AxisInputSwipeGesture#Value#get", this ); }

                    return this.value;
                }
            },
            Priority: {
                get: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.AxisInputSwipeGesture#Priority#get", this ); }

                    return 1;
                }
            }
        },
        alias: ["Priority", "SimpleInputNamespace$ISimpleInputDraggableMultiTouch$Priority"],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.AxisInputSwipeGesture#init", this ); }

                this.axis = new SimpleInput.AxisInput.ctor();
                this.value = 1.0;
            }
        }
    });
    /*SimpleInputNamespace.AxisInputSwipeGesture end.*/

    /*SimpleInputNamespace.ButtonInputSwipeGesture start.*/
    Bridge.define("SimpleInputNamespace.ButtonInputSwipeGesture", {
        inherits: [SimpleInputNamespace.SwipeGestureBase$2(System.String,System.Boolean)],
        fields: {
            button: null
        },
        props: {
            Input: {
                get: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.ButtonInputSwipeGesture#Input#get", this ); }

                    return this.button;
                }
            },
            Value: {
                get: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.ButtonInputSwipeGesture#Value#get", this ); }

                    return true;
                }
            },
            Priority: {
                get: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.ButtonInputSwipeGesture#Priority#get", this ); }

                    return 1;
                }
            }
        },
        alias: ["Priority", "SimpleInputNamespace$ISimpleInputDraggableMultiTouch$Priority"],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.ButtonInputSwipeGesture#init", this ); }

                this.button = new SimpleInput.ButtonInput.ctor();
            }
        }
    });
    /*SimpleInputNamespace.ButtonInputSwipeGesture end.*/

    /*SimpleInputNamespace.KeyInputSwipeGesture start.*/
    Bridge.define("SimpleInputNamespace.KeyInputSwipeGesture", {
        inherits: [SimpleInputNamespace.SwipeGestureBase$2(UnityEngine.KeyCode,System.Boolean)],
        fields: {
            key: null
        },
        props: {
            Input: {
                get: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.KeyInputSwipeGesture#Input#get", this ); }

                    return this.key;
                }
            },
            Value: {
                get: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.KeyInputSwipeGesture#Value#get", this ); }

                    return true;
                }
            },
            Priority: {
                get: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.KeyInputSwipeGesture#Priority#get", this ); }

                    return 1;
                }
            }
        },
        alias: ["Priority", "SimpleInputNamespace$ISimpleInputDraggableMultiTouch$Priority"],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.KeyInputSwipeGesture#init", this ); }

                this.key = new SimpleInput.KeyInput.ctor();
            }
        }
    });
    /*SimpleInputNamespace.KeyInputSwipeGesture end.*/

    /*SimpleInputNamespace.MouseButtonInputSwipeGesture start.*/
    Bridge.define("SimpleInputNamespace.MouseButtonInputSwipeGesture", {
        inherits: [SimpleInputNamespace.SwipeGestureBase$2(System.Int32,System.Boolean)],
        fields: {
            mouseButton: null
        },
        props: {
            Input: {
                get: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.MouseButtonInputSwipeGesture#Input#get", this ); }

                    return this.mouseButton;
                }
            },
            Value: {
                get: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.MouseButtonInputSwipeGesture#Value#get", this ); }

                    return true;
                }
            },
            Priority: {
                get: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.MouseButtonInputSwipeGesture#Priority#get", this ); }

                    return 1;
                }
            }
        },
        alias: ["Priority", "SimpleInputNamespace$ISimpleInputDraggableMultiTouch$Priority"],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SimpleInputNamespace.MouseButtonInputSwipeGesture#init", this ); }

                this.mouseButton = new SimpleInput.MouseButtonInput.ctor();
            }
        }
    });
    /*SimpleInputNamespace.MouseButtonInputSwipeGesture end.*/

    /*SimpleInputHelper+ButtonClickInput start.*/
    Bridge.define("SimpleInputHelper.ButtonClickInput", {
        inherits: [SimpleInput.ButtonInput],
        $kind: 1002,
        ctors: {
            ctor: function (key) {
if ( TRACE ) { TRACE( "SimpleInputHelper.ButtonClickInput#ctor", this ); }

                this.$initialize();
                SimpleInput.ButtonInput.$ctor1.call(this, key);
            }
        },
        methods: {
            /*SimpleInputHelper+ButtonClickInput.OnUpdate start.*/
            OnUpdate: function () {
if ( TRACE ) { TRACE( "SimpleInputHelper.ButtonClickInput#OnUpdate", this ); }

                if (!this.value) {
                    this.value = true;
                } else {
                    this.StopTracking();
                    SimpleInput.removeOnUpdate(Bridge.fn.cacheBind(this, this.OnUpdate));
                }
            },
            /*SimpleInputHelper+ButtonClickInput.OnUpdate end.*/


        }
    });
    /*SimpleInputHelper+ButtonClickInput end.*/

    /*SimpleInputHelper+KeyClickInput start.*/
    Bridge.define("SimpleInputHelper.KeyClickInput", {
        inherits: [SimpleInput.KeyInput],
        $kind: 1002,
        ctors: {
            ctor: function (key) {
if ( TRACE ) { TRACE( "SimpleInputHelper.KeyClickInput#ctor", this ); }

                this.$initialize();
                SimpleInput.KeyInput.$ctor1.call(this, key);
            }
        },
        methods: {
            /*SimpleInputHelper+KeyClickInput.OnUpdate start.*/
            OnUpdate: function () {
if ( TRACE ) { TRACE( "SimpleInputHelper.KeyClickInput#OnUpdate", this ); }

                if (!this.value) {
                    this.value = true;
                } else {
                    this.StopTracking();
                    SimpleInput.removeOnUpdate(Bridge.fn.cacheBind(this, this.OnUpdate));
                }
            },
            /*SimpleInputHelper+KeyClickInput.OnUpdate end.*/


        }
    });
    /*SimpleInputHelper+KeyClickInput end.*/

    /*SimpleInputHelper+MouseButtonClickInput start.*/
    Bridge.define("SimpleInputHelper.MouseButtonClickInput", {
        inherits: [SimpleInput.MouseButtonInput],
        $kind: 1002,
        ctors: {
            ctor: function (key) {
if ( TRACE ) { TRACE( "SimpleInputHelper.MouseButtonClickInput#ctor", this ); }

                this.$initialize();
                SimpleInput.MouseButtonInput.$ctor1.call(this, key);
            }
        },
        methods: {
            /*SimpleInputHelper+MouseButtonClickInput.OnUpdate start.*/
            OnUpdate: function () {
if ( TRACE ) { TRACE( "SimpleInputHelper.MouseButtonClickInput#OnUpdate", this ); }

                if (!this.value) {
                    this.value = true;
                } else {
                    this.StopTracking();
                    SimpleInput.removeOnUpdate(Bridge.fn.cacheBind(this, this.OnUpdate));
                }
            },
            /*SimpleInputHelper+MouseButtonClickInput.OnUpdate end.*/


        }
    });
    /*SimpleInputHelper+MouseButtonClickInput end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine","UnityEngine.SceneManagement","System.Collections.Generic","SimpleInputNamespace","UnityEngine.EventSystems","UnityEngine.UI","CodeBase.Services.Input","CodeBase.Infrastructure"];

    /*SimpleInput start.*/
    $m("SimpleInput", function () { return {"nested":[SimpleInput.InputState,SimpleInput.Axis,SimpleInput.Button,SimpleInput.MouseButton,SimpleInput.Key,SimpleInput.AxisInput,SimpleInput.ButtonInput,SimpleInput.MouseButtonInput,SimpleInput.KeyInput,Function],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"GetAxis","is":true,"t":8,"pi":[{"n":"axis","pt":$n[0].String,"ps":0}],"sn":"GetAxis","rt":$n[0].Single,"p":[$n[0].String],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"GetAxisRaw","is":true,"t":8,"pi":[{"n":"axis","pt":$n[0].String,"ps":0}],"sn":"GetAxisRaw","rt":$n[0].Single,"p":[$n[0].String],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"GetButton","is":true,"t":8,"pi":[{"n":"button","pt":$n[0].String,"ps":0}],"sn":"GetButton","rt":$n[0].Boolean,"p":[$n[0].String],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"GetButtonDown","is":true,"t":8,"pi":[{"n":"button","pt":$n[0].String,"ps":0}],"sn":"GetButtonDown","rt":$n[0].Boolean,"p":[$n[0].String],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"GetButtonUp","is":true,"t":8,"pi":[{"n":"button","pt":$n[0].String,"ps":0}],"sn":"GetButtonUp","rt":$n[0].Boolean,"p":[$n[0].String],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"GetKey","is":true,"t":8,"pi":[{"n":"key","pt":$n[1].KeyCode,"ps":0}],"sn":"GetKey","rt":$n[0].Boolean,"p":[$n[1].KeyCode],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"GetKeyDown","is":true,"t":8,"pi":[{"n":"key","pt":$n[1].KeyCode,"ps":0}],"sn":"GetKeyDown","rt":$n[0].Boolean,"p":[$n[1].KeyCode],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"GetKeyUp","is":true,"t":8,"pi":[{"n":"key","pt":$n[1].KeyCode,"ps":0}],"sn":"GetKeyUp","rt":$n[0].Boolean,"p":[$n[1].KeyCode],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"GetMouseButton","is":true,"t":8,"pi":[{"n":"button","pt":$n[0].Int32,"ps":0}],"sn":"GetMouseButton","rt":$n[0].Boolean,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"GetMouseButtonDown","is":true,"t":8,"pi":[{"n":"button","pt":$n[0].Int32,"ps":0}],"sn":"GetMouseButtonDown","rt":$n[0].Boolean,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"GetMouseButtonUp","is":true,"t":8,"pi":[{"n":"button","pt":$n[0].Int32,"ps":0}],"sn":"GetMouseButtonUp","rt":$n[0].Boolean,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.RuntimeInitializeOnLoadMethodAttribute.$ctor1(0)],"a":1,"n":"Init","is":true,"t":8,"sn":"Init","rt":$n[0].Void},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"OnSceneChanged","is":true,"t":8,"pi":[{"n":"scene","pt":LunaUnity.Objects.Scene,"ps":0},{"n":"loadSceneMode","pt":$n[2].LoadSceneMode,"ps":1}],"sn":"OnSceneChanged","rt":$n[0].Void,"p":[LunaUnity.Objects.Scene,$n[2].LoadSceneMode]},{"a":1,"n":"RegisterAxis","is":true,"t":8,"pi":[{"n":"input","pt":SimpleInput.AxisInput,"ps":0}],"sn":"RegisterAxis","rt":$n[0].Void,"p":[SimpleInput.AxisInput]},{"a":1,"n":"RegisterButton","is":true,"t":8,"pi":[{"n":"input","pt":SimpleInput.ButtonInput,"ps":0}],"sn":"RegisterButton","rt":$n[0].Void,"p":[SimpleInput.ButtonInput]},{"a":1,"n":"RegisterKey","is":true,"t":8,"pi":[{"n":"input","pt":SimpleInput.KeyInput,"ps":0}],"sn":"RegisterKey","rt":$n[0].Void,"p":[SimpleInput.KeyInput]},{"a":1,"n":"RegisterMouseButton","is":true,"t":8,"pi":[{"n":"input","pt":SimpleInput.MouseButtonInput,"ps":0}],"sn":"RegisterMouseButton","rt":$n[0].Void,"p":[SimpleInput.MouseButtonInput]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"TrackAxis","is":true,"t":8,"pi":[{"n":"axis","pt":$n[0].String,"ps":0},{"n":"trackUnityAxisOnly","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"TrackAxis","rt":$n[0].Void,"p":[$n[0].String,$n[0].Boolean]},{"a":1,"n":"TrackButton","is":true,"t":8,"pi":[{"n":"button","pt":$n[0].String,"ps":0},{"n":"trackUnityButtonOnly","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"TrackButton","rt":$n[0].Void,"p":[$n[0].String,$n[0].Boolean]},{"a":1,"n":"TrackMouseButton","is":true,"t":8,"pi":[{"n":"button","pt":$n[0].Int32,"ps":0},{"n":"trackUnityMouseButtonOnly","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"TrackMouseButton","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Boolean]},{"a":1,"n":"UnregisterAxis","is":true,"t":8,"pi":[{"n":"input","pt":SimpleInput.AxisInput,"ps":0}],"sn":"UnregisterAxis","rt":$n[0].Void,"p":[SimpleInput.AxisInput]},{"a":1,"n":"UnregisterButton","is":true,"t":8,"pi":[{"n":"input","pt":SimpleInput.ButtonInput,"ps":0}],"sn":"UnregisterButton","rt":$n[0].Void,"p":[SimpleInput.ButtonInput]},{"a":1,"n":"UnregisterKey","is":true,"t":8,"pi":[{"n":"input","pt":SimpleInput.KeyInput,"ps":0}],"sn":"UnregisterKey","rt":$n[0].Void,"p":[SimpleInput.KeyInput]},{"a":1,"n":"UnregisterMouseButton","is":true,"t":8,"pi":[{"n":"input","pt":SimpleInput.MouseButtonInput,"ps":0}],"sn":"UnregisterMouseButton","rt":$n[0].Void,"p":[SimpleInput.MouseButtonInput]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"TrackUnityInput","is":true,"t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_TrackUnityInput","t":8,"rt":$n[0].Boolean,"fg":"TrackUnityInput","is":true,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":2,"n":"set_TrackUnityInput","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"TrackUnityInput","is":true},"fn":"TrackUnityInput"},{"a":2,"n":"GetAxisDeadZone","is":true,"t":4,"rt":$n[0].Single,"sn":"GetAxisDeadZone","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"GetAxisSensitivity","is":true,"t":4,"rt":$n[0].Single,"sn":"GetAxisSensitivity","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"GetAxisSnapValue","is":true,"t":4,"rt":$n[0].Boolean,"sn":"GetAxisSnapValue","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"GetAxisTimeScaleDependent","is":true,"t":4,"rt":$n[0].Boolean,"sn":"GetAxisTimeScaleDependent","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"axes","is":true,"t":4,"rt":$n[3].Dictionary$2(System.String,SimpleInput.Axis),"sn":"axes"},{"a":1,"n":"axesList","is":true,"t":4,"rt":$n[3].List$1(SimpleInput.Axis),"sn":"axesList"},{"a":1,"n":"buttons","is":true,"t":4,"rt":$n[3].Dictionary$2(System.String,SimpleInput.Button),"sn":"buttons"},{"a":1,"n":"buttonsList","is":true,"t":4,"rt":$n[3].List$1(SimpleInput.Button),"sn":"buttonsList"},{"a":1,"n":"instance","is":true,"t":4,"rt":SimpleInput,"sn":"instance"},{"a":1,"n":"keys","is":true,"t":4,"rt":$n[3].Dictionary$2(UnityEngine.KeyCode,SimpleInput.Key),"sn":"keys"},{"a":1,"n":"keysList","is":true,"t":4,"rt":$n[3].List$1(SimpleInput.Key),"sn":"keysList"},{"a":1,"n":"m_trackUnityInput","is":true,"t":4,"rt":$n[0].Boolean,"sn":"m_trackUnityInput","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"mouseButtons","is":true,"t":4,"rt":$n[3].Dictionary$2(System.Int32,SimpleInput.MouseButton),"sn":"mouseButtons"},{"a":1,"n":"mouseButtonsList","is":true,"t":4,"rt":$n[3].List$1(SimpleInput.MouseButton),"sn":"mouseButtonsList"},{"a":1,"n":"trackedTemporaryAxes","is":true,"t":4,"rt":$n[3].List$1(SimpleInput.AxisInput),"sn":"trackedTemporaryAxes"},{"a":1,"n":"trackedTemporaryButtons","is":true,"t":4,"rt":$n[3].List$1(SimpleInput.ButtonInput),"sn":"trackedTemporaryButtons"},{"a":1,"n":"trackedTemporaryMouseButtons","is":true,"t":4,"rt":$n[3].List$1(SimpleInput.MouseButtonInput),"sn":"trackedTemporaryMouseButtons"},{"a":1,"n":"trackedUnityAxes","is":true,"t":4,"rt":$n[3].List$1(SimpleInput.AxisInput),"sn":"trackedUnityAxes"},{"a":1,"n":"trackedUnityButtons","is":true,"t":4,"rt":$n[3].List$1(SimpleInput.ButtonInput),"sn":"trackedUnityButtons"},{"a":1,"n":"trackedUnityMouseButtons","is":true,"t":4,"rt":$n[3].List$1(SimpleInput.MouseButtonInput),"sn":"trackedUnityMouseButtons"},{"a":2,"n":"OnUpdate","is":true,"t":2,"ad":{"a":2,"n":"add_OnUpdate","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnUpdate","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnUpdate","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnUpdate","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*SimpleInput end.*/

    /*SimpleInput+InputState start.*/
    $m("SimpleInput.InputState", function () { return {"td":SimpleInput,"att":259,"a":1,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Held","is":true,"t":4,"rt":SimpleInput.InputState,"sn":"Held","box":function ($v) { return Bridge.box($v, SimpleInput.InputState, System.Enum.toStringFn(SimpleInput.InputState));}},{"a":2,"n":"None","is":true,"t":4,"rt":SimpleInput.InputState,"sn":"None","box":function ($v) { return Bridge.box($v, SimpleInput.InputState, System.Enum.toStringFn(SimpleInput.InputState));}},{"a":2,"n":"Pressed","is":true,"t":4,"rt":SimpleInput.InputState,"sn":"Pressed","box":function ($v) { return Bridge.box($v, SimpleInput.InputState, System.Enum.toStringFn(SimpleInput.InputState));}},{"a":2,"n":"Released","is":true,"t":4,"rt":SimpleInput.InputState,"sn":"Released","box":function ($v) { return Bridge.box($v, SimpleInput.InputState, System.Enum.toStringFn(SimpleInput.InputState));}}]}; }, $n);
    /*SimpleInput+InputState end.*/

    /*SimpleInput+Axis start.*/
    $m("SimpleInput.Axis", function () { return {"td":SimpleInput,"att":1048579,"a":1,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[0].String],"pi":[{"n":"axis","pt":$n[0].String,"ps":0}],"sn":"ctor"},{"a":2,"n":"inputs","t":4,"rt":$n[3].List$1(SimpleInput.AxisInput),"sn":"inputs","ro":true},{"a":2,"n":"name","t":4,"rt":$n[0].String,"sn":"name","ro":true},{"a":2,"n":"value","t":4,"rt":$n[0].Single,"sn":"value","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"valueRaw","t":4,"rt":$n[0].Single,"sn":"valueRaw","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*SimpleInput+Axis end.*/

    /*SimpleInput+Button start.*/
    $m("SimpleInput.Button", function () { return {"td":SimpleInput,"att":1048579,"a":1,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[0].String],"pi":[{"n":"button","pt":$n[0].String,"ps":0}],"sn":"ctor"},{"a":2,"n":"button","t":4,"rt":$n[0].String,"sn":"button","ro":true},{"a":2,"n":"inputs","t":4,"rt":$n[3].List$1(SimpleInput.ButtonInput),"sn":"inputs","ro":true},{"a":2,"n":"state","t":4,"rt":SimpleInput.InputState,"sn":"state","box":function ($v) { return Bridge.box($v, SimpleInput.InputState, System.Enum.toStringFn(SimpleInput.InputState));}}]}; }, $n);
    /*SimpleInput+Button end.*/

    /*SimpleInput+MouseButton start.*/
    $m("SimpleInput.MouseButton", function () { return {"td":SimpleInput,"att":1048579,"a":1,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[0].Int32],"pi":[{"n":"button","pt":$n[0].Int32,"ps":0}],"sn":"ctor"},{"a":2,"n":"button","t":4,"rt":$n[0].Int32,"sn":"button","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"inputs","t":4,"rt":$n[3].List$1(SimpleInput.MouseButtonInput),"sn":"inputs","ro":true},{"a":2,"n":"state","t":4,"rt":SimpleInput.InputState,"sn":"state","box":function ($v) { return Bridge.box($v, SimpleInput.InputState, System.Enum.toStringFn(SimpleInput.InputState));}}]}; }, $n);
    /*SimpleInput+MouseButton end.*/

    /*SimpleInput+Key start.*/
    $m("SimpleInput.Key", function () { return {"td":SimpleInput,"att":1048579,"a":1,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[1].KeyCode],"pi":[{"n":"key","pt":$n[1].KeyCode,"ps":0}],"sn":"ctor"},{"a":2,"n":"inputs","t":4,"rt":$n[3].List$1(SimpleInput.KeyInput),"sn":"inputs","ro":true},{"a":2,"n":"key","t":4,"rt":$n[1].KeyCode,"sn":"key","ro":true,"box":function ($v) { return Bridge.box($v, UnityEngine.KeyCode, System.Enum.toStringFn(UnityEngine.KeyCode));}},{"a":2,"n":"state","t":4,"rt":SimpleInput.InputState,"sn":"state","box":function ($v) { return Bridge.box($v, SimpleInput.InputState, System.Enum.toStringFn(SimpleInput.InputState));}}]}; }, $n);
    /*SimpleInput+Key end.*/

    /*SimpleInput+AxisInput start.*/
    $m("SimpleInput.AxisInput", function () { return {"td":SimpleInput,"att":1056770,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":".ctor","t":1,"p":[$n[0].String],"pi":[{"n":"key","pt":$n[0].String,"ps":0}],"sn":"$ctor1"},{"ov":true,"a":2,"n":"IsKeyValid","t":8,"sn":"IsKeyValid","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"ov":true,"a":3,"n":"KeysEqual","t":8,"pi":[{"n":"key1","pt":$n[0].String,"ps":0},{"n":"key2","pt":$n[0].String,"ps":1}],"sn":"KeysEqual","rt":$n[0].Boolean,"p":[$n[0].String,$n[0].String],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"ov":true,"a":3,"n":"RegisterInput","t":8,"sn":"RegisterInput","rt":$n[0].Void},{"ov":true,"a":3,"n":"UnregisterInput","t":8,"sn":"UnregisterInput","rt":$n[0].Void}]}; }, $n);
    /*SimpleInput+AxisInput end.*/

    /*SimpleInput+ButtonInput start.*/
    $m("SimpleInput.ButtonInput", function () { return {"td":SimpleInput,"att":1056770,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":".ctor","t":1,"p":[$n[0].String],"pi":[{"n":"key","pt":$n[0].String,"ps":0}],"sn":"$ctor1"},{"ov":true,"a":2,"n":"IsKeyValid","t":8,"sn":"IsKeyValid","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"ov":true,"a":3,"n":"KeysEqual","t":8,"pi":[{"n":"key1","pt":$n[0].String,"ps":0},{"n":"key2","pt":$n[0].String,"ps":1}],"sn":"KeysEqual","rt":$n[0].Boolean,"p":[$n[0].String,$n[0].String],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"ov":true,"a":3,"n":"RegisterInput","t":8,"sn":"RegisterInput","rt":$n[0].Void},{"ov":true,"a":3,"n":"UnregisterInput","t":8,"sn":"UnregisterInput","rt":$n[0].Void}]}; }, $n);
    /*SimpleInput+ButtonInput end.*/

    /*SimpleInput+MouseButtonInput start.*/
    $m("SimpleInput.MouseButtonInput", function () { return {"td":SimpleInput,"att":1056770,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":".ctor","t":1,"p":[$n[0].Int32],"pi":[{"n":"key","pt":$n[0].Int32,"ps":0}],"sn":"$ctor1"},{"ov":true,"a":3,"n":"KeysEqual","t":8,"pi":[{"n":"key1","pt":$n[0].Int32,"ps":0},{"n":"key2","pt":$n[0].Int32,"ps":1}],"sn":"KeysEqual","rt":$n[0].Boolean,"p":[$n[0].Int32,$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"ov":true,"a":3,"n":"RegisterInput","t":8,"sn":"RegisterInput","rt":$n[0].Void},{"ov":true,"a":3,"n":"UnregisterInput","t":8,"sn":"UnregisterInput","rt":$n[0].Void}]}; }, $n);
    /*SimpleInput+MouseButtonInput end.*/

    /*SimpleInput+KeyInput start.*/
    $m("SimpleInput.KeyInput", function () { return {"td":SimpleInput,"att":1056770,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":".ctor","t":1,"p":[$n[1].KeyCode],"pi":[{"n":"key","pt":$n[1].KeyCode,"ps":0}],"sn":"$ctor1"},{"ov":true,"a":3,"n":"KeysEqual","t":8,"pi":[{"n":"key1","pt":$n[1].KeyCode,"ps":0},{"n":"key2","pt":$n[1].KeyCode,"ps":1}],"sn":"KeysEqual","rt":$n[0].Boolean,"p":[$n[1].KeyCode,$n[1].KeyCode],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"ov":true,"a":3,"n":"RegisterInput","t":8,"sn":"RegisterInput","rt":$n[0].Void},{"ov":true,"a":3,"n":"UnregisterInput","t":8,"sn":"UnregisterInput","rt":$n[0].Void}]}; }, $n);
    /*SimpleInput+KeyInput end.*/

    /*SimpleInputHelper start.*/
    $m("SimpleInputHelper", function () { return {"nested":[SimpleInputHelper.ButtonClickInput,SimpleInputHelper.MouseButtonClickInput,SimpleInputHelper.KeyClickInput],"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"TriggerButtonClick","is":true,"t":8,"pi":[{"n":"button","pt":$n[0].String,"ps":0}],"sn":"TriggerButtonClick","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"TriggerKeyClick","is":true,"t":8,"pi":[{"n":"key","pt":$n[1].KeyCode,"ps":0}],"sn":"TriggerKeyClick","rt":$n[0].Void,"p":[$n[1].KeyCode]},{"a":2,"n":"TriggerMouseButtonClick","is":true,"t":8,"pi":[{"n":"button","pt":$n[0].Int32,"ps":0}],"sn":"TriggerMouseButtonClick","rt":$n[0].Void,"p":[$n[0].Int32]}]}; }, $n);
    /*SimpleInputHelper end.*/

    /*SimpleInputHelper+ButtonClickInput start.*/
    $m("SimpleInputHelper.ButtonClickInput", function () { return {"td":SimpleInputHelper,"att":1048579,"a":1,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[0].String],"pi":[{"n":"key","pt":$n[0].String,"ps":0}],"sn":"ctor"},{"a":2,"n":"OnUpdate","t":8,"sn":"OnUpdate","rt":$n[0].Void}]}; }, $n);
    /*SimpleInputHelper+ButtonClickInput end.*/

    /*SimpleInputHelper+MouseButtonClickInput start.*/
    $m("SimpleInputHelper.MouseButtonClickInput", function () { return {"td":SimpleInputHelper,"att":1048579,"a":1,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[0].Int32],"pi":[{"n":"key","pt":$n[0].Int32,"ps":0}],"sn":"ctor"},{"a":2,"n":"OnUpdate","t":8,"sn":"OnUpdate","rt":$n[0].Void}]}; }, $n);
    /*SimpleInputHelper+MouseButtonClickInput end.*/

    /*SimpleInputHelper+KeyClickInput start.*/
    $m("SimpleInputHelper.KeyClickInput", function () { return {"td":SimpleInputHelper,"att":1048579,"a":1,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[1].KeyCode],"pi":[{"n":"key","pt":$n[1].KeyCode,"ps":0}],"sn":"ctor"},{"a":2,"n":"OnUpdate","t":8,"sn":"OnUpdate","rt":$n[0].Void}]}; }, $n);
    /*SimpleInputHelper+KeyClickInput end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*SimpleInputNamespace.AxisInputKeyboard start.*/
    $m("SimpleInputNamespace.AxisInputKeyboard", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"OnUpdate","t":8,"sn":"OnUpdate","rt":$n[0].Void},{"a":2,"n":"axis","t":4,"rt":SimpleInput.AxisInput,"sn":"axis"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"key","t":4,"rt":$n[1].KeyCode,"sn":"key","box":function ($v) { return Bridge.box($v, UnityEngine.KeyCode, System.Enum.toStringFn(UnityEngine.KeyCode));}},{"a":2,"n":"value","t":4,"rt":$n[0].Single,"sn":"value","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*SimpleInputNamespace.AxisInputKeyboard end.*/

    /*SimpleInputNamespace.AxisInputMouse start.*/
    $m("SimpleInputNamespace.AxisInputMouse", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"OnUpdate","t":8,"sn":"OnUpdate","rt":$n[0].Void},{"a":2,"n":"xAxis","t":4,"rt":SimpleInput.AxisInput,"sn":"xAxis"},{"a":2,"n":"yAxis","t":4,"rt":SimpleInput.AxisInput,"sn":"yAxis"}]}; }, $n);
    /*SimpleInputNamespace.AxisInputMouse end.*/

    /*SimpleInputNamespace.AxisInputMoveGesture start.*/
    $m("SimpleInputNamespace.AxisInputMoveGesture", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(SimpleInputNamespace.SimpleInputMultiDragListener)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":2,"n":"OnUpdate","t":8,"pi":[{"n":"mousePointers","pt":$n[3].List$1(UnityEngine.EventSystems.PointerEventData),"ps":0},{"n":"touchPointers","pt":$n[3].List$1(UnityEngine.EventSystems.PointerEventData),"ps":1},{"n":"activeListener","pt":$n[4].ISimpleInputDraggableMultiTouch,"ps":2}],"sn":"OnUpdate","rt":$n[0].Boolean,"p":[$n[3].List$1(UnityEngine.EventSystems.PointerEventData),$n[3].List$1(UnityEngine.EventSystems.PointerEventData),$n[4].ISimpleInputDraggableMultiTouch],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"Priority","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_Priority","t":8,"rt":$n[0].Int32,"fg":"Priority","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"Priority"},{"a":1,"n":"eventReceiver","t":4,"rt":$n[4].SimpleInputMultiDragListener,"sn":"eventReceiver"},{"a":2,"n":"horizontal","t":4,"rt":SimpleInput.AxisInput,"sn":"horizontal"},{"a":2,"n":"invertValue","t":4,"rt":$n[0].Boolean,"sn":"invertValue","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"sensitivity","t":4,"rt":$n[0].Single,"sn":"sensitivity","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"vertical","t":4,"rt":SimpleInput.AxisInput,"sn":"vertical"}]}; }, $n);
    /*SimpleInputNamespace.AxisInputMoveGesture end.*/

    /*SimpleInputNamespace.AxisInputPinchGesture start.*/
    $m("SimpleInputNamespace.AxisInputPinchGesture", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(SimpleInputNamespace.SimpleInputMultiDragListener)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":2,"n":"OnUpdate","t":8,"pi":[{"n":"mousePointers","pt":$n[3].List$1(UnityEngine.EventSystems.PointerEventData),"ps":0},{"n":"touchPointers","pt":$n[3].List$1(UnityEngine.EventSystems.PointerEventData),"ps":1},{"n":"activeListener","pt":$n[4].ISimpleInputDraggableMultiTouch,"ps":2}],"sn":"OnUpdate","rt":$n[0].Boolean,"p":[$n[3].List$1(UnityEngine.EventSystems.PointerEventData),$n[3].List$1(UnityEngine.EventSystems.PointerEventData),$n[4].ISimpleInputDraggableMultiTouch],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"Priority","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_Priority","t":8,"rt":$n[0].Int32,"fg":"Priority","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"Priority"},{"a":2,"n":"axis","t":4,"rt":SimpleInput.AxisInput,"sn":"axis"},{"a":1,"n":"eventReceiver","t":4,"rt":$n[4].SimpleInputMultiDragListener,"sn":"eventReceiver"},{"a":2,"n":"invertValue","t":4,"rt":$n[0].Boolean,"sn":"invertValue","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"sensitivity","t":4,"rt":$n[0].Single,"sn":"sensitivity","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*SimpleInputNamespace.AxisInputPinchGesture end.*/

    /*SimpleInputNamespace.AxisInputRotateGesture start.*/
    $m("SimpleInputNamespace.AxisInputRotateGesture", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(SimpleInputNamespace.SimpleInputMultiDragListener)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":2,"n":"OnUpdate","t":8,"pi":[{"n":"mousePointers","pt":$n[3].List$1(UnityEngine.EventSystems.PointerEventData),"ps":0},{"n":"touchPointers","pt":$n[3].List$1(UnityEngine.EventSystems.PointerEventData),"ps":1},{"n":"activeListener","pt":$n[4].ISimpleInputDraggableMultiTouch,"ps":2}],"sn":"OnUpdate","rt":$n[0].Boolean,"p":[$n[3].List$1(UnityEngine.EventSystems.PointerEventData),$n[3].List$1(UnityEngine.EventSystems.PointerEventData),$n[4].ISimpleInputDraggableMultiTouch],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"Priority","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_Priority","t":8,"rt":$n[0].Int32,"fg":"Priority","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"Priority"},{"a":1,"n":"MULTIPLIER","is":true,"t":4,"rt":$n[0].Single,"sn":"MULTIPLIER","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"axis","t":4,"rt":SimpleInput.AxisInput,"sn":"axis"},{"a":2,"n":"clockwise","t":4,"rt":$n[0].Boolean,"sn":"clockwise","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"eventReceiver","t":4,"rt":$n[4].SimpleInputMultiDragListener,"sn":"eventReceiver"},{"a":2,"n":"sensitivity","t":4,"rt":$n[0].Single,"sn":"sensitivity","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*SimpleInputNamespace.AxisInputRotateGesture end.*/

    /*SimpleInputNamespace.AxisInputSwipeGesture start.*/
    $m("SimpleInputNamespace.AxisInputSwipeGesture", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"Input","t":16,"rt":$n[4].BaseInput$2(System.String,System.Single),"g":{"ov":true,"a":3,"n":"get_Input","t":8,"rt":$n[4].BaseInput$2(System.String,System.Single),"fg":"Input"},"fn":"Input"},{"ov":true,"a":2,"n":"Priority","t":16,"rt":$n[0].Int32,"g":{"ov":true,"a":2,"n":"get_Priority","t":8,"rt":$n[0].Int32,"fg":"Priority","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"Priority"},{"ov":true,"a":3,"n":"Value","t":16,"rt":$n[0].Single,"g":{"ov":true,"a":3,"n":"get_Value","t":8,"rt":$n[0].Single,"fg":"Value","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"Value"},{"a":2,"n":"axis","t":4,"rt":SimpleInput.AxisInput,"sn":"axis"},{"a":2,"n":"value","t":4,"rt":$n[0].Single,"sn":"value","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*SimpleInputNamespace.AxisInputSwipeGesture end.*/

    /*SimpleInputNamespace.AxisInputUI start.*/
    $m("SimpleInputNamespace.AxisInputUI", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[5].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[0].Void,"p":[$n[5].PointerEventData]},{"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"eventData","pt":$n[5].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[0].Void,"p":[$n[5].PointerEventData]},{"a":2,"n":"axis","t":4,"rt":SimpleInput.AxisInput,"sn":"axis"},{"a":2,"n":"value","t":4,"rt":$n[0].Single,"sn":"value","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*SimpleInputNamespace.AxisInputUI end.*/

    /*SimpleInputNamespace.AxisInputUIArrows start.*/
    $m("SimpleInputNamespace.AxisInputUIArrows", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"CalculateInput","t":8,"pi":[{"n":"eventData","pt":$n[5].PointerEventData,"ps":0}],"sn":"CalculateInput","rt":$n[0].Void,"p":[$n[5].PointerEventData]},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":2,"n":"OnDrag","t":8,"pi":[{"n":"eventData","pt":$n[5].PointerEventData,"ps":0}],"sn":"OnDrag","rt":$n[0].Void,"p":[$n[5].PointerEventData]},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[5].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[0].Void,"p":[$n[5].PointerEventData]},{"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"eventData","pt":$n[5].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[0].Void,"p":[$n[5].PointerEventData]},{"a":2,"n":"Value","t":16,"rt":$n[1].Vector2,"g":{"a":2,"n":"get_Value","t":8,"rt":$n[1].Vector2,"fg":"Value"},"fn":"Value"},{"at":[new UnityEngine.TooltipAttribute("Radius of the deadzone at the center of the arrows that will yield no input"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"deadzoneRadius","t":4,"rt":$n[0].Single,"sn":"deadzoneRadius","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"deadzoneRadiusSqr","t":4,"rt":$n[0].Single,"sn":"deadzoneRadiusSqr","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"m_value","t":4,"rt":$n[1].Vector2,"sn":"m_value"},{"a":1,"n":"rectTransform","t":4,"rt":$n[1].RectTransform,"sn":"rectTransform"},{"a":2,"n":"valueMultiplier","t":4,"rt":$n[0].Single,"sn":"valueMultiplier","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"xAxis","t":4,"rt":SimpleInput.AxisInput,"sn":"xAxis"},{"a":2,"n":"yAxis","t":4,"rt":SimpleInput.AxisInput,"sn":"yAxis"}]}; }, $n);
    /*SimpleInputNamespace.AxisInputUIArrows end.*/

    /*SimpleInputNamespace.Dpad start.*/
    $m("SimpleInputNamespace.Dpad", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"CalculateInput","t":8,"pi":[{"n":"eventData","pt":$n[5].PointerEventData,"ps":0}],"sn":"CalculateInput","rt":$n[0].Void,"p":[$n[5].PointerEventData]},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":2,"n":"OnDrag","t":8,"pi":[{"n":"eventData","pt":$n[5].PointerEventData,"ps":0}],"sn":"OnDrag","rt":$n[0].Void,"p":[$n[5].PointerEventData]},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[5].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[0].Void,"p":[$n[5].PointerEventData]},{"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"eventData","pt":$n[5].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[0].Void,"p":[$n[5].PointerEventData]},{"a":2,"n":"Value","t":16,"rt":$n[1].Vector2,"g":{"a":2,"n":"get_Value","t":8,"rt":$n[1].Vector2,"fg":"Value"},"fn":"Value"},{"at":[new UnityEngine.TooltipAttribute("Radius of the deadzone at the center of the Dpad that will yield no input"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"deadzoneRadius","t":4,"rt":$n[0].Single,"sn":"deadzoneRadius","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"deadzoneRadiusSqr","t":4,"rt":$n[0].Single,"sn":"deadzoneRadiusSqr","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"m_value","t":4,"rt":$n[1].Vector2,"sn":"m_value"},{"a":1,"n":"rectTransform","t":4,"rt":$n[1].RectTransform,"sn":"rectTransform"},{"a":2,"n":"valueMultiplier","t":4,"rt":$n[0].Single,"sn":"valueMultiplier","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"xAxis","t":4,"rt":SimpleInput.AxisInput,"sn":"xAxis"},{"a":2,"n":"yAxis","t":4,"rt":SimpleInput.AxisInput,"sn":"yAxis"}]}; }, $n);
    /*SimpleInputNamespace.Dpad end.*/

    /*SimpleInputNamespace.Joystick start.*/
    $m("SimpleInputNamespace.Joystick", function () { return {"nested":[$n[4].Joystick.MovementAxes],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":2,"n":"OnDrag","t":8,"pi":[{"n":"eventData","pt":$n[5].PointerEventData,"ps":0}],"sn":"OnDrag","rt":$n[0].Void,"p":[$n[5].PointerEventData]},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[5].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[0].Void,"p":[$n[5].PointerEventData]},{"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"eventData","pt":$n[5].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[0].Void,"p":[$n[5].PointerEventData]},{"a":1,"n":"OnUpdate","t":8,"sn":"OnUpdate","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"Value","t":16,"rt":$n[1].Vector2,"g":{"a":2,"n":"get_Value","t":8,"rt":$n[1].Vector2,"fg":"Value"},"fn":"Value"},{"a":1,"n":"_1OverMovementAreaRadius","t":4,"rt":$n[0].Single,"sn":"_1OverMovementAreaRadius","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"background","t":4,"rt":$n[6].Graphic,"sn":"background"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"canFollowPointer","t":4,"rt":$n[0].Boolean,"sn":"canFollowPointer","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.TooltipAttribute("Radius of the deadzone at the center of the joystick that will yield no input"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"deadzoneRadius","t":4,"rt":$n[0].Single,"sn":"deadzoneRadius","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"deadzoneRadiusSqr","t":4,"rt":$n[0].Single,"sn":"deadzoneRadiusSqr","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"dynamicJoystickMovementArea","t":4,"rt":$n[1].RectTransform,"sn":"dynamicJoystickMovementArea"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"isDynamicJoystick","t":4,"rt":$n[0].Boolean,"sn":"isDynamicJoystick","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"joystickHeld","t":4,"rt":$n[0].Boolean,"sn":"joystickHeld","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"joystickInitialPos","t":4,"rt":$n[1].Vector2,"sn":"joystickInitialPos"},{"a":1,"n":"joystickTR","t":4,"rt":$n[1].RectTransform,"sn":"joystickTR"},{"a":1,"n":"m_value","t":4,"rt":$n[1].Vector2,"sn":"m_value"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"movementAreaRadius","t":4,"rt":$n[0].Single,"sn":"movementAreaRadius","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"movementAreaRadiusSqr","t":4,"rt":$n[0].Single,"sn":"movementAreaRadiusSqr","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"movementAxes","t":4,"rt":$n[4].Joystick.MovementAxes,"sn":"movementAxes","box":function ($v) { return Bridge.box($v, SimpleInputNamespace.Joystick.MovementAxes, System.Enum.toStringFn(SimpleInputNamespace.Joystick.MovementAxes));}},{"a":1,"n":"opacity","t":4,"rt":$n[0].Single,"sn":"opacity","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"pointerInitialPos","t":4,"rt":$n[1].Vector2,"sn":"pointerInitialPos"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"thumb","t":4,"rt":$n[6].Image,"sn":"thumb"},{"a":1,"n":"thumbTR","t":4,"rt":$n[1].RectTransform,"sn":"thumbTR"},{"a":2,"n":"valueMultiplier","t":4,"rt":$n[0].Single,"sn":"valueMultiplier","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"xAxis","t":4,"rt":SimpleInput.AxisInput,"sn":"xAxis"},{"a":2,"n":"yAxis","t":4,"rt":SimpleInput.AxisInput,"sn":"yAxis"}]}; }, $n);
    /*SimpleInputNamespace.Joystick end.*/

    /*SimpleInputNamespace.Joystick+MovementAxes start.*/
    $m("SimpleInputNamespace.Joystick.MovementAxes", function () { return {"td":$n[4].Joystick,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"X","is":true,"t":4,"rt":$n[4].Joystick.MovementAxes,"sn":"X","box":function ($v) { return Bridge.box($v, SimpleInputNamespace.Joystick.MovementAxes, System.Enum.toStringFn(SimpleInputNamespace.Joystick.MovementAxes));}},{"a":2,"n":"XandY","is":true,"t":4,"rt":$n[4].Joystick.MovementAxes,"sn":"XandY","box":function ($v) { return Bridge.box($v, SimpleInputNamespace.Joystick.MovementAxes, System.Enum.toStringFn(SimpleInputNamespace.Joystick.MovementAxes));}},{"a":2,"n":"Y","is":true,"t":4,"rt":$n[4].Joystick.MovementAxes,"sn":"Y","box":function ($v) { return Bridge.box($v, SimpleInputNamespace.Joystick.MovementAxes, System.Enum.toStringFn(SimpleInputNamespace.Joystick.MovementAxes));}}]}; }, $n);
    /*SimpleInputNamespace.Joystick+MovementAxes end.*/

    /*SimpleInputNamespace.SteeringWheel start.*/
    $m("SimpleInputNamespace.SteeringWheel", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":2,"n":"OnDrag","t":8,"pi":[{"n":"eventData","pt":$n[5].PointerEventData,"ps":0}],"sn":"OnDrag","rt":$n[0].Void,"p":[$n[5].PointerEventData]},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[5].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[0].Void,"p":[$n[5].PointerEventData]},{"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"eventData","pt":$n[5].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[0].Void,"p":[$n[5].PointerEventData]},{"a":1,"n":"OnUpdate","t":8,"sn":"OnUpdate","rt":$n[0].Void},{"a":2,"n":"Angle","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_Angle","t":8,"rt":$n[0].Single,"fg":"Angle","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"Angle"},{"a":2,"n":"Value","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_Value","t":8,"rt":$n[0].Single,"fg":"Value","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"Value"},{"a":2,"n":"axis","t":4,"rt":SimpleInput.AxisInput,"sn":"axis"},{"a":1,"n":"centerPoint","t":4,"rt":$n[1].Vector2,"sn":"centerPoint"},{"a":1,"n":"m_value","t":4,"rt":$n[0].Single,"sn":"m_value","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"maximumSteeringAngle","t":4,"rt":$n[0].Single,"sn":"maximumSteeringAngle","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"valueMultiplier","t":4,"rt":$n[0].Single,"sn":"valueMultiplier","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"wheel","t":4,"rt":$n[6].Graphic,"sn":"wheel"},{"a":1,"n":"wheelAngle","t":4,"rt":$n[0].Single,"sn":"wheelAngle","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"wheelBeingHeld","t":4,"rt":$n[0].Boolean,"sn":"wheelBeingHeld","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"wheelPrevAngle","t":4,"rt":$n[0].Single,"sn":"wheelPrevAngle","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"wheelReleasedSpeed","t":4,"rt":$n[0].Single,"sn":"wheelReleasedSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"wheelTR","t":4,"rt":$n[1].RectTransform,"sn":"wheelTR"}]}; }, $n);
    /*SimpleInputNamespace.SteeringWheel end.*/

    /*SimpleInputNamespace.Touchpad start.*/
    $m("SimpleInputNamespace.Touchpad", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(SimpleInputNamespace.SimpleInputMultiDragListener)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":2,"n":"OnUpdate","t":8,"pi":[{"n":"mousePointers","pt":$n[3].List$1(UnityEngine.EventSystems.PointerEventData),"ps":0},{"n":"touchPointers","pt":$n[3].List$1(UnityEngine.EventSystems.PointerEventData),"ps":1},{"n":"activeListener","pt":$n[4].ISimpleInputDraggableMultiTouch,"ps":2}],"sn":"OnUpdate","rt":$n[0].Boolean,"p":[$n[3].List$1(UnityEngine.EventSystems.PointerEventData),$n[3].List$1(UnityEngine.EventSystems.PointerEventData),$n[4].ISimpleInputDraggableMultiTouch],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"Priority","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_Priority","t":8,"rt":$n[0].Int32,"fg":"Priority","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"Priority"},{"a":2,"n":"Value","t":16,"rt":$n[1].Vector2,"g":{"a":2,"n":"get_Value","t":8,"rt":$n[1].Vector2,"fg":"Value"},"fn":"Value"},{"a":1,"n":"eventReceiver","t":4,"rt":$n[4].SimpleInputMultiDragListener,"sn":"eventReceiver"},{"a":2,"n":"invertHorizontal","t":4,"rt":$n[0].Boolean,"sn":"invertHorizontal","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"invertVertical","t":4,"rt":$n[0].Boolean,"sn":"invertVertical","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"m_value","t":4,"rt":$n[1].Vector2,"sn":"m_value"},{"a":2,"n":"sensitivity","t":4,"rt":$n[0].Single,"sn":"sensitivity","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"xAxis","t":4,"rt":SimpleInput.AxisInput,"sn":"xAxis"},{"a":2,"n":"yAxis","t":4,"rt":SimpleInput.AxisInput,"sn":"yAxis"}]}; }, $n);
    /*SimpleInputNamespace.Touchpad end.*/

    /*SimpleInputNamespace.ButtonInputKeyboard start.*/
    $m("SimpleInputNamespace.ButtonInputKeyboard", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"OnUpdate","t":8,"sn":"OnUpdate","rt":$n[0].Void},{"a":2,"n":"button","t":4,"rt":SimpleInput.ButtonInput,"sn":"button"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"key","t":4,"rt":$n[1].KeyCode,"sn":"key","box":function ($v) { return Bridge.box($v, UnityEngine.KeyCode, System.Enum.toStringFn(UnityEngine.KeyCode));}}]}; }, $n);
    /*SimpleInputNamespace.ButtonInputKeyboard end.*/

    /*SimpleInputNamespace.ButtonInputSwipeGesture start.*/
    $m("SimpleInputNamespace.ButtonInputSwipeGesture", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"Input","t":16,"rt":$n[4].BaseInput$2(System.String,System.Boolean),"g":{"ov":true,"a":3,"n":"get_Input","t":8,"rt":$n[4].BaseInput$2(System.String,System.Boolean),"fg":"Input"},"fn":"Input"},{"ov":true,"a":2,"n":"Priority","t":16,"rt":$n[0].Int32,"g":{"ov":true,"a":2,"n":"get_Priority","t":8,"rt":$n[0].Int32,"fg":"Priority","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"Priority"},{"ov":true,"a":3,"n":"Value","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":3,"n":"get_Value","t":8,"rt":$n[0].Boolean,"fg":"Value","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"Value"},{"a":2,"n":"button","t":4,"rt":SimpleInput.ButtonInput,"sn":"button"}]}; }, $n);
    /*SimpleInputNamespace.ButtonInputSwipeGesture end.*/

    /*SimpleInputNamespace.ButtonInputUI start.*/
    $m("SimpleInputNamespace.ButtonInputUI", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[5].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[0].Void,"p":[$n[5].PointerEventData]},{"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"eventData","pt":$n[5].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[0].Void,"p":[$n[5].PointerEventData]},{"a":2,"n":"button","t":4,"rt":SimpleInput.ButtonInput,"sn":"button"}]}; }, $n);
    /*SimpleInputNamespace.ButtonInputUI end.*/

    /*SimpleInputNamespace.IBaseInput start.*/
    $m("SimpleInputNamespace.IBaseInput", function () { return {"att":1048737,"a":2,"m":[{"ab":true,"a":2,"n":"ResetValue","t":8,"sn":"SimpleInputNamespace$IBaseInput$ResetValue","rt":$n[0].Void},{"ab":true,"a":2,"n":"StartTracking","t":8,"sn":"SimpleInputNamespace$IBaseInput$StartTracking","rt":$n[0].Void},{"ab":true,"a":2,"n":"StopTracking","t":8,"sn":"SimpleInputNamespace$IBaseInput$StopTracking","rt":$n[0].Void}]}; }, $n);
    /*SimpleInputNamespace.IBaseInput end.*/

    /*SimpleInputNamespace.BaseInput$2 start.*/
    $m("SimpleInputNamespace.BaseInput$2", function (K, V) { return {"att":1048705,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":".ctor","t":1,"p":[K],"pi":[{"n":"key","pt":K,"ps":0}],"sn":"$ctor1"},{"v":true,"a":2,"n":"IsKeyValid","t":8,"sn":"IsKeyValid","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"ab":true,"a":3,"n":"KeysEqual","t":8,"pi":[{"n":"key1","pt":K,"ps":0},{"n":"key2","pt":K,"ps":1}],"sn":"KeysEqual","rt":$n[0].Boolean,"p":[K,K],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"ab":true,"a":3,"n":"RegisterInput","t":8,"sn":"RegisterInput","rt":$n[0].Void},{"a":2,"n":"ResetValue","t":8,"sn":"ResetValue","rt":$n[0].Void},{"a":2,"n":"StartTracking","t":8,"sn":"StartTracking","rt":$n[0].Void},{"a":2,"n":"StopTracking","t":8,"sn":"StopTracking","rt":$n[0].Void},{"ab":true,"a":3,"n":"UnregisterInput","t":8,"sn":"UnregisterInput","rt":$n[0].Void},{"a":2,"n":"Key","t":16,"rt":K,"g":{"a":2,"n":"get_Key","t":8,"rt":K,"fg":"Key"},"s":{"a":2,"n":"set_Key","t":8,"p":[K],"rt":$n[0].Void,"fs":"Key"},"fn":"Key"},{"a":1,"n":"isTracking","t":4,"rt":$n[0].Boolean,"sn":"isTracking","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_key","t":4,"rt":K,"sn":"m_key"},{"a":2,"n":"value","t":4,"rt":V,"sn":"value"}]}; }, $n);
    /*SimpleInputNamespace.BaseInput$2 end.*/

    /*SimpleInputNamespace.ISimpleInputDraggable start.*/
    $m("SimpleInputNamespace.ISimpleInputDraggable", function () { return {"att":1048737,"a":2,"m":[{"ab":true,"a":2,"n":"OnDrag","t":8,"pi":[{"n":"eventData","pt":$n[5].PointerEventData,"ps":0}],"sn":"SimpleInputNamespace$ISimpleInputDraggable$OnDrag","rt":$n[0].Void,"p":[$n[5].PointerEventData]},{"ab":true,"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[5].PointerEventData,"ps":0}],"sn":"SimpleInputNamespace$ISimpleInputDraggable$OnPointerDown","rt":$n[0].Void,"p":[$n[5].PointerEventData]},{"ab":true,"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"eventData","pt":$n[5].PointerEventData,"ps":0}],"sn":"SimpleInputNamespace$ISimpleInputDraggable$OnPointerUp","rt":$n[0].Void,"p":[$n[5].PointerEventData]}]}; }, $n);
    /*SimpleInputNamespace.ISimpleInputDraggable end.*/

    /*SimpleInputNamespace.ISimpleInputDraggableMultiTouch start.*/
    $m("SimpleInputNamespace.ISimpleInputDraggableMultiTouch", function () { return {"att":1048737,"a":2,"m":[{"ab":true,"a":2,"n":"OnUpdate","t":8,"pi":[{"n":"mousePointers","pt":$n[3].List$1(UnityEngine.EventSystems.PointerEventData),"ps":0},{"n":"touchPointers","pt":$n[3].List$1(UnityEngine.EventSystems.PointerEventData),"ps":1},{"n":"activeListener","pt":$n[4].ISimpleInputDraggableMultiTouch,"ps":2}],"sn":"SimpleInputNamespace$ISimpleInputDraggableMultiTouch$OnUpdate","rt":$n[0].Boolean,"p":[$n[3].List$1(UnityEngine.EventSystems.PointerEventData),$n[3].List$1(UnityEngine.EventSystems.PointerEventData),$n[4].ISimpleInputDraggableMultiTouch],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"ab":true,"a":2,"n":"Priority","t":16,"rt":$n[0].Int32,"g":{"ab":true,"a":2,"n":"get_Priority","t":8,"rt":$n[0].Int32,"fg":"SimpleInputNamespace$ISimpleInputDraggableMultiTouch$Priority","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"SimpleInputNamespace$ISimpleInputDraggableMultiTouch$Priority"},{"a":1,"backing":true,"n":"<Priority>k__BackingField","t":4,"rt":$n[0].Int32,"sn":"SimpleInputNamespace$ISimpleInputDraggableMultiTouch$Priority","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*SimpleInputNamespace.ISimpleInputDraggableMultiTouch end.*/

    /*SimpleInputNamespace.NonDrawingGraphic start.*/
    $m("SimpleInputNamespace.NonDrawingGraphic", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(UnityEngine.CanvasRenderer)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"OnPopulateMesh","t":8,"pi":[{"n":"vh","pt":$n[6].VertexHelper,"ps":0}],"sn":"OnPopulateMesh","rt":$n[0].Void,"p":[$n[6].VertexHelper]},{"ov":true,"a":2,"n":"SetMaterialDirty","t":8,"sn":"SetMaterialDirty","rt":$n[0].Void},{"ov":true,"a":2,"n":"SetVerticesDirty","t":8,"sn":"SetVerticesDirty","rt":$n[0].Void}]}; }, $n);
    /*SimpleInputNamespace.NonDrawingGraphic end.*/

    /*SimpleInputNamespace.SelectivePointerInput start.*/
    $m("SimpleInputNamespace.SelectivePointerInput", function () { return {"att":1048705,"a":2,"m":[{"a":3,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":3,"n":"GetSatisfyingPointer","t":8,"pi":[{"n":"mousePointers","pt":$n[3].List$1(UnityEngine.EventSystems.PointerEventData),"ps":0},{"n":"touchPointers","pt":$n[3].List$1(UnityEngine.EventSystems.PointerEventData),"ps":1}],"sn":"GetSatisfyingPointer","rt":$n[5].PointerEventData,"p":[$n[3].List$1(UnityEngine.EventSystems.PointerEventData),$n[3].List$1(UnityEngine.EventSystems.PointerEventData)]},{"at":[new UnityEngine.TooltipAttribute("Should touchpad allow touch inputs on touchscreens, or mouse input only")],"a":2,"n":"allowTouchInput","t":4,"rt":$n[0].Boolean,"sn":"allowTouchInput","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.TooltipAttribute("Valid mouse buttons that can register input through this touchpad")],"a":2,"n":"allowedMouseButtons","t":4,"rt":$n[3].List$1(UnityEngine.EventSystems.PointerEventData.InputButton),"sn":"allowedMouseButtons"}]}; }, $n);
    /*SimpleInputNamespace.SelectivePointerInput end.*/

    /*SimpleInputNamespace.SimpleInputDragListener start.*/
    $m("SimpleInputNamespace.SimpleInputDragListener", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"OnDrag","t":8,"pi":[{"n":"eventData","pt":$n[5].PointerEventData,"ps":0}],"sn":"OnDrag","rt":$n[0].Void,"p":[$n[5].PointerEventData]},{"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[5].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[0].Void,"p":[$n[5].PointerEventData]},{"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"eventData","pt":$n[5].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[0].Void,"p":[$n[5].PointerEventData]},{"a":2,"n":"Stop","t":8,"sn":"Stop","rt":$n[0].Void},{"a":2,"n":"Listener","t":16,"rt":$n[4].ISimpleInputDraggable,"g":{"a":2,"n":"get_Listener","t":8,"rt":$n[4].ISimpleInputDraggable,"fg":"Listener"},"s":{"a":2,"n":"set_Listener","t":8,"p":[$n[4].ISimpleInputDraggable],"rt":$n[0].Void,"fs":"Listener"},"fn":"Listener"},{"a":1,"n":"pointerId","t":4,"rt":$n[0].Int32,"sn":"pointerId","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"backing":true,"n":"<Listener>k__BackingField","t":4,"rt":$n[4].ISimpleInputDraggable,"sn":"Listener"}]}; }, $n);
    /*SimpleInputNamespace.SimpleInputDragListener end.*/

    /*SimpleInputNamespace.SimpleInputMultiDragListener start.*/
    $m("SimpleInputNamespace.SimpleInputMultiDragListener", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.DisallowMultipleComponent(),new UnityEngine.RequireComponent.ctor(UnityEngine.RectTransform)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AddListener","t":8,"pi":[{"n":"listener","pt":$n[4].ISimpleInputDraggableMultiTouch,"ps":0}],"sn":"AddListener","rt":$n[0].Void,"p":[$n[4].ISimpleInputDraggableMultiTouch]},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[5].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[0].Void,"p":[$n[5].PointerEventData]},{"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"eventData","pt":$n[5].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[0].Void,"p":[$n[5].PointerEventData]},{"a":1,"n":"OnUpdate","t":8,"sn":"OnUpdate","rt":$n[0].Void},{"a":2,"n":"RemoveListener","t":8,"pi":[{"n":"listener","pt":$n[4].ISimpleInputDraggableMultiTouch,"ps":0}],"sn":"RemoveListener","rt":$n[0].Void,"p":[$n[4].ISimpleInputDraggableMultiTouch]},{"a":1,"n":"ValidatePointers","t":8,"sn":"ValidatePointers","rt":$n[0].Void},{"a":1,"n":"POINTERS_VALIDATION_INTERVAL","is":true,"t":4,"rt":$n[0].Single,"sn":"POINTERS_VALIDATION_INTERVAL","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"activeListener","t":4,"rt":$n[4].ISimpleInputDraggableMultiTouch,"sn":"activeListener"},{"a":1,"n":"listeners","t":4,"rt":$n[3].List$1(SimpleInputNamespace.ISimpleInputDraggableMultiTouch),"sn":"listeners"},{"a":1,"n":"mousePointers","t":4,"rt":$n[3].List$1(UnityEngine.EventSystems.PointerEventData),"sn":"mousePointers"},{"a":1,"n":"pointersNextValidation","t":4,"rt":$n[0].Single,"sn":"pointersNextValidation","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"touchPointers","t":4,"rt":$n[3].List$1(UnityEngine.EventSystems.PointerEventData),"sn":"touchPointers"},{"a":1,"n":"validPointers","t":4,"rt":$n[3].List$1(UnityEngine.EventSystems.PointerEventData),"sn":"validPointers"}]}; }, $n);
    /*SimpleInputNamespace.SimpleInputMultiDragListener end.*/

    /*SimpleInputNamespace.SimpleInputUtils start.*/
    $m("SimpleInputNamespace.SimpleInputUtils", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"IsTouchInput","is":true,"t":8,"pi":[{"n":"eventData","pt":$n[5].PointerEventData,"ps":0}],"sn":"IsTouchInput","rt":$n[0].Boolean,"p":[$n[5].PointerEventData],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"IsValid","is":true,"t":8,"pi":[{"n":"eventData","pt":$n[5].PointerEventData,"ps":0}],"sn":"IsValid","rt":$n[0].Boolean,"p":[$n[5].PointerEventData],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"ResolutionMultiplier","is":true,"t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_ResolutionMultiplier","t":8,"rt":$n[0].Single,"fg":"ResolutionMultiplier","is":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"ResolutionMultiplier"},{"a":2,"n":"NON_EXISTING_TOUCH","is":true,"t":4,"rt":$n[0].Int32,"sn":"NON_EXISTING_TOUCH","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"m_resolutionMultiplier","is":true,"t":4,"rt":$n[0].Single,"sn":"m_resolutionMultiplier","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*SimpleInputNamespace.SimpleInputUtils end.*/

    /*SimpleInputNamespace.SwipeGestureBase$2 start.*/
    $m("SimpleInputNamespace.SwipeGestureBase$2", function (K, V) { return {"att":1048705,"a":2,"at":[new UnityEngine.RequireComponent.ctor(SimpleInputNamespace.SimpleInputMultiDragListener)],"m":[{"a":3,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"IsSwipeSatisfied","t":8,"pi":[{"n":"eventData","pt":$n[5].PointerEventData,"ps":0}],"sn":"IsSwipeSatisfied","rt":$n[0].Boolean,"p":[$n[5].PointerEventData],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":2,"n":"OnUpdate","t":8,"pi":[{"n":"mousePointers","pt":$n[3].List$1(UnityEngine.EventSystems.PointerEventData),"ps":0},{"n":"touchPointers","pt":$n[3].List$1(UnityEngine.EventSystems.PointerEventData),"ps":1},{"n":"activeListener","pt":$n[4].ISimpleInputDraggableMultiTouch,"ps":2}],"sn":"OnUpdate","rt":$n[0].Boolean,"p":[$n[3].List$1(UnityEngine.EventSystems.PointerEventData),$n[3].List$1(UnityEngine.EventSystems.PointerEventData),$n[4].ISimpleInputDraggableMultiTouch],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"ab":true,"a":3,"n":"Input","t":16,"rt":$n[4].BaseInput$2(K,V),"g":{"ab":true,"a":3,"n":"get_Input","t":8,"rt":$n[4].BaseInput$2(K,V),"fg":"Input"},"fn":"Input"},{"ab":true,"a":2,"n":"Priority","t":16,"rt":$n[0].Int32,"g":{"ab":true,"a":2,"n":"get_Priority","t":8,"rt":$n[0].Int32,"fg":"Priority","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"Priority"},{"ab":true,"a":3,"n":"Value","t":16,"rt":V,"g":{"ab":true,"a":3,"n":"get_Value","t":8,"rt":V,"fg":"Value"},"fn":"Value"},{"a":1,"n":"eventReceiver","t":4,"rt":$n[4].SimpleInputMultiDragListener,"sn":"eventReceiver"},{"a":2,"n":"swipeAmount","t":4,"rt":$n[1].Vector2,"sn":"swipeAmount"},{"a":1,"backing":true,"n":"<Input>k__BackingField","t":4,"rt":$n[4].BaseInput$2(K,V),"sn":"Input"},{"a":1,"backing":true,"n":"<Priority>k__BackingField","t":4,"rt":$n[0].Int32,"sn":"Priority","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"backing":true,"n":"<Value>k__BackingField","t":4,"rt":V,"sn":"Value"}]}; }, $n);
    /*SimpleInputNamespace.SwipeGestureBase$2 end.*/

    /*SimpleInputNamespace.UnityInputProvider start.*/
    $m("SimpleInputNamespace.UnityInputProvider", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"OnUpdate","t":8,"sn":"OnUpdate","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"axes","t":4,"rt":$n[0].Array.type(System.String),"sn":"axes"},{"a":1,"n":"axisInputs","t":4,"rt":System.Array.type(SimpleInput.AxisInput),"sn":"axisInputs"},{"a":1,"n":"buttonInputs","t":4,"rt":System.Array.type(SimpleInput.ButtonInput),"sn":"buttonInputs"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"buttons","t":4,"rt":$n[0].Array.type(System.String),"sn":"buttons"},{"a":1,"n":"keyInputs","t":4,"rt":System.Array.type(SimpleInput.KeyInput),"sn":"keyInputs"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"keys","t":4,"rt":System.Array.type(UnityEngine.KeyCode),"sn":"keys"},{"a":1,"n":"mouseButtonInputs","t":4,"rt":System.Array.type(SimpleInput.MouseButtonInput),"sn":"mouseButtonInputs"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"mouseButtons","t":4,"rt":$n[0].Array.type(System.Int32),"sn":"mouseButtons"}]}; }, $n);
    /*SimpleInputNamespace.UnityInputProvider end.*/

    /*SimpleInputNamespace.KeyInputKeyboard start.*/
    $m("SimpleInputNamespace.KeyInputKeyboard", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"OnUpdate","t":8,"sn":"OnUpdate","rt":$n[0].Void},{"a":2,"n":"key","t":4,"rt":SimpleInput.KeyInput,"sn":"key"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"realKey","t":4,"rt":$n[1].KeyCode,"sn":"realKey","box":function ($v) { return Bridge.box($v, UnityEngine.KeyCode, System.Enum.toStringFn(UnityEngine.KeyCode));}}]}; }, $n);
    /*SimpleInputNamespace.KeyInputKeyboard end.*/

    /*SimpleInputNamespace.KeyInputSwipeGesture start.*/
    $m("SimpleInputNamespace.KeyInputSwipeGesture", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"Input","t":16,"rt":$n[4].BaseInput$2(UnityEngine.KeyCode,System.Boolean),"g":{"ov":true,"a":3,"n":"get_Input","t":8,"rt":$n[4].BaseInput$2(UnityEngine.KeyCode,System.Boolean),"fg":"Input"},"fn":"Input"},{"ov":true,"a":2,"n":"Priority","t":16,"rt":$n[0].Int32,"g":{"ov":true,"a":2,"n":"get_Priority","t":8,"rt":$n[0].Int32,"fg":"Priority","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"Priority"},{"ov":true,"a":3,"n":"Value","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":3,"n":"get_Value","t":8,"rt":$n[0].Boolean,"fg":"Value","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"Value"},{"a":2,"n":"key","t":4,"rt":SimpleInput.KeyInput,"sn":"key"}]}; }, $n);
    /*SimpleInputNamespace.KeyInputSwipeGesture end.*/

    /*SimpleInputNamespace.KeyInputUI start.*/
    $m("SimpleInputNamespace.KeyInputUI", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[5].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[0].Void,"p":[$n[5].PointerEventData]},{"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"eventData","pt":$n[5].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[0].Void,"p":[$n[5].PointerEventData]},{"a":2,"n":"key","t":4,"rt":SimpleInput.KeyInput,"sn":"key"}]}; }, $n);
    /*SimpleInputNamespace.KeyInputUI end.*/

    /*SimpleInputNamespace.MouseButtonInputKeyboard start.*/
    $m("SimpleInputNamespace.MouseButtonInputKeyboard", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"OnUpdate","t":8,"sn":"OnUpdate","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"key","t":4,"rt":$n[1].KeyCode,"sn":"key","box":function ($v) { return Bridge.box($v, UnityEngine.KeyCode, System.Enum.toStringFn(UnityEngine.KeyCode));}},{"a":2,"n":"mouseButton","t":4,"rt":SimpleInput.MouseButtonInput,"sn":"mouseButton"}]}; }, $n);
    /*SimpleInputNamespace.MouseButtonInputKeyboard end.*/

    /*SimpleInputNamespace.MouseButtonInputSwipeGesture start.*/
    $m("SimpleInputNamespace.MouseButtonInputSwipeGesture", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"Input","t":16,"rt":$n[4].BaseInput$2(System.Int32,System.Boolean),"g":{"ov":true,"a":3,"n":"get_Input","t":8,"rt":$n[4].BaseInput$2(System.Int32,System.Boolean),"fg":"Input"},"fn":"Input"},{"ov":true,"a":2,"n":"Priority","t":16,"rt":$n[0].Int32,"g":{"ov":true,"a":2,"n":"get_Priority","t":8,"rt":$n[0].Int32,"fg":"Priority","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"Priority"},{"ov":true,"a":3,"n":"Value","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":3,"n":"get_Value","t":8,"rt":$n[0].Boolean,"fg":"Value","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"Value"},{"a":2,"n":"mouseButton","t":4,"rt":SimpleInput.MouseButtonInput,"sn":"mouseButton"}]}; }, $n);
    /*SimpleInputNamespace.MouseButtonInputSwipeGesture end.*/

    /*SimpleInputNamespace.MouseButtonInputUI start.*/
    $m("SimpleInputNamespace.MouseButtonInputUI", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[5].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[0].Void,"p":[$n[5].PointerEventData]},{"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"eventData","pt":$n[5].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[0].Void,"p":[$n[5].PointerEventData]},{"a":2,"n":"mouseButton","t":4,"rt":SimpleInput.MouseButtonInput,"sn":"mouseButton"}]}; }, $n);
    /*SimpleInputNamespace.MouseButtonInputUI end.*/

    /*CodeBase.Constants start.*/
    $m("CodeBase.Constants", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"Epsilon","is":true,"t":4,"rt":$n[0].Single,"sn":"Epsilon","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*CodeBase.Constants end.*/

    /*CodeBase.Services.Input.IInputService start.*/
    $m("CodeBase.Services.Input.IInputService", function () { return {"att":1048737,"a":2,"m":[{"ab":true,"a":2,"n":"IsAttackButtonUp","t":8,"sn":"CodeBase$Services$Input$IInputService$IsAttackButtonUp","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"ab":true,"a":2,"n":"Axis","t":16,"rt":$n[1].Vector2,"g":{"ab":true,"a":2,"n":"get_Axis","t":8,"rt":$n[1].Vector2,"fg":"CodeBase$Services$Input$IInputService$Axis"},"fn":"CodeBase$Services$Input$IInputService$Axis"},{"a":1,"backing":true,"n":"<Axis>k__BackingField","t":4,"rt":$n[1].Vector2,"sn":"CodeBase$Services$Input$IInputService$Axis"}]}; }, $n);
    /*CodeBase.Services.Input.IInputService end.*/

    /*CodeBase.Services.Input.InputService start.*/
    $m("CodeBase.Services.Input.InputService", function () { return {"att":1048705,"a":2,"m":[{"a":3,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"IsAttackButtonUp","t":8,"sn":"IsAttackButtonUp","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":3,"n":"SimpleInputAxis","is":true,"t":8,"sn":"SimpleInputAxis","rt":$n[1].Vector2},{"ab":true,"a":2,"n":"Axis","t":16,"rt":$n[1].Vector2,"g":{"ab":true,"a":2,"n":"get_Axis","t":8,"rt":$n[1].Vector2,"fg":"Axis"},"fn":"Axis"},{"a":1,"n":"Button","is":true,"t":4,"rt":$n[0].String,"sn":"Button"},{"a":3,"n":"Horizontal","is":true,"t":4,"rt":$n[0].String,"sn":"Horizontal"},{"a":3,"n":"Vertical","is":true,"t":4,"rt":$n[0].String,"sn":"Vertical"},{"a":1,"backing":true,"n":"<Axis>k__BackingField","t":4,"rt":$n[1].Vector2,"sn":"Axis"}]}; }, $n);
    /*CodeBase.Services.Input.InputService end.*/

    /*CodeBase.Services.Input.MobileInputService start.*/
    $m("CodeBase.Services.Input.MobileInputService", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":2,"n":"Axis","t":16,"rt":$n[1].Vector2,"g":{"ov":true,"a":2,"n":"get_Axis","t":8,"rt":$n[1].Vector2,"fg":"Axis"},"fn":"Axis"}]}; }, $n);
    /*CodeBase.Services.Input.MobileInputService end.*/

    /*CodeBase.Services.Input.StandaloneInputService start.*/
    $m("CodeBase.Services.Input.StandaloneInputService", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"UnityAxis","is":true,"t":8,"sn":"UnityAxis","rt":$n[1].Vector2},{"ov":true,"a":2,"n":"Axis","t":16,"rt":$n[1].Vector2,"g":{"ov":true,"a":2,"n":"get_Axis","t":8,"rt":$n[1].Vector2,"fg":"Axis"},"fn":"Axis"}]}; }, $n);
    /*CodeBase.Services.Input.StandaloneInputService end.*/

    /*CodeBase.Infrastructure.Game start.*/
    $m("CodeBase.Infrastructure.Game", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"RegisterInputService","is":true,"t":8,"sn":"RegisterInputService","rt":$n[0].Void},{"a":2,"n":"InputService","is":true,"t":4,"rt":$n[7].IInputService,"sn":"InputService"}]}; }, $n);
    /*CodeBase.Infrastructure.Game end.*/

    /*CodeBase.Infrastructure.GameBootstrapper start.*/
    $m("CodeBase.Infrastructure.GameBootstrapper", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"_game","t":4,"rt":$n[8].Game,"sn":"_game"}]}; }, $n);
    /*CodeBase.Infrastructure.GameBootstrapper end.*/

    /*CodeBase.Hero.HeroMove start.*/
    $m("CodeBase.Hero.HeroMove", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"CameraFollow","t":8,"sn":"CameraFollow","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"CharacterController","t":4,"rt":$n[1].CharacterController,"sn":"CharacterController"},{"a":2,"n":"MovementSpeed","t":4,"rt":$n[0].Single,"sn":"MovementSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_camera","t":4,"rt":$n[1].Camera,"sn":"_camera"},{"a":1,"n":"_inputService","t":4,"rt":$n[7].IInputService,"sn":"_inputService"}]}; }, $n);
    /*CodeBase.Hero.HeroMove end.*/

    /*CodeBase.CameraLogic.CameraFollow start.*/
    $m("CodeBase.CameraLogic.CameraFollow", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Follow","t":8,"pi":[{"n":"following","pt":$n[1].GameObject,"ps":0}],"sn":"Follow","rt":$n[0].Void,"p":[$n[1].GameObject]},{"a":1,"n":"FollowingPointPosition","t":8,"sn":"FollowingPointPosition","rt":$n[1].Vector3},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[0].Void},{"a":2,"n":"Distance","t":4,"rt":$n[0].Int32,"sn":"Distance","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"OffsetY","t":4,"rt":$n[0].Single,"sn":"OffsetY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"RotationAngleX","t":4,"rt":$n[0].Single,"sn":"RotationAngleX","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_following","t":4,"rt":$n[1].Transform,"sn":"_following"}]}; }, $n);
    /*CodeBase.CameraLogic.CameraFollow end.*/

    }});
