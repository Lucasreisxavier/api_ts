import enderecoRepository from "../repository/enderecoRepository";

class enderecoService {
  get() {
    return enderecoRepository.find({});
  }

  getById(_id) {
    return enderecoRepository.findById(_id);
  }

  create(endereco) {
    return enderecoRepository.create(endereco)
  }

  update(_id, endereco) {
    return enderecoRepository.findByIdAndUpdate(_id, endereco);
  }

  delete(_id) {
    return enderecoRepository.findByIdAndRemove(_id);
  }
}

export default new enderecoService();
