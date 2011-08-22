(function(){
var $gwt_version = "2.3.0";
var $wnd = window;
var $doc = $wnd.document;
var $moduleName, $moduleBase;
var $strongName = '2E065773814A47D3E87F4BC6AD63890F';
var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;
var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;
$stats && $stats({moduleName:'submit',sessionId:$sessionId,subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});
var _;
function nullMethod(){
}

function Object_0(){
}

_ = Object_0.prototype = {};
_.equals$ = function equals(other){
  return this === other;
}
;
_.getClass$ = function getClass_0(){
  return Ljava_lang_Object_2_classLit;
}
;
_.hashCode$ = function hashCode_0(){
  return this.$H || (this.$H = ++sNextHashId);
}
;
_.toString$ = function toString_0(){
  return this.getClass$().typeName + '@' + toPowerOfTwoString(this.hashCode$());
}
;
_.toString = function(){
  return this.toString$();
}
;
_.typeMarker$ = nullMethod;
_.castableTypeMap$ = {};
function $send(this$static, packet){
  var object, request;
  request = create();
  request.open('POST', 'http://bloki-engine.appspot.com/submit', true);
  $setOnReadyStateChange(request, new BlokiPacketSender$1_0(this$static));
  object = new JSONObject_0;
  $put(object, 'mistake', new JSONString_0(packet.mistake));
  $put(object, 'correction', new JSONString_0(packet.correction));
  $put(object, 'context', new JSONString_0(packet.context));
  $put(object, 'url', new JSONString_0(packet.url));
  request.send($toString_0(object));
}

function BlokiPacketSender_0(callback){
  this.callback = callback;
}

function BlokiPacketSender(){
}

_ = BlokiPacketSender_0.prototype = BlokiPacketSender.prototype = new Object_0;
_.getClass$ = function getClass_1(){
  return Lat_tomtasche_bloki_engine_client_BlokiPacketSender_2_classLit;
}
;
_.castableTypeMap$ = {};
_.callback = null;
function BlokiPacketSender$1_0(this$0){
  this.this$0 = this$0;
}

function BlokiPacketSender$1(){
}

_ = BlokiPacketSender$1_0.prototype = BlokiPacketSender$1.prototype = new Object_0;
_.getClass$ = function getClass_2(){
  return Lat_tomtasche_bloki_engine_client_BlokiPacketSender$1_2_classLit;
}
;
_.onReadyStateChange = function onReadyStateChange(xhr){
  xhr.status != 200 && xhr.status != 401?($setTextOrHtml(this.this$0.callback.statusLabel.directionalTextHelper, "<span style='color: red;'>I couldn't reach the server.\nAre you really connected to the internet?\nIf so, feel free to contact me about this error. :)<\/span>", true) , undefined):$hide_0(this.this$0.callback);
}
;
_.castableTypeMap$ = {};
_.this$0 = null;
function $verify(mistake, correction){
  return correction.length == 0?"<span style='color: red;'>Please enter a correction.<\/span>":$equals_0(correction, mistake)?"<span style='color: red;'>Correction matches mistake. Please insert a valid correction.<\/span>":null;
}

function $onModuleLoad(this$static){
  var bloki_center, bloki_div, bloki_left, bloki_right, label;
  bloki_div = $createElement($doc, 'div');
  bloki_div.setAttribute('class', 'bloki_div');
  bloki_left = $createElement($doc, 'div');
  bloki_left.setAttribute('class', 'bloki_left');
  bloki_center = $createElement($doc, 'div');
  bloki_center.setAttribute('class', 'bloki_center');
  bloki_right = $createElement($doc, 'div');
  bloki_right.setAttribute('class', 'bloki_right');
  bloki_div.appendChild(bloki_left);
  bloki_div.appendChild(bloki_center);
  bloki_div.appendChild(bloki_right);
  $addDomHandler((label = new Label_0(bloki_div) , $onAttach(label) , $clinit_22() , $add_5(widgetsToDetach, label) , label), this$static, ($clinit_7() , $clinit_7() , TYPE_0));
  $doc.body.appendChild(bloki_div);
}

function Submit_0(){
}

function Submit(){
}

_ = Submit_0.prototype = Submit.prototype = new Object_0;
_.getClass$ = function getClass_3(){
  return Lat_tomtasche_bloki_engine_client_Submit_2_classLit;
}
;
_.onMouseDown = function onMouseDown(event_0){
  var context, contextBuilder, mistake, text, text$iterator;
  contextBuilder = new StringBuilder_0;
  for (text$iterator = new AbstractList$IteratorImpl_0($getSelectedTextElements($getRange(getSelection_0($wnd)))); text$iterator.i < text$iterator.this$0_0.size_0();) {
    text = dynamicCastJso($next_2(text$iterator));
    $append_2(contextBuilder, text.data);
  }
  mistake = $getText($getRange(getSelection_0($wnd)));
  context = $toString(contextBuilder.data_0);
  if (mistake == null || $trim(mistake).length == 0) {
    $show_0(new InstructionsDialog_0);
    return;
  }
  $show_0(new CorrectionDialog_0(mistake, context));
}
;
_.castableTypeMap$ = {28:1, 45:1};
function setStyleName(elem, style, add){
  if (!elem) {
    throw new RuntimeException_0('Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');
  }
  style = $trim(style);
  if (style.length == 0) {
    throw new IllegalArgumentException_0('Style names cannot be empty');
  }
  add?$addClassName(elem, style):$removeClassName(elem, style);
}

function setStylePrimaryName(elem, style){
  if (!elem) {
    throw new RuntimeException_0('Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');
  }
  style = $trim(style);
  if (style.length == 0) {
    throw new IllegalArgumentException_0('Style names cannot be empty');
  }
  updatePrimaryAndDependentStyleNames(elem, style);
}

function updatePrimaryAndDependentStyleNames(elem, newPrimaryStyle){
  var classes = elem.className.split(/\s+/);
  if (!classes) {
    return;
  }
  var oldPrimaryStyle = classes[0];
  var oldPrimaryStyleLen = oldPrimaryStyle.length;
  classes[0] = newPrimaryStyle;
  for (var i = 1, n = classes.length; i < n; i++) {
    var name_0 = classes[i];
    name_0.length > oldPrimaryStyleLen && name_0.charAt(oldPrimaryStyleLen) == '-' && name_0.indexOf(oldPrimaryStyle) == 0 && (classes[i] = newPrimaryStyle + name_0.substring(oldPrimaryStyleLen));
  }
  elem.className = classes.join(' ');
}

function UIObject(){
}

_ = UIObject.prototype = new Object_0;
_.getClass$ = function getClass_4(){
  return Lcom_google_gwt_user_client_ui_UIObject_2_classLit;
}
;
_.setHeight = function setHeight(height){
  this.element.style['height'] = height;
}
;
_.setWidth = function setWidth(width){
  this.element.style['width'] = width;
}
;
_.toString$ = function toString_1(){
  if (!this.element) {
    return '(null handle)';
  }
  return this.element.outerHTML;
}
;
_.castableTypeMap$ = {12:1};
_.element = null;
function $addDomHandler(this$static, handler, type){
  $sinkEvents(this$static, $eventGetTypeInt(type.name_0));
  return new LegacyHandlerWrapper_0($doAdd((!this$static.handlerManager?(this$static.handlerManager = new HandlerManager_0(this$static)):this$static.handlerManager).eventBus, type, handler));
}

function $fireEvent(this$static, event_0){
  !!this$static.handlerManager && $fireEvent_0(this$static.handlerManager, event_0);
}

function $onAttach(this$static){
  var bitsToAdd;
  if (this$static.attached) {
    throw new IllegalStateException_1("Should only call onAttach when the widget is detached from the browser's document");
  }
  this$static.attached = true;
  this$static.element.__listener = this$static;
  bitsToAdd = this$static.eventsToSink;
  this$static.eventsToSink = -1;
  bitsToAdd > 0 && (this$static.eventsToSink == -1?sinkEvents(this$static.element, bitsToAdd | (this$static.element.__eventBits || 0)):(this$static.eventsToSink |= bitsToAdd));
  this$static.doAttachChildren();
  this$static.onLoad();
}

function $onBrowserEvent(this$static, event_0){
  var related;
  switch ($eventGetTypeInt(event_0.type)) {
    case 16:
    case 32:
      related = event_0.relatedTarget || (event_0.type == 'mouseout'?event_0.toElement:event_0.fromElement);
      if (!!related && $isOrHasChild(this$static.element, related)) {
        return;
      }

  }
  fireNativeEvent(event_0, this$static, this$static.element);
}

function $onDetach(this$static){
  if (!this$static.attached) {
    throw new IllegalStateException_1("Should only call onDetach when the widget is attached to the browser's document");
  }
  try {
    this$static.onUnload();
  }
   finally {
    try {
      this$static.doDetachChildren();
    }
     finally {
      this$static.element.__listener = null;
      this$static.attached = false;
    }
  }
}

function $removeFromParent(this$static){
  if (!this$static.parent_0) {
    ($clinit_22() , $containsKey(widgetsToDetach.map, this$static)) && detachNow(this$static);
  }
   else if (this$static.parent_0) {
    this$static.parent_0.remove(this$static);
  }
   else if (this$static.parent_0) {
    throw new IllegalStateException_1("This widget's parent does not implement HasWidgets");
  }
}

function $setParent(this$static, parent_0){
  var oldParent;
  oldParent = this$static.parent_0;
  if (!parent_0) {
    try {
      !!oldParent && oldParent.attached && $onDetach(this$static);
    }
     finally {
      this$static.parent_0 = null;
    }
  }
   else {
    if (oldParent) {
      throw new IllegalStateException_1('Cannot set a new parent without first clearing the old parent');
    }
    this$static.parent_0 = parent_0;
    parent_0.attached && this$static.onAttach();
  }
}

function $sinkEvents(this$static, eventBitsToAdd){
  this$static.eventsToSink == -1?sinkEvents(this$static.element, eventBitsToAdd | (this$static.element.__eventBits || 0)):(this$static.eventsToSink |= eventBitsToAdd);
}

function Widget(){
}

_ = Widget.prototype = new UIObject;
_.doAttachChildren = function doAttachChildren(){
}
;
_.doDetachChildren = function doDetachChildren(){
}
;
_.fireEvent_0 = function fireEvent(event_0){
  !!this.handlerManager && $fireEvent_0(this.handlerManager, event_0);
}
;
_.getClass$ = function getClass_5(){
  return Lcom_google_gwt_user_client_ui_Widget_2_classLit;
}
;
_.onAttach = function onAttach(){
  $onAttach(this);
}
;
_.onBrowserEvent = function onBrowserEvent(event_0){
  $onBrowserEvent(this, event_0);
}
;
_.onLoad = function onLoad(){
}
;
_.onUnload = function onUnload(){
}
;
_.castableTypeMap$ = {6:1, 7:1, 10:1, 11:1, 12:1, 14:1};
_.attached = false;
_.eventsToSink = 0;
_.handlerManager = null;
_.parent_0 = null;
function Panel(){
}

_ = Panel.prototype = new Widget;
_.doAttachChildren = function doAttachChildren_0(){
  tryCommand(this, ($clinit_19() , attachCommand));
}
;
_.doDetachChildren = function doDetachChildren_0(){
  tryCommand(this, ($clinit_19() , detachCommand));
}
;
_.getClass$ = function getClass_6(){
  return Lcom_google_gwt_user_client_ui_Panel_2_classLit;
}
;
_.castableTypeMap$ = {6:1, 7:1, 10:1, 11:1, 12:1, 14:1};
function $add(this$static, w){
  if (this$static.decPanel.widget) {
    throw new IllegalStateException_1('SimplePanel can only contain one child widget');
  }
  $setWidget(this$static.decPanel, w);
  $maybeUpdateSize(this$static);
}

function $remove(this$static, w){
  if (this$static.widget != w) {
    return false;
  }
  try {
    $setParent(w, null);
  }
   finally {
    this$static.getContainerElement().removeChild(w.element);
    this$static.widget = null;
  }
  return true;
}

function $setWidget(this$static, w){
  if (w == this$static.widget) {
    return;
  }
  !!w && $removeFromParent(w);
  !!this$static.widget && this$static.remove(this$static.widget);
  this$static.widget = w;
  if (w) {
    this$static.getContainerElement().appendChild(this$static.widget.element);
    $setParent(w, this$static);
  }
}

function SimplePanel(){
}

_ = SimplePanel.prototype = new Panel;
_.getClass$ = function getClass_7(){
  return Lcom_google_gwt_user_client_ui_SimplePanel_2_classLit;
}
;
_.getContainerElement = function getContainerElement(){
  return this.element;
}
;
_.iterator = function iterator(){
  return new SimplePanel$1_0(this);
}
;
_.remove = function remove(w){
  return $remove(this, w);
}
;
_.castableTypeMap$ = {6:1, 7:1, 10:1, 11:1, 12:1, 14:1};
_.widget = null;
function $center(this$static){
  var initiallyAnimated, initiallyShowing, left, top_0;
  initiallyShowing = this$static.showing;
  initiallyAnimated = this$static.isAnimationEnabled;
  if (!initiallyShowing) {
    this$static.element.style['visibility'] = 'hidden';
    this$static.isAnimationEnabled = false;
    !this$static.resizeHandlerRegistration && (this$static.resizeHandlerRegistration = addResizeHandler(new DialogBox$1_0(this$static)));
    $show(this$static);
  }
  left = $getClientWidth($doc) - (parseInt(this$static.element['offsetWidth']) || 0) >> 1;
  top_0 = $getClientHeight($doc) - (parseInt(this$static.element['offsetHeight']) || 0) >> 1;
  $setPopupPosition(this$static, max($getScrollLeft_0($doc) + left), max($getScrollTop($doc) + top_0));
  if (!initiallyShowing) {
    this$static.isAnimationEnabled = initiallyAnimated;
    if (initiallyAnimated) {
      this$static.element.style['clip'] = 'rect(0px, 0px, 0px, 0px)';
      this$static.element.style['visibility'] = 'visible';
      $run(this$static.resizeAnimation, (new Date).getTime());
    }
     else {
      this$static.element.style['visibility'] = 'visible';
    }
  }
}

function $eventTargetsPopup(this$static, event_0){
  var target;
  target = event_0.srcElement;
  if (is_0(target)) {
    return $isOrHasChild(this$static.element, target);
  }
  return false;
}

function $hide(this$static){
  if (!this$static.showing) {
    return;
  }
  $setState(this$static.resizeAnimation, false, false);
  fire_0(this$static);
}

function $maybeUpdateSize(this$static){
  var w;
  w = this$static.widget;
  if (w) {
    this$static.desiredHeight != null && w.setHeight(this$static.desiredHeight);
    this$static.desiredWidth != null && w.setWidth(this$static.desiredWidth);
  }
}

function $previewNativeEvent(this$static, event_0){
  var eventTargetsPopupOrPartner, nativeEvent, target, type;
  if (event_0.isCanceled || !this$static.previewAllNativeEvents && event_0.isConsumed) {
    this$static.modal && (event_0.isCanceled = true);
    return;
  }
  this$static.onPreviewNativeEvent(event_0);
  if (event_0.isCanceled) {
    return;
  }
  nativeEvent = event_0.nativeEvent;
  eventTargetsPopupOrPartner = $eventTargetsPopup(this$static, nativeEvent);
  eventTargetsPopupOrPartner && (event_0.isConsumed = true);
  this$static.modal && (event_0.isCanceled = true);
  type = $eventGetTypeInt(nativeEvent.type);
  switch (type) {
    case 512:
    case 256:
    case 128:
      {
        return;
      }

    case 4:
      if (sCaptureElem) {
        event_0.isConsumed = true;
        return;
      }

      if (!eventTargetsPopupOrPartner && this$static.autoHide) {
        $hide(this$static);
        return;
      }

      break;
    case 8:
    case 64:
    case 1:
    case 2:
      {
        if (sCaptureElem) {
          event_0.isConsumed = true;
          return;
        }
        break;
      }

    case 2048:
      {
        target = nativeEvent.srcElement;
        if (this$static.modal && !eventTargetsPopupOrPartner && !!target) {
          target.blur && target != $doc.body && target.blur();
          event_0.isCanceled = true;
          return;
        }
        break;
      }

  }
}

function $setPopupPosition(this$static, left, top_0){
  var elem;
  this$static.leftPosition = left;
  this$static.topPosition = top_0;
  left -= $getBodyOffsetLeft($doc);
  top_0 -= $getBodyOffsetTop($doc);
  elem = this$static.element;
  elem.style['left'] = left + ($clinit_5() , 'px');
  elem.style['top'] = top_0 + 'px';
}

function $show(this$static){
  if (this$static.showing) {
    return;
  }
   else 
    this$static.attached && $removeFromParent(this$static);
  $setState(this$static.resizeAnimation, true, false);
}

function $updateHandlers(this$static){
  if (this$static.nativePreviewHandlerRegistration) {
    $removeHandler(this$static.nativePreviewHandlerRegistration.real);
    this$static.nativePreviewHandlerRegistration = null;
  }
  if (this$static.historyHandlerRegistration) {
    $removeHandler(this$static.historyHandlerRegistration.real);
    this$static.historyHandlerRegistration = null;
  }
  if (this$static.showing) {
    this$static.nativePreviewHandlerRegistration = addNativePreviewHandler(new PopupPanel$3_0(this$static));
    this$static.historyHandlerRegistration = addValueChangeHandler(new PopupPanel$4_0(this$static));
  }
}

function PopupPanel(){
}

_ = PopupPanel.prototype = new SimplePanel;
_.getClass$ = function getClass_8(){
  return Lcom_google_gwt_user_client_ui_PopupPanel_2_classLit;
}
;
_.getContainerElement = function getContainerElement_0(){
  return $getFirstChildElement(this.element);
}
;
_.hide = function hide(){
  $hide(this);
}
;
_.onPreviewNativeEvent = function onPreviewNativeEvent(event_0){
  event_0.isFirstHandler && (event_0.nativeEvent , false) && (event_0.isCanceled = true);
}
;
_.onUnload = function onUnload_0(){
  this.showing && $setState(this.resizeAnimation, false, true);
}
;
_.setHeight = function setHeight_0(height){
  this.desiredHeight = height;
  $maybeUpdateSize(this);
  height.length == 0 && (this.desiredHeight = null);
}
;
_.setWidth = function setWidth_0(width){
  this.desiredWidth = width;
  $maybeUpdateSize(this);
  width.length == 0 && (this.desiredWidth = null);
}
;
_.castableTypeMap$ = {6:1, 7:1, 10:1, 11:1, 12:1, 14:1};
_.autoHide = false;
_.autoHideOnHistoryEvents = false;
_.desiredHeight = null;
_.desiredWidth = null;
_.glass = null;
_.historyHandlerRegistration = null;
_.isAnimationEnabled = false;
_.isGlassEnabled = false;
_.leftPosition = -1;
_.modal = false;
_.nativePreviewHandlerRegistration = null;
_.previewAllNativeEvents = false;
_.showing = false;
_.topPosition = -1;
function DecoratedPopupPanel(){
}

_ = DecoratedPopupPanel.prototype = new PopupPanel;
_.doAttachChildren = function doAttachChildren_1(){
  $onAttach(this.decPanel);
}
;
_.doDetachChildren = function doDetachChildren_1(){
  $onDetach(this.decPanel);
}
;
_.getClass$ = function getClass_9(){
  return Lcom_google_gwt_user_client_ui_DecoratedPopupPanel_2_classLit;
}
;
_.iterator = function iterator_0(){
  return new SimplePanel$1_0(this.decPanel);
}
;
_.remove = function remove_0(w){
  return $remove(this.decPanel, w);
}
;
_.castableTypeMap$ = {6:1, 7:1, 10:1, 11:1, 12:1, 14:1};
_.decPanel = null;
function $beginDragging(this$static, event_0){
  $onMouseDown(this$static, (this$static.caption , $getX(event_0)), $getY(event_0));
}

function $continueDragging(this$static, event_0){
  $onMouseMove(this$static, (this$static.caption , $getX(event_0)), $getY(event_0));
}

function $endDragging(this$static, event_0){
  $onMouseUp(this$static, (this$static.caption , $getX(event_0) , $getY(event_0)));
}

function $hide_0(this$static){
  if (this$static.resizeHandlerRegistration) {
    $removeHandler(this$static.resizeHandlerRegistration.real);
    this$static.resizeHandlerRegistration = null;
  }
  $hide(this$static);
}

function $isCaptionEvent(this$static, event_0){
  var target, td, tr, parent_0;
  target = event_0.srcElement;
  if (is_0(target)) {
    return $isOrHasChild((parent_0 = (tr = this$static.decPanel.tbody.children[0] , td = tr.children[1] , $getFirstChildElement(td)).parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0), target);
  }
  return false;
}

function $onMouseDown(this$static, x, y){
  if (!sCaptureElem) {
    this$static.dragging = true;
    setCapture(this$static.element);
    this$static.dragStartX = x;
    this$static.dragStartY = y;
  }
}

function $onMouseMove(this$static, x, y){
  var absX, absY;
  if (this$static.dragging) {
    absX = x + $getAbsoluteLeft(this$static.element);
    absY = y + $getAbsoluteTop(this$static.element);
    if (absX < this$static.clientLeft_0 || absX >= this$static.windowWidth || absY < this$static.clientTop_0) {
      return;
    }
    $setPopupPosition(this$static, absX - this$static.dragStartX, absY - this$static.dragStartY);
  }
}

function $onMouseUp(this$static){
  this$static.dragging = false;
  releaseCapture(this$static.element);
}

function $show_0(this$static){
  !this$static.resizeHandlerRegistration && (this$static.resizeHandlerRegistration = addResizeHandler(new DialogBox$1_0(this$static)));
  $show(this$static);
}

function DialogBox_0(captionWidget){
  var mouseHandler, td, rowStyles, parent_0, parent_1, td_0, tr, parent_2;
  this.element = $createElement($doc, 'div');
  this.glassResizer = new PopupPanel$1_0;
  this.resizeAnimation = new PopupPanel$ResizeAnimation_0(this);
  this.element.appendChild($createElement($doc, 'div'));
  $setPopupPosition(this, 0, 0);
  (parent_0 = $getFirstChildElement(this.element).parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0)['className'] = 'gwt-PopupPanel';
  $getFirstChildElement(this.element)['className'] = 'popupContent';
  this.autoHide = true;
  this.autoHideOnHistoryEvents = true;
  this.modal = true;
  rowStyles = initValues(_3Ljava_lang_String_2_classLit, {15:1}, 1, ['dialogTop', 'dialogMiddle', 'dialogBottom']);
  this.decPanel = new DecoratorPanel_0(rowStyles);
  this.decPanel.element['className'] = '';
  setStylePrimaryName((parent_1 = $getFirstChildElement(this.element).parentNode , (!parent_1 || parent_1.nodeType != 1) && (parent_1 = null) , parent_1), 'gwt-DecoratedPopupPanel');
  $setWidget(this, this.decPanel);
  $maybeUpdateSize(this);
  setStyleName($getFirstChildElement(this.element), 'popupContent', false);
  setStyleName(this.decPanel.containerElem, 'dialogContent', true);
  $removeFromParent(captionWidget);
  this.caption = captionWidget;
  td = (tr = this.decPanel.tbody.children[0] , td_0 = tr.children[1] , $getFirstChildElement(td_0));
  td.appendChild(this.caption.element);
  $setParent(this.caption, this);
  (parent_2 = $getFirstChildElement(this.element).parentNode , (!parent_2 || parent_2.nodeType != 1) && (parent_2 = null) , parent_2)['className'] = 'gwt-DialogBox';
  this.windowWidth = $getClientWidth($doc);
  this.clientLeft_0 = $getBodyOffsetLeft($doc);
  this.clientTop_0 = $getBodyOffsetTop($doc);
  mouseHandler = new DialogBox$MouseHandler_0(this);
  $addDomHandler(this, mouseHandler, ($clinit_7() , $clinit_7() , TYPE_0));
  $addDomHandler(this, mouseHandler, ($clinit_11() , $clinit_11() , TYPE_4));
  $addDomHandler(this, mouseHandler, ($clinit_8() , $clinit_8() , TYPE_1));
  $addDomHandler(this, mouseHandler, ($clinit_10() , $clinit_10() , TYPE_3));
  $addDomHandler(this, mouseHandler, ($clinit_9() , $clinit_9() , TYPE_2));
}

function DialogBox(){
}

_ = DialogBox.prototype = new DecoratedPopupPanel;
_.doAttachChildren = function doAttachChildren_2(){
  try {
    $onAttach(this.decPanel);
  }
   finally {
    this.caption.onAttach();
  }
}
;
_.doDetachChildren = function doDetachChildren_2(){
  try {
    $onDetach(this.decPanel);
  }
   finally {
    $onDetach(this.caption);
  }
}
;
_.getClass$ = function getClass_10(){
  return Lcom_google_gwt_user_client_ui_DialogBox_2_classLit;
}
;
_.hide = function hide_0(){
  $hide_0(this);
}
;
_.onBrowserEvent = function onBrowserEvent_0(event_0){
  switch ($eventGetTypeInt(event_0.type)) {
    case 4:
    case 8:
    case 64:
    case 16:
    case 32:
      if (!this.dragging && !$isCaptionEvent(this, event_0)) {
        return;
      }

  }
  $onBrowserEvent(this, event_0);
}
;
_.onPreviewNativeEvent = function onPreviewNativeEvent_0(event_0){
  var nativeEvent;
  nativeEvent = event_0.nativeEvent;
  !event_0.isCanceled && $eventGetTypeInt(event_0.nativeEvent.type) == 4 && $isCaptionEvent(this, nativeEvent) && (nativeEvent.returnValue = false , undefined);
  event_0.isFirstHandler && (event_0.nativeEvent , false) && (event_0.isCanceled = true);
}
;
_.castableTypeMap$ = {6:1, 7:1, 10:1, 11:1, 12:1, 14:1};
_.caption = null;
_.clientLeft_0 = 0;
_.clientTop_0 = 0;
_.dragStartX = 0;
_.dragStartY = 0;
_.dragging = false;
_.resizeHandlerRegistration = null;
_.windowWidth = 0;
function CorrectionDialog_0(mistake, context){
  var buttonPanel, closeButton, label, panel, sendButton, containerElement, td, td_0;
  DialogBox_0.call(this, new DialogBox$CaptionImpl_0);
  this.sender = new BlokiPacketSender_0(this);
  this.packet = new BlokiPacket_0(mistake, context);
  containerElement = $getFirstChildElement(this.element);
  containerElement.setAttribute('title', 'Bloki - Crowdsourced typo fixjng');
  $setTextOrHtml(this.caption.directionalTextHelper, 'Bloki - Crowdsourced typo fixjng', false);
  this.isAnimationEnabled = true;
  label = new HTML_1("What should '<b>" + mistake + "<\/b>' read like instead?");
  this.correctionArea = new TextArea_1;
  this.correctionArea.element.style['width'] = '90%';
  $setText(this.correctionArea, mistake);
  $focus(this.correctionArea.element);
  $selectAll(this.correctionArea);
  this.statusLabel = new HTML_0;
  sendButton = new Button_0('Send');
  $addDomHandler(sendButton, new CorrectionDialog$1_0(this), ($clinit_6() , $clinit_6() , TYPE));
  closeButton = new Button_0('Close');
  $addDomHandler(closeButton, this, TYPE);
  buttonPanel = new HorizontalPanel_0;
  buttonPanel.element.style['width'] = '100%';
  td = $createAlignedTd(buttonPanel);
  buttonPanel.tableRow.appendChild(td);
  $removeFromParent(closeButton);
  $add_3(buttonPanel.children_0, closeButton);
  td.appendChild(closeButton.element);
  $setParent(closeButton, buttonPanel);
  td_0 = $createAlignedTd(buttonPanel);
  buttonPanel.tableRow.appendChild(td_0);
  $removeFromParent(sendButton);
  $add_3(buttonPanel.children_0, sendButton);
  td_0.appendChild(sendButton.element);
  $setParent(sendButton, buttonPanel);
  $setCellHorizontalAlignment(buttonPanel, closeButton, ($clinit_20() , ALIGN_LEFT));
  $setCellHorizontalAlignment(buttonPanel, sendButton, ALIGN_RIGHT);
  panel = new VerticalPanel_0;
  panel.element.style['width'] = '100%';
  $add_2(panel, label);
  $add_2(panel, this.correctionArea);
  $add_2(panel, this.statusLabel);
  $add_2(panel, buttonPanel);
  $add(this, panel);
  $center(this);
}

function CorrectionDialog(){
}

_ = CorrectionDialog_0.prototype = CorrectionDialog.prototype = new DialogBox;
_.getClass$ = function getClass_11(){
  return Lat_tomtasche_bloki_engine_client_widget_CorrectionDialog_2_classLit;
}
;
_.onClick = function onClick(event_0){
  $hide_0(this);
}
;
_.castableTypeMap$ = {6:1, 7:1, 10:1, 11:1, 12:1, 14:1, 26:1, 45:1};
_.correctionArea = null;
_.packet = null;
_.sender = null;
_.statusLabel = null;
function CorrectionDialog$1_0(this$0){
  this.this$0 = this$0;
}

function CorrectionDialog$1(){
}

_ = CorrectionDialog$1_0.prototype = CorrectionDialog$1.prototype = new Object_0;
_.getClass$ = function getClass_12(){
  return Lat_tomtasche_bloki_engine_client_widget_CorrectionDialog$1_2_classLit;
}
;
_.onClick = function onClick_0(event_0){
  var status_0;
  status_0 = $verify(this.this$0.packet.mistake, $getPropertyString(this.this$0.correctionArea.element, 'value'));
  if (status_0 != null) {
    $setTextOrHtml(this.this$0.statusLabel.directionalTextHelper, status_0, true);
    return;
  }
   else {
    $setTextOrHtml(this.this$0.statusLabel.directionalTextHelper, 'Sending...', true);
  }
  this.this$0.packet.correction = $getPropertyString(this.this$0.correctionArea.element, 'value');
  this.this$0.packet.url = $wnd.location.href;
  $send(this.this$0.sender, this.this$0.packet);
}
;
_.castableTypeMap$ = {26:1, 45:1};
_.this$0 = null;
function InstructionsDialog_0(){
  var instructions, containerElement;
  DialogBox_0.call(this, new DialogBox$CaptionImpl_0);
  containerElement = $getFirstChildElement(this.element);
  containerElement.setAttribute('title', 'Bloki - Crowdsourced typo fixjng');
  $setTextOrHtml(this.caption.directionalTextHelper, 'Bloki - Crowdsourced typo fixjng', false);
  instructions = new HTML_0;
  $setTextOrHtml(instructions.directionalTextHelper, "<p>You probably ask yourself what this strange is. Well, it's Bloki.<br />Bloki helps a blog or website's owner to fix typos and misspellings. How? Using <b>your<\/b> help:<br />If you come across a typo or missspelling simply select the word / sentence and submit a correction. That's it.<br />We'll send the website's owner a mail and he'll decide if he agrees with you or not and probably fix the typo.<\/p><p>More information at <a href='http://goo.gl/Ortds'>bloki.tomtasche.at<\/a><\/p>", true);
  $add(this, instructions);
  $center(this);
}

function InstructionsDialog(){
}

_ = InstructionsDialog_0.prototype = InstructionsDialog.prototype = new DialogBox;
_.getClass$ = function getClass_13(){
  return Lat_tomtasche_bloki_engine_client_widget_InstructionsDialog_2_classLit;
}
;
_.castableTypeMap$ = {6:1, 7:1, 10:1, 11:1, 12:1, 14:1};
function BlokiPacket_0(mistake, context){
  this.mistake = mistake;
  this.correction = null;
  this.context = context;
  this.url = null;
}

function BlokiPacket(){
}

_ = BlokiPacket_0.prototype = BlokiPacket.prototype = new Object_0;
_.getClass$ = function getClass_14(){
  return Lat_tomtasche_bloki_engine_shared_BlokiPacket_2_classLit;
}
;
_.toString$ = function toString_2(){
  var builder;
  builder = new StringBuilder_0;
  $append_2($append_2($append_2($append_2($append_2($append_2($append_2($append_2(($appendNonNull(builder.data_0, 'BlokiPacket [mistake=') , builder), this.mistake), ', correction='), this.correction), ', context='), this.context), ', url='), this.url), ']');
  return $toString(builder.data_0);
}
;
_.castableTypeMap$ = {};
_.context = null;
_.correction = null;
_.mistake = null;
_.url = null;
function $clinit(){
  $clinit = nullMethod;
  $clinit_0();
}

function $ensureEndPoints(this$static){
  if (!this$static.m_startPoint || !this$static.m_endPoint) {
    $fillRangePoints(this$static);
    this$static.m_lastStartPoint = new RangeEndPoint_2(this$static.m_startPoint);
    this$static.m_lastEndPoint = new RangeEndPoint_2(this$static.m_endPoint);
  }
}

function $ensureRange(this$static){
  if (!this$static.m_range || !!this$static.m_startPoint && (!this$static.m_lastStartPoint || !$equals(this$static.m_lastStartPoint, this$static.m_startPoint) || !this$static.m_lastEndPoint || !$equals(this$static.m_lastEndPoint, this$static.m_endPoint))) {
    this$static.m_range = $createRange(this$static.m_startPoint.m_textNode, this$static.m_startPoint.m_offset, this$static.m_endPoint.m_textNode, this$static.m_endPoint.m_offset);
    this$static.m_lastStartPoint = new RangeEndPoint_2(this$static.m_startPoint);
    this$static.m_lastEndPoint = new RangeEndPoint_2(this$static.m_endPoint);
  }
}

function $getSelectedTextElements(this$static){
  return getSelectedTextElements(this$static.m_startPoint.m_textNode, this$static.m_endPoint.m_textNode);
}

function $getText(this$static){
  $ensureRange(this$static);
  return this$static.m_range.text;
}

function Range_1(document_0, rangeObj){
  $clinit();
  this.m_document = document_0;
  this.m_range = rangeObj;
}

function getAdjacentTextElement(current, topMostNode, forward_0, traversingUp){
  $clinit();
  var node, res;
  res = null;
  if (!traversingUp) {
    if (current.childNodes.length > 0) {
      node = forward_0?current.firstChild:current.lastChild;
      node.nodeType == 3?(res = node):(res = getAdjacentTextElement(node, topMostNode, forward_0, false));
    }
  }
  if (!res) {
    node = forward_0?current.nextSibling:current.previousSibling;
    !!node && (node.nodeType == 3?(res = node):(res = getAdjacentTextElement(node, topMostNode, forward_0, false)));
  }
  if (!res && current != topMostNode) {
    node = current.parentNode;
    !!node && node.nodeType != 9 && (res = getAdjacentTextElement(node, topMostNode, forward_0, true));
  }
  return res;
}

function getSelectedTextElements(startNode, endNode){
  var current, res;
  res = new ArrayList_0;
  current = startNode;
  while (!!current && current != endNode) {
    setCheck(res.array, res.size++, current);
    current = getAdjacentTextElement(current, null, true, false);
  }
  !current?(res = null):(setCheck(res.array, res.size++, current) , true);
  return res;
}

function Range_0(){
}

_ = Range_1.prototype = Range_0.prototype = new Object_0;
_.equals$ = function equals_0(obj){
  var $e0, cmp, res;
  res = false;
  try {
    cmp = dynamicCast(obj, 21);
    $ensureEndPoints(this);
    $ensureEndPoints(cmp);
    res = cmp == this || $equals(this.m_startPoint, ($ensureEndPoints(cmp) , cmp.m_startPoint)) && $equals(this.m_endPoint, ($ensureEndPoints(cmp) , cmp.m_endPoint));
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (!instanceOf($e0, 22))
      throw $e0;
  }
  return res;
}
;
_.getClass$ = function getClass_15(){
  return Lcom_bfr_client_selection_Range_2_classLit;
}
;
_.castableTypeMap$ = {21:1};
_.m_document = null;
_.m_endPoint = null;
_.m_lastEndPoint = null;
_.m_lastStartPoint = null;
_.m_range = null;
_.m_startPoint = null;
function $equals(this$static, obj){
  var $e0, cmp, res;
  try {
    cmp = dynamicCast(obj, 23);
    res = cmp == this$static || cmp.m_textNode == this$static.m_textNode && cmp.m_offset == this$static.m_offset;
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (!instanceOf($e0, 22))
      throw $e0;
  }
  return res;
}

function $getString(this$static, asStart){
  var res;
  if (!this$static.m_textNode) {
    return null;
  }
  res = this$static.m_textNode.data;
  return asStart?$substring(res, this$static.m_offset):res.substr(0, this$static.m_offset - 0);
}

function $setTextNode(this$static, textNode){
  this$static.m_textNode = textNode;
  this$static.m_offset = !textNode?0:textNode.length;
}

function RangeEndPoint_0(){
}

function RangeEndPoint_1(text, offset){
  this.m_textNode = text;
  this.m_offset = offset;
}

function RangeEndPoint_2(endPoint){
  RangeEndPoint_1.call(this, endPoint.m_textNode, endPoint.m_offset);
}

function RangeEndPoint(){
}

_ = RangeEndPoint_2.prototype = RangeEndPoint_1.prototype = RangeEndPoint_0.prototype = RangeEndPoint.prototype = new Object_0;
_.equals$ = function equals_1(obj){
  return $equals(this, obj);
}
;
_.getClass$ = function getClass_16(){
  return Lcom_bfr_client_selection_RangeEndPoint_2_classLit;
}
;
_.toString$ = function toString_3(){
  return $getString(this, false) + '|' + $getString(this, true);
}
;
_.castableTypeMap$ = {17:1, 23:1};
_.m_offset = 0;
_.m_textNode = null;
function $getRange(this$static){
  var jsRange, res;
  res = null;
  jsRange = $getJSRange(this$static.m_document, this$static.m_selection);
  if (jsRange) {
    res = new Range_1(this$static.m_document, jsRange);
    $ensureEndPoints(res);
  }
  return res;
}

function Selection_0(){
}

function getSelection_0(window_0){
  var jsSel, res;
  jsSel = window_0.document.selection;
  res = new Selection_0;
  res.m_selection = jsSel;
  res.m_document = window_0.document;
  return res;
}

function Selection(){
}

_ = Selection_0.prototype = Selection.prototype = new Object_0;
_.getClass$ = function getClass_17(){
  return Lcom_bfr_client_selection_Selection_2_classLit;
}
;
_.castableTypeMap$ = {};
_.m_document = null;
_.m_selection = null;
function equals__devirtual$(this$static, other){
  var maybeJsoInvocation;
  return maybeJsoInvocation = this$static , maybeJsoInvocation.typeMarker$ == nullMethod || maybeJsoInvocation.castableTypeMap$ && !!maybeJsoInvocation.castableTypeMap$[1]?maybeJsoInvocation.equals$(other):maybeJsoInvocation === other;
}

function hashCode__devirtual$(this$static){
  var maybeJsoInvocation;
  return maybeJsoInvocation = this$static , maybeJsoInvocation.typeMarker$ == nullMethod || maybeJsoInvocation.castableTypeMap$ && !!maybeJsoInvocation.castableTypeMap$[1]?maybeJsoInvocation.hashCode$():maybeJsoInvocation.$H || (maybeJsoInvocation.$H = ++sNextHashId);
}

function $clinit_0(){
  $clinit_0 = nullMethod;
  BOUNDARY_STRINGS = initValues(_3Ljava_lang_String_2_classLit, {15:1}, 1, ['StartToStart', 'StartToEnd', 'EndToEnd', 'EndToStart']);
}

function $createRange(startPoint, startOffset, endPoint, endOffset){
  var endRange, res;
  res = $createRangeOnText(startPoint, startOffset);
  if (startPoint == endPoint) {
    res.moveEnd('character', endOffset - startOffset);
  }
   else {
    endRange = $createRangeOnText(endPoint, endOffset);
    $moveRangePoint(res, endRange, BOUNDARY_STRINGS[2]);
  }
  return res;
}

function $createRangeOnText(setText, offset){
  var parent_0, res, testElement, res_0;
  parent_0 = $getParentElement(setText);
  res = (res_0 = parent_0.ownerDocument.body.createTextRange() , res_0.moveToElementText(parent_0) , res_0.collapse(true) , res_0);
  testElement = $getTestElement(parent_0.ownerDocument);
  try {
    parent_0.insertBefore(testElement, setText);
    res.moveToElementText(testElement);
    res.move('character', offset);
  }
   finally {
    $removeFromParent_0(testElement);
  }
  return res;
}

function $fillRangePoints(range){
  var end, selRange, start;
  selRange = range.m_range;
  if (!selRange) {
    return;
  }
  start = $getRangeEndPoint(range, selRange, true);
  end = $getRangeEndPoint(range, selRange, false);
  !!start && !!start.m_textNode && start.m_textNode.nextSibling == end.m_textNode && start.m_textNode.length == start.m_offset && end.m_offset == 0 && $setTextNode(end, start.m_textNode);
  range.m_document = !start?null:start.m_textNode.ownerDocument;
  range.m_startPoint = start;
  range.m_endPoint = end;
}

function $getRangeEndPoint(range, selRange, start){
  var $e0, checkRange, closest, cmp, compNode, compareFcn, dir, parent_0, res, testElement;
  res = null;
  checkRange = selRange.duplicate();
  checkRange.collapse(start);
  parent_0 = checkRange.parentElement();
  compareFcn = BOUNDARY_STRINGS[start?0:2];
  testElement = $getTestElement(range.m_document);
  try {
    for (compNode = parent_0.lastChild; compNode; compNode = testElement.previousSibling) {
      parent_0.insertBefore(testElement, compNode);
      checkRange.moveToElementText(testElement);
      if (checkRange.compareEndPoints(compareFcn, selRange) <= 0) {
        break;
      }
    }
    !compNode && (compNode = testElement.nextSibling);
    if (!compNode)
    ;
    else if (compNode.nodeType == 1) {
      $removeFromParent_0(testElement);
      checkRange.moveToElementText(compNode);
      cmp = checkRange.compareEndPoints(compareFcn, selRange);
      dir = cmp == 0?!start:cmp < 0;
      closest = getAdjacentTextElement(compNode, parent_0, dir, true);
      if (!closest) {
        dir = !dir;
        closest = getAdjacentTextElement(compNode, parent_0, dir, true);
      }
      !!closest && (res = new RangeEndPoint_1(closest, dir?0:closest.length));
    }
     else {
      $moveRangePoint(checkRange, selRange, BOUNDARY_STRINGS[start?3:2]);
      res = new RangeEndPoint_1(compNode, checkRange.text.length);
    }
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (!instanceOf($e0, 22))
      throw $e0;
  }
   finally {
    $removeFromParent_0(testElement);
  }
  return !res?new RangeEndPoint_0:res;
}

function $getTestElement(document_0){
  if (document_0 != m_lastDocument) {
    m_lastDocument = document_0;
    m_testElement = $createElement(m_lastDocument, 'div');
  }
  return m_testElement;
}

function $moveRangePoint(range, moveTo_0, how){
  range.setEndPoint(how, moveTo_0);
}

var BOUNDARY_STRINGS, m_lastDocument = null, m_testElement = null;
function $getJSRange(doc, selection){
  var res = selection.createRange();
  var parent_0 = res.parentElement();
  if (parent_0.ownerDocument == doc) {
    return res.duplicate();
  }
  return null;
}

function $cancel(this$static){
  if (!this$static.running) {
    return;
  }
  $remove_8(animations, this$static);
  this$static.started && $onComplete(this$static);
  this$static.started = false;
  this$static.running = false;
}

function $run(this$static, startTime){
  $cancel(this$static);
  this$static.running = true;
  this$static.duration = 200;
  this$static.startTime = startTime;
  if ($update(this$static, (new Date).getTime())) {
    return;
  }
  if (!animations) {
    animations = new ArrayList_0;
    animationTimer = new Animation$1_0;
  }
  $add_4(animations, this$static);
  animations.size == 1 && $schedule(animationTimer, 25);
}

function $update(this$static, curTime){
  var finished, progress;
  finished = curTime >= this$static.startTime + this$static.duration;
  if (this$static.started && !finished) {
    progress = (curTime - this$static.startTime) / this$static.duration;
    $onUpdate(this$static, (1 + Math.cos(3.141592653589793 + progress * 3.141592653589793)) / 2);
    return false;
  }
  if (!this$static.started && curTime >= this$static.startTime) {
    this$static.started = true;
    this$static.offsetHeight = parseInt(this$static.curPanel.element['offsetHeight']) || 0;
    this$static.offsetWidth = parseInt(this$static.curPanel.element['offsetWidth']) || 0;
    this$static.curPanel.element.style['overflow'] = 'hidden';
    $onUpdate(this$static, (1 + Math.cos(3.141592653589793)) / 2);
  }
  if (finished) {
    $onComplete(this$static);
    this$static.started = false;
    this$static.running = false;
    return true;
  }
  return false;
}

function updateAnimations(){
  var animation, animation$index, animation$max, curAnimations, curTime;
  curAnimations = initDim(_3Lcom_google_gwt_animation_client_Animation_2_classLit, {15:1, 24:1}, 2, animations.size, 0);
  curAnimations = dynamicCast($toArray(animations, curAnimations), 24);
  curTime = (new Date).getTime();
  for (animation$index = 0 , animation$max = curAnimations.length; animation$index < animation$max; ++animation$index) {
    animation = curAnimations[animation$index];
    animation.running && $update(animation, curTime) && $remove_8(animations, animation);
  }
  animations.size > 0 && $schedule(animationTimer, 25);
}

function Animation(){
}

_ = Animation.prototype = new Object_0;
_.getClass$ = function getClass_18(){
  return Lcom_google_gwt_animation_client_Animation_2_classLit;
}
;
_.castableTypeMap$ = {2:1};
_.duration = -1;
_.running = false;
_.startTime = -1;
_.started = false;
var animationTimer = null, animations = null;
function $clinit_1(){
  $clinit_1 = nullMethod;
  timers = new ArrayList_0;
  addCloseHandler(new Timer$1_0);
}

function $cancel_0(this$static){
  this$static.isRepeating?($wnd.clearInterval(this$static.timerId) , undefined):($wnd.clearTimeout(this$static.timerId) , undefined);
  $remove_8(timers, this$static);
}

function $schedule(this$static, delayMillis){
  if (delayMillis <= 0) {
    throw new IllegalArgumentException_0('must be positive');
  }
  this$static.isRepeating?($wnd.clearInterval(this$static.timerId) , undefined):($wnd.clearTimeout(this$static.timerId) , undefined);
  $remove_8(timers, this$static);
  this$static.isRepeating = false;
  this$static.timerId = createTimeout(this$static, delayMillis);
  $add_4(timers, this$static);
}

function createTimeout(timer, delay){
  return $wnd.setTimeout($entry(function(){
    timer.fire();
  }
  ), delay);
}

function Timer(){
}

_ = Timer.prototype = new Object_0;
_.fire = function fire(){
  this.isRepeating || $remove_8(timers, this);
  this.run();
}
;
_.getClass$ = function getClass_19(){
  return Lcom_google_gwt_user_client_Timer_2_classLit;
}
;
_.castableTypeMap$ = {43:1};
_.isRepeating = false;
_.timerId = 0;
var timers;
function Animation$1_0(){
  $clinit_1();
}

function Animation$1(){
}

_ = Animation$1_0.prototype = Animation$1.prototype = new Timer;
_.getClass$ = function getClass_20(){
  return Lcom_google_gwt_animation_client_Animation$1_2_classLit;
}
;
_.run = function run(){
  updateAnimations();
}
;
_.castableTypeMap$ = {43:1};
function $setStackTrace(stackTrace){
  var c, copy, i;
  copy = initDim(_3Ljava_lang_StackTraceElement_2_classLit, {15:1}, 19, stackTrace.length, 0);
  for (i = 0 , c = stackTrace.length; i < c; ++i) {
    if (!stackTrace[i]) {
      throw new NullPointerException_0;
    }
    copy[i] = stackTrace[i];
  }
}

function Throwable(){
}

_ = Throwable.prototype = new Object_0;
_.getClass$ = function getClass_21(){
  return Ljava_lang_Throwable_2_classLit;
}
;
_.getMessage = function getMessage(){
  return this.detailMessage;
}
;
_.toString$ = function toString_4(){
  var className, msg;
  className = this.getClass$().typeName;
  msg = this.getMessage();
  return msg != null?className + ': ' + msg:className;
}
;
_.castableTypeMap$ = {15:1, 20:1};
_.detailMessage = null;
function Exception(){
}

_ = Exception.prototype = new Throwable;
_.getClass$ = function getClass_22(){
  return Ljava_lang_Exception_2_classLit;
}
;
_.castableTypeMap$ = {15:1, 20:1, 22:1};
function RuntimeException_0(message){
  $fillInStackTrace();
  this.detailMessage = message;
}

function RuntimeException_1(){
  $fillInStackTrace();
  this.detailMessage = 'One or more exceptions caught, see full set in UmbrellaException#getCauses';
}

function RuntimeException(){
}

_ = RuntimeException_0.prototype = RuntimeException.prototype = new Exception;
_.getClass$ = function getClass_23(){
  return Ljava_lang_RuntimeException_2_classLit;
}
;
_.castableTypeMap$ = {15:1, 20:1, 22:1, 25:1};
function JavaScriptException_0(e){
  $fillInStackTrace();
  this.e = e;
  $createStackTrace(this);
}

function getDescription(e){
  return instanceOfJso(e)?getDescription0(dynamicCastJso(e)):e + '';
}

function getDescription0(e){
  return e == null?null:e.message;
}

function getName(e){
  var maybeJsoInvocation;
  return e == null?'null':instanceOfJso(e)?getName0(dynamicCastJso(e)):e != null && e.castableTypeMap$ && !!e.castableTypeMap$[1]?'String':(maybeJsoInvocation = e , maybeJsoInvocation.typeMarker$ == nullMethod || maybeJsoInvocation.castableTypeMap$ && !!maybeJsoInvocation.castableTypeMap$[1]?maybeJsoInvocation.getClass$():Lcom_google_gwt_core_client_JavaScriptObject_2_classLit).typeName;
}

function getName0(e){
  return e == null?null:e.name;
}

function getProperties(e){
  return instanceOfJso(e)?$getProperties(dynamicCastJso(e)):'';
}

function JavaScriptException(){
}

_ = JavaScriptException_0.prototype = JavaScriptException.prototype = new RuntimeException;
_.getClass$ = function getClass_24(){
  return Lcom_google_gwt_core_client_JavaScriptException_2_classLit;
}
;
_.getMessage = function getMessage_0(){
  this.message_0 == null && (this.name_0 = getName(this.e) , this.description = getDescription(this.e) , this.message_0 = '(' + this.name_0 + '): ' + this.description + getProperties(this.e) , undefined);
  return this.message_0;
}
;
_.castableTypeMap$ = {15:1, 20:1, 22:1, 25:1};
_.description = null;
_.e = null;
_.message_0 = null;
_.name_0 = null;
function $clinit_2(){
  var out;
  $clinit_2 = nullMethod;
  escapeTable = (out = ['\\u0000', '\\u0001', '\\u0002', '\\u0003', '\\u0004', '\\u0005', '\\u0006', '\\u0007', '\\b', '\\t', '\\n', '\\u000B', '\\f', '\\r', '\\u000E', '\\u000F', '\\u0010', '\\u0011', '\\u0012', '\\u0013', '\\u0014', '\\u0015', '\\u0016', '\\u0017', '\\u0018', '\\u0019', '\\u001A', '\\u001B', '\\u001C', '\\u001D', '\\u001E', '\\u001F'] , out[34] = '\\"' , out[92] = '\\\\' , out[173] = '\\u00ad' , out[1536] = '\\u0600' , out[1537] = '\\u0601' , out[1538] = '\\u0602' , out[1539] = '\\u0603' , out[1757] = '\\u06dd' , out[1807] = '\\u070f' , out[6068] = '\\u17b4' , out[6069] = '\\u17b5' , out[8204] = '\\u200c' , out[8205] = '\\u200d' , out[8206] = '\\u200e' , out[8207] = '\\u200f' , out[8232] = '\\u2028' , out[8233] = '\\u2029' , out[8234] = '\\u202a' , out[8235] = '\\u202b' , out[8236] = '\\u202c' , out[8237] = '\\u202d' , out[8238] = '\\u202e' , out[8288] = '\\u2060' , out[8289] = '\\u2061' , out[8290] = '\\u2062' , out[8291] = '\\u2063' , out[8298] = '\\u206a' , out[8299] = '\\u206b' , out[8300] = '\\u206c' , out[8301] = '\\u206d' , out[8302] = '\\u206e' , out[8303] = '\\u206f' , out[65279] = '\\ufeff' , out[65529] = '\\ufff9' , out[65530] = '\\ufffa' , out[65531] = '\\ufffb' , out);
  typeof JSON == 'object' && typeof JSON.parse == 'function';
}

function escapeValue(toEscape){
  $clinit_2();
  var s = toEscape.replace(/[\x00-\x1f\xad\u0600-\u0603\u06dd\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202e\u2060-\u2063\u206a-\u206f\ufeff\ufff9-\ufffb"\\]/g, function(x){
    var lookedUp;
    return lookedUp = escapeTable[x.charCodeAt(0)] , lookedUp == null?x:lookedUp;
  }
  );
  return '"' + s + '"';
}

var escapeTable;
function Scheduler(){
}

_ = Scheduler.prototype = new Object_0;
_.getClass$ = function getClass_25(){
  return Lcom_google_gwt_core_client_Scheduler_2_classLit;
}
;
_.castableTypeMap$ = {};
function apply(jsFunction, thisObj, arguments_0){
  return jsFunction.apply(thisObj, arguments_0);
  var __0;
}

function enter(){
  if (entryDepth++ == 0) {
    $flushEntryCommands(($clinit_3() , INSTANCE));
    return true;
  }
  return false;
}

function entry_0(jsFunction){
  return function(){
    try {
      return entry0(jsFunction, this, arguments);
    }
     catch (e) {
      throw e;
    }
  }
  ;
}

function entry0(jsFunction, thisObj, arguments_0){
  var initialEntry;
  initialEntry = enter();
  try {
    return apply(jsFunction, thisObj, arguments_0);
  }
   finally {
    initialEntry && $flushFinallyCommands(($clinit_3() , INSTANCE));
    --entryDepth;
  }
}

function getHashCode(o){
  return o.$H || (o.$H = ++sNextHashId);
}

var entryDepth = 0, sNextHashId = 0;
function $clinit_3(){
  $clinit_3 = nullMethod;
  INSTANCE = new SchedulerImpl_0;
}

function $flushEntryCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.entryCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.entryCommands;
      this$static.entryCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.entryCommands);
    this$static.entryCommands = rescheduled;
  }
}

