---
status: draft
---

# 7. A/B Testing Pitfalls

## Multiple Testing Problem

When conducting multiple tests, using \(\alpha\) as significance level inflates the false discovery rate.

**Example**: running 3 tests → P(at least one false positive) = \(1 - 0.95^3 = 14\%\)

**Solutions**:

1. **Bonferroni Correction**: run each test at \(\alpha / n\) significance level. Simple but too conservative.
2. **Control False Discovery Rate (FDR)**: \(E[\text{FP} / \text{rejections}]\). Makes sense only with many tests.
3. **Tiered approach** (from *Trustworthy Online Controlled Experiments*):
    - Step 1: Separate metrics into 3 groups — expected to change, unsure, expected NOT to change
    - Step 2: Apply tiered significance levels — highest for expected impacts, lowest for unexpected

## Primacy & Novelty Effects

- **Primacy Effect**: change aversion — users are reluctant to adopt changes. Should monitor long-term metric performance, not just short-term. No p-hacking!
- **Novelty Effect**: users try new things enthusiastically at first, then revert.
- **Solution**: run tests only on first-time users, or segment treatment/control into first-time vs. returning users

## Network Effect

Changes that spillover to the control group or create resource competition.

| Scenario | Impact | Example |
|---|---|---|
| Social network (spillover) | Real effect > observed | Facebook features |
| Two-sided market (competition) | Real effect < observed | Uber driver incentives |

**Solution**: randomize users based on time (time-based), location (geo-isolation), or cluster (network clusters)

## Simpson's Paradox

Individual and aggregated patterns look different, especially in ramp-up experiments.

**Solutions**:

1. Adopt **paired t-tests** on data when proportions are stable (compare treatment Day 1 vs control Day 1)
2. Use **weighted sums** to adjust for different ratios
3. Throw away the data from the ramp-up period and analyze only at full traffic

## Other Pitfalls

- **Peeking**: checking results before reaching required sample size inflates false positives. Use **sequential testing** methods if early stopping is needed.
- **Interference between experiments**: when multiple experiments run simultaneously, interactions can bias results. Use **mutual exclusion** or **layered experiment frameworks**.
- **Survivorship bias**: analyzing only users who completed the experiment, ignoring those who dropped out.
