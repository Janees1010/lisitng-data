import '@testing-library/jest-dom';
import {render, screen , fireEvent} from "@testing-library/react"
import Home from '../components/Home';

describe("testing home component",()=>{
    
    beforeEach(()=>{
        render(<Home />)
    })

     it("checking input field",()=>{
       const inputField = screen.getByPlaceholderText(/enter name/i)
       expect(inputField).toBeInTheDocument()
     })
     it("checking existance of button",()=>{
       const btn = screen.getByRole("button")
       expect(btn).toBeInTheDocument()
     })
    //  it("checking if the button is disabled",()=>{
    //    const btn = screen.getByRole("button")
    //    expect(btn).toBeDisabled()
    //  })
     it("checking if the button enabling while filling input",()=>{
       const inputField = screen.getByPlaceholderText(/enter name/i)
       fireEvent.change(inputField,{target:{value:"test 123"}})
       const btn = screen.getByRole("button")
       expect(btn).not.toBeDisabled()
     })
     it("checking the add button adds the list",()=>{

       const inputField = screen.getByPlaceholderText(/enter name/i)
       const btn = screen.getByRole("button")
       const notelist = screen.getByTestId("noteslist")

       expect(notelist.querySelectorAll("li")).toHaveLength(0)

       fireEvent.change(inputField,{target:{value:"test 123"}})
       fireEvent.click(btn)

       fireEvent.change(inputField,{target:{value:"test 1235"}})
       fireEvent.click(btn)

       expect(notelist.querySelectorAll("li")).toHaveLength(2)    
     })

})