function $flushFinallyCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.finallyCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.finallyCommands;
      this$static.finallyCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.finallyCommands);
    this$static.finallyCommands = rescheduled;
  }
}

function SchedulerImpl_0(){
}

function push(queue, task){
  !queue && (queue = []);
  queue[queue.length] = task;
  return queue;
}

function runScheduledTasks(tasks, rescheduled){
  var $e0, i, j, t;
  for (i = 0 , j = tasks.length; i < j; ++i) {
    t = tasks[i];
    try {
      t[1]?t[0].nullMethod() && (rescheduled = push(rescheduled, t)):t[0].execute();
    }
     catch ($e0) {
      $e0 = caught_0($e0);
      if (!instanceOf($e0, 25))
        throw $e0;
    }
  }
  return rescheduled;
}

function SchedulerImpl(){
}

_ = SchedulerImpl_0.prototype = SchedulerImpl.prototype = new Scheduler;
_.getClass$ = function getClass_26(){
  return Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit;
}
;
_.castableTypeMap$ = {};
_.entryCommands = null;
_.finallyCommands = null;
var INSTANCE;
function extractNameFromToString(fnToString){
  var index, start, toReturn;
  toReturn = '';
  fnToString = $trim(fnToString);
  index = fnToString.indexOf('(');
  if (index != -1) {
    start = fnToString.indexOf('function') == 0?8:0;
    toReturn = $trim(fnToString.substr(start, index - start));
  }
  return toReturn.length > 0?toReturn:'anonymous';
}

function $collect(this$static){
  var seen = {};
  var toReturn = [];
  var callee = arguments.callee.caller.caller;
  while (callee) {
    var name_0 = this$static.extractName(callee.toString());
    toReturn.push(name_0);
    var keyName = ':' + name_0;
    var withThisName = seen[keyName];
    if (withThisName) {
      var i, j;
      for (i = 0 , j = withThisName.length; i < j; i++) {
        if (withThisName[i] === callee) {
          return toReturn;
        }
      }
    }
    (withThisName || (seen[keyName] = [])).push(callee);
    callee = callee.caller;
  }
  return toReturn;
}

