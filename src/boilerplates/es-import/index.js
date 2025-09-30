export default async () => {
  const jsCode = await import('!raw-loader!./codepan.js')

  return {
    code: {
      code: jsCode,
      transformer: 'babel'
    },
    showPans: ['code', 'console']
  }
}
