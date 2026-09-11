---
status: draft
---

# 1. Probability Foundations

## Random Variables

- **Random Variable**: a variable whose value is unknown, or a function that assigns values to each of an experiment's outcomes
- **Random Variate**: a realization of a random variable — specific outcome values like \(\{1, 2, 3, 4, 5, 6\}\)

## Expected Value & Variance

**Expected Value**: \(E[X] = \sum x_i p_i\)

- \(E[X + Y] = E[X] + E[Y]\) (always)
- \(E[XY] = E[X]E[Y]\) only if \(X\) and \(Y\) are independent

**Variance**: \(\text{Var}(X) = E[X^2] - (E[X])^2\)

- \(\text{Var}(X \pm Y) = \text{Var}(X) + \text{Var}(Y) \pm 2\text{Cov}(X,Y)\)
- \(\text{Var}(aX \pm b) = a^2 \text{Var}(X)\)

**Standard Error**: the standard deviation of the estimator — tells us how far the sample estimate deviates from the actual parameter.

## Covariance & Correlation

**Covariance**: measures the direction of the joint linear relationship of two variables (not necessarily between -1 and 1):

\[
\text{Cov}(x,y) = \frac{\sum (x_i - \bar{x})(y_i - \bar{y})}{n-1}
\]

- High covariance does **not** necessarily mean high relationship, because the value is not normalized.

**Correlation**: normalizes covariance to provide both strength and direction:

\[
r = \frac{\text{Cov}(x,y)}{\sigma_x \sigma_y}
\]

- Independent variables are uncorrelated, but the inverse is not necessarily true
- **Pearson coefficient**: works with linear relationships, using raw values; more sensitive to outliers
- **Spearman coefficient**: works with monotonic relationships, using ranks/orders instead of raw values

## Conditional Probability & Bayes

**Conditional Probability**: \(P(A|B) = \frac{P(A \cap B)}{P(B)}\)

- If \(A\) and \(B\) are independent, then \(P(A \cap B) = P(A)P(B)\)

**Union**: \(P(A \cup B) = P(A) + P(B) - P(A \cap B)\)

**Bayes' Theorem**:

\[
P(A|B) = \frac{P(B|A) \cdot P(A)}{P(B)}
\]

## Central Limit Theorem

When independent random variables are randomly sampled, the **sampling mean** tends toward a normal distribution even if the original variables themselves are not normally distributed.

**Assumptions**:

1. The data must be sampled randomly
2. Samples should be independent of each other
3. The sample size should be sufficiently large

## Probability vs Likelihood

- **Probability**: measures the chance of observing a specific outcome in the future, given known parameters or distributions
- **Likelihood**: measures how well a set of underlying parameters explains the observed outcomes, given the outcomes are already observed
    - Likelihood is a function that calculates the probability that a particular set of parameters is the most suitable explanation for the observed data
    - Unlike probability, the values of a likelihood function do not necessarily sum up to 1

## Errors & Hypothesis Testing Basics

| | Reality: H₀ True | Reality: H₀ False |
|---|---|---|
| **Reject H₀** | Type I Error (False Positive) | ✅ Correct |
| **Fail to reject H₀** | ✅ Correct | Type II Error (False Negative) |

<!-- TODO: add image — Type I / Type II error diagram -->

- **P-value**: probability that an effect could have occurred by chance. If less than \(\alpha\), reject the null hypothesis
- **Confidence Level** (\(1 - \alpha\)): probability of avoiding a Type I error
- **Confidence Interval**: estimated interval that may or may not contain the true parameter. A 95% CI means: 95% of the time, when we calculate a CI this way, the true value will be within the interval
- **Power** (\(1 - \beta\)): probability of detecting a real effect — avoiding a Type II error
- **Degree of Freedom**: the number of independent dimensions needed before the parameter estimate can be determined

## Skewness & Kurtosis

**Skewness**: degree of asymmetry in a probability distribution

- **Left Skew** (negative, long-tail on the left): Mean < Median ≤ Mode
- **Right Skew** (positive, long-tail on the right): Mean > Median ≥ Mode
- **Pearson's measure**: \(Sk = 3(\bar{X} - \tilde{X}) / \sigma\)

**Kurtosis**: measure of tailed-ness

- **Leptokurtic** (positive): tall and thin, fatter tails
- **Mesokurtic**: a normal distribution
- **Platykurtic** (negative): flat and wide, thin tails

## Bayesian vs Frequentist (Preview)

- **Frequentist**: conclusions based on expected frequency of events out of many repetitions
- **Bayesian**: described using probability distributions, as a degree of belief that a random event will happen. Requires forming a prior belief as a probability distribution

**Bayes Error Rate**: the optimal (irreducible) error rate. For tasks humans are good at, human performance estimates the Bayes rate. This divides bias into unavoidable bias (Bayes error) and avoidable bias (gap between Bayes error and training error).

## Mutual Information

Measures the dependency between variables. Strictly non-negative — equals zero if and only if the two variables are independent. Higher values mean higher dependency.

## Key Test Statistics

- **z-score**: \(Z = \frac{x - \mu}{\sigma}\) — number of standard deviations from the mean; used when \(n\) is large and variance is known
- **t-score**: \(t = \frac{x - \mu}{s / \sqrt{n}}\) — uses standard error; used when population variance is unknown; converges to z-test when \(n\) is large
- **Chi-Square**: \(\chi^2 = \sum \frac{(\text{observed} - \text{expected})^2}{\text{expected}}\)
    - **Goodness of fit**: does one categorical variable match population expectations?
    - **Independence**: are two categories independent?
    - **Homogeneity**: do different subgroups come from the same population?
    - When sample size is small, use **Fisher's Exact Test** instead
    - Degrees of freedom: \((\text{rows} - 1) \times (\text{columns} - 1)\)
- **ANOVA / F-statistic**: tests whether means across 3+ groups differ. Tells you at least one group differs, but not which ones.
    - Assumes: normal distributions, independent samples, equal variances
    - \(F = \frac{(TSS - RSS)/p}{RSS/(n - p - 1)}\)
