/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen, act, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import Search from '../components/Search'

jest.mock('axios');


describe('Search Components', () =>{    
    
    // success fetch API then display the data
    it('success fetch stories from API then display them', async () =>{
        render(<Search />)
        const stories = [
            {storyID: '1', title: 'first'},
            {storyID: '2', title: 'second'}
        ];
        
        axios.get.mockImplementationOnce(() =>
            Promise.resolve({ data: { hits: stories } })
        )
        
        await act(async() =>{
            await userEvent.click(screen.getByRole('button'));
        })
        
        const items = await screen.findAllByRole('listitem')
        
		expect(items).toHaveLength(2);
    })

    // failed fetch API
    it('failed to fetch data from API', async() =>{
        render(<Search />)

        axios.get.mockImplementationOnce(() => 
            Promise.reject(new Error()
        ));

        await act(async () =>{
            await userEvent.click(screen.getByRole('button'))
        })

        const errMsg = await screen.findByText("Ada yang error ...");
        expect(errMsg).toBeInTheDocument();
    })

    // record changes on the input field
    it('searchbox inputted by user', async() =>{
        render(<Search />)

        axios.get.mockImplementationOnce(() =>
            Promise.resolve({ data: { vaue: '' } })
        )

        await act(async() =>{
            const input = screen.getByRole('textbox')
            await fireEvent.input(input, {
                    target: {
                        value: 'Fullstack MERN 2022'
                    }
                })
            
            const inputTxt = await screen.findByPlaceholderText(/Tulis Cerita/);

            expect(inputTxt).toHaveValue('Fullstack MERN 2022');
        })
    })
})