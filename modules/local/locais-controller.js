module.exports = function (schema){

	var Local = schema.local;

	return{
		getLocais: function(req, res){
			Local.find(function(err, locais){
		    	if (err) throw err;

		    	return res.json({success: true, message: "Locais encontrados", response: {locais: locais}});
  			});
		},
		postLocais: function(req, res){
			var query = { id: req.body.id };
			var update = req.body;

			Local.findOneAndUpdate(query, update, {upsert: true, new: true}, function(err, onibus){
		    	return res.json({success: true, message: "Locais atualizados"});
			})
		}
	}
}