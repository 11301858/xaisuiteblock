Blockly.Python['train'] = function(block) {
  var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
  var value_explainers = Blockly.Python.valueToCode(block, 'explainers', Blockly.Python.ORDER_ATOMIC);
  var value_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
  var value_cut = Blockly.Python.valueToCode(block, 'cut', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['compare'] = function(block) {
  var value_data_files = Blockly.Python.valueToCode(block, 'Data Files', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};