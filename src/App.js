import React, { Component } from "react";
import { Button, Container, Grid } from "@material-ui/core";
import "./App.css";
import io from "socket.io-client";
import Grafico from "./chart.js";
import VolumenTotal from "./volumenTotal.js";
import Maximo from "./maximo.js";
import Ultimo from "./ultimo.js";
import Minimo from "./minimo.js";
import Variacion from "./variacion.js";
import Volumen from "./volumen.js";
import VolumenExchange from "./volumenExchange.js";
import Participacion from "./participacion.js";

const socket = io("wss://le-18262636.bitzonte.com", {
  path: "/stocks",
});

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      connected: "Desconectar socket",
      stocks_data: {},
      stocks_data2: {},
      stocks_values: {},
      buy_data: {},
      sell_data: {},
      exchanges_data: {},
    };
  }

  componentDidMount() {
    socket.emit("EXCHANGES");

    socket.on("EXCHANGES", (data) => {
      this.setState({ ...this.state, exchanges_data: data });
    });

    socket.emit("STOCKS");

    socket.on("STOCKS", (data) => {
      this.setState({ ...this.state, stocks_data: data });
      Object.values(data).map((stock) =>
        this.setState({
          ...this.state,
          stocks_data2: {
            ...this.state.stocks_data2,
            [stock.company_name]: stock.ticker,
          },
        })
      );
    });

    socket.on("UPDATE", (data) => {
      const currentData = this.state.stocks_values[data.ticker]
        ? this.state.stocks_values[data.ticker]
        : [];
      this.setState({
        ...this.state,
        stocks_values: {
          ...this.state.stocks_values,
          [data.ticker]: [...currentData, [new Date(data.time), data.value]],
        },
      });
    });

    socket.on("BUY", (data) => {
      const currentData = this.state.buy_data[data.ticker]
        ? this.state.buy_data[data.ticker]
        : [];
      this.setState({
        ...this.state,
        buy_data: {
          ...this.state.buy_data,
          [data.ticker]: [...currentData, [new Date(data.time), data.volume]],
        },
      });
    });

    socket.on("SELL", (data) => {
      const currentData = this.state.sell_data[data.ticker]
        ? this.state.sell_data[data.ticker]
        : [];
      this.setState({
        ...this.state,
        sell_data: {
          ...this.state.sell_data,
          [data.ticker]: [...currentData, [new Date(data.time), data.volume]],
        },
      });
    });
  }

  handleClick() {
    if (socket.connected) {
      socket.close();
      this.setState({
        connected: "Conectar socket",
      });
    } else {
      socket.open();
      console.log(socket.connected);
      this.setState({
        connected: "Desconectar socket",
      });
    }
  }

  render() {
    return (
      <>
        <Container align="right">
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleClick}
          >
            {this.state.connected}
          </Button>
        </Container>
        <Grid container spacing={3}>
          <Grid item xs={1}></Grid>
          <Grid item xs={6}>
            <h1>Acciones</h1>
            {Object.values(this.state.stocks_data).map((stock) => (
              <>
                <h3>
                  {"Empresa: "}
                  {stock.company_name}
                </h3>
                <h4>
                  {"Ticker: "}
                  {stock.ticker}
                </h4>
                <h4>
                  {"País de origen: "}
                  {stock.country}
                </h4>
                <VolumenTotal
                  buy={this.state.buy_data[stock.ticker]}
                  sell={this.state.sell_data[stock.ticker]}
                />
                <Maximo values={this.state.stocks_values[stock.ticker]} />
                <Ultimo values={this.state.stocks_values[stock.ticker]} />
                <Minimo values={this.state.stocks_values[stock.ticker]} />
                <Variacion values={this.state.stocks_values[stock.ticker]} />
                <Grafico
                  data={
                    this.state.stocks_values[stock.ticker]
                      ? this.state.stocks_values[stock.ticker]
                      : []
                  }
                  chartName="Precio v/s Tiempo"
                />
              </>
            ))}
          </Grid>
          <Grid item xs={3}>
            <h1>Bolsa de valores</h1>
            {Object.values(this.state.exchanges_data).map((exchange) => (
              <>
                <h3>
                  {"Bolsa: "}
                  {exchange.name}
                </h3>
                <Volumen
                  companies={exchange.listed_companies}
                  data={this.state.buy_data}
                  data2={this.state.stocks_data2}
                  title="Volumen Compra: "
                />
                <Volumen
                  companies={exchange.listed_companies}
                  data={this.state.sell_data}
                  data2={this.state.stocks_data2}
                  title="Volumen Venta: "
                />
                <VolumenExchange
                  companies={exchange.listed_companies}
                  buydata={this.state.buy_data}
                  selldata={this.state.sell_data}
                  stockdata={this.state.stocks_data2}
                  title="Volumen Total: "
                />
                <div>
                  <p>
                    Cantidad de acciones: {exchange.listed_companies.length}
                  </p>
                </div>
                <Participacion
                  companies={exchange.listed_companies}
                  buydata={this.state.buy_data}
                  selldata={this.state.sell_data}
                  stockdata={this.state.stocks_data2}
                  exchanges={Object.values(this.state.exchanges_data)}
                  title="Participacion de mercado: "
                />
              </>
            ))}
          </Grid>
        </Grid>
      </>
    );
  }
}

export default App;
