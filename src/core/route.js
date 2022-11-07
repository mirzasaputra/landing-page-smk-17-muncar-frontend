import routes from '@/routes'
import Zilom from "@/assets/js/zilom"

window.$_component = null;
window.$_state = null;
window.$_layer = null;
window.$_focused = null;

export default (baseProps = {}) => {
    const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

    const getParams = match => {
        const values = match.result.slice(1);
        const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

        return Object.fromEntries(keys.map((key, i) => {
            return [key, values[i]];
        }));
    }

    const Route = async () => {
        $(".preloader").fadeIn();
        var props = {}
        var router = {}

        const potentialMatches = mappingRoute(routes)
        
        let match = potentialMatches.find((potentialMatch) => potentialMatch.result !== null)

        if(typeof match == 'undefined') {
            match = potentialMatches.find((potentialMatch) => potentialMatch.route.path == '404')
            router.params = {}
        } else {
            router.params = getParams(match)
        }
        
        router.pushState = pushState
        router.pushName = pushName
        router.reload = routeReload
        props.$router = router
        props.setState = updateState
        props.meta = match.route.meta
        props = Object.assign(props, baseProps)
        
        if(match.route.path == '404') {
            renderView(match.route, props)
        } else {
            renderView(match.route, props)
        }
    }

    const renderView = async (route, props) => {
        // document.title = route?.meta.title + " | " + props.$settings.college_name

        try {
            const instance = new route.component(props)

            if(typeof instance.componentWillMount == 'function') {
                await instance.componentWillMount()
            }

            if(route.layer && route.layer > 0) {
                if(route.layer == 1 && route.baseComponent[0] != $_component) {
                    document.querySelector('#app').innerHTML = ""
                    document.querySelector('#app').appendChild(new route.baseComponent[1](props).render())
                    $_component = route.baseComponent[0]
                }

                document.querySelectorAll('router-view')[route.layer - 1].innerHTML = ""
                document.querySelectorAll('router-view')[route.layer - 1].appendChild(instance.render())
                $_layer = route.layer
                $_state = instance
            } else {
                document.querySelector('#app').innerHTML = ""
                document.querySelector('#app').appendChild(instance.render())
                $_state = instance
                $_component = null
            }

            if(typeof instance.componentDidMount == 'function') {
                instance.componentDidMount()
            }
        } catch(err) {
            const component = await route.component()
            const instance = new component.default(props)

            if(typeof instance.componentWillMount == 'function') {
                await instance.componentWillMount()
            }

            if(route.layer && route.layer > 0) {
                if(route.layer == 1 && route.baseComponent[0] != $_component) {
                    document.querySelector('#app').innerHTML = ""
                    document.querySelector('#app').appendChild(new route.baseComponent[1](props).render())
                    $_component = route.baseComponent[0]
                }

                document.querySelectorAll('router-view')[route.layer - 1].innerHTML = ""
                document.querySelectorAll('router-view')[route.layer - 1].appendChild(instance.render())
                $_layer = route.layer
                $_state = instance
            } else {
                document.querySelector('#app').innerHTML = ""
                document.querySelector('#app').appendChild(instance.render())
                $_component = null
                $_state = instance
            }

            if(typeof instance.componentDidMount == 'function') {
                instance.componentDidMount()
            }
        }

        try {
            App()
        } catch(err) {}

        Zilom()
        $(".preloader").fadeOut(800);
    }

    const mappingRoute = (_routes, basePath = null, baseMeta = null, baseComponent = null, layer = 0) => {
        const result = []

        
        _routes.forEach((val) => {
            var routeCopies = Object.assign({}, val)
            
            if(baseComponent != null) {
                routeCopies.baseComponent = ['component'+ Math.ceil(Math.random()) * 1000, baseComponent]
            }
            
            if(basePath != null) {
                routeCopies.path = `/${basePath}/${routeCopies.path}`
                routeCopies.path = routeCopies.path.replace('//', '/')
            }

            if(baseMeta != null) {
                routeCopies.baseMeta = baseMeta
            }
            
            if(layer > 0) {
                routeCopies.layer = layer
            }

            if(routeCopies.children) {
                mappingRoute(routeCopies.children, routeCopies.path, routeCopies.meta, routeCopies.component, layer + 1).forEach((val) => {
                    result.push(val)
                })
            } else {
                result.push({
                    route: routeCopies,
                    result: location.pathname.match(pathToRegex(routeCopies.path))
                })
            }
        })

        return result
    }

    const pushState = (path) => {
        history.pushState([], null, path)
        Route()
    }

    const pushName = (routeName, params = []) => {
        const routeMap = mappingRoute(routes)
        let match = routeMap.find((route) => route.route.name == routeName)
        let parameters = Array.from(match.route.path.matchAll(/:(\w+)/g))
        let path = match.route.path

        parameters.forEach(val => {
            path = path.replace(val[0], params[val[1]])
        })

        return pushState(path)
    }

    const updateState = (callback) => {
        $_state.updateState(callback)

        if($_layer > 0) {
            document.querySelectorAll('router-view')[$_layer - 1].innerHTML = '<div class="hide-animation"></div>'
            document.querySelector('.hide-animation').appendChild($_state.render())
        } else {
            document.querySelectorAll('#app').innerHTML = '<div class="hide-animation"></div>'
            document.querySelectorAll('.hide-animation').appendChild($_state.render())
        }

        if(typeof $_state.componentDidMount == 'function') {
            $_state.componentDidMount()
        }

        Component()

        if($_focused != null) {
            let attribute = ``
            
            for(const item of $_focused.target.attributes) {
                // console.log(item)
                attribute += `[${item.name}="${item.value}"]`
            }

            $(`${ $_focused.target.localName }${ attribute }`).focus()
        }
    }

    const routeReload = () => {
        Route()
    }

    window.addEventListener('popstate', () => {
        $('body').unbind().on('click', (e) => {
            if(e.target.localName == 'router-link') {
                if(e.target.getAttribute('target') == '_blank') {
                    window.open(e.target.getAttribute('link'), '_blank')
                } else {
                    e.preventDefault()
                    pushState(e.target.getAttribute('link'))
                }
            }

            if(e.target.localName == 'router-name') {
                if(e.target.getAttribute('target') == '_blank') {
                    window.open(e.target.getAttribute('name'), '_blank')
                } else {
                    e.preventDefault()
                    pushName(e.target.getAttribute('name'))
                }
            }
        })

        Route()
    })
    
    window.addEventListener('DOMContentLoaded', () => {
        $('body').unbind().on('click', (e) => {
            $_focused = e

            if(e.target.localName == 'router-link') {
                if(e.target.getAttribute('target') == '_blank') {
                    window.open(e.target.getAttribute('link'), '_blank')
                } else {
                    e.preventDefault()
                    pushState(e.target.getAttribute('link'))
                }
            }

            if(e.target.localName == 'router-name') {
                if(e.target.getAttribute('target') == '_blank') {
                    window.open(e.target.getAttribute('name'), '_blank')
                } else {
                    e.preventDefault()
                    pushName(e.target.getAttribute('name'))
                }
            }
        })
    })

    Route()   
}