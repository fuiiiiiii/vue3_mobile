import { Directive, App, DirectiveBinding } from 'vue';
import Route from '../router/index';

const cadiClick: Directive = {

    mounted(el: HTMLElement, binding: DirectiveBinding) {

        el.onclick = () => {

            const { arg, value } = binding;

            if (arg === 'auth' && !localStorage["userToken"]) {
                return Route.push('/login');
            };

            if (typeof value == 'function') {

                let parmas = null;
                if (el.dataset && el.dataset.params) {
                    parmas = el.dataset.params;
                }

                value(parmas);
            }
        }
    }
};


export function setDirective(app: App) {
    app.directive('cadi-click', cadiClick);
};