function $createStackTrace(e){
  var i, j, stack, stackTrace;
  stack = (instanceOfJso(e.e)?dynamicCastJso(e.e):null , []);
  stackTrace = initDim(_3Ljava_lang_StackTraceElement_2_classLit, {15:1}, 19, stack.length, 0);
  for (i = 0 , j = stackTrace.length; i < j; ++i) {
    stackTrace[i] = new StackTraceElement_0(stack[i]);
  }
  $setStackTrace(stackTrace);
}

function $fillInStackTrace(){
  var i, j, stack, stackTrace;
  stack = $collect(new StackTraceCreator$Collector_0);
  stackTrace = initDim(_3Ljava_lang_StackTraceElement_2_classLit, {15:1}, 19, stack.length, 0);
  for (i = 0 , j = stackTrace.length; i < j; ++i) {
    stackTrace[i] = new StackTraceElement_0(stack[i]);
  }
  $setStackTrace(stackTrace);
}

function $getProperties(e){
  var result = '';
  try {
    for (var prop in e) {
      if (prop != 'name' && prop != 'message' && prop != 'toString') {
        try {
          result += '\n ' + prop + ': ' + e[prop];
        }
         catch (ignored) {
        }
      }
    }
  }
   catch (ignored) {
  }
  return result;
}

function StackTraceCreator$Collector_0(){
}

function StackTraceCreator$Collector(){
}

_ = StackTraceCreator$Collector_0.prototype = StackTraceCreator$Collector.prototype = new Object_0;
_.extractName = function extractName(fnToString){
  return extractNameFromToString(fnToString);
}
;
_.getClass$ = function getClass_27(){
  return Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit;
}
;
_.castableTypeMap$ = {};
function $append(a, x){
  a[a.explicitLength++] = x == null?'null':x;
}

function $appendNonNull(a, x){
  a[a.explicitLength++] = x;
}

function $toString(a){
  var s, s_0;
  s = (s_0 = a.join('') , a.length = a.explicitLength = 0 , s_0);
  a[a.explicitLength++] = s;
  return s;
}

function $removeFromParent_0(this$static){
  var parent_0;
  parent_0 = $getParentElement(this$static);
  !!parent_0 && parent_0.removeChild(this$static);
}

function is(o){
  try {
    return !!o && !!o.nodeType;
  }
   catch (e) {
    return false;
  }
}

function $addClassName(this$static, className){
  var idx, last, lastPos, oldClassName;
  className = $trim(className);
  oldClassName = this$static.className;
  idx = oldClassName.indexOf(className);
  while (idx != -1) {
    if (idx == 0 || oldClassName.charCodeAt(idx - 1) == 32) {
      last = idx + className.length;
      lastPos = oldClassName.length;
      if (last == lastPos || last < lastPos && oldClassName.charCodeAt(last) == 32) {
        break;
      }
    }
    idx = oldClassName.indexOf(className, idx + 1);
  }
  if (idx == -1) {
    oldClassName.length > 0 && (oldClassName += ' ');
    this$static.className = oldClassName + className;
  }
}

function $getPropertyString(this$static, name_0){
  return this$static[name_0] == null?null:String(this$static[name_0]);
}

function $removeClassName(this$static, className){
  var begin, end, idx, last, lastPos, newClassName, oldStyle;
  className = $trim(className);
  oldStyle = this$static.className;
  idx = oldStyle.indexOf(className);
  while (idx != -1) {
    if (idx == 0 || oldStyle.charCodeAt(idx - 1) == 32) {
      last = idx + className.length;
      lastPos = oldStyle.length;
      if (last == lastPos || last < lastPos && oldStyle.charCodeAt(last) == 32) {
        break;
      }
    }
    idx = oldStyle.indexOf(className, idx + 1);
  }
  if (idx != -1) {
    begin = $trim(oldStyle.substr(0, idx - 0));
    end = $trim($substring(oldStyle, idx + className.length));
    begin.length == 0?(newClassName = end):end.length == 0?(newClassName = begin):(newClassName = begin + ' ' + end);
    this$static.className = newClassName;
  }
}

function is_0(o){
  if (is(o)) {
    return !!o && o.nodeType == 1;
  }
  return false;
}

function $createScriptElement(doc, source){
  var elem;
  elem = $createElement(doc, 'script');
  elem.text = source;
  return elem;
}

function $getFirstChildElement(elem){
  var child = elem.firstChild;
  while (child && child.nodeType != 1)
    child = child.nextSibling;
  return child;
}

function $getParentElement(node){
  var parent_0 = node.parentNode;
  (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null);
  return parent_0;
}

function $createElement(doc, tagName){
  var container, elem;
  if (tagName.indexOf(':') != -1) {
    container = (!doc.__gwt_container && (doc.__gwt_container = doc.createElement('div')) , doc.__gwt_container);
    container.innerHTML = '<' + tagName + '/>' || '';
    elem = $getFirstChildElement(container);
    container.removeChild(elem);
    return elem;
  }
  return doc.createElement(tagName);
}

function $getBoundingClientRectLeft(elem){
  try {
    return elem.getBoundingClientRect().left;
  }
   catch (e) {
    return 0;
  }
}

function $getBoundingClientRectTop(elem){
  try {
    return elem.getBoundingClientRect().top;
  }
   catch (e) {
    return 0;
  }
}

function $getTagName(elem){
  var scopeName, tagName;
  tagName = elem.tagName;
  scopeName = elem.scopeName;
  if (scopeName == null || $equalsIgnoreCase('html', scopeName)) {
    return tagName;
  }
  return scopeName + ':' + tagName;
}

function $isOrHasChild(parent_0, child){
  if (parent_0.nodeType != 1 && parent_0.nodeType != 9) {
    return parent_0 == child;
  }
  if (child.nodeType != 1) {
    child = child.parentNode;
    if (!child) {
      return false;
    }
  }
  return parent_0 === child || parent_0.contains(child);
}

var currentEventTarget = null;
function $getAbsoluteLeft(elem){
  var doc;
  doc = elem.ownerDocument;
  return $getBoundingClientRectLeft(elem) + $getScrollLeft($equals_0(doc.compatMode, 'CSS1Compat')?doc.documentElement:doc.body);
}

function $getAbsoluteTop(elem){
  var doc;
  doc = elem.ownerDocument;
  return $getBoundingClientRectTop(elem) + (($equals_0(doc.compatMode, 'CSS1Compat')?doc.documentElement:doc.body).scrollTop || 0);
}

function $getScrollLeft(elem){
  if (elem.currentStyle.direction == 'rtl') {
    return -(elem.scrollLeft || 0);
  }
  return elem.scrollLeft || 0;
}

