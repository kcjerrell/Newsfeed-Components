// This is the data we will be using to create our articles. Look at it, then proceed to line 93.
// OPTIONAL: if you're feeling adventurous, try to make this data an export from a different module, and import it here.
// You can read about ES6 modules here: https://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules

import articleData from "./ArticleData";

const extraArt = {
  title: "Lorem Ipsum Article",
  date: "May 5th, 2021",
  firstParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    + "At quis risus sed vulputate odio ut enim blandit.Non odio euismod lacinia at.Neque laoreet suspendisse interdum consectetur "
    + "libero id faucibus nisl.Magna etiam tempor orci eu lobortis elementum.Suspendisse potenti nullam ac tortor.",
  secondParagraph: "Penatibus et magnis dis parturient montes nascetur ridiculus mus. Enim sit amet venenatis urna. Elit duis tristique "
    + "sollicitudin nibh.Nec ultrices dui sapien eget mi.Ligula ullamcorper malesuada proin libero nunc consequat.Scelerisque varius morbi "
    + "enim nunc faucibus a.Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper.Morbi tristique senectus et netus et malesuada.",
  thirdParagraph: "Sit amet commodo nulla facilisi nullam vehicula ipsum. Ullamcorper eget nulla facilisi etiam dignissim diam. Ultrices dui "
    + "sapien eget mi proin sed libero.Blandit cursus risus at ultrices mi.Nec tincidunt praesent semper feugiat nibh sed pulvinar.Id porta nibh "
    + "venenatis cras.Nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices.Venenatis cras sed felis eget velit."
};

articleData.push(extraArt);

/*
  Step 1: Write a component called 'articleMaker' to create an article.
  Your component is a function that takes an article object as its only argument,
  and returns a DOM node looking like the one below:

  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class="expandButton">+</span>
  </div>

  Step 2: Still inside `articleMaker`, add an event listener to the span.expandButton.
  This listener should toggle the class 'article-open' on div.article.

  Step 3: Don't forget to return something from your function!

  Step 4: Outside your function now, loop over the data. At each iteration you'll use your component
  to create a div.article element and append it to the DOM inside div.articles (see index.html).

  Step 5: Try adding new article object to the data array. Make sure it is in the same format as the others.
  Refresh the page to see the new article.
*/

function articleMaker({ title, date, firstParagraph, secondParagraph, thirdParagraph }) {
  //const article = document.createElement('div');
  // const title = document.createElement('h2');
  // const date = document.createElement('p');
  // const paragraphs = range(3).map(i => document.createElement('p'));
  // const expandButton = document.createElement('span');

  const articleElement = makeElement('div', { style: 'article' });
  const titleElement = makeElement('h2', { text: title });
  const dateElement = makeElement('p', { style: 'date', text: date });
  const pElements = [firstParagraph, secondParagraph, thirdParagraph].map(p => makeElement('p', { text: p }));
  const expandButton = makeElement('span', { style: 'expandButton', text: '+' });

  expandButton.addEventListener('click', function (event) {
    articleElement.classList.toggle('article-open');
  });

  articleElement.appendChild(titleElement);
  articleElement.appendChild(dateElement);
  articleElement.appendChild(pElements[0]);
  articleElement.appendChild(pElements[1]);
  articleElement.appendChild(pElements[2]);
  articleElement.appendChild(expandButton);

  return articleElement;
}

function makeElement(element, { text, style }) {
  const e = document.createElement(element);

  if (text !== undefined)
    e.textContent = text;

  if (style !== undefined)
    e.classList.add(style);

  return e;
}

articleData.forEach(a => {
  const element = articleMaker(a);
  document.querySelector('div.articles').appendChild(element);
})