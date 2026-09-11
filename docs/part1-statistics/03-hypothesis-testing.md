---
status: draft
---

# 3. Hypothesis Testing

## Summary of Testing

<!-- TODO: add image — summary of testing flowchart -->

| Test | Use case | Key assumption |
|---|---|---|
| z-test | Compare means, large \(n\), variance known | Normal data or large \(n\) (CLT) |
| t-test | Compare means, variance unknown | Normal data or large \(n\) |
| Chi-square | Compare categorical frequencies | Expected count ≥ 5 per cell |
| ANOVA (F-test) | Compare means across 3+ groups | Normal, independent, equal variance |
| Fisher's exact | 2×2 table with small counts | None (exact test) |

## Normality Tests

Some ML algorithms (Linear Regression, LDA, QDA) assume normal distributions.

- **Quantile-Quantile (QQ) Plot**: theoretical quantiles vs actual quantiles. If normal, points sit on the diagonal line
- **Kolmogorov-Smirnov (KS) Test**: tests distribution F(x) against a given distribution G(x). If \(p \leq 0.05\), reject normality
- **Shapiro-Wilk Test**: if \(p \leq 0.05\), reject normality. Generally more powerful than KS for small samples
- **Chi-Square Normality Test**: observed vs expected frequencies. If \(p \leq 0.05\), reject normality

## T-Test Methods

### One-sample T-test

Determines whether the sample mean is statistically different from a known or hypothesized population mean.

\[
t = \frac{\hat{\beta}_1 - 0}{SE(\hat{\beta}_1)}
\]

```python
scipy.stats.ttest_1samp(a, popmean, axis=0, alternative='two-sided')
```

### Two Independent Samples T-test

Tests whether 2 independent samples have identical average values.

<!-- TODO: add image — pooled standard deviation formula -->

Where \(s_p\) is the pooled standard deviation for two samples.

```python
scipy.stats.ttest_ind(a, b, axis=0, equal_var=True, alternative='two-sided')
```

### Paired Samples T-test

Tests whether 2 related or repeated samples have identical average values.

<!-- TODO: add image — paired t-test formula -->

Where \(\bar{X}_D\) and \(s_D\) are the average and standard deviation of the differences between all pairs.

```python
scipy.stats.ttest_rel(a, b, axis=0, alternative='two-sided')
```

## Z-Test Methods

### One-sample Z-test

```python
from statsmodels.stats import weightstats as stests
ztest, pval = stests.ztest(df['bp_before'], x2=None, value=156)
```

### Two-sample Z-test

```python
ztest, pval = stests.ztest(df['bp_before'], x2=df['bp_after'],
                           value=0, alternative='two-sided')
```

## F-Test / ANOVA

F-tests compare more than two groups at the same time. Better than multiple t-tests since it prevents inflating false positive rates.

### One-way ANOVA

Tests the null hypothesis that two or more groups have the same population mean:

```python
from scipy.stats import f_oneway
f_oneway(group1, group2, group3)
```

**Assumptions**: (1) normal distributions, (2) independent samples, (3) equal variances. Unequal variance → lower power.

### Two-way ANOVA

Used when there are 2 independent variables and 2+ groups:

```python
import statsmodels.api as sm
from statsmodels.formula.api import ols
model = ols('score ~ C(factor1) * C(factor2)', data=data).fit()
sm.stats.anova_lm(model, typ=2)
```

**F-statistic in regression**:

\[
F = \frac{(TSS - RSS) / p}{RSS / (n - p - 1)} \sim F_{p,\, n-p-1}
\]

## Chi-Square Test

Measures differences between categorical variables — the standardized sum of squared differences between observed and expected values:

\[
\chi^2 = \sum \frac{(\text{observed} - \text{expected})^2}{\text{expected}}
\]

**Three flavors**:

1. **Goodness of fit**: does one categorical variable match population expectations?
2. **Independence**: are two categories independent?
3. **Homogeneity**: do different subgroups come from the same population?

!!! tip "Small samples"
    When the sample size is small, use **Fisher's Exact Test**. The chi-squared test is basically an approximation of the exact test.

**Degrees of freedom**: \((\text{rows} - 1) \times (\text{columns} - 1)\)

```python
from scipy.stats import chi2_contingency
chi2, p, dof, expected = chi2_contingency(observed_table)
```
