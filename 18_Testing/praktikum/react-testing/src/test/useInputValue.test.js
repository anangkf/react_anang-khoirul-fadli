import { renderHook } from "@testing-library/react-hooks"
import { act } from "react-dom/test-utils";
import { useInputValue } from '../useInputValue'

describe('custom hook for user input', () =>{
    // render component
    it('render component',() =>{
        const {result} = renderHook(() => useInputValue());
        expect(result.current.onChange).toBeInstanceOf(Function);
    })
    
    // test if selected element has target.value
    it('use input value for input.target.value', () =>{
        const {result} = renderHook(() => useInputValue());
        act(() =>{
            result.current.onChange({target: {value: 'input from user'}})
        })

        expect(result.current.value).toBe('input from user')
    })
    
    // test if selected element has target.innerText
    it('use input value for input.target.innerText', () =>{
        const {result} = renderHook(() => useInputValue());
        act(() =>{
            result.current.onChange({target: {innerText: 'input from user'}})
        })

        expect(result.current.value).toBe('input from user')
    })
})