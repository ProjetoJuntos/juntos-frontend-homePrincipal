import React from "react";
import banner3 from '../../img/banner3.png';
import style from '../../css/bannersStyle.module.css';
import linha_banner3 from '../../img/linha_banner3.png';
import ftQuemSomos1 from '../../img/ftQuemSomos1.png';
import ftQuemSomos2 from '../../img/ftQuemSomos2.png';
import quemSomos from '../../../img/quemSomos.png';


class banner3Somos extends React.Component{

    render(){
        return(
            <div className='divBanner'>
				<div className='imgBanner'>
					<img id='quemSomos' className={style.circle} src={banner3} alt='banner3Somos' />
                    <h1 className={style.tituloBanner3}>Quem somos</h1>
					<img src={linha_banner3} alt='linhaBanner2' />
				</div>

                <div>
                    {/* <img src={quemSomos}></img> */}
                    <p className={style.fontQuemSomos}>
                    O projeto Juntos nasceu com um grupo de estudantes, quando em meados de 2021 <br></br>
                    identificaram uma demanda crescente entre populações carentes e em condição de  <br></br>
                    vulnerabilidade que necessitavam de ajuda para receber doações,<br></br>
                    como alimentos e roupas. <br></br>
                    A iniciativa conta com dezenas de voluntários, entre doadores e colaboradores, <br></br>
                    que fazem a separação e distribuição dos donativos.<br></br>
                    O projeto possui também apoio de ONGs parceiras para <br></br>
                    fazer a coleta de doações e atender um maior número de beneficiários.<br></br>
                    Fazemos também todo o controle de entrada e saída <br></br>
                    relacionado a distribuição de donativos.<br></br> 
                    Devido ao atual cenário econômico do nosso país,
                    a demanda por beneficiário vem <br></br>
                    aumentando consideravelmente, e com isso,  <br></br>
                    precisamos da sua ajuda para reduzir cada vez  <br></br>
                    mais o impacto nas famílias carentes e transformar a realidade destas pessoas. <br></br>
                    </p>
                    <div className={style.ftQuemSomos1}>
                        <img src={ftQuemSomos2}></img>
                        <img src={ftQuemSomos1}></img>
                    </div>
                   
                </div>
			</div>
        );
    }
    
}

export default banner3Somos;