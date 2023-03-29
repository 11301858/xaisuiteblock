[{
  "type": "train",
  "message0": "model %1 explainer %2 data %3 %4",
  "args0": [
    {
      "type": "input_value",
      "name": "model",
      "check": "String",
      "align": "CENTRE"
    },
    {
      "type": "input_value",
      "name": "explainers",
      "check": "Array",
      "align": "CENTRE"
    },
    {
      "type": "input_value",
      "name": "data",
      "check": "String",
      "align": "CENTRE"
    },
    {
      "type": "input_value",
      "name": "cut",
      "check": "String",
      "align": "CENTRE"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "Train a machine learning model",
  "helpUrl": "github.com/11301858/XAISuite"
},
{
  "type": "compare",
  "message0": "%1",
  "args0": [
    {
      "type": "input_value",
      "name": "Data Files",
      "check": "Array",
      "align": "CENTRE"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "Compare two explanations",
  "helpUrl": "github.com/11301858/XAISuite"
}]