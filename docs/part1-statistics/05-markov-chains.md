---
status: draft
---

# 5. Markov Chains

## Intuition

A stochastic and **memoryless** process that predicts future events based only on the current state — the past does not matter given the present.

## Key Properties

- **Markov Property**: \(P(X_{t+1} | X_t, X_{t-1}, \ldots) = P(X_{t+1} | X_t)\)
- **Transition Matrix**: a matrix \(P\) where \(P_{ij}\) is the probability of moving from state \(i\) to state \(j\). Each row sums to 1.
- **Stationary Distribution**: a distribution \(\pi\) such that \(\pi P = \pi\). The chain converges to this regardless of starting state (if ergodic).
- **Ergodic Chain**: a chain that is both irreducible (every state reachable from every other) and aperiodic (no fixed cycle length).

## Applications in Data Science

- PageRank
- Hidden Markov Models (HMM) for sequence modeling
- Markov Chain Monte Carlo (MCMC) for sampling from complex distributions
