import React from 'react';
import Menu from './components/Menu';
import BannerPr from './components/Banners/bannerPr';
import Hr_divisao from './components/Linhas/hr_divisao';
import Titulo_texto from './components/Titulos/titulo_texto';
import TableHomePr from './components/Tabela/TableHomePr';
import Banner2 from './components/Banners/banner2';

function HomePrincipal() {
  return (
    <div className="App">
      <Menu />
      <BannerPr />
      <Hr_divisao />
      <Titulo_texto />
      <TableHomePr />
      <Banner2 />
    </div>
  );
}

export default HomePrincipal;
