---
status: draft
---

# 20. SQL

## Order of Execution

```
FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY -> LIMIT
```

This is why you cannot use a SELECT alias in WHERE - WHERE runs before SELECT.

## Key Operations

### Joins

| Join | Returns |
|---|---|
| INNER JOIN | Matching rows in both tables |
| LEFT JOIN | All from left + matching from right (NULL if no match) |
| RIGHT JOIN | All from right + matching from left |
| FULL OUTER JOIN | All rows from both (NULL where no match) |
| CROSS JOIN | Cartesian product - every combination |
| SELF JOIN | Table joined to itself |

### DELETE vs TRUNC vs DROP

| Command | Effect |
|---|---|
| DROP | Remove the entire table |
| DELETE | Remove rows, disk space still allocated |
| TRUNCAT‌E | Delete all rows but keep table structure, release disk space |

## Window Functions

### LAG / LEAD

```sql
LAG(column, N, default) OVER (PARTITION BY ... ORDER BY ...)
LEAD(column, N, default) OVER (PARTITION BY ... ORDER BY ...)
```

LAG pulls from previous rows, LEAD from following rows.

### RANK vs DENSE_RANK vs ROW_NUMBER

| Function | Ties | Gaps |
|---|---|---|
| ROW_NUMBER() | No ties - arbitrary order | No |
| RANK() | Same rank for ties | Yes (skips next) |
| DENSE_RANK() | Same rank for ties | No (continues) |

## Common Patterns

- **Running total**: `SUM(x) OVER (ORDER BY date)`
- **Moving average**: `AVG(x) OVER (ORDER BY date ROWS BETWEEN 6 PRECEDING AND CURRENT ROW)`
- **Deduplication**: `ROW_NUMBER() OVER (PARTITION BY key ORDER BY date DESC) = 1`
- **Gaps and islands**: use ROW_NUMBER() difference technique
