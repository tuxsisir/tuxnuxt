const type = 'website'
const url = 'https://tuxsisir.github.io'
const title = 'tuxsisir | Sisir Ghimire Chettri'
const description = 'Building software systems to solve everyday problems'
const mainImage = '/favicon.ico'

export default (meta) => {
  return [
    {
      hid: 'description',
      name: 'description',
      content: (meta && meta.description) || description
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: (meta && meta.type) || type
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: (meta && meta.url) || url
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: (meta && meta.title) || title
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: (meta && meta.description) || description
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: (meta && meta.mainImage) || mainImage
    }
  ]
}
