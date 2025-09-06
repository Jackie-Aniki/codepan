export default async () => {
  const [htmlCode, jsCode] = await Promise.all([
    import('!raw-loader!./codepan.html'),
    import('!raw-loader!./codepan.js')
  ])

  return {
    code: {
      code: jsCode,
      transformer: 'js'
    },
    html: {
      code: htmlCode,
      transformer: 'html'
    },
    showPans: ['code', 'console']
  }
}
