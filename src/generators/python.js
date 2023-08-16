import {pythonGenerator} from 'blockly/python';

// Export all the code generators for our custom blocks,
// but don't register them with Blockly yet.
// This file has no side effects!
export const generator = Object.create(null);

generator['dataloader'] = function(block) {
  var value_data = pythonGenerator.valueToCode(block, 'data', pythonGenerator.ORDER_ATOMIC);
  var dropdown_sourcedropdown = block.getFieldValue('SourceDropdown');
  var dropdown_typedropdown = block.getFieldValue('TypeDropdown');
  var value_variablenames = pythonGenerator.valueToCode(block, 'VariableNames', pythonGenerator.ORDER_ATOMIC);
  var value_target = pythonGenerator.valueToCode(block, 'Target', pythonGenerator.ORDER_ATOMIC);
  var value_cut = pythonGenerator.valueToCode(block, 'Cut', pythonGenerator.ORDER_ATOMIC);
  var value_categorical = pythonGenerator.valueToCode(block, 'Categorical', pythonGenerator.ORDER_ATOMIC);
  // TODO: Assemble python into code variable.
  var code = ('DataLoader(data = ' + value_data + ', source = "' + dropdown_sourcedropdown + '", type = "' + dropdown_typedropdown + '", variable_names = ' + value_variablenames + ', target_names = ' + value_target + ', cut = ' + value_cut + ', categorical = ' + value_categorical + ')');
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, pythonGenerator.ORDER_ATOMIC];
};

generator['data_loader_simple'] = function(block) {
  var value_data = pythonGenerator.valueToCode(block, 'data', pythonGenerator.ORDER_ATOMIC);
  // TODO: Assemble python into code variable.
  var code = ('DataLoader(data = ' + value_data + ')');
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, pythonGenerator.ORDER_ATOMIC];
};

generator['dataprocessor'] = function(block) {
  var value_dataloader = pythonGenerator.valueToCode(block, 'dataLoader', pythonGenerator.ORDER_ATOMIC);
  var number_test_size = block.getFieldValue('test_size');
  var text_transform = block.getFieldValue('transform');
  // TODO: Assemble python into code variable.
  var code = ('DataProcessor(' + value_dataloader + ', ' + number_test_size + ', ' + text_transform + ')');
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, pythonGenerator.ORDER_ATOMIC];
};

generator['auto'] = function(block) {
  // TODO: Assemble python into code variable.
  var code = '"auto"';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, pythonGenerator.ORDER_ATOMIC];
};

generator['none'] = function(block) {
  // TODO: Assemble python into code variable.
  var code = 'None';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, pythonGenerator.ORDER_ATOMIC];
};

generator['modeltrainer'] = function(block) {
  var value_model = pythonGenerator.valueToCode(block, 'model', pythonGenerator.ORDER_ATOMIC);
  var value_withdata = pythonGenerator.valueToCode(block, 'withData', pythonGenerator.ORDER_ATOMIC);
  var dropdown_tasktype = block.getFieldValue('taskType');
  var dropdown_task = block.getFieldValue('task');
  var value_explainers = pythonGenerator.valueToCode(block, 'explainers', pythonGenerator.ORDER_ATOMIC);
  // TODO: Assemble python into code variable.
  var code = ('ModelTrainer(' + value_model + ', ' + value_withdata + ', ' + dropdown_tasktype + ', ' + dropdown_task + ', ' + value_explainers + ')');
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, pythonGenerator.ORDER_ATOMIC];
};

generator['getlocalexplanations'] = function(block) {
  var value_name = pythonGenerator.valueToCode(block, 'NAME', pythonGenerator.ORDER_ATOMIC);
  // TODO: Assemble python into code variable.
  var code = value_name + '.getExplanationsFor([])';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, pythonGenerator.ORDER_ATOMIC];
};

generator['getsummaryexplanations'] = function(block) {
  var value_explanations = pythonGenerator.valueToCode(block, 'explanations', pythonGenerator.ORDER_ATOMIC);
  // TODO: Assemble python into code variable.
  var code = value_explanations + '.getSummaryExplanations()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, pythonGenerator.ORDER_ATOMIC];
};

generator['insight_generator'] = function(block) {
  var value_explanations = pythonGenerator.valueToCode(block, 'explanations', pythonGenerator.ORDER_ATOMIC);
  // TODO: Assemble python into code variable.
  var code = 'InsightGenerator(' + value_explanations + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, pythonGenerator.ORDER_ATOMIC];
};

generator['calculateexplainersimilarity'] = function(block) {
  var value_insights = pythonGenerator.valueToCode(block, 'insights', pythonGenerator.ORDER_ATOMIC);
  var value_explainer1 = pythonGenerator.valueToCode(block, 'explainer1', pythonGenerator.ORDER_ATOMIC);
  var value_explainer2 = pythonGenerator.valueToCode(block, 'explainer2', pythonGenerator.ORDER_ATOMIC);
  // TODO: Assemble python into code variable.
  var code = ('' + value_insights + '.calculateExplainerSimilarity(' + value_explainer1 + ', ' + value_explainer2 + ')');
  return code;
};
