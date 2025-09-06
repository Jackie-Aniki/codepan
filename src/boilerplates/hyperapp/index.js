export default async () => {
  const [htmlCode, jsCode] = await Promise.all([
    import('!raw-loader!./codepan.html'),
    import('!raw-loader!./codepan.js')
  ])

  return {
    html: {
      code: htmlCode,
      transformer: 'html'
    },
    code: {
      code: jsCode,
      transformer: 'babel'
    },
    showPans: ['code', 'output']
  }
}
