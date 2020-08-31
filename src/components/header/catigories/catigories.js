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
    <li className="category category-first category-active">Курообразные</li>
    <li className="category">Гусеобразные</li>
    <li className="category">Голенастые</li>
    <li className="category">Ржанкообразные</li>
    <li className="category">Синицевые</li>
    <li className="category category-last">Вьюрковые</li>
  </ul>)
}