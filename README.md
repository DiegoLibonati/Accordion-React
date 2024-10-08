# Accordion React

## Getting Started

1. Clone the repository
2. Join to the correct path of the clone
3. Install node_modules with npm install
4. Use npm start to run the app page

## Description

I made a web application with react js that simulates a section of a page, it would be a section of frequently asked questions where they would touch a button to get more information about the question they want to see.

## Technologies used

1. React JS
2. Typescript
3. Tailwind CSS

## Portfolio Link

[`https://www.diegolibonati.com.ar/#/project/Accordion-React`](https://www.diegolibonati.com.ar/#/project/Accordion-React)

## Video

https://github.com/DiegoLibonati/Accordion-App-Page/assets/99032604/d09a3459-fa73-4f79-bea9-ef6ea4f6dcf2

## Documentation

In the `helpers/data.ts` file we get all the questions, it is also possible to add more respecting the format:

```
import { Question } from "../entities/entities";

const questions: Question[] = [
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

In the `Main.tsx` component we will find the `questions` state that by default will have loaded all the information from `helpers/data.ts`:

```
const [question] = useState<QuestionT[]>(questions);
```

In the `Question.tsx` component we will find the following logic. We will have a state called `information` depending if it is true or false it will show information or different components and then you have `isActive` that serves to know if to add classes or not:

```
const [information, setInformation] = useState<boolean>(false);

const handleShowInformation: React.MouseEventHandler<SVGElement> = () => {
  setInformation(prev => !prev);
}
```
