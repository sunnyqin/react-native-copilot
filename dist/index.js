"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __restKey = (key) => typeof key === "symbol" ? key : key + "";
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/components/style.ts
var import_react_native, STEP_NUMBER_RADIUS, STEP_NUMBER_DIAMETER, ZINDEX, MARGIN, OFFSET_WIDTH, ARROW_SIZE, styles;
var init_style = __esm({
  "src/components/style.ts"() {
    "use strict";
    import_react_native = require("react-native");
    STEP_NUMBER_RADIUS = 14;
    STEP_NUMBER_DIAMETER = STEP_NUMBER_RADIUS * 2;
    ZINDEX = 100;
    MARGIN = 13;
    OFFSET_WIDTH = 4;
    ARROW_SIZE = 6;
    styles = import_react_native.StyleSheet.create({
      container: {
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        zIndex: ZINDEX
      },
      arrow: {
        position: "absolute",
        borderWidth: ARROW_SIZE
      },
      tooltip: {
        position: "absolute",
        paddingTop: 15,
        paddingHorizontal: 15,
        backgroundColor: "#fff",
        borderRadius: 3,
        overflow: "hidden"
      },
      tooltipText: {},
      tooltipContainer: {
        flex: 1
      },
      stepNumberContainer: {
        position: "absolute",
        width: STEP_NUMBER_DIAMETER,
        height: STEP_NUMBER_DIAMETER,
        overflow: "hidden",
        zIndex: ZINDEX + 1
      },
      stepNumber: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderRadius: STEP_NUMBER_RADIUS,
        borderColor: "#FFFFFF",
        backgroundColor: "#27ae60"
      },
      stepNumberText: {
        fontSize: 10,
        backgroundColor: "transparent",
        color: "#FFFFFF"
      },
      button: {
        padding: 10
      },
      buttonText: {
        color: "#27ae60"
      },
      bottomBar: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "flex-end"
      },
      overlayRectangle: {
        position: "absolute",
        backgroundColor: "rgba(0,0,0,0.2)",
        left: 0,
        top: 0,
        bottom: 0,
        right: 0
      },
      overlayContainer: {
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        right: 0
      }
    });
  }
});

// src/components/SvgMask.tsx
var SvgMask_exports = {};
__export(SvgMask_exports, {
  SvgMask: () => SvgMask
});
var import_react3, import_react_native4, import_react_native_svg, AnimatedSvgPath, windowDimensions, defaultSvgPath, SvgMask;
var init_SvgMask = __esm({
  "src/components/SvgMask.tsx"() {
    "use strict";
    import_react3 = __toESM(require("react"));
    import_react_native4 = require("react-native");
    import_react_native_svg = __toESM(require("react-native-svg"));
    AnimatedSvgPath = import_react_native4.Animated.createAnimatedComponent(import_react_native_svg.Path);
    windowDimensions = import_react_native4.Dimensions.get("window");
    defaultSvgPath = ({
      size,
      position,
      canvasSize
    }) => {
      const positionX = position.x._value;
      const positionY = position.y._value;
      const sizeX = size.x._value;
      const sizeY = size.y._value;
      return `M0,0H${canvasSize.x}V${canvasSize.y}H0V0ZM${positionX},${positionY}H${positionX + sizeX}V${positionY + sizeY}H${positionX}V${positionY}Z`;
    };
    SvgMask = ({
      size,
      position,
      style,
      easing = import_react_native4.Easing.linear,
      animationDuration = 300,
      animated,
      backdropColor,
      svgMaskPath = defaultSvgPath,
      onClick,
      currentStep
    }) => {
      const [canvasSize, setCanvasSize] = (0, import_react3.useState)({
        x: windowDimensions.width,
        y: windowDimensions.height
      });
      const sizeValue = (0, import_react3.useRef)(
        new import_react_native4.Animated.ValueXY(size)
      ).current;
      const positionValue = (0, import_react3.useRef)(
        new import_react_native4.Animated.ValueXY(position)
      ).current;
      const maskRef = (0, import_react3.useRef)(null);
      const animationListener = (0, import_react3.useCallback)(() => {
        const d = svgMaskPath({
          size: sizeValue,
          position: positionValue,
          canvasSize,
          step: currentStep
        });
        if (maskRef.current) {
          maskRef.current.setNativeProps({ d });
        }
      }, [canvasSize, currentStep, svgMaskPath, positionValue, sizeValue]);
      const animate = (0, import_react3.useCallback)(
        (toSize = size, toPosition = position) => {
          if (animated) {
            import_react_native4.Animated.parallel([
              import_react_native4.Animated.timing(sizeValue, {
                toValue: toSize,
                duration: animationDuration,
                easing,
                useNativeDriver: false
              }),
              import_react_native4.Animated.timing(positionValue, {
                toValue: toPosition,
                duration: animationDuration,
                easing,
                useNativeDriver: false
              })
            ]).start();
          } else {
            sizeValue.setValue(toSize);
            positionValue.setValue(toPosition);
          }
        },
        [
          animated,
          animationDuration,
          easing,
          positionValue,
          position,
          size,
          sizeValue
        ]
      );
      (0, import_react3.useEffect)(() => {
        const id = positionValue.addListener(animationListener);
        return () => {
          positionValue.removeListener(id);
        };
      }, [animationListener, positionValue]);
      (0, import_react3.useEffect)(() => {
        if (size && position) {
          animate(size, position);
        }
      }, [animate, position, size]);
      const handleLayout = ({
        nativeEvent: {
          layout: { width, height }
        }
      }) => {
        setCanvasSize({
          x: width,
          y: height
        });
      };
      return /* @__PURE__ */ import_react3.default.createElement(
        import_react_native4.View,
        {
          style,
          onLayout: handleLayout,
          onStartShouldSetResponder: onClick
        },
        canvasSize ? /* @__PURE__ */ import_react3.default.createElement(import_react_native_svg.default, { pointerEvents: "none", width: canvasSize.x, height: canvasSize.y }, /* @__PURE__ */ import_react3.default.createElement(
          AnimatedSvgPath,
          {
            ref: maskRef,
            fill: backdropColor,
            fillRule: "evenodd",
            strokeWidth: 1,
            d: svgMaskPath({
              size: sizeValue,
              position: positionValue,
              canvasSize,
              step: currentStep
            })
          }
        )) : null
      );
    };
  }
});

