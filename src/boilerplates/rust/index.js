export default async () => {
  return {
    code: {
      code: await import('!raw-loader!./codepan.rs'),
      transformer: 'rust'
    },
    showPans: ['code', 'console']
  }
}
