---
status: draft
---

# 11. Regression Discontinuity Design

<!-- TODO: add image — RDD illustration -->

## Intuition

Measures the treatment effect at a **cutoff** — can only apply RDD if there is a clear cutoff separating treatment and control groups.

Subjects close to the cutoff are quite alike, and **randomness is the only reason** they fall on different sides. This makes the comparison quasi-random near the cutoff.

## Key Concepts

- **Running variable**: the variable that determines treatment assignment (e.g. test score)
- **Cutoff**: the threshold value that assigns treatment
- **Bandwidth**: how close to the cutoff we look — narrower = more valid but less power

## Sharp vs Fuzzy RDD

- **Sharp RDD**: treatment is deterministically assigned at the cutoff. Everyone above gets treatment, everyone below does not.
- **Fuzzy RDD**: the cutoff increases the probability of treatment but doesn't guarantee it. Use the cutoff as an instrumental variable (IV).

## Assumptions

1. **No manipulation**: subjects cannot precisely manipulate their value of the running variable to be on a specific side of the cutoff
2. **Continuity**: the expected potential outcomes are continuous at the cutoff (no other discontinuity)

## Estimation

Fit separate regressions on each side of the cutoff. The treatment effect is the **jump at the cutoff**:

\[
\hat{\tau} = \lim_{x \to c^+} E[Y|X=x] - \lim_{x \to c^-} E[Y|X=x]
\]

**Bandwidth selection**: too wide → bias from functional form; too narrow → high variance. Use cross-validation or optimal bandwidth selectors.

## Limitations

- Only estimates a **Local Average Treatment Effect (LATE)** at the cutoff — not generalizable to the full population
- Requires a large sample near the cutoff
- Functional form matters: linear, polynomial, or local linear regression