// src/components/ViewMask.tsx
var ViewMask_exports = {};
__export(ViewMask_exports, {
  ViewMask: () => ViewMask
});
var import_react4, import_react_native5, ViewMask;
var init_ViewMask = __esm({
  "src/components/ViewMask.tsx"() {
    "use strict";
    import_react4 = __toESM(require("react"));
    import_react_native5 = require("react-native");
    init_style();
    ViewMask = (props) => {
      const sizeValue = (0, import_react4.useRef)(
        new import_react_native5.Animated.ValueXY(props.size)
      ).current;
      const positionValue = (0, import_react4.useRef)(
        new import_react_native5.Animated.ValueXY(props.position)
      ).current;
      const [animated, setAnimated] = (0, import_react4.useState)(false);
      const animate = (0, import_react4.useCallback)(
        (size = props.size, position = props.position) => {
          if (animated) {
            import_react_native5.Animated.parallel([
              import_react_native5.Animated.timing(sizeValue, {
                toValue: size,
                duration: props.animationDuration,
                easing: props.easing,
                useNativeDriver: false
              }),
              import_react_native5.Animated.timing(positionValue, {
                toValue: position,
                duration: props.animationDuration,
                easing: props.easing,
                useNativeDriver: false
              })
            ]).start();
          } else {
            sizeValue.setValue(size);
            positionValue.setValue(position);
            setAnimated(props.animated);
          }
        },
        [
          animated,
          positionValue,
          props.animated,
          props.animationDuration,
          props.easing,
          props.position,
          props.size,
          sizeValue
        ]
      );
      (0, import_react4.useEffect)(() => {
        if (props.position || props.size) {
          animate(props.size, props.position);
        }
      }, [animate, props.position, props.size]);
      const width = props.layout ? props.layout.width : 500;
      const height = props.layout ? props.layout.height : 500;
      const leftOverlayRight = import_react_native5.Animated.add(
        width,
        import_react_native5.Animated.multiply(positionValue.x, -1)
      );
      const rightOverlayLeft = import_react_native5.Animated.add(sizeValue.x, positionValue.x);
      const bottomOverlayTopBoundary = import_react_native5.Animated.add(sizeValue.y, positionValue.y);
      const topOverlayBottomBoundary = import_react_native5.Animated.add(
        height,
        import_react_native5.Animated.multiply(-1, positionValue.y)
      );
      const verticalOverlayLeftBoundary = positionValue.x;
      const verticalOverlayRightBoundary = import_react_native5.Animated.add(
        width,
        import_react_native5.Animated.multiply(-1, rightOverlayLeft)
      );
      return /* @__PURE__ */ import_react4.default.createElement(import_react_native5.View, { style: props.style, onStartShouldSetResponder: props.onClick }, [
        {
          right: leftOverlayRight,
          backgroundColor: props.backdropColor
        },
        {
          left: rightOverlayLeft,
          backgroundColor: props.backdropColor
        },
        {
          top: bottomOverlayTopBoundary,
          left: verticalOverlayLeftBoundary,
          right: verticalOverlayRightBoundary,
          backgroundColor: props.backdropColor
        },
        {
          bottom: topOverlayBottomBoundary,
          left: verticalOverlayLeftBoundary,
          right: verticalOverlayRightBoundary,
          backgroundColor: props.backdropColor
        }
      ].map((style, index) => /* @__PURE__ */ import_react4.default.createElement(import_react_native5.Animated.View, { key: index, style: [styles.overlayRectangle, style] })));
    };
  }
});

