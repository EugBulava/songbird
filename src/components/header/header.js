import React from 'react';
import { Logo } from './logo/logo';
import { Score } from './score/score';
import { Categories } from './catigories/catigories';

export function Header() {
  return (<header>
    <div className="top-head">
      <Logo />
      <Score />
    </div>
    <div className="bottom-head">
      <Categories />
    </div>
  </header>);
}

