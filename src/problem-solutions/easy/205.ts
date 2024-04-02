import {
  addValueToArrayInMap,
  incrementValueInMapAndReturnValue,
} from "../../utilities";

function isIsomorphic(s: string, t: string): boolean {
  const { length } = s;
  const sMap = new Map<string, number[]>();
  const tMap = new Map<string, number[]>();

  for (let i = 0; i < length; i++) {
    addValueToArrayInMap(sMap, s[i], i);
    addValueToArrayInMap(tMap, t[i], i);
  }

  return (
    [...sMap.values()].map((s) => s.join(",")).join(";") ===
    [...tMap.values()].map((t) => t.join(",")).join(";")
  );
}

function isIsomorphicV2(s: string, t: string): boolean {
  const { length } = s;
  const sMap = new Map<string, number>();
  const tMap = new Map<string, number>();

  for (let i = 0; i < length; i++) {
    if (
      incrementValueInMapAndReturnValue(sMap, s[i]) !==
      incrementValueInMapAndReturnValue(tMap, t[i])
    ) {
      return false;
    }
  }

  return true;
}

export const solutions = [isIsomorphic, isIsomorphicV2];
