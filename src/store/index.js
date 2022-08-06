import { createStore } from 'vuex'

import theme from '../store/modules/theme'
import mapview from '../store/modules/mapview.js'
export default createStore({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        theme,
        mapview
    }
})