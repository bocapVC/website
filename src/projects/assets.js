const modules = import.meta.glob('../assets/projects/*/*', {
  eager: true,
  import: 'default'
})

const normalizeAssets = () => {
  const map = {}
  Object.entries(modules).forEach(([path, url]) => {
    const match = path.match(/\/projects\/([^/]+)\/([^/]+)$/)
    if (!match) return
    const [, slug, fileName] = match
    if (fileName.startsWith('.')) return
    const entry = map[slug] ?? { cover: null, gallery: [] }
    if (fileName.toLowerCase().startsWith('cover')) {
      entry.cover = url
    } else {
      entry.gallery.push({ fileName, url })
    }
    map[slug] = entry
  })

  Object.values(map).forEach(entry => {
    entry.gallery.sort((a, b) => a.fileName.localeCompare(b.fileName))
    entry.gallery = entry.gallery.map(item => item.url)
  })

  return map
}

const assetCache = normalizeAssets()

export const resolveProjectImages = (slug) => assetCache[slug] ?? { cover: null, gallery: [] }
