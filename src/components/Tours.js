import Card from './Card';

function Tours({tours,removeTour}) {
  return (
    <div className='container'>
      <div>
        <h2 className='title'>Plan with yawar</h2>
      </div>

      <div className='cards'>
        {
            tours.map((tour) => {
                return <Card {...tour} removeTour={removeTour}/>;
            })
        }
      </div>
    </div>
  );
}

export default Tours;
