import React from 'react'
import Login from '../Login'
import { render, fireEvent } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

describe("Login", () => {
  describe("with valid inputs", () => {
    it('calls the onSubmit function', async () => {
      const mockOnSubmit = jest.fn()
      const {getByLabelText, getByRole} = render(<Login/>)

      await act(async () => {
        fireEvent.change(getByLabelText("Email"), {target: {value: "email@test.com"}})
      })

      await act(async () => {
        fireEvent.click(getByRole("button"))
      })

      expect(mockOnSubmit).toHaveBeenCalled()
    })
  })

  describe("with invalid email", () => {
    it("renders the email validation error", async () => {
      const {getByLabelText, getByText,getByRole} = render(<Login />)

      await act(async () => {
        const emailInput = getByLabelText('Email')
        fireEvent.change(emailInput, {target: {value: "invalid email"}})
        fireEvent.click(getByRole("button"))
      })

      expect(getByText('Enter a valid email')).toBeInTheDocument()
 
    })
  })

    describe("with invalid password", () => {
    it("renders the password validation error", async () => {
      const {getByLabelText, getByText,getByRole} = render(<Login />)

      await act(async () => {
        const passwordInput = getByLabelText('Password')
        fireEvent.change(passwordInput, {target: {value: "123"}})
        fireEvent.click(getByRole("button"))
      })

      expect(getByText('Password should be longer than 6 characters')).toBeInTheDocument()
 
    })
  })
})