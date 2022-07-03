import adidas from '../assets/adidas.jpg';
import lacoste from '../assets/lacoste.jpg';
import kors from '../assets/kors.jpg';
import tommy from '../assets/tommy.jpg';
import levis from '../assets/levis.jpg';
import crocs from '../assets/crocs.jpg';
import gap from '../assets/gap.jpg';
import amazon from '../assets/amazon.jpg';
import ebay from '../assets/ebay.jpg';

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <h2>Онлайн-магазины</h2>
      <div className="portfolio__cards">
        <div className="portfolio__card">
          <h5>Lacoste</h5>
          <img src={lacoste} alt="Lacoste" />
          <p> Lacoste - французская компания по производству одежды, обуви, парфюмерии, очков, часов и различных кожаных изделий.Основана в 1933 году.
          </p>
          <a href="https://www.lacoste.com/us/" target="_blank" className="button" rel="noreferrer">Купить</a>
        </div>
        <div className="portfolio__card">
          <h5>Michael Kors</h5>
          <img src={kors} alt="Michael Kors" />
          <p>Michael Kors–американский бренд, основан американцем. Стиль соответствует американской утилитарной концепции. Марка производит одежду, аксессуары и парфюмерию.
          </p>
          <a href="https://www.michaelkors.com/" target="_blank" className="button" rel="noreferrer">Купить</a>
        </div>
        <div className="portfolio__card">
          <h5>Adidas</h5>
          <img src={adidas} alt="Adidas" />
          <p>Adidas — производитель спортивной одежды и обуви, основанный в 1949 году в Германии. Бренд является одной из крупнейших спортивных компаний в истории.
          </p>
          <a href="https://www.adidas.com/us/" target="_blank" className="button" rel="noreferrer">Купить</a>
        </div>
        <div className="portfolio__card">
          <h5>Tommy Hilfiger</h5>
          <img src={tommy} alt="Tommy Hilfiger" />
          <p>Американский бренд, специализирующийся на производстве мужской, женской и детской одежды, нижнего белья, обуви, аксессуаров, часов, солнцезащитных очков, парфюмерии, также текстиль для дома. Основан в 1985 году.
          </p>
          <a href="https://global.tommy.com/" 
          target="_blank" className="button" rel="noreferrer">Купить</a>
        </div>
        <div className="portfolio__card">
          <h5>LEVI’S</h5>
          <img src={levis} alt="Levis" />
          <p>Levi’s — культовый американский бренд, основанный в 1853 году. Это первопроходец джинсовой промышленности, производитель с мировым именем и престижным статусом.
          </p>
          <a href="https://www.levi.com/US/en_US/"
            target="_blank" className="button" rel="noreferrer">Купить</a>
        </div>
        <div className="portfolio__card">
          <h5>Crocs</h5>
          <img src={crocs} alt="Crocs" />
          <p>Резиновая обувь из вспененного полимерного материала Croslite. Основанная в 2002 году в Колорадо, США. За все время существования компания продала больше 600 миллионов пар.
          </p>
          <a href="https://www.crocs.com/"
            target="_blank" className="button" rel="noreferrer">Купить</a>
        </div>
        <div className="portfolio__card">
          <h5>GAP</h5>
          <img src={gap} alt="Gap" />
          <p>Легендарная торговая марка США, выпускает одежду для мужчин, женщин и детей, аксессуары, нижнее белье, купальники и обувь. Одежда GAP относится к среднему ценовому сегменту и предлагает одежду на все случаи жизни.
          </p>
          <a href="https://www.gap.com/"
            target="_blank" className="button" rel="noreferrer">Купить</a>
        </div>
        <div className="portfolio__card">
          <h5>Amazon</h5>
          <img src={amazon} alt="Amazon" />
          <p>Самая крупная торговая площадка в мире с широким перечнем всевозможных товаров. В одном месте можно подобрать абсолютно все, не выходя из дома. 
          </p>
          <a href="https://www.amazon.com/"
            target="_blank" className="button" rel="noreferrer">Купить</a>
        </div>
        <div className="portfolio__card">
          <h5>Ebay</h5>
          <img src={ebay} alt="Ebay" />
          <p>Американская компания, предоставляющая услуги в областях интернет-аукционов.Основана в 1995 году.
          </p>
          <a href="https://www.ebay.com/"
            target="_blank" className="button" rel="noreferrer">Купить</a>
        </div>
        </div>
    </section>
  );
}

export default Portfolio;