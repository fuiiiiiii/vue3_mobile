import { Directive, App } from 'vue';
import Route from '../router/index';

const cadiClick: Directive = {

    mounted(el: HTMLElement, binding) {

        el.onclick = () => {
            console.log(binding)
            const { arg, value } = binding;
            if (arg === 'auth' && !localStorage["userToken"]) {
                return Route.push('/login');
            };

            if (typeof value == 'function') {
                value();
            }
        }
    }
};


export function setDirective(app: App) {
    app.directive('cadi-click', cadiClick);
};
