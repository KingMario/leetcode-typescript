import {
  arrayToListNode,
  ListNode,
  listNodeToArray,
} from "./list";

describe('ListNode', () => {
  it('should create a node with the given value and next node', () => {
    const nextNode = new ListNode(2);
    const node = new ListNode(1, nextNode);

    expect(node.val).toBe(1);
    expect(node.next).toBe(nextNode);
  });

  it('should use default value if no value is provided', () => {
    const node = new ListNode(undefined, undefined, 3);

    expect(node.val).toBe(3);
    expect(node.next).toBeNull();
  });
});

describe('arrayToListNode', () => {
  it('should convert an array to a linked list', () => {
    const arr = [1, 2, 3];
    const list = arrayToListNode(arr);

    expect(list).toBeInstanceOf(ListNode);
    expect(list?.val).toBe(1);
    expect(list?.next?.val).toBe(2);
    expect(list?.next?.next?.val).toBe(3);
    expect(list?.next?.next?.next).toBeNull();
  });

  it('should return null for an empty array', () => {
    const list = arrayToListNode([]);

    expect(list).toBeNull();
  });
});

describe('listNodeToArray', () => {
  it('should convert a linked list to an array', () => {
    const list = new ListNode(1, new ListNode(2, new ListNode(3)));
    const arr = listNodeToArray(list);

    expect(arr).toEqual([1, 2, 3]);
  });

  it('should return an empty array for a null list', () => {
    const arr = listNodeToArray(null);

    expect(arr).toEqual([]);
  });
});
