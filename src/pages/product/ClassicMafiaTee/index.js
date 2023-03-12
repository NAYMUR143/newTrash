import Header from "../../../components/header";
import Footer from "../../../components/footer";
import RelatedViewCollection from "../../../components/home/relatedViewCollection";
import Customize from "../../../components/customize/Customize";
import { useState } from "react";
import { RelatedClassicMafiaTee } from "../../../api/relatedproduct/RelatedClassicMafiaTee";
import { ImgInfoContainer } from "../../../components/home/PrintOneImgBoxForOnlyBottom";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
const ClassicMafiaTee = () => {
  const [relatedProduct, setRelatedProduct] = useState(RelatedClassicMafiaTee);
  let imgDataArr = [
    {
      name_: "Classic Mafia Tee",
      price_: "$24.98",
      colors_: "white, black, yellow, gray, pink, beige, gold, purple, blue",
      sizes_: ["S", "X", " L"],
      color1_: "#eff1b7",
      color2_: "#9cf1ff",
      color3_: "#cfcfcf",
      dtImgArr: [
        {
          src: `/img/customize/ClassicMafiaTee/1.jpg`,
        },
        {
          src: `/img/customize/ClassicMafiaTee/2.jpg`,
        },
        {
          src: `/img/customize/ClassicMafiaTee/3.jpg`,
        },
      ],
    },
  ];
  console.log(relatedProduct);
  return (
    <>
      <main>
        <Header />
        {imgDataArr.map((itm, i) => (
          <Customize itm={itm} key={i} />
        ))}

        <Grid container spacing={1.3}>
          {relatedProduct.map((obj, index) => {
            // console.log(obj);
            const { onLoadImg, onLoadTitle, onLoadSubTitles, hoverSubTitles } =
              obj;
            return (
              <Grid item sm={6} xs={12} md={3} key={index}>
                <Link to="/product">
                  <div className="single-img-container">
                    <ImgInfoContainer>
                      <div className="relative">
                        <img src={`${onLoadImg}`} alt="img" />
                        <div className="dynamic-img-title-container">
                          <div className="dflex dnone">
                            <p className="title">{onLoadTitle}</p>
                            <ul className="sub-ul">
                              <li>{onLoadSubTitles}</li>
                            </ul>
                          </div>
                          <div className="dflex absoluteData">
                            <p className="title">quick add</p>
                            <ul className="sub-ul">
                              {hoverSubTitles.map((itm, i) => (
                                <li className="dynamic-bracket" key={i}>
                                  {itm}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </ImgInfoContainer>
                    {/* <ShowData obj={obj} /> */}
                  </div>
                </Link>
              </Grid>
            );
          })}
        </Grid>

        <Footer />
      </main>
    </>
  );
};

// function ShowData(obj) {
//   const { onLoadImg, onLoadTitle, onLoadSubTitles, hoverSubTitles } = obj;
//   console.log(onLoadImg, onLoadTitle, onLoadSubTitles, hoverSubTitles);
//   return (
//     <>
//       <ImgInfoContainer>
//         <div className="relative">
//           <img src={`${onLoadImg}`} alt="img" />
//           <div className="dynamic-img-title-container">
//             <div className="dflex dnone">
//               <p className="title">{onLoadTitle}</p>
//               <ul className="sub-ul">
//                 <li>{onLoadSubTitles}</li>
//               </ul>
//             </div>
//             <div className="dflex absoluteData">
//               <p className="title">quick add</p>
//               <ul className="sub-ul">
//                 {hoverSubTitles.map((itm, i) => (
//                   <li className="dynamic-bracket" key={i}>
//                     {itm}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </ImgInfoContainer>
//     </>
//   );
// }

export default ClassicMafiaTee;
