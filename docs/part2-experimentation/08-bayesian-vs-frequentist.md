---
status: draft
---

# 8. Bayesian vs Frequentist

<!-- TODO: add image — comparison table -->

## Frequentist A/B Testing

| Aspect | Detail |
|---|---|
| **Pros** | Sample size calculation gives a clear timeline; easier to explain |
| **Cons** | Cannot interpret results as probability; must wait until experiment concludes (reaches sample size / power) |

## Bayesian A/B Testing

| Aspect | Detail |
|---|---|
| **Pros** | Can early stop → faster iteration; results interpretable as probability ("A is X% better than B"); predictive conclusions from posterior; online inference |
| **Cons** | Requires choice of prior (though non-informative prior works with large samples); no concrete timeline since there's no built-in sample size calculation |

## How Bayesian A/B Testing Works

1. Set a **prior** distribution for each variant's conversion rate (e.g. Beta(1, 1) = uniform)
2. Observe data: \(s\) successes and \(f\) failures
3. **Posterior**: Beta(\(\alpha + s\), \(\beta + f\))
4. Sample from both posteriors and compute \(P(B > A)\)

## Combating User Interference

- **Coarser-level randomization**: randomize at the cluster/geo level instead of individual
- **Network-based randomization**: create clusters based on the social graph, randomize clusters
- **Switchback experiments**: alternate treatment assignment over time periods

## Key Decision Framework

| Factor | Frequentist | Bayesian |
|---|---|---|
| Need a clear end date? | ✅ Sample size calculation | ❌ No built-in timeline |
| Want to stop early? | ❌ Must reach \(n\) | ✅ Can stop anytime |
| Stakeholders want probability? | ❌ "Reject / fail to reject" | ✅ "B is 94% likely to be better" |
| Many prior experiments? | — | ✅ Informative priors accelerate |
