import React, { useState, useContext } from 'react';
import Context from '../../context/Context';
// import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router';
// import Footer from '../components/Footer';
// import Header from '../components/Header';
// import Context from '../Context/Context';
import database from '../../services/database';
import '../../css/HomeBannerMain.css';

function HomeBannerMain() {
  const [ collapseText, setCollapseText ] = useState(false);
  const { replaceSpecialChars } = useContext(Context);

  return (
    <div>
      {database.highlights.map((product) => (
        <div className="emphasis" key={product.name}>
          <div className="div-emphasis-image">
            <img
              src={require(`../../images/products/banner-top-${ replaceSpecialChars(
                product.name,
              ) }.jpeg`)}
              alt={product.name}
              className="emphasis-image"
            />
            <div className="div-emphasis-title">
              <div>
                <span className="emphasis-title">{product.title}</span>
              </div>
            </div>
          </div>
          <div className="div-emphasis-subtitle">
            <span className="emphasis-subtitle">{product.subtitle}</span>
            <br />
            <br />
            {collapseText ? (
              <div>
                <span>{product.paragraph}</span>
                <span onClick={() => setCollapseText(!collapseText)}>
                  {' '}
                  Leia menos
                </span>
              </div>
            ) : (
              <div>
                <span>{product.paragraph.substr(0, 300)}</span>
                <span
                  style={{
                    fontWeight: 'bold',
                  }}
                  onClick={() => setCollapseText(!collapseText)}
                >
                  {' '}
                  ... Leia mais
                </span>
              </div>
            )}
          </div>
        </div>
      ))}
      <hr />
    </div>
  );
}

export default HomeBannerMain;
