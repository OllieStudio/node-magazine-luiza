'use strict';

require('../mock/got-mock');
const expect = require('chai').expect;
const MagazineLuizaAPI = require('../../index');
const technicalSpecResult = require('../mock/json/technical-spec-result.json');
const technicalSpecTwoProducts = require(
	'../mock/json/technical-spec-two-products-result.json'
);


describe('# MAGAZINE LUIZA API - CATALOG - TECHNICAL SPEC', function() {
	let magazineLuiza;
	before(function() {
		magazineLuiza = new MagazineLuizaAPI('0000');
	});

	it('Should catalog has a method getTechnicalSpec', function() {
		expect(magazineLuiza.catalog).has.property('getTechnicalSpec');
	});

	it('Should return a Promise error if product code or model does not to pass',
	function() {
		return magazineLuiza.catalog.getTechnicalSpec()
			.catch(err => {
				expect(err).to.be.equal('You must pass product ID and Model');
			})
		;
	});

	it('Should return technical information passing product ID and model',
	function() {
		const productID = '0842805';
		const productModel = '00';

		return magazineLuiza.catalog.getTechnicalSpec(productID, productModel)
			.then(data => {
				return expect(data).to.be.deep.equal(technicalSpecResult);
			})
		;
	});

	it('Should return technical information when pass more than one product',
	function() {
		let catalog = magazineLuiza.catalog;
		let products = [
			{ id: '000000', model: '00' },
			{ id: '111111', model: '11' }
		];

		let allProducts = products.map(product => {
			return catalog.getTechnicalSpec(product.id, product.model);
		});

		return Promise.all(allProducts).then(techSpecs => {
			return expect(techSpecs).to.be.deep.equal(technicalSpecTwoProducts);
		});
	});
});
