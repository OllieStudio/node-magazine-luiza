# Catálogo de cores dos produtos

## Obtendo o catálogo de cores

Primeiro é necessário instanciar o objeto `MagazineLuizaAPI`, passando o seu ID:

```js
const magazineLuiza = new MagazineLuizaAPI('000');
```

Após isso, use o método `getColors()` em `catalog` para obter o catálogo:

```js
magazineLuiza.catalog.getColors();
```

Esse método retorna uma Promise. O resultado da Promise é um array de objetos, com as cores dos produtos do catálogo, no formato:

```json
[
    {
        "color": " 0",
        "description": "Indefinido"
    }
]
```

## Tipos e referências de valores do objeto retornado com a API

```js
{
	color: <String> strCor,
	description: <String> strDescricao
}
```

