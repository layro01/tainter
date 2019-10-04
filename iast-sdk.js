function taintObject(obj) {
  // LiveTrack will kick in here and taint the object.
  console.log(`Tainted object ${obj}`);
  return obj;
}

module.exports.taintObject = taintObject;
