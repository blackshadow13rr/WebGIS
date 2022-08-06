let option = {
    url: "https://js.arcgis.com/4.23/",
    css: "https://js.arcgis.com/4.23/esri/themes/light/main.css",
};
export default {
    namespace: true,
    state: {
        map: null,
        view: null,
    },
    mutations: {
        initMap(state, payload) {
            state.map = payload;
        },
        initView(state, payload) {
            state.view = payload;
        },
    },
    actions: {
        
    },
}