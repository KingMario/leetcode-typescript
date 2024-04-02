import {
  incrementValueInMap,
  incrementValueInMapAndReturnValue,
  pushElementToArrayInMap,
  pushElementToArrayInMapAndReturnArray,
} from "./map-utilities";

describe("addValueToArrayInMap", () => {
  it("should create a new array if no array exists for the key", () => {
    const map = new Map<string, number[]>();

    pushElementToArrayInMap(map, "key", 1);

    expect(map.get("key")).toEqual([1]);
  });

  it("should push the element to the array for a key in the map", () => {
    const map = new Map<string, number[]>();
    map.set("key", [1]);

    pushElementToArrayInMap(map, "key", 2);

    expect(map.get("key")).toEqual([1, 2]);
  });
});

describe("addValueToArrayInMapAndReturnArray", () => {
  it("should create a new array if no array exists for the key and return the array", () => {
    const map = new Map<string, number[]>();

    expect(pushElementToArrayInMapAndReturnArray(map, "key", 1)).toEqual([1]);
  });

  it("should push the element to the array for a key in the map and return the array", () => {
    const map = new Map<string, number[]>();
    map.set("key", [1]);

    expect(pushElementToArrayInMapAndReturnArray(map, "key", 2)).toEqual([
      1, 2,
    ]);
  });
});

describe("incrementValueInMap", () => {
  it("should create a new value if no value exists for the key", () => {
    const map = new Map<string, number>();
    incrementValueInMap(map, "key");

    expect(map.get("key")).toBe(1);
  });

  it("should increment the value for a key in the map", () => {
    const map = new Map<string, number>();
    map.set("key", 1);

    incrementValueInMap(map, "key");

    expect(map.get("key")).toBe(2);
  });

  it("should use the provided increment value", () => {
    const map = new Map<string, number>();
    map.set("key", 2);

    incrementValueInMap(map, "key", 3);

    expect(map.get("key")).toBe(5);
  });
});

describe("incrementValueInMapAndReturnValue", () => {
  it("should create a new value if no value exists for the key and return the new value", () => {
    const map = new Map<string, number>();
    expect(incrementValueInMapAndReturnValue(map, "key")).toBe(1);
  });

  it("should increment the value for a key in the map and return the new value", () => {
    const map = new Map<string, number>();
    map.set("key", 1);

    expect(incrementValueInMapAndReturnValue(map, "key")).toBe(2);
  });

  it("should use the provided increment value and return the new value", () => {
    const map = new Map<string, number>();
    map.set("key", 2);

    expect(incrementValueInMapAndReturnValue(map, "key", 3)).toBe(5);
  });
});
