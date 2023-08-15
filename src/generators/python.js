

python.pythonGenerator.forBlock['dataloader'] = function(block, generator) {
  var value_data = generator.valueToCode(block, 'data', python.Order.ATOMIC);
  var dropdown_sourcedropdown = block.getFieldValue('SourceDropdown');
  var dropdown_typedropdown = block.getFieldValue('TypeDropdown');
  var value_variablenames = generator.valueToCode(block, 'VariableNames', python.Order.ATOMIC);
  var value_target = generator.valueToCode(block, 'Target', python.Order.ATOMIC);
  var value_cut = generator.valueToCode(block, 'Cut', python.Order.ATOMIC);
  var value_categorical = generator.valueToCode(block, 'Categorical', python.Order.ATOMIC);
  // TODO: Assemble python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.python.ORDER_NONE];
};

python.pythonGenerator.forBlock['data_loader_simple'] = function(block, generator) {
  var value_data = generator.valueToCode(block, 'data', python.Order.ATOMIC);
  // TODO: Assemble python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.python.ORDER_NONE];
};

python.pythonGenerator.forBlock['dataprocessor'] = function(block, generator) {
  var value_dataloader = generator.valueToCode(block, 'dataLoader', python.Order.ATOMIC);
  var number_test_size = block.getFieldValue('test_size');
  var text_transform = block.getFieldValue('transform');
  // TODO: Assemble python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.python.ORDER_NONE];
};

python.pythonGenerator.forBlock['auto'] = function(block, generator) {
  // TODO: Assemble python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.python.ORDER_NONE];
};

python.pythonGenerator.forBlock['none'] = function(block, generator) {
  // TODO: Assemble python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.python.ORDER_NONE];
};

python.pythonGenerator.forBlock['modeltrainer'] = function(block, generator) {
  var value_model = generator.valueToCode(block, 'model', python.Order.ATOMIC);
  var value_withdata = generator.valueToCode(block, 'withData', python.Order.ATOMIC);
  var dropdown_tasktype = block.getFieldValue('taskType');
  var dropdown_task = block.getFieldValue('task');
  var value_explainers = generator.valueToCode(block, 'explainers', python.Order.ATOMIC);
  // TODO: Assemble python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.python.ORDER_NONE];
};

python.pythonGenerator.forBlock['getlocalexplanations'] = function(block, generator) {

