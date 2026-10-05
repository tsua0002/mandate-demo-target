# mandate-demo-target

Dépôt de calcul de TVA en centimes. `total()` ajoute la TVA, mais le montant est tronqué au lieu d'être arrondi au centime le plus proche.

```bash
pnpm test
```

Le test attend un arrondi. Il échoue tant que `Math.trunc` est en place.
