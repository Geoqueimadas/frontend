import React from "react";

import GraficoInfos from "../../public/data/graficoInfos";

const Grafico = () => {
  return (
    <>
      <section className="mt-40 h-auto ">
        <h1 className="text-center text-red-main font-bold text-3xl mb-12">
          Índice de Queimadas
        </h1>
        <div className="md:mt-32 mt-20 flex flex-col md:px-16 px-4 ">
          <GraficoInfos />

          <canvas  id="myChart"></canvas>
        
        </div>
        <p className="text-red-main mt-12 font-bold md:px-16 px-4 text-sm md:text-lg">
            Fonte:
            https://queimadas.dgi.inpe.br/queimadas/portal-static/estatisticas_paises/
          </p>
      </section>
    </>
  );
};

export default Grafico;
