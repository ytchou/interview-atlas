---
status: todo
---

# 9. Matching & Propensity Scores

!!! warning "Under construction"
    This chapter is pending — content will be ported from the Notion cheatsheet.

## Key Concepts (Preview)

- **Propensity Score**: the probability of receiving treatment given observed covariates: \(e(X) = P(T=1 | X)\)
- **Matching**: pair treated and control units with similar propensity scores to reduce selection bias
- **Inverse Probability Weighting (IPW)**: weight each observation by \(1/e(X)\) for treated and \(1/(1-e(X))\) for control

## When to Use

- Observational data where randomization was not possible
- Confounders are observed and can be measured
- Treatment assignment is not deterministic (overlap assumption)
