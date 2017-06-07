import Errors from '../core/Errors';

export default class Form {
	constructor(data) {
		this.originalData = data;
		for(let field in data){
			this[field] = data[field]
		}
		this.submitting = false;
		this.errors = new Errors();
	}

	data() {
		let data = {};
		for(let property in this.originalData){
			data[property] = this[property];
		}
		return data;
	}

	reset() {

		for(let field in this.originalData){
			this[field] = '';
		}
		this.errors.clear();
	}

	post(url) {
		return this.submit('post', url);
	}

	put(url) {
		return this.submit('put', url);
	}

	patch(url) {
		return this.submit('patch', url);
	}

	submit(requestType, url){
		this.submitting = true;
		return new Promise((resolve, reject) => {
			axios[requestType](url, this.data())
				.then(response => {
					this.onSuccess(response.data);
					resolve(response.data);
				})
				.catch(error => {
					this.onFail(error.response.data);
				});
		});
		
	}

	onSuccess(response) {
		this.submitting = false;
		this.reset();
	}

	onFail(error) {
		this.submitting = false;
		this.errors.record( error );
	}
}