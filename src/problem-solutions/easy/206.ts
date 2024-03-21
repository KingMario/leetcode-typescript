import {
  arrayToListNode,
  ListNode,
  listNodeToArray,
} from "../../data-structure";

function reverseList(head: ListNode | null): ListNode | null {
  return arrayToListNode(listNodeToArray(head).reverse());
}

export const solutions = [reverseList];
