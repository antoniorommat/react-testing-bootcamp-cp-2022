const DateImg = () => {
  const dateValue = new Date().toLocaleDateString('en-CA');

  return (
    <>
      <label htmlFor='pictureDate'>Select the picture date</label>
      <input type="date" id="pictureDate" defaultValue={dateValue} />
    </>
  )
};

export default DateImg;