// src/index.ts
var src_exports = {};
__export(src_exports, {
  CopilotProvider: () => CopilotProvider,
  CopilotStep: () => CopilotStep,
  DefaultUI: () => DefaultUI,
  useCopilot: () => useCopilot,
  walkthroughable: () => walkthroughable
});
module.exports = __toCommonJS(src_exports);

// src/components/default-ui/StepNumber.tsx
var import_react9 = __toESM(require("react"));
var import_react_native8 = require("react-native");

// src/contexts/CopilotProvider.tsx
var import_mitt = __toESM(require("mitt"));
var import_react8 = __toESM(require("react"));
var import_react_native7 = require("react-native");

// src/components/CopilotModal.tsx
var import_react5 = __toESM(require("react"));
var import_react_native6 = require("react-native");

// src/components/default-ui/Tooltip.tsx
var import_react2 = __toESM(require("react"));
var import_react_native3 = require("react-native");

// src/components/default-ui/Button.tsx
var import_react = __toESM(require("react"));
var import_react_native2 = require("react-native");
init_style();
var Button = (_a) => {
  var _b = _a, { wrapperStyle, style } = _b, rest = __objRest(_b, ["wrapperStyle", "style"]);
  return /* @__PURE__ */ import_react.default.createElement(import_react_native2.View, { style: [styles.button, wrapperStyle] }, /* @__PURE__ */ import_react.default.createElement(import_react_native2.Text, __spreadValues({ style: [styles.buttonText, style] }, rest)));
};

// src/components/default-ui/Tooltip.tsx
init_style();
var Tooltip = ({ labels }) => {
  const { goToNext, goToPrev, stop, currentStep, isFirstStep, isLastStep } = useCopilot();
  const handleStop = () => {
    void stop();
  };
  const handleNext = () => {
    void goToNext();
  };
  const handlePrev = () => {
    void goToPrev();
  };
  return /* @__PURE__ */ import_react2.default.createElement(import_react_native3.View, null, /* @__PURE__ */ import_react2.default.createElement(import_react_native3.View, { style: styles.tooltipContainer }, /* @__PURE__ */ import_react2.default.createElement(import_react_native3.Text, { testID: "stepDescription", style: styles.tooltipText }, currentStep == null ? void 0 : currentStep.text)), /* @__PURE__ */ import_react2.default.createElement(import_react_native3.View, { style: [styles.bottomBar] }, !isLastStep ? /* @__PURE__ */ import_react2.default.createElement(import_react_native3.TouchableOpacity, { onPress: handleStop }, /* @__PURE__ */ import_react2.default.createElement(Button, null, labels.skip)) : null, !isFirstStep ? /* @__PURE__ */ import_react2.default.createElement(import_react_native3.TouchableOpacity, { onPress: handlePrev }, /* @__PURE__ */ import_react2.default.createElement(Button, null, labels.previous)) : null, !isLastStep ? /* @__PURE__ */ import_react2.default.createElement(import_react_native3.TouchableOpacity, { onPress: handleNext }, /* @__PURE__ */ import_react2.default.createElement(Button, null, labels.next)) : /* @__PURE__ */ import_react2.default.createElement(import_react_native3.TouchableOpacity, { onPress: handleStop }, /* @__PURE__ */ import_react2.default.createElement(Button, null, labels.finish))));
};

