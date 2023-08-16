import * as Blockly from 'blockly';
python.pythonGenerator.forBlock['dataloader'] = function(block, generator) {
  var value_data = generator.valueToCode(block, 'data', python.Order.ATOMIC);
  var dropdown_sourcedropdown = block.getFieldValue('SourceDropdown');
  var dropdown_typedropdown = block.getFieldValue('TypeDropdown');
  var value_variablenames = generator.valueToCode(block, 'VariableNames', python.Order.ATOMIC);
  var value_target = generator.valueToCode(block, 'Target', python.Order.ATOMIC);
  var value_cut = generator.valueToCode(block, 'Cut', python.Order.ATOMIC);
  var value_categorical = generator.valueToCode(block, 'Categorical', python.Order.ATOMIC);
  // TODO: Assemble python into code variable.
  var code = ('DataLoader(data = ' + value_data + ', source = ' + dropdown_sourcedropdown + ', type = ' + dropdown_typedropdown + ', variable_names = ' + value_variablenames + ', target_names = ' + value_target + ', cut = ' + value_cut + ', categorical = ' + value_categorical + ')');
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.python.ORDER_NONE];
};

python.pythonGenerator.forBlock['data_loader_simple'] = function(block, generator) {
  var value_data = generator.valueToCode(block, 'data', python.Order.ATOMIC);
  // TODO: Assemble python into code variable.
  var code = ('DataLoader(data = ' + value_data + ')');
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.python.ORDER_NONE];
};

python.pythonGenerator.forBlock['dataprocessor'] = function(block, generator) {
  var value_dataloader = generator.valueToCode(block, 'dataLoader', python.Order.ATOMIC);
  var number_test_size = block.getFieldValue('test_size');
  var text_transform = block.getFieldValue('transform');
  // TODO: Assemble python into code variable.
  var code = ('DataProcessor(' + value_dataloader + ', ' + number_test_size + ', ' + text_transform + ')');
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.python.ORDER_NONE];
};

python.pythonGenerator.forBlock['auto'] = function(block, generator) {
  // TODO: Assemble python into code variable.
  var code = '"auto"';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.python.ORDER_NONE];
};

python.pythonGenerator.forBlock['none'] = function(block, generator) {
  // TODO: Assemble python into code variable.
  var code = 'None';
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
  var code = ('ModelTrainer(' + value_model + ', ' + value_withdata + ', ' + dropdown_tasktype + ', ' + dropdown_task + ', ' + value_explainers + ')');
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.python.ORDER_NONE];
};

python.pythonGenerator.forBlock['getlocalexplanations'] = function(block, generator) {
  var value_name = generator.valueToCode(block, 'NAME', python.Order.ATOMIC);
  // TODO: Assemble python into code variable.
  var code = value_name + '.getExplanationsFor([])';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.python.ORDER_NONE];
};

python.pythonGenerator.forBlock['getsummaryexplanations'] = function(block, generator) {
  var value_explanations = generator.valueToCode(block, 'explanations', python.Order.ATOMIC);
  // TODO: Assemble python into code variable.
  var code = value_explanations + '.getSummaryExplanations()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.python.ORDER_NONE];
};

python.pythonGenerator.forBlock['insight_generator'] = function(block, generator) {
  var value_explanations = generator.valueToCode(block, 'explanations', python.Order.ATOMIC);
  // TODO: Assemble python into code variable.
  var code = 'InsightGenerator(' + value_explanations + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.python.ORDER_NONE];
};

python.pythonGenerator.forBlock['calculateexplainersimilarity'] = function(block, generator) {
  var value_insights = generator.valueToCode(block, 'insights', python.Order.ATOMIC);
  var value_explainer1 = generator.valueToCode(block, 'explainer1', python.Order.ATOMIC);
  var value_explainer2 = generator.valueToCode(block, 'explainer2', python.Order.ATOMIC);
  // TODO: Assemble python into code variable.
  var code = value_insights + '.calculateExplainerSimilarity(' + value_explainer1 + ', ' + value_explainer2 + ')';
  return code;
};
