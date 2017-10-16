import React from "react";
import { shallow, mount, render } from "enzyme";
import { expect } from "chai";
import NicknameSelector from "../src/components/NicknameSelector";

describe("NicknameSelectorTest", () => {
   it("should pass", () => {
       expect(true).to.be.true;
   });

   it("should be disabled without an input", () => {
       const wrapper = shallow(<NicknameSelector />);

       const button = wrapper.find("button");
       expect(button.props().disabled).to.be.true;

   });
});