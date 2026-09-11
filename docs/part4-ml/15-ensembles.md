---
status: draft
---

# 15. Ensembles & Boosting

## Ensemble Methods Overview

| Method | Strategy | Effect | Example |
|---|---|---|---|
| **Bagging** | Train in parallel on bootstrap samples | Decreases variance | Random Forest |
| **Boosting** | Train sequentially, correct previous errors | Decreases bias | AdaBoost, Gradient Boosting |
| **Stacking** | Train meta-model on base model outputs | Learns optimal weights | Any combination |

## Bagging & Random Forest

- **Bootstrap Aggregation**: train multiple models on different bootstrap samples, aggregate predictions (vote or average)
- **Random Forest**: bagging + random feature subsets at each split
    - At each split, consider only \(\sqrt{p}\) features (classification) or \(p/3\) (regression)
    - Reduces correlation between trees → better variance reduction

## Boosting

### AdaBoost

- Train weak learners sequentially
- Each learner focuses on samples the previous one got wrong (increase their weights)
- Final prediction: weighted vote of all learners

### Gradient Boosting

- Each new model fits the **residuals** (gradient of the loss) of the previous ensemble
- More flexible than AdaBoost — works with any differentiable loss function

## XGBoost vs LightGBM vs CatBoost

| Feature | XGBoost | LightGBM | CatBoost |
|---|---|---|---|
| **Tree growth** | Level-wise | Leaf-wise (faster) | Symmetric (balanced) |
| **Categoricals** | Needs encoding | Optimal split finding | Native handling (ordered target encoding) |
| **Speed** | Moderate | Fastest | Moderate |
| **Missing values** | Built-in handling | Built-in handling | Built-in handling |
| **Regularization** | L1 + L2 on weights | L1 + L2 on weights | L2 + random permutations |
| **Best for** | General purpose | Large datasets, speed | Categorical-heavy data |

## Case-Control Sampling

When the positive class is very rare, you can undersample the negative class (case-control design). Adjust the intercept afterward:

\[
\hat{\beta}_0^* = \hat{\beta}_0 + \log\left(\frac{\pi}{1-\pi}\right) - \log\left(\frac{\tilde{\pi}}{1-\tilde{\pi}}\right)
\]

Where \(\pi\) is the true prevalence and \(\tilde{\pi}\) is the sampled prevalence.
