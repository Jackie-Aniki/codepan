export default async () => {
  const jsCode = await import('!raw-loader!./codepan.svelte')

  return {
    code: {
      code: jsCode,
      transformer: 'svelte'
    },
    showPans: ['code', 'output']
  }
}
