import usuarioRepository from "../repository/usuarioRepository";

class usuarioService {
  get() {
    return usuarioRepository.find({});
  }

  getById(_id) {
    return usuarioRepository.findById(_id);
  }

  create(usuario) {
    return usuarioRepository.create(usuario);
  }

  update(_id, usuario) {
    return usuarioRepository.findByIdAndUpdate(_id, usuario);
  }

  delete(_id) {
    return usuarioRepository.findByIdAndRemove(_id);
  }
}

export default new usuarioService();
