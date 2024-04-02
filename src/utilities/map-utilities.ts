export function addValueToArrayInMap<K, V>(map: Map<K, V[]>, key: K, value: V) {
  addValueToArrayInMapAndReturnArray(map, key, value);
}

export function addValueToArrayInMapAndReturnArray<K, V>(
  map: Map<K, V[]>,
  key: K,
  value: V
) {
  const array = map.get(key) || [];
  array.push(value);
  map.set(key, array);

  return array;
}

export function incrementValueInMap<K>(
  map: Map<K, number>,
  key: K,
  incrementValue = 1
) {
  incrementValueInMapAndReturnValue(map, key, incrementValue);
}

export function incrementValueInMapAndReturnValue<K>(
  map: Map<K, number>,
  key: K,
  incrementValue = 1
) {
  const value = (map.get(key) || 0) + incrementValue;
  map.set(key, value);

  return value;
}
