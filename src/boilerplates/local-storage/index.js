export default () => {
  return {
    code: {
      code: localStorage.getItem('codepan.js') || '',
      transformer: 'babel'
    },
    html: {
      code: localStorage.getItem('codepan.html') || '',
      transformer: 'html'
    },
    css: {
      code: localStorage.getItem('codepan.css') || '',
      transformer: 'css'
    },
    showPans: ['code', 'output']
  }
}
