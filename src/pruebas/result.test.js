import React from "react";
import { titleCase, ProfileCard } from "../components/ProfileCard";
import {shallow} from 'enzyme';
import { Menu } from "../components/Menu";
const { expect } = require("chai");


describe("Suma", () => {

  it("1 + 1 debería ser 2", () => {
    expect(1 + 1).equal(2);
  });
  it("vamos a ver que pasa", () => {
    expect(titleCase('nada que decir xd')).equal('Nada Que Decir Xd');

  });

  it("prueba de menu", () => {
    const wrapper = shallow(
      <Menu user={"felipe"} />
    );
    expect(wrapper.find('.label').length).equals(1);
  });

});