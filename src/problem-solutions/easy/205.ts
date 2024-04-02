import {
  incrementValueInMapAndReturnValue,
  pushElementToArrayInMap,
} from "../../utilities";

function isIsomorphic(s: string, t: string): boolean {
  const { length } = s;
  const sMap = new Map<string, number[]>();
  const tMap = new Map<string, number[]>();

  for (let i = 0; i < length; i++) {
    pushElementToArrayInMap(sMap, s[i], i);
    pushElementToArrayInMap(tMap, t[i], i);
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
    const value = (i + 1) * (i + 1);
    if (
      incrementValueInMapAndReturnValue(sMap, s[i], value) !==
      incrementValueInMapAndReturnValue(tMap, t[i], value)
    ) {
      console.log(sMap, tMap);
      return false;
    }

    console.log(sMap, tMap);
  }

  return true;
}

export const solutions = [isIsomorphic, isIsomorphicV2];