// src/components/CopilotModal.tsx
init_style();
var noop = () => {
};
var makeDefaultLayout = () => ({
  x: 0,
  y: 0,
  width: 0,
  height: 0
});
var CopilotModal = (0, import_react5.forwardRef)(
  function CopilotModal2({
    easing = import_react_native6.Easing.elastic(0.7),
    animationDuration = 400,
    tooltipComponent: TooltipComponent = Tooltip,
    tooltipStyle = {},
    stepNumberComponent: StepNumberComponent = StepNumber,
    overlay = typeof import_react_native6.NativeModules.RNSVGSvgViewManager !== "undefined" ? "svg" : "view",
    animated = typeof import_react_native6.NativeModules.RNSVGSvgViewManager !== "undefined",
    androidStatusBarVisible = false,
    backdropColor = "rgba(0, 0, 0, 0.4)",
    labels = {
      finish: "Finish",
      next: "Next",
      previous: "Previous",
      skip: "Skip"
    },
    svgMaskPath,
    stopOnOutsideClick = false,
    arrowColor = "#fff",
    arrowSize = ARROW_SIZE,
    margin = MARGIN
  }, ref) {
    const { stop, currentStep, visible } = useCopilot();
    const [tooltipStyles, setTooltipStyles] = (0, import_react5.useState)({});
    const [arrowStyles, setArrowStyles] = (0, import_react5.useState)({});
    const [animatedValues] = (0, import_react5.useState)({
      top: new import_react_native6.Animated.Value(0),
      stepNumberLeft: new import_react_native6.Animated.Value(0)
    });
    const layoutRef = (0, import_react5.useRef)(makeDefaultLayout());
    const [layout, setLayout] = (0, import_react5.useState)(
      void 0
    );
    const [maskRect, setMaskRect] = (0, import_react5.useState)();
    const [isAnimated, setIsAnimated] = (0, import_react5.useState)(false);
    const [containerVisible, setContainerVisible] = (0, import_react5.useState)(false);
    (0, import_react5.useEffect)(() => {
      if (visible) {
        setContainerVisible(true);
      }
    }, [visible]);
    (0, import_react5.useEffect)(() => {
      if (!visible) {
        reset();
      }
    }, [visible]);
    const handleLayoutChange = ({
      nativeEvent: { layout: newLayout }
    }) => {
      layoutRef.current = newLayout;
    };
    const measure = () => __async(this, null, function* () {
      return yield new Promise((resolve) => {
        const updateLayout = () => {
          if (layoutRef.current.width !== 0) {
            resolve(layoutRef.current);
          } else {
            requestAnimationFrame(updateLayout);
          }
        };
        updateLayout();
      });
    });
    const _animateMove = (0, import_react5.useCallback)(
      (rect) => __async(this, null, function* () {
        var _a;
        const newMeasuredLayout = yield measure();
        if (!androidStatusBarVisible && import_react_native6.Platform.OS === "android") {
          rect.y -= (_a = import_react_native6.StatusBar.currentHeight) != null ? _a : 0;
        }
        let stepNumberLeft = rect.x - STEP_NUMBER_RADIUS;
        if (stepNumberLeft < 0) {
          stepNumberLeft = rect.x + rect.width - STEP_NUMBER_RADIUS;
          if (stepNumberLeft > newMeasuredLayout.width - STEP_NUMBER_DIAMETER) {
            stepNumberLeft = newMeasuredLayout.width - STEP_NUMBER_DIAMETER;
          }
        }
        const center = {
          x: rect.x + rect.width / 2,
          y: rect.y + rect.height / 2
        };
        const relativeToLeft = center.x;
        const relativeToTop = center.y;
        const relativeToBottom = Math.abs(center.y - newMeasuredLayout.height);
        const relativeToRight = Math.abs(center.x - newMeasuredLayout.width);
        const verticalPosition = relativeToBottom > relativeToTop ? "bottom" : "top";
        const horizontalPosition = relativeToLeft > relativeToRight ? "left" : "right";
        const tooltip = {};
        const arrow = {};
        arrow.position = "absolute";
        if (verticalPosition === "bottom") {
          tooltip.top = rect.y + rect.height + margin;
          arrow.borderBottomColor = arrowColor;
          arrow.borderTopColor = "transparent";
          arrow.borderLeftColor = "transparent";
          arrow.borderRightColor = "transparent";
          arrow.top = tooltip.top - arrowSize * 2;
        } else {
          tooltip.bottom = newMeasuredLayout.height - (rect.y - margin);
          arrow.borderTopColor = arrowColor;
          arrow.borderLeftColor = "transparent";
          arrow.borderRightColor = "transparent";
          arrow.borderBottomColor = "transparent";
          arrow.bottom = tooltip.bottom - arrowSize * 2;
        }
        if (horizontalPosition === "left") {
          tooltip.right = Math.max(
            newMeasuredLayout.width - (rect.x + rect.width),
            0
          );
          tooltip.right = tooltip.right === 0 ? tooltip.right + margin : tooltip.right;
          tooltip.maxWidth = newMeasuredLayout.width - tooltip.right - margin;
        } else {
          tooltip.left = Math.max(rect.x, 0);
          tooltip.left = tooltip.left === 0 ? tooltip.left + margin : tooltip.left;
          tooltip.maxWidth = newMeasuredLayout.width - tooltip.left - margin;
        }
        arrow.left = relativeToLeft - arrowSize;
        sanitize(arrow);
        sanitize(tooltip);
        sanitize(rect);
        const animate = [
          ["top", rect.y],
          ["stepNumberLeft", stepNumberLeft]
        ];
        if (isAnimated) {
          import_react_native6.Animated.parallel(
            animate.map(([key, value]) => {
              return import_react_native6.Animated.timing(animatedValues[key], {
                toValue: value,
                duration: animationDuration,
                easing,
                useNativeDriver: false
              });
            })
          ).start();
        } else {
          animate.forEach(([key, value]) => {
            animatedValues[key].setValue(value);
          });
        }
        setTooltipStyles(tooltip);
        setArrowStyles(arrow);
        setLayout(newMeasuredLayout);
        setMaskRect({
          width: rect.width,
          height: rect.height,
          x: Math.floor(Math.max(rect.x, 0)),
          y: Math.floor(Math.max(rect.y, 0))
        });
      }),
      [
        androidStatusBarVisible,
        animatedValues,
        animationDuration,
        arrowColor,
        easing,
        isAnimated,
        arrowSize,
        margin
      ]
    );
    const animateMove = (0, import_react5.useCallback)(
      (rect) => __async(this, null, function* () {
        yield new Promise((resolve) => {
          const frame = () => __async(this, null, function* () {
            yield _animateMove(rect);
            resolve();
          });
          setContainerVisible(true);
          requestAnimationFrame(() => {
            void frame();
          });
        });
      }),
      [_animateMove]
    );
    const reset = () => {
      setIsAnimated(false);
      setContainerVisible(false);
      setLayout(void 0);
    };
    const handleStop = () => {
      reset();
      void stop();
    };
    const handleMaskClick = () => {
      if (stopOnOutsideClick) {
        handleStop();
      }
    };
    (0, import_react5.useImperativeHandle)(
      ref,
      () => {
        return {
          animateMove
        };
      },
      [animateMove]
    );
    const modalVisible = containerVisible || visible;
    const contentVisible = layout != null && containerVisible;
    if (!modalVisible) {
      return null;
    }
    return /* @__PURE__ */ import_react5.default.createElement(
      import_react_native6.Modal,
      {
        animationType: "none",
        visible: true,
        onRequestClose: noop,
        transparent: true,
        supportedOrientations: ["portrait", "landscape"]
      },
      /* @__PURE__ */ import_react5.default.createElement(import_react_native6.View, { style: styles.container, onLayout: handleLayoutChange }, contentVisible && renderMask(), contentVisible && renderTooltip())
    );
    function renderMask() {
      const MaskComponent = overlay === "svg" ? (
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        (init_SvgMask(), __toCommonJS(SvgMask_exports)).SvgMask
      ) : (
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        (init_ViewMask(), __toCommonJS(ViewMask_exports)).ViewMask
      );
      const size = maskRect && {
        x: maskRect.width,
        y: maskRect.height
      };
      const position = maskRect;
      return /* @__PURE__ */ import_react5.default.createElement(
        MaskComponent,
        {
          animated,
          layout,
          style: styles.overlayContainer,
          size,
          position,
          easing,
          animationDuration,
          backdropColor,
          svgMaskPath,
          onClick: handleMaskClick,
          currentStep
        }
      );
    }
    function renderTooltip() {
      if (!currentStep) {
        return null;
      }
      return /* @__PURE__ */ import_react5.default.createElement(import_react5.default.Fragment, null, /* @__PURE__ */ import_react5.default.createElement(
        import_react_native6.Animated.View,
        {
          key: "stepNumber",
          style: [
            styles.stepNumberContainer,
            {
              left: animatedValues.stepNumberLeft,
              top: import_react_native6.Animated.add(animatedValues.top, -STEP_NUMBER_RADIUS)
            }
          ]
        },
        /* @__PURE__ */ import_react5.default.createElement(StepNumberComponent, null)
      ), !!arrowSize && /* @__PURE__ */ import_react5.default.createElement(import_react_native6.Animated.View, { key: "arrow", style: [styles.arrow, arrowStyles] }), /* @__PURE__ */ import_react5.default.createElement(
        import_react_native6.Animated.View,
        {
          key: "tooltip",
          style: [styles.tooltip, tooltipStyles, tooltipStyle]
        },
        /* @__PURE__ */ import_react5.default.createElement(TooltipComponent, { labels })
      ));
    }
  }
);
var floorify = (obj) => {
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === "number") {
      obj[key] = Math.floor(obj[key]);
    }
  });
};
var removeNan = (obj) => {
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === "number" && isNaN(obj[key])) {
      delete obj[key];
    }
  });
};
var sanitize = (obj) => {
  floorify(obj);
  removeNan(obj);
};

