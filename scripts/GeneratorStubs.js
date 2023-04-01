Blockly.Python['train'] = function(block) {
  var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
  var value_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
  var value_explainers = Blockly.Python.valueToCode(block, 'explainers', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'train_and_explainModel(' + value_model + ', ' + value_data + ', ' + value_explainers + ')';
  return code;
};

Blockly.Python['load_data'] = function(block) {
  var value_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
  var value_target = Blockly.Python.valueToCode(block, 'target', Blockly.Python.ORDER_ATOMIC);
  var value_cut = Blockly.Python.valueToCode(block, 'cut', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'load_data_CSV(' + value_data + ', ' + value_target + ', ' + value_cut + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['compare_explanations'] = function(block) {
  var value_filenames = Blockly.Python.valueToCode(block, 'filenames', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'compare_explanations(' + value_filenames + ')';
  return code;
};

Blockly.Python['model'] = function(block) {
  var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'return ' + value_model ;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['explainers'] = function(block) {
  var value_explainers = Blockly.Python.valueToCode(block, 'explainers', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'return ' + value_explainers;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
