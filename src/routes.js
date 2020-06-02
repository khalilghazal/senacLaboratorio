import React from "react";
import { Switch, Route } from "react-router-dom";

import Cadastro from "./components/Produtos/Cadastro";
import List from "./components/Produtos/List";

export default function Routes() {
  return (
    // Switch permite que apenas uma rota seja chamada por vez
    // Route => path: Rota do meu componente ; component
    <Switch>
      <Route path="/cadastro" component={Cadastro} />
      <Route path="/list" component={List} />
      <Route path="/" component={List} />
    </Switch>
  );
}
