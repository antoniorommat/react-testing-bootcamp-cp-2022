import { DivDate } from "./InputDate.styles";

const InputDate = ({handleChange}) => {
  const dateValue = new Date().toLocaleDateString('en-CA');

  return (
    <DivDate>
      <label htmlFor='pictureDate'>Select the picture date</label>
      <input 
        type="date" 
        id="pictureDate" 
        defaultValue={dateValue} 
        onChange={handleChange} 
      />
    </DivDate>
  )
};

export default InputDate;
