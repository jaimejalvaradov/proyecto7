import { mount } from '@vue/test-utils'
import LibroItem from '@/components/LibroItem.vue'

describe('LibroItem.vue', () => {
  const libroDePrueba = {
    id: 1,
    titulo: 'Cien años de soledad',
    autor: 'Gabriel García Márquez',
    categoria: 'Novela',
    publicado: true,
    descripcion: 'Una novela de realismo mágico.'
  }

  it('muestra el título y el autor del libro recibido por props', () => {
    const wrapper = mount(LibroItem, {
      props: { libro: libroDePrueba, esFavorito: false },
      global: {
        // router-link se reemplaza por un <a> simple, no necesitamos un router real para esta prueba
        stubs: { RouterLink: { template: '<a><slot /></a>' } }
      }
    })

    expect(wrapper.text()).toContain('Cien años de soledad')
    expect(wrapper.text()).toContain('Gabriel García Márquez')
  })

  it('emite el evento "favorito" con el id del libro al hacer click en la estrella', async () => {
    const wrapper = mount(LibroItem, {
      props: { libro: libroDePrueba, esFavorito: false },
      global: {
        stubs: { RouterLink: { template: '<a><slot /></a>' } }
      }
    })

    await wrapper.find('.boton-favorito').trigger('click')

    expect(wrapper.emitted('favorito')).toBeTruthy()
    expect(wrapper.emitted('favorito')[0]).toEqual([1])
  })
})
