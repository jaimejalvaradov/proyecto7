import { shallowMount } from '@vue/test-utils'
import { createStore } from 'vuex'
import ListaLibros from '@/views/ListaLibros.vue'

// Construimos una versión mínima del store, con el módulo "productos"
// en estado de error, para probar que la vista responde bien a un fallo de la API
function crearStoreConError() {
  return createStore({
    modules: {
      productos: {
        namespaced: true,
        state: () => ({ libros: [], loading: false, error: 'No se pudieron cargar los libros.' }),
        getters: {
          libros: (state) => state.libros,
          loading: (state) => state.loading,
          error: (state) => state.error
        }
      },
      filtros: {
        namespaced: true,
        state: () => ({ titulo: '', autor: '', categoria: '', soloFavoritos: false }),
        getters: {
          titulo: (s) => s.titulo,
          autor: (s) => s.autor,
          categoria: (s) => s.categoria,
          soloFavoritos: (s) => s.soloFavoritos
        },
        mutations: {
          SET_TITULO(s, v) { s.titulo = v },
          SET_AUTOR(s, v) { s.autor = v },
          SET_CATEGORIA(s, v) { s.categoria = v },
          SET_SOLO_FAVORITOS(s, v) { s.soloFavoritos = v }
        }
      },
      favoritos: {
        namespaced: true,
        state: () => ({ ids: [] }),
        getters: { ids: (s) => s.ids }
      }
    }
  })
}

describe('ListaLibros.vue', () => {
  it('muestra el mensaje de error cuando la API falla, en vez de la lista', () => {
    const store = crearStoreConError()

    // shallowMount reemplaza los componentes hijos (FormularioLibro, LibroItem)
    // por versiones simplificadas, para probar solo la lógica de esta vista
    const wrapper = shallowMount(ListaLibros, {
      global: { plugins: [store] }
    })

    expect(wrapper.text()).toContain('No se pudieron cargar los libros.')
    expect(wrapper.find('.grilla-libros').exists()).toBe(false)
  })
})
