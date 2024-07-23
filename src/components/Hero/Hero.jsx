import React from "react"
import { getImageUrl } from "../../util";

export const Hero = () => {
  return (
    <section>
        <div>
            <h1>Hi! I'm Tashwini!</h1>
            <p>I'm an aspiring full-stack developer. Reach out if you would like to learn more!</p>
            <a href="mailto:tashwiniprakasha@gmail.com">Contact Me</a>
        </div>
        <img style={{"width":"300px", "borderRadius":"50%"}} src={getImageUrl("hero/heroImage.jpg")} alt="hero image of me" />
    </section>
  )
};

