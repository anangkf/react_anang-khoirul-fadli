import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import FormCoding from '../components/FormCoding'

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe('FormCoding', () =>{
    it('FormCoding SnapShots', () =>{
        const { container } = render(<FormCoding />);
		expect(container).toMatchSnapshot();
    })
    
    it('test each input to have expected values', () =>{
        render(<FormCoding />)
        // input nama
        const name = screen.getByRole('textbox', {name: /nama/i})
        fireEvent.input(name, 
            {target: {value: 'Anang'}}
            )
        expect(screen.getByLabelText(/nama lengkap/i)).toHaveValue('Anang')
        
        // input email
        const email = screen.getByRole('textbox', {name: /email/i})
        fireEvent.input(email, 
            {target: {value: 'mail@mail.com'}}
            )
        expect(screen.getByLabelText(/email/i)).toHaveValue('mail@mail.com')
        
        // input no handphone
        const phone = screen.getByRole('spinbutton', {name: /no handphone/i})
        fireEvent.input(phone, 
            {target: {value: '081293812931'}}
            )
        expect(screen.getByLabelText(/no handphone/i)).toHaveDisplayValue('081293812931')
        
        // input latar belakang pendidikan
        const background = screen.getByRole('radio', {name: /pendidikan/i})
        const IT = screen.getByLabelText(/IT/)
        const nonIt = screen.getByLabelText(/Non IT/)
        
        fireEvent.change(background)
        fireEvent.click(IT,
            { target: { value: "IT" } }
            );
        fireEvent.click(nonIt,
            { target: { value: "Non IT" } }
            );
        
        expect(screen.getByLabelText(/Latar Belakang Pendidikan:/)).toBeChecked();
        
        // input no handphone
        const selectedClass = screen.getByRole('combobox', {name: /kelas/i})
        userEvent.selectOptions(selectedClass, 'reactjs')
        expect(screen.getByLabelText(/Kelas Coding yang Dipilih:/)).toHaveValue("reactjs");
        
        // input file
        const fileTester = new File(["input"], "input.pdf", { name: /surat kesungguhan/i }, { type: "image/*,.pdf" });
        const fileInput = screen.getByLabelText(/Foto Surat Kesungguhan:/);
        // Check if file has not been choosen
		expect(fileInput.files.length).toBe(0);
		// Check if file has been choosen
		userEvent.upload(fileInput, fileTester);
		expect(fileInput.files.length).toBe(1);

        // input harapan
        const harapan = screen.getByRole("textbox", { name: /harapan/i })
        fireEvent.input(harapan,
            {target: {value: 'semoga lulus dengan nilai yang baik'} }
            );
        expect(screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini:/)).toHaveValue('semoga lulus dengan nilai yang baik');

    })
    // name field validation
    it('test name field if the value given are not valid', () =>{
        render(<FormCoding />)
        const name = screen.getByRole('textbox', {name: /nama/i})
        fireEvent.input(name, 
            {target: {value: 'Anang999'}}
            )
            expect(screen.getByText('Nama Lengkap Harus Berupa Huruf')).toBeInTheDocument()
        })
        
    // email field validation
    it('test email field if the value given are not valid', () =>{
        render(<FormCoding />)
        const email = screen.getByRole('textbox', {name: /email/i})
        fireEvent.input(email, 
            {target: {value: 'mailmailcom'}}
            )
        expect(screen.getByText('Email Tidak Sesuai')).toBeInTheDocument() 
    })
        
    // phone field validation
    it('test phone field if the value given are less than 9 or more than 14', () =>{
        render(<FormCoding />)
        const phone = screen.getByRole('spinbutton', {name: /no handphone/i})
        fireEvent.input(phone, 
            {target: {value: '08718721'}}
            )
        fireEvent.input(phone, 
            {target: {value: '087187218192812'}}
            )
        expect(screen.getByText('No Handphone Tidak Sesuai')).toBeInTheDocument() 
    })

    // check if user hit submit button
    it('test if user hit the submit button', () =>{
        render(<FormCoding />)
        const alertMock = jest.spyOn(window, "alert").mockImplementation();

        const name = screen.getByRole('textbox', {name: /nama/i})
        fireEvent.input(name, 
            {target: {value: 'Anang'}}
            )
        expect(screen.getByLabelText(/nama lengkap/i)).toHaveValue('Anang')

        const btnSubmit = screen.getByRole("button", { name: /submit/i })
        fireEvent.click(btnSubmit);
        expect(alertMock).not.toBe();
    })

    // check if user hit submit button with incomplete form
    it('test if user submitted incomplete form', () =>{
        render(<FormCoding />)

        const alertMock = jest.spyOn(window, "alert").mockImplementation();
        const name = screen.getByRole('textbox', {name: /nama/i})
        fireEvent.input(name, 
            {target: {value: ''}}
            )
        expect(screen.getByLabelText(/nama lengkap/i)).toHaveValue('')
        expect(screen.getByLabelText(/Nama Lengkap:/)).toBeRequired();
        
        // input email
        const email = screen.getByRole('textbox', {name: /email/i})
        fireEvent.input(email, 
            {target: {value: ''}}
            )
        expect(screen.getByLabelText(/email/i)).toHaveValue('')
        expect(screen.getByLabelText(/Email:/)).toBeRequired();
        
        // input no handphone
        const phone = screen.getByRole('spinbutton', {name: /no handphone/i})
        fireEvent.input(phone, 
            {target: {value: ''}}
            )
        expect(screen.getByLabelText(/no handphone/i)).toHaveDisplayValue('')
        expect(screen.getByLabelText(/No Handphone:/)).toBeRequired();
        
        // input latar belakang pendidikan
        const background = screen.getByRole('radio', {name: /pendidikan/i})
        const IT = screen.getByLabelText(/IT/)
        const nonIt = screen.getByLabelText(/Non IT/)
        fireEvent.change(background)
        fireEvent.click(IT,
            { target: { value: "" } }
            );
        fireEvent.click(nonIt,
            { target: { value: "" } }
            );
        expect(screen.getByLabelText(/Latar Belakang Pendidikan:/)).not.toBeChecked()
        expect(screen.getByLabelText(/Latar Belakang Pendidikan:/)).toBeRequired();
        
        // input no handphone
        const selectedClass = screen.getByRole('combobox', {name: /kelas/i})
        userEvent.selectOptions(selectedClass, 'reactjs')
        expect(screen.getByLabelText(/Kelas Coding yang Dipilih:/)).toHaveValue("reactjs");
        
        // input file
        const fileTester = new File(["input"], "input.pdf", { name: /surat kesungguhan/i }, { type: "image/*,.pdf" });
        const fileInput = screen.getByLabelText(/Foto Surat Kesungguhan:/);
        // Check if file has not been choosen
		expect(fileInput.files.length).toBe(0);
		// Check if file has been choosen
		userEvent.upload(fileInput, fileTester);
		expect(fileInput.files.length).toBe(1);

        // input harapan
        const harapan = screen.getByRole("textbox", { name: /harapan/i })
        fireEvent.input(harapan,
            {target: {value: 'semoga lulus dengan nilai yang baik'} }
            );
        expect(screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini:/)).toHaveValue('semoga lulus dengan nilai yang baik');

        const btnSubmit = screen.getByRole("button", { name: /submit/i })
        fireEvent.click(btnSubmit);
        expect(alertMock).not.toBe();
    })

    // check if user submitted invalid data
    it('check if user hit submit button when there are invalid data', () =>{
        render(<FormCoding />)
        const alertMock = jest.spyOn(window, "alert").mockImplementation();

        const name = screen.getByRole('textbox', {name: /nama/i})
        fireEvent.input(name, 
            {target: {value: 'Anang999'}}
            )
        expect(screen.getByText('Nama Lengkap Harus Berupa Huruf')).toBeInTheDocument()
            
        const email = screen.getByRole('textbox', {name: /email/i})
        fireEvent.input(email, 
            {target: {value: 'mailmailcom'}}
            )
        expect(screen.getByText('Email Tidak Sesuai')).toBeInTheDocument() 

        const phone = screen.getByRole('spinbutton', {name: /no handphone/i})
        fireEvent.input(phone, 
            {target: {value: '08718721'}}
            )
        fireEvent.input(phone, 
            {target: {value: '087187218192812'}}
            )
        expect(screen.getByText('No Handphone Tidak Sesuai')).toBeInTheDocument() 

        const btnSubmit = screen.getByRole("button", { name: /submit/i })
        fireEvent.click(btnSubmit);
        expect(alertMock).not.toBe();
    })
        
})