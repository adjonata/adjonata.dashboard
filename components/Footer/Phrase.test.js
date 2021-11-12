import { mount } from '@vue/test-utils'
import Phrase from './Phrase.vue'

const prefix = 'phrase'

export const finders = {
  phrase: `.${prefix}__content`,
  author: `.${prefix}__author`,
  refresh: `.${prefix}__refresh`,
  refresh_icon: `.${prefix}__refresh span.material-icons`,
}

const propsData = {
  phrase: "To be or not to be, that's the question",
  author: 'Me and my mind',
}

describe('Phrase', () => {
  test('Check if the refresh button appears', async () => {
    const wrapper = await mount(Phrase, {
      propsData,
    })

    expect(wrapper.find(finders.refresh).isVisible()).toBeTruthy()
    expect(wrapper.find(finders.refresh_icon).text()).toBe('refresh')
  })

  test('Clicking the refresh button should issue the refresh action', async () => {
    const wrapper = await mount(Phrase, {
      propsData,
    })

    const refreshButton = wrapper.find(finders.refresh)

    refreshButton.trigger('click')

    const refreshEventName = 'refresh'

    expect(wrapper.emitted()[refreshEventName]).toBeTruthy()
  })

  test('Must render the phrase and the author on the screen', async () => {
    const wrapper = await mount(Phrase, {
      propsData,
    })

    expect(wrapper.find(finders.phrase).isVisible()).toBeTruthy()
    expect(wrapper.find(finders.phrase).text()).toBe(propsData.phrase)

    expect(wrapper.find(finders.author).isVisible()).toBeTruthy()
    const previousAuthorText = '- ' + propsData.author
    expect(wrapper.find(finders.author).text()).toBe(previousAuthorText)
  })
})
