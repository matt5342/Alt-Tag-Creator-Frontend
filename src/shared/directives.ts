import type { App } from 'vue';
import * as bootstrap from 'bootstrap';
export default {
    install: (app: App) => {
        // GLOBAL DIRECTIVES

        // the 'v-focus' directive attribute will set focus on an input when mounted to the DOM
        app.directive('focus', (el) => el.focus());

        // usage: v-tooltip="'This is the tooltip text.'" for plain text
        // or v-tooltip="{ title: 'This is the tooltip text.', html: true }" for HTML content
        app.directive('tooltip', {
          mounted(el, binding, vnode, prevVnode) {
              const options = typeof binding.value === 'string'
                  ? { title: binding.value, html: false }
                  : binding.value;
              // @ts-ignore
              const tt = bootstrap.Tooltip.getOrCreateInstance(el, options);
          },
          updated(el, binding, vnode, prevVnode) {
              const options = typeof binding.value === 'string'
                  ? { title: binding.value, html: false }
                  : binding.value;
              // @ts-ignore
              const tt = bootstrap.Tooltip.getOrCreateInstance(el, options);
              tt.update();
          },
          beforeUnmount(el, binding, vnode, prevVnode) {
              // @ts-ignore
              const tt = bootstrap.Tooltip.getOrCreateInstance(el, {});
              tt.dispose();
          },
          // dispose the tooltip so that it can be re-instantiated
          beforeUpdate(el, binding, vnode, prevVnode) {
              // @ts-ignore
              const tt = bootstrap.Tooltip.getOrCreateInstance(el, {});
              tt.dispose();
          }
      });

    }
}
