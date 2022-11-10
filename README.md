# Accordion-App-Page

## Getting Started

1. Clone the repository
2. Join to the correct path of the clone
3. Install node_modules with npm install
4. Use npm start to run the app page

## Description

I made a web application with react js that simulates a section of a page, it would be a section of frequently asked questions where they would touch a button to get more information about the question they want to see.

## Technologies used

1. React JS
2. CSS3

## Galery

![Accordion-App-Page](https://raw.githubusercontent.com/DiegoLibonati/DiegoLibonatiWeb/main/data/projects/React/Imagenes/accordion-0.jpg)

![Accordion-App-Page](https://raw.githubusercontent.com/DiegoLibonati/DiegoLibonatiWeb/main/data/projects/React/Imagenes/accordion-1.jpg)

![Accordion-App-Page](https://raw.githubusercontent.com/DiegoLibonati/DiegoLibonatiWeb/main/data/projects/React/Imagenes/accordion-2.jpg)

![Accordion-App-Page](https://raw.githubusercontent.com/DiegoLibonati/DiegoLibonatiWeb/main/data/projects/React/Imagenes/accordion-3.jpg)

## Portfolio Link

`https://diegolibonati.github.io/DiegoLibonatiWeb/#/projects?q=Accordion%20app%20page`

## Video

https://user-images.githubusercontent.com/99032604/199128577-5fe79c8e-4a92-4a92-96ac-1dab86ecb52b.mp4

## Documentation

In the `helpers/data.js` file we get all the questions, it is also possible to add more respecting the format:

```
const questions = [
  {
    id: 1,
    title: "Do I have to allow the use of cookies?",
    info: "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
  },
  {
    id: 2,
    title: "How do I change my My Page password?",
    info: "Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.",
  },
  {
    id: 3,
    title: "What is BankID?",
    info: "Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.",
  },
  {
    id: 4,
    title: "Whose birth number can I use?",
    info: "Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.",
  },
  {
    id: 5,
    title: "When do I recieve a password ordered by letter?",
    info: "Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan ",
  },
];
export default questions;
```

In the `Main.jsx` component we will find the `questions` state that by default will have loaded all the information from `helpers/data.js`:

```
const [question] = useState(questions);
```

In the `Question.jsx` component we will find the following logic. We will have a state called `information` depending if it is true or false it will show information or different components and then you have `isActive` that serves to know if to add classes or not:

```
const [information, setInformation] = useState(false);
const [isActive, setIsActive] = useState(false);

const handleShowInformation = (e) => {
  if (!information) {
    setInformation(true);
    setIsActive(true);
  } else {
    setInformation(false);
    setIsActive(false);
  }
};
```
