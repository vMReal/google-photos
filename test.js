var Photo = require('./lib/photo').Photo;

console.log('Photo', Photo.query);
Photo
	.query()
	.auth('ya29.Glt8BEA7qzt8QvsyIXvpnhoZLwFDIrNqQfVE9tMHbwtRitJqh33XWlAXypVtwX7ECW29aXQF8oERLIPn94eAZCWt1p-rwThhbcTjentNNWfSdlnI5lYVy4dc6L96')
	.execute()
	.subscribe(
		function(res) {
			console.log('id', res.toObject().id);
		}, function(err) {
			console.log(err)
		});