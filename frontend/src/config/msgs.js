import Vue from 'vue'
import Toasted from 'vue-toasted'

Vue.use(Toasted, {
    iconPack: 'fontawesome',
    duration: 3000
})

Vue.toasted.register(
    'defaultSuccess',
    playload => !playload.msg ? 'Operação realizada com sucesso.' : playload.msg,
    { type: 'success', icon: 'check' }
)

Vue.toasted.register(
    'defaultError',
    playload => !playload.msg ? 'Ops... Erro inesperado.' : playload.msg,
    { type: 'error', icon: 'times' }
)