// src/contexts/CopilotProvider.tsx
init_style();

// src/hooks/useStateWithAwait.ts
var import_react6 = require("react");
var useStateWithAwait = (initialState) => {
  const endPending = (0, import_react6.useRef)(() => {
  });
  const newDesiredValue = (0, import_react6.useRef)(initialState);
  const [state, setState] = (0, import_react6.useState)(initialState);
  const setStateWithAwait = (newState) => __async(void 0, null, function* () {
    const pending = new Promise((resolve) => {
      endPending.current = resolve;
    });
    newDesiredValue.current = newState;
    setState(newState);
    yield pending;
  });
  (0, import_react6.useEffect)(() => {
    if (state === newDesiredValue.current) {
      endPending.current();
    }
  }, [state]);
  return [state, setStateWithAwait];
};

// src/hooks/useStepsMap.ts
var import_react7 = require("react");
var useStepsMap = () => {
  const [currentStep, setCurrentStepState] = (0, import_react7.useState)(
    void 0
  );
  const [steps, dispatch] = (0, import_react7.useReducer)((state, action) => {
    var _a;
    switch (action.type) {
      case "register":
        return __spreadProps(__spreadValues({}, state), {
          [action.step.name]: action.step
        });
      case "unregister": {
        const _b = state, { [_a = action.stepName]: _ } = _b, rest = __objRest(_b, [__restKey(_a)]);
        return rest;
      }
      default:
        return state;
    }
  }, {});
  const orderedSteps = (0, import_react7.useMemo)(
    () => Object.values(steps).sort((a, b) => a.order - b.order),
    [steps]
  );
  const stepIndex = (0, import_react7.useCallback)(
    (step = currentStep) => step ? orderedSteps.findIndex(
      (stepCandidate) => stepCandidate.order === step.order
    ) : -1,
    [currentStep, orderedSteps]
  );
  const currentStepNumber = (0, import_react7.useMemo)(
    (step = currentStep) => stepIndex(step) + 1,
    [currentStep, stepIndex]
  );
  const totalStepsNumber = (0, import_react7.useMemo)(() => orderedSteps.length, [orderedSteps]);
  const getFirstStep = (0, import_react7.useCallback)(() => orderedSteps[0], [orderedSteps]);
  const getLastStep = (0, import_react7.useCallback)(
    () => orderedSteps[orderedSteps.length - 1],
    [orderedSteps]
  );
  const getPrevStep = (0, import_react7.useCallback)(
    (step = currentStep) => step && orderedSteps[stepIndex(step) - 1],
    [currentStep, stepIndex, orderedSteps]
  );
  const getNextStep = (0, import_react7.useCallback)(
    (step = currentStep) => step && orderedSteps[stepIndex(step) + 1],
    [currentStep, stepIndex, orderedSteps]
  );
  const getNthStep = (0, import_react7.useCallback)(
    (n) => orderedSteps[n - 1],
    [orderedSteps]
  );
  const isFirstStep = (0, import_react7.useMemo)(
    () => currentStep === getFirstStep(),
    [currentStep, getFirstStep]
  );
  const isLastStep = (0, import_react7.useMemo)(
    () => currentStep === getLastStep(),
    [currentStep, getLastStep]
  );
  const registerStep = (0, import_react7.useCallback)((step) => {
    dispatch({ type: "register", step });
  }, []);
  const unregisterStep = (0, import_react7.useCallback)((stepName) => {
    dispatch({ type: "unregister", stepName });
  }, []);
  return {
    currentStepNumber,
    totalStepsNumber,
    getFirstStep,
    getLastStep,
    getPrevStep,
    getNextStep,
    getNthStep,
    isFirstStep,
    isLastStep,
    currentStep,
    setCurrentStepState,
    steps,
    registerStep,
    unregisterStep
  };
};

