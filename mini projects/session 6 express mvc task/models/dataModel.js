let store = [];
let idCounter = 1;

exports.validatePayload = (payload) => {
  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
    return { valid: false, message: 'Request body must be a JSON object.' };
  }
  const keys = Object.keys(payload);
  if (keys.length === 0) return { valid: false, message: 'JSON body must have at least one field.' };
  return { valid: true };
};

exports.save = (payload) => {
  const record = { id: idCounter++, payload, createdAt: new Date().toISOString() };
  store.push(record);
  return record;
};

exports.all = () => store.slice();
