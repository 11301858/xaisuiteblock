Blockly.JavaScript['train'] = function(block) {
  var value_model = Blockly.JavaScript.valueToCode(block, 'model', Blockly.JavaScript.ORDER_ATOMIC);
  var value_data = Blockly.JavaScript.valueToCode(block, 'data', Blockly.JavaScript.ORDER_ATOMIC);
  var value_explainers = Blockly.JavaScript.valueToCode(block, 'explainers', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['load_data'] = function(block) {
  var value_data = Blockly.JavaScript.valueToCode(block, 'data', Blockly.JavaScript.ORDER_ATOMIC);
  var value_target = Blockly.JavaScript.valueToCode(block, 'target', Blockly.JavaScript.ORDER_ATOMIC);
  var value_cut = Blockly.JavaScript.valueToCode(block, 'cut', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['compare_explanations'] = function(block) {
  var value_filenames = Blockly.JavaScript.valueToCode(block, 'filenames', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['model'] = function(block) {
  var value_model = Blockly.JavaScript.valueToCode(block, 'model', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['explainers'] = function(block) {
  var value_explainers = Blockly.JavaScript.valueToCode(block, 'explainers', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};