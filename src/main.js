/* eslint-disable no-unused-vars */
import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import router from "./router";
import VueRouter from "vue-router";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import VueApollo, { ApolloProvider } from "vue-apollo";
import { InMemoryCache } from "apollo-cache-inmemory";

Vue.config.productionTip = false;

const httpLink = new HttpLink({
  uri: "http://192.168.66.189:8080/v1/graphql"
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

Vue.use(VueApollo);
Vue.use(VueRouter);
new Vue({
  render: h => h(App),
  router,
  apolloProvider,
  components: { App }
}).$mount("#app");
