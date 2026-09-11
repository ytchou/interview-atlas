---
status: draft
---

# 12. Meta-Learners & Double ML

## Meta-Learners

Meta-learners estimate **heterogeneous treatment effects** — how much a treatment helps different individuals.

### S-Learner

A single model trained with the treatment variable as a boolean feature.

<!-- TODO: add image — S-learner diagram -->

1. Train one model: \(\hat{Y} = f(X, T)\)
2. Predict with \(T=1\) and \(T=0\) for each unit
3. Treatment effect = difference in predictions

!!! warning "Problem"
    Tends to bias treatment effect toward zero due to regularization — the model may ignore the treatment variable.

### T-Learner

Train separate models for treatment and control to address S-Learner's underestimation.

<!-- TODO: add image — T-learner diagram -->

1. Train \(\hat{Y}_1 = f_1(X)\) on treated units
2. Train \(\hat{Y}_0 = f_0(X)\) on control units
3. Treatment effect: \(\hat{\tau}(x) = \hat{Y}_1(x) - \hat{Y}_0(x)\)

!!! warning "Problem"
    When treatment and control groups have very different sizes, the model trained on the smaller group can be noisy.

### X-Learner

Two-stage model to deal with T-Learner's issues.

<!-- TODO: add image — X-learner diagram -->

1. **Stage 1**: Train separate models like T-Learner
2. **Stage 2**: Estimate individual treatment effects using cross-predictions
    - For treated: \(\tilde{\tau}_1 = Y_1 - \hat{Y}_0(X_1)\)
    - For control: \(\tilde{\tau}_0 = \hat{Y}_1(X_0) - Y_0\)
3. **Combine**: weighted average using propensity scores

## Double Machine Learning

!!! warning "Under construction"
    Detailed content pending.

**Key idea**: use ML models to partial out confounders, then estimate the causal effect on the residuals. Addresses regularization bias in high-dimensional settings.

1. Predict \(Y\) from \(X\) (nuisance model 1) → residual \(\tilde{Y}\)
2. Predict \(T\) from \(X\) (nuisance model 2) → residual \(\tilde{T}\)
3. Regress \(\tilde{Y}\) on \(\tilde{T}\) → treatment effect

Uses **cross-fitting** (sample splitting) to avoid overfitting bias.
