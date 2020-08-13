import React from 'react'
import Login from '../components/auth/Login'
import { render, fireEvent } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

describe("Login", () => {
  // describe("with valid inputs", () => {
  //   it('calls the onSubmit function', async () => {
  //     const mockOnSubmit = jest.fn()
  //     const {getByPlaceholderText, getByRole} = render(<Login/>)

  //     await act(async () => {
  //       fireEvent.change(getByPlaceholderText("email"), {target: {value: "email@test.com"}})
  //     })

  //     await act(async () => {
  //       fireEvent.click(getByRole("button"))
  //     })

  //     expect(mockOnSubmit).toHaveBeenCalled()
  //   })
  // })

  describe("with invalid email", () => {
    it("renders the email validation error", async () => {
      const {getByPlaceholderText, getByText,getByRole} = render(<Login />)

      await act(async () => {
        const emailInput = getByPlaceholderText('email')
        fireEvent.change(emailInput, {target: {value: ""}})
        fireEvent.click(getByRole("button"))
      })

      expect(getByText('Reqired')).not.toBeInTheDocument()
 
    })
  })

    describe("with invalid password", () => {
    it("renders the password validation error", async () => {
      const {getByPlaceholderText, getByText,getByRole} = render(<Login />)

      await act(async () => {
        const passwordInput = getByPlaceholderText('password')
        fireEvent.change(passwordInput, {target: {value: "123"}})
        fireEvent.click(getByRole('button'))
      })

      expect(getByText('Password should be longer than 6 characters')).toBeInTheDocument()
 
    })
  })
})