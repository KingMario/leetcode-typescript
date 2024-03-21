export function addValueToArrayInMap<K, V>(map: Map<K, V[]>, key: K, value: V) {
  const values = map.get(key) || [];
  values.push(value);
  map.set(key, values);
}

export function incrementValueInMap<K>(
  map: Map<K, number>,
  key: K,
  incrementValue = 1
) {
  const value = map.get(key) || 0;
  map.set(key, value + incrementValue);
}
