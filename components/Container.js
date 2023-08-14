import Genre from "./Genre.js";
import gmaBoy from "../assets/gmasboy.jpg";
import stepBros from "../assets/stepbros.jpg";
import notebook from "../assets/notebook.jpg";
import ageadaline from "../assets/ageofadaline.jpg";

export default function Container() {
  return (
    <>
      <h1>Movie App</h1>
      <Genre
        name="Comedy"
        description="Comedy is a genre of fiction that consists of discourses or works intended to be humorous or amusing by inducing laughter."
        movieTitle1="Grandma's Boy"
        movieDesc1="A thirty-five-year-old video game tester has to move in with his grandma and her two old lady roommates."
        movieYear1="2006"
        movieImg1={gmaBoy}
        movieTitle2="Step Brothers"
        movieDesc2="Two aimless middle-aged losers still living at home are forced against their will to become roommates when their parents marry."
        movieYear2="2008"
        movieImg2={stepBros}
      ></Genre>
      <Genre
        name="Romance"
        description="Romance genre stories involve chivalry and often adventure. The prevailing type of story in the romance genre consists of a love relationship between a man and a woman."
        movieTitle1="The Notebook"
        movieDesc1="A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom. However, social differences soon get in the way."
        movieYear1="2004"
        movieImg1={notebook}
        movieTitle2="The Age of Adaline"
        movieDesc2="A young woman, born at the turn of the 20th century, is rendered ageless after an accident. After many solitary years, she meets a man who complicates the eternal life she has settled into."
        movieYear2="2015"
        movieImg2={ageadaline}
      ></Genre>
    </>
  );
}
