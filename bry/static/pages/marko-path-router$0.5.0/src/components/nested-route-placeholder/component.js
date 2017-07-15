$_mod.def("/marko-path-router$0.5.0/src/components/nested-route-placeholder/component", function(require, exports, module, __filename, __dirname) { module.exports = {
  onMount: function () {
    let component = this.state.component
    let router = this.state.router
    let path = this.state.path
    let componentInput = this.state.componentInput

    let render = component.renderSync(componentInput)
    render.replace(this.getEl())

    try {
      router.register(path, render.getComponent())
    } catch (err) {
      console.warn('No component to retrieve at path:', path)
    }
  },

  onInput: function (input) {
    this.state = {
      path: input.path,
      component: input.component,
      componentInput: input.componentInput,
      router: input.router
    }
  }
}

});