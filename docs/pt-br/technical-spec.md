# Ficha técnica de produto

## Obtendo a Ficha Técnica

Primeiro é necessário instanciar o objeto `MagazineLuizaAPI`, passando o seu ID:

```js
const magazineLuiza = new MagazineLuizaAPI('000');
```

Após isso, use o método `getTechnicalSpec()` em `catalog`, passando o ID e o Modelo do produto:

```js
magazineLuiza.catalog.getTechnicalSpec(id, model);
```

Para pegar o ID e Modelo do produto, é necessário buscar primeiro o catálogo de produtos, e então selecionar o produto que você quer a ficha técnica:

```js
const catalog = magazineLuiza.catalog;
catalog.getProducts()
	.then(products => {
		const product = products[0];
		return catalog.getTechnicalSpec(product.id, product.model);
	})
	.then(techSpec => console.log(techSpec));
```

Ou então, para pegar a ficha técnica de todos os produtos:

```js
const catalog = magazineluiza.catalog;
catalog.getProducts()
	.then(products => {
		const allProducts = products.map(product => {
			return catalog.getTechnicalSpec(product.id, product.model);
		});

		return Promise.all(allProducts);
	})
	.then(techSpec => console.log(techSpec));
```

Esse método retorna uma Promise. O resultado da Promise é um objeto com dois itens:

`product`, com as informações do produto (ID e Modelo);
`specs`, que é um array de objetos com as especificações desse produto.

Cada objeto no array `specs` contém duas propriedades: `title` e `description`, para cada informação técnica. O formato do objeto é:

```json
{
	"product": {
		"id": "1234",
		"model": "00"
	},
	"specs": [
		{
			"title": "Informações Técnicas",
			"description": "Descrição"
		}, {
			"title": "Outras informações",
			"description": "Descrição"
		}
	]
}
```