function $getBodyOffsetLeft(this$static){
  return ($equals_0(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientLeft;
}

function $getBodyOffsetTop(this$static){
  return ($equals_0(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientTop;
}

function $getClientHeight(this$static){
  return ($equals_0(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientHeight;
}

function $getClientWidth(this$static){
  return ($equals_0(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientWidth;
}

function $getScrollHeight(this$static){
  return ($equals_0(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).scrollHeight || 0;
}

function $getScrollLeft_0(this$static){
  return $getScrollLeft($equals_0(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body);
}

function $getScrollTop(this$static){
  return ($equals_0(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).scrollTop || 0;
}

function $getScrollWidth(this$static){
  return ($equals_0(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).scrollWidth || 0;
}

function Enum(){
}

_ = Enum.prototype = new Object_0;
_.equals$ = function equals_2(other){
  return this === other;
}
;
_.getClass$ = function getClass_28(){
  return Ljava_lang_Enum_2_classLit;
}
;
_.hashCode$ = function hashCode_1(){
  return this.$H || (this.$H = ++sNextHashId);
}
;
_.toString$ = function toString_5(){
  return this.name_0;
}
;
_.castableTypeMap$ = {15:1, 17:1, 18:1};
_.name_0 = null;
_.ordinal = 0;
function $clinit_4(){
  $clinit_4 = nullMethod;
  NONE = new Style$Display$1_0;
  BLOCK = new Style$Display$2_0;
  INLINE = new Style$Display$3_0;
  INLINE_BLOCK = new Style$Display$4_0;
  $VALUES = initValues(_3Lcom_google_gwt_dom_client_Style$Display_2_classLit, {15:1}, 3, [NONE, BLOCK, INLINE, INLINE_BLOCK]);
}

function values(){
  $clinit_4();
  return $VALUES;
}

function Style$Display(){
}

_ = Style$Display.prototype = new Enum;
_.getClass$ = function getClass_29(){
  return Lcom_google_gwt_dom_client_Style$Display_2_classLit;
}
;
_.castableTypeMap$ = {3:1, 4:1, 15:1, 17:1, 18:1};
var $VALUES, BLOCK, INLINE, INLINE_BLOCK, NONE;
function Style$Display$1_0(){
  this.name_0 = 'NONE';
  this.ordinal = 0;
}

function Style$Display$1(){
}

_ = Style$Display$1_0.prototype = Style$Display$1.prototype = new Style$Display;
_.getClass$ = function getClass_30(){
  return Lcom_google_gwt_dom_client_Style$Display$1_2_classLit;
}
;
_.castableTypeMap$ = {3:1, 4:1, 15:1, 17:1, 18:1};
function Style$Display$2_0(){
  this.name_0 = 'BLOCK';
  this.ordinal = 1;
}

function Style$Display$2(){
}

_ = Style$Display$2_0.prototype = Style$Display$2.prototype = new Style$Display;
_.getClass$ = function getClass_31(){
  return Lcom_google_gwt_dom_client_Style$Display$2_2_classLit;
}
;
_.castableTypeMap$ = {3:1, 4:1, 15:1, 17:1, 18:1};
function Style$Display$3_0(){
  this.name_0 = 'INLINE';
  this.ordinal = 2;
}

function Style$Display$3(){
}

_ = Style$Display$3_0.prototype = Style$Display$3.prototype = new Style$Display;
_.getClass$ = function getClass_32(){
  return Lcom_google_gwt_dom_client_Style$Display$3_2_classLit;
}
;
_.castableTypeMap$ = {3:1, 4:1, 15:1, 17:1, 18:1};
function Style$Display$4_0(){
  this.name_0 = 'INLINE_BLOCK';
  this.ordinal = 3;
}

function Style$Display$4(){
}

_ = Style$Display$4_0.prototype = Style$Display$4.prototype = new Style$Display;
_.getClass$ = function getClass_33(){
  return Lcom_google_gwt_dom_client_Style$Display$4_2_classLit;
}
;
_.castableTypeMap$ = {3:1, 4:1, 15:1, 17:1, 18:1};
function $clinit_5(){
  $clinit_5 = nullMethod;
  PX = new Style$Unit$1_0;
  PCT = new Style$Unit$2_0;
  EM = new Style$Unit$3_0;
  EX = new Style$Unit$4_0;
  PT = new Style$Unit$5_0;
  PC = new Style$Unit$6_0;
  IN = new Style$Unit$7_0;
  CM = new Style$Unit$8_0;
  MM = new Style$Unit$9_0;
  $VALUES_0 = initValues(_3Lcom_google_gwt_dom_client_Style$Unit_2_classLit, {15:1}, 5, [PX, PCT, EM, EX, PT, PC, IN, CM, MM]);
}

function values_0(){
  $clinit_5();
  return $VALUES_0;
}

function Style$Unit(){
}

_ = Style$Unit.prototype = new Enum;
_.getClass$ = function getClass_34(){
  return Lcom_google_gwt_dom_client_Style$Unit_2_classLit;
}
;
_.castableTypeMap$ = {5:1, 15:1, 17:1, 18:1};
var $VALUES_0, CM, EM, EX, IN, MM, PC, PCT, PT, PX;
function Style$Unit$1_0(){
  this.name_0 = 'PX';
  this.ordinal = 0;
}

function Style$Unit$1(){
}

_ = Style$Unit$1_0.prototype = Style$Unit$1.prototype = new Style$Unit;
_.getClass$ = function getClass_35(){
  return Lcom_google_gwt_dom_client_Style$Unit$1_2_classLit;
}
;
_.castableTypeMap$ = {5:1, 15:1, 17:1, 18:1};
function Style$Unit$2_0(){
  this.name_0 = 'PCT';
  this.ordinal = 1;
}

function Style$Unit$2(){
}

_ = Style$Unit$2_0.prototype = Style$Unit$2.prototype = new Style$Unit;
_.getClass$ = function getClass_36(){
  return Lcom_google_gwt_dom_client_Style$Unit$2_2_classLit;
}
;
_.castableTypeMap$ = {5:1, 15:1, 17:1, 18:1};
function Style$Unit$3_0(){
  this.name_0 = 'EM';
  this.ordinal = 2;
}

function Style$Unit$3(){
}

_ = Style$Unit$3_0.prototype = Style$Unit$3.prototype = new Style$Unit;
_.getClass$ = function getClass_37(){
  return Lcom_google_gwt_dom_client_Style$Unit$3_2_classLit;
}
;
_.castableTypeMap$ = {5:1, 15:1, 17:1, 18:1};
function Style$Unit$4_0(){
  this.name_0 = 'EX';
  this.ordinal = 3;
}

function Style$Unit$4(){
}

_ = Style$Unit$4_0.prototype = Style$Unit$4.prototype = new Style$Unit;
_.getClass$ = function getClass_38(){
  return Lcom_google_gwt_dom_client_Style$Unit$4_2_classLit;
}
;
_.castableTypeMap$ = {5:1, 15:1, 17:1, 18:1};
function Style$Unit$5_0(){
  this.name_0 = 'PT';
  this.ordinal = 4;
}

function Style$Unit$5(){
}

_ = Style$Unit$5_0.prototype = Style$Unit$5.prototype = new Style$Unit;
_.getClass$ = function getClass_39(){
  return Lcom_google_gwt_dom_client_Style$Unit$5_2_classLit;
}
;
_.castableTypeMap$ = {5:1, 15:1, 17:1, 18:1};
function Style$Unit$6_0(){
  this.name_0 = 'PC';
  this.ordinal = 5;
}

function Style$Unit$6(){
}

_ = Style$Unit$6_0.prototype = Style$Unit$6.prototype = new Style$Unit;
_.getClass$ = function getClass_40(){
  return Lcom_google_gwt_dom_client_Style$Unit$6_2_classLit;
}
;
_.castableTypeMap$ = {5:1, 15:1, 17:1, 18:1};
function Style$Unit$7_0(){
  this.name_0 = 'IN';
  this.ordinal = 6;
}

function Style$Unit$7(){
}

_ = Style$Unit$7_0.prototype = Style$Unit$7.prototype = new Style$Unit;
_.getClass$ = function getClass_41(){
  return Lcom_google_gwt_dom_client_Style$Unit$7_2_classLit;
}
;
_.castableTypeMap$ = {5:1, 15:1, 17:1, 18:1};
function Style$Unit$8_0(){
  this.name_0 = 'CM';
  this.ordinal = 7;
}

function Style$Unit$8(){
}

_ = Style$Unit$8_0.prototype = Style$Unit$8.prototype = new Style$Unit;
_.getClass$ = function getClass_42(){
  return Lcom_google_gwt_dom_client_Style$Unit$8_2_classLit;
}
;
_.castableTypeMap$ = {5:1, 15:1, 17:1, 18:1};
function Style$Unit$9_0(){
  this.name_0 = 'MM';
  this.ordinal = 8;
}

function Style$Unit$9(){
}

_ = Style$Unit$9_0.prototype = Style$Unit$9.prototype = new Style$Unit;
_.getClass$ = function getClass_43(){
  return Lcom_google_gwt_dom_client_Style$Unit$9_2_classLit;
}
;
_.castableTypeMap$ = {5:1, 15:1, 17:1, 18:1};
function Event_0(){
}

_ = Event_0.prototype = new Object_0;
_.getClass$ = function getClass_44(){
  return Lcom_google_web_bindery_event_shared_Event_2_classLit;
}
;
_.toString$ = function toString_6(){
  return 'An event type';
}
;
_.castableTypeMap$ = {};
_.source = null;
function GwtEvent(){
}

_ = GwtEvent.prototype = new Event_0;
_.getClass$ = function getClass_45(){
  return Lcom_google_gwt_event_shared_GwtEvent_2_classLit;
}
;
_.revive = function revive(){
  this.dead = false;
  this.source = null;
}
;
_.castableTypeMap$ = {};
_.dead = false;
function fireNativeEvent(nativeEvent, handlerSource, relativeElem){
  var currentNative, currentRelativeElem, typeKey;
  if (registered) {
    typeKey = dynamicCast(registered.map[nativeEvent.type], 27);
    if (typeKey) {
      currentNative = typeKey.flyweight.nativeEvent;
      currentRelativeElem = typeKey.flyweight.relativeElem;
      typeKey.flyweight.nativeEvent = nativeEvent;
      typeKey.flyweight.relativeElem = relativeElem;
      $fireEvent(handlerSource, typeKey.flyweight);
      typeKey.flyweight.nativeEvent = currentNative;
      typeKey.flyweight.relativeElem = currentRelativeElem;
    }
  }
}

function DomEvent(){
}

_ = DomEvent.prototype = new GwtEvent;
_.getAssociatedType = function getAssociatedType(){
  return this.getAssociatedType_0();
}
;
_.getClass$ = function getClass_46(){
  return Lcom_google_gwt_event_dom_client_DomEvent_2_classLit;
}
;
_.castableTypeMap$ = {};
_.nativeEvent = null;
_.relativeElem = null;
var registered = null;
function HumanInputEvent(){
}

_ = HumanInputEvent.prototype = new DomEvent;
_.getClass$ = function getClass_47(){
  return Lcom_google_gwt_event_dom_client_HumanInputEvent_2_classLit;
}
;
_.castableTypeMap$ = {};
function $getX(this$static){
  var relativeElem, e;
  relativeElem = this$static.relativeElem;
  if (relativeElem) {
    return e = this$static.nativeEvent , (e.clientX || 0) - $getAbsoluteLeft(relativeElem) + $getScrollLeft(relativeElem) + $getScrollLeft_0(relativeElem.ownerDocument);
  }
  return this$static.nativeEvent.clientX || 0;
}

function $getY(this$static){
  var relativeElem, e;
  relativeElem = this$static.relativeElem;
  if (relativeElem) {
    return e = this$static.nativeEvent , (e.clientY || 0) - $getAbsoluteTop(relativeElem) + (relativeElem.scrollTop || 0) + $getScrollTop(relativeElem.ownerDocument);
  }
  return this$static.nativeEvent.clientY || 0;
}

function MouseEvent_0(){
}

_ = MouseEvent_0.prototype = new HumanInputEvent;
_.getClass$ = function getClass_48(){
  return Lcom_google_gwt_event_dom_client_MouseEvent_2_classLit;
}
;
_.castableTypeMap$ = {};
function $clinit_6(){
  $clinit_6 = nullMethod;
  TYPE = new DomEvent$Type_0('click', new ClickEvent_0);
}

function ClickEvent_0(){
}

function ClickEvent(){
}

_ = ClickEvent_0.prototype = ClickEvent.prototype = new MouseEvent_0;
_.dispatch = function dispatch(handler){
  dynamicCast(handler, 26).onClick(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_0(){
  return TYPE;
}
;
_.getClass$ = function getClass_49(){
  return Lcom_google_gwt_event_dom_client_ClickEvent_2_classLit;
}
;
_.castableTypeMap$ = {};
var TYPE;
function Event$Type(){
}

_ = Event$Type.prototype = new Object_0;
_.getClass$ = function getClass_50(){
  return Lcom_google_web_bindery_event_shared_Event$Type_2_classLit;
}
;
_.hashCode$ = function hashCode_2(){
  return this.index;
}
;
_.toString$ = function toString_7(){
  return 'Event type';
}
;
_.castableTypeMap$ = {};
_.index = 0;
var nextHashCode = 0;
function GwtEvent$Type_0(){
  this.index = ++nextHashCode;
}

function GwtEvent$Type(){
}

_ = GwtEvent$Type_0.prototype = GwtEvent$Type.prototype = new Event$Type;
_.getClass$ = function getClass_51(){
  return Lcom_google_gwt_event_shared_GwtEvent$Type_2_classLit;
}
;
_.castableTypeMap$ = {};
function DomEvent$Type_0(eventName, flyweight){
  this.index = ++nextHashCode;
  this.flyweight = flyweight;
  !registered && (registered = new PrivateMap_0);
  registered.map[eventName] = this;
  this.name_0 = eventName;
}

function DomEvent$Type(){
}

_ = DomEvent$Type_0.prototype = DomEvent$Type.prototype = new GwtEvent$Type;
_.getClass$ = function getClass_52(){
  return Lcom_google_gwt_event_dom_client_DomEvent$Type_2_classLit;
}
;
_.castableTypeMap$ = {27:1};
_.flyweight = null;
_.name_0 = null;
function $clinit_7(){
  $clinit_7 = nullMethod;
  TYPE_0 = new DomEvent$Type_0('mousedown', new MouseDownEvent_0);
}

function MouseDownEvent_0(){
}

function MouseDownEvent(){
}

_ = MouseDownEvent_0.prototype = MouseDownEvent.prototype = new MouseEvent_0;
_.dispatch = function dispatch_0(handler){
  dynamicCast(handler, 28).onMouseDown(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_1(){
  return TYPE_0;
}
;
_.getClass$ = function getClass_53(){
  return Lcom_google_gwt_event_dom_client_MouseDownEvent_2_classLit;
}
;
_.castableTypeMap$ = {};
var TYPE_0;
function $clinit_8(){
  $clinit_8 = nullMethod;
  TYPE_1 = new DomEvent$Type_0('mousemove', new MouseMoveEvent_0);
}

function MouseMoveEvent_0(){
}

function MouseMoveEvent(){
}

_ = MouseMoveEvent_0.prototype = MouseMoveEvent.prototype = new MouseEvent_0;
_.dispatch = function dispatch_1(handler){
  $continueDragging(dynamicCast(handler, 29).this$0, this);
}
;
_.getAssociatedType_0 = function getAssociatedType_2(){
  return TYPE_1;
}
;
_.getClass$ = function getClass_54(){
  return Lcom_google_gwt_event_dom_client_MouseMoveEvent_2_classLit;
}
;
_.castableTypeMap$ = {};
var TYPE_1;
function $clinit_9(){
  $clinit_9 = nullMethod;
  TYPE_2 = new DomEvent$Type_0('mouseout', new MouseOutEvent_0);
}

function MouseOutEvent_0(){
}

function MouseOutEvent(){
}

_ = MouseOutEvent_0.prototype = MouseOutEvent.prototype = new MouseEvent_0;
_.dispatch = function dispatch_2(handler){
  dynamicCast(dynamicCast(handler, 30), 31);
}
;
_.getAssociatedType_0 = function getAssociatedType_3(){
  return TYPE_2;
}
;
_.getClass$ = function getClass_55(){
  return Lcom_google_gwt_event_dom_client_MouseOutEvent_2_classLit;
}
;
_.castableTypeMap$ = {};
var TYPE_2;
function $clinit_10(){
  $clinit_10 = nullMethod;
  TYPE_3 = new DomEvent$Type_0('mouseover', new MouseOverEvent_0);
}

function MouseOverEvent_0(){
}

function MouseOverEvent(){
}

_ = MouseOverEvent_0.prototype = MouseOverEvent.prototype = new MouseEvent_0;
_.dispatch = function dispatch_3(handler){
  dynamicCast(dynamicCast(handler, 32), 31);
}
;
_.getAssociatedType_0 = function getAssociatedType_4(){
  return TYPE_3;
}
;
_.getClass$ = function getClass_56(){
  return Lcom_google_gwt_event_dom_client_MouseOverEvent_2_classLit;
}
;
_.castableTypeMap$ = {};
var TYPE_3;
function $clinit_11(){
  $clinit_11 = nullMethod;
  TYPE_4 = new DomEvent$Type_0('mouseup', new MouseUpEvent_0);
}

function MouseUpEvent_0(){
}

function MouseUpEvent(){
}

_ = MouseUpEvent_0.prototype = MouseUpEvent.prototype = new MouseEvent_0;
_.dispatch = function dispatch_4(handler){
  $endDragging(dynamicCast(handler, 33).this$0, this);
}
;
_.getAssociatedType_0 = function getAssociatedType_5(){
  return TYPE_4;
}
;
_.getClass$ = function getClass_57(){
  return Lcom_google_gwt_event_dom_client_MouseUpEvent_2_classLit;
}
;
_.castableTypeMap$ = {};
var TYPE_4;
function PrivateMap_0(){
  this.map = {};
}

function PrivateMap(){
}

_ = PrivateMap_0.prototype = PrivateMap.prototype = new Object_0;
_.getClass$ = function getClass_58(){
  return Lcom_google_gwt_event_dom_client_PrivateMap_2_classLit;
}
;
_.castableTypeMap$ = {};
_.map = null;
function CloseEvent_0(){
}

function fire_0(source){
  var event_0;
  if (TYPE_5) {
    event_0 = new CloseEvent_0;
    source.fireEvent_0(event_0);
  }
}

function CloseEvent(){
}

_ = CloseEvent_0.prototype = CloseEvent.prototype = new GwtEvent;
_.dispatch = function dispatch_5(handler){
  dynamicCast(handler, 34).onClose(this);
}
;
_.getAssociatedType = function getAssociatedType_6(){
  return TYPE_5;
}
;
_.getClass$ = function getClass_59(){
  return Lcom_google_gwt_event_logical_shared_CloseEvent_2_classLit;
}
;
_.castableTypeMap$ = {};
var TYPE_5 = null;
function ResizeEvent_0(width){
  this.width = width;
}

function fire_1(source, width){
  var event_0;
  if (TYPE_6) {
    event_0 = new ResizeEvent_0(width);
    $fireEvent_0(source, event_0);
  }
}

function ResizeEvent(){
}

_ = ResizeEvent_0.prototype = ResizeEvent.prototype = new GwtEvent;
_.dispatch = function dispatch_6(handler){
  dynamicCast(handler, 35).onResize(this);
}
;
_.getAssociatedType = function getAssociatedType_7(){
  return TYPE_6;
}
;
_.getClass$ = function getClass_60(){
  return Lcom_google_gwt_event_logical_shared_ResizeEvent_2_classLit;
}
;
_.castableTypeMap$ = {};
_.width = 0;
var TYPE_6 = null;
function $dispatch(handler){
  handler.this$0.autoHideOnHistoryEvents && handler.this$0.hide();
}

function ValueChangeEvent_0(){
}

function fire_2(source){
  var event_0;
  if (TYPE_7) {
    event_0 = new ValueChangeEvent_0;
    $fireEvent_0(source.handlers, event_0);
  }
}

function ValueChangeEvent(){
}

_ = ValueChangeEvent_0.prototype = ValueChangeEvent.prototype = new GwtEvent;
_.dispatch = function dispatch_7(handler){
  $dispatch(dynamicCast(handler, 36));
}
;
_.getAssociatedType = function getAssociatedType_8(){
  return TYPE_7;
}
;
_.getClass$ = function getClass_61(){
  return Lcom_google_gwt_event_logical_shared_ValueChangeEvent_2_classLit;
}
;
_.castableTypeMap$ = {};
var TYPE_7 = null;
function $fireEvent_0(this$static, event_0){
  var $e0, e, oldSource;
  !event_0.dead || event_0.revive();
  oldSource = event_0.source;
  event_0.source = this$static.source;
  try {
    $doFire(this$static.eventBus, event_0);
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, 37)) {
      e = $e0;
      throw new UmbrellaException_2(e.causes);
    }
     else 
      throw $e0;
  }
   finally {
    oldSource == null?(event_0.dead = true , event_0.source = null):(event_0.source = oldSource);
  }
}

function HandlerManager_0(source){
  this.eventBus = new HandlerManager$Bus_0(false);
  this.source = source;
}

function HandlerManager_1(source, fireInReverseOrder){
  this.eventBus = new HandlerManager$Bus_0(fireInReverseOrder);
  this.source = source;
}

function HandlerManager(){
}

_ = HandlerManager_1.prototype = HandlerManager_0.prototype = HandlerManager.prototype = new Object_0;
_.fireEvent_0 = function fireEvent_0(event_0){
  $fireEvent_0(this, event_0);
}
;
_.getClass$ = function getClass_62(){
  return Lcom_google_gwt_event_shared_HandlerManager_2_classLit;
}
;
_.castableTypeMap$ = {7:1};
_.eventBus = null;
_.source = null;
function EventBus(){
}

_ = EventBus.prototype = new Object_0;
_.getClass$ = function getClass_63(){
  return Lcom_google_web_bindery_event_shared_EventBus_2_classLit;
}
;
_.castableTypeMap$ = {};
function $defer(this$static, command){
  !this$static.deferredDeltas && (this$static.deferredDeltas = new ArrayList_0);
  $add_4(this$static.deferredDeltas, command);
}

function $doAdd(this$static, type, handler){
  var l;
  if (!type) {
    throw new NullPointerException_1('Cannot add a handler with a null type');
  }
  if (!handler) {
    throw new NullPointerException_1('Cannot add a null handler');
  }
  this$static.firingDepth > 0?$defer(this$static, new SimpleEventBus$2_0(this$static, type, handler)):(l = $ensureHandlerList(this$static, type) , l.add(handler) , undefined);
  return new SimpleEventBus$1_0(this$static, type, handler);
}

function $doAddNow(this$static, type, handler){
  var l;
  l = $ensureHandlerList(this$static, type);
  l.add(handler);
}

function $doFire(this$static, event_0){
  var $e0, causes, e, handler, handlers, it, old;
  if (!event_0) {
    throw new NullPointerException_1('Cannot fire null event');
  }
  try {
    ++this$static.firingDepth;
    handlers = $getHandlerList(this$static, event_0.getAssociatedType());
    causes = null;
    it = this$static.isReverseOrder?handlers.listIterator_0(handlers.size_0()):handlers.listIterator();
    while (this$static.isReverseOrder?it.i > 0:it.i < it.this$0_0.size_0()) {
      handler = this$static.isReverseOrder?$previous(it):$next_2(it);
      try {
        event_0.dispatch(dynamicCast(handler, 45));
      }
       catch ($e0) {
        $e0 = caught_0($e0);
        if (instanceOf($e0, 20)) {
          e = $e0;
          !causes && (causes = new HashSet_0);
          old = $put_0(causes.map, e, causes);
        }
         else 
          throw $e0;
      }
    }
    if (causes) {
      throw new UmbrellaException_1(causes);
    }
  }
   finally {
    --this$static.firingDepth;
    this$static.firingDepth == 0 && $handleQueuedAddsAndRemoves(this$static);
  }
}

function $doRemoveNow(this$static, type, handler){
  var l, removed, sourceMap;
  l = $getHandlerList(this$static, type);
  removed = l.remove_1(handler);
  removed && l.isEmpty() && (sourceMap = dynamicCast($get_0(this$static.map, type), 46) , dynamicCast($removeNullSlot(sourceMap), 47) , sourceMap.size == 0 && $remove_4(this$static.map, type) , undefined);
}

function $ensureHandlerList(this$static, type){
  var handlers, sourceMap;
  sourceMap = dynamicCast($get_0(this$static.map, type), 46);
  if (!sourceMap) {
    sourceMap = new HashMap_0;
    $put_0(this$static.map, type, sourceMap);
  }
  handlers = dynamicCast(sourceMap.nullSlot, 47);
  if (!handlers) {
    handlers = new ArrayList_0;
    $putNullSlot(sourceMap, handlers);
  }
  return handlers;
}

function $getHandlerList(this$static, type){
  var handlers, sourceMap;
  sourceMap = dynamicCast($get_0(this$static.map, type), 46);
  if (!sourceMap) {
    return $clinit_28() , $clinit_28() , EMPTY_LIST;
  }
  handlers = dynamicCast(sourceMap.nullSlot, 47);
  if (!handlers) {
    return $clinit_28() , $clinit_28() , EMPTY_LIST;
  }
  return handlers;
}

function $handleQueuedAddsAndRemoves(this$static){
  var c, c$iterator;
  if (this$static.deferredDeltas) {
    try {
      for (c$iterator = new AbstractList$IteratorImpl_0(this$static.deferredDeltas); c$iterator.i < c$iterator.this$0_0.size_0();) {
        c = dynamicCast($next_2(c$iterator), 48);
        c.execute();
      }
    }
     finally {
      this$static.deferredDeltas = null;
    }
  }
}

function SimpleEventBus(){
}

_ = SimpleEventBus.prototype = new EventBus;
_.doRemove = function doRemove(type, source, handler){
  this.firingDepth > 0?$defer(this, new SimpleEventBus$3_0(this, type, handler)):$doRemoveNow(this, type, handler);
}
;
_.getClass$ = function getClass_64(){
  return Lcom_google_web_bindery_event_shared_SimpleEventBus_2_classLit;
}
;
_.castableTypeMap$ = {};
_.deferredDeltas = null;
_.firingDepth = 0;
_.isReverseOrder = false;
function HandlerManager$Bus_0(fireInReverseOrder){
  this.map = new HashMap_0;
  this.isReverseOrder = fireInReverseOrder;
}

function HandlerManager$Bus(){
}

_ = HandlerManager$Bus_0.prototype = HandlerManager$Bus.prototype = new SimpleEventBus;
_.doRemove = function doRemove_0(type, source, handler){
  this.firingDepth > 0?$defer(this, new SimpleEventBus$3_0(this, type, handler)):$doRemoveNow(this, type, handler);
}
;
_.getClass$ = function getClass_65(){
  return Lcom_google_gwt_event_shared_HandlerManager$Bus_2_classLit;
}
;
_.castableTypeMap$ = {};
function LegacyHandlerWrapper_0(real){
  this.real = real;
}

function LegacyHandlerWrapper(){
}

_ = LegacyHandlerWrapper_0.prototype = LegacyHandlerWrapper.prototype = new Object_0;
_.getClass$ = function getClass_66(){
  return Lcom_google_gwt_event_shared_LegacyHandlerWrapper_2_classLit;
}
;
_.castableTypeMap$ = {};
_.real = null;
function UmbrellaException_1(causes){
  RuntimeException_1.call(this, causes.size_0() == 0?null:dynamicCast(causes.toArray(initDim(_3Ljava_lang_Throwable_2_classLit, {15:1, 49:1}, 20, 0, 0)), 49)[0]);
  this.causes = causes;
}

function UmbrellaException_0(){
}

_ = UmbrellaException_1.prototype = UmbrellaException_0.prototype = new RuntimeException;
_.getClass$ = function getClass_67(){
  return Lcom_google_web_bindery_event_shared_UmbrellaException_2_classLit;
}
;
_.castableTypeMap$ = {15:1, 20:1, 22:1, 25:1, 37:1};
_.causes = null;
function UmbrellaException_2(causes){
  UmbrellaException_1.call(this, causes);
}

function UmbrellaException(){
}

_ = UmbrellaException_2.prototype = UmbrellaException.prototype = new UmbrellaException_0;
_.getClass$ = function getClass_68(){
  return Lcom_google_gwt_event_shared_UmbrellaException_2_classLit;
}
;
_.castableTypeMap$ = {15:1, 20:1, 22:1, 25:1, 37:1};
function AutoDirectionHandler_0(){
}

function AutoDirectionHandler(){
}

_ = AutoDirectionHandler_0.prototype = AutoDirectionHandler.prototype = new Object_0;
_.getClass$ = function getClass_69(){
  return Lcom_google_gwt_i18n_client_AutoDirectionHandler_2_classLit;
}
;
_.castableTypeMap$ = {45:1};
function getDirectionOnElement(elem){
  var dirPropertyValue;
  dirPropertyValue = elem['dir'] == null?null:String(elem['dir']);
  if ($equalsIgnoreCase('rtl', dirPropertyValue)) {
    return $clinit_12() , RTL;
  }
   else if ($equalsIgnoreCase('ltr', dirPropertyValue)) {
    return $clinit_12() , LTR;
  }
  return $clinit_12() , DEFAULT;
}

function setDirectionOnElement(elem, direction){
  switch (direction.ordinal) {
    case 0:
      {
        elem['dir'] = 'rtl';
        break;
      }

    case 1:
      {
        elem['dir'] = 'ltr';
        break;
      }

    case 2:
      {
        getDirectionOnElement(elem) != ($clinit_12() , DEFAULT) && (elem['dir'] = '' , undefined);
        break;
      }

  }
}

function $clinit_12(){
  $clinit_12 = nullMethod;
  RTL = new HasDirection$Direction_0('RTL', 0);
  LTR = new HasDirection$Direction_0('LTR', 1);
  DEFAULT = new HasDirection$Direction_0('DEFAULT', 2);
  $VALUES_1 = initValues(_3Lcom_google_gwt_i18n_client_HasDirection$Direction_2_classLit, {15:1}, 8, [RTL, LTR, DEFAULT]);
}

function HasDirection$Direction_0(enum$name, enum$ordinal){
  this.name_0 = enum$name;
  this.ordinal = enum$ordinal;
}

function values_1(){
  $clinit_12();
  return $VALUES_1;
}

function HasDirection$Direction(){
}

_ = HasDirection$Direction_0.prototype = HasDirection$Direction.prototype = new Enum;
_.getClass$ = function getClass_70(){
  return Lcom_google_gwt_i18n_client_HasDirection$Direction_2_classLit;
}
;
_.castableTypeMap$ = {8:1, 15:1, 17:1, 18:1};
var $VALUES_1, DEFAULT, LTR, RTL;
function JSONValue(){
}

_ = JSONValue.prototype = new Object_0;
_.getClass$ = function getClass_71(){
  return Lcom_google_gwt_json_client_JSONValue_2_classLit;
}
;
_.castableTypeMap$ = {};
function JSONArray_0(arr){
  this.jsArray = arr;
}

function unwrap(value){
  return value.jsArray;
}

function JSONArray(){
}

_ = JSONArray_0.prototype = JSONArray.prototype = new JSONValue;
_.equals$ = function equals_3(other){
  if (!(other != null && other.castableTypeMap$ && !!other.castableTypeMap$[38])) {
    return false;
  }
  return this.jsArray == dynamicCast(other, 38).jsArray;
}
;
_.getClass$ = function getClass_72(){
  return Lcom_google_gwt_json_client_JSONArray_2_classLit;
}
;
_.getUnwrapper = function getUnwrapper(){
  return unwrap;
}
;
_.hashCode$ = function hashCode_3(){
  return getHashCode(this.jsArray);
}
;
_.toString$ = function toString_8(){
  var c, i, sb, v, func;
  sb = new StringBuffer_0;
  $append(sb.data_0, '[');
  for (i = 0 , c = this.jsArray.length; i < c; ++i) {
    i > 0 && ($append(sb.data_0, ',') , sb);
    $append_0(sb, (v = this.jsArray[i] , func = ($clinit_15() , typeMap)[typeof v] , func?func(v):throwUnknownTypeException(typeof v)));
  }
  $append(sb.data_0, ']');
  return $toString(sb.data_0);
}
;
_.castableTypeMap$ = {38:1};
_.jsArray = null;
function $clinit_13(){
  $clinit_13 = nullMethod;
  FALSE = new JSONBoolean_0(false);
  TRUE = new JSONBoolean_0(true);
}

function JSONBoolean_0(value){
  this.value_0 = value;
}

function unwrap_0(value){
  return value.value_0;
}

function JSONBoolean(){
}

_ = JSONBoolean_0.prototype = JSONBoolean.prototype = new JSONValue;
_.getClass$ = function getClass_73(){
  return Lcom_google_gwt_json_client_JSONBoolean_2_classLit;
}
;
_.getUnwrapper = function getUnwrapper_0(){
  return unwrap_0;
}
;
_.toString$ = function toString_9(){
  return $clinit_25() , '' + this.value_0;
}
;
_.castableTypeMap$ = {};
_.value_0 = false;
var FALSE, TRUE;
function JSONException_0(message){
  $fillInStackTrace();
  this.detailMessage = message;
}

function JSONException(){
}

_ = JSONException_0.prototype = JSONException.prototype = new RuntimeException;
_.getClass$ = function getClass_74(){
  return Lcom_google_gwt_json_client_JSONException_2_classLit;
}
;
_.castableTypeMap$ = {15:1, 20:1, 22:1, 25:1};
function $clinit_14(){
  $clinit_14 = nullMethod;
  instance = new JSONNull_0;
}

function JSONNull_0(){
}

function unwrap_1(){
  return null;
}

function JSONNull(){
}

_ = JSONNull_0.prototype = JSONNull.prototype = new JSONValue;
_.getClass$ = function getClass_75(){
  return Lcom_google_gwt_json_client_JSONNull_2_classLit;
}
;
_.getUnwrapper = function getUnwrapper_1(){
  return unwrap_1;
}
;
_.toString$ = function toString_10(){
  return 'null';
}
;
_.castableTypeMap$ = {};
var instance;
function JSONNumber_0(value){
  this.value_0 = value;
}

function unwrap_2(value){
  return value.value_0;
}

function JSONNumber(){
}

_ = JSONNumber_0.prototype = JSONNumber.prototype = new JSONValue;
_.equals$ = function equals_4(other){
  if (!(other != null && other.castableTypeMap$ && !!other.castableTypeMap$[39])) {
    return false;
  }
  return this.value_0 == dynamicCast(other, 39).value_0;
}
;
_.getClass$ = function getClass_76(){
  return Lcom_google_gwt_json_client_JSONNumber_2_classLit;
}
;
_.getUnwrapper = function getUnwrapper_2(){
  return unwrap_2;
}
;
_.hashCode$ = function hashCode_4(){
  return ~~Math.max(Math.min((new Double_0(this.value_0)).value_0, 2147483647), -2147483648);
}
;
_.toString$ = function toString_11(){
  return this.value_0 + '';
}
;
_.castableTypeMap$ = {39:1};
_.value_0 = 0;
function $computeKeys0(this$static, result){
  var jsObject = this$static.jsObject;
  var i = 0;
  for (var key in jsObject) {
    jsObject.hasOwnProperty(key) && (result[i++] = key);
  }
  return result;
}

function $get(this$static, key){
  if (key == null) {
    throw new NullPointerException_0;
  }
  return $get0(this$static, key);
}

function $get0(this$static, key){
  var jsObject = this$static.jsObject;
  var v;
  key = String(key);
  jsObject.hasOwnProperty(key) && (v = jsObject[key]);
  var func = ($clinit_15() , typeMap)[typeof v];
  var ret = func?func(v):throwUnknownTypeException(typeof v);
  return ret;
}

function $put(this$static, key, jsonValue){
  var previous;
  if (key == null) {
    throw new NullPointerException_0;
  }
  previous = $get(this$static, key);
  $put0(this$static, key, jsonValue);
  return previous;
}

function $put0(this$static, key, value){
  if (value) {
    var func = value.getUnwrapper();
    this$static.jsObject[key] = func(value);
  }
   else {
    delete this$static.jsObject[key];
  }
}

function $toString_0(this$static){
  var first, key, key$index, key$max, keys, sb;
  sb = new StringBuffer_0;
  $append(sb.data_0, '{');
  first = true;
  keys = $computeKeys0(this$static, initDim(_3Ljava_lang_String_2_classLit, {15:1}, 1, 0, 0));
  for (key$index = 0 , key$max = keys.length; key$index < key$max; ++key$index) {
    key = keys[key$index];
    first?(first = false):($append(sb.data_0, ', ') , sb);
    $append_1(sb, escapeValue(key));
    $append(sb.data_0, ':');
    $append_0(sb, $get(this$static, key));
  }
  $append(sb.data_0, '}');
  return $toString(sb.data_0);
}

function JSONObject_0(){
  this.jsObject = {};
}

function JSONObject_1(jsValue){
  this.jsObject = jsValue;
}

function unwrap_3(value){
  return value.jsObject;
}

function JSONObject(){
}

_ = JSONObject_1.prototype = JSONObject_0.prototype = JSONObject.prototype = new JSONValue;
_.equals$ = function equals_5(other){
  if (!(other != null && other.castableTypeMap$ && !!other.castableTypeMap$[40])) {
    return false;
  }
  return this.jsObject == dynamicCast(other, 40).jsObject;
}
;
_.getClass$ = function getClass_77(){
  return Lcom_google_gwt_json_client_JSONObject_2_classLit;
}
;
_.getUnwrapper = function getUnwrapper_3(){
  return unwrap_3;
}
;
_.hashCode$ = function hashCode_5(){
  return getHashCode(this.jsObject);
}
;
_.toString$ = function toString_12(){
  return $toString_0(this);
}
;
_.castableTypeMap$ = {40:1};
_.jsObject = null;
function $clinit_15(){
  $clinit_15 = nullMethod;
  typeMap = {'boolean':createBoolean, number:createNumber, string:createString, object:createObject, 'function':createObject, undefined:createUndefined};
}

function createBoolean(v){
  return $clinit_13() , v?TRUE:FALSE;
}

function createNumber(v){
  return new JSONNumber_0(v);
}

function createObject(o){
  if (!o) {
    return $clinit_14() , instance;
  }
  var v = o.valueOf?o.valueOf():o;
  if (v !== o) {
    var func = typeMap[typeof v];
    return func?func(v):throwUnknownTypeException(typeof v);
  }
   else if (o instanceof Array || o instanceof $wnd.Array) {
    return new JSONArray_0(o);
  }
   else {
    return new JSONObject_1(o);
  }
}

function createString(v){
  return new JSONString_0(v);
}

function createUndefined(){
  return null;
}

function throwUnknownTypeException(typeString){
  $clinit_15();
  throw new JSONException_0("Unexpected typeof result '" + typeString + "'; please report this bug to the GWT team");
}

var typeMap;
function JSONString_0(value){
  if (value == null) {
    throw new NullPointerException_0;
  }
  this.value_0 = value;
}

function unwrap_4(value){
  return value.value_0;
}

function JSONString(){
}

_ = JSONString_0.prototype = JSONString.prototype = new JSONValue;
_.equals$ = function equals_6(other){
  if (!(other != null && other.castableTypeMap$ && !!other.castableTypeMap$[41])) {
    return false;
  }
  return $equals_0(this.value_0, dynamicCast(other, 41).value_0);
}
;
_.getClass$ = function getClass_78(){
  return Lcom_google_gwt_json_client_JSONString_2_classLit;
}
;
_.getUnwrapper = function getUnwrapper_4(){
  return unwrap_4;
}
;
_.hashCode$ = function hashCode_6(){
  return getHashCode_0(this.value_0);
}
;
_.toString$ = function toString_13(){
  return escapeValue(this.value_0);
}
;
_.castableTypeMap$ = {41:1};
_.value_0 = null;
function Array_1(){
}

function createFrom(array, length_0){
  var a, result;
  a = array;
  result = createFromSeed(0, length_0);
  initValues(a.arrayClass$, a.castableTypeMap$, a.queryId$, result);
  return result;
}

function createFromSeed(seedType, length_0){
  var array = new Array(length_0);
  if (seedType == 3) {
    for (var i = 0; i < length_0; ++i) {
      var value = new Object;
      value.l = value.m = value.h = 0;
      array[i] = value;
    }
  }
   else if (seedType > 0) {
    var value = [null, 0, false][seedType];
    for (var i = 0; i < length_0; ++i) {
      array[i] = value;
    }
  }
  return array;
}

function initDim(arrayClass, castableTypeMap, queryId, length_0, seedType){
  var result;
  result = createFromSeed(seedType, length_0);
  $clinit_16();
  wrapArray(result, expandoNames_0, expandoValues_0);
  result.arrayClass$ = arrayClass;
  result.castableTypeMap$ = castableTypeMap;
  result.queryId$ = queryId;
  return result;
}

function initValues(arrayClass, castableTypeMap, queryId, array){
  $clinit_16();
  wrapArray(array, expandoNames_0, expandoValues_0);
  array.arrayClass$ = arrayClass;
  array.castableTypeMap$ = castableTypeMap;
  array.queryId$ = queryId;
  return array;
}

function setCheck(array, index, value){
  if (value != null) {
    if (array.queryId$ > 0 && !canCastUnsafe(value, array.queryId$)) {
      throw new ArrayStoreException_0;
    }
    if (array.queryId$ < 0 && (value.typeMarker$ == nullMethod || value.castableTypeMap$ && !!value.castableTypeMap$[1])) {
      throw new ArrayStoreException_0;
    }
  }
  return array[index] = value;
}

function Array_0(){
}

_ = Array_1.prototype = Array_0.prototype = new Object_0;
_.getClass$ = function getClass_79(){
  return this.arrayClass$;
}
;
_.castableTypeMap$ = {};
_.arrayClass$ = null;
_.queryId$ = 0;
function $clinit_16(){
  $clinit_16 = nullMethod;
  expandoNames_0 = [];
  expandoValues_0 = [];
  initExpandos(new Array_1, expandoNames_0, expandoValues_0);
}

function initExpandos(protoType, expandoNames, expandoValues){
  var i = 0, value;
  for (var name_0 in protoType) {
    if (value = protoType[name_0]) {
      expandoNames[i] = name_0;
      expandoValues[i] = value;
      ++i;
    }
  }
}

function wrapArray(array, expandoNames, expandoValues){
  $clinit_16();
  for (var i = 0, c = expandoNames.length; i < c; ++i) {
    array[expandoNames[i]] = expandoValues[i];
  }
}

var expandoNames_0, expandoValues_0;
function canCastUnsafe(src, dstId){
  return src.castableTypeMap$ && src.castableTypeMap$[dstId];
}

function dynamicCast(src, dstId){
  if (src != null && !(src.castableTypeMap$ && src.castableTypeMap$[dstId])) {
    throw new ClassCastException_0;
  }
  return src;
}

function dynamicCastJso(src){
  if (src != null && (src.typeMarker$ == nullMethod || src.castableTypeMap$ && !!src.castableTypeMap$[1])) {
    throw new ClassCastException_0;
  }
  return src;
}

function instanceOf(src, dstId){
  return src != null && src.castableTypeMap$ && !!src.castableTypeMap$[dstId];
}

function instanceOfJso(src){
  return src != null && src.typeMarker$ != nullMethod && !(src.castableTypeMap$ && !!src.castableTypeMap$[1]);
}

function throwClassCastExceptionUnlessNull(o){
  if (o != null) {
    throw new ClassCastException_0;
  }
  return null;
}

function init(){
  var runtimeValue;
  !!$stats && onModuleStart('com.google.gwt.user.client.UserAgentAsserter');
  runtimeValue = $getRuntimeValue();
  $equals_0('ie8', runtimeValue) || ($wnd.alert('ERROR: Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie8) does not match the runtime user.agent value (' + runtimeValue + '). Expect more errors.\n') , undefined);
  !!$stats && onModuleStart('at.tomtasche.bloki.engine.client.Submit');
  $onModuleLoad(new Submit_0);
}

function caught_0(e){
  if (e != null && e.castableTypeMap$ && !!e.castableTypeMap$[20]) {
    return e;
  }
  return new JavaScriptException_0(e);
}

function onModuleStart(mainClassName){
  return $stats({moduleName:$moduleName, sessionId:$sessionId, subSystem:'startup', evtGroup:'moduleStartup', millis:(new Date).getTime(), type:'onModuleLoadStart', className:mainClassName});
}

function AbstractRenderer(){
}

_ = AbstractRenderer.prototype = new Object_0;
_.getClass$ = function getClass_80(){
  return Lcom_google_gwt_text_shared_AbstractRenderer_2_classLit;
}
;
_.castableTypeMap$ = {};
function PassthroughParser_0(){
}

function PassthroughParser(){
}

_ = PassthroughParser_0.prototype = PassthroughParser.prototype = new Object_0;
_.getClass$ = function getClass_81(){
  return Lcom_google_gwt_text_shared_testing_PassthroughParser_2_classLit;
}
;
_.castableTypeMap$ = {};
var INSTANCE_0 = null;
function PassthroughRenderer_0(){
}

function PassthroughRenderer(){
}

_ = PassthroughRenderer_0.prototype = PassthroughRenderer.prototype = new AbstractRenderer;
_.getClass$ = function getClass_82(){
  return Lcom_google_gwt_text_shared_testing_PassthroughRenderer_2_classLit;
}
;
_.castableTypeMap$ = {};
var INSTANCE_1 = null;
function dispatchEvent_1(evt, elem, listener){
  var prevCurrentEvent;
  prevCurrentEvent = currentEvent;
  currentEvent = evt;
  elem == sCaptureElem && $eventGetTypeInt(evt.type) == 8192 && (sCaptureElem = null);
  listener.onBrowserEvent(evt);
  currentEvent = prevCurrentEvent;
}

function previewEvent(evt){
  var ret;
  ret = fire_3(handlers_0, evt);
  if (!ret && !!evt) {
    evt.cancelBubble = true;
    evt.returnValue = false;
  }
  return ret;
}

function releaseCapture(elem){
  !!sCaptureElem && elem == sCaptureElem && (sCaptureElem = null);
  $maybeInitializeEventSystem();
  elem.releaseCapture();
}

function setCapture(elem){
  sCaptureElem = elem;
  $maybeInitializeEventSystem();
  elem.setCapture();
}

function sinkEvents(elem, eventBits){
  $maybeInitializeEventSystem();
  $sinkEventsImpl(elem, eventBits);
}

var currentEvent = null, sCaptureElem = null;
function addNativePreviewHandler(handler){
  $maybeInitializeEventSystem();
  !TYPE_8 && (TYPE_8 = new GwtEvent$Type_0);
  if (!handlers_0) {
    handlers_0 = new HandlerManager_1(null, true);
    singleton = new Event$NativePreviewEvent_0;
  }
  return new LegacyHandlerWrapper_0($doAdd(handlers_0.eventBus, TYPE_8, handler));
}

var handlers_0 = null;
function $revive(this$static){
  this$static.dead = false;
  this$static.source = null;
  this$static.isCanceled = false;
  this$static.isConsumed = false;
  this$static.isFirstHandler = true;
  this$static.nativeEvent = null;
}

function Event$NativePreviewEvent_0(){
}

function fire_3(handlers, nativeEvent){
  var lastIsCanceled, lastIsConsumed, lastIsFirstHandler, lastNativeEvent, ret;
  if (!!TYPE_8 && !!handlers && $containsKey(handlers.eventBus.map, TYPE_8)) {
    lastIsCanceled = singleton.isCanceled;
    lastIsConsumed = singleton.isConsumed;
    lastIsFirstHandler = singleton.isFirstHandler;
    lastNativeEvent = singleton.nativeEvent;
    $revive(singleton);
    singleton.nativeEvent = nativeEvent;
    $fireEvent_0(handlers, singleton);
    ret = !(singleton.isCanceled && !singleton.isConsumed);
    singleton.isCanceled = lastIsCanceled;
    singleton.isConsumed = lastIsConsumed;
    singleton.isFirstHandler = lastIsFirstHandler;
    singleton.nativeEvent = lastNativeEvent;
    return ret;
  }
  return true;
}

function Event$NativePreviewEvent(){
}

_ = Event$NativePreviewEvent_0.prototype = Event$NativePreviewEvent.prototype = new GwtEvent;
_.dispatch = function dispatch_8(handler){
  $previewNativeEvent(dynamicCast(handler, 42).this$0, this);
  singleton.isFirstHandler = false;
}
;
_.getAssociatedType = function getAssociatedType_9(){
  return TYPE_8;
}
;
_.getClass$ = function getClass_83(){
  return Lcom_google_gwt_user_client_Event$NativePreviewEvent_2_classLit;
}
;
_.revive = function revive_0(){
  $revive(this);
}
;
_.castableTypeMap$ = {};
_.isCanceled = false;
_.isConsumed = false;
_.isFirstHandler = false;
_.nativeEvent = null;
var TYPE_8 = null, singleton = null;
function $clinit_17(){
  $clinit_17 = nullMethod;
  impl = new HistoryImpl_0;
  $init(impl) || (impl = null);
}

function addValueChangeHandler(handler){
  $clinit_17();
  return impl?$addValueChangeHandler(impl, handler):null;
}

var impl = null;
function Timer$1_0(){
}

function Timer$1(){
}

_ = Timer$1_0.prototype = Timer$1.prototype = new Object_0;
_.getClass$ = function getClass_84(){
  return Lcom_google_gwt_user_client_Timer$1_2_classLit;
}
;
_.onClose = function onClose(event_0){
  while (($clinit_1() , timers).size > 0) {
    $cancel_0(dynamicCast($get_1(timers, 0), 43));
  }
}
;
_.castableTypeMap$ = {34:1, 45:1};
function $getRuntimeValue(){
  var ua = navigator.userAgent.toLowerCase();
  var makeVersion = function(result){
    return parseInt(result[1]) * 1000 + parseInt(result[2]);
  }
  ;
  if (function(){
    return ua.indexOf('opera') != -1;
  }
  ())
    return 'opera';
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && $doc.documentMode >= 9;
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && $doc.documentMode >= 8;
  }
  ())
    return 'ie8';
  if (function(){
    var result = /msie ([0-9]+)\.([0-9]+)/.exec(ua);
    if (result && result.length == 3)
      return makeVersion(result) >= 6000;
  }
  ())
    return 'ie6';
  if (function(){
    return ua.indexOf('gecko') != -1;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}

function addCloseHandler(handler){
  maybeInitializeCloseHandlers();
  return addHandler(TYPE_5?TYPE_5:(TYPE_5 = new GwtEvent$Type_0), handler);
}

function addHandler(type, handler){
  return new LegacyHandlerWrapper_0($doAdd((!handlers_1 && (handlers_1 = new Window$WindowHandlers_0) , handlers_1).eventBus, type, handler));
}

function addResizeHandler(handler){
  maybeInitializeCloseHandlers();
  maybeInitializeResizeHandlers();
  return addHandler((!TYPE_6 && (TYPE_6 = new GwtEvent$Type_0) , TYPE_6), handler);
}

function maybeInitializeCloseHandlers(){
  if (!closeHandlersInitialized) {
    $initHandler('function __gwt_initWindowCloseHandler(beforeunload, unload) {\n  var wnd = window\n  , oldOnBeforeUnload = wnd.onbeforeunload\n  , oldOnUnload = wnd.onunload;\n  \n  wnd.onbeforeunload = function(evt) {\n    var ret, oldRet;\n    try {\n      ret = beforeunload();\n    } finally {\n      oldRet = oldOnBeforeUnload && oldOnBeforeUnload(evt);\n    }\n    // Avoid returning null as IE6 will coerce it into a string.\n    // Ensure that "" gets returned properly.\n    if (ret != null) {\n      return ret;\n    }\n    if (oldRet != null) {\n      return oldRet;\n    }\n    // returns undefined.\n  };\n  \n  wnd.onunload = function(evt) {\n    try {\n      unload();\n    } finally {\n      oldOnUnload && oldOnUnload(evt);\n      wnd.onresize = null;\n      wnd.onscroll = null;\n      wnd.onbeforeunload = null;\n      wnd.onunload = null;\n    }\n  };\n  \n  // Remove the reference once we\'ve initialize the handler\n  wnd.__gwt_initWindowCloseHandler = undefined;\n}\n', new WindowImplIE$1_0);
    closeHandlersInitialized = true;
  }
}

function maybeInitializeResizeHandlers(){
  if (!resizeHandlersInitialized) {
    $initHandler("function __gwt_initWindowResizeHandler(resize) {\n  var wnd = window, oldOnResize = wnd.onresize;\n  \n  wnd.onresize = function(evt) {\n    try {\n      resize();\n    } finally {\n      oldOnResize && oldOnResize(evt);\n    }\n  };\n  \n  // Remove the reference once we've initialize the handler\n  wnd.__gwt_initWindowResizeHandler = undefined;\n}\n", new WindowImplIE$2_0);
    resizeHandlersInitialized = true;
  }
}

function onClosed(){
  closeHandlersInitialized && fire_0((!handlers_1 && (handlers_1 = new Window$WindowHandlers_0) , handlers_1));
}

function onClosing(){
  var event_0;
  if (closeHandlersInitialized) {
    event_0 = new Window$ClosingEvent_0;
    !!handlers_1 && $fireEvent_0(handlers_1, event_0);
    return null;
  }
  return null;
}

function onResize(){
  var height, width;
  if (resizeHandlersInitialized) {
    width = $getClientWidth($doc);
    height = $getClientHeight($doc);
    if (lastResizeWidth != width || lastResizeHeight != height) {
      lastResizeWidth = width;
      lastResizeHeight = height;
      fire_1((!handlers_1 && (handlers_1 = new Window$WindowHandlers_0) , handlers_1), width);
    }
  }
}

var closeHandlersInitialized = false, handlers_1 = null, lastResizeHeight = 0, lastResizeWidth = 0, resizeHandlersInitialized = false;
function $clinit_18(){
  $clinit_18 = nullMethod;
  TYPE_9 = new GwtEvent$Type_0;
}

function Window$ClosingEvent_0(){
  $clinit_18();
}

function Window$ClosingEvent(){
}

_ = Window$ClosingEvent_0.prototype = Window$ClosingEvent.prototype = new GwtEvent;
_.dispatch = function dispatch_9(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_10(){
  return TYPE_9;
}
;
_.getClass$ = function getClass_85(){
  return Lcom_google_gwt_user_client_Window$ClosingEvent_2_classLit;
}
;
_.castableTypeMap$ = {};
var TYPE_9;
function Window$WindowHandlers_0(){
  this.eventBus = new HandlerManager$Bus_0(false);
  this.source = null;
}

function Window$WindowHandlers(){
}

_ = Window$WindowHandlers_0.prototype = Window$WindowHandlers.prototype = new HandlerManager;
_.getClass$ = function getClass_86(){
  return Lcom_google_gwt_user_client_Window$WindowHandlers_2_classLit;
}
;
_.castableTypeMap$ = {7:1};
function $eventGetTypeInt(eventType){
  switch (eventType) {
    case 'blur':
      return 4096;
    case 'change':
      return 1024;
    case 'click':
      return 1;
    case 'dblclick':
      return 2;
    case 'focus':
      return 2048;
    case 'keydown':
      return 128;
    case 'keypress':
      return 256;
    case 'keyup':
      return 512;
    case 'load':
      return 32768;
    case 'losecapture':
      return 8192;
    case 'mousedown':
      return 4;
    case 'mousemove':
      return 64;
    case 'mouseout':
      return 32;
    case 'mouseover':
      return 16;
    case 'mouseup':
      return 8;
    case 'scroll':
      return 16384;
    case 'error':
      return 65536;
    case 'DOMMouseScroll':
    case 'mousewheel':
      return 131072;
    case 'contextmenu':
      return 262144;
    case 'paste':
      return 524288;
    case 'touchstart':
      return 1048576;
    case 'touchmove':
      return 2097152;
    case 'touchend':
      return 4194304;
    case 'touchcancel':
      return 8388608;
    case 'gesturestart':
      return 16777216;
    case 'gesturechange':
      return 33554432;
    case 'gestureend':
      return 67108864;
    case 'ended':
      return 134217728;
    case 'progress':
      return 268435456;
    case 'canplaythrough':
      return 536870912;
    default:return -1;
  }
}

function $maybeInitializeEventSystem(){
  if (!eventSystemIsInitialized) {
    $initEventSystem();
    eventSystemIsInitialized = true;
  }
}

var eventSystemIsInitialized = false;
function $initEventSystem(){
  $wnd.__gwt_globalEventArray == null && ($wnd.__gwt_globalEventArray = new Array);
  $wnd.__gwt_globalEventArray[$wnd.__gwt_globalEventArray.length] = $entry(function(){
    return previewEvent($wnd.event);
  }
  );
  var dispatchEvent_0 = $entry(function(){
    var oldEventTarget = currentEventTarget;
    currentEventTarget = this;
    if ($wnd.event.returnValue == null) {
      $wnd.event.returnValue = true;
      if (!previewEventImpl()) {
        currentEventTarget = oldEventTarget;
        return;
      }
    }
    var listener, curElem = this;
    while (curElem && !(listener = curElem.__listener)) {
      curElem = curElem.parentElement;
    }
    listener && !instanceOfJso(listener) && listener != null && listener.castableTypeMap$ && !!listener.castableTypeMap$[10] && dispatchEvent_1($wnd.event, curElem, listener);
    currentEventTarget = oldEventTarget;
  }
  );
  var dispatchDblClickEvent = $entry(function(){
    var newEvent = $doc.createEventObject();
    $wnd.event.returnValue == null && $wnd.event.srcElement.fireEvent && $wnd.event.srcElement.fireEvent('onclick', newEvent);
    if (this.__eventBits & 2) {
      dispatchEvent_0.call(this);
    }
     else if ($wnd.event.returnValue == null) {
      $wnd.event.returnValue = true;
      previewEventImpl();
    }
  }
  );
  var dispatchUnhandledEvent = $entry(function(){
    this.__gwtLastUnhandledEvent = $wnd.event.type;
    dispatchEvent_0.call(this);
  }
  );
  var moduleName = $moduleName.replace(/\./g, '_');
  $wnd['__gwt_dispatchEvent_' + moduleName] = dispatchEvent_0;
  callDispatchEvent = (new Function('w', 'return function() { w.__gwt_dispatchEvent_' + moduleName + '.call(this) }'))($wnd);
  $wnd['__gwt_dispatchDblClickEvent_' + moduleName] = dispatchDblClickEvent;
  callDispatchDblClickEvent = (new Function('w', 'return function() { w.__gwt_dispatchDblClickEvent_' + moduleName + '.call(this)}'))($wnd);
  $wnd['__gwt_dispatchUnhandledEvent_' + moduleName] = dispatchUnhandledEvent;
  callDispatchUnhandledEvent = (new Function('w', 'return function() { w.__gwt_dispatchUnhandledEvent_' + moduleName + '.call(this)}'))($wnd);
  callDispatchOnLoadEvent = (new Function('w', 'return function() { w.__gwt_dispatchUnhandledEvent_' + moduleName + '.call(w.event.srcElement)}'))($wnd);
  var bodyDispatcher = $entry(function(){
    dispatchEvent_0.call($doc.body);
  }
  );
  var bodyDblClickDispatcher = $entry(function(){
    dispatchDblClickEvent.call($doc.body);
  }
  );
  $doc.body.attachEvent('onclick', bodyDispatcher);
  $doc.body.attachEvent('onmousedown', bodyDispatcher);
  $doc.body.attachEvent('onmouseup', bodyDispatcher);
  $doc.body.attachEvent('onmousemove', bodyDispatcher);
  $doc.body.attachEvent('onmousewheel', bodyDispatcher);
  $doc.body.attachEvent('onkeydown', bodyDispatcher);
  $doc.body.attachEvent('onkeypress', bodyDispatcher);
  $doc.body.attachEvent('onkeyup', bodyDispatcher);
  $doc.body.attachEvent('onfocus', bodyDispatcher);
  $doc.body.attachEvent('onblur', bodyDispatcher);
  $doc.body.attachEvent('ondblclick', bodyDblClickDispatcher);
  $doc.body.attachEvent('oncontextmenu', bodyDispatcher);
}

function $sinkEventsImpl(elem, bits){
  var chMask = (elem.__eventBits || 0) ^ bits;
  elem.__eventBits = bits;
  if (!chMask)
    return;
  chMask & 1 && (elem.onclick = bits & 1?callDispatchEvent:null);
  chMask & 3 && (elem.ondblclick = bits & 3?callDispatchDblClickEvent:null);
  chMask & 4 && (elem.onmousedown = bits & 4?callDispatchEvent:null);
  chMask & 8 && (elem.onmouseup = bits & 8?callDispatchEvent:null);
  chMask & 16 && (elem.onmouseover = bits & 16?callDispatchEvent:null);
  chMask & 32 && (elem.onmouseout = bits & 32?callDispatchEvent:null);
  chMask & 64 && (elem.onmousemove = bits & 64?callDispatchEvent:null);
  chMask & 128 && (elem.onkeydown = bits & 128?callDispatchEvent:null);
  chMask & 256 && (elem.onkeypress = bits & 256?callDispatchEvent:null);
  chMask & 512 && (elem.onkeyup = bits & 512?callDispatchEvent:null);
  chMask & 1024 && (elem.onchange = bits & 1024?callDispatchEvent:null);
  chMask & 2048 && (elem.onfocus = bits & 2048?callDispatchEvent:null);
  chMask & 4096 && (elem.onblur = bits & 4096?callDispatchEvent:null);
  chMask & 8192 && (elem.onlosecapture = bits & 8192?callDispatchEvent:null);
  chMask & 16384 && (elem.onscroll = bits & 16384?callDispatchEvent:null);
  chMask & 32768 && (elem.nodeName == 'IFRAME'?bits & 32768?elem.attachEvent('onload', callDispatchOnLoadEvent):elem.detachEvent('onload', callDispatchOnLoadEvent):(elem.onload = bits & 32768?callDispatchUnhandledEvent:null));
  chMask & 65536 && (elem.onerror = bits & 65536?callDispatchEvent:null);
  chMask & 131072 && (elem.onmousewheel = bits & 131072?callDispatchEvent:null);
  chMask & 262144 && (elem.oncontextmenu = bits & 262144?callDispatchEvent:null);
  chMask & 524288 && (elem.onpaste = bits & 524288?callDispatchEvent:null);
}

function previewEventImpl(){
  var isCancelled = false;
  for (var i = 0; i < $wnd.__gwt_globalEventArray.length; i++) {
    !$wnd.__gwt_globalEventArray[i]() && (isCancelled = true);
  }
  return !isCancelled;
}

var callDispatchDblClickEvent = null, callDispatchEvent = null, callDispatchOnLoadEvent = null, callDispatchUnhandledEvent = null;
function $addValueChangeHandler(this$static, handler){
  return new LegacyHandlerWrapper_0($doAdd(this$static.handlers.eventBus, (!TYPE_7 && (TYPE_7 = new GwtEvent$Type_0) , TYPE_7), handler));
}

function $init(this$static){
  var token_0 = '';
  var hash_0 = $wnd.location.hash;
  hash_0.length > 0 && (token_0 = this$static.decodeFragment(hash_0.substring(1)));
  token_1 = token_0;
  var historyImpl = this$static;
  var oldHandler = $wnd.onhashchange;
  $wnd.onhashchange = $entry(function(){
    var token = '', hash = $wnd.location.hash;
    hash.length > 0 && (token = historyImpl.decodeFragment(hash.substring(1)));
    historyImpl.newItemOnEvent(token);
    oldHandler && oldHandler();
  }
  );
  return true;
}

function HistoryImpl_0(){
  this.handlers = new HandlerManager_0(null);
}

function HistoryImpl(){
}

_ = HistoryImpl_0.prototype = HistoryImpl.prototype = new Object_0;
_.decodeFragment = function decodeFragment(encodedFragment){
  return decodeURI(encodedFragment.replace('%23', '#'));
}
;
_.fireEvent_0 = function fireEvent_1(event_0){
  $fireEvent_0(this.handlers, event_0);
}
;
_.getClass$ = function getClass_87(){
  return Lcom_google_gwt_user_client_impl_HistoryImpl_2_classLit;
}
;
_.newItemOnEvent = function newItemOnEvent(historyToken){
  historyToken = historyToken == null?'':historyToken;
  if (!$equals_0(historyToken, token_1 == null?'':token_1)) {
    token_1 = historyToken;
    fire_2(this);
  }
}
;
_.castableTypeMap$ = {7:1};
var token_1 = '';
function $initHandler(initFunc, cmd){
  var scriptElem;
  scriptElem = $createScriptElement($doc, initFunc);
  $doc.body.appendChild(scriptElem);
  cmd.execute();
  $doc.body.removeChild(scriptElem);
}

function WindowImplIE$1_0(){
}

function WindowImplIE$1(){
}

_ = WindowImplIE$1_0.prototype = WindowImplIE$1.prototype = new Object_0;
_.execute = function execute(){
  $wnd.__gwt_initWindowCloseHandler($entry(onClosing), $entry(onClosed));
}
;
_.getClass$ = function getClass_88(){
  return Lcom_google_gwt_user_client_impl_WindowImplIE$1_2_classLit;
}
;
_.castableTypeMap$ = {};
function WindowImplIE$2_0(){
}

function WindowImplIE$2(){
}

_ = WindowImplIE$2_0.prototype = WindowImplIE$2.prototype = new Object_0;
_.execute = function execute_0(){
  $wnd.__gwt_initWindowResizeHandler($entry(onResize));
}
;
_.getClass$ = function getClass_89(){
  return Lcom_google_gwt_user_client_impl_WindowImplIE$2_2_classLit;
}
;
_.castableTypeMap$ = {};
function $add_0(this$static, child, container){
  $removeFromParent(child);
  $add_3(this$static.children_0, child);
  container.appendChild(child.element);
  $setParent(child, this$static);
}

function $remove_0(this$static, w){
  var elem;
  if (w.parent_0 != this$static) {
    return false;
  }
  try {
    $setParent(w, null);
  }
   finally {
    elem = w.element;
    $getParentElement(elem).removeChild(elem);
    $remove_3(this$static.children_0, w);
  }
  return true;
}

function ComplexPanel(){
}

_ = ComplexPanel.prototype = new Panel;
_.getClass$ = function getClass_90(){
  return Lcom_google_gwt_user_client_ui_ComplexPanel_2_classLit;
}
;
_.iterator = function iterator_1(){
  return new WidgetCollection$WidgetIterator_0(this.children_0);
}
;
_.remove = function remove_1(w){
  return $remove_0(this, w);
}
;
_.castableTypeMap$ = {6:1, 7:1, 10:1, 11:1, 12:1, 14:1};
function $add_1(this$static, w){
  $add_0(this$static, w, this$static.element);
}

function $remove_1(this$static, w){
  var removed;
  removed = $remove_0(this$static, w);
  removed && changeToStaticPositioning(w.element);
  return removed;
}

function changeToStaticPositioning(elem){
  elem.style['left'] = '';
  elem.style['top'] = '';
  elem.style['position'] = '';
}

function AbsolutePanel(){
}

_ = AbsolutePanel.prototype = new ComplexPanel;
_.getClass$ = function getClass_91(){
  return Lcom_google_gwt_user_client_ui_AbsolutePanel_2_classLit;
}
;
_.remove = function remove_2(w){
  var removed;
  return removed = $remove_0(this, w) , removed && changeToStaticPositioning(w.element) , removed;
}
;
_.castableTypeMap$ = {6:1, 7:1, 10:1, 11:1, 12:1, 14:1};
function $clinit_19(){
  $clinit_19 = nullMethod;
  attachCommand = new AttachDetachException$1_0;
  detachCommand = new AttachDetachException$2_0;
}

function AttachDetachException_0(causes){
  UmbrellaException_1.call(this, causes);
}

function tryCommand(hasWidgets, c){
  var old;
  $clinit_19();
  var $e0, caught, e, w, w$iterator;
  caught = null;
  for (w$iterator = hasWidgets.iterator(); w$iterator.hasNext();) {
    w = dynamicCast(w$iterator.next(), 14);
    try {
      c.execute_0(w);
    }
     catch ($e0) {
      $e0 = caught_0($e0);
      if (instanceOf($e0, 20)) {
        e = $e0;
        !caught && (caught = new HashSet_0);
        old = $put_0(caught.map, e, caught);
      }
       else 
        throw $e0;
    }
  }
  if (caught) {
    throw new AttachDetachException_0(caught);
  }
}

function AttachDetachException(){
}

_ = AttachDetachException_0.prototype = AttachDetachException.prototype = new UmbrellaException;
_.getClass$ = function getClass_92(){
  return Lcom_google_gwt_user_client_ui_AttachDetachException_2_classLit;
}
;
_.castableTypeMap$ = {15:1, 20:1, 22:1, 25:1, 37:1};
var attachCommand, detachCommand;
function AttachDetachException$1_0(){
}

function AttachDetachException$1(){
}

_ = AttachDetachException$1_0.prototype = AttachDetachException$1.prototype = new Object_0;
_.execute_0 = function execute_1(w){
  w.onAttach();
}
;
_.getClass$ = function getClass_93(){
  return Lcom_google_gwt_user_client_ui_AttachDetachException$1_2_classLit;
}
;
_.castableTypeMap$ = {};
function AttachDetachException$2_0(){
}

function AttachDetachException$2(){
}

_ = AttachDetachException$2_0.prototype = AttachDetachException$2.prototype = new Object_0;
_.execute_0 = function execute_2(w){
  $onDetach(w);
}
;
_.getClass$ = function getClass_94(){
  return Lcom_google_gwt_user_client_ui_AttachDetachException$2_2_classLit;
}
;
_.castableTypeMap$ = {};
function FocusWidget(){
}

_ = FocusWidget.prototype = new Widget;
_.getClass$ = function getClass_95(){
  return Lcom_google_gwt_user_client_ui_FocusWidget_2_classLit;
}
;
_.onAttach = function onAttach_0(){
  var tabIndex;
  $onAttach(this);
  tabIndex = this.element.tabIndex;
  -1 == tabIndex && (this.element.tabIndex = 0 , undefined);
}
;
_.castableTypeMap$ = {6:1, 7:1, 10:1, 11:1, 12:1, 14:1};
function ButtonBase(){
}

_ = ButtonBase.prototype = new FocusWidget;
_.getClass$ = function getClass_96(){
  return Lcom_google_gwt_user_client_ui_ButtonBase_2_classLit;
}
;
_.castableTypeMap$ = {6:1, 7:1, 10:1, 11:1, 12:1, 14:1};
function Button_0(html){
  this.element = $doc.createElement("<BUTTON type='button'><\/BUTTON>");
  this.element['className'] = 'gwt-Button';
  this.element.innerHTML = html || '';
}

function Button(){
}

_ = Button_0.prototype = Button.prototype = new ButtonBase;
_.getClass$ = function getClass_97(){
  return Lcom_google_gwt_user_client_ui_Button_2_classLit;
}
;
_.castableTypeMap$ = {6:1, 7:1, 10:1, 11:1, 12:1, 14:1};
function $getWidgetTd(this$static, w){
  var parent_0;
  if (w.parent_0 != this$static) {
    return null;
  }
  return parent_0 = w.element.parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0;
}

function $setCellHorizontalAlignment(this$static, w, align){
  var td;
  td = $getWidgetTd(this$static, w);
  !!td && (td['align'] = align.textAlignString , undefined);
}

function CellPanel_0(){
  this.children_0 = new WidgetCollection_0(this);
  this.table = $createElement($doc, 'table');
  this.body_0 = $createElement($doc, 'tbody');
  this.table.appendChild(this.body_0);
  this.element = this.table;
}

function CellPanel(){
}

_ = CellPanel.prototype = new ComplexPanel;
_.getClass$ = function getClass_98(){
  return Lcom_google_gwt_user_client_ui_CellPanel_2_classLit;
}
;
_.castableTypeMap$ = {6:1, 7:1, 10:1, 11:1, 12:1, 14:1};
_.body_0 = null;
_.table = null;
function DecoratorPanel_0(rowStyles){
  var i, row, table, trElem;
  this.element = $createElement($doc, 'table');
  table = this.element;
  this.tbody = $createElement($doc, 'tbody');
  table.appendChild(this.tbody);
  table['cellSpacing'] = 0;
  table['cellPadding'] = 0;
  for (i = 0; i < rowStyles.length; ++i) {
    row = (trElem = $createElement($doc, 'tr') , trElem['className'] = rowStyles[i] , trElem.appendChild(createTD(rowStyles[i] + 'Left')) , trElem.appendChild(createTD(rowStyles[i] + 'Center')) , trElem.appendChild(createTD(rowStyles[i] + 'Right')) , trElem);
    this.tbody.appendChild(row);
    i == 1 && (this.containerElem = $getFirstChildElement(row.children[1]));
  }
  this.element['className'] = 'gwt-DecoratorPanel';
}

function createTD(styleName){
  var inner, tdElem;
  tdElem = $createElement($doc, 'td');
  inner = $createElement($doc, 'div');
  tdElem.appendChild(inner);
  tdElem['className'] = styleName;
  inner['className'] = styleName + 'Inner';
  return tdElem;
}

function DecoratorPanel(){
}

_ = DecoratorPanel_0.prototype = DecoratorPanel.prototype = new SimplePanel;
_.getClass$ = function getClass_99(){
  return Lcom_google_gwt_user_client_ui_DecoratorPanel_2_classLit;
}
;
_.getContainerElement = function getContainerElement_1(){
  return this.containerElem;
}
;
_.castableTypeMap$ = {6:1, 7:1, 10:1, 11:1, 12:1, 14:1};
_.containerElem = null;
_.tbody = null;
function DialogBox$1_0(this$0){
  this.this$0 = this$0;
}

function DialogBox$1(){
}

_ = DialogBox$1_0.prototype = DialogBox$1.prototype = new Object_0;
_.getClass$ = function getClass_100(){
  return Lcom_google_gwt_user_client_ui_DialogBox$1_2_classLit;
}
;
_.onResize = function onResize_0(event_0){
  this.this$0.windowWidth = event_0.width;
}
;
_.castableTypeMap$ = {35:1, 45:1};
_.this$0 = null;
function LabelBase_0(element){
  this.element = element;
  this.directionalTextHelper = new DirectionalTextHelper_0(this.element);
}

function LabelBase(){
}

_ = LabelBase.prototype = new Widget;
_.getClass$ = function getClass_101(){
  return Lcom_google_gwt_user_client_ui_LabelBase_2_classLit;
}
;
_.castableTypeMap$ = {6:1, 7:1, 10:1, 11:1, 12:1, 14:1};
_.directionalTextHelper = null;
function Label_0(element){
  LabelBase_0.call(this, element, $equalsIgnoreCase('span', $getTagName(element)));
}

function Label(){
}

_ = Label_0.prototype = Label.prototype = new LabelBase;
_.getClass$ = function getClass_102(){
  return Lcom_google_gwt_user_client_ui_Label_2_classLit;
}
;
_.castableTypeMap$ = {6:1, 7:1, 10:1, 11:1, 12:1, 14:1};
function HTML_0(){
  Label_0.call(this, $createElement($doc, 'div'));
  this.element['className'] = 'gwt-HTML';
}

function HTML_1(html){
  HTML_0.call(this);
  $setTextOrHtml(this.directionalTextHelper, html, true);
}

function HTML(){
}

_ = HTML_1.prototype = HTML_0.prototype = HTML.prototype = new Label;
_.getClass$ = function getClass_103(){
  return Lcom_google_gwt_user_client_ui_HTML_2_classLit;
}
;
_.castableTypeMap$ = {6:1, 7:1, 10:1, 11:1, 12:1, 14:1};
function DialogBox$CaptionImpl_0(){
  HTML_0.call(this);
  this.element['className'] = 'Caption';
}

function DialogBox$CaptionImpl(){
}

_ = DialogBox$CaptionImpl_0.prototype = DialogBox$CaptionImpl.prototype = new HTML;
_.getClass$ = function getClass_104(){
  return Lcom_google_gwt_user_client_ui_DialogBox$CaptionImpl_2_classLit;
}
;
_.castableTypeMap$ = {6:1, 7:1, 10:1, 11:1, 12:1, 14:1};
function DialogBox$MouseHandler_0(this$0){
  this.this$0 = this$0;
}

function DialogBox$MouseHandler(){
}

_ = DialogBox$MouseHandler_0.prototype = DialogBox$MouseHandler.prototype = new Object_0;
_.getClass$ = function getClass_105(){
  return Lcom_google_gwt_user_client_ui_DialogBox$MouseHandler_2_classLit;
}
;
_.onMouseDown = function onMouseDown_0(event_0){
  $beginDragging(this.this$0, event_0);
}
;
_.castableTypeMap$ = {28:1, 29:1, 30:1, 31:1, 32:1, 33:1, 45:1};
_.this$0 = null;
function $setTextOrHtml(this$static, content_0, isHtml){
  isHtml?(this$static.element.innerHTML = content_0 || '' , undefined):(this$static.element.innerText = content_0 || '' , undefined);
  if (this$static.textDir != this$static.initialElementDir) {
    this$static.textDir = this$static.initialElementDir;
    setDirectionOnElement(this$static.element, this$static.initialElementDir);
  }
}

function DirectionalTextHelper_0(element){
  this.element = element;
  this.initialElementDir = getDirectionOnElement(element);
  this.textDir = this.initialElementDir;
}

function DirectionalTextHelper(){
}

_ = DirectionalTextHelper_0.prototype = DirectionalTextHelper.prototype = new Object_0;
_.getClass$ = function getClass_106(){
  return Lcom_google_gwt_user_client_ui_DirectionalTextHelper_2_classLit;
}
;
_.castableTypeMap$ = {};
_.element = null;
_.initialElementDir = null;
_.textDir = null;
function $clinit_20(){
  $clinit_20 = nullMethod;
  new HasHorizontalAlignment$HorizontalAlignmentConstant_0('center');
  new HasHorizontalAlignment$HorizontalAlignmentConstant_0('justify');
  ALIGN_LEFT = new HasHorizontalAlignment$HorizontalAlignmentConstant_0('left');
  ALIGN_RIGHT = new HasHorizontalAlignment$HorizontalAlignmentConstant_0('right');
  ALIGN_LOCALE_START = ALIGN_LEFT;
  ALIGN_DEFAULT = ALIGN_LOCALE_START;
}

var ALIGN_DEFAULT, ALIGN_LEFT, ALIGN_LOCALE_START, ALIGN_RIGHT;
function HasHorizontalAlignment$AutoHorizontalAlignmentConstant(){
}

_ = HasHorizontalAlignment$AutoHorizontalAlignmentConstant.prototype = new Object_0;
_.getClass$ = function getClass_107(){
  return Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$AutoHorizontalAlignmentConstant_2_classLit;
}
;
_.castableTypeMap$ = {};
function HasHorizontalAlignment$HorizontalAlignmentConstant_0(textAlignString){
  this.textAlignString = textAlignString;
}

function HasHorizontalAlignment$HorizontalAlignmentConstant(){
}

_ = HasHorizontalAlignment$HorizontalAlignmentConstant_0.prototype = HasHorizontalAlignment$HorizontalAlignmentConstant.prototype = new HasHorizontalAlignment$AutoHorizontalAlignmentConstant;
_.getClass$ = function getClass_108(){
  return Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_2_classLit;
}
;
_.castableTypeMap$ = {};
_.textAlignString = null;
function $clinit_21(){
  $clinit_21 = nullMethod;
  new HasVerticalAlignment$VerticalAlignmentConstant_0('bottom');
  new HasVerticalAlignment$VerticalAlignmentConstant_0('middle');
  ALIGN_TOP = new HasVerticalAlignment$VerticalAlignmentConstant_0('top');
}

var ALIGN_TOP;
function HasVerticalAlignment$VerticalAlignmentConstant_0(verticalAlignString){
  this.verticalAlignString = verticalAlignString;
}

function HasVerticalAlignment$VerticalAlignmentConstant(){
}

_ = HasVerticalAlignment$VerticalAlignmentConstant_0.prototype = HasVerticalAlignment$VerticalAlignmentConstant.prototype = new Object_0;
_.getClass$ = function getClass_109(){
  return Lcom_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_2_classLit;
}
;
_.castableTypeMap$ = {};
_.verticalAlignString = null;
function $createAlignedTd(this$static){
  var td;
  td = $createElement($doc, 'td');
  td['align'] = this$static.horzAlign.textAlignString;
  td.style['verticalAlign'] = this$static.vertAlign.verticalAlignString;
  return td;
}

function HorizontalPanel_0(){
  CellPanel_0.call(this);
  this.horzAlign = ($clinit_20() , ALIGN_DEFAULT);
  this.vertAlign = ($clinit_21() , ALIGN_TOP);
  this.tableRow = $createElement($doc, 'tr');
  this.body_0.appendChild(this.tableRow);
  this.table['cellSpacing'] = '0';
  this.table['cellPadding'] = '0';
}

function HorizontalPanel(){
}

_ = HorizontalPanel_0.prototype = HorizontalPanel.prototype = new CellPanel;
_.getClass$ = function getClass_110(){
  return Lcom_google_gwt_user_client_ui_HorizontalPanel_2_classLit;
}
;
_.remove = function remove_3(w){
  var removed, td, parent_0;
  td = (parent_0 = w.element.parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0);
  removed = $remove_0(this, w);
  removed && this.tableRow.removeChild(td);
  return removed;
}
;
_.castableTypeMap$ = {6:1, 7:1, 10:1, 11:1, 12:1, 14:1};
_.tableRow = null;
function $onResize(){
  var style;
  style = null.nullMethod();
  $getClientWidth($doc);
  $getClientHeight($doc);
  style['display'] = ($clinit_4() , 'none');
  null.nullMethod($clinit_5());
  null.nullMethod($clinit_5());
  $getScrollWidth($doc);
  $getScrollHeight($doc);
  null.nullMethod($clinit_5());
  null.nullMethod($clinit_5());
  style['display'] = 'block';
}

function PopupPanel$1_0(){
}

function PopupPanel$1(){
}

_ = PopupPanel$1_0.prototype = PopupPanel$1.prototype = new Object_0;
_.getClass$ = function getClass_111(){
  return Lcom_google_gwt_user_client_ui_PopupPanel$1_2_classLit;
}
;
_.onResize = function onResize_1(event_0){
  $onResize();
}
;
_.castableTypeMap$ = {35:1, 45:1};
function PopupPanel$3_0(this$0){
  this.this$0 = this$0;
}

function PopupPanel$3(){
}

_ = PopupPanel$3_0.prototype = PopupPanel$3.prototype = new Object_0;
_.getClass$ = function getClass_112(){
  return Lcom_google_gwt_user_client_ui_PopupPanel$3_2_classLit;
}
;
_.castableTypeMap$ = {42:1, 45:1};
_.this$0 = null;
function PopupPanel$4_0(this$0){
  this.this$0 = this$0;
}

function PopupPanel$4(){
}

_ = PopupPanel$4_0.prototype = PopupPanel$4.prototype = new Object_0;
_.getClass$ = function getClass_113(){
  return Lcom_google_gwt_user_client_ui_PopupPanel$4_2_classLit;
}
;
_.castableTypeMap$ = {36:1, 45:1};
_.this$0 = null;
function $maybeShowGlass(this$static){
  if (this$static.showing) {
    if (this$static.curPanel.isGlassEnabled) {
      $doc.body.appendChild(this$static.curPanel.glass);
      this$static.resizeRegistration = addResizeHandler(this$static.curPanel.glassResizer);
      $onResize();
      this$static.glassShowing = true;
    }
  }
   else if (this$static.glassShowing) {
    $doc.body.removeChild(this$static.curPanel.glass);
    $removeHandler(this$static.resizeRegistration.real);
    this$static.resizeRegistration = null;
    this$static.glassShowing = false;
  }
}

function $onComplete(this$static){
  if (!this$static.showing) {
    $maybeShowGlass(this$static);
    this$static.isUnloading || $remove_1(($clinit_22() , get()), this$static.curPanel);
  }
  this$static.curPanel.element.style['clip'] = 'rect(auto, auto, auto, auto)';
  this$static.curPanel.element.style['overflow'] = 'visible';
}

function $onInstantaneousRun(this$static){
  $maybeShowGlass(this$static);
  if (this$static.showing) {
    this$static.curPanel.element.style['position'] = 'absolute';
    this$static.curPanel.topPosition != -1 && $setPopupPosition(this$static.curPanel, this$static.curPanel.leftPosition, this$static.curPanel.topPosition);
    $add_1(($clinit_22() , get()), this$static.curPanel);
  }
   else {
    this$static.isUnloading || $remove_1(($clinit_22() , get()), this$static.curPanel);
  }
  this$static.curPanel.element.style['overflow'] = 'visible';
}

function $onUpdate(this$static, progress){
  var bottom, height, left, right, top_0, width;
  this$static.showing || (progress = 1 - progress);
  top_0 = 0;
  left = 0;
  right = 0;
  bottom = 0;
  height = ~~Math.max(Math.min(progress * this$static.offsetHeight, 2147483647), -2147483648);
  width = ~~Math.max(Math.min(progress * this$static.offsetWidth, 2147483647), -2147483648);
  switch (0) {
    case 2:
    case 0:
      top_0 = this$static.offsetHeight - height >> 1;
      left = this$static.offsetWidth - width >> 1;
      right = left + width;
      bottom = top_0 + height;
  }
  this$static.curPanel.element.style['clip'] = 'rect(' + top_0 + 'px, ' + right + 'px, ' + bottom + 'px, ' + left + 'px)';
}

function $setState(this$static, showing, isUnloading){
  var animate;
  this$static.isUnloading = isUnloading;
  $cancel(this$static);
  if (this$static.showTimer) {
    $cancel_0(this$static.showTimer);
    this$static.showTimer = null;
    $onComplete(this$static);
  }
  this$static.curPanel.showing = showing;
  $updateHandlers(this$static.curPanel);
  animate = !isUnloading && this$static.curPanel.isAnimationEnabled;
  this$static.showing = showing;
  if (animate) {
    if (showing) {
      $maybeShowGlass(this$static);
      this$static.curPanel.element.style['position'] = 'absolute';
      this$static.curPanel.topPosition != -1 && $setPopupPosition(this$static.curPanel, this$static.curPanel.leftPosition, this$static.curPanel.topPosition);
      this$static.curPanel.element.style['clip'] = 'rect(0px, 0px, 0px, 0px)';
      $add_1(($clinit_22() , get()), this$static.curPanel);
      this$static.showTimer = new PopupPanel$ResizeAnimation$1_0(this$static);
      $schedule(this$static.showTimer, 1);
    }
     else {
      $run(this$static, (new Date).getTime());
    }
  }
   else {
    $onInstantaneousRun(this$static);
  }
}

function PopupPanel$ResizeAnimation_0(panel){
  this.curPanel = panel;
}

function PopupPanel$ResizeAnimation(){
}

_ = PopupPanel$ResizeAnimation_0.prototype = PopupPanel$ResizeAnimation.prototype = new Animation;
_.getClass$ = function getClass_114(){
  return Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2_classLit;
}
;
_.castableTypeMap$ = {2:1};
_.curPanel = null;
_.glassShowing = false;
_.isUnloading = false;
_.offsetHeight = 0;
_.offsetWidth = -1;
_.resizeRegistration = null;
_.showTimer = null;
_.showing = false;
function PopupPanel$ResizeAnimation$1_0(this$1){
  $clinit_1();
  this.this$1 = this$1;
}

function PopupPanel$ResizeAnimation$1(){
}

_ = PopupPanel$ResizeAnimation$1_0.prototype = PopupPanel$ResizeAnimation$1.prototype = new Timer;
_.getClass$ = function getClass_115(){
  return Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation$1_2_classLit;
}
;
_.run = function run_0(){
  this.this$1.showTimer = null;
  $run(this.this$1, (new Date).getTime());
}
;
_.castableTypeMap$ = {43:1};
_.this$1 = null;
function $clinit_22(){
  $clinit_22 = nullMethod;
  maybeDetachCommand = new RootPanel$1_0;
  rootPanels = new HashMap_0;
  widgetsToDetach = new HashSet_0;
}

function RootPanel_0(elem){
  this.children_0 = new WidgetCollection_0(this);
  this.element = elem;
  $onAttach(this);
}

function detachNow(widget){
  $clinit_22();
  try {
    $onDetach(widget);
  }
   finally {
    $remove_4(widgetsToDetach.map, widget) != null;
  }
}

function detachWidgets(){
  $clinit_22();
  try {
    tryCommand(widgetsToDetach, maybeDetachCommand);
  }
   finally {
    $clearImpl(widgetsToDetach.map);
    $clearImpl(rootPanels);
  }
}

function get(){
  $clinit_22();
  var rp;
  rp = dynamicCast($get_0(rootPanels, null), 44);
  if (rp) {
    return rp;
  }
  rootPanels.size == 0 && addCloseHandler(new RootPanel$2_0);
  rp = new RootPanel$DefaultRootPanel_0;
  $put_0(rootPanels, null, rp);
  $add_5(widgetsToDetach, rp);
  return rp;
}

function RootPanel(){
}

_ = RootPanel.prototype = new AbsolutePanel;
_.getClass$ = function getClass_116(){
  return Lcom_google_gwt_user_client_ui_RootPanel_2_classLit;
}
;
_.castableTypeMap$ = {6:1, 7:1, 10:1, 11:1, 12:1, 14:1, 44:1};
var maybeDetachCommand, rootPanels, widgetsToDetach;
function RootPanel$1_0(){
}

function RootPanel$1(){
}

_ = RootPanel$1_0.prototype = RootPanel$1.prototype = new Object_0;
_.execute_0 = function execute_3(w){
  w.attached && $onDetach(w);
}
;
_.getClass$ = function getClass_117(){
  return Lcom_google_gwt_user_client_ui_RootPanel$1_2_classLit;
}
;
_.castableTypeMap$ = {};
function RootPanel$2_0(){
}

function RootPanel$2(){
}

_ = RootPanel$2_0.prototype = RootPanel$2.prototype = new Object_0;
_.getClass$ = function getClass_118(){
  return Lcom_google_gwt_user_client_ui_RootPanel$2_2_classLit;
}
;
_.onClose = function onClose_0(closeEvent){
  detachWidgets();
}
;
_.castableTypeMap$ = {34:1, 45:1};
function RootPanel$DefaultRootPanel_0(){
  RootPanel_0.call(this, $doc.body);
}

function RootPanel$DefaultRootPanel(){
}

_ = RootPanel$DefaultRootPanel_0.prototype = RootPanel$DefaultRootPanel.prototype = new RootPanel;
_.getClass$ = function getClass_119(){
  return Lcom_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_2_classLit;
}
;
_.castableTypeMap$ = {6:1, 7:1, 10:1, 11:1, 12:1, 14:1, 44:1};
function $next(this$static){
  if (!this$static.hasElement || !this$static.this$0.widget) {
    throw new NoSuchElementException_0;
  }
  this$static.hasElement = false;
  return this$static.returned = this$static.this$0.widget;
}

function SimplePanel$1_0(this$0){
  this.this$0 = this$0;
  this.hasElement = !!this.this$0.widget;
}

function SimplePanel$1(){
}

_ = SimplePanel$1_0.prototype = SimplePanel$1.prototype = new Object_0;
_.getClass$ = function getClass_120(){
  return Lcom_google_gwt_user_client_ui_SimplePanel$1_2_classLit;
}
;
_.hasNext = function hasNext(){
  return this.hasElement;
}
;
_.next = function next_0(){
  return $next(this);
}
;
_.remove_0 = function remove_4(){
  !!this.returned && this.this$0.remove(this.returned);
}
;
_.castableTypeMap$ = {};
_.returned = null;
_.this$0 = null;
function $selectAll(this$static){
  var length_0;
  length_0 = $getPropertyString(this$static.element, 'value').length;
  length_0 > 0 && $setSelectionRange(this$static, length_0);
}

function $setSelectionRange(this$static, length_0){
  if (!this$static.attached) {
    return;
  }
  if (length_0 < 0) {
    throw new IndexOutOfBoundsException_1('Length must be a positive integer. Length: ' + length_0);
  }
  if (length_0 > $getPropertyString(this$static.element, 'value').length) {
    throw new IndexOutOfBoundsException_1('From Index: 0  To Index: ' + length_0 + '  Text Length: ' + $getPropertyString(this$static.element, 'value').length);
  }
  $setSelectionRange_0(this$static.element, 0, length_0);
}

function $setText(this$static, text){
  this$static.element['value'] = text != null?text:'';
}

function ValueBoxBase_0(elem){
  this.element = elem;
  new AutoDirectionHandler_0;
}

function ValueBoxBase(){
}

_ = ValueBoxBase.prototype = new FocusWidget;
_.getClass$ = function getClass_121(){
  return Lcom_google_gwt_user_client_ui_ValueBoxBase_2_classLit;
}
;
_.onBrowserEvent = function onBrowserEvent_1(event_0){
  var type;
  type = $eventGetTypeInt(event_0.type);
  (type & 896) != 0?$onBrowserEvent(this, event_0):$onBrowserEvent(this, event_0);
}
;
_.onLoad = function onLoad_0(){
}
;
_.castableTypeMap$ = {6:1, 7:1, 10:1, 11:1, 12:1, 14:1};
function $clinit_23(){
  $clinit_23 = nullMethod;
  $clinit_24();
}

function TextBoxBase(){
}

_ = TextBoxBase.prototype = new ValueBoxBase;
_.getClass$ = function getClass_122(){
  return Lcom_google_gwt_user_client_ui_TextBoxBase_2_classLit;
}
;
_.castableTypeMap$ = {6:1, 7:1, 10:1, 11:1, 12:1, 14:1};
function TextArea_1(){
  $clinit_23();
  ValueBoxBase_0.call(this, $createElement($doc, 'textarea'), (!INSTANCE_1 && (INSTANCE_1 = new PassthroughRenderer_0) , !INSTANCE_0 && (INSTANCE_0 = new PassthroughParser_0)));
  this.element['className'] = 'gwt-TextArea';
}

function TextArea_0(){
}

_ = TextArea_1.prototype = TextArea_0.prototype = new TextBoxBase;
_.getClass$ = function getClass_123(){
  return Lcom_google_gwt_user_client_ui_TextArea_2_classLit;
}
;
_.castableTypeMap$ = {6:1, 7:1, 10:1, 11:1, 12:1, 14:1};
function $clinit_24(){
  $clinit_24 = nullMethod;
  CENTER = new ValueBoxBase$TextAlignment$1_0;
  JUSTIFY = new ValueBoxBase$TextAlignment$2_0;
  LEFT = new ValueBoxBase$TextAlignment$3_0;
  RIGHT = new ValueBoxBase$TextAlignment$4_0;
  $VALUES_2 = initValues(_3Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, {15:1}, 13, [CENTER, JUSTIFY, LEFT, RIGHT]);
}

function values_2(){
  $clinit_24();
  return $VALUES_2;
}

function ValueBoxBase$TextAlignment(){
}

_ = ValueBoxBase$TextAlignment.prototype = new Enum;
_.getClass$ = function getClass_124(){
  return Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit;
}
;
_.castableTypeMap$ = {13:1, 15:1, 17:1, 18:1};
var $VALUES_2, CENTER, JUSTIFY, LEFT, RIGHT;
function ValueBoxBase$TextAlignment$1_0(){
  this.name_0 = 'CENTER';
  this.ordinal = 0;
}

function ValueBoxBase$TextAlignment$1(){
}

_ = ValueBoxBase$TextAlignment$1_0.prototype = ValueBoxBase$TextAlignment$1.prototype = new ValueBoxBase$TextAlignment;
_.getClass$ = function getClass_125(){
  return Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$1_2_classLit;
}
;
_.castableTypeMap$ = {13:1, 15:1, 17:1, 18:1};
function ValueBoxBase$TextAlignment$2_0(){
  this.name_0 = 'JUSTIFY';
  this.ordinal = 1;
}

function ValueBoxBase$TextAlignment$2(){
}

_ = ValueBoxBase$TextAlignment$2_0.prototype = ValueBoxBase$TextAlignment$2.prototype = new ValueBoxBase$TextAlignment;
_.getClass$ = function getClass_126(){
  return Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$2_2_classLit;
}
;
_.castableTypeMap$ = {13:1, 15:1, 17:1, 18:1};
function ValueBoxBase$TextAlignment$3_0(){
  this.name_0 = 'LEFT';
  this.ordinal = 2;
}

function ValueBoxBase$TextAlignment$3(){
}

_ = ValueBoxBase$TextAlignment$3_0.prototype = ValueBoxBase$TextAlignment$3.prototype = new ValueBoxBase$TextAlignment;
_.getClass$ = function getClass_127(){
  return Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$3_2_classLit;
}
;
_.castableTypeMap$ = {13:1, 15:1, 17:1, 18:1};
function ValueBoxBase$TextAlignment$4_0(){
  this.name_0 = 'RIGHT';
  this.ordinal = 3;
}

function ValueBoxBase$TextAlignment$4(){
}

_ = ValueBoxBase$TextAlignment$4_0.prototype = ValueBoxBase$TextAlignment$4.prototype = new ValueBoxBase$TextAlignment;
_.getClass$ = function getClass_128(){
  return Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$4_2_classLit;
}
;
_.castableTypeMap$ = {13:1, 15:1, 17:1, 18:1};
function $add_2(this$static, w){
  var td, tr, td_0;
  tr = $createElement($doc, 'tr');
  td = (td_0 = $createElement($doc, 'td') , td_0['align'] = this$static.horzAlign.textAlignString , td_0.style['verticalAlign'] = this$static.vertAlign.verticalAlignString , td_0);
  tr.appendChild(td);
  this$static.body_0.appendChild(tr);
  $removeFromParent(w);
  $add_3(this$static.children_0, w);
  td.appendChild(w.element);
  $setParent(w, this$static);
}

function VerticalPanel_0(){
  CellPanel_0.call(this);
  this.horzAlign = ($clinit_20() , ALIGN_DEFAULT);
  this.vertAlign = ($clinit_21() , ALIGN_TOP);
  this.table['cellSpacing'] = '0';
  this.table['cellPadding'] = '0';
}

function VerticalPanel(){
}

_ = VerticalPanel_0.prototype = VerticalPanel.prototype = new CellPanel;
_.getClass$ = function getClass_129(){
  return Lcom_google_gwt_user_client_ui_VerticalPanel_2_classLit;
}
;
_.remove = function remove_5(w){
  var removed, td, parent_0;
  td = (parent_0 = w.element.parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0);
  removed = $remove_0(this, w);
  removed && this.body_0.removeChild($getParentElement(td));
  return removed;
}
;
_.castableTypeMap$ = {6:1, 7:1, 10:1, 11:1, 12:1, 14:1};
function $add_3(this$static, w){
  $insert(this$static, w, this$static.size);
}

function $indexOf(this$static, w){
  var i;
  for (i = 0; i < this$static.size; ++i) {
    if (this$static.array[i] == w) {
      return i;
    }
  }
  return -1;
}

function $insert(this$static, w, beforeIndex){
  var i, newArray;
  if (beforeIndex < 0 || beforeIndex > this$static.size) {
    throw new IndexOutOfBoundsException_0;
  }
  if (this$static.size == this$static.array.length) {
    newArray = initDim(_3Lcom_google_gwt_user_client_ui_Widget_2_classLit, {15:1}, 14, this$static.array.length * 2, 0);
    for (i = 0; i < this$static.array.length; ++i) {
      setCheck(newArray, i, this$static.array[i]);
    }
    this$static.array = newArray;
  }
  ++this$static.size;
  for (i = this$static.size - 1; i > beforeIndex; --i) {
    setCheck(this$static.array, i, this$static.array[i - 1]);
  }
  setCheck(this$static.array, beforeIndex, w);
}

function $remove_2(this$static, index){
  var i;
  if (index < 0 || index >= this$static.size) {
    throw new IndexOutOfBoundsException_0;
  }
  --this$static.size;
  for (i = index; i < this$static.size; ++i) {
    setCheck(this$static.array, i, this$static.array[i + 1]);
  }
  setCheck(this$static.array, this$static.size, null);
}

function $remove_3(this$static, w){
  var index;
  index = $indexOf(this$static, w);
  if (index == -1) {
    throw new NoSuchElementException_0;
  }
  $remove_2(this$static, index);
}

function WidgetCollection_0(parent_0){
  this.parent_0 = parent_0;
  this.array = initDim(_3Lcom_google_gwt_user_client_ui_Widget_2_classLit, {15:1}, 14, 4, 0);
}

function WidgetCollection(){
}

_ = WidgetCollection_0.prototype = WidgetCollection.prototype = new Object_0;
_.getClass$ = function getClass_130(){
  return Lcom_google_gwt_user_client_ui_WidgetCollection_2_classLit;
}
;
_.iterator = function iterator_2(){
  return new WidgetCollection$WidgetIterator_0(this);
}
;
_.castableTypeMap$ = {};
_.array = null;
_.parent_0 = null;
_.size = 0;
function $next_0(this$static){
  if (this$static.index >= this$static.this$0.size) {
    throw new NoSuchElementException_0;
  }
  return this$static.this$0.array[++this$static.index];
}

function WidgetCollection$WidgetIterator_0(this$0){
  this.this$0 = this$0;
}

function WidgetCollection$WidgetIterator(){
}

_ = WidgetCollection$WidgetIterator_0.prototype = WidgetCollection$WidgetIterator.prototype = new Object_0;
_.getClass$ = function getClass_131(){
  return Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2_classLit;
}
;
_.hasNext = function hasNext_0(){
  return this.index < this.this$0.size - 1;
}
;
_.next = function next_1(){
  return $next_0(this);
}
;
_.remove_0 = function remove_6(){
  if (this.index < 0 || this.index >= this.this$0.size) {
    throw new IllegalStateException_0;
  }
  this.this$0.parent_0.remove(this.this$0.array[this.index--]);
}
;
_.castableTypeMap$ = {};
_.index = -1;
_.this$0 = null;
function $focus(elem){
  try {
    elem.focus();
  }
   catch (e) {
    if (!elem || !elem.focus) {
      throw e;
    }
  }
}

function $setSelectionRange_0(elem, pos, length_0){
  try {
    var tr = elem.createTextRange();
    var newlinesWithin = elem.value.substr(pos, length_0).match(/(\r\n)/gi);
    newlinesWithin != null && (length_0 -= newlinesWithin.length);
    var newlinesBefore = elem.value.substring(0, pos).match(/(\r\n)/gi);
    newlinesBefore != null && (pos -= newlinesBefore.length);
    tr.collapse(true);
    tr.moveStart('character', pos);
    tr.moveEnd('character', length_0);
    tr.select();
  }
   catch (e) {
  }
}

function $setOnReadyStateChange(this$static, handler){
  var _this = this$static;
  this$static.onreadystatechange = $entry(function(){
    handler.onReadyStateChange(_this);
  }
  );
}

function create(){
  if ($wnd.XMLHttpRequest) {
    return new $wnd.XMLHttpRequest;
  }
   else {
    try {
      return new $wnd.ActiveXObject('MSXML2.XMLHTTP.3.0');
    }
     catch (e) {
      return new $wnd.ActiveXObject('Microsoft.XMLHTTP');
    }
  }
}

function $removeHandler(this$static){
  this$static.this$0.doRemove(this$static.val$type, this$static.val$source, this$static.val$handler);
}

function SimpleEventBus$1_0(this$0, val$type, val$handler){
  this.this$0 = this$0;
  this.val$type = val$type;
  this.val$source = null;
  this.val$handler = val$handler;
}

function SimpleEventBus$1(){
}

_ = SimpleEventBus$1_0.prototype = SimpleEventBus$1.prototype = new Object_0;
_.getClass$ = function getClass_132(){
  return Lcom_google_web_bindery_event_shared_SimpleEventBus$1_2_classLit;
}
;
_.castableTypeMap$ = {};
_.this$0 = null;
_.val$handler = null;
_.val$source = null;
_.val$type = null;
function SimpleEventBus$2_0(this$0, val$type, val$handler){
  this.this$0 = this$0;
  this.val$type = val$type;
  this.val$handler = val$handler;
}

function SimpleEventBus$2(){
}

_ = SimpleEventBus$2_0.prototype = SimpleEventBus$2.prototype = new Object_0;
_.execute = function execute_4(){
  $doAddNow(this.this$0, this.val$type, this.val$handler);
}
;
_.getClass$ = function getClass_133(){
  return Lcom_google_web_bindery_event_shared_SimpleEventBus$2_2_classLit;
}
;
_.castableTypeMap$ = {48:1};
_.this$0 = null;
_.val$handler = null;
_.val$type = null;
function SimpleEventBus$3_0(this$0, val$type, val$handler){
  this.this$0 = this$0;
  this.val$type = val$type;
  this.val$handler = val$handler;
}

function SimpleEventBus$3(){
}

_ = SimpleEventBus$3_0.prototype = SimpleEventBus$3.prototype = new Object_0;
_.execute = function execute_5(){
  $doRemoveNow(this.this$0, this.val$type, this.val$handler);
}
;
_.getClass$ = function getClass_134(){
  return Lcom_google_web_bindery_event_shared_SimpleEventBus$3_2_classLit;
}
;
_.castableTypeMap$ = {48:1};
_.this$0 = null;
_.val$handler = null;
_.val$type = null;
function ArrayStoreException_0(){
  $fillInStackTrace();
}

function ArrayStoreException(){
}

_ = ArrayStoreException_0.prototype = ArrayStoreException.prototype = new RuntimeException;
_.getClass$ = function getClass_135(){
  return Ljava_lang_ArrayStoreException_2_classLit;
}
;
_.castableTypeMap$ = {15:1, 20:1, 22:1, 25:1};
function $clinit_25(){
  $clinit_25 = nullMethod;
  new Boolean_1(false);
  new Boolean_1(true);
}

function Boolean_1(value){
  this.value_0 = value;
}

function Boolean_0(){
}

_ = Boolean_1.prototype = Boolean_0.prototype = new Object_0;
_.equals$ = function equals_7(o){
  return o != null && o.castableTypeMap$ && !!o.castableTypeMap$[50] && dynamicCast(o, 50).value_0 == this.value_0;
}
;
_.getClass$ = function getClass_136(){
  return Ljava_lang_Boolean_2_classLit;
}
;
_.hashCode$ = function hashCode_7(){
  return this.value_0?1231:1237;
}
;
_.toString$ = function toString_14(){
  return this.value_0?'true':'false';
}
;
_.castableTypeMap$ = {15:1, 17:1, 50:1};
_.value_0 = false;
function Class_0(){
}

function createForArray(packageName, className){
  var clazz;
  clazz = new Class_0;
  clazz.typeName = packageName + className;
  clazz.modifiers = 4;
  return clazz;
}

function createForClass(packageName, className){
  var clazz;
  clazz = new Class_0;
  clazz.typeName = packageName + className;
  return clazz;
}

function createForEnum(packageName, className, enumConstantsFunc){
  var clazz;
  clazz = new Class_0;
  clazz.typeName = packageName + className;
  clazz.modifiers = enumConstantsFunc?8:0;
  return clazz;
}

function Class(){
}

_ = Class_0.prototype = Class.prototype = new Object_0;
_.getClass$ = function getClass_137(){
  return Ljava_lang_Class_2_classLit;
}
;
_.toString$ = function toString_15(){
  return ((this.modifiers & 2) != 0?'interface ':(this.modifiers & 1) != 0?'':'class ') + this.typeName;
}
;
_.castableTypeMap$ = {};
_.modifiers = 0;
_.typeName = null;
function ClassCastException_0(){
  $fillInStackTrace();
}

function ClassCastException(){
}

_ = ClassCastException_0.prototype = ClassCastException.prototype = new RuntimeException;
_.getClass$ = function getClass_138(){
  return Ljava_lang_ClassCastException_2_classLit;
}
;
_.castableTypeMap$ = {15:1, 20:1, 22:1, 25:1};
function Number_0(){
}

_ = Number_0.prototype = new Object_0;
_.getClass$ = function getClass_139(){
  return Ljava_lang_Number_2_classLit;
}
;
_.castableTypeMap$ = {15:1};
function Double_0(value){
  this.value_0 = value;
}

function Double(){
}

_ = Double_0.prototype = Double.prototype = new Number_0;
_.equals$ = function equals_8(o){
  return o != null && o.castableTypeMap$ && !!o.castableTypeMap$[51] && dynamicCast(o, 51).value_0 == this.value_0;
}
;
_.getClass$ = function getClass_140(){
  return Ljava_lang_Double_2_classLit;
}
;
_.hashCode$ = function hashCode_8(){
  return ~~Math.max(Math.min(this.value_0, 2147483647), -2147483648);
}
;
_.toString$ = function toString_16(){
  return '' + this.value_0;
}
;
_.castableTypeMap$ = {15:1, 17:1, 51:1};
_.value_0 = 0;
function IllegalArgumentException_0(message){
  $fillInStackTrace();
  this.detailMessage = message;
}

function IllegalArgumentException(){
}

_ = IllegalArgumentException_0.prototype = IllegalArgumentException.prototype = new RuntimeException;
_.getClass$ = function getClass_141(){
  return Ljava_lang_IllegalArgumentException_2_classLit;
}
;
_.castableTypeMap$ = {15:1, 20:1, 22:1, 25:1};
function IllegalStateException_0(){
  $fillInStackTrace();
}

function IllegalStateException_1(s){
  $fillInStackTrace();
  this.detailMessage = s;
}

function IllegalStateException(){
}

_ = IllegalStateException_1.prototype = IllegalStateException_0.prototype = IllegalStateException.prototype = new RuntimeException;
_.getClass$ = function getClass_142(){
  return Ljava_lang_IllegalStateException_2_classLit;
}
;
_.castableTypeMap$ = {15:1, 20:1, 22:1, 25:1};
function IndexOutOfBoundsException_0(){
  $fillInStackTrace();
}

function IndexOutOfBoundsException_1(message){
  $fillInStackTrace();
  this.detailMessage = message;
}

function IndexOutOfBoundsException(){
}

_ = IndexOutOfBoundsException_1.prototype = IndexOutOfBoundsException_0.prototype = IndexOutOfBoundsException.prototype = new RuntimeException;
_.getClass$ = function getClass_143(){
  return Ljava_lang_IndexOutOfBoundsException_2_classLit;
}
;
_.castableTypeMap$ = {15:1, 20:1, 22:1, 25:1};
function toPowerOfTwoString(value){
  var buf, digits, pos;
  buf = initDim(_3C_classLit, {15:1}, -1, 8, 1);
  digits = ($clinit_26() , digits_0);
  pos = 7;
  if (value >= 0) {
    while (value > 15) {
      buf[pos--] = digits[value & 15];
      value >>= 4;
    }
  }
   else {
    while (pos > 0) {
      buf[pos--] = digits[value & 15];
      value >>= 4;
    }
  }
  buf[pos] = digits[value & 15];
  return __valueOf(buf, pos, 8);
}

function max(x){
  return x > 0?x:0;
}

function NullPointerException_0(){
  $fillInStackTrace();
}

function NullPointerException_1(message){
  $fillInStackTrace();
  this.detailMessage = message;
}

function NullPointerException(){
}

_ = NullPointerException_1.prototype = NullPointerException_0.prototype = NullPointerException.prototype = new RuntimeException;
_.getClass$ = function getClass_144(){
  return Ljava_lang_NullPointerException_2_classLit;
}
;
_.castableTypeMap$ = {15:1, 20:1, 22:1, 25:1};
function $clinit_26(){
  $clinit_26 = nullMethod;
  digits_0 = initValues(_3C_classLit, {15:1}, -1, [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122]);
}

var digits_0;
function StackTraceElement_0(methodName){
  this.className_0 = 'Unknown';
  this.methodName = methodName;
  this.lineNumber = -1;
}

function StackTraceElement(){
}

_ = StackTraceElement_0.prototype = StackTraceElement.prototype = new Object_0;
_.getClass$ = function getClass_145(){
  return Ljava_lang_StackTraceElement_2_classLit;
}
;
_.toString$ = function toString_17(){
  return this.className_0 + '.' + this.methodName + '(Unknown Source' + (this.lineNumber >= 0?':' + this.lineNumber:'') + ')';
}
;
_.castableTypeMap$ = {15:1, 19:1};
_.className_0 = null;
_.lineNumber = 0;
_.methodName = null;
function $equals_0(this$static, other){
  if (!(other != null && other.castableTypeMap$ && !!other.castableTypeMap$[1])) {
    return false;
  }
  return String(this$static) == other;
}

function $equalsIgnoreCase(this$static, other){
  if (other == null)
    return false;
  return this$static == other || this$static.toLowerCase() == other.toLowerCase();
}

function $substring(this$static, beginIndex){
  return this$static.substr(beginIndex, this$static.length - beginIndex);
}

function $trim(this$static){
  if (this$static.length == 0 || this$static[0] > ' ' && this$static[this$static.length - 1] > ' ') {
    return this$static;
  }
  var r1 = this$static.replace(/^(\s*)/, '');
  var r2 = r1.replace(/\s*$/, '');
  return r2;
}

function __valueOf(x, start, end){
  x = x.slice(start, end);
  return String.fromCharCode.apply(null, x);
}

_ = String.prototype;
_.equals$ = function equals_9(other){
  return $equals_0(this, other);
}
;
_.getClass$ = function getClass_146(){
  return Ljava_lang_String_2_classLit;
}
;
_.hashCode$ = function hashCode_9(){
  return getHashCode_0(this);
}
;
_.toString$ = function toString_18(){
  return this;
}
;
_.castableTypeMap$ = {1:1, 15:1, 16:1, 17:1};
function $clinit_27(){
  $clinit_27 = nullMethod;
  back_0 = {};
  front = {};
}

function compute(str){
  var hashCode, i, n, nBatch;
  hashCode = 0;
  n = str.length;
  nBatch = n - 4;
  i = 0;
  while (i < nBatch) {
    hashCode = str.charCodeAt(i + 3) + 31 * (str.charCodeAt(i + 2) + 31 * (str.charCodeAt(i + 1) + 31 * (str.charCodeAt(i) + 31 * hashCode))) | 0;
    i += 4;
  }
  while (i < n) {
    hashCode = hashCode * 31 + str.charCodeAt(i++);
  }
  return hashCode | 0;
}

function getHashCode_0(str){
  $clinit_27();
  var key = ':' + str;
  var result = front[key];
  if (result != null) {
    return result;
  }
  result = back_0[key];
  result == null && (result = compute(str));
  increment();
  return front[key] = result;
}

function increment(){
  if (count == 256) {
    back_0 = front;
    front = {};
    count = 0;
  }
  ++count;
}

var back_0, count = 0, front;
function $append_0(this$static, x){
  $appendNonNull(this$static.data_0, '' + x);
  return this$static;
}

function $append_1(this$static, x){
  $append(this$static.data_0, x);
  return this$static;
}

function StringBuffer_0(){
  var array;
  this.data_0 = (array = [] , array.explicitLength = 0 , array);
}

function StringBuffer(){
}

_ = StringBuffer_0.prototype = StringBuffer.prototype = new Object_0;
_.getClass$ = function getClass_147(){
  return Ljava_lang_StringBuffer_2_classLit;
}
;
_.toString$ = function toString_19(){
  return $toString(this.data_0);
}
;
_.castableTypeMap$ = {16:1};
function $append_2(this$static, x){
  $append(this$static.data_0, x);
  return this$static;
}

function StringBuilder_0(){
  var array;
  this.data_0 = (array = [] , array.explicitLength = 0 , array);
}

function StringBuilder(){
}

_ = StringBuilder_0.prototype = StringBuilder.prototype = new Object_0;
_.getClass$ = function getClass_148(){
  return Ljava_lang_StringBuilder_2_classLit;
}
;
_.toString$ = function toString_20(){
  return $toString(this.data_0);
}
;
_.castableTypeMap$ = {16:1};
function UnsupportedOperationException_0(message){
  $fillInStackTrace();
  this.detailMessage = message;
}

function UnsupportedOperationException(){
}

_ = UnsupportedOperationException_0.prototype = UnsupportedOperationException.prototype = new RuntimeException;
_.getClass$ = function getClass_149(){
  return Ljava_lang_UnsupportedOperationException_2_classLit;
}
;
_.castableTypeMap$ = {15:1, 20:1, 22:1, 25:1};
function $advanceToFind(iter, o){
  var t;
  while (iter.hasNext()) {
    t = iter.next();
    if (o == null?t == null:equals__devirtual$(o, t)) {
      return iter;
    }
  }
  return null;
}

function $toString_1(this$static){
  var comma, iter, sb, value;
  sb = new StringBuffer_0;
  comma = null;
  $append(sb.data_0, '[');
  iter = this$static.iterator();
  while (iter.hasNext()) {
    comma != null?($append(sb.data_0, comma) , sb):(comma = ', ');
    value = iter.next();
    $append(sb.data_0, value === this$static?'(this Collection)':'' + value);
  }
  $append(sb.data_0, ']');
  return $toString(sb.data_0);
}

function AbstractCollection(){
}

_ = AbstractCollection.prototype = new Object_0;
_.add = function add_0(o){
  throw new UnsupportedOperationException_0('Add not supported on this collection');
}
;
_.contains_0 = function contains(o){
  var iter;
  iter = $advanceToFind(this.iterator(), o);
  return !!iter;
}
;
_.getClass$ = function getClass_150(){
  return Ljava_util_AbstractCollection_2_classLit;
}
;
_.isEmpty = function isEmpty(){
  return this.size_0() == 0;
}
;
_.remove_1 = function remove_7(o){
  var iter;
  iter = $advanceToFind(this.iterator(), o);
  if (iter) {
    iter.remove_0();
    return true;
  }
   else {
    return false;
  }
}
;
_.toArray = function toArray(a){
  var i, it, size;
  size = this.size_0();
  a.length < size && (a = createFrom(a, size));
  it = this.iterator();
  for (i = 0; i < size; ++i) {
    setCheck(a, i, it.next());
  }
  a.length > size && setCheck(a, size, null);
  return a;
}
;
_.toString$ = function toString_21(){
  return $toString_1(this);
}
;
_.castableTypeMap$ = {};
function $keySet(this$static){
  var entrySet;
  entrySet = new AbstractHashMap$EntrySet_0(this$static);
  return new AbstractMap$1_0(this$static, entrySet);
}

function AbstractMap(){
}

_ = AbstractMap.prototype = new Object_0;
_.equals$ = function equals_10(obj){
  var entry, entry$iterator, otherKey, otherMap, otherValue;
  if (obj === this) {
    return true;
  }
  if (!(obj != null && obj.castableTypeMap$ && !!obj.castableTypeMap$[46])) {
    return false;
  }
  otherMap = dynamicCast(obj, 46);
  if (this.size != otherMap.size) {
    return false;
  }
  for (entry$iterator = new AbstractHashMap$EntrySetIterator_0((new AbstractHashMap$EntrySet_0(otherMap)).this$0); $hasNext(entry$iterator.iter);) {
    entry = entry$iterator.last = dynamicCast($next_2(entry$iterator.iter), 52);
    otherKey = entry.getKey();
    otherValue = entry.getValue();
    if (!(otherKey == null?this.nullSlotLive:otherKey != null && otherKey.castableTypeMap$ && !!otherKey.castableTypeMap$[1]?':' + dynamicCast(otherKey, 1) in this.stringMap:$hasHashValue(this, otherKey, ~~hashCode__devirtual$(otherKey)))) {
      return false;
    }
    if (!equalsWithNullCheck(otherValue, otherKey == null?this.nullSlot:otherKey != null && otherKey.castableTypeMap$ && !!otherKey.castableTypeMap$[1]?this.stringMap[':' + dynamicCast(otherKey, 1)]:$getHashValue(this, otherKey, ~~hashCode__devirtual$(otherKey)))) {
      return false;
    }
  }
  return true;
}
;
_.getClass$ = function getClass_151(){
  return Ljava_util_AbstractMap_2_classLit;
}
;
_.hashCode$ = function hashCode_10(){
  var entry, entry$iterator, hashCode;
  hashCode = 0;
  for (entry$iterator = new AbstractHashMap$EntrySetIterator_0((new AbstractHashMap$EntrySet_0(this)).this$0); $hasNext(entry$iterator.iter);) {
    entry = entry$iterator.last = dynamicCast($next_2(entry$iterator.iter), 52);
    hashCode += entry.hashCode$();
    hashCode = ~~hashCode;
  }
  return hashCode;
}
;
_.toString$ = function toString_22(){
  var comma, entry, iter, s;
  s = '{';
  comma = false;
  for (iter = new AbstractHashMap$EntrySetIterator_0((new AbstractHashMap$EntrySet_0(this)).this$0); $hasNext(iter.iter);) {
    entry = iter.last = dynamicCast($next_2(iter.iter), 52);
    comma?(s += ', '):(comma = true);
    s += '' + entry.getKey();
    s += '=';
    s += '' + entry.getValue();
  }
  return s + '}';
}
;
_.castableTypeMap$ = {46:1};
function $addAllHashEntries(this$static, dest){
  var hashCodeMap = this$static.hashCodeMap;
  for (var hashCode in hashCodeMap) {
    var hashCodeInt = parseInt(hashCode, 10);
    if (hashCode == hashCodeInt) {
      var array = hashCodeMap[hashCodeInt];
      for (var i = 0, c = array.length; i < c; ++i) {
        dest.add(array[i]);
      }
    }
  }
}

function $addAllStringEntries(this$static, dest){
  var stringMap = this$static.stringMap;
  for (var key in stringMap) {
    if (key.charCodeAt(0) == 58) {
      var entry = new AbstractHashMap$MapEntryString_0(this$static, key.substring(1));
      dest.add(entry);
    }
  }
}

function $clearImpl(this$static){
  this$static.hashCodeMap = [];
  this$static.stringMap = {};
  this$static.nullSlotLive = false;
  this$static.nullSlot = null;
  this$static.size = 0;
}

function $containsKey(this$static, key){
  return key == null?this$static.nullSlotLive:key != null && key.castableTypeMap$ && !!key.castableTypeMap$[1]?$hasStringValue(this$static, dynamicCast(key, 1)):$hasHashValue(this$static, key, ~~hashCode__devirtual$(key));
}

function $get_0(this$static, key){
  return key == null?this$static.nullSlot:key != null && key.castableTypeMap$ && !!key.castableTypeMap$[1]?this$static.stringMap[':' + dynamicCast(key, 1)]:$getHashValue(this$static, key, ~~hashCode__devirtual$(key));
}

function $getHashValue(this$static, key, hashCode){
  var array = this$static.hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey();
      if (this$static.equalsBridge(key, entryKey)) {
        return entry.getValue();
      }
    }
  }
  return null;
}

function $hasHashValue(this$static, key, hashCode){
  var array = this$static.hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey();
      if (this$static.equalsBridge(key, entryKey)) {
        return true;
      }
    }
  }
  return false;
}

function $hasStringValue(this$static, key){
  return ':' + key in this$static.stringMap;
}

function $put_0(this$static, key, value){
  return key == null?$putNullSlot(this$static, value):key != null && key.castableTypeMap$ && !!key.castableTypeMap$[1]?$putStringValue(this$static, dynamicCast(key, 1), value):$putHashValue(this$static, key, value, ~~hashCode__devirtual$(key));
}

function $putHashValue(this$static, key, value, hashCode){
  var array = this$static.hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey();
      if (this$static.equalsBridge(key, entryKey)) {
        var previous = entry.getValue();
        entry.setValue(value);
        return previous;
      }
    }
  }
   else {
    array = this$static.hashCodeMap[hashCode] = [];
  }
  var entry = new MapEntryImpl_0(key, value);
  array.push(entry);
  ++this$static.size;
  return null;
}

function $putNullSlot(this$static, value){
  var result;
  result = this$static.nullSlot;
  this$static.nullSlot = value;
  if (!this$static.nullSlotLive) {
    this$static.nullSlotLive = true;
    ++this$static.size;
  }
  return result;
}

function $putStringValue(this$static, key, value){
  var result, stringMap = this$static.stringMap;
  key = ':' + key;
  key in stringMap?(result = stringMap[key]):++this$static.size;
  stringMap[key] = value;
  return result;
}

function $remove_4(this$static, key){
  return key == null?$removeNullSlot(this$static):key != null && key.castableTypeMap$ && !!key.castableTypeMap$[1]?$removeStringValue(this$static, dynamicCast(key, 1)):$removeHashValue(this$static, key, ~~hashCode__devirtual$(key));
}

function $removeHashValue(this$static, key, hashCode){
  var array = this$static.hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey();
      if (this$static.equalsBridge(key, entryKey)) {
        array.length == 1?delete this$static.hashCodeMap[hashCode]:array.splice(i, 1);
        --this$static.size;
        return entry.getValue();
      }
    }
  }
  return null;
}

function $removeNullSlot(this$static){
  var result;
  result = this$static.nullSlot;
  this$static.nullSlot = null;
  if (this$static.nullSlotLive) {
    this$static.nullSlotLive = false;
    --this$static.size;
  }
  return result;
}

function $removeStringValue(this$static, key){
  var result, stringMap = this$static.stringMap;
  key = ':' + key;
  if (key in stringMap) {
    result = stringMap[key];
    --this$static.size;
    delete stringMap[key];
  }
  return result;
}

function AbstractHashMap(){
}

_ = AbstractHashMap.prototype = new AbstractMap;
_.equalsBridge = function equalsBridge(value1, value2){
  return (value1 == null?null:value1) === (value2 == null?null:value2) || value1 != null && equals__devirtual$(value1, value2);
}
;
_.getClass$ = function getClass_152(){
  return Ljava_util_AbstractHashMap_2_classLit;
}
;
_.castableTypeMap$ = {46:1};
_.hashCodeMap = null;
_.nullSlot = null;
_.nullSlotLive = false;
_.size = 0;
_.stringMap = null;
function AbstractSet(){
}

_ = AbstractSet.prototype = new AbstractCollection;
_.equals$ = function equals_11(o){
  var iter, other, otherItem;
  if (o === this) {
    return true;
  }
  if (!(o != null && o.castableTypeMap$ && !!o.castableTypeMap$[53])) {
    return false;
  }
  other = dynamicCast(o, 53);
  if (other.size_0() != this.size_0()) {
    return false;
  }
  for (iter = other.iterator(); iter.hasNext();) {
    otherItem = iter.next();
    if (!this.contains_0(otherItem)) {
      return false;
    }
  }
  return true;
}
;
_.getClass$ = function getClass_153(){
  return Ljava_util_AbstractSet_2_classLit;
}
;
_.hashCode$ = function hashCode_11(){
  var hashCode, iter, next;
  hashCode = 0;
  for (iter = this.iterator(); iter.hasNext();) {
    next = iter.next();
    if (next != null) {
      hashCode += hashCode__devirtual$(next);
      hashCode = ~~hashCode;
    }
  }
  return hashCode;
}
;
_.castableTypeMap$ = {53:1};
function $contains(this$static, o){
  var entry, key, value;
  if (o != null && o.castableTypeMap$ && !!o.castableTypeMap$[52]) {
    entry = dynamicCast(o, 52);
    key = entry.getKey();
    if ($containsKey(this$static.this$0, key)) {
      value = $get_0(this$static.this$0, key);
      return $equals_1(entry.getValue(), value);
    }
  }
  return false;
}

function AbstractHashMap$EntrySet_0(this$0){
  this.this$0 = this$0;
}

function AbstractHashMap$EntrySet(){
}

_ = AbstractHashMap$EntrySet_0.prototype = AbstractHashMap$EntrySet.prototype = new AbstractSet;
_.contains_0 = function contains_0(o){
  return $contains(this, o);
}
;
_.getClass$ = function getClass_154(){
  return Ljava_util_AbstractHashMap$EntrySet_2_classLit;
}
;
_.iterator = function iterator_3(){
  return new AbstractHashMap$EntrySetIterator_0(this.this$0);
}
;
_.remove_1 = function remove_8(entry){
  var key;
  if ($contains(this, entry)) {
    key = dynamicCast(entry, 52).getKey();
    $remove_4(this.this$0, key);
    return true;
  }
  return false;
}
;
_.size_0 = function size_0(){
  return this.this$0.size;
}
;
_.castableTypeMap$ = {53:1};
_.this$0 = null;
function $next_1(this$static){
  return this$static.last = dynamicCast($next_2(this$static.iter), 52);
}

function $remove_5(this$static){
  if (!this$static.last) {
    throw new IllegalStateException_1('Must call next() before remove().');
  }
   else {
    $remove_6(this$static.iter);
    $remove_4(this$static.this$0, this$static.last.getKey());
    this$static.last = null;
  }
}

function AbstractHashMap$EntrySetIterator_0(this$0){
  var list;
  this.this$0 = this$0;
  list = new ArrayList_0;
  this$0.nullSlotLive && $add_4(list, new AbstractHashMap$MapEntryNull_0(this$0));
  $addAllStringEntries(this$0, list);
  $addAllHashEntries(this$0, list);
  this.iter = new AbstractList$IteratorImpl_0(list);
}

function AbstractHashMap$EntrySetIterator(){
}

_ = AbstractHashMap$EntrySetIterator_0.prototype = AbstractHashMap$EntrySetIterator.prototype = new Object_0;
_.getClass$ = function getClass_155(){
  return Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit;
}
;
_.hasNext = function hasNext_1(){
  return $hasNext(this.iter);
}
;
_.next = function next_2(){
  return this.last = dynamicCast($next_2(this.iter), 52);
}
;
_.remove_0 = function remove_9(){
  $remove_5(this);
}
;
_.castableTypeMap$ = {};
_.iter = null;
_.last = null;
_.this$0 = null;
function AbstractMapEntry(){
}

_ = AbstractMapEntry.prototype = new Object_0;
_.equals$ = function equals_12(other){
  var entry;
  if (other != null && other.castableTypeMap$ && !!other.castableTypeMap$[52]) {
    entry = dynamicCast(other, 52);
    if (equalsWithNullCheck(this.getKey(), entry.getKey()) && equalsWithNullCheck(this.getValue(), entry.getValue())) {
      return true;
    }
  }
  return false;
}
;
_.getClass$ = function getClass_156(){
  return Ljava_util_AbstractMapEntry_2_classLit;
}
;
_.hashCode$ = function hashCode_12(){
  var keyHash, valueHash;
  keyHash = 0;
  valueHash = 0;
  this.getKey() != null && (keyHash = hashCode__devirtual$(this.getKey()));
  this.getValue() != null && (valueHash = hashCode__devirtual$(this.getValue()));
  return keyHash ^ valueHash;
}
;
_.toString$ = function toString_23(){
  return this.getKey() + '=' + this.getValue();
}
;
_.castableTypeMap$ = {52:1};
function AbstractHashMap$MapEntryNull_0(this$0){
  this.this$0 = this$0;
}

function AbstractHashMap$MapEntryNull(){
}

_ = AbstractHashMap$MapEntryNull_0.prototype = AbstractHashMap$MapEntryNull.prototype = new AbstractMapEntry;
_.getClass$ = function getClass_157(){
  return Ljava_util_AbstractHashMap$MapEntryNull_2_classLit;
}
;
_.getKey = function getKey(){
  return null;
}
;
_.getValue = function getValue(){
  return this.this$0.nullSlot;
}
;
_.setValue = function setValue(object){
  return $putNullSlot(this.this$0, object);
}
;
_.castableTypeMap$ = {52:1};
_.this$0 = null;
function AbstractHashMap$MapEntryString_0(this$0, key){
  this.this$0 = this$0;
  this.key = key;
}

function AbstractHashMap$MapEntryString(){
}

_ = AbstractHashMap$MapEntryString_0.prototype = AbstractHashMap$MapEntryString.prototype = new AbstractMapEntry;
_.getClass$ = function getClass_158(){
  return Ljava_util_AbstractHashMap$MapEntryString_2_classLit;
}
;
_.getKey = function getKey_0(){
  return this.key;
}
;
_.getValue = function getValue_0(){
  return this.this$0.stringMap[':' + this.key];
}
;
_.setValue = function setValue_0(object){
  return $putStringValue(this.this$0, this.key, object);
}
;
_.castableTypeMap$ = {52:1};
_.key = null;
_.this$0 = null;
function checkIndex(index, size){
  (index < 0 || index >= size) && indexOutOfBounds(index, size);
}

function indexOutOfBounds(index, size){
  throw new IndexOutOfBoundsException_1('Index: ' + index + ', Size: ' + size);
}

function AbstractList(){
}

_ = AbstractList.prototype = new AbstractCollection;
_.add = function add_1(obj){
  this.add_0(this.size_0(), obj);
  return true;
}
;
_.add_0 = function add_2(index, element){
  throw new UnsupportedOperationException_0('Add not supported on this list');
}
;
_.equals$ = function equals_13(o){
  var elem, elemOther, iter, iterOther, other;
  if (o === this) {
    return true;
  }
  if (!(o != null && o.castableTypeMap$ && !!o.castableTypeMap$[47])) {
    return false;
  }
  other = dynamicCast(o, 47);
  if (this.size_0() != other.size_0()) {
    return false;
  }
  iter = new AbstractList$IteratorImpl_0(this);
  iterOther = other.iterator();
  while (iter.i < iter.this$0_0.size_0()) {
    elem = $next_2(iter);
    elemOther = $next_2(iterOther);
    if (!(elem == null?elemOther == null:equals__devirtual$(elem, elemOther))) {
      return false;
    }
  }
  return true;
}
;
_.getClass$ = function getClass_159(){
  return Ljava_util_AbstractList_2_classLit;
}
;
_.hashCode$ = function hashCode_13(){
  var iter, k, obj;
  k = 1;
  iter = new AbstractList$IteratorImpl_0(this);
  while (iter.i < iter.this$0_0.size_0()) {
    obj = $next_2(iter);
    k = 31 * k + (obj == null?0:hashCode__devirtual$(obj));
    k = ~~k;
  }
  return k;
}
;
_.iterator = function iterator_4(){
  return new AbstractList$IteratorImpl_0(this);
}
;
_.listIterator = function listIterator(){
  return new AbstractList$ListIteratorImpl_0(this, 0);
}
;
_.listIterator_0 = function listIterator_0(from){
  return new AbstractList$ListIteratorImpl_0(this, from);
}
;
_.remove_2 = function remove_10(index){
  throw new UnsupportedOperationException_0('Remove not supported on this list');
}
;
_.castableTypeMap$ = {47:1};
function $hasNext(this$static){
  return this$static.i < this$static.this$0_0.size_0();
}

function $next_2(this$static){
  if (this$static.i >= this$static.this$0_0.size_0()) {
    throw new NoSuchElementException_0;
  }
  return this$static.this$0_0.get(this$static.last = this$static.i++);
}

function $remove_6(this$static){
  if (this$static.last < 0) {
    throw new IllegalStateException_0;
  }
  this$static.this$0_0.remove_2(this$static.last);
  this$static.i = this$static.last;
  this$static.last = -1;
}

function AbstractList$IteratorImpl_0(this$0){
  this.this$0_0 = this$0;
}

function AbstractList$IteratorImpl(){
}

_ = AbstractList$IteratorImpl_0.prototype = AbstractList$IteratorImpl.prototype = new Object_0;
_.getClass$ = function getClass_160(){
  return Ljava_util_AbstractList$IteratorImpl_2_classLit;
}
;
_.hasNext = function hasNext_2(){
  return this.i < this.this$0_0.size_0();
}
;
_.next = function next_3(){
  return $next_2(this);
}
;
_.remove_0 = function remove_11(){
  $remove_6(this);
}
;
_.castableTypeMap$ = {};
_.i = 0;
_.last = -1;
_.this$0_0 = null;
function $previous(this$static){
  if (this$static.i <= 0) {
    throw new NoSuchElementException_0;
  }
  return this$static.this$0.get(this$static.last = --this$static.i);
}

function AbstractList$ListIteratorImpl_0(this$0, start){
  var size;
  this.this$0 = this$0;
  this.this$0_0 = this$0;
  size = this$0.size_0();
  (start < 0 || start > size) && indexOutOfBounds(start, size);
  this.i = start;
}

function AbstractList$ListIteratorImpl(){
}

_ = AbstractList$ListIteratorImpl_0.prototype = AbstractList$ListIteratorImpl.prototype = new AbstractList$IteratorImpl;
_.getClass$ = function getClass_161(){
  return Ljava_util_AbstractList$ListIteratorImpl_2_classLit;
}
;
_.castableTypeMap$ = {};
_.this$0 = null;
function AbstractMap$1_0(this$0, val$entrySet){
  this.this$0 = this$0;
  this.val$entrySet = val$entrySet;
}

function AbstractMap$1(){
}

_ = AbstractMap$1_0.prototype = AbstractMap$1.prototype = new AbstractSet;
_.contains_0 = function contains_1(key){
  return $containsKey(this.this$0, key);
}
;
_.getClass$ = function getClass_162(){
  return Ljava_util_AbstractMap$1_2_classLit;
}
;
_.iterator = function iterator_5(){
  var outerIter;
  return outerIter = new AbstractHashMap$EntrySetIterator_0(this.val$entrySet.this$0) , new AbstractMap$1$1_0(outerIter);
}
;
_.size_0 = function size_1(){
  return this.val$entrySet.this$0.size;
}
;
_.castableTypeMap$ = {53:1};
_.this$0 = null;
_.val$entrySet = null;
function AbstractMap$1$1_0(val$outerIter){
  this.val$outerIter = val$outerIter;
}

function AbstractMap$1$1(){
}

_ = AbstractMap$1$1_0.prototype = AbstractMap$1$1.prototype = new Object_0;
_.getClass$ = function getClass_163(){
  return Ljava_util_AbstractMap$1$1_2_classLit;
}
;
_.hasNext = function hasNext_3(){
  return $hasNext(this.val$outerIter.iter);
}
;
_.next = function next_4(){
  var entry;
  entry = $next_1(this.val$outerIter);
  return entry.getKey();
}
;
_.remove_0 = function remove_12(){
  $remove_5(this.val$outerIter);
}
;
_.castableTypeMap$ = {};
_.val$outerIter = null;
function $add_4(this$static, o){
  setCheck(this$static.array, this$static.size++, o);
  return true;
}

function $get_1(this$static, index){
  checkIndex(index, this$static.size);
  return this$static.array[index];
}

function $indexOf_0(this$static, o, index){
  for (; index < this$static.size; ++index) {
    if (equalsWithNullCheck(o, this$static.array[index])) {
      return index;
    }
  }
  return -1;
}

function $remove_7(this$static, index){
  var previous;
  previous = (checkIndex(index, this$static.size) , this$static.array[index]);
  this$static.array.splice(index, 1);
  --this$static.size;
  return previous;
}

function $remove_8(this$static, o){
  var i;
  i = $indexOf_0(this$static, o, 0);
  if (i == -1) {
    return false;
  }
  $remove_7(this$static, i);
  return true;
}

function $toArray(this$static, out){
  var i, a, result;
  out.length < this$static.size && (out = (a = out , result = createFromSeed(0, this$static.size) , initValues(a.arrayClass$, a.castableTypeMap$, a.queryId$, result) , result));
  for (i = 0; i < this$static.size; ++i) {
    setCheck(out, i, this$static.array[i]);
  }
  out.length > this$static.size && setCheck(out, this$static.size, null);
  return out;
}

function ArrayList_0(){
  this.array = initDim(_3Ljava_lang_Object_2_classLit, {15:1}, 0, 0, 0);
}

function ArrayList(){
}

_ = ArrayList_0.prototype = ArrayList.prototype = new AbstractList;
_.add = function add_3(o){
  return setCheck(this.array, this.size++, o) , true;
}
;
_.add_0 = function add_4(index, o){
  (index < 0 || index > this.size) && indexOutOfBounds(index, this.size);
  this.array.splice(index, 0, o);
  ++this.size;
}
;
_.contains_0 = function contains_2(o){
  return $indexOf_0(this, o, 0) != -1;
}
;
_.get = function get_0(index){
  return checkIndex(index, this.size) , this.array[index];
}
;
_.getClass$ = function getClass_164(){
  return Ljava_util_ArrayList_2_classLit;
}
;
_.isEmpty = function isEmpty_0(){
  return this.size == 0;
}
;
_.remove_2 = function remove_13(index){
  return $remove_7(this, index);
}
;
_.remove_1 = function remove_14(o){
  return $remove_8(this, o);
}
;
_.size_0 = function size_2(){
  return this.size;
}
;
_.toArray = function toArray_0(out){
  return $toArray(this, out);
}
;
_.castableTypeMap$ = {15:1, 47:1};
_.size = 0;
function $clinit_28(){
  $clinit_28 = nullMethod;
  EMPTY_LIST = new Collections$EmptyList_0;
}

var EMPTY_LIST;
function Collections$EmptyList_0(){
}

function Collections$EmptyList(){
}

_ = Collections$EmptyList_0.prototype = Collections$EmptyList.prototype = new AbstractList;
_.contains_0 = function contains_3(object){
  return false;
}
;
_.get = function get_1(location_0){
  throw new IndexOutOfBoundsException_0;
}
;
_.getClass$ = function getClass_165(){
  return Ljava_util_Collections$EmptyList_2_classLit;
}
;
_.size_0 = function size_3(){
  return 0;
}
;
_.castableTypeMap$ = {15:1, 47:1};
function $equals_1(value1, value2){
  return (value1 == null?null:value1) === (value2 == null?null:value2) || value1 != null && equals__devirtual$(value1, value2);
}

function HashMap_0(){
  $clearImpl(this);
}

function HashMap(){
}

_ = HashMap_0.prototype = HashMap.prototype = new AbstractHashMap;
_.getClass$ = function getClass_166(){
  return Ljava_util_HashMap_2_classLit;
}
;
_.castableTypeMap$ = {15:1, 46:1};
function $add_5(this$static, o){
  var old;
  old = $put_0(this$static.map, o, this$static);
  return old == null;
}

function HashSet_0(){
  this.map = new HashMap_0;
}

function HashSet(){
}

_ = HashSet_0.prototype = HashSet.prototype = new AbstractSet;
_.add = function add_5(o){
  var old;
  return old = $put_0(this.map, o, this) , old == null;
}
;
_.contains_0 = function contains_4(o){
  return $containsKey(this.map, o);
}
;
_.getClass$ = function getClass_167(){
  return Ljava_util_HashSet_2_classLit;
}
;
_.isEmpty = function isEmpty_1(){
  return this.map.size == 0;
}
;
_.iterator = function iterator_6(){
  var outerIter;
  return outerIter = new AbstractHashMap$EntrySetIterator_0($keySet(this.map).val$entrySet.this$0) , new AbstractMap$1$1_0(outerIter);
}
;
_.remove_1 = function remove_15(o){
  return $remove_4(this.map, o) != null;
}
;
_.size_0 = function size_4(){
  return this.map.size;
}
;
_.toString$ = function toString_24(){
  return $toString_1($keySet(this.map));
}
;
_.castableTypeMap$ = {15:1, 53:1};
_.map = null;
function MapEntryImpl_0(key, value){
  this.key = key;
  this.value_0 = value;
}

function MapEntryImpl(){
}

_ = MapEntryImpl_0.prototype = MapEntryImpl.prototype = new AbstractMapEntry;
_.getClass$ = function getClass_168(){
  return Ljava_util_MapEntryImpl_2_classLit;
}
;
_.getKey = function getKey_1(){
  return this.key;
}
;
_.getValue = function getValue_1(){
  return this.value_0;
}
;
_.setValue = function setValue_1(value){
  var old;
  old = this.value_0;
  this.value_0 = value;
  return old;
}
;
_.castableTypeMap$ = {52:1};
_.key = null;
_.value_0 = null;
function NoSuchElementException_0(){
  $fillInStackTrace();
}

function NoSuchElementException(){
}

_ = NoSuchElementException_0.prototype = NoSuchElementException.prototype = new RuntimeException;
_.getClass$ = function getClass_169(){
  return Ljava_util_NoSuchElementException_2_classLit;
}
;
_.castableTypeMap$ = {15:1, 20:1, 22:1, 25:1};
function equalsWithNullCheck(a, b){
  return (a == null?null:a) === (b == null?null:b) || a != null && equals__devirtual$(a, b);
}

var $entry = entry_0;
function gwtOnLoad(errFn, modName, modBase, softPermutationId){
  $moduleName = modName;
  $moduleBase = modBase;
  if (errFn)
    try {
      $entry(init)();
    }
     catch (e) {
      errFn(modName);
    }
   else {
    $entry(init)();
  }
}

var Ljava_lang_Object_2_classLit = createForClass('java.lang.', 'Object'), Lat_tomtasche_bloki_engine_client_BlokiPacketSender_2_classLit = createForClass('at.tomtasche.bloki.engine.client.', 'BlokiPacketSender'), Lat_tomtasche_bloki_engine_client_BlokiPacketSender$1_2_classLit = createForClass('at.tomtasche.bloki.engine.client.', 'BlokiPacketSender$1'), Lat_tomtasche_bloki_engine_client_Submit_2_classLit = createForClass('at.tomtasche.bloki.engine.client.', 'Submit'), Lcom_google_gwt_user_client_ui_UIObject_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'UIObject'), Lcom_google_gwt_user_client_ui_Widget_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Widget'), Lcom_google_gwt_user_client_ui_Panel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Panel'), Lcom_google_gwt_user_client_ui_SimplePanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'SimplePanel'), Lcom_google_gwt_user_client_ui_PopupPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'PopupPanel'), Lcom_google_gwt_user_client_ui_DecoratedPopupPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DecoratedPopupPanel'), Lcom_google_gwt_user_client_ui_DialogBox_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DialogBox'), Lat_tomtasche_bloki_engine_client_widget_CorrectionDialog_2_classLit = createForClass('at.tomtasche.bloki.engine.client.widget.', 'CorrectionDialog'), Lat_tomtasche_bloki_engine_client_widget_CorrectionDialog$1_2_classLit = createForClass('at.tomtasche.bloki.engine.client.widget.', 'CorrectionDialog$1'), Lat_tomtasche_bloki_engine_client_widget_InstructionsDialog_2_classLit = createForClass('at.tomtasche.bloki.engine.client.widget.', 'InstructionsDialog'), Lat_tomtasche_bloki_engine_shared_BlokiPacket_2_classLit = createForClass('at.tomtasche.bloki.engine.shared.', 'BlokiPacket'), Lcom_bfr_client_selection_Range_2_classLit = createForClass('com.bfr.client.selection.', 'Range'), Lcom_bfr_client_selection_RangeEndPoint_2_classLit = createForClass('com.bfr.client.selection.', 'RangeEndPoint'), Lcom_bfr_client_selection_Selection_2_classLit = createForClass('com.bfr.client.selection.', 'Selection'), Ljava_lang_String_2_classLit = createForClass('java.lang.', 'String'), _3Ljava_lang_String_2_classLit = createForArray('[Ljava.lang.', 'String;'), Lcom_google_gwt_animation_client_Animation_2_classLit = createForClass('com.google.gwt.animation.client.', 'Animation'), _3Lcom_google_gwt_animation_client_Animation_2_classLit = createForArray('[Lcom.google.gwt.animation.client.', 'Animation;'), Lcom_google_gwt_user_client_Timer_2_classLit = createForClass('com.google.gwt.user.client.', 'Timer'), Lcom_google_gwt_animation_client_Animation$1_2_classLit = createForClass('com.google.gwt.animation.client.', 'Animation$1'), Ljava_lang_Enum_2_classLit = createForClass('java.lang.', 'Enum'), Ljava_lang_Throwable_2_classLit = createForClass('java.lang.', 'Throwable'), Ljava_lang_Exception_2_classLit = createForClass('java.lang.', 'Exception'), Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang.', 'RuntimeException'), Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client.', 'JavaScriptException'), Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client.', 'JavaScriptObject$'), Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass('com.google.gwt.core.client.', 'Scheduler'), Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass('com.google.gwt.core.client.impl.', 'SchedulerImpl'), Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit = createForClass('com.google.gwt.core.client.impl.', 'StackTraceCreator$Collector'), Ljava_lang_StackTraceElement_2_classLit = createForClass('java.lang.', 'StackTraceElement'), _3Ljava_lang_StackTraceElement_2_classLit = createForArray('[Ljava.lang.', 'StackTraceElement;'), Lcom_google_gwt_dom_client_Style$Display_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Display', values), _3Lcom_google_gwt_dom_client_Style$Display_2_classLit = createForArray('[Lcom.google.gwt.dom.client.', 'Style$Display;'), Lcom_google_gwt_dom_client_Style$Display$1_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Display$1', null), Lcom_google_gwt_dom_client_Style$Display$2_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Display$2', null), Lcom_google_gwt_dom_client_Style$Display$3_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Display$3', null), Lcom_google_gwt_dom_client_Style$Display$4_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Display$4', null), Lcom_google_gwt_dom_client_Style$Unit_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit', values_0), _3Lcom_google_gwt_dom_client_Style$Unit_2_classLit = createForArray('[Lcom.google.gwt.dom.client.', 'Style$Unit;'), Lcom_google_gwt_dom_client_Style$Unit$1_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit$1', null), Lcom_google_gwt_dom_client_Style$Unit$2_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit$2', null), Lcom_google_gwt_dom_client_Style$Unit$3_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit$3', null), Lcom_google_gwt_dom_client_Style$Unit$4_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit$4', null), Lcom_google_gwt_dom_client_Style$Unit$5_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit$5', null), Lcom_google_gwt_dom_client_Style$Unit$6_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit$6', null), Lcom_google_gwt_dom_client_Style$Unit$7_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit$7', null), Lcom_google_gwt_dom_client_Style$Unit$8_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit$8', null), Lcom_google_gwt_dom_client_Style$Unit$9_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit$9', null), Lcom_google_web_bindery_event_shared_Event_2_classLit = createForClass('com.google.web.bindery.event.shared.', 'Event'), Lcom_google_gwt_event_shared_GwtEvent_2_classLit = createForClass('com.google.gwt.event.shared.', 'GwtEvent'), Lcom_google_gwt_event_dom_client_DomEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'DomEvent'), Lcom_google_gwt_event_dom_client_HumanInputEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'HumanInputEvent'), Lcom_google_gwt_event_dom_client_MouseEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'MouseEvent'), Lcom_google_gwt_event_dom_client_ClickEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'ClickEvent'), Lcom_google_web_bindery_event_shared_Event$Type_2_classLit = createForClass('com.google.web.bindery.event.shared.', 'Event$Type'), Lcom_google_gwt_event_shared_GwtEvent$Type_2_classLit = createForClass('com.google.gwt.event.shared.', 'GwtEvent$Type'), Lcom_google_gwt_event_dom_client_DomEvent$Type_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'DomEvent$Type'), Lcom_google_gwt_event_dom_client_MouseDownEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'MouseDownEvent'), Lcom_google_gwt_event_dom_client_MouseMoveEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'MouseMoveEvent'), Lcom_google_gwt_event_dom_client_MouseOutEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'MouseOutEvent'), Lcom_google_gwt_event_dom_client_MouseOverEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'MouseOverEvent'), Lcom_google_gwt_event_dom_client_MouseUpEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'MouseUpEvent'), Lcom_google_gwt_event_dom_client_PrivateMap_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'PrivateMap'), Lcom_google_gwt_event_logical_shared_CloseEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared.', 'CloseEvent'), Lcom_google_gwt_event_logical_shared_ResizeEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared.', 'ResizeEvent'), Lcom_google_gwt_event_logical_shared_ValueChangeEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared.', 'ValueChangeEvent'), Lcom_google_gwt_event_shared_HandlerManager_2_classLit = createForClass('com.google.gwt.event.shared.', 'HandlerManager'), Lcom_google_web_bindery_event_shared_EventBus_2_classLit = createForClass('com.google.web.bindery.event.shared.', 'EventBus'), Lcom_google_web_bindery_event_shared_SimpleEventBus_2_classLit = createForClass('com.google.web.bindery.event.shared.', 'SimpleEventBus'), Lcom_google_gwt_event_shared_HandlerManager$Bus_2_classLit = createForClass('com.google.gwt.event.shared.', 'HandlerManager$Bus'), Lcom_google_gwt_event_shared_LegacyHandlerWrapper_2_classLit = createForClass('com.google.gwt.event.shared.', 'LegacyHandlerWrapper'), Lcom_google_web_bindery_event_shared_UmbrellaException_2_classLit = createForClass('com.google.web.bindery.event.shared.', 'UmbrellaException'), Lcom_google_gwt_event_shared_UmbrellaException_2_classLit = createForClass('com.google.gwt.event.shared.', 'UmbrellaException'), Lcom_google_gwt_i18n_client_AutoDirectionHandler_2_classLit = createForClass('com.google.gwt.i18n.client.', 'AutoDirectionHandler'), Lcom_google_gwt_i18n_client_HasDirection$Direction_2_classLit = createForEnum('com.google.gwt.i18n.client.', 'HasDirection$Direction', values_1), _3Lcom_google_gwt_i18n_client_HasDirection$Direction_2_classLit = createForArray('[Lcom.google.gwt.i18n.client.', 'HasDirection$Direction;'), Lcom_google_gwt_json_client_JSONValue_2_classLit = createForClass('com.google.gwt.json.client.', 'JSONValue'), Lcom_google_gwt_json_client_JSONArray_2_classLit = createForClass('com.google.gwt.json.client.', 'JSONArray'), Lcom_google_gwt_json_client_JSONBoolean_2_classLit = createForClass('com.google.gwt.json.client.', 'JSONBoolean'), Lcom_google_gwt_json_client_JSONException_2_classLit = createForClass('com.google.gwt.json.client.', 'JSONException'), Lcom_google_gwt_json_client_JSONNull_2_classLit = createForClass('com.google.gwt.json.client.', 'JSONNull'), Lcom_google_gwt_json_client_JSONNumber_2_classLit = createForClass('com.google.gwt.json.client.', 'JSONNumber'), Lcom_google_gwt_json_client_JSONObject_2_classLit = createForClass('com.google.gwt.json.client.', 'JSONObject'), Ljava_util_AbstractCollection_2_classLit = createForClass('java.util.', 'AbstractCollection'), Ljava_util_AbstractSet_2_classLit = createForClass('java.util.', 'AbstractSet'), Lcom_google_gwt_json_client_JSONString_2_classLit = createForClass('com.google.gwt.json.client.', 'JSONString'), Lcom_google_gwt_text_shared_AbstractRenderer_2_classLit = createForClass('com.google.gwt.text.shared.', 'AbstractRenderer'), Lcom_google_gwt_text_shared_testing_PassthroughParser_2_classLit = createForClass('com.google.gwt.text.shared.testing.', 'PassthroughParser'), Lcom_google_gwt_text_shared_testing_PassthroughRenderer_2_classLit = createForClass('com.google.gwt.text.shared.testing.', 'PassthroughRenderer'), Lcom_google_gwt_user_client_Event$NativePreviewEvent_2_classLit = createForClass('com.google.gwt.user.client.', 'Event$NativePreviewEvent'), Lcom_google_gwt_user_client_Timer$1_2_classLit = createForClass('com.google.gwt.user.client.', 'Timer$1'), Lcom_google_gwt_user_client_Window$ClosingEvent_2_classLit = createForClass('com.google.gwt.user.client.', 'Window$ClosingEvent'), Lcom_google_gwt_user_client_Window$WindowHandlers_2_classLit = createForClass('com.google.gwt.user.client.', 'Window$WindowHandlers'), Lcom_google_gwt_user_client_impl_HistoryImpl_2_classLit = createForClass('com.google.gwt.user.client.impl.', 'HistoryImpl'), Lcom_google_gwt_user_client_impl_WindowImplIE$1_2_classLit = createForClass('com.google.gwt.user.client.impl.', 'WindowImplIE$1'), Lcom_google_gwt_user_client_impl_WindowImplIE$2_2_classLit = createForClass('com.google.gwt.user.client.impl.', 'WindowImplIE$2'), Lcom_google_gwt_user_client_ui_ComplexPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ComplexPanel'), Lcom_google_gwt_user_client_ui_AbsolutePanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'AbsolutePanel'), Lcom_google_gwt_user_client_ui_AttachDetachException_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'AttachDetachException'), Lcom_google_gwt_user_client_ui_AttachDetachException$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'AttachDetachException$1'), Lcom_google_gwt_user_client_ui_AttachDetachException$2_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'AttachDetachException$2'), Lcom_google_gwt_user_client_ui_FocusWidget_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'FocusWidget'), Lcom_google_gwt_user_client_ui_ButtonBase_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ButtonBase'), Lcom_google_gwt_user_client_ui_Button_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Button'), Lcom_google_gwt_user_client_ui_CellPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'CellPanel'), Lcom_google_gwt_user_client_ui_DecoratorPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DecoratorPanel'), Lcom_google_gwt_user_client_ui_DialogBox$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DialogBox$1'), Lcom_google_gwt_user_client_ui_LabelBase_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'LabelBase'), Lcom_google_gwt_user_client_ui_Label_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Label'), Lcom_google_gwt_user_client_ui_HTML_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HTML'), Lcom_google_gwt_user_client_ui_DialogBox$CaptionImpl_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DialogBox$CaptionImpl'), Lcom_google_gwt_user_client_ui_DialogBox$MouseHandler_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DialogBox$MouseHandler'), Lcom_google_gwt_user_client_ui_DirectionalTextHelper_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DirectionalTextHelper'), _3Lcom_google_gwt_user_client_ui_Widget_2_classLit = createForArray('[Lcom.google.gwt.user.client.ui.', 'Widget;'), Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$AutoHorizontalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HasHorizontalAlignment$AutoHorizontalAlignmentConstant'), Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HasHorizontalAlignment$HorizontalAlignmentConstant'), Lcom_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HasVerticalAlignment$VerticalAlignmentConstant'), Lcom_google_gwt_user_client_ui_HorizontalPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HorizontalPanel'), Ljava_util_AbstractList_2_classLit = createForClass('java.util.', 'AbstractList'), Ljava_util_ArrayList_2_classLit = createForClass('java.util.', 'ArrayList'), _3C_classLit = createForArray('', '[C'), Lcom_google_gwt_user_client_ui_PopupPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'PopupPanel$1'), Lcom_google_gwt_user_client_ui_PopupPanel$3_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'PopupPanel$3'), Lcom_google_gwt_user_client_ui_PopupPanel$4_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'PopupPanel$4'), Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'PopupPanel$ResizeAnimation'), Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'PopupPanel$ResizeAnimation$1'), Lcom_google_gwt_user_client_ui_RootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'RootPanel'), Lcom_google_gwt_user_client_ui_RootPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'RootPanel$1'), Lcom_google_gwt_user_client_ui_RootPanel$2_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'RootPanel$2'), Lcom_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'RootPanel$DefaultRootPanel'), Lcom_google_gwt_user_client_ui_SimplePanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'SimplePanel$1'), Lcom_google_gwt_user_client_ui_ValueBoxBase_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ValueBoxBase'), Lcom_google_gwt_user_client_ui_TextBoxBase_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'TextBoxBase'), Lcom_google_gwt_user_client_ui_TextArea_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'TextArea'), Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit = createForEnum('com.google.gwt.user.client.ui.', 'ValueBoxBase$TextAlignment', values_2), _3Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit = createForArray('[Lcom.google.gwt.user.client.ui.', 'ValueBoxBase$TextAlignment;'), Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$1_2_classLit = createForEnum('com.google.gwt.user.client.ui.', 'ValueBoxBase$TextAlignment$1', null), Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$2_2_classLit = createForEnum('com.google.gwt.user.client.ui.', 'ValueBoxBase$TextAlignment$2', null), Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$3_2_classLit = createForEnum('com.google.gwt.user.client.ui.', 'ValueBoxBase$TextAlignment$3', null), Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$4_2_classLit = createForEnum('com.google.gwt.user.client.ui.', 'ValueBoxBase$TextAlignment$4', null), Lcom_google_gwt_user_client_ui_VerticalPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'VerticalPanel'), Lcom_google_gwt_user_client_ui_WidgetCollection_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'WidgetCollection'), Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'WidgetCollection$WidgetIterator'), Lcom_google_web_bindery_event_shared_SimpleEventBus$1_2_classLit = createForClass('com.google.web.bindery.event.shared.', 'SimpleEventBus$1'), Lcom_google_web_bindery_event_shared_SimpleEventBus$2_2_classLit = createForClass('com.google.web.bindery.event.shared.', 'SimpleEventBus$2'), Lcom_google_web_bindery_event_shared_SimpleEventBus$3_2_classLit = createForClass('com.google.web.bindery.event.shared.', 'SimpleEventBus$3'), _3Ljava_lang_Throwable_2_classLit = createForArray('[Ljava.lang.', 'Throwable;'), Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang.', 'IndexOutOfBoundsException'), Ljava_lang_ArrayStoreException_2_classLit = createForClass('java.lang.', 'ArrayStoreException'), Ljava_lang_Boolean_2_classLit = createForClass('java.lang.', 'Boolean'), Ljava_lang_Number_2_classLit = createForClass('java.lang.', 'Number'), Ljava_lang_Class_2_classLit = createForClass('java.lang.', 'Class'), Ljava_lang_ClassCastException_2_classLit = createForClass('java.lang.', 'ClassCastException'), Ljava_lang_Double_2_classLit = createForClass('java.lang.', 'Double'), Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang.', 'IllegalArgumentException'), Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang.', 'IllegalStateException'), Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang.', 'NullPointerException'), Ljava_lang_StringBuffer_2_classLit = createForClass('java.lang.', 'StringBuffer'), Ljava_lang_StringBuilder_2_classLit = createForClass('java.lang.', 'StringBuilder'), Ljava_lang_UnsupportedOperationException_2_classLit = createForClass('java.lang.', 'UnsupportedOperationException'), _3Ljava_lang_Object_2_classLit = createForArray('[Ljava.lang.', 'Object;'), Ljava_util_AbstractMap_2_classLit = createForClass('java.util.', 'AbstractMap'), Ljava_util_AbstractHashMap_2_classLit = createForClass('java.util.', 'AbstractHashMap'), Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass('java.util.', 'AbstractHashMap$EntrySet'), Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass('java.util.', 'AbstractHashMap$EntrySetIterator'), Ljava_util_AbstractMapEntry_2_classLit = createForClass('java.util.', 'AbstractMapEntry'), Ljava_util_AbstractHashMap$MapEntryNull_2_classLit = createForClass('java.util.', 'AbstractHashMap$MapEntryNull'), Ljava_util_AbstractHashMap$MapEntryString_2_classLit = createForClass('java.util.', 'AbstractHashMap$MapEntryString'), Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass('java.util.', 'AbstractList$IteratorImpl'), Ljava_util_AbstractList$ListIteratorImpl_2_classLit = createForClass('java.util.', 'AbstractList$ListIteratorImpl'), Ljava_util_AbstractMap$1_2_classLit = createForClass('java.util.', 'AbstractMap$1'), Ljava_util_AbstractMap$1$1_2_classLit = createForClass('java.util.', 'AbstractMap$1$1'), Ljava_util_Collections$EmptyList_2_classLit = createForClass('java.util.', 'Collections$EmptyList'), Ljava_util_HashMap_2_classLit = createForClass('java.util.', 'HashMap'), Ljava_util_HashSet_2_classLit = createForClass('java.util.', 'HashSet'), Ljava_util_MapEntryImpl_2_classLit = createForClass('java.util.', 'MapEntryImpl'), Ljava_util_NoSuchElementException_2_classLit = createForClass('java.util.', 'NoSuchElementException');
$stats && $stats({moduleName:'submit',sessionId:$sessionId,subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});
if (submit && submit.onScriptLoad)submit.onScriptLoad(gwtOnLoad);
})();