import React, { useEffect } from "react";
import styled from "styled-components";
import bannerImg from "../assets/portfolioBannerImg.jpg";

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <div className="banner">
        <img src={bannerImg} alt="" />
        <h1>
          Discover our <br /> design symphony.
        </h1>
        <p>
          Explore our curated portfolio showcasing a tapestry of modern design
          renditions.
        </p>
      </div>
      <div className="portfolio">
        <div className="renderType">
          <h1 className="title">INTERIOR</h1>
          <div className="pics">
            <img
              src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/294425971/original/dd4a7cc46a230d040e75f84bb68353f0e359812c/create-interior-design-and-realistic-3d-rendering-0590.jpg"
              alt=""
            />
            <img
              src="https://as1.ftcdn.net/v2/jpg/03/30/63/88/1000_F_330638888_F07bpErt9KE9PLAZvHlRJCfXdaoUmHBs.jpg"
              alt=""
            />
            <img
              src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/148899658/original/ed1c2fc77c8d08c817805575f8f4ec23aacb1151/do-photorealistic-modern-3d-rendering-of-interior-design.jpg"
              alt=""
            />
            <img
              src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/166084964/original/c5881f85a21b515716a265659b591e4fd68388a1/3d-max-interior-design-modeling-and-render.jpg"
              alt=""
            />
            <img
              src="https://netrinoimages.s3.eu-west-2.amazonaws.com/2019/12/08/664594/353560/modern_toilet_bathroom_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_3690888.jpg"
              alt=""
            />
            <img
              src="https://arredocad.fra1.digitaloceanspaces.com/storage/app/media/landing/bedroom/slide-bedroom-3.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="renderType">
          <h1 className="title">EXTERIOR</h1>
          <div className="pics">
            <img
              src="https://applet3d.com/wp-content/uploads/2021/08/exterior-rendering-atwood-crescent-1024x576.jpg"
              alt=""
            />
            <img
              src="https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/307532533/original/a7967f5ae7892867eba9bbc93a92981a14fb8ab8.jpg"
              alt=""
            />
            <img
              src="https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs2/265429453/original/afe5b8446ae25fcbdca3158594c937e728c0df1c.jpg"
              alt=""
            />
            <img
              src="https://archicgi.com/wp-content/uploads/2022/08/3d-rendering-villa-exterior.jpg"
              alt=""
            />
            <img
              src="https://hrarchz.com/wp-content/uploads/2022/08/02-scaled.jpg"
              alt=""
            />
            <img
              src="https://image.slidesdocs.com/responsive-images/background/visualizing-a-3d-render-of-modern-house-architecture-on-the-exterior-powerpoint-background_2df32c8e04__960_540.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="renderType">
          <h1 className="title">COMMERCIAL</h1>
          <div className="pics">
            <img
              src="https://d1swvgohc7oxrg.cloudfront.net/filer_public/42/74/4274c008-5752-4f6b-87a9-097751980edd/yellow-1-1.png"
              alt=""
            />
            <img
              src="https://d1swvgohc7oxrg.cloudfront.net/filer_public/8d/29/8d29f2fb-1d1c-40ff-b187-881628360c6a/exterior_view_2_copy.jpg"
              alt=""
            />
            <img
              src="https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs2/265429453/original/afe5b8446ae25fcbdca3158594c937e728c0df1c.jpg"
              alt=""
            />
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/c44720114260627.6037b3eac0e2d.jpg"
              alt=""
            />
            <img
              src="https://assets-global.website-files.com/5894a32730554b620f7bf36d/643816e5b6fe48b6b39e20ff_611e227632d3162c0ac52e29_Inspiring-Architectural-Designs-for-Your-Next-Commercial-Project-EASY-RENDER.jpeg"
              alt=""
            />
            <img
              src="https://images.squarespace-cdn.com/content/v1/544097e1e4b02c9e7d3761d0/1414536935027-I8TIW4VCHEK3MWR2WFTN/3d-exterior-commercial-rendering-office-building.jpg?format=1500w"
              alt=""
            />
          </div>
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  overflow-x: hidden;
  .banner {
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    img {
      width: 100%;
      height: 90vh;
      object-fit: cover;
      filter: brightness(0.3);
      position: absolute;
      z-index: -1;
    }
    h1 {
      margin: 0 8%;
      font-size: 8vw;
      line-height: 1.1em;
      font-weight: 400;
    }
    p {
      padding: 0 8%;
      margin-top: 1em;
    }
  }
  .portfolio {
    padding: 2em 7%;
    .renderType {
      h1 {
        font-size: 7vw;
        font-weight: 200;
        margin: 1em 0 10px 0;
      }
      .pics {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1em;
        flex-wrap: wrap;
        img {
          width: 300px;
          height: 30vh;
          object-fit: cover;
          :nth-child(2) {
            margin-top: 3em;
          }
          :nth-child(5) {
            margin-top: 3em;
          }
        }
      }
    }
  }
  @media (max-width: 720px) {
    .portfolio {
      .renderType {
        .pics {
          img {
            width: 100%;
            height: 40vh;
            :nth-child(2) {
              margin-top: 0em;
            }
            :nth-child(5) {
              margin-top: 0;
            }
          }
        }
      }
    }
  }
  @media (max-width: 600px) {
    .banner {
      h1 {
        font-size: 13vw;
      }
    }
  }
`;

export default Portfolio;
