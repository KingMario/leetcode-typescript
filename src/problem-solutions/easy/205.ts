import {
  incrementValueInMapAndReturnValue,
  pushElementToArrayInMapAndReturnArray,
} from "../../utilities";

function isIsomorphic(s: string, t: string): boolean {
  const { length } = s;
  const sCharOccurrencesMap = new Map<string, number[]>();
  const tCharOccurrencesMap = new Map<string, number[]>();

  for (let i = 0; i < length; i++) {
    if (
      pushElementToArrayInMapAndReturnArray(sCharOccurrencesMap, s[i], i).join(
        ""
      ) !==
      pushElementToArrayInMapAndReturnArray(tCharOccurrencesMap, t[i], i).join(
        ""
      )
    ) {
      return false;
    }
  }

  return true;
}

function isIsomorphicV2(s: string, t: string): boolean {
  const { length } = s;
  const sCharFeatureMap = new Map<string, number>();
  const tCharFeatureMap = new Map<string, number>();

  for (let i = 0; i < length; i++) {
    const value = (i + 1) * (i + 1);
    if (
      incrementValueInMapAndReturnValue(sCharFeatureMap, s[i], value) !==
      incrementValueInMapAndReturnValue(tCharFeatureMap, t[i], value)
    ) {
      return false;
    }
  }

  return true;
}

function isIsomorphicV3(s: string, t: string): boolean {
  const { length } = s;
  const sLastSeenMap = new Map<string, number>();
  const tLastSeenMap = new Map<string, number>();

  for (let i = 0; i < length; i++) {
    if (sLastSeenMap.get(s[i]) !== tLastSeenMap.get(t[i])) {
      return false;
    }

    sLastSeenMap.set(s[i], i);
    tLastSeenMap.set(t[i], i);
  }

  return true;
}

export const solutions = [isIsomorphic, isIsomorphicV2, isIsomorphicV3];
