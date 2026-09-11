---
status: draft
---

# 16. Clustering

## K-Means

- **Algorithm**: assign points to nearest centroid, recompute centroids, repeat until convergence
- **K selection**: Elbow method (plot inertia vs K), Silhouette score
- **Limitations**: assumes spherical clusters, sensitive to initialization (use K-means++), must specify K

## Hierarchical Clustering

- **Agglomerative** (bottom-up): start with each point as its own cluster, merge closest pairs
- **Divisive** (top-down): start with one cluster, recursively split
- **Linkage methods**: single (min distance), complete (max distance), average, Ward (minimize variance)
- **Dendrogram**: tree visualization that shows merge order and distances — cut at desired height to get K clusters

## Gaussian Mixture Models (GMM)

- **Generative model**: assumes data comes from a mixture of K Gaussian distributions
- **Each cluster**: has its own mean, covariance, and mixing weight
- **Fitted with**: Expectation-Maximization (EM) algorithm
- **Advantages over K-means**: soft assignments (probabilities), can model elliptical clusters
- **Model selection**: BIC or AIC to choose number of components

## DBSCAN

- **Density-Based Spatial Clustering of Applications with Noise**
- **Parameters**: \(\epsilon\) (neighborhood radius), MinPts (minimum points to form a dense region)
- **Point types**: core (≥ MinPts neighbors), border (near a core point), noise (neither)
- **Advantages**: no need to specify K, finds arbitrary-shaped clusters, identifies noise points
- **Limitations**: struggles with varying density clusters, sensitive to \(\epsilon\) and MinPts
