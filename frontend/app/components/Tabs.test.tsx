// fetchData.test.ts
import '@testing-library/jest-dom';
import {render, screen} from "@testing-library/react"
import Home from '../components/Home';

// import { fetchData } from "../components/Tabs";
// import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";

// // Mock axios module
// jest.mock("axios");
// const mockedAxios = axios as jest.Mocked<typeof axios>;

// describe("fetchData", () => {
//   it("should fetch data based on category and page", async () => {
//     const mockResponse: AxiosResponse = {
//       data: {
//         data: [{ name: "Item 1", description: "Mocked data" }],
//         Technology: 10,
//       },
//       status: 200, 
//       statusText: "OK",
//       headers: {},
//       config: {
//         headers: {},
//         method: "get",
//         url: "http://localhost:4000/getData",
//         timeout: 0,
//         withCredentials: false,
//         transitional: {},
//       } as InternalAxiosRequestConfig,
//     };

//     mockedAxios.get.mockResolvedValue(mockResponse);

//     const result = await fetchData( "Technology",1);

//     expect(mockedAxios.get).toHaveBeenCalledWith("http://localhost:4000/getData", {
//       params: { category: "Technology", page: 1 },
//     });

//     expect(result).toEqual(mockResponse.data);
//   });
// });

function sum (a:number,b:number){
  return a+b
}

test("sum function",()=>{
    expect(sum(2,2)).toBe(4)
    expect(sum(3,3)).not.toBe(5)
})

test("object validation",()=>{
    const obj:any = {"one":1}
    obj["two"] = 2
    expect(obj).toEqual({"one":1,"two":2})
})

test('there is a "stop" in Christoph',()=>{
    expect("Christoph").toMatch(/stop/)
})
const fetchData = ()=>{
    return new Promise((res,rej)=>{
        res("helloworld")
    })
}

describe("asyncrounous functions testing", () => {

    // test("fetching data",async()=>{
    //     const data = await fetchData()
    //     expect(data).toEqual("helloworld")
    // })
    
    beforeEach(()=>{
        render(<Home />)
    })

    it("checking text in tab component",()=>{
        const text = screen.getByText(/home/i);
        expect(text).toBeInTheDocument()
    })

    it("checking text in tab component",()=>{
        const text = screen.getByRole("heading",{level:1});
        expect(text).toBeInTheDocument()
    })
})


