import React from 'react'
import Login from '../components/Auth/Login'
import LoginForm from '../components/Auth/Login/LoginForm';
import Modal from '../components/Common';
import { render, fireEvent } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import {mount,shallow} from 'enzyme';


describe("Login", () => {

  describe("is button valid", () => {
    it('have to go to Register page', async () => {
      const spy = jest.fn();
      const wrapper = mount(<Login goToRegister={spy}/>);
      const button = wrapper.find('.register');

      button.simulate("click");
      expect(spy).toBeCalled();
    })
  })

  describe("is button valid", () => {
    it('have to open login modal', async () => {
      const spy = jest.fn();
      const wrapper = mount(<Login showLoginModal={spy}/>);
      const button = wrapper.find('.login');
      expect(wrapper.find('Modal').prop('show')).toEqual(false);

      button.simulate("click");

      expect(spy).toBeCalled();
      expect(wrapper.find('Modal').prop('show')).toEqual(true);
    })
  })
  // describe("with invalid email", () => {
  //   it("renders the email validation error", async () => {
  //     const {getByPlaceholderText, getByText,getByRole} = render(<Login />)

  //     await act(async () => {
  //       const emailInput = getByPlaceholderText('email')
  //       fireEvent.change(emailInput, {target: {value: ""}})
  //       fireEvent.click(getByRole("button"))
  //     })

  //     expect(getByText('Reqired')).not.toBeInTheDocument()
 
  //   })
  // })

  //   describe("with invalid password", () => {
  //   it("renders the password validation error", async () => {
  //     const {getByPlaceholderText, getByText,getByRole} = render(<Login />)

  //     await act(async () => {
  //       const passwordInput = getByPlaceholderText('password')
  //       fireEvent.change(passwordInput, {target: {value: "123"}})
  //       fireEvent.click(getByRole('button'))
  //     })

  //     expect(getByText('Password should be longer than 6 characters')).toBeInTheDocument()
 
  //   })
  // })
})