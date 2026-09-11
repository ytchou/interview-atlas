---
status: draft
---

# 13. Loss Functions & Metrics

## Regression Metrics

| Metric | Formula | Notes |
|---|---|---|
| MSE | \(\frac{1}{n}\sum(y_i - \hat{y})^2\) | Penalizes large errors more |
| MAE | \(\frac{1}{n}\sum\|y_i - \hat{y}\|\) | Robust to outliers |
| SSE | \(\sum(y_i - \hat{y})^2\) | Total squared error |
| SST | \(\sum(y_i - \bar{y})^2\) | Total variance in \(y\) |
| \(R^2\) | \(1 - \frac{SSE}{SST}\) | Proportion of explained variance. Negative = worse than mean. |
| Adj. \(R^2\) | \(1 - (1-R^2)\frac{N-1}{N-p-1}\) | Penalizes extra parameters |
| RSE | \(\sqrt{\frac{1}{n-2}\text{SSE}}\) | Estimate of \(\sigma\) |

!!! warning "Caveat"
    \(R^2\) always increases with more features. Use **Adjusted \(R^2\)** or information criteria (AIC/BIC) for model selection. \(R^2\) is not valid for non-linear models.

## Regression Loss Functions

- **MSE**: standard, differentiable, penalizes outliers
- **MAE**: robust to outliers, not differentiable at 0
- **Huber Loss**: combines MSE (small errors) and MAE (large errors) — controlled by threshold \(\delta\)

## Classification Metrics

| Metric | Formula | When to use |
|---|---|---|
| **Accuracy** | \(\frac{TP + TN}{Total}\) | Balanced classes only |
| **Precision** | \(\frac{TP}{TP + FP}\) | Cost of false positives is high (e.g. spam filter) |
| **Recall** (Sensitivity, TPR) | \(\frac{TP}{TP + FN}\) | Cost of false negatives is high (e.g. disease screening) |
| **Specificity** (TNR) | \(\frac{TN}{TN + FP}\) | — |
| **F1 Score** | \(\frac{2 \cdot P \cdot R}{P + R}\) | Harmonic mean of precision and recall |
| **FPR** | \(\frac{FP}{FP + TN}\) | Used in ROC curves |

### ROC & AUC

- **ROC Curve**: plots TPR vs FPR for every decision threshold \(\alpha\)
- **AUC**: measures how likely the model differentiates positives and negatives. Perfect AUC = 1, random = 0.5.
- Interpretation: probability that a randomly chosen positive example is ranked higher than a randomly chosen negative

### Classification Loss Functions

- **Cross Entropy** (Log Loss): \(-\sum y_i \log(\hat{y}_i)\) — standard for classification
- **Weighted Cross Entropy**: weighted version for imbalanced classes
- **Hinge Loss**: used for SVM — target must be in \(\{-1, +1\}\)
- **KL Divergence**: measures how one distribution diverges from another