// src/contexts/CopilotProvider.tsx
var MAX_START_TRIES = 120;
var CopilotContext = (0, import_react8.createContext)(void 0);
var CopilotProvider = (_a) => {
  var _b = _a, {
    verticalOffset = 0,
    children
  } = _b, rest = __objRest(_b, [
    "verticalOffset",
    "children"
  ]);
  const startTries = (0, import_react8.useRef)(0);
  const copilotEvents = (0, import_react8.useRef)((0, import_mitt.default)()).current;
  const modal = (0, import_react8.useRef)(null);
  const [visible, setVisibility] = useStateWithAwait(false);
  const [scrollView, setScrollView] = (0, import_react8.useState)(null);
  const {
    currentStep,
    currentStepNumber,
    totalStepsNumber,
    getFirstStep,
    getPrevStep,
    getNextStep,
    getNthStep,
    isFirstStep,
    isLastStep,
    setCurrentStepState,
    steps,
    registerStep,
    unregisterStep
  } = useStepsMap();
  const moveModalToStep = (0, import_react8.useCallback)(
    (step) => __async(void 0, null, function* () {
      var _a2;
      const size = yield step == null ? void 0 : step.measure();
      if (!size) {
        return;
      }
      yield (_a2 = modal.current) == null ? void 0 : _a2.animateMove({
        width: size.width + OFFSET_WIDTH,
        height: size.height + OFFSET_WIDTH,
        x: size.x - OFFSET_WIDTH / 2,
        y: size.y - OFFSET_WIDTH / 2 + verticalOffset
      });
    }),
    [verticalOffset]
  );
  const setCurrentStep = (0, import_react8.useCallback)(
    (step, move = true) => __async(void 0, null, function* () {
      var _a2;
      setCurrentStepState(step);
      copilotEvents.emit("stepChange", step);
      if (scrollView != null) {
        const nodeHandle = (0, import_react_native7.findNodeHandle)(scrollView);
        if (nodeHandle) {
          (_a2 = step == null ? void 0 : step.wrapperRef.current) == null ? void 0 : _a2.measureLayout(
            nodeHandle,
            (_x, y, _w, h) => {
              const yOffset = y > 0 ? y - h / 2 : 0;
              scrollView.scrollTo({ y: yOffset, animated: false });
            }
          );
        }
      }
      setTimeout(
        () => {
          if (move && step) {
            void moveModalToStep(step);
          }
        },
        scrollView != null ? 100 : 0
      );
    }),
    [copilotEvents, moveModalToStep, scrollView, setCurrentStepState]
  );
  const start = (0, import_react8.useCallback)(
    (fromStep, suppliedScrollView = null) => __async(void 0, null, function* () {
      if (scrollView == null) {
        setScrollView(suppliedScrollView);
      }
      const currentStep2 = fromStep ? steps[fromStep] : getFirstStep();
      if (startTries.current > MAX_START_TRIES) {
        startTries.current = 0;
        return;
      }
      if (currentStep2 == null) {
        startTries.current += 1;
        requestAnimationFrame(() => {
          void start(fromStep);
        });
      } else {
        copilotEvents.emit("start");
        yield setCurrentStep(currentStep2);
        yield moveModalToStep(currentStep2);
        yield setVisibility(true);
        startTries.current = 0;
      }
    }),
    [
      copilotEvents,
      getFirstStep,
      moveModalToStep,
      scrollView,
      setCurrentStep,
      setVisibility,
      steps
    ]
  );
  const stop = (0, import_react8.useCallback)(() => __async(void 0, null, function* () {
    yield setVisibility(false);
    copilotEvents.emit("stop");
  }), [copilotEvents, setVisibility]);
  const next = (0, import_react8.useCallback)(() => __async(void 0, null, function* () {
    yield setCurrentStep(getNextStep());
  }), [getNextStep, setCurrentStep]);
  const nth = (0, import_react8.useCallback)(
    (n) => __async(void 0, null, function* () {
      yield setCurrentStep(getNthStep(n));
    }),
    [getNthStep, setCurrentStep]
  );
  const prev = (0, import_react8.useCallback)(() => __async(void 0, null, function* () {
    yield setCurrentStep(getPrevStep());
  }), [getPrevStep, setCurrentStep]);
  const value = (0, import_react8.useMemo)(
    () => ({
      registerStep,
      unregisterStep,
      currentStep,
      start,
      stop,
      visible,
      copilotEvents,
      goToNext: next,
      goToNth: nth,
      goToPrev: prev,
      isFirstStep,
      isLastStep,
      currentStepNumber,
      totalStepsNumber
    }),
    [
      registerStep,
      unregisterStep,
      currentStep,
      start,
      stop,
      visible,
      copilotEvents,
      next,
      nth,
      prev,
      isFirstStep,
      isLastStep,
      currentStepNumber,
      totalStepsNumber
    ]
  );
  return /* @__PURE__ */ import_react8.default.createElement(CopilotContext.Provider, { value }, /* @__PURE__ */ import_react8.default.createElement(import_react8.default.Fragment, null, /* @__PURE__ */ import_react8.default.createElement(
    CopilotModal,
    __spreadValues({
      ref: modal
    }, rest)
  ), children));
};
var useCopilot = () => {
  const value = (0, import_react8.useContext)(CopilotContext);
  if (value == null) {
    throw new Error("You must wrap your app inside CopilotProvider");
  }
  return value;
};

