import './css/main.css';
import people from './modules/people';
import $ from 'jquery';

people.forEach(({ name, age }) =>
  $('body').append(`<h2>Hello ${name}, ${age}</h2>`)
);

$.each(people, (index, person) => {
  const { name } = person;
  $('body').append(`<h2>${name}</h2>`);
});
