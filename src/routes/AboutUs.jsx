import React, { useEffect } from "react";
import styled from "styled-components";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <div>
        <h2>🏡 Our Story</h2>
        <p>
          Urban RenderX emerges from a collective ambition fueled by years of
          architectural expertise and an insatiable hunger for innovation. Our
          genesis story is rooted in a group of architects, designers, and
          technologists coming together with a shared dream—to redefine the
          narrative of modern home design through the lens of breathtaking
          rendering. 🌟
        </p>
      </div>
      <div>
        <h2>🌟 Our Vision</h2>
        <p>
          We see design as more than just lines on paper or pixels on a screen;
          it's an immersive experience. Our vision at Urban RenderX is to
          spearhead a movement where design transcends the ordinary, becoming a
          language that communicates emotions, aspirations, and untold stories.
          We strive to catalyze this transformation, forging a path where every
          detail, every curve, and every hue of a rendered design speaks
          volumes.
        </p>
      </div>
      <div>
        <h2>🎨 Our Expertise</h2>
        <p>
          At Urban RenderX, expertise meets artistry. Our team, armed with
          cutting-edge technology and an acute eye for detail, crafts renderings
          that breathe life into architectural concepts. We navigate the
          intricate landscape of design, seamlessly blending form and function,
          light and shadow, to transform ideas into captivating visual
          realities. Every rendering is an ode to creativity and meticulous
          craftsmanship. 🖌️
        </p>
      </div>
      <div>
        <h2>🤝 Our Approach</h2>
        <p>
          Collaboration is our cornerstone. We approach each project not just as
          a rendering task but as a collaborative journey. We listen intently to
          your vision, embracing your ideas, preferences, and aspirations.
          Through an iterative process, we weave your dreams into the fabric of
          our designs, ensuring every element resonates with your vision of a
          perfect home. 🏠
        </p>
      </div>
      <div>
        <h2>🌐 Our Impact</h2>
        <p>
          Our impact goes beyond stunning visuals; it's about setting benchmarks
          and redefining norms. Urban RenderX strives to be a catalyst for
          change in the design landscape. We challenge conventions, push the
          boundaries of creativity, and set new standards, leaving an indelible
          imprint on the evolving canvas of modern design. Our renderings tell
          stories, evoke emotions, and inspire innovation. 🌟
        </p>
      </div>
      <div>
        <h2>🌿 Our Promise</h2>
        <p>
          Urban RenderX stands firm in its promise of unwavering dedication and
          uncompromising excellence. We pledge to consistently deliver
          renderings that exude brilliance, precision, and a seamless fusion of
          art and technology. Our commitment extends beyond the final rendering;
          it's a promise of a transformative journey with us. 🌟
        </p>
      </div>
    </Container>
  );
};
const Container = styled.div`
  padding: 4em 7%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    margin-top: 3em;
    max-width: 1000px;
    h2 {
      font-size: 3vw;
      font-weight: 200;
      text-align: center;
      margin-bottom: 10px;
    }
    p {
      text-align: center;
      color: #aaaaaa;
      font-weight: 300;
    }
  }
  @media (max-width: 700px) {
    div {
      h2 {
        font-size: 8vw;
      }
    }
  }
`;

export default AboutUs;
