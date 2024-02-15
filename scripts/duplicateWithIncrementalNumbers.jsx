let originalLayer = app.activeDocument.activeLayer;

for (let i = 1; i <= 30; i++) {
  let newLayer = originalLayer.duplicate();
  let originalLayerName = originalLayer.name;
  newLayer.name = `${originalLayerName} ${i}`;
}

// Path: scripts/duplicateWithIncrementalNumbers.jsx
