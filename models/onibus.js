module.exports = function(mongoose){
	var Schema = mongoose.Schema;

	var onibusSchema = new Schema({
	  	facul_id: Schema.Types.ObjectId,
	  	placa: String,
	  	local_partida: String,
	  	local_chegada: String,
	  	hora: String
	});

	return mongoose.model('Onibus', onibusSchema);
}
