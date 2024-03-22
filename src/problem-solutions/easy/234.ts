import {
  ListNode,
  listNodeToArray,
} from "../../data-structure";

function isPalindrome(head: ListNode | null): boolean {
  const values = listNodeToArray(head);
  const reversedValues = [...values].reverse();

  return values.join("") === reversedValues.join("");
}

function isPalindromeV2(head: ListNode | null): boolean {
  const values = listNodeToArray(head);
  const { length } = values;

  for (let i = 0; i < length / 2; i++) {
    if (values[i] !== values[length - 1 - i]) {
      return false;
    }
  }

  return true;
}

function isPalindromeV3(head: ListNode | null): boolean {
  let reversed: ListNode | null = null;
  let current = head;

  let count = 0;

  while (current) {
    const next = current.next;
    reversed = new ListNode(current.val, reversed);
    current = next;
    count++;
  }

  count /= 2;

  while (reversed && count--) {
    if (reversed.val !== head?.val) {
      return false;
    }
    reversed = reversed.next;
    head = head?.next;
  }

  return true;
}

export const solutions = [isPalindrome, isPalindromeV2, isPalindromeV3];
