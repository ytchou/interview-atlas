---
status: draft
---

# 19. Data Structures & Algorithms

## Interview Structure

1. State the problem clearly. Identify input & output formats.
2. Come up with example inputs & outputs. Cover edge cases.
3. Come up with a correct solution in plain English.
4. Implement and test with examples. Fix bugs.
5. Analyze complexity and identify inefficiencies.
6. Apply techniques to overcome inefficiencies. Repeat 3-6.

## Big O Notation

1. Find the fastest growing term
2. Drop all coefficients

| Complexity | Name | Example |
|---|---|---|
| O(1) | Constant | Hash lookup |
| O(log n) | Logarithmic | Binary search |
| O(n) | Linear | Single pass |
| O(n log n) | Linearithmic | Merge sort |
| O(n^2) | Quadratic | Nested loops |
| O(2^n) | Exponential | Subsets |

<!-- TODO: add image - complexity cheatsheet -->

## Sorting Algorithms

| Algorithm | Best | Average | Worst | Space | Stable |
|---|---|---|---|---|---|
| Merge Sort | O(n log n) | O(n log n) | O(n log n) | O(n) | Yes |
| Quick Sort | O(n log n) | O(n log n) | O(n^2) | O(log n) | No |
| Insertion Sort | O(n) | O(n^2) | O(n^2) | O(1) | Yes |
| Selection Sort | O(n^2) | O(n^2) | O(n^2) | O(1) | No |

## Core Data Structures

### Arrays & Strings
- Contiguous memory, O(1) access by index, O(n) insert/delete

### Linked Lists
- O(1) insert/delete at head, O(n) access by index
- Singly vs doubly linked

### Hash Tables
- O(1) average lookup/insert/delete
- Handle collisions: chaining or open addressing

### Trees
- **Binary Search Tree**: left < root < right
- **Balanced BST** (AVL, Red-Black): O(log n) operations
- **Traversals**: inorder (left, root, right), preorder (root, left, right), postorder (left, right, root)

### Graphs
- **Representations**: adjacency matrix vs adjacency list
- **BFS**: level-by-level, uses queue - shortest path in unweighted graphs
- **DFS**: dive deep first, uses stack - topological sort, cycle detection

### Heaps
- **Min-heap**: parent <= children. O(log n) insert/extract-min, O(1) peek
- Used in: priority queues, K-th largest element, merge K sorted lists

### Stacks & Queues
- **Stack**: LIFO - function calls, parentheses matching
- **Queue**: FIFO - BFS, task scheduling