// src/components/default-ui/StepNumber.tsx
init_style();
var StepNumber = () => {
  const { currentStepNumber } = useCopilot();
  return /* @__PURE__ */ import_react9.default.createElement(import_react_native8.View, { style: styles.stepNumber }, /* @__PURE__ */ import_react9.default.createElement(import_react_native8.Text, { style: styles.stepNumberText }, currentStepNumber));
};

// src/hocs/walkthroughable.tsx
var import_react10 = __toESM(require("react"));
function walkthroughable(WrappedComponent) {
  const Component = (props) => {
    const _a = props, { copilot } = _a, rest = __objRest(_a, ["copilot"]);
    return /* @__PURE__ */ import_react10.default.createElement(WrappedComponent, __spreadValues(__spreadValues({}, copilot), rest));
  };
  Component.displayName = "Walkthroughable";
  return Component;
}

// src/components/CopilotStep.tsx
var import_react11 = __toESM(require("react"));
var CopilotStep = ({
  name,
  order,
  text,
  children,
  active = true
}) => {
  const registeredName = (0, import_react11.useRef)(null);
  const { registerStep, unregisterStep } = useCopilot();
  const wrapperRef = import_react11.default.useRef(null);
  const measure = () => __async(void 0, null, function* () {
    return yield new Promise((resolve) => {
      const measure2 = () => {
        if (wrapperRef.current != null && "measure" in wrapperRef.current) {
          wrapperRef.current.measure((_ox, _oy, width, height, x, y) => {
            resolve({
              x,
              y,
              width,
              height
            });
          });
        } else {
          requestAnimationFrame(measure2);
        }
      };
      measure2();
    });
  });
  (0, import_react11.useEffect)(() => {
    if (active) {
      if (registeredName.current && registeredName.current !== name) {
        unregisterStep(registeredName.current);
      }
      registerStep({
        name,
        text,
        order,
        measure,
        wrapperRef,
        visible: true
      });
      registeredName.current = name;
    }
  }, [name, order, text, registerStep, unregisterStep, active]);
  (0, import_react11.useEffect)(() => {
    if (active) {
      return () => {
        if (registeredName.current) {
          unregisterStep(registeredName.current);
        }
      };
    }
  }, [name, unregisterStep, active]);
  const copilotProps = (0, import_react11.useMemo)(
    () => ({
      ref: wrapperRef,
      onLayout: () => {
      }
      // Android hack
    }),
    []
  );
  return import_react11.default.cloneElement(children, { copilot: copilotProps });
};

// src/index.ts
var DefaultUI = {
  StepNumber,
  Tooltip
};
//# sourceMappingURL=index.js.map