[{
  "type": "train",
  "message0": "train %1 with  %2 and explain it with %3",
  "args0": [
    {
      "type": "input_value",
      "name": "model",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "data",
      "check": "Tabular"
    },
    {
      "type": "input_value",
      "name": "explainers",
      "check": "Array"
    }
  ],
  "inputsInline": true,
  "colour": 230,
  "tooltip": "Trains a machine learning model",
  "helpUrl": "GitHub.com/11301858/XAISuite"
},
{
  "type": "load_data",
  "message0": "filename: %1 target: %2 cut: %3",
  "args0": [
    {
      "type": "input_value",
      "name": "data",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "target",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "cut",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "output": "Tabular",
  "colour": 0,
  "tooltip": "Loads data from a path",
  "helpUrl": "GitHub.com/11301858/XAISuite"
},
{
  "type": "compare_explanations",
  "message0": "filenames %1",
  "args0": [
    {
      "type": "input_value",
      "name": "filenames",
      "check": "Array"
    }
  ],
  "colour": 120,
  "tooltip": "Compare explanations",
  "helpUrl": "github.com/11301858/XAISuite"
},
{
  "type": "model",
  "message0": "model %1",
  "args0": [
    {
      "type": "input_value",
      "name": "model",
      "check": "String"
    }
  ],
  "output": "String",
  "colour": 65,
  "tooltip": "Instantiates a model",
  "helpUrl": "GitHub.com/11301858/XAISuite"
},
{
  "type": "explainers",
  "message0": "explainers %1",
  "args0": [
    {
      "type": "input_value",
      "name": "explainers",
      "check": "Array"
    }
  ],
  "output": "Array",
  "colour": 160,
  "tooltip": "Instantiates explainers",
  "helpUrl": "GitHub.com/11301858/XAISuite"
}]