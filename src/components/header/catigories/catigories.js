import React from 'react';
import { store } from '../../../core/store';

export function Categories() {

  store.subscribe(() => {
    const level = store.getState().catigoriesReducer.level-1;
    
    const catigories = document.querySelectorAll('.category');

    if(level < 6) {
      catigories.forEach((el) => {
        el.classList.remove('category-active');
      })
      catigories[level].classList.add('category-active');
    }
  })

  return (<ul className="categories">
    <li className="category category-first category-active">Разминка</li>
    <li className="category">Воробьиные</li>
    <li className="category">Лесные птицы</li>
    <li className="category">Певчие птицы</li>
    <li className="category">Хищные птицы</li>
    <li className="category category-last">Морские птицы</li>
  </ul>)
}