---
status: draft
---

# 22. ML System Design

## Framework

1. **Problem formulation**: clarify the goal, define success metrics, identify constraints
2. **Data**: what data is available? How to collect, label, store?
3. **Feature engineering**: raw data to features. Online vs offline features.
4. **Model selection**: start simple (logistic regression, gradient boosting), then consider deep learning
5. **Training**: offline batch training, online learning, or fine-tuning
6. **Evaluation**: offline metrics (AUC, F1, NDCG) + online metrics (CTR, revenue, latency)
7. **Serving**: batch vs real-time inference, latency requirements, model size
8. **Monitoring**: data drift, model degradation, A/B testing

## Common Design Topics

### Recommendation System

- **Collaborative filtering**: user-user or item-item similarity
- **Content-based**: features of items + user profile
- **Two-stage**: candidate generation (fast, recall-focused) then ranking (slower, precision-focused)
- **Cold start**: new users/items with no history - use content features or popular items

### Search Ranking

- **Query understanding**: spell correction, query expansion, intent classification
- **Retrieval**: inverted index, approximate nearest neighbors
- **Ranking**: learning-to-rank (pointwise, pairwise, listwise)
- **Metrics**: NDCG, MRR, precision@k

### Ads / Click-Through Rate Prediction

- **Features**: ad features, user features, context features, cross features
- **Model**: logistic regression then GBDT then deep models (Wide & Deep, DeepFM)
- **Serving**: sub-10ms latency requirement - feature caching, model distillation

### Fraud Detection

- **Challenges**: extreme class imbalance, adversarial behavior, evolving patterns
- **Approach**: rule-based filters then ML scoring then human review queue
- **Features**: velocity, device fingerprint, behavioral patterns, graph features
