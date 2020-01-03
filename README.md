# Vue.js prakticky

Podklady k školeniu [Vue.js prakticky](https://www.vzhurudolu.cz/kurzy/vue-js).

## Spustenie ukážok

Niektoré ukážky vyžadujú externé závislosti, ktoré nainštalujete pomocou:

```
npm install
```

Najjednoduchší spôsob, ako spustiť ukážky, je použiť `vue serve`. Nainštalujte si globálne tento balíček:

```
npm install -g @vue/cli-service-global
```

Potom môžete jednotlivé príklady spustiť napríklad takto:

```
vue serve model/index.vue
```

## Server s datami pre ukážkový eshop

Ukážkové data a jednoduchý lokálny server s API pre ukážkový eshop sú v adresári `_sample`.

Najprv nainštalujte jeho závislosti a potom server naštartujte:

```
cd _sample
npm install
npm run server
```

Server pobeží na [localhost:3000](http://localhost:3000/). Na tejto adrese uvidíte prehľad všetkých endpointov, ktoré server poskytuje.
