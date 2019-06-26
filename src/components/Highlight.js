// import highlight from "cm-highlight/dist/cm-highlight.common"

export default {
  name: "highlight",
  functional: true,
  render(createElement, context) {
    const text = context.props.code || context.children[0].text
    // const code = highlight(
    //   text,
    //   { mode: context.props.mode }
    // )
    const element = createElement("div")
    element.text = text
    return element
  }
}
