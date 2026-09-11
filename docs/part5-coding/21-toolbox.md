---
status: draft
---

# 21. Toolbox

## Regular Expressions

Tool: [regex101.com](https://regex101.com/)

### Core Operators

| Operator | Meaning | Example |
|---|---|---|
| `[]` | Match one character in set | `[abc]`, `[a-z0-9]` |
| `.` | Any single character (except newline) | `a.b` matches "acb" |
| `+` | 1 or more of preceding | `a+` matches "aaa" |
| `*` | 0 or more of preceding | `a*` matches "" or "aaa" |
| `{n}` | Exactly n times | `\w{3}` matches "abc" |
| `{n,m}` | Between n and m times | `\w{2,4}` |
| `^` | Start of string | `^Hello` |
| `$` | End of string | `world$` |
| `\b` | Word boundary | `\bword\b` |

### Meta Sequences

- `\w` = letter, digit, underscore = `[a-zA-Z0-9_]`
- `\W` = anything except `\w`
- `\d` = any digit = `[0-9]`
- `\D` = anything except digit

### Examples

- `d\w*e` - starts with d, any word chars, ends with e
- `\bi\w*` - word starting with i

## Git Commands

| Command | Purpose |
|---|---|
| `git stash` | Temporarily save uncommitted changes |
| `git rebase` | Reapply commits on top of another base |
| `git cherry-pick <hash>` | Apply a single commit from another branch |
| `git bisect` | Binary search for the commit that introduced a bug |
| `git reflog` | History of HEAD changes - recover lost commits |
| `git log --oneline --graph` | Visual branch history |

## Bitwise Operations

| Operator | Symbol | Example |
|---|---|---|
| AND | `&` | `5 & 3 = 1` |
| OR | `\|` | `5 \| 3 = 7` |
| XOR | `^` | `5 ^ 3 = 6` |
| NOT | `~` | `~5 = -6` |
| Left shift | `<<` | `1 << 3 = 8` |
| Right shift | `>>` | `8 >> 2 = 2` |

Common trick: `n & (n-1)` removes the lowest set bit.
