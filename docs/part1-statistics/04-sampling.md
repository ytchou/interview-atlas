---
status: draft
---

# 4. Sampling & Resampling

## Sampling Methods

| Method | Description |
|---|---|
| **Random Sampling** | Randomly sample from the whole population |
| **Stratified Sampling** | Draw random sample from each stratum (subset based on characteristics) |
| **Cluster Sampling** | Divide data into clusters, randomly select entire clusters |
| **Systematic Sampling** | Choose items based on predetermined pattern (e.g. every 4th instance) |
| **Convenience Sampling** | Sample based on availability |
| **Purposive Sampling** | Sample based on judgment |
| **Snowball Sampling** | Existing samples nominate the next sample |

## Parametric vs Non-parametric

- **Parametric**: assumes the data come from an underlying statistical distribution. Uses a fixed number of parameters with respect to sample size
- **Non-parametric**: does not rely on any distribution. Uses a flexible number of parameters

**Example**: comparing means between two independent groups → parametric: **two-sample t-test**, non-parametric: **Wilcoxon rank sum test**

## Bootstrap

Resampling with replacement. Can be used to estimate the sampling distribution of any statistic — commonly used for estimating confidence intervals, p-values, and statistics with complex or no closed-form estimators.
