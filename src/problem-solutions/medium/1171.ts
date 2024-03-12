import { ListNode } from "../../data-structure";

function removeZeroSumSublists(head: ListNode | null): ListNode | null {
  if (!head) {
    return head;
  }

  const newHead = new ListNode(0, head);
  const map = new Map<number, ListNode>();

  map.set(0, newHead);

  let sublistRemoved = false;
  let sum = 0;
  let p: ListNode | null = head;
  while (p) {
    sum += p.val;
    const prevNode = map.get(sum);

    if (prevNode !== undefined) {
      prevNode.next = p.next;

      sublistRemoved = true;
    } else {
      map.set(sum, p);
    }

    p = p.next;
  }

  return sublistRemoved ? removeZeroSumSublists(newHead.next) : newHead.next;
}

export const solutions = [removeZeroSumSublists];
