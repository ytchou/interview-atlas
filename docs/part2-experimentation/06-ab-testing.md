---
status: draft
---

# 6. Running an A/B Test

## Before the Test

### A/A Test

An A/B test loses its luster if we can't pass A/A tests. Same design logic as A/B, but both groups get the **same treatment**.

**What it gives you**:

1. Obtain the metric's variance (\(\sigma^2\)) for sample size calculation
2. Assess if the experimentation platform works as expected
3. Run a chi-squared test to check if the observed ratio split differs from expected — if significant, there is selection bias
4. If A/A tests fail, **stop and fix the platform**

**How to detect selection bias**: in repeated A/A trials, the null hypothesis should be rejected ~5% of the time at 95% confidence. The p-values should follow a **uniform distribution** — check with a **KS test**.

### Sample Ratio Mismatch (SRM)

Happens when treatment and control groups are not equally split as expected. Check with a **chi-square test** between actual and expected split:

```python
from scipy.stats import chisquare
chisquare(f_obs=[1600, 1749], f_exp=[1675, 1675])
```

Typically use \(\alpha = 0.001\) for SRM testing.

### Sample Size Calculation

Use power analysis with significance level, statistical power, and minimum detectable effect (MDE):

```python
from statsmodels.stats.power import TTestIndPower
analysis = TTestIndPower()
result = analysis.solve_power(effect_size=0.2, alpha=0.05, power=0.8,
                              ratio=1, alternative='two-sided')
```

**Rule of thumb**: Sample Size \(\approx \frac{16\sigma^2}{\delta^2}\), where \(\delta\) is MDE.

- More samples needed if MDE is small or sample variance is large
- Number of days = sample size / daily sample size. Round to **full weeks** to capture weekly patterns.

### Choose Metrics

- **Overall Evaluation Criterion (OEC)**: weighted combination of the test's objectives
- **Characteristics of a good metric**: (1) mathematical formulation, (2) time range, (3) user groups, (4) rationale. Should be simple, clear, actionable, sensitive to real changes, and robust against noise.

**Common frameworks**:

- **AARRR**: Acquisition, Activation, Retention, Referral, Revenue
- **Customer Funnel**: Search → View → Click → Add to Cart → Purchase

### Choose Invariant Metrics

Metrics you expect **not** to change. If they move, something is broken in the setup.

### Check for Network Effects

Changes that occur due to effect **spillover to the control group** or **resource competition**.

- Social networks (spillover): real effect > observed effect
- Two-sided markets (competition): real effect < observed effect
- **Solutions**: randomize by time, location (geo-isolation), or network clusters

## Preparation

### Ramp-up Plan

Start by exposing the experiment to a small group and gradually increasing. Validates no bugs in the code before full rollout.

### Cohort Analysis

Examine specific groups of users based on behavior or time — helps identify **novelty or primacy effects**.
