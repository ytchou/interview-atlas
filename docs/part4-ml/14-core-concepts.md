---
status: draft
---

# 14. Core Concepts

## Bias-Variance Tradeoff

<!-- TODO: add image — bias-variance diagram -->

- **Expected Test Error** = Bias² + Variance + Irreducible Error
- **High Bias** (underfitting): model too simple, misses patterns
- **High Variance** (overfitting): model too complex, fits noise

| Problem | Symptom | Fix |
|---|---|---|
| High bias | Train & test error both high | More features, more complex model, less regularization |
| High variance | Train error low, test error high | More data, regularization, simpler model, dropout |

## Regularization

### L1 (Lasso) vs L2 (Ridge)

<!-- TODO: add image — L1 vs L2 contour plot -->

| | L1 (Lasso) | L2 (Ridge) |
|---|---|---|
| **Penalty** | \(\lambda \sum\|\beta_j\|\) | \(\lambda \sum \beta_j^2\) |
| **Effect** | Drives coefficients to exactly 0 → feature selection | Shrinks coefficients toward 0 but rarely exactly 0 |
| **Geometry** | Diamond constraint → corners at axes | Circle constraint → smooth shrinkage |
| **When** | Suspect many irrelevant features | All features matter, want to reduce magnitude |

**Elastic Net**: combines L1 and L2 penalties.

### Variance Inflation Factor (VIF)

Measures multicollinearity severity: \(\text{VIF}_i = \frac{1}{1 - R_i^2}\), where \(R_i^2\) is from regressing \(X_i\) against all other variables. VIF > 10 suggests problematic multicollinearity.

## Gradient Descent

Iteratively update parameters in the direction of steepest descent:

\[
\theta_{t+1} = \theta_t - \eta \nabla L(\theta_t)
\]

| Variant | Batch size | Pros | Cons |
|---|---|---|---|
| Batch GD | Full dataset | Stable convergence | Slow, memory intensive |
| Stochastic GD | 1 sample | Fast, can escape local minima | Noisy updates |
| Mini-batch GD | Small batch | Good tradeoff | Requires batch size tuning |

**Learning rate**: too high → diverge, too low → slow. Use **learning rate schedulers** or **adaptive methods** (Adam, RMSProp).

## MLE vs MAP

- **Maximum Likelihood Estimation (MLE)**: find parameters that maximize \(P(\text{data} | \theta)\)
    - Equivalent to minimizing negative log-likelihood
    - No prior assumption about parameters
- **Maximum A Posteriori (MAP)**: find parameters that maximize \(P(\theta | \text{data}) \propto P(\text{data} | \theta) \cdot P(\theta)\)
    - Incorporates a prior belief about \(\theta\)
    - MAP with Gaussian prior = MLE with L2 regularization
    - MAP with Laplace prior = MLE with L1 regularization

## Expectation-Maximization (EM)

Iterative algorithm for finding MLE when data has latent (hidden) variables.

1. **E-step**: Estimate the values of the latent variables given current parameters
2. **M-step**: Maximize the likelihood given the estimated latent variables

Used in: Gaussian Mixture Models, Hidden Markov Models, missing data imputation.

## Feature Engineering & Selection

- **Feature selection methods**: filter (correlation, mutual information), wrapper (forward/backward selection), embedded (L1 regularization)
- **Handling missing data**: deletion, imputation (mean, median, mode, KNN, MICE)
- **Handling imbalanced classes**: oversampling (SMOTE), undersampling, class weights, cost-sensitive learning
