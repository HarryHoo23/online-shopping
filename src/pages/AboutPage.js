import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="hero bcg desk" />
        <article>
          <div className="title">
            <h2>Our story</h2>
            <div className="underline"></div>
          </div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nisi unde perspiciatis, magnam veniam exercitationem voluptas laborum tempore, sequi autem quibusdam voluptatibus. Dolor, excepturi facere? Exercitationem inventore eos aut eaque consequatur minus maiores, sed voluptas neque perspiciatis temporibus quas totam consequuntur animi. Porro expedita, obcaecati consectetur rerum dolores voluptatem. Hic?</p>
        </article>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
