export class ListNode<T = number> {
  val: T;
  next: ListNode<T> | null;
  constructor(val?: T, next?: ListNode<T> | null, defaultVal?: T) {
    this.val = val === undefined ? (defaultVal as T) : val;
    this.next = next === undefined ? null : next;
  }
}

export function arrayToListNode<T = number>(arr: T[]): ListNode<T> | null {
  if (arr.length === 0) {
    return null;
  }
  const head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

export function listNodeToArray<T = number>(head: ListNode<T> | null): T[] {
  const result: T[] = [];
  let current = head;
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  return result;
